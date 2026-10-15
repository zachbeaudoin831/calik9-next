"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BookingEmbed from "@/components/BookingEmbed";
import { DOG_AGES, INTAKE } from "@/lib/specialist-intake";

// "Book with a behavior specialist" button → pop-up questions → GHL calendar.
//
// Answers are linked to the visitor's existing GHL contact: when they've just
// submitted a GHL form on this site (e.g. the masterclass registration), GHL's
// embed script has saved their contact to localStorage "_ud". We read name /
// email / phone from it and skip the contact step; the calendar pre-fills from
// the same record. With no record (private window, another device) we ask for
// contact details instead. Either way the calendar link carries the details
// (GHL booking widgets pre-fill from query params: standard fields plus custom
// fields by key), so nobody types anything twice.
//
// Renders nothing until `calendarUrl` is set, except with ?preview=specialist
// in the URL, so the flow can be reviewed on the live page before launch.

const LOCATION_ID = "9RVPGbjB6dCgPVsRbKEE";
const STICKY_KEY = "_ud";

type Sticky = { id?: string; customer_id?: string; full_name?: string; first_name?: string; last_name?: string; email?: string; phone?: string; location_id?: string };
type Step = "dog" | number | "final" | "calendar";

const fieldClass =
  "w-full font-body text-[15px] text-ink bg-white border-[1.5px] border-border rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors";
const labelClass = "block font-ui text-[11px] font-bold tracking-[1px] uppercase text-gray-muted mb-1.5";

function readSticky(): Sticky | null {
  try {
    const raw = window.localStorage.getItem(STICKY_KEY);
    const s = raw ? (JSON.parse(raw) as Sticky) : null;
    return s && s.location_id === LOCATION_ID && s.email ? s : null;
  } catch {
    return null;
  }
}

// Calendar custom-field keys to pre-fill (GHL field keys, verified on the
// call calendar's form). Keys a calendar doesn't have are simply ignored.
function calendarSrc(base: string, v: { name: string; email: string; phone: string; dogName: string; breed: string; age: string; behavior: string }) {
  const [first, ...rest] = v.name.trim().split(/\s+/);
  const params: Record<string, string> = {
    first_name: first || "",
    last_name: rest.join(" "),
    email: v.email,
    phone: v.phone,
    dog_name: v.dogName,
    breed: v.breed,
    age_of_your_dog: v.age,
    behavior_description: v.behavior,
  };
  const url = new URL(base);
  for (const [k, val] of Object.entries(params)) if (val) url.searchParams.set(k, val);
  return url.toString();
}

