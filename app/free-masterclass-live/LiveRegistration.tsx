"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { readAttribution } from "@/lib/attribution";
import { nextOccurrence, sessionsFor, type SessionId } from "@/lib/masterclass-sessions";
import { LIVE_SESSION_KEY, SURVEY } from "@/lib/masterclass-survey";

// On-site masterclass registration: name / email / mobile / session, then a
// three-question survey, then the thank-you page. Each step posts to
// /api/masterclass/register, which writes the contact, tags and fields to GHL.

const THANK_YOU = "/free-masterclass-live/thank-you";

const fieldClass =
  "w-full font-body text-[15px] text-ink bg-white border-[1.5px] border-border rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors";
const labelClass = "block font-ui text-[11px] font-bold tracking-[1px] uppercase text-gray-muted mb-1.5";

type Slot = { id: SessionId; day: string; label: string; date: string; at: number };

function post(payload: object, keepalive = false) {
  return fetch("/api/masterclass/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive,
  }).catch(() => undefined);
}

export default function LiveRegistration({ sessions }: { sessions: readonly SessionId[] }) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const registered = useRef<Promise<unknown> | null>(null);

  const [slots, setSlots] = useState<Slot[]>(() =>
    sessionsFor(sessions).map((s) => ({ id: s.id, day: s.day, label: s.label, date: s.day, at: 0 })),
  );
  const [step, setStep] = useState<"form" | number>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [session, setSession] = useState<SessionId | null>(null);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finishing, setFinishing] = useState(false);

  // Real dates only on the client (they depend on "now").
  useEffect(() => {
    const now = new Date();
    setSlots(
      sessionsFor(sessions)
        .map((s) => {
          const o = nextOccurrence(s, now);
          const short = o.instant.toLocaleDateString("en-US", { timeZone: "America/Los_Angeles", weekday: "long", month: "short", day: "numeric" });
          return { id: s.id, day: s.day, label: s.label, date: short, at: o.instant.getTime() };
        })
        .sort((a, b) => a.at - b.at),
    );
  }, [sessions]);

  // Keep the card in view as it changes height between steps (mobile).
  useEffect(() => {
    const el = cardRef.current;
    if (step === "form" || !el) return;
    if (el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  const digits = phone.replace(/\D/g, "");
  const contact = () => ({
    name: name.trim().replace(/\s+/g, " "),
    email: email.trim(),
    phone: digits,
    session,
    smsConsent: consent,
    website,
    attribution: readAttribution(),
  });

  const join = () => {
    const missing: string[] = [];
    if (name.trim().split(/\s+/).filter(Boolean).length < 2) missing.push("your full name (first and last)");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) missing.push("a valid email");
    if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith("1")))) missing.push("a valid mobile number");
    if (!session) missing.push("the session you'll attend");
    if (missing.length) {
      setError(`Please add ${missing.length === 1 ? missing[0] : `${missing.slice(0, -1).join(", ")} and ${missing[missing.length - 1]}`}.`);
      return;
    }
    setError(null);

    // Registration is the conversion. Base pixel loads in the root layout.
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") w.fbq("track", "CompleteRegistration");

    try {
      window.sessionStorage.setItem(
        LIVE_SESSION_KEY,
        JSON.stringify({ firstName: name.trim().split(/\s+/)[0], session, at: Date.now() }),
      );
    } catch {
      // private mode: thank-you page still works from the URL
    }
    registered.current = post({ stage: "register", ...contact() });
    router.prefetch(THANK_YOU);
    setStep(0);
  };

  const answer = async (qIndex: number, key: string) => {
    const next = { ...answers, [SURVEY[qIndex].id]: key };
    setAnswers(next);
    if (qIndex < SURVEY.length - 1) {
      setStep(qIndex + 1);
      return;
    }
    setFinishing(true);
    // Let the registration land first so the two GHL writes never race.
    await Promise.race([registered.current, new Promise((r) => setTimeout(r, 2500))]);
    post({ stage: "survey", ...contact(), answers: next }, true);
    try {
      const saved = JSON.parse(window.sessionStorage.getItem(LIVE_SESSION_KEY) || "{}");
      const struggle = SURVEY[0].options.find((o) => o.key === next.struggle);
      window.sessionStorage.setItem(
        LIVE_SESSION_KEY,
        JSON.stringify({ ...saved, struggle: struggle && struggle.key !== "other" ? struggle.label : undefined }),
      );
    } catch {
      // ignore
    }
    router.push(`${THANK_YOU}?session=${session}`);
  };

  const chosen = slots.find((s) => s.id === session);

  return (
    <div ref={cardRef} className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-7 max-md:p-5 text-left scroll-mt-24">
      {step === "form" && (
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            join();
          }}
        >
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-1.5">
            100% Free &middot; Live On Zoom
          </div>
          <h2 className="font-display text-[26px] max-md:text-[23px] text-ink leading-tight mb-5">
            Reserve Your Free Seat
          </h2>

          <label className={labelClass} htmlFor="mc-name">Full name</label>
          <input id="mc-name" className={`${fieldClass} mb-3.5`} type="text" autoComplete="name" placeholder="First and last name" value={name} onChange={(e) => setName(e.target.value)} />

          <label className={labelClass} htmlFor="mc-email">Email</label>
          <input id="mc-email" className={`${fieldClass} mb-3.5`} type="email" autoComplete="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className={labelClass} htmlFor="mc-phone">Mobile</label>
          <input id="mc-phone" className={`${fieldClass} mb-4`} type="tel" inputMode="tel" autoComplete="tel" placeholder="(555) 555-5555" value={phone} onChange={(e) => setPhone(e.target.value)} />

          {/* Honeypot: hidden from people, filled by bots. */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} className="absolute -left-[9999px] w-px h-px opacity-0" aria-hidden="true" />

          <fieldset>
            <legend className={labelClass}>Pick your session</legend>
            <div className="flex flex-col gap-2">
              {slots.map((s) => {
                const on = session === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setSession(s.id)}
                    className={`w-full flex items-center gap-3 text-left px-4 py-3 border-[1.5px] rounded-lg transition-colors cursor-pointer ${
                      on ? "border-blue-500 bg-blue-50" : "border-border bg-white hover:border-blue-500"
                    }`}
                  >
                    <span className={`w-[18px] h-[18px] shrink-0 rounded-full border-[1.5px] ${on ? "bg-blue-500 border-blue-500 shadow-[inset_0_0_0_3px_white]" : "border-gray-muted"}`} aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block font-body text-[15px] font-bold text-ink leading-tight">{s.date}</span>
                      <span className="block font-body text-[13px] text-gray-muted">{s.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="flex items-start gap-2.5 mt-4 cursor-pointer">
            <input type="checkbox" className="mt-0.5 w-4 h-4 shrink-0 accent-blue-500" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span className="font-body text-[12px] text-gray-muted leading-snug">
              I consent to receive occasional marketing communication from Cali K9. Message &amp; data
              rates may apply. Reply &ldquo;stop&rdquo; to unsubscribe at any time.
            </span>
          </label>

          <button type="submit" className="btn btn-blue btn-lg w-full mt-5">
            Join Masterclass &rarr;
          </button>
          {error && (
            <p className="font-body text-[12.5px] text-red-500 mt-2.5 text-center" role="alert">{error}</p>
          )}
          <p className="font-body text-[11px] text-gray-muted text-center mt-3 leading-snug">
            We&rsquo;ll email your Zoom link and registration details.{" "}
            <Link href="/terms-of-service" className="underline">Terms</Link> &middot;{" "}
            <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
          </p>
        </form>
      )}

      {typeof step === "number" && (
        <div>
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-ink rounded-lg px-3.5 py-2.5 mb-5 font-body text-[13px]">
            <span className="font-bold text-green-500" aria-hidden="true">&#10003;</span>
            <span>
              <b>You&rsquo;re registered</b>
              {chosen ? ` for ${chosen.date}.` : "."} Three quick questions so Jas can tailor the class to your dog.
            </span>
          </div>

          <div className="flex justify-between font-ui text-[11px] font-bold tracking-[1px] uppercase text-gray-muted mb-2">
            <span>Question {step + 1} of {SURVEY.length}</span>
            <span>{Math.round(((step + 1) / SURVEY.length) * 100)}%</span>
          </div>
          <div className="h-[5px] rounded-full bg-cream overflow-hidden mb-6" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={SURVEY.length}>
            <div className="h-full bg-blue-500 transition-[width] duration-300" style={{ width: `${((step + 1) / SURVEY.length) * 100}%` }} />
          </div>

          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2">{SURVEY[step].eyebrow}</div>
          <h3 className="font-display text-[24px] max-md:text-[21px] text-ink leading-tight mb-1.5">{SURVEY[step].q}</h3>
          {SURVEY[step].sub && <p className="font-body text-[13px] text-gray-muted mb-4">{SURVEY[step].sub}</p>}
          <div className={`flex flex-col gap-2 ${SURVEY[step].sub ? "" : "mt-4"}`}>
            {SURVEY[step].options.map((o) => {
              const on = answers[SURVEY[step as number].id] === o.key;
              return (
                <button
                  key={o.key}
                  type="button"
                  disabled={finishing}
                  onClick={() => answer(step as number, o.key)}
                  className={`w-full flex items-center gap-3 text-left px-4 py-3.5 border-[1.5px] rounded-xl font-body text-[15px] font-medium transition-colors cursor-pointer disabled:opacity-60 ${
                    on ? "border-blue-500 bg-blue-50 text-ink" : "border-border bg-white text-ink/80 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  <span className={`w-[18px] h-[18px] shrink-0 rounded-full border-[1.5px] ${on ? "bg-blue-500 border-blue-500" : "border-gray-muted"}`} aria-hidden="true" />
                  {o.label}
                </button>
              );
            })}
          </div>
          {finishing && <p className="font-body text-[13px] text-gray-muted text-center mt-4">Saving your answers&hellip;</p>}
          {step > 0 && !finishing && (
            <button type="button" onClick={() => setStep(step - 1)} className="block mx-auto font-body text-[12.5px] text-gray-muted underline mt-4 cursor-pointer bg-transparent border-none">
              &larr; Back
            </button>
          )}
        </div>
      )}
    </div>
  );
}
