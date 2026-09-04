import { NextResponse } from "next/server";

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
 *   SHOPIFY_ADMIN_API_TOKEN      shpat_… from a custom app with write_orders, read_orders, read_products, write_customers
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
 * GET this URL to see whether the endpoint is configured (never reveals secrets).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_VERSION = "2025-01";

type ProductMap = Record<string, string>;

function config() {
  const domain = (process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "").trim();
  const token = (process.env.SHOPIFY_ADMIN_API_TOKEN || "").trim();
  const secret = (process.env.GHL_SHOPIFY_WEBHOOK_SECRET || "").trim();
  let productMap: ProductMap = {};
  let productMapError: string | null = null;
  try {
    productMap = process.env.SHOPIFY_PRODUCT_MAP ? JSON.parse(process.env.SHOPIFY_PRODUCT_MAP) : {};
  } catch {
    productMapError = "SHOPIFY_PRODUCT_MAP is not valid JSON";
  }
  return { domain, token, secret, productMap, productMapError };
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
  const { domain, token } = config();
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

export async function GET() {
  const c = config();
  return NextResponse.json({
    configured: Boolean(c.domain && c.token && c.secret && Object.keys(c.productMap).length && !c.productMapError),
    store: c.domain || null,
    hasAdminToken: Boolean(c.token),
    hasWebhookSecret: Boolean(c.secret),
    products: Object.keys(c.productMap),
    error: c.productMapError,
  });
}

export async function POST(req: Request) {
  const c = config();
  if (!c.domain || !c.token || !c.secret || c.productMapError) {
    return NextResponse.json({ error: "Endpoint not configured", detail: c.productMapError }, { status: 503 });
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }

  const provided = req.headers.get("x-webhook-secret") || pick(body, "secret");
  if (provided !== c.secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Which products ──
  const itemKeys = pick(body, "items", "product")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
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

  // ── Idempotency: one Shopify order per GHL purchase ──
  const ghlOrderId = pick(body, "order_id", "orderId", "transaction_id", "payment_id", "id");
  const dedupTag = ghlOrderId ? `ghl-order-${ghlOrderId}`.slice(0, 250) : "";
  if (dedupTag) {
    const since = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();
    const existing = await shopify(
      `orders.json?status=any&limit=250&fields=id,name,tags&created_at_min=${encodeURIComponent(since)}`,
    );
    const orders = ((existing.json as { orders?: { id: number; name: string; tags: string }[] })?.orders) || [];
    const dup = orders.find((o) => o.tags.split(",").map((t) => t.trim()).includes(dedupTag));
    if (dup) {
      return NextResponse.json({ ok: true, duplicate: true, shopifyOrder: dup.name, shopifyOrderId: dup.id });
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

  const source = pick(body, "source", "funnel") || "GHL checkout";
  const order = {
    email,
    phone: phone || undefined,
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
