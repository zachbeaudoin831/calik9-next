import { NextResponse } from "next/server";
import { customFieldIds, ensureCustomFields, ghl, ghlToken, LOCATION_ID, normName, slug, splitName } from "@/lib/ghl";
import { nextOccurrence, sessionById } from "@/lib/masterclass-sessions";
import { SURVEY, surveyLabel } from "@/lib/masterclass-survey";

/**
 * On-site masterclass registration (/free-masterclass-live) → GHL.
 *
 * Called twice per visitor:
 *   stage "register" — name / email / phone / session, the moment they hit
 *     Join Masterclass. The lead is captured even if they skip the survey.
 *   stage "survey"   — the same contact plus the three survey answers.
 *
 * Tags (all additive, via the add-tag endpoint, so existing tags survive):
 *   mc-registered            fires on every registration (removed and re-added
 *                            when someone registers again, so a "tag added"
 *                            workflow trigger fires every time)
 *   mc-form-live             came through this on-site form
 *   mc-session-wednesday (mc-session-monday / -saturday from before the
 *                            schedule went Wednesday-only on 2026-10-27)
 *   mc-src-<utm_source> | mc-src-organic
 *   mc-sms-consent           ticked the optional marketing-consent checkbox
 *   mc-survey-completed
 *   mc-struggle-<key>, mc-urgency-<key>, mc-pref-<key>   (lib/masterclass-survey.ts)
 *
 * Custom fields (created on first use): see FIELDS.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FIELDS: Record<string, string> = {
  "Masterclass: Session": "TEXT", // "Monday, October 19 · 4:00 PM Pacific / 7:00 PM Eastern"
  "Masterclass: Session Day": "TEXT", // monday | wednesday | saturday
  "Masterclass: Session Date": "DATE", // for GHL Custom Date Reminder triggers
  "Masterclass: Registered At": "TEXT",
  "Masterclass: Biggest Struggle": "TEXT",
  "Masterclass: Urgency": "TEXT",
  "Masterclass: Training Preference": "TEXT",
};

const SESSION_TAGS = ["mc-session-monday", "mc-session-wednesday", "mc-session-saturday"];
const SURVEY_PREFIXES = SURVEY.map((q) => q.tagPrefix);

type Body = {
  stage?: "register" | "survey";
  name?: string;
  email?: string;
  phone?: string;
  session?: string;
  answers?: { struggle?: string; urgency?: string; preference?: string };
  smsConsent?: boolean; // optional marketing-consent checkbox
  attribution?: Record<string, string | undefined>;
  website?: string; // honeypot
};

const clip = (v: unknown, n = 200) => (typeof v === "string" ? v.trim().slice(0, n) : "");

async function contactTags(id: string): Promise<string[]> {
  const r = await ghl(`/contacts/${id}`);
  return ((r.json as { contact?: { tags?: string[] } })?.contact?.tags || []).map((t) => t.toLowerCase());
}

async function addTags(id: string, tags: string[]) {
  if (!tags.length) return true;
  const r = await ghl(`/contacts/${id}/tags`, { method: "POST", body: JSON.stringify({ tags }) });
  if (!r.ok) console.error("GHL add tags failed", r.status, JSON.stringify(r.json));
  return r.ok;
}

async function removeTags(id: string, tags: string[]) {
  if (!tags.length) return;
  const r = await ghl(`/contacts/${id}/tags`, { method: "DELETE", body: JSON.stringify({ tags }) });
  if (!r.ok) console.error("GHL remove tags failed", r.status, JSON.stringify(r.json));
}

export async function GET() {
  return NextResponse.json({ configured: Boolean(ghlToken()) });
}

export async function POST(req: Request) {
  let body: Body;
  try { body = (await req.json()) as Body; } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }
  // Bots fill every field; people never see this one.
  if (body.website) return NextResponse.json({ ok: true });

  const stage = body.stage === "survey" ? "survey" : "register";
  const name = clip(body.name, 120);
  const email = clip(body.email, 200).toLowerCase();
  const digits = (body.phone || "").replace(/\D/g, "");
  const phoneOk = digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
  const phone = digits.length === 10 ? `+1${digits}` : `+${digits}`;
  const session = sessionById(body.session);
  if (name.split(/\s+/).filter(Boolean).length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phoneOk || !session) {
    return NextResponse.json({ error: "Full name, a valid email, a mobile number and a session are required" }, { status: 400 });
  }
  if (!ghlToken()) {
    return NextResponse.json({ error: "GHL_API_TOKEN not set" }, { status: 503 });
  }

  const occ = nextOccurrence(session);
  const now = new Date();
  const a = body.answers || {};
  const answers = {
    struggle: surveyLabel("struggle", a.struggle),
    urgency: surveyLabel("urgency", a.urgency),
    preference: surveyLabel("preference", a.preference),
  };
  const attr = body.attribution || {};
  const utmSource = clip(attr.utm_source, 100);

  // Custom fields.
  let byNorm = await customFieldIds();
  if (Object.keys(FIELDS).some((f) => !byNorm[normName(f)])) byNorm = await ensureCustomFields(FIELDS);
  const values: Record<string, string | undefined> = {
    "Masterclass: Session": occ.full,
    "Masterclass: Session Day": session.id,
    "Masterclass: Session Date": occ.isoDate,
    ...(stage === "register" ? { "Masterclass: Registered At": now.toISOString() } : {}),
    "Masterclass: Biggest Struggle": answers.struggle,
    "Masterclass: Urgency": answers.urgency,
    "Masterclass: Training Preference": answers.preference,
  };
  const customFields = Object.entries(values)
    .map(([fieldName, value]) => ({ id: byNorm[normName(fieldName)], field_value: value }))
    .filter((f): f is { id: string; field_value: string } => Boolean(f.id && f.field_value));

  const [firstName, lastName] = splitName(name);
  const upsert = await ghl(`/contacts/upsert`, {
    method: "POST",
    body: JSON.stringify({
      locationId: LOCATION_ID,
      firstName,
      lastName,
      name,
      email,
      phone,
      source: "Free Masterclass (on-site form)",
      ...(customFields.length ? { customFields } : {}),
    }),
  });
  if (!upsert.ok) {
    console.error("GHL upsert failed", upsert.status, JSON.stringify(upsert.json));
    return NextResponse.json({ error: "GHL rejected the contact" }, { status: 502 });
  }
  const contactId = (upsert.json as { contact?: { id?: string } })?.contact?.id;
  if (!contactId) return NextResponse.json({ error: "No contact id from GHL" }, { status: 502 });

  const existing = await contactTags(contactId);
  const registrationTags = [
    "mc-registered",
    "mc-form-live",
    `mc-session-${session.id}`,
    utmSource ? `mc-src-${slug(utmSource)}` : "mc-src-organic",
    ...(body.smsConsent ? ["mc-sms-consent"] : []),
  ];

  const added: string[] = [];
  if (stage === "register" || !existing.includes("mc-registered")) {
    if (stage === "register") {
      // Re-registration: clear last time's markers so "tag added" triggers fire again.
      await removeTags(
        contactId,
        existing.filter(
          (t) => t === "mc-registered" || t === "mc-survey-completed" || (SESSION_TAGS.includes(t) && t !== `mc-session-${session.id}`),
        ),
      );
    }
    if (await addTags(contactId, registrationTags)) added.push(...registrationTags);
  }

  if (stage === "survey") {
    const surveyTags = SURVEY.flatMap((q) => {
      const key = a[q.id];
      return key && q.options.some((o) => o.key === key) ? [`${q.tagPrefix}${key}`] : [];
    });
    // Replace answers from an earlier registration.
    await removeTags(
      contactId,
      existing.filter((t) => SURVEY_PREFIXES.some((p) => t.startsWith(p)) && !surveyTags.includes(t)),
    );
    const tags = [...surveyTags, "mc-survey-completed"];
    if (await addTags(contactId, tags)) added.push(...tags);
  }

  // Readable record on the contact.
  const when = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  const source = utmSource
    ? [utmSource, clip(attr.utm_medium, 100), clip(attr.utm_campaign)].filter(Boolean).join(" / ")
    : `organic${attr.referrer ? ` (referrer ${clip(attr.referrer, 250)})` : ""}`;
  const lines =
    stage === "register"
      ? [`Free Masterclass registration — ${when} PT`, `Session: ${occ.full}`, `Source: ${source}`, `Page: ${clip(attr.landing_page, 250) || "/free-masterclass-live"}`]
      : [
          `Free Masterclass survey — ${when} PT`,
          `Session: ${occ.full}`,
          `Biggest struggle: ${answers.struggle || "—"}`,
          `Urgency: ${answers.urgency || "—"}`,
          `Looking for: ${answers.preference || "—"}`,
        ];
  const note = await ghl(`/contacts/${contactId}/notes`, { method: "POST", body: JSON.stringify({ body: lines.join("\n") }) });
  if (!note.ok) console.error("GHL note failed", note.status, JSON.stringify(note.json));

  return NextResponse.json({ ok: true, stage, contactId, session: occ.full, tagsAdded: added, fieldsWritten: customFields.length });
}
