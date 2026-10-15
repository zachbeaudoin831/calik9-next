import { NextResponse } from "next/server";
import { ensureCustomFields, ghl, ghlToken, LOCATION_ID, normName, slug, splitName } from "@/lib/ghl";
import { INTAKE, intakeLabel } from "@/lib/specialist-intake";

/**
 * Behavior-specialist pre-booking questions → GHL (components/SpecialistBooking.tsx).
 *
 * The visitor usually just registered through a GHL form, so the pop-up reads
 * their name / email / phone from GHL's own sticky-contact record (localStorage
 * "_ud") and never re-asks. We upsert by that email, which lands on the same
 * contact, then:
 *   tags   bs-intake-completed, bs-src-<source>, bs-struggle-*, bs-urgency-*,
 *          bs-training-*, bs-pref-*, bs-budget-*   (added, never overwritten)
 *   fields "Behavior Specialist: Intake Summary" (all answers, for appointment
 *          notifications via its merge field) + the existing "Dog Name" field
 *   note   the full Q&A
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUMMARY_FIELD = "Behavior Specialist: Intake Summary";
const PREFIXES = INTAKE.map((q) => q.tagPrefix);

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  ghlContactId?: string; // from GHL's sticky record, logged only
  dog?: { name?: string; breed?: string; age?: string };
  answers?: Partial<Record<(typeof INTAKE)[number]["id"], string>>;
  notes?: string;
  source?: string;
  website?: string; // honeypot
};

const clip = (v: unknown, n = 200) => (typeof v === "string" ? v.trim().slice(0, n) : "");

export async function GET() {
  return NextResponse.json({ configured: Boolean(ghlToken()) });
}

export async function POST(req: Request) {
  let body: Body;
  try { body = (await req.json()) as Body; } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true });

  const email = clip(body.email, 200).toLowerCase();
  const name = clip(body.name, 120);
  const digits = (body.phone || "").replace(/\D/g, "");
  const phone = digits.length === 10 ? `+1${digits}` : digits.length === 11 && digits.startsWith("1") ? `+${digits}` : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  if (!ghlToken()) return NextResponse.json({ error: "GHL_API_TOKEN not set" }, { status: 503 });

  const a = body.answers || {};
  const picked = INTAKE.flatMap((q) => {
    const key = a[q.id];
    return key && q.options.some((o) => o.key === key) ? [{ q, key, label: intakeLabel(q.id, key)! }] : [];
  });
  const dog = { name: clip(body.dog?.name, 60), breed: clip(body.dog?.breed, 80), age: clip(body.dog?.age, 60) };
  const notes = clip(body.notes, 1500);
  const source = slug(clip(body.source, 60) || "website");

  const summary = [
    `Dog: ${[dog.name, dog.breed, dog.age].filter(Boolean).join(" · ") || "—"}`,
    ...INTAKE.map((q) => `${q.q} ${picked.find((p) => p.q.id === q.id)?.label || "—"}`),
    ...(notes ? [`Anything else: ${notes}`] : []),
  ];

  const byNorm = await ensureCustomFields({ [SUMMARY_FIELD]: "LARGE_TEXT" });
  const dogNameId = byNorm[normName("Dog Name")];
  const customFields = [
    ...(byNorm[normName(SUMMARY_FIELD)] ? [{ id: byNorm[normName(SUMMARY_FIELD)], field_value: summary.join("\n") }] : []),
    ...(dogNameId && dog.name ? [{ id: dogNameId, field_value: dog.name }] : []),
  ];

  const [firstName, lastName] = splitName(name);
  const upsert = await ghl(`/contacts/upsert`, {
    method: "POST",
    body: JSON.stringify({
      locationId: LOCATION_ID,
      email,
      ...(name ? { name, firstName, lastName } : {}),
      ...(phone ? { phone } : {}),
      ...(customFields.length ? { customFields } : {}),
    }),
  });
  if (!upsert.ok) {
    console.error("GHL upsert failed", upsert.status, JSON.stringify(upsert.json));
    return NextResponse.json({ error: "GHL rejected the contact" }, { status: 502 });
  }
  const contactId = (upsert.json as { contact?: { id?: string } })?.contact?.id;
  if (!contactId) return NextResponse.json({ error: "No contact id from GHL" }, { status: 502 });

  // Replace answers from an earlier intake, then add this one's tags.
  const current = await ghl(`/contacts/${contactId}`);
  const existing = ((current.json as { contact?: { tags?: string[] } })?.contact?.tags || []).map((t) => t.toLowerCase());
  const tags = [...picked.map((p) => `${p.q.tagPrefix}${p.key}`), "bs-intake-completed", `bs-src-${source}`];
  const stale = existing.filter((t) => PREFIXES.some((p) => t.startsWith(p)) && !tags.includes(t));
  if (stale.length) await ghl(`/contacts/${contactId}/tags`, { method: "DELETE", body: JSON.stringify({ tags: stale }) });
  const tagged = await ghl(`/contacts/${contactId}/tags`, { method: "POST", body: JSON.stringify({ tags }) });
  if (!tagged.ok) console.error("GHL add tags failed", tagged.status, JSON.stringify(tagged.json));

  const when = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  const note = await ghl(`/contacts/${contactId}/notes`, {
    method: "POST",
    body: JSON.stringify({ body: [`Behavior Specialist intake (before booking) — ${when} PT`, `From: ${source}`, "", ...summary].join("\n") }),
  });
  if (!note.ok) console.error("GHL note failed", note.status, JSON.stringify(note.json));

  const matched = body.ghlContactId ? body.ghlContactId === contactId : undefined;
  if (matched === false) console.warn("Specialist intake: sticky contact id differs from upsert match", body.ghlContactId, contactId);

  return NextResponse.json({ ok: true, contactId, matchedStickyContact: matched, tagsAdded: tagged.ok ? tags : [] });
}
