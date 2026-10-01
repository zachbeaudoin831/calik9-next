import { NextResponse } from "next/server";
import { ghlVerifyStatus, verifyGhlPurchase } from "@/lib/ghl-purchase-verify";

/**
 * GHL → Shopify fulfillment bridge.
 *
 * When someone buys a physical product (Training Kit, Turbo Treats) through a
 * GoHighLevel checkout, a GHL workflow POSTs here. We create a matching
 * Shopify order for $0 (100% "Prepaid via GHL" discount), marked PAID, with
 * the customer's shipping details — so the fulfillment company's Shopify app
 * picks it up exactly like a manually-created order, and nobody has to enter
 * a company card.
 *
 * Required Vercel env vars (Settings → Environment Variables):
 *   SHOPIFY_STORE_DOMAIN         e.g. cali-k9.myshopify.com  (falls back to NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN)
 *   SHOPIFY_CLIENT_ID            from the Dev Dashboard app (App settings) — the app needs scopes
 *   SHOPIFY_CLIENT_SECRET          write_orders, read_orders, read_products, write_customers and must be
 *                                installed on the store. Tokens are minted via the client-credentials
 *                                grant and cached in memory (they last ~24h).
 *   SHOPIFY_ADMIN_API_TOKEN      alternative: a permanent shpat_… token from a legacy custom app
 *   SHOPIFY_PRODUCT_MAP          JSON: {"kit":"<variantId>","treats-beef":"<variantId>","treats-chicken":"<variantId>"}
 *   GHL_SHOPIFY_WEBHOOK_SECRET   any long random string; GHL sends it back so we know the call is real
 *
 * GHL workflow → Webhook action:
 *   POST https://calik9.com/api/shopify/ghl-order
 *   Header  x-webhook-secret: <GHL_SHOPIFY_WEBHOOK_SECRET>   (or send it as custom data key "secret")
 *   Custom data:
 *     items    "kit"  |  "kit,treats-beef"  |  "treats-chicken"   (keys from SHOPIFY_PRODUCT_MAP)
 *     order_id {{order.id}}   — anything unique per purchase; used to prevent duplicate Shopify orders
 *   Contact fields (name / email / phone / address) come through automatically on GHL webhooks;
 *   any of them can also be overridden explicitly in custom data (first_name, last_name, email,
 *   phone, address1, address2, city, state, postal_code, country).
 *
 * Triggers: "Order Submitted" webhooks carry GHL's order object and are checked
 * from the payload. "Payment Received" webhooks carry no order object, so the
 * purchase is verified against GHL's payments API instead (lib/ghl-purchase-verify.ts,
 * needs GHL_API_TOKEN with the View Payment Transactions scope): fresh, from a
 * native GHL checkout (never a Shopify import), and not a subscription renewal.
 *
 * GET this URL to see whether the endpoint is configured (never reveals secrets).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const API_VERSION = "2025-01";
const ENDPOINT_VERSION = 4; // bump to confirm which build is live

type ProductMap = Record<string, string>;

// Accepts JSON ({"kit":"123"}) or a simple list (kit=123, treats-beef=456),
// and forgives the usual copy/paste damage: smart quotes, a wrapping pair of
// quotes, or the KEY= prefix pasted into the value box.
function parseProductMap(raw: string): { productMap: ProductMap; productMapError: string | null; productMapRaw: string } {
  let v = raw.trim().replace(/[\u201c\u201d]/g, '"').replace(/[\u2018\u2019]/g, "'");
  v = v.replace(/^SHOPIFY_PRODUCT_MAP\s*=\s*/i, "");
  if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"') && !v.startsWith('"{') === false) || (v.startsWith('"') && v.endsWith('"') && !v.slice(1, -1).includes('"'))) {
    v = v.slice(1, -1).trim();
  }
  const preview = v.length > 60 ? `${v.slice(0, 40)}…${v.slice(-15)}` : v;
  if (!v) return { productMap: {}, productMapError: null, productMapRaw: "" };
  try {
    const parsed = JSON.parse(v) as Record<string, unknown>;
    const map: ProductMap = {};
    for (const [k, id] of Object.entries(parsed)) {
      const s = String(id).trim();
      if (!/^\d+$/.test(s)) return { productMap: {}, productMapError: `SHOPIFY_PRODUCT_MAP: "${k}" is not a numeric variant id`, productMapRaw: preview };
      map[k.trim().toLowerCase()] = s;
    }
    return { productMap: map, productMapError: null, productMapRaw: preview };
  } catch {
    // fall through to key=value form
  }
  const map: ProductMap = {};
  for (const pair of v.split(/[,\n;]+/)) {
    const m = pair.trim().match(/^["']?([\w-]+)["']?\s*[=:]\s*["']?(\d+)["']?$/);
    if (!m) return { productMap: {}, productMapError: `SHOPIFY_PRODUCT_MAP is not valid JSON or key=id pairs (got: ${preview})`, productMapRaw: preview };
    map[m[1].toLowerCase()] = m[2];
  }
  return { productMap: map, productMapError: null, productMapRaw: preview };
}

function config() {
  const domain = (process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "").trim();
  const token = (process.env.SHOPIFY_ADMIN_API_TOKEN || "").trim();
  const clientId = (process.env.SHOPIFY_CLIENT_ID || "").trim();
  const clientSecret = (process.env.SHOPIFY_CLIENT_SECRET || "").trim();
  const secret = (process.env.GHL_SHOPIFY_WEBHOOK_SECRET || "").trim();
  const { productMap, productMapError, productMapRaw } = parseProductMap(process.env.SHOPIFY_PRODUCT_MAP || "");
  return { domain, token, clientId, clientSecret, secret, productMap, productMapError, productMapRaw };
}

// Client-credentials grant (Dev Dashboard apps). Cached per warm serverless
// instance; refreshed a few minutes before Shopify's expiry.
let cachedToken: { value: string; expiresAt: number } | null = null;

// Last few webhook attempts seen by this (warm) instance — surfaced via
// ?recent=1 so live tests can be diagnosed without Vercel log access.
type Attempt = {
  at: string; status: number; result: string; keys?: string[]; items?: string; ghlOrderId?: string;
  detail?: unknown; payload?: Record<string, unknown>;
};
const attempts: Attempt[] = [];
function record(a: Attempt) {
  attempts.unshift(a);
  if (attempts.length > 10) attempts.length = 10;
}

async function accessToken(): Promise<string> {
  const { domain, token, clientId, clientSecret } = config();
  if (token) return token;
  if (cachedToken && cachedToken.expiresAt > Date.now()) return cachedToken.value;
  const res = await fetch(`https://${domain}/admin/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, grant_type: "client_credentials" }),
    cache: "no-store",
  });
  const data = (await res.json().catch(() => ({}))) as { access_token?: string; expires_in?: number; error?: string; error_description?: string };
  if (!res.ok || !data.access_token) {
    throw new Error(`Shopify token exchange failed (${res.status}): ${data.error_description || data.error || "no access_token"}`);
  }
  const ttl = (data.expires_in ?? 86400) * 1000;
  cachedToken = { value: data.access_token, expiresAt: Date.now() + ttl - 5 * 60 * 1000 };
  return data.access_token;
}

// GHL webhook bodies vary by trigger. Look in custom data first, then the
// top level, then nested contact / order objects.
type Payload = Record<string, unknown>;

function pick(body: Payload, ...keys: string[]): string {
  const sources: Payload[] = [
    (body.customData as Payload) || {},
    (body.custom_data as Payload) || {},
    body,
    (body.contact as Payload) || {},
    (body.order as Payload) || {},
  ];
  for (const key of keys) {
    for (const src of sources) {
      const v = src[key];
      if (v !== undefined && v !== null && String(v).trim() !== "") return String(v).trim();
    }
  }
  return "";
}

function splitName(full: string): [string, string] {
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) return [parts[0] || "", ""];
  return [parts.slice(0, -1).join(" "), parts[parts.length - 1]];
}

async function shopify(path: string, init: RequestInit = {}) {
  const { domain } = config();
  const token = await accessToken();
  const res = await fetch(`https://${domain}/admin/api/${API_VERSION}/${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  const text = await res.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }
  return { ok: res.ok, status: res.status, json };
}

export async function GET(req: Request) {
  const c = config();
  const hasAuth = Boolean(c.token || (c.clientId && c.clientSecret));

  // ?recent=1 (with the x-webhook-secret header) → last 10 orders this bridge
  // created, for verifying live tests without opening Shopify.
  const url = new URL(req.url);
  if (url.searchParams.get("recent") && c.domain && hasAuth) {
    if (req.headers.get("x-webhook-secret") !== c.secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
      const since = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();
      const r = await shopify(
        `orders.json?status=any&limit=50&created_at_min=${encodeURIComponent(since)}&fields=id,name,created_at,financial_status,fulfillment_status,cancelled_at,total_price,tags,email,shipping_address,line_items,note_attributes`,
      );
      type O = {
        id: number; name: string; created_at: string; financial_status: string; fulfillment_status: string | null;
        cancelled_at: string | null; total_price: string; tags: string; email: string;
        shipping_address?: { name?: string; address1?: string; city?: string; province_code?: string; zip?: string };
        line_items: { title: string; quantity: number }[]; note_attributes: { name: string; value: string }[];
      };
      const orders = (((r.json as { orders?: O[] })?.orders) || [])
        .filter((o) => o.tags.split(",").map((t) => t.trim()).includes("GHL"))
        .slice(0, 10)
        .map((o) => ({
          order: o.name,
          created: o.created_at,
          paid: o.financial_status,
          fulfillment: o.fulfillment_status || "unfulfilled",
          cancelled: Boolean(o.cancelled_at),
          total: o.total_price,
          items: o.line_items.map((li) => `${li.quantity}× ${li.title}`),
          shipTo: o.shipping_address
            ? `${o.shipping_address.name}, ${o.shipping_address.address1}, ${o.shipping_address.city} ${o.shipping_address.province_code} ${o.shipping_address.zip}`
            : null,
          email: o.email,
          ghl: Object.fromEntries(o.note_attributes.map((n) => [n.name, n.value])),
        }));
      return NextResponse.json({ recentAttemptsThisInstance: attempts, orders });
    } catch (e) {
      return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
    }
  }

  // ?cancelLoop=1&from=<order#>&to=<order#>[&confirm=1] (secret header) →
  // cancel $0 bridge orders in that order-number range. Dry run unless confirm=1.
  // Processes up to 40 per call; call again until `remaining` is 0.
  if (url.searchParams.get("cancelLoop") && c.domain && hasAuth) {
    if (req.headers.get("x-webhook-secret") !== c.secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const from = Number(url.searchParams.get("from"));
    const to = Number(url.searchParams.get("to"));
    const confirm = url.searchParams.get("confirm") === "1";
    if (!from || !to || to < from) return NextResponse.json({ error: "from/to order numbers required" }, { status: 400 });
    try {
      type O = { id: number; name: string; order_number: number; total_price: string; tags: string; cancelled_at: string | null; email: string; note_attributes: { name: string; value: string }[] };
      const matches: O[] = [];
      let sinceId = 0;
      for (let page = 0; page < 8; page++) {
        const r = await shopify(`orders.json?status=any&limit=250&since_id=${sinceId}&fields=id,name,order_number,total_price,tags,cancelled_at,email,note_attributes`);
        const batch = ((r.json as { orders?: O[] })?.orders) || [];
        if (!batch.length) break;
        for (const o of batch) {
          const tags = o.tags.split(",").map((t) => t.trim());
          if (o.order_number >= from && o.order_number <= to && tags.includes("GHL") && Number(o.total_price) === 0 && !o.cancelled_at) matches.push(o);
        }
        sinceId = batch[batch.length - 1].id;
        if (batch[batch.length - 1].order_number > to) break;
      }
      if (!confirm) {
        return NextResponse.json({ dryRun: true, wouldCancel: matches.length, first: matches[0]?.name, last: matches[matches.length - 1]?.name, sources: [...new Set(matches.map((m) => m.note_attributes.find((n) => n.name === "Source")?.value))] });
      }
      const cancelled: string[] = [];
      const failed: { name: string; error: unknown }[] = [];
      for (const o of matches.slice(0, 40)) {
        const r = await shopify(`orders/${o.id}/cancel.json`, { method: "POST", body: JSON.stringify({ reason: "other", email: false, restock: true }) });
        if (r.ok) cancelled.push(o.name); else failed.push({ name: o.name, error: r.json });
      }
      return NextResponse.json({ cancelled: cancelled.length, failed, remaining: Math.max(0, matches.length - cancelled.length - failed.length) });
    } catch (e) {
      return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
    }
  }

  // ?inspect=<text> (secret header) → recent orders whose line items match <text>,
  // with fulfillment routing details, to compare bridge orders with manual ones.
  if (url.searchParams.get("inspect") && c.domain && hasAuth) {
    if (req.headers.get("x-webhook-secret") !== c.secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const q = url.searchParams.get("inspect")!.toLowerCase();
    try {
      type LI = { title: string; quantity: number; fulfillment_service: string; fulfillment_status: string | null; requires_shipping: boolean; variant_id: number };
      type O = { id: number; name: string; created_at: string; source_name: string; total_price: string; tags: string; cancelled_at: string | null; financial_status: string; fulfillment_status: string | null; location_id: number | null; line_items: LI[]; fulfillments?: { location_id: number; status: string; service: string; tracking_company: string | null }[] };
      const before = url.searchParams.get("before");
      const r = await shopify(`orders.json?status=any&limit=250${before ? `&created_at_max=${encodeURIComponent(before)}` : ""}&fields=id,name,created_at,source_name,total_price,tags,cancelled_at,financial_status,fulfillment_status,location_id,line_items,fulfillments`);
      const all = ((r.json as { orders?: O[] })?.orders) || [];
      const hits = all.filter((o) => o.line_items.some((li) => li.title.toLowerCase().includes(q)) && !o.tags.includes("GHL")).slice(0, 8);
      const bridge = all.filter((o) => o.tags.split(",").map((t) => t.trim()).includes("GHL")).slice(0, 2);
      const fo: Record<string, unknown> = {};
      for (const o of [...hits.slice(0, 3), ...bridge.slice(0, 1)]) {
        const f = await shopify(`orders/${o.id}/fulfillment_orders.json`);
        fo[o.name] = f.ok
          ? ((f.json as { fulfillment_orders?: { status: string; request_status: string; assigned_location: { name: string; location_id: number }; delivery_method?: { method_type: string } }[] })?.fulfillment_orders || []).map((x) => ({ status: x.status, request_status: x.request_status, location: x.assigned_location?.name, location_id: x.assigned_location?.location_id, delivery: x.delivery_method?.method_type }))
          : { status: f.status, error: f.json };
      }
      const variants: Record<string, unknown> = {};
      for (const [k, id] of Object.entries(c.productMap)) {
        const v = await shopify(`variants/${id}.json?fields=id,fulfillment_service,inventory_management,inventory_item_id,requires_shipping,inventory_quantity`);
        variants[k] = (v.json as { variant?: unknown })?.variant ?? v.json;
      }
      const loc = await shopify(`locations.json`);
      const summarize = (o: O) => ({
        order: o.name, created: o.created_at, source: o.source_name, total: o.total_price, paid: o.financial_status,
        fulfillment: o.fulfillment_status || "unfulfilled", cancelled: Boolean(o.cancelled_at),
        items: o.line_items.map((li) => `${li.quantity}× ${li.title} [service=${li.fulfillment_service}, ships=${li.requires_shipping}]`),
        fulfillments: (o.fulfillments || []).map((f) => `${f.status} via ${f.service} @loc ${f.location_id} (${f.tracking_company || "no tracking"})`),
      });
      return NextResponse.json({ manualOrders: hits.map(summarize), bridgeOrders: bridge.map(summarize), fulfillmentOrders: fo, variants, locations: loc.ok ? loc.json : { status: loc.status } });
    } catch (e) {
      return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
    }
  }

  // ?products=1 → list product titles + variant IDs to fill in SHOPIFY_PRODUCT_MAP.
  // Read-only, and only works once the Shopify credentials are in place.
  if (url.searchParams.get("products") && c.domain && hasAuth) {
    try {
      const r = await shopify("products.json?limit=250&fields=id,title,status,variants");
      type V = { id: number; title: string; price: string; sku: string };
      const products = ((r.json as { products?: { id: number; title: string; status: string; variants: V[] }[] })?.products) || [];
      return NextResponse.json({
        products: products.map((p) => ({
          title: p.title,
          status: p.status,
          variants: p.variants.map((v) => ({ variantId: String(v.id), title: v.title, price: v.price, sku: v.sku })),
        })),
      });
    } catch (e) {
      return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
    }
  }

  let shopifyAuth: string = "not tested";
  if (c.domain && hasAuth) {
    try {
      await accessToken();
      shopifyAuth = "ok";
    } catch (e) {
      shopifyAuth = e instanceof Error ? e.message : String(e);
    }
  }
  return NextResponse.json({
    configured: Boolean(c.domain && hasAuth && c.secret && Object.keys(c.productMap).length && !c.productMapError && shopifyAuth === "ok"),
    version: ENDPOINT_VERSION,
    // Needed for "Payment Received" workflows (no order object in the payload).
    ghlPaymentVerify: await ghlVerifyStatus(),
    store: c.domain || null,
    auth: c.token ? "admin-token" : c.clientId && c.clientSecret ? "client-credentials" : "missing",
    shopifyAuth,
    hasWebhookSecret: Boolean(c.secret),
    products: Object.keys(c.productMap),
    error: c.productMapError,
    ...(c.productMapError ? { productMapReceived: c.productMapRaw } : {}),
  });
}

export async function POST(req: Request) {
  const at = new Date().toISOString();
  let keys: string[] | undefined;
  let items: string | undefined;
  let ghlOrderId: string | undefined;
  let payload: Record<string, unknown> | undefined;
  try {
    const res = await handlePost(req, (info) => {
      keys = info.keys ?? keys;
      items = info.items ?? items;
      ghlOrderId = info.ghlOrderId ?? ghlOrderId;
      payload = info.payload ?? payload;
    });
    const body = (await res.clone().json().catch(() => ({}))) as Record<string, unknown>;
    const failed = res.status >= 400;
    const skipped = Boolean(body.skipped);
    record({
      at, status: res.status,
      result: String(body.error || (skipped ? `SKIPPED: ${body.reason}` : body.shopifyOrder || "ok")),
      keys, items, ghlOrderId,
      ...(failed || skipped ? { detail: body.shopify ?? body.detail ?? body.received, payload } : {}),
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    record({ at, status: 500, result: msg, keys, items, ghlOrderId, payload });
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

async function handlePost(
  req: Request,
  trace: (info: { keys?: string[]; items?: string; ghlOrderId?: string; payload?: Record<string, unknown> }) => void,
) {
  const c = config();
  if (!c.domain || !(c.token || (c.clientId && c.clientSecret)) || !c.secret || c.productMapError) {
    return NextResponse.json({ error: "Endpoint not configured", detail: c.productMapError }, { status: 503 });
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }

  const KEEP = ["contact_id", "first_name", "last_name", "full_name", "email", "phone", "address1", "address2", "city", "state", "country", "postal_code", "full_address", "customData", "order"];
  trace({
    keys: Object.keys(body).concat(Object.keys((body.customData as Payload) || {}).map((k) => `customData.${k}`)),
    payload: Object.fromEntries(KEEP.filter((k) => k in body).map((k) => [k, body[k]])),
  });
  const provided = req.headers.get("x-webhook-secret") || pick(body, "secret");
  if (provided !== c.secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Which products ──
  const itemKeys = pick(body, "items", "product")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  trace({ items: itemKeys.join(",") });
  if (!itemKeys.length) {
    return NextResponse.json({ error: "No items given (custom data key `items`)" }, { status: 400 });
  }
  const unknown = itemKeys.filter((k) => !c.productMap[k]);
  if (unknown.length) {
    return NextResponse.json(
      { error: `Unknown items: ${unknown.join(", ")}`, known: Object.keys(c.productMap) },
      { status: 400 },
    );
  }

  // ── Customer ──
  const email = pick(body, "email");
  const phone = pick(body, "phone");
  let firstName = pick(body, "first_name", "firstName");
  let lastName = pick(body, "last_name", "lastName");
  if (!firstName && !lastName) [firstName, lastName] = splitName(pick(body, "full_name", "name"));
  const address1 = pick(body, "address1", "address", "shipping_address1");
  const address2 = pick(body, "address2", "shipping_address2");
  const city = pick(body, "city", "shipping_city");
  const province = pick(body, "state", "province", "shipping_state");
  const zip = pick(body, "postal_code", "postalCode", "zip", "shipping_zip");
  const country = pick(body, "country", "shipping_country") || "US";

  if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });
  const missing = [
    !firstName && !lastName && "name",
    !address1 && "address1",
    !city && "city",
    !province && "state",
    !zip && "postal_code",
  ].filter(Boolean);
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing shipping fields: ${missing.join(", ")}`, received: Object.keys(body) },
      { status: 400 },
    );
  }

  try {
    await accessToken();
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }

  // ── Idempotency: one Shopify order per GHL purchase ──
  // Prefer GHL's real order id (nested in the Order Submitted payload) over
  // whatever the workflow's custom data supplies.
  const ghlOrder = (body.order as Payload) || {};
  const lineItems0 = (Array.isArray(ghlOrder.line_items) ? (ghlOrder.line_items as Payload[])[0] : undefined) || {};
  const nestedOrderId = String(
    ((lineItems0.meta as Payload) || {}).order_id || ghlOrder.id || ghlOrder.order_id || ghlOrder._id || "",
  ).trim();
  let ghlOrderId = nestedOrderId;
  let verifiedSource = "";
  trace({ ghlOrderId });

  // ── Loop guard ──
  // GHL's Shopify integration imports every Shopify order (including the ones
  // this bridge creates) back into GHL as an "external" order, which re-fires
  // the Order Submitted trigger. Only act on orders that came from a GHL
  // checkout (form/funnel/etc.) and carry a real GHL order id. Respond 200 so
  // GHL does not retry.
  const ghlSource = String(ghlOrder.source || "").toLowerCase();
  if (ghlSource === "external" || ghlSource === "shopify") {
    return NextResponse.json({ ok: true, skipped: true, reason: `GHL order source "${ghlSource}" is not a GHL checkout` });
  }
  if (!nestedOrderId) {
    // "Payment Received" (and any other trigger without an order object):
    // verify the purchase with GHL's payments API. Fails closed — a Shopify
    // import, a renewal, a stale payment or an API error all skip.
    const verified = await verifyGhlPurchase(pick(body, "contact_id", "contactId"));
    if (!verified.ok) {
      const has = ["order", "payment", "invoice", "transaction", "triggerData", "customData"].filter((k) => k in body);
      return NextResponse.json({ ok: true, skipped: true, reason: verified.reason, payloadHas: has });
    }
    ghlOrderId = verified.orderId;
    verifiedSource = verified.source;
    trace({ ghlOrderId });
  }
  // Shopify tags: max 40 chars, keep to safe characters.
  const dedupTag = ghlOrderId ? `ghl-${ghlOrderId.replace(/[^A-Za-z0-9_-]+/g, "-")}`.slice(0, 40) : "";
  if (dedupTag) {
    const since = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();
    const existing = await shopify(
      `orders.json?status=any&limit=250&fields=id,name,tags&created_at_min=${encodeURIComponent(since)}`,
    );
    type Recent = { id: number; name: string; tags: string; created_at: string; email: string; cancelled_at: string | null };
    const orders = ((existing.json as { orders?: Recent[] })?.orders) || [];
    const dup = orders.find((o) => o.tags.split(",").map((t) => t.trim()).includes(dedupTag));
    if (dup) {
      return NextResponse.json({ ok: true, duplicate: true, shopifyOrder: dup.name, shopifyOrderId: dup.id });
    }
    const hourAgo = Date.now() - 60 * 60 * 1000;
    const bridgeLastHour = orders.filter(
      (o) => o.tags.split(",").map((t) => t.trim()).includes("GHL") && new Date(o.created_at).getTime() > hourAgo,
    );
    // Volume ceiling. A loop looks like the same customer repeating (caught
    // below); real sales spikes should pass. Raise with BRIDGE_MAX_PER_HOUR.
    const maxPerHour = Number(process.env.BRIDGE_MAX_PER_HOUR) || 300;
    if (bridgeLastHour.length >= maxPerHour) {
      console.error("ghl-order circuit breaker tripped:", bridgeLastHour.length, "bridge orders in the last hour");
      return NextResponse.json(
        { ok: true, skipped: true, reason: `Circuit breaker: ${bridgeLastHour.length} bridge orders in the last hour (limit ${maxPerHour}) — refusing until it clears` },
      );
    }
    // Loop signature: the same customer hit more than 3 times in an hour.
    const sameCustomerLastHour = bridgeLastHour.filter((o) => (o.email || "").toLowerCase() === email.toLowerCase());
    if (sameCustomerLastHour.length >= 3) {
      console.error("ghl-order loop guard:", email, "has", sameCustomerLastHour.length, "bridge orders in the last hour");
      return NextResponse.json({
        ok: true, skipped: true, duplicate: true, shopifyOrder: sameCustomerLastHour[0].name,
        reason: "Same customer already has 3 bridge orders in the last hour — looks like a loop, refusing",
      });
    }
    const sameCustomerRecently = bridgeLastHour.find(
      (o) => (o.email || "").toLowerCase() === email.toLowerCase() && new Date(o.created_at).getTime() > Date.now() - 10 * 60 * 1000,
    );
    if (sameCustomerRecently) {
      return NextResponse.json({
        ok: true, skipped: true, duplicate: true, shopifyOrder: sameCustomerRecently.name,
        reason: "Same customer already got a bridge order in the last 10 minutes",
      });
    }
  }

  // ── Line items at full price + a 100% discount, so reports show what shipped at $0 ──
  const lineItems: { variant_id: number; quantity: number }[] = [];
  const counts = new Map<string, number>();
  for (const k of itemKeys) counts.set(k, (counts.get(k) || 0) + 1);
  for (const [k, qty] of counts) lineItems.push({ variant_id: Number(c.productMap[k]), quantity: qty });

  let subtotal = 0;
  for (const li of lineItems) {
    const v = await shopify(`variants/${li.variant_id}.json?fields=id,price`);
    const price = Number((v.json as { variant?: { price?: string } })?.variant?.price);
    if (!v.ok || Number.isNaN(price)) {
      return NextResponse.json(
        { error: `Could not read Shopify variant ${li.variant_id}`, shopify: v.json },
        { status: 502 },
      );
    }
    subtotal += price * li.quantity;
  }

  const shippingAddress = {
    first_name: firstName,
    last_name: lastName,
    address1,
    address2: address2 || undefined,
    city,
    province,
    zip,
    country,
    phone: phone || undefined,
  };

  const source = verifiedSource || pick(body, "source", "funnel") || "GHL checkout";
  const order = {
    email,
    financial_status: "paid",
    send_receipt: false, // GHL already emailed the receipt
    send_fulfillment_receipt: true, // Shopify sends tracking when the 3PL ships
    inventory_behaviour: "decrement_obeying_policy",
    source_name: "ghl",
    tags: ["GHL", "Prepaid", dedupTag].filter(Boolean).join(", "),
    note: `Prepaid through ${source}.${ghlOrderId ? ` GHL order ${ghlOrderId}.` : ""} Created automatically — do not charge.`,
    note_attributes: [
      { name: "Source", value: source },
      ...(ghlOrderId ? [{ name: "GHL Order ID", value: ghlOrderId }] : []),
      ...(pick(body, "contact_id", "contactId") ? [{ name: "GHL Contact ID", value: pick(body, "contact_id", "contactId") }] : []),
    ],
    customer: { first_name: firstName, last_name: lastName, email },
    line_items: lineItems,
    shipping_address: shippingAddress,
    billing_address: shippingAddress,
    shipping_lines: [{ title: "Prepaid shipping", price: "0.00", code: "PREPAID" }],
    discount_codes: subtotal > 0 ? [{ code: "PREPAID-GHL", amount: subtotal.toFixed(2), type: "fixed_amount" }] : [],
  };

  const created = await shopify("orders.json", { method: "POST", body: JSON.stringify({ order }) });
  if (!created.ok) {
    console.error("Shopify order create failed", created.status, JSON.stringify(created.json));
    return NextResponse.json({ error: "Shopify rejected the order", shopify: created.json }, { status: 502 });
  }
  const o = (created.json as { order: { id: number; name: string; total_price: string } }).order;
  return NextResponse.json({ ok: true, shopifyOrder: o.name, shopifyOrderId: o.id, total: o.total_price });
}
