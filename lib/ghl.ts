// Minimal GHL (LeadConnector) API client for server routes.
// Env: GHL_API_TOKEN (Private Integration 'Website Quiz': View/Edit Contacts,
// View/Edit Custom Fields).

export const GHL_BASE = "https://services.leadconnectorhq.com";
export const LOCATION_ID = "9RVPGbjB6dCgPVsRbKEE";
const VERSION = "2021-07-28";

// Forgive the usual copy/paste damage: KEY= prefix, wrapping quotes, "Bearer ".
export function ghlToken(): string {
  let t = (process.env.GHL_API_TOKEN || "").trim();
  t = t.replace(/^GHL_API_TOKEN\s*=\s*/i, "").replace(/^["']|["']$/g, "").replace(/^Bearer\s+/i, "").trim();
  return t;
}

export async function ghl(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${ghlToken()}`,
      Version: VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  const text = await res.text();
  let json: unknown = null;
  try { json = text ? JSON.parse(text) : null; } catch { json = { raw: text.slice(0, 300) }; }
  return { ok: res.ok, status: res.status, json };
}

export function normName(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export function slug(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
}

export function splitName(full: string): [string, string] {
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) return [parts[0] || "", ""];
  return [parts[0], parts.slice(1).join(" ")];
}

// Contact custom fields by normalized name, cached per warm instance.
let fieldCache: { at: number; byNorm: Record<string, string> } | null = null;
export async function customFieldIds(fresh = false): Promise<Record<string, string>> {
  if (!fresh && fieldCache && Date.now() - fieldCache.at < 10 * 60 * 1000) return fieldCache.byNorm;
  const r = await ghl(`/locations/${LOCATION_ID}/customFields?model=contact`);
  const byNorm: Record<string, string> = {};
  if (r.ok) {
    const fields = ((r.json as { customFields?: { id: string; name: string }[] })?.customFields) || [];
    for (const f of fields) byNorm[normName(f.name)] = f.id;
  }
  fieldCache = { at: Date.now(), byNorm };
  return byNorm;
}

// Create any missing fields (name → GHL dataType). A DATE field that GHL
// refuses is retried as TEXT so the value is never lost.
export async function ensureCustomFields(fields: Record<string, string>): Promise<Record<string, string>> {
  let byNorm = await customFieldIds();
  const missing = Object.entries(fields).filter(([name]) => !byNorm[normName(name)]);
  if (!missing.length) return byNorm;
  for (const [name, dataType] of missing) {
    const r = await ghl(`/locations/${LOCATION_ID}/customFields`, {
      method: "POST",
      body: JSON.stringify({ name, dataType, model: "contact", placeholder: "" }),
    });
    if (!r.ok && dataType !== "TEXT") {
      await ghl(`/locations/${LOCATION_ID}/customFields`, {
        method: "POST",
        body: JSON.stringify({ name, dataType: "TEXT", model: "contact", placeholder: "" }),
      });
    }
  }
  byNorm = await customFieldIds(true);
  return byNorm;
}
