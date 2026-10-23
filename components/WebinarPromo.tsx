"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CLASSIC_SESSIONS,
  nextOccurrence,
  sessionsFor,
} from "@/lib/masterclass-sessions";

// Soft "not ready to buy" offer under the evaluation pages' final CTA:
// the next free live masterclass.
export default function WebinarPromo() {
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

  return (
    <section className="bg-ink py-9 max-md:py-8 border-b border-white/10">
      <div className="max-w-[1080px] mx-auto px-6 max-[480px]:px-4 flex items-center justify-between gap-8 max-md:flex-col max-md:text-center max-md:gap-5">
        <div className="flex items-center gap-5 max-md:flex-col max-md:gap-3">
          <span className="shrink-0 inline-flex items-center gap-2 border border-red-500/60 text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live
          </span>
          <div>
            <div className="font-display text-[clamp(24px,2.6vw,32px)] leading-none text-white mb-1.5">
              NOT SURE YET? WATCH JAS TRAIN LIVE, FREE.
            </div>
            <div className="font-body text-[14px] text-white/60">
              Next class: <b className="text-white/85">{next.date}</b> &middot; {next.time}
            </div>
          </div>
        </div>
        <Link href="/free-masterclass" className="btn btn-gold shrink-0 max-md:w-full">
          Save My Seat <span className="ml-2 relative -top-[2.5px] leading-none">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
