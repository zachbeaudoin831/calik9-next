/**
 * Quiz funnel report — server side.
 *
 * Pulls every GHL contact tagged quiz-completed, then for the high-budget
 * leads ($500–$1,500 and Whatever it takes) looks up their appointments and
 * payment transactions to see who booked and who closed.
 *
 * Data sources (all GHL, token = GHL_API_TOKEN):
 * - Quiz date:   custom field "Quiz: Submitted At" (falls back to dateAdded)
 * - Budget:      tags quiz-budget-* (falls back to "Quiz: Budget")
 * - Source:      tags quiz-src-* (written since UTM tracking went live);
 *                older contacts fall back to GHL's own attribution, else "untracked"
 * - Booked:      GET /contacts/{id}/appointments — any non-cancelled appointment
 *                created on/after the quiz
 * - Closed:      GET /payments/transactions?contactId= — succeeded payments after the
 *                quiz, classed Academy vs Premium (Elite / VIP / All Access)
 *                (needs the "View Payment Transactions" scope on the token)
 */

const GHL = "https://services.leadconnectorhq.com";
const LOCATION_ID = "9RVPGbjB6dCgPVsRbKEE";
const VERSION = "2021-07-28";

export type Budget = "under-200" | "200-500" | "500-1500" | "whatever" | "unknown";
export type CloseKind = "academy" | "premium";

export type Lead = {
  id: string;
  name: string;
  email: string;
  quizAt: string;
  budget: Budget;
  budgetLabel: string;
  source: string; // "organic" | "untracked" | utm_source as sent (e.g. "Meta_Ads")
  campaign: string;
  result: string;
  booked?: { at: string; title: string; status: string } | null;
  closed?: { kind: CloseKind; amount: number; at: string; label: string } | null;
};

export type Report = {
  generatedAt: string;
  from: string;
  to: string;
  source: string;
  sources: { key: string; count: number }[];
  totals: {
    completed: number;
    budget: Record<Budget, number>;
    qualified: number;
    booked: number;
    closedAcademy: number;
    closedPremium: number;
    revenue: number;
  };
  byBudget: { budget: Budget; leads: number; booked: number; academy: number; premium: number }[];
  leads: Lead[];
  warnings: string[];
};

export const BUDGET_LABELS: Record<Budget, string> = {
  "under-200": "Under $200",
  "200-500": "$200 – $500",
  "500-1500": "$500 – $1,500",
  whatever: "Whatever it takes",
  unknown: "No answer",
};
export const QUALIFIED: Budget[] = ["500-1500", "whatever"];

