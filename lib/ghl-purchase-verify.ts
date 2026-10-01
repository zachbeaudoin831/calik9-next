/**
 * Verify a GHL purchase against GHL's own payments API.
 *
 * Used by the GHL → Shopify fulfillment bridge when a workflow webhook arrives
 * without an `order` object (the "Payment Received" trigger sends none). Rather
 * than trusting the payload shape, we look up the contact's latest succeeded
 * payment and only proceed when it is:
 *   - fresh (within the window — the webhook fires seconds after the charge),
 *   - from a native GHL checkout (form / funnel / payment link / invoice …),
 *     never a Shopify import ("external") — that is what caused the order loop,
 *   - the first payment on its order, not a subscription renewal or a later
 *     invoice installment (those reuse the original order id and would otherwise
 *     re-ship the product on every charge).
 *
 * Fail closed: any doubt → { ok: false, reason } and the bridge skips.
 *
 * Token: GHL_API_TOKEN (needs the "View Payment Transactions" scope).
 */

const GHL = "https://services.leadconnectorhq.com";
const VERSION = "2021-07-28";
export const GHL_LOCATION_ID = (process.env.GHL_LOCATION_ID || "9RVPGbjB6dCgPVsRbKEE").trim();

// GHL-native checkout sources. Anything else (notably "external" = Shopify import) is refused.
const NATIVE_SOURCES = new Set(["form", "funnel", "payment_link", "invoice", "website", "store"]);
const DEFAULT_WINDOW_MS = 30 * 60 * 1000;

type Txn = {
  _id: string;
  status?: string;
  amount?: number;
  createdAt: string;
  entityId?: string;
  entitySourceType?: string;
  entitySourceSubType?: string;
  entitySourceName?: string;
  paymentProviderType?: string;
  chargeSnapshot?: { description?: string; charges?: { data?: { description?: string }[] } };
};

export type VerifyResult =
  | { ok: true; orderId: string; source: string; sourceType: string; amount: number }
  | { ok: false; reason: string; retryable?: boolean };

export function ghlToken(): string {
  let t = (process.env.GHL_API_TOKEN || "").trim();
  t = t.replace(/^GHL_API_TOKEN\s*=\s*/i, "").replace(/^["']|["']$/g, "").replace(/^Bearer\s+/i, "").trim();
  return t;
}

async function transactions(query: string): Promise<{ ok: boolean; status: number; data: Txn[] }> {
  const res = await fetch(`${GHL}/payments/transactions?altId=${GHL_LOCATION_ID}&altType=location&${query}`, {
    headers: { Authorization: `Bearer ${ghlToken()}`, Version: VERSION, Accept: "application/json" },
    cache: "no-store",
  });
  const json = (await res.json().catch(() => ({}))) as { data?: Txn[] };
  return { ok: res.ok, status: res.status, data: Array.isArray(json.data) ? json.data : [] };
}

/** Cheap health check for the status endpoint: can the token read transactions? */
export async function ghlVerifyStatus(): Promise<string> {
  if (!ghlToken()) return "GHL_API_TOKEN not set";
  try {
    const r = await transactions("limit=1");
    return r.ok ? "ok" : `HTTP ${r.status} (token needs the View Payment Transactions scope)`;
  } catch (e) {
    return e instanceof Error ? e.message : String(e);
  }
}

function describe(t: Txn): string {
  return t.chargeSnapshot?.description || t.chargeSnapshot?.charges?.data?.[0]?.description || "";
}

/** Pure decision over a contact's transactions — exported for tests. */
export function decide(txns: Txn[], now: number, windowMs = DEFAULT_WINDOW_MS): VerifyResult {
  const succeeded = txns
    .filter((t) => t.status === "succeeded" && new Date(t.createdAt).getTime() <= now + 60_000)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const latest = succeeded[0];
  if (!latest) return { ok: false, reason: "No succeeded GHL payment found for this contact", retryable: true };

  const ageMs = now - new Date(latest.createdAt).getTime();
  if (ageMs > windowMs) {
    return {
      ok: false,
      reason: `Latest GHL payment for this contact is ${Math.round(ageMs / 60000)} min old — not the purchase that fired this webhook`,
      retryable: true,
    };
  }

  const src = String(latest.entitySourceType || "").toLowerCase();
  const isExternal =
    src === "external" ||
    String(latest.entitySourceSubType || "").toLowerCase() === "shopify" ||
    String(latest.paymentProviderType || "").toLowerCase() === "external";
  if (isExternal) return { ok: false, reason: `GHL order source "external" is not a GHL checkout` };
  if (!NATIVE_SOURCES.has(src)) return { ok: false, reason: `GHL payment source "${src || "unknown"}" is not an allowed checkout source` };

  if (!latest.entityId) return { ok: false, reason: "GHL payment has no order id" };
  const earlierOnSameOrder = succeeded.some((t) => t._id !== latest._id && t.entityId === latest.entityId);
  if (describe(latest) === "Subscription update" || earlierOnSameOrder) {
    return { ok: false, reason: "Repeat payment on an existing order (renewal or installment), not a new purchase — nothing to ship" };
  }

  return {
    ok: true,
    orderId: latest.entityId,
    source: latest.entitySourceName || src,
    sourceType: src,
    amount: Number(latest.amount) || 0,
  };
}

/**
 * Look up the contact's latest payment and decide. Retries briefly in case the
 * webhook beats the transaction into GHL's API.
 */
export async function verifyGhlPurchase(contactId: string, now = Date.now(), attempts = 3): Promise<VerifyResult> {
  if (!contactId) return { ok: false, reason: "No GHL order id and no contact id in payload" };
  if (!ghlToken()) return { ok: false, reason: "No GHL order id in payload and GHL_API_TOKEN is not set, so the purchase could not be verified" };
  let last: VerifyResult = { ok: false, reason: "not checked" };
  const started = Date.now();
  for (let i = 0; i < attempts; i++) {
    if (i > 0) await new Promise((r) => setTimeout(r, 4000));
    let r: Awaited<ReturnType<typeof transactions>>;
    try {
      r = await transactions(`contactId=${encodeURIComponent(contactId)}&limit=100`);
    } catch (e) {
      last = { ok: false, reason: `Could not reach GHL to verify the purchase: ${e instanceof Error ? e.message : String(e)}`, retryable: true };
      continue;
    }
    if (!r.ok) {
      last = { ok: false, reason: `Could not verify the purchase with GHL (HTTP ${r.status})`, retryable: r.status >= 500 || r.status === 429 };
      if (!last.retryable) return last;
      continue;
    }
    last = decide(r.data, now + (Date.now() - started));
    if (last.ok || !last.retryable) return last;
  }
  return last;
}
