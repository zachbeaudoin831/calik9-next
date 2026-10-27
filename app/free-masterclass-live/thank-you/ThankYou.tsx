"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MASTERCLASS_NAME, nextOccurrence, sessionById } from "@/lib/masterclass-sessions";
import { LIVE_SESSION_KEY } from "@/lib/masterclass-survey";

// Thank-you video. Text-only until Zach sends the GHL CDN URL; paste it here
// (e.g. "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/<id>.mp4")
// and the player appears under the headline.
const THANK_YOU_VIDEO: string | null = null;

type Saved = { firstName?: string; session?: string; struggle?: string };

export default function ThankYou({ sessionId }: { sessionId?: string }) {
  const [saved, setSaved] = useState<Saved>({});
  const [when, setWhen] = useState<{ full: string; local: string } | null>(null);

  useEffect(() => {
    let s: Saved = {};
    try {
      s = JSON.parse(window.sessionStorage.getItem(LIVE_SESSION_KEY) || "{}") as Saved;
    } catch {
      // private mode
    }
    setSaved(s);
    const session = sessionById(sessionId) || sessionById(s.session);
    if (session) {
      const occ = nextOccurrence(session);
      let local = "";
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        local = `${occ.instant.toLocaleString("en-US", { weekday: "short", hour: "numeric", minute: "2-digit", timeZoneName: "short" })} (${tz})`;
      } catch {
        // no Intl
      }
      setWhen({ full: occ.full, local });
    }
  }, [sessionId]);

  const name = saved.firstName ? saved.firstName.charAt(0).toUpperCase() + saved.firstName.slice(1) : "";
  const struggle = saved.struggle ? saved.struggle.charAt(0).toLowerCase() + saved.struggle.slice(1) : "";

  const steps = [
    {
      num: "1",
      title: "MODULES 1 & 2 ARE ON THE WAY",
      desc: `Check your inbox. We're sending you Module 1 and Module 2 of the Cali K9 training system so you can start working on ${
        struggle || "your dog's biggest issue"
      } right away, before class even starts.`,
    },
    {
      num: "2",
      title: "WATCH FOR YOUR ZOOM LINK",
      desc: `We'll email your Zoom link for ${when ? when.full.replace(" · ", " at ") : "the session you picked"}, plus a reminder before class. Add it to your calendar now so the day doesn't get away from you.`,
    },
    {
      num: "3",
      title: "SHOW UP READY",
      desc: "Bring something to take notes with and your questions about your dog. Jas will show you exactly what to work on first.",
    },
  ];

  return (
    <main>
      {/* ── Confirmation hero ── */}
      <section
        className="relative overflow-hidden pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            &#10003; Seat Reserved
          </span>
          <h1 className="font-display text-[clamp(40px,5.5vw,64px)] text-white leading-[0.95] mb-5">
            YOU&rsquo;RE IN{name ? `, ${name.toUpperCase()}` : ""}. <span className="text-[#6A9FFF]">SEE YOU IN CLASS.</span>
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-[580px] mx-auto mb-8">
            Your seat at <strong className="text-white">{MASTERCLASS_NAME}</strong>, Jas&rsquo;s free live masterclass, is confirmed. Modules 1 and 2 are headed to
            your inbox now so you can get started today.
          </p>

          {THANK_YOU_VIDEO && (
            <video className="w-full rounded-xl bg-black shadow-lg mb-8" controls playsInline preload="metadata">
              <source src={THANK_YOU_VIDEO} type="video/mp4" />
            </video>
          )}

          <div className="inline-block bg-white/[0.08] border border-white/15 rounded-xl px-6 py-5 max-w-full">
            <div className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-amber-400 mb-1.5">
              Your Masterclass &middot; Live On Zoom
            </div>
            <div className="font-body text-[17px] text-white font-semibold leading-snug">
              {when ? when.full : "Your session details are on the way by email."}
            </div>
            {when?.local && <div className="font-body text-[12.5px] text-white/50 mt-1">Your local time: {when.local}</div>}
          </div>
        </div>
      </section>

      {/* ── What happens next ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Before Class
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-[0.93] text-ink">WHAT HAPPENS NEXT</h2>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {steps.map((s) => (
              <div key={s.num} className="bg-white border border-black/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mb-4">
                  {s.num}
                </div>
                <h3 className="font-display text-lg text-ink mb-2">{s.title}</h3>
                <p className="font-body text-sm text-gray-muted leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-gray-muted text-center mt-8">
            Don&rsquo;t see our email within 15 minutes? Check spam and promotions first, then reach out
            through{" "}
            <Link href="/contact-us" className="underline hover:text-ink">
              our contact page
            </Link>{" "}
            and we&rsquo;ll resend it.
          </p>
        </div>
      </section>
    </main>
  );
}
