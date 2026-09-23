import { NextResponse } from "next/server";

/**
 * Free Behavior Assessment → GHL.
 *
 * The quiz posts the finished assessment here. We upsert the contact in GHL
 * (name / email / phone), tag it for automations, write the full Q&A as a
 * contact note, and — when matching custom fields exist in GHL — store each
 * answer in its own field.
 *
 * Vercel env: GHL_API_TOKEN (Private Integration, scopes: View Contacts, Edit
 * Contacts, optionally View Custom Fields). GHL_SHOPIFY_WEBHOOK_SECRET gates the
 * GET diagnostic.
 *
 * Custom fields are matched by name (case-insensitive) — create any of these in
 * GHL → Settings → Custom Fields (contact, single-line text) and they fill
 * automatically: see FIELD_NAMES below.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GHL = "https://services.leadconnectorhq.com";
const LOCATION_ID = "9RVPGbjB6dCgPVsRbKEE";
const VERSION = "2021-07-28";

const FIELD_NAMES: Record<string, string> = {
  tier: "Quiz: Recommended Tier",
  resultType: "Quiz: Result Type",
  dogType: "Quiz: Dog Type",
  dogName: "Quiz: Dog Name",
  age: "Quiz: Dog Age",
  breed: "Quiz: Dog Breed",
  problems: "Quiz: Behavior Problems",
  urgency: "Quiz: Urgency",
  previousTraining: "Quiz: Previous Training",
  outcome: "Quiz: Desired Outcome",
  ownerExperience: "Quiz: Owner Experience",
  learningFormat: "Quiz: Learning Format",
  location: "Quiz: Location",
  timePerWeek: "Quiz: Time Per Week",
  budget: "Quiz: Budget",
  trainingFormat: "Quiz: Training Format",
  offLeash: "Quiz: Off-Leash Score (1-10)",
  submittedAt: "Quiz: Submitted At",
};

const QUESTION_LABELS: Record<string, string> = {
  dogType: "Which dog do you have?",
  dogName: "Dog's name",
  age: "Dog's age",
  breed: "Dog's breed",
  problems: "Behavior problems (select all)",
  urgency: "How urgent is this?",
  previousTraining: "Tried training before?",
  outcome: "What does success look like?",
  ownerExperience: "Dog experience level",
  learningFormat: "How do you like to learn?",
  location: "Closest city",
  timePerWeek: "Time per week",
  budget: "Budget range",
  trainingFormat: "Training format of interest",
  offLeash: "Off-leash obedience today (1–10)",
};

// Existing GHL fields that should receive an answer instead of a new
// "Quiz: …" field. Matched case/punctuation-insensitively, first hit wins.
const FIELD_ALIASES: Record<string, string[]> = {
  dogName: ["Dog's Name", "Dog Name", "Dogs Name", "Pet Name", "Pet's Name", "Name of Dog"],
};

function normName(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

// Resolve the GHL custom-field id for one of our keys: aliases first, then
// the canonical "Quiz: …" name.
function fieldIdFor(key: string, byNorm: Record<string, string>): string | undefined {
  for (const alias of FIELD_ALIASES[key] || []) {
    const id = byNorm[normName(alias)];
    if (id) return id;
  }
  return byNorm[normName(FIELD_NAMES[key])];
}

type Submission = {
  name: string;
  email: string;
  phone?: string;
  tier: "academy" | "elite" | "vip";
  // Which of the three result pages the visitor was shown (mixed dogs are
  // resolved to their dominant profile client-side).
  resultType?: "pushy" | "fearful" | "untrained";
  answers: Record<string, string | number | string[] | undefined>;
};

// Forgive the usual copy/paste damage: KEY= prefix, wrapping quotes, "Bearer ".
function token(): string {
  let t = (process.env.GHL_API_TOKEN || "").trim();
  t = t.replace(/^GHL_API_TOKEN\s*=\s*/i, "").replace(/^["']|["']$/g, "").replace(/^Bearer\s+/i, "").trim();
  return t;
}

function headers() {
  return {
    Authorization: `Bearer ${token()}`,
    Version: VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

async function ghl(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GHL}${path}`, { ...init, headers: { ...headers(), ...(init.headers || {}) }, cache: "no-store" });
  const text = await res.text();
  let json: unknown = null;
  try { json = text ? JSON.parse(text) : null; } catch { json = { raw: text.slice(0, 300) }; }
  return { ok: res.ok, status: res.status, json };
}

function slug(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
}

function splitName(full: string): [string, string] {
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) return [parts[0] || "", ""];
  return [parts[0], parts.slice(1).join(" ")];
}

// Custom-field lookup, cached per warm instance. Returns {} if the token
// lacks the custom-fields scope — everything else still works.
let fieldCache: { at: number; byName: Record<string, string> } | null = null;
async function customFieldIds(): Promise<Record<string, string>> {
  if (fieldCache && Date.now() - fieldCache.at < 10 * 60 * 1000) return fieldCache.byName;
  const r = await ghl(`/locations/${LOCATION_ID}/customFields?model=contact`);
  const byName: Record<string, string> = {};
  if (r.ok) {
    const fields = ((r.json as { customFields?: { id: string; name: string }[] })?.customFields) || [];
    for (const f of fields) {
      byName[f.name.trim().toLowerCase()] = f.id;
      byName[normName(f.name)] = f.id;
    }
  }
  fieldCache = { at: Date.now(), byName };
  return byName;
}

function asText(v: unknown): string {
  if (Array.isArray(v)) return v.join(", ");
  if (v === undefined || v === null) return "";
  return String(v);
}

export async function GET(req: Request) {
  const secret = (process.env.GHL_SHOPIFY_WEBHOOK_SECRET || "").trim();
  if (!secret || req.headers.get("x-webhook-secret") !== secret) {
    return NextResponse.json({ configured: Boolean(token()) });
  }
  // ?createFields=1 → create any missing quiz custom fields (needs the
  // Edit Custom Fields scope). Idempotent: existing names are skipped.
  if (new URL(req.url).searchParams.get("createFields")) {
    fieldCache = null;
    const existing = await customFieldIds();
    const created: string[] = [];
    const failed: { name: string; error: unknown }[] = [];
    for (const [key, name] of Object.entries(FIELD_NAMES)) {
      if (fieldIdFor(key, existing)) continue;
      const dataType = key === "problems" ? "LARGE_TEXT" : "TEXT";
      const r = await ghl(`/locations/${LOCATION_ID}/customFields`, {
        method: "POST",
        body: JSON.stringify({ name, dataType, model: "contact", placeholder: "" }),
      });
      if (r.ok) created.push(name); else failed.push({ name, error: r.json });
    }
    fieldCache = null;
    const after = await customFieldIds();
    return NextResponse.json({
      created, failed,
      nowPresent: Object.keys(FIELD_NAMES).filter((k) => fieldIdFor(k, after)).length,
      of: Object.keys(FIELD_NAMES).length,
    });
  }

  const probe = await ghl(`/contacts/?locationId=${LOCATION_ID}&limit=1`);
  const fields = await ghl(`/locations/${LOCATION_ID}/customFields?model=contact`);
  const byName = await customFieldIds();
  const wanted = Object.keys(FIELD_NAMES);
  const t = token();
  return NextResponse.json({
    hasToken: Boolean(t),
    tokenShape: t ? `${t.slice(0, 4)}… (${t.length} chars)` : null,
    contactsError: probe.ok ? undefined : probe.json,
    contactsScope: probe.ok ? "ok" : `HTTP ${probe.status}`,
    customFieldsScope: fields.ok ? "ok" : `HTTP ${fields.status}`,
    fieldsFound: wanted.filter((k) => fieldIdFor(k, byName)).map((k) => FIELD_NAMES[k]),
    fieldsMissing: wanted.filter((k) => !fieldIdFor(k, byName)).map((k) => FIELD_NAMES[k]),
    dogNameField: fieldIdFor("dogName", byName) || null,
  });
}

export async function POST(req: Request) {
  if (!token()) {
    return NextResponse.json({ error: "GHL_API_TOKEN not set" }, { status: 503 });
  }
  let body: Submission;
  try { body = (await req.json()) as Submission; } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }
  const email = (body.email || "").trim().toLowerCase();
  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Name and a valid email are required" }, { status: 400 });
  }
  const tier = (["academy", "elite", "vip"] as const).includes(body.tier) ? body.tier : "academy";
  const resultType = (["pushy", "fearful", "untrained"] as const).includes(
    body.resultType as "pushy" | "fearful" | "untrained",
  )
    ? (body.resultType as "pushy" | "fearful" | "untrained")
    : undefined;
  const a = body.answers || {};
  const submittedAt = new Date().toISOString();

  // Short, stable tags for workflow branching (see /docs build sheet).
  // quiz-result-* is the tag to branch the dog-type email/SMS sequences on:
  // unlike quiz-dog-*, it never says "mixed" — a mixed dog is resolved to
  // the profile whose result page they actually saw.
  const tags = ["quiz-completed", `quiz-${tier}`];
  if (resultType) tags.push(`quiz-result-${resultType}`);
  const dog = asText(a.dogType).toLowerCase();
  if (dog.startsWith("pushy")) tags.push("quiz-dog-pushy");
  else if (dog.startsWith("fearful")) tags.push("quiz-dog-fearful");
  else if (dog.startsWith("good dog")) tags.push("quiz-dog-untrained");
  else if (dog.startsWith("a mix")) tags.push("quiz-dog-mixed");
  else if (dog) tags.push(`quiz-dog-${slug(dog)}`);
  const urg = asText(a.urgency).toLowerCase();
  if (urg.startsWith("manageable")) tags.push("quiz-urgency-manageable");
  else if (urg.startsWith("frustrating")) tags.push("quiz-urgency-frustrating");
  else if (urg.startsWith("serious")) tags.push("quiz-urgency-safety");
  else if (urg.startsWith("crisis")) tags.push("quiz-urgency-crisis");
  else if (urg) tags.push(`quiz-urgency-${slug(urg)}`);
  const bud = asText(a.budget).replace(/\s/g, "");
  if (bud.startsWith("Under")) tags.push("quiz-budget-under-200");
  else if (bud.startsWith("$500")) tags.push("quiz-budget-500-1500");
  else if (bud.toLowerCase().startsWith("whatever")) tags.push("quiz-budget-whatever-it-takes");
  else if (bud.startsWith("$1,500")) tags.push("quiz-budget-1500-5000");
  else if (bud.startsWith("$5,000")) tags.push("quiz-budget-5000-plus");
  else if (bud) tags.push(`quiz-budget-${slug(bud)}`);

  const byName = await customFieldIds();
  const customFields: { id: string; field_value: string }[] = [];
  const values: Record<string, string> = {
    ...Object.fromEntries(Object.entries(a).map(([k, v]) => [k, asText(v)])),
    tier,
    submittedAt,
    ...(resultType ? { resultType } : {}),
  };
  for (const key of Object.keys(FIELD_NAMES)) {
    const id = fieldIdFor(key, byName);
    const value = values[key];
    if (id && value) customFields.push({ id, field_value: value });
  }

  const [firstName, lastName] = splitName(name);
  const upsert = await ghl(`/contacts/upsert`, {
    method: "POST",
    body: JSON.stringify({
      locationId: LOCATION_ID,
      firstName,
      lastName,
      name,
      email,
      ...(phone ? { phone } : {}),
      source: "Free Behavior Assessment",
      tags,
      ...(customFields.length ? { customFields } : {}),
    }),
  });
  if (!upsert.ok) {
    console.error("GHL upsert failed", upsert.status, JSON.stringify(upsert.json));
    return NextResponse.json({ error: "GHL rejected the contact", ghl: upsert.json }, { status: 502 });
  }
  const contactId = (upsert.json as { contact?: { id?: string } })?.contact?.id;

  // Full transcript as a note, so nothing is lost even without custom fields.
  const lines = [
    `Free Behavior Assessment — ${new Date(submittedAt).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT`,
    `Recommended: ${tier.toUpperCase()}`,
    ...(resultType ? [`Result page shown: ${resultType} (calik9.com/free-behavior-assessment/results/${resultType})`] : []),
    "",
    ...Object.entries(QUESTION_LABELS).map(([k, q]) => `${q}: ${values[k] || "—"}`),
  ];
  let noteOk = false;
  if (contactId) {
    const note = await ghl(`/contacts/${contactId}/notes`, { method: "POST", body: JSON.stringify({ body: lines.join("\n") }) });
    noteOk = note.ok;
    if (!note.ok) console.error("GHL note failed", note.status, JSON.stringify(note.json));
  }

  return NextResponse.json({ ok: true, contactId, tags, fieldsWritten: customFields.length, noteOk });
}