function token(): string {
  let t = (process.env.GHL_API_TOKEN || "").trim();
  t = t.replace(/^GHL_API_TOKEN\s*=\s*/i, "").replace(/^["']|["']$/g, "").replace(/^Bearer\s+/i, "").trim();
  return t;
}

async function ghl(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GHL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token()}`,
      Version: VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });
  const text = await res.text();
  let json: unknown = null;
  try { json = text ? JSON.parse(text) : null; } catch { json = { raw: text.slice(0, 300) }; }
  return { ok: res.ok, status: res.status, json };
}

// Small worker pool so we stay well under GHL's 100 requests / 10 s.
async function pool<T, R>(items: T[], n: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    }),
  );
  return out;
}

// ---------- quiz contacts ----------

type RawContact = {
  id: string;
  firstName?: string;
  lastName?: string;
  contactName?: string;
  email?: string;
  dateAdded?: string;
  tags?: string[];
  customFields?: { id: string; value?: unknown; field_value?: unknown }[];
  attributionSource?: { utmSource?: string; utmCampaign?: string };
  lastAttributionSource?: { utmSource?: string; utmCampaign?: string };
  attributions?: { utmSource?: string; utmCampaign?: string; isFirst?: boolean; isLast?: boolean }[];
};

type QuizContact = Omit<Lead, "booked" | "closed">;

let contactCache: { at: number; rows: QuizContact[] } | null = null;
const CONTACT_TTL = 5 * 60 * 1000;

async function fieldIds(): Promise<Record<string, string>> {
  const r = await ghl(`/locations/${LOCATION_ID}/customFields?model=contact`);
  const byName: Record<string, string> = {};
  if (r.ok) {
    for (const f of ((r.json as { customFields?: { id: string; name: string }[] })?.customFields) || []) {
      byName[f.name.trim().toLowerCase()] = f.id;
    }
  }
  return byName;
}

function budgetFrom(tags: string[], answer: string): Budget {
  const t = new Set(tags);
  if (t.has("quiz-budget-whatever-it-takes") || t.has("quiz-budget-1500-5000") || t.has("quiz-budget-5000-plus")) return "whatever";
  if (t.has("quiz-budget-500-1500")) return "500-1500";
  if (t.has("quiz-budget-200-500")) return "200-500";
  if (t.has("quiz-budget-under-200")) return "under-200";
  const a = answer.replace(/\s/g, "").toLowerCase();
  if (a.startsWith("under")) return "under-200";
  if (a.startsWith("$200")) return "200-500";
  if (a.startsWith("$500")) return "500-1500";
  if (a.startsWith("whatever") || a.startsWith("$1,500") || a.startsWith("$5,000")) return "whatever";
  return "unknown";
}

async function loadQuizContacts(force: boolean, warnings: string[]): Promise<QuizContact[]> {
  if (!force && contactCache && Date.now() - contactCache.at < CONTACT_TTL) return contactCache.rows;
  const ids = await fieldIds();
  const fid = (name: string) => ids[name.toLowerCase()];
  const F = {
    submittedAt: fid("Quiz: Submitted At"),
    budget: fid("Quiz: Budget"),
    utmSource: fid("Quiz: UTM Source"),
    utmCampaign: fid("Quiz: UTM Campaign"),
    result: fid("Quiz: Result Type"),
  };

  const raw: RawContact[] = [];
  for (let page = 1; page <= 100; page++) {
    const r = await ghl(`/contacts/search`, {
      method: "POST",
      body: JSON.stringify({
        locationId: LOCATION_ID,
        page,
        pageLimit: 100,
        filters: [{ field: "tags", operator: "contains", value: "quiz-completed" }],
        sort: [{ field: "dateAdded", direction: "desc" }],
      }),
    });
    if (!r.ok) throw new Error(`GHL contact search failed (HTTP ${r.status}): ${JSON.stringify(r.json).slice(0, 300)}`);
    const batch = ((r.json as { contacts?: RawContact[] })?.contacts) || [];
    raw.push(...batch);
    const total = (r.json as { total?: number })?.total ?? 0;
    if (batch.length < 100 || raw.length >= total) break;
  }
  if (!F.submittedAt) warnings.push('Custom field "Quiz: Submitted At" not found — using contact creation date instead.');

  const rows = raw.map((c): QuizContact => {
    const cf: Record<string, string> = {};
    for (const f of c.customFields || []) {
      const v = f.value ?? f.field_value;
      cf[f.id] = Array.isArray(v) ? v.join(", ") : v == null ? "" : String(v);
    }
    const get = (id?: string) => (id ? cf[id] || "" : "");
    const tags = (c.tags || []).map((t) => t.toLowerCase());
    const quizAt = get(F.submittedAt) || c.dateAdded || "";
    const budget = budgetFrom(tags, get(F.budget));

    // Source: our own tag first (exact since tracking went live), then GHL's.
    let source = get(F.utmSource);
    if (!source) {
      const srcTag = tags.find((t) => t.startsWith("quiz-src-"));
      if (srcTag) source = srcTag === "quiz-src-organic" ? "organic" : srcTag.slice(9);
    }
    if (!source) {
      const ghlAttr =
        c.lastAttributionSource?.utmSource ||
        c.attributionSource?.utmSource ||
        c.attributions?.find((a) => a.isLast)?.utmSource ||
        c.attributions?.[0]?.utmSource;
      source = ghlAttr || "untracked";
    }
    const campaign = get(F.utmCampaign) || c.lastAttributionSource?.utmCampaign || c.attributionSource?.utmCampaign || "";
    const result = get(F.result) || (tags.find((t) => t.startsWith("quiz-result-")) || "").slice(12);
    return {
      id: c.id,
      name: c.contactName || [c.firstName, c.lastName].filter(Boolean).join(" ") || "(no name)",
      email: c.email || "",
      quizAt,
      budget,
      budgetLabel: BUDGET_LABELS[budget],
      source,
      campaign,
      result,
    };
  });
  contactCache = { at: Date.now(), rows };
  return rows;
}

// ---------- per-lead outcomes ----------

type Outcome = { booked: Lead["booked"]; closed: Lead["closed"]; at: number };
const outcomeCache = new Map<string, Outcome>();
const OUTCOME_TTL = 10 * 60 * 1000;
let paymentsScope: "ok" | "denied" | "unknown" = "unknown";
let appointmentsScope: "ok" | "denied" | "unknown" = "unknown";

const DAY = 24 * 60 * 60 * 1000;
const ACADEMY_AMOUNTS = new Set([47, 74, 97, 124, 194, 244]);

function classifyTx(tx: Record<string, unknown>): { kind: CloseKind; label: string } | null {
  const amount = Number(tx.amount) || 0;
  const text = JSON.stringify([tx.name, tx.entitySourceName, tx.entitySourceMeta, tx.meta, tx.lineItems, tx.description]).toLowerCase();
  if (/all[\s-]?access/.test(text)) return { kind: "premium", label: "All Access" };
  if (/\bvip\b/.test(text)) return { kind: "premium", label: "VIP" };
  if (/\belite\b/.test(text)) return { kind: "premium", label: "Elite" };
  if (/academy/.test(text)) return { kind: "academy", label: "Academy" };
  if (amount >= 997) return { kind: "premium", label: `Premium ($${amount.toLocaleString()})` };
  if (ACADEMY_AMOUNTS.has(Math.round(amount))) return { kind: "academy", label: `Academy ($${amount})` };
  return null;
}

async function outcomeFor(lead: QuizContact, force: boolean): Promise<Outcome> {
  const cached = outcomeCache.get(lead.id);
  if (!force && cached && Date.now() - cached.at < OUTCOME_TTL) return cached;
  const since = (Date.parse(lead.quizAt) || 0) - DAY;

  let booked: Lead["booked"] = null;
  if (appointmentsScope !== "denied") {
    const r = await ghl(`/contacts/${lead.id}/appointments`);
    if (r.status === 401 || r.status === 403) appointmentsScope = "denied";
    else if (r.ok) {
      appointmentsScope = "ok";
      const events = ((r.json as { events?: Record<string, unknown>[] })?.events) || [];
      const hits = events
        .filter((e) => !/cancel|invalid/i.test(String(e.appointmentStatus || e.status || "")))
        .filter((e) => (Date.parse(String(e.dateAdded || e.startTime || "")) || 0) >= since)
        .sort((a, b) => Date.parse(String(a.dateAdded || a.startTime)) - Date.parse(String(b.dateAdded || b.startTime)));
      if (hits[0]) {
        booked = {
          at: String(hits[0].startTime || hits[0].dateAdded || ""),
          title: String(hits[0].title || "Appointment"),
          status: String(hits[0].appointmentStatus || hits[0].status || "booked"),
        };
      }
    }
  }

  let closed: Lead["closed"] = null;
  if (paymentsScope !== "denied") {
    const r = await ghl(`/payments/transactions?altId=${LOCATION_ID}&altType=location&contactId=${lead.id}&limit=100`);
    if (r.status === 401 || r.status === 403) paymentsScope = "denied";
    else if (r.ok) {
      paymentsScope = "ok";
      const txs = ((r.json as { data?: Record<string, unknown>[] })?.data) || [];
      for (const tx of txs) {
        if (!/succeed|paid|complete/i.test(String(tx.status || ""))) continue;
        if ((Date.parse(String(tx.createdAt || "")) || 0) < since) continue;
        const c = classifyTx(tx);
        if (!c) continue;
        // Premium beats Academy if they bought both.
        if (!closed || (closed.kind === "academy" && c.kind === "premium")) {
          closed = { ...c, amount: Number(tx.amount) || 0, at: String(tx.createdAt || "") };
        }
      }
    }
  }

  const o = { booked, closed, at: Date.now() };
  outcomeCache.set(lead.id, o);
  return o;
}

// ---------- report ----------

export function sourceMatches(source: string, filter: string): boolean {
  if (!filter || filter === "all") return true;
  const s = source.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  if (filter === "organic") return s === "organic";
  if (filter === "untracked") return s === "untracked";
  if (filter === "paid-other") return s !== "organic" && s !== "untracked" && s !== "meta-ads";
  return s === filter.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export async function buildReport(opts: { from: string; to: string; source: string; refresh: boolean }): Promise<Report> {
  const warnings: string[] = [];
  const all = process.env.NODE_ENV !== "production" && !token() ? demoContacts() : await loadQuizContacts(opts.refresh, warnings);
  const fromMs = Date.parse(`${opts.from}T00:00:00-07:00`);
  const toMs = Date.parse(`${opts.to}T23:59:59.999-07:00`);
  const inRange = all.filter((c) => {
    const t = Date.parse(c.quizAt);
    return t >= fromMs && t <= toMs;
  });

  const srcCounts = new Map<string, number>();
  for (const c of inRange) srcCounts.set(c.source, (srcCounts.get(c.source) || 0) + 1);
  const rows = inRange.filter((c) => sourceMatches(c.source, opts.source));

  const qualified = rows.filter((c) => QUALIFIED.includes(c.budget));
  const demo = process.env.NODE_ENV !== "production" && !token();
  const outcomes = demo ? qualified.map(demoOutcome) : await pool(qualified, 6, (c) => outcomeFor(c, opts.refresh));
  const leads: Lead[] = rows.map((c) => ({ ...c, booked: null, closed: null }));
  const byId = new Map(leads.map((l) => [l.id, l]));
  qualified.forEach((c, i) => Object.assign(byId.get(c.id)!, { booked: outcomes[i].booked, closed: outcomes[i].closed }));

  if (!demo && appointmentsScope === "denied") warnings.push('The GHL token can\'t read appointments — add "View Calendar Events" / "View Contacts" appointments scope to the Website Quiz private integration.');
  if (!demo && paymentsScope === "denied") warnings.push('The GHL token can\'t read payments, so closes show as 0 — add the "View Payment Transactions" scope to the Website Quiz private integration (GHL → Settings → Private Integrations).');
  if (rows.some((r) => r.source === "untracked")) warnings.push('"Untracked" = quiz taken before UTM tracking went live (Sep 29, 2026) with no GHL attribution on the contact.');

  const budget = { "under-200": 0, "200-500": 0, "500-1500": 0, whatever: 0, unknown: 0 } as Record<Budget, number>;
  for (const r of rows) budget[r.budget]++;
  const q = leads.filter((l) => QUALIFIED.includes(l.budget));
  const byBudget = (["under-200", "200-500", "500-1500", "whatever"] as Budget[]).map((b) => {
    const ls = leads.filter((l) => l.budget === b);
    return {
      budget: b,
      leads: ls.length,
      booked: ls.filter((l) => l.booked).length,
      academy: ls.filter((l) => l.closed?.kind === "academy").length,
      premium: ls.filter((l) => l.closed?.kind === "premium").length,
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    from: opts.from,
    to: opts.to,
    source: opts.source,
    sources: [...srcCounts.entries()].map(([key, count]) => ({ key, count })).sort((a, b) => b.count - a.count),
    totals: {
      completed: rows.length,
      budget,
      qualified: q.length,
      booked: q.filter((l) => l.booked).length,
      closedAcademy: q.filter((l) => l.closed?.kind === "academy").length,
      closedPremium: q.filter((l) => l.closed?.kind === "premium").length,
      revenue: q.reduce((s, l) => s + (l.closed?.amount || 0), 0),
    },
    byBudget,
    leads: leads.sort((a, b) => Date.parse(b.quizAt) - Date.parse(a.quizAt)),
    warnings,
  };
}

// ---------- local-dev sample data (never used in production) ----------

function demoContacts(): QuizContact[] {
  const budgets: Budget[] = ["under-200", "under-200", "200-500", "200-500", "500-1500", "whatever", "500-1500", "under-200"];
  const sources = ["Meta_Ads", "organic", "Meta_Ads", "untracked", "organic", "Meta_Ads", "google"];
  let seed = 7;
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: 240 }, (_, i) => {
    const b = budgets[Math.floor(rnd() * budgets.length)];
    return {
      id: `demo-${i}`,
      name: `Sample Lead ${i + 1}`,
      email: `lead${i + 1}@example.com`,
      quizAt: new Date(Date.now() - rnd() * 60 * DAY).toISOString(),
      budget: b,
      budgetLabel: BUDGET_LABELS[b],
      source: sources[Math.floor(rnd() * sources.length)],
      campaign: "",
      result: ["pushy", "fearful", "untrained"][i % 3],
    };
  });
}

function demoOutcome(c: QuizContact): Outcome {
  const n = parseInt(c.id.slice(5), 10);
  const booked = n % 3 !== 0 ? { at: c.quizAt, title: "$7 Strategy Call", status: "confirmed" } : null;
  const closed = booked && n % 4 === 1 ? { kind: "academy" as const, amount: 97, at: c.quizAt, label: "Academy" }
    : booked && n % 7 === 2 ? { kind: "premium" as const, amount: 2497, at: c.quizAt, label: "VIP" } : null;
  return { booked, closed, at: Date.now() };
}