export default function SpecialistBooking({
  calendarUrl,
  source,
  heading = "WANT A PLAN FOR YOUR DOG BEFORE CLASS?",
  sub = "Book a one-on-one call with a Cali K9 behavior specialist. Answer a few quick questions so they come prepared for your dog, then pick a time that works.",
}: {
  calendarUrl: string | null;
  source: string;
  heading?: string;
  sub?: string;
}) {
  const [visible, setVisible] = useState(Boolean(calendarUrl));
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("dog");
  const [sticky, setSticky] = useState<Sticky | null>(null);
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [error, setError] = useState<string | null>(null);
  const [calendarLink, setCalendarLink] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendarUrl) return;
    try {
      if (new URLSearchParams(window.location.search).get("preview") === "specialist") setVisible(true);
    } catch {
      // ignore
    }
  }, [calendarUrl]);

  // Lock page scroll, close on Escape, and re-read the sticky contact on open.
  useEffect(() => {
    if (!open) return;
    setSticky(readSticky());
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [step]);

  if (!visible) return null;

  const total = INTAKE.length + 2; // dog + questions + final
  const stepNum = step === "dog" ? 1 : typeof step === "number" ? step + 2 : total;

  const finish = () => {
    let contact = { name: "", email: "", phone: "" };
    if (sticky) {
      contact = {
        name: sticky.full_name || [sticky.first_name, sticky.last_name].filter(Boolean).join(" "),
        email: sticky.email || "",
        phone: sticky.phone || "",
      };
    } else {
      const digits = phone.replace(/\D/g, "");
      const missing: string[] = [];
      if (name.trim().split(/\s+/).filter(Boolean).length < 2) missing.push("your full name");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) missing.push("a valid email");
      if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith("1")))) missing.push("a valid mobile number");
      if (missing.length) {
        setError(`Please add ${missing.join(", ").replace(/, ([^,]*)$/, " and $1")}.`);
        return;
      }
      contact = { name: name.trim(), email: email.trim(), phone: digits.length === 10 ? `+1${digits}` : `+${digits}` };
    }
    setError(null);
    try {
      fetch("/api/specialist/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          ...contact,
          ghlContactId: sticky?.id || sticky?.customer_id,
          dog: { name: dogName, breed, age },
          answers,
          notes,
          source,
          website,
        }),
      }).catch(() => {});
    } catch {
      // never block the calendar
    }
    if (calendarUrl) {
      const struggle = INTAKE[0].options.find((o) => o.key === answers.struggle);
      setCalendarLink(
        calendarSrc(calendarUrl, {
          ...contact,
          dogName: dogName.trim(),
          breed: breed.trim(),
          age,
          behavior: [struggle && struggle.key !== "other" ? struggle.label : "", notes.trim()].filter(Boolean).join(". "),
        }),
      );
    }
    setStep("calendar");
  };

  return (
    <section className="py-14 max-md:py-10 bg-white">
      <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4 text-center">
        <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
          Free Behavior Specialist Call
        </span>
        <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink mb-4">{heading}</h2>
        <p className="font-body text-base text-gray-muted leading-relaxed max-w-[560px] mx-auto mb-7">{sub}</p>
        <button
          type="button"
          onClick={() => {
            setStep("dog");
            setOpen(true);
          }}
          className="btn btn-blue btn-lg max-md:w-full"
        >
          Book With A Behavior Specialist &rarr;
        </button>
      </div>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[10000] bg-black/60 flex items-start justify-center overflow-y-auto p-4 max-md:p-0"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Book with a behavior specialist"
        >
          <div
            ref={panelRef}
            className={`relative bg-white w-full rounded-2xl max-md:rounded-none shadow-2xl my-8 max-md:my-0 max-md:min-h-full p-8 max-md:p-5 max-md:pt-14 text-left ${
              step === "calendar" ? "max-w-[900px]" : "max-w-[600px]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-2xl text-gray-muted hover:bg-cream cursor-pointer bg-transparent border-none"
            >
              &times;
            </button>

            {step !== "calendar" && (
              <>
                <div className="flex justify-between font-ui text-[11px] font-bold tracking-[1px] uppercase text-gray-muted mb-2 pr-10">
                  <span>Step {stepNum} of {total}</span>
                  <span>{Math.round((stepNum / total) * 100)}%</span>
                </div>
                <div className="h-[5px] rounded-full bg-cream overflow-hidden mb-6" role="progressbar" aria-valuenow={stepNum} aria-valuemin={1} aria-valuemax={total}>
                  <div className="h-full bg-blue-500 transition-[width] duration-300" style={{ width: `${(stepNum / total) * 100}%` }} />
                </div>
              </>
            )}

            {step === "dog" && (
              <div>
                <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2">Before You Book</div>
                <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">Tell us about your dog</h3>
                <p className="font-body text-[13px] text-gray-muted mb-5">So your specialist comes to the call prepared.</p>
                <label className={labelClass} htmlFor="bs-dog-name">Dog&rsquo;s name</label>
                <input id="bs-dog-name" className={`${fieldClass} mb-3.5`} type="text" autoComplete="off" placeholder="e.g. Max" value={dogName} onChange={(e) => setDogName(e.target.value)} />
                <label className={labelClass} htmlFor="bs-breed">Breed (or closest match)</label>
                <input id="bs-breed" className={`${fieldClass} mb-3.5`} type="text" placeholder="e.g. German Shepherd, mixed breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
                <label className={labelClass} htmlFor="bs-age">Age</label>
                <select id="bs-age" className={`${fieldClass} mb-5`} value={age} onChange={(e) => setAge(e.target.value)}>
                  <option value="">Select age range</option>
                  {DOG_AGES.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
                <button
                  type="button"
                  className="btn btn-blue w-full"
                  onClick={() => {
                    if (!dogName.trim()) { setError("Please enter your dog's name."); return; }
                    setError(null);
                    setStep(0);
                  }}
                >
                  Continue &rarr;
                </button>
              </div>
            )}

            {typeof step === "number" && (
              <div>
                <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2">{INTAKE[step].eyebrow}</div>
                <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">{INTAKE[step].q}</h3>
                {INTAKE[step].sub && <p className="font-body text-[13px] text-gray-muted mb-4">{INTAKE[step].sub}</p>}
                <div className={`flex flex-col gap-2 ${INTAKE[step].sub ? "" : "mt-4"}`}>
                  {INTAKE[step].options.map((o) => {
                    const q = INTAKE[step as number];
                    const on = answers[q.id] === o.key;
                    return (
                      <button
                        key={o.key}
                        type="button"
                        onClick={() => {
                          setAnswers((a) => ({ ...a, [q.id]: o.key }));
                          setStep((step as number) < INTAKE.length - 1 ? (step as number) + 1 : "final");
                        }}
                        className={`w-full flex items-center gap-3 text-left px-4 py-3.5 border-[1.5px] rounded-xl font-body text-[15px] font-medium transition-colors cursor-pointer ${
                          on ? "border-blue-500 bg-blue-50 text-ink" : "border-border bg-white text-ink/80 hover:border-blue-500 hover:bg-blue-50"
                        }`}
                      >
                        <span className={`w-[18px] h-[18px] shrink-0 rounded-full border-[1.5px] ${on ? "bg-blue-500 border-blue-500" : "border-gray-muted"}`} aria-hidden="true" />
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === "final" && (
              <div>
                <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2">Last Step</div>
                <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">
                  Anything else your specialist should know?
                </h3>
                <p className="font-body text-[13px] text-gray-muted mb-4">Optional. Triggers, bite history, what you&rsquo;ve tried.</p>
                <textarea
                  className={`${fieldClass} min-h-[110px] mb-4`}
                  placeholder="e.g. Lunges at other dogs on walks, fine at home"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                {sticky ? (
                  <p className="font-body text-[13px] text-gray-muted bg-cream rounded-lg px-4 py-3 mb-4">
                    Booking as <b className="text-ink">{sticky.full_name || sticky.first_name}</b> ({sticky.email}).{" "}
                    <button type="button" className="underline cursor-pointer bg-transparent border-none p-0 text-gray-muted" onClick={() => setSticky(null)}>
                      Not you?
                    </button>
                  </p>
                ) : (
                  <>
                    <label className={labelClass} htmlFor="bs-name">Full name</label>
                    <input id="bs-name" className={`${fieldClass} mb-3.5`} type="text" autoComplete="name" placeholder="First and last name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label className={labelClass} htmlFor="bs-email">Email</label>
                    <input id="bs-email" className={`${fieldClass} mb-3.5`} type="email" autoComplete="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className={labelClass} htmlFor="bs-phone">Mobile</label>
                    <input id="bs-phone" className={`${fieldClass} mb-4`} type="tel" inputMode="tel" autoComplete="tel" placeholder="(555) 555-5555" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </>
                )}
                <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} className="absolute -left-[9999px] w-px h-px opacity-0" aria-hidden="true" />
                <button type="button" className="btn btn-blue btn-lg w-full" onClick={finish}>
                  See Available Times &rarr;
                </button>
              </div>
            )}

            {step === "calendar" && (
              <div>
                <div className="text-center mb-5 pr-8 max-md:pr-0">
                  <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-green-500 mb-2">&#10003; Your answers are saved</div>
                  <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight">Pick a time for your call</h3>
                </div>
                {calendarUrl ? (
                  <BookingEmbed src={calendarLink || calendarUrl} title="Book with a Cali K9 behavior specialist" />
                ) : (
                  <div className="border-2 border-dashed border-border rounded-xl p-10 text-center font-body text-[14px] text-gray-muted">
                    Preview: the behavior specialist calendar appears here once its link is added.
                  </div>
                )}
              </div>
            )}

            {error && step !== "calendar" && (
              <p className="font-body text-[12.5px] text-red-500 mt-3 text-center" role="alert">{error}</p>
            )}

            {step !== "dog" && step !== "calendar" && (
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setStep(step === "final" ? INTAKE.length - 1 : step === 0 ? "dog" : (step as number) - 1);
                }}
                className="block mx-auto font-body text-[12.5px] text-gray-muted underline mt-4 cursor-pointer bg-transparent border-none"
              >
                &larr; Back
              </button>
            )}
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}
