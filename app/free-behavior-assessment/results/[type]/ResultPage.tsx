"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import EventDate from "../../../free-masterclass/EventDate";
import { MODULES, PILLARS, RESULTS, SESSION_KEY, type DogType, type SessionResult } from "../content";

// Primary CTA — the free Saturday masterclass (invite variant carries the
// "based on your assessment" intro band).
const MASTERCLASS_URL = "/free-masterclass/invite";
// The $7, 20-minute call. Secondary by default; PRIMARY when the visitor's
// budget answer was "$500 – $1,500" or "Whatever it takes".
const CALL_URL = "https://calik9.com/book-your-call";

const MODULE_STEP_COUNTS = [4, 5, 8, 8, 6, 7, 6, 6]; // = 50

function subscribeNoop() {
  return () => {};
}

function readSession(): string | null {
  try {
    return window.sessionStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
}

function firstNameOf(s: string) {
  return s.trim().split(/\s+/)[0] || "";
}

// A lead is "qualified" for the call CTA when they signalled severity or a
// higher budget — everyone else sees the call as a quiet text link so it
// never competes with the masterclass.
function isQualified(s: SessionResult | null, type: DogType) {
  if (!s) return false;
  const urg = (s.urgency || "").toLowerCase();
  const bud = (s.budget || "").replace(/\s/g, "");
  const aggression = (s.problems || []).some((p) => p.toLowerCase().startsWith("aggression"));
  return (
    urg.startsWith("serious") ||
    urg.startsWith("crisis") ||
    bud.toLowerCase().startsWith("whatever") ||
    bud.startsWith("$1,500") || // legacy answers
    bud.startsWith("$5,000") ||
    (type === "fearful" && aggression)
  );
}

// Budget answers that flip the call to the primary CTA.
function wantsCallFirst(s: SessionResult | null) {
  const bud = (s?.budget || "").replace(/\s/g, "").toLowerCase();
  return bud.startsWith("$500") || bud.startsWith("whatever") || bud.startsWith("$1,500") || bud.startsWith("$5,000");
}

export default function ResultPage({ type }: { type: DogType }) {
  const r = RESULTS[type];
  // Personalization handed over by the quiz (first name + qualification).
  // Read from sessionStorage via useSyncExternalStore so the server render
  // (no storage) and the client agree without a setState-in-effect.
  const raw = useSyncExternalStore(subscribeNoop, readSession, () => null);
  let session: SessionResult | null = null;
  try {
    const parsed = raw ? (JSON.parse(raw) as SessionResult) : null;
    if (parsed && parsed.type === type) session = parsed;
  } catch {
    session = null;
  }

  useEffect(() => {
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "ViewContent", { content_name: `assessment-result-${type}` });
    }
  }, [type]);

  const first = firstNameOf(session?.firstName || "");
  const dog = (session?.dogName || "").trim();
  const qualified = isQualified(session, type);
  const callFirst = wantsCallFirst(session);
  const [startA, startB] = r.roadmap.startModules;
  const [goalA, goalB] = r.roadmap.goalModules;
  const inStart = (n: number) => n >= startA && n <= startB;
  const inGoal = (n: number) => n >= goalA && n <= goalB;

  return (
    <main>
      {/* ── 6. Diagnosis ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-14 max-md:pt-[100px] max-md:pb-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[800px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
            Your Free Behavior Assessment Results
          </span>
          {first && (
            <p className="font-body text-base text-white/70 mb-3">
              {first}, here&rsquo;s what your answers point to{dog ? ` for ${dog}` : ""}.
            </p>
          )}
          <div className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 mb-2">
            Your Dog Type
          </div>
          <h1 className="font-display text-[clamp(38px,6vw,64px)] text-white leading-[0.95] mb-6 uppercase">
            {r.label}
          </h1>
          <p className="font-body text-lg max-md:text-base text-white/80 leading-relaxed max-w-[640px] mx-auto">
            {r.tagline}
          </p>
        </div>
      </section>

      {/* ── 7. Why your dog behaves this way ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[960px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10 max-md:mb-7">
            <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
              The Diagnosis
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] text-ink leading-[1.02]">
              WHY YOUR DOG BEHAVES THIS WAY
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <Block eyebrow="What You're Seeing">
              <ul className="flex flex-col gap-2.5">
                {r.seeing.map((s) => (
                  <li key={s} className="flex gap-2.5 font-body text-[14.5px] text-ink/85 leading-relaxed">
                    <span className="text-blue-500 font-bold shrink-0 mt-px">&#10003;</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block eyebrow="Why It's Happening">
              {r.why.map((p) => (
                <p key={p} className="font-body text-[14.5px] text-ink/85 leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </Block>
            <Block eyebrow="What Owners Commonly Get Wrong">
              <ul className="flex flex-col gap-2.5">
                {r.wrong.map((s) => (
                  <li key={s} className="flex gap-2.5 font-body text-[14.5px] text-ink/85 leading-relaxed">
                    <span className="text-red-500 font-bold shrink-0 mt-px">&#10007;</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block eyebrow="What Needs To Happen Next" highlight>
              {r.next.map((p) => (
                <p key={p} className="font-body text-[14.5px] text-ink/85 leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </Block>
          </div>
        </div>
      </section>

      {/* ── 8. 3 things to start doing ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[960px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10 max-md:mb-7">
            <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
              Start This Week
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] text-ink leading-[1.02]">
              3 THINGS YOU SHOULD START DOING
            </h2>
            <p className="font-body text-[15px] text-gray-muted mt-3 max-w-[560px] mx-auto">
              Tailored to a {r.label.toLowerCase()} dog. No equipment needed &mdash; just your dog&rsquo;s
              meals and 10 minutes.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {r.actions.map((a, i) => (
              <div key={a.title} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display text-[20px] text-ink leading-tight mb-2">{a.title}</h3>
                <p className="font-body text-[14px] text-gray-muted leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Where your dog fits into the 50-Step Roadmap ── */}
      <section className="py-16 max-md:py-10 bg-ink text-white">
        <div className="max-w-[960px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10 max-md:mb-7">
            <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-200 mb-2.5">
              The Cali K9 System
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] leading-[1.02]">
              WHERE YOUR DOG FITS INTO THE 50-STEP ROADMAP&trade;
            </h2>
          </div>

          {/* 5 Pillars → 8 Modules → 50 Steps */}
          <div className="flex items-stretch justify-center gap-3 max-md:gap-2 mb-10">
            {[
              { big: "5", small: "Pillars" },
              { big: "8", small: "Modules" },
              { big: "50", small: "Steps" },
            ].map((t, i) => (
              <div key={t.small} className="flex items-center gap-3 max-md:gap-2">
                <div className="bg-white/[0.06] border border-white/10 rounded-2xl px-7 py-5 max-md:px-4 max-md:py-3.5 text-center min-w-[110px] max-md:min-w-[86px]">
                  <div className="font-display text-[40px] max-md:text-[30px] leading-none text-white">{t.big}</div>
                  <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-white/55 mt-1.5">
                    {t.small}
                  </div>
                </div>
                {i < 2 && <span className="text-white/40 text-xl max-md:text-base">&rarr;</span>}
              </div>
            ))}
          </div>

          {/* Segmented track — one block per module, proportional to its steps */}
          <div className="mb-3 flex justify-between font-ui text-[10.5px] font-bold tracking-[1px] uppercase text-white/45">
            <span>Step 1 &middot; Chaos</span>
            <span className="max-md:hidden">Control</span>
            <span>Step 50 &middot; Freedom</span>
          </div>
          <div className="flex gap-1 h-9 max-md:h-7 rounded-lg overflow-hidden" aria-hidden="true">
            {MODULES.map((m, i) => {
              const start = inStart(m.num);
              const goal = inGoal(m.num);
              return (
                <div
                  key={m.num}
                  style={{ flexGrow: MODULE_STEP_COUNTS[i] }}
                  className={`flex items-center justify-center font-ui text-[11px] font-bold ${
                    start
                      ? "bg-blue-500 text-white"
                      : goal
                        ? "bg-amber-400 text-[#2b1d05]"
                        : "bg-white/[0.08] text-white/45"
                  }`}
                >
                  M{m.num}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 font-ui text-[11px] font-bold tracking-[1px] uppercase">
            <span className="flex items-center gap-2 text-white/80">
              <span className="w-3 h-3 rounded-sm bg-blue-500 inline-block" /> Your Starting Point
            </span>
            <span className="flex items-center gap-2 text-white/80">
              <span className="w-3 h-3 rounded-sm bg-amber-400 inline-block" /> Your Goal
            </span>
          </div>

          <p className="font-body text-[15px] text-white/80 leading-relaxed max-w-[720px] mt-7 mb-8">
            {r.roadmap.note}
          </p>

          <div className="grid grid-cols-4 gap-2.5 max-md:grid-cols-2">
            {MODULES.map((m) => {
              const start = inStart(m.num);
              const goal = inGoal(m.num);
              return (
                <div
                  key={m.num}
                  className={`rounded-xl px-3.5 py-3 border ${
                    start
                      ? "border-blue-400 bg-blue-500/20"
                      : goal
                        ? "border-amber-400/70 bg-amber-400/10"
                        : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between font-ui text-[10.5px] font-bold tracking-[1px] uppercase text-white/50 mb-1">
                    <span>Module {m.num}</span>
                    <span>Steps {m.steps}</span>
                  </div>
                  <div className="font-ui text-[13px] font-semibold text-white leading-snug">{m.title}</div>
                  {start && (
                    <div className="font-ui text-[10px] font-bold tracking-[1px] uppercase text-blue-200 mt-1.5">
                      Start here
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="font-ui text-[10.5px] font-bold tracking-[1.5px] uppercase text-white/45 mb-3">
              The 5 Pillars &middot; highlighted: where your dog needs the most work
            </div>
            <div className="flex flex-wrap gap-2">
              {PILLARS.map((p) => {
                const key = r.roadmap.pillars.includes(p);
                return (
                  <span
                    key={p}
                    className={`font-ui text-[12px] font-semibold px-3.5 py-1.5 rounded-full border ${
                      key ? "bg-white text-ink border-white" : "border-white/15 text-white/60"
                    }`}
                  >
                    {p}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Before / after from a similar dog ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
              Proof
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] text-ink leading-[1.02]">
              A DOG LIKE YOURS
            </h2>
          </div>
          <div className="bg-cream rounded-2xl p-7 max-md:p-5 border border-border">
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 mb-6">
              <div className="bg-white rounded-xl p-5 border border-border">
                <div className="font-ui text-[10.5px] font-bold tracking-[1.5px] uppercase text-red-500 mb-2">
                  Before
                </div>
                <p className="font-body text-[14.5px] text-ink/85 leading-relaxed">{r.proof.before}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-green-500/30">
                <div className="font-ui text-[10.5px] font-bold tracking-[1.5px] uppercase text-green-500 mb-2">
                  After
                </div>
                <p className="font-body text-[14.5px] text-ink/85 leading-relaxed">{r.proof.after}</p>
              </div>
            </div>
            <blockquote className="border-l-[3px] border-blue-500 pl-4.5 font-ui text-[16px] max-md:text-[15px] italic text-ink leading-relaxed">
              {r.proof.quote}
              <span className="block mt-2 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
                &mdash; {r.proof.name} &middot; {r.proof.meta}
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {callFirst ? (
        <>
          {/* ── 11. PRIMARY CTA — book the call (budget $500+ / whatever it takes) ── */}
          <section className="py-20 max-md:py-12 bg-blue-700 text-white text-center">
            <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
              <p className="font-body text-lg max-md:text-base text-white/80 leading-relaxed max-w-[600px] mx-auto mb-8">
                Now that you understand your dog type, let&rsquo;s build the plan for your dog together.
              </p>
              <div className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 mb-3">
                Your Next Step
              </div>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-[0.98] mb-6">
                TALK TO THE CALI K9 TEAM ABOUT YOUR DOG
              </h2>
              <p className="font-body text-base text-white/75 leading-relaxed max-w-[600px] mx-auto mb-7">
                {r.callNote} On a 20-minute call we walk through what your assessment revealed and map
                the exact steps a {r.label.toLowerCase()} dog needs first.
              </p>
              <a href={CALL_URL} className="btn btn-gold btn-lg inline-block">
                Book My Call &rarr;
              </a>
              <p className="font-body text-[12.5px] text-white/50 mt-4">
                $7 refundable reservation &middot; 20 minutes &middot; Credited toward any program
              </p>
            </div>
          </section>

          {/* ── 12. SECONDARY CTA — free Saturday masterclass ── */}
          <section className="py-14 max-md:py-10 bg-cream">
            <div className="max-w-[720px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
              <div className="bg-ink text-white rounded-2xl p-8 max-md:p-6 shadow-sm">
                <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-200 mb-2.5">
                  Prefer To Start With The Free Class?
                </div>
                <h3 className="font-display text-[26px] max-md:text-[22px] leading-tight mb-3">
                  FREE LIVE SATURDAY MASTERCLASS
                </h3>
                <p className="font-body text-[14.5px] text-white/70 leading-relaxed max-w-[560px] mx-auto mb-5">
                  Transform your dog in just 15 minutes a day &mdash; live with Jas Leverette, host of
                  Netflix&rsquo;s <em>Canine Intervention</em>.
                </p>
                <EventDate center />
                <Link href={MASTERCLASS_URL} className="btn btn-outline-white mt-6 inline-block">
                  Reserve My Free Seat &rarr;
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* ── 11. PRIMARY CTA — free Saturday masterclass ── */}
          <section className="py-20 max-md:py-12 bg-blue-700 text-white text-center">
            <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
              <p className="font-body text-lg max-md:text-base text-white/80 leading-relaxed max-w-[600px] mx-auto mb-8">
                Now that you understand your dog type, let me show you exactly what to do next.
              </p>
              <div className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 mb-3">
                Free Live Saturday Masterclass
              </div>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-[0.98] mb-6">
                TRANSFORM YOUR DOG IN JUST 15 MINUTES A DAY
              </h2>
              <p className="font-body text-base text-white/75 leading-relaxed max-w-[600px] mx-auto mb-7">
                Live with <strong className="text-white">Jas Leverette</strong>, host of Netflix&rsquo;s{" "}
                <em>Canine Intervention</em>. You&rsquo;ll see the exact steps a{" "}
                {r.label.toLowerCase()} dog needs first &mdash; and what to do with your dog this week.
              </p>
              <EventDate center />
              <Link href={MASTERCLASS_URL} className="btn btn-gold btn-lg mt-8 inline-block">
                Reserve My Free Seat &rarr;
              </Link>
              <p className="font-body text-[12.5px] text-white/50 mt-4">
                Free &middot; Live on Zoom &middot; Replay sent to everyone who registers
              </p>
            </div>
          </section>

          {/* ── 12. SECONDARY CTA — $7 call (prominent only for qualified leads) ── */}
          <section className="py-14 max-md:py-10 bg-cream">
            <div className="max-w-[720px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
              {qualified ? (
                <div className="bg-white border border-border rounded-2xl p-8 max-md:p-6 shadow-sm">
                  <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
                    Need More Personalized Help?
                  </div>
                  <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-3">
                    TALK TO THE CALI K9 TEAM ABOUT YOUR DOG
                  </h3>
                  <p className="font-body text-[14.5px] text-gray-muted leading-relaxed max-w-[560px] mx-auto mb-6">
                    {r.callNote}
                  </p>
                  <Link href={CALL_URL} className="btn btn-outline">
                    Reserve a $7, 20-Minute Call &rarr;
                  </Link>
                  <p className="font-body text-[12px] text-gray-muted/80 mt-3">
                    Refundable reservation &middot; Credited toward any program
                  </p>
                </div>
              ) : (
                <p className="font-body text-[14px] text-gray-muted leading-relaxed">
                  <strong className="text-ink">Need more personalized help?</strong> If you&rsquo;d rather walk
                  through your results with the team one-on-one,{" "}
                  <Link href={CALL_URL} className="text-blue-500 underline">
                    reserve a 20-minute call
                  </Link>
                  .
                </p>
              )}
            </div>
          </section>
        </>
      )}

      {/* ── Footer ── */}
      <section className="pb-10 bg-cream">
        <div className="max-w-[720px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <p className="font-ui text-xs text-gray-muted/70">
            <Link href="/free-behavior-assessment" className="hover:text-ink underline">
              Retake the assessment
            </Link>
            {" · "}&copy; 2026 Cali K9&reg; &middot;{" "}
            <Link href="/privacy-policy" className="hover:text-ink">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:text-ink">
              Terms
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function Block({
  eyebrow,
  highlight,
  children,
}: {
  eyebrow: string;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl p-6 max-md:p-5 border ${
        highlight ? "bg-blue-50 border-blue-100" : "bg-white border-border shadow-sm"
      }`}
    >
      <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-blue-500 mb-3">
        {eyebrow}
      </div>
      {children}
    </div>
  );
}
