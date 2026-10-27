"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CLASSIC_SESSIONS,
  MASTERCLASS_NAME,
  nextOccurrence,
  sessionsFor,
} from "@/lib/masterclass-sessions";

// Closing section on the evaluation pages: the free live masterclass, as the
// soft offer for visitors who aren't ready to book. `compact` is a one-row
// strip for mid-page placement.
export default function WebinarPromo({ compact = false }: { compact?: boolean }) {
  // Weekday fallback renders on the server; the real next date fills in on
  // the client, where "now" is the visitor's clock.
  const [next, setNext] = useState(() => {
    const s = sessionsFor(CLASSIC_SESSIONS)[0];
    return { date: s.day, time: s.label };
  });

  useEffect(() => {
    const now = new Date();
    const soonest = sessionsFor(CLASSIC_SESSIONS)
      .map((s) => ({ s, occ: nextOccurrence(s, now) }))
      .sort((a, b) => a.occ.instant.getTime() - b.occ.instant.getTime())[0];
    setNext({ date: soonest.occ.dateLabel, time: soonest.s.label });
  }, []);

  if (compact) {
    return (
      <section className="bg-[#0A0A0A] py-9 max-md:py-8">
        <div className="max-w-[1080px] mx-auto px-6 max-[480px]:px-4 flex items-center justify-between gap-8 max-md:flex-col max-md:text-center max-md:gap-5">
          <div className="flex items-center gap-5 max-md:flex-col max-md:gap-3">
            <span className="shrink-0 inline-flex items-center gap-2 border border-red-500/60 bg-red-500/10 text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Free Live Masterclass
            </span>
            <div>
              <div className="font-display text-[clamp(24px,2.6vw,32px)] leading-none text-white mb-1.5 uppercase">
                {MASTERCLASS_NAME}
              </div>
              <div className="font-body text-[14px] text-white/60">
                Next class: <b className="text-white/85">{next.date}</b> &middot; {next.time}
              </div>
            </div>
          </div>
          <Link href="/free-masterclass" className="btn btn-white shrink-0 max-md:w-full">
            Save My Free Seat <span className="ml-2 relative -top-[2.5px] leading-none">&rarr;</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 max-md:py-14 text-center border-b border-white/10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(245,158,11,0.16) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[720px] mx-auto px-6">
        <span className="inline-flex items-center gap-2 border border-red-500/60 bg-red-500/10 text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-3.5 py-1.5 rounded-md mb-5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Free Live Masterclass &middot; Zoom
        </span>
        <h2 className="font-display text-[clamp(38px,5vw,60px)] leading-[0.93] text-white mb-4">
          NOT SURE YET? WATCH JAS <span className="text-amber-400">TRAIN LIVE, FREE.</span>
        </h2>
        <div className="font-ui text-[15px] font-bold tracking-[2px] uppercase text-amber-400 mb-5">{MASTERCLASS_NAME}</div>
        <div className="w-12 h-[3px] bg-amber-400 mx-auto mb-6" />
        <p className="font-body text-base text-white/70 leading-relaxed mb-6 max-w-[560px] mx-auto">
          Join Jas Leverette of Netflix&rsquo;s Canine Intervention live on Zoom,
          free. Learn why your dog isn&rsquo;t listening and the
          framework Cali K9 uses to fix it, in just 15 minutes a day.
        </p>
        <p className="font-body text-[15px] text-white/60 mb-8">
          Next class: <b className="text-white">{next.date}</b> &middot; {next.time}
        </p>
        <Link href="/free-masterclass" className="btn btn-white btn-lg max-[480px]:w-full">
          Save My Free Seat <span className="ml-2 relative -top-[2.5px] leading-none">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
