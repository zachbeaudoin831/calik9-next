"use client";

import { useEffect, useState } from "react";

// The live masterclass runs twice a week. Change SESSIONS if a slot moves —
// every page that shows the dates (masterclass, invite, results, call
// thank-you) reads from here.
export const SESSIONS = [
  { weekday: 3, hourPacific: 16, label: "4:00 PM Pacific / 7:00 PM Eastern", short: "Wednesdays 4 PM PT" },
  { weekday: 6, hourPacific: 10, label: "10:00 AM Pacific / 1:00 PM Eastern", short: "Saturdays 10 AM PT" },
] as const;

// UTC instant of `hourPacific` on a calendar date in Los Angeles, correct
// across daylight-saving changes.
function slotInstant(y: number, m: number, d: number, hourPacific: number): Date {
  const guess = new Date(Date.UTC(y, m, d, hourPacific + 7, 0, 0)); // assume PDT (UTC-7)
  try {
    const laHour = Number(
      new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "numeric", hour12: false }).format(guess),
    );
    return new Date(guess.getTime() - (laHour - hourPacific) * 3600 * 1000);
  } catch {
    return guess;
  }
}

function nextOccurrence(weekday: number, hourPacific: number, now: Date) {
  let days = (weekday - now.getDay() + 7) % 7;
  let target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days);
  let instant = slotInstant(target.getFullYear(), target.getMonth(), target.getDate(), hourPacific);
  if (instant.getTime() < now.getTime()) {
    days += 7;
    target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days);
    instant = slotInstant(target.getFullYear(), target.getMonth(), target.getDate(), hourPacific);
  }
  return { target, instant };
}

export default function EventDate({ center = false }: { center?: boolean }) {
  const [rows, setRows] = useState<{ date: string; label: string; local: string }[]>(
    SESSIONS.map((s) => ({ date: s.weekday === 3 ? "Wednesday" : "Saturday", label: s.label, local: "" })),
  );

  useEffect(() => {
    const now = new Date();
    let tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { /* no Intl */ }
    const next = SESSIONS.map((s) => {
      const { target, instant } = nextOccurrence(s.weekday, s.hourPacific, now);
      let local = "";
      try {
        local = instant.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
      } catch { /* no Intl */ }
      return {
        date: target.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
        label: s.label,
        local,
        instant,
      };
    });
    // Soonest session first.
    next.sort((a, b) => a.instant.getTime() - b.instant.getTime());
    setRows(next.map(({ date, label, local }) => ({ date, label, local: local && tz ? `${local} (${tz})` : local })));
  }, []);

  return (
    <div className={`flex flex-col gap-2.5 ${center ? "items-center text-center" : "items-center lg:items-start"}`}>
      <span className="bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full">
        Live on Zoom &middot; Twice A Week
      </span>
      {rows.map((r) => (
        <div key={r.label} className="font-body text-[15px] text-white/85 leading-snug">
          <b>{r.date}</b> &middot; {r.label}
          {r.local && <span className="block font-body text-[12px] text-white/50">Your local time: {r.local}</span>}
        </div>
      ))}
      <p className="font-ui text-[11px] tracking-[1px] uppercase text-white/45 mt-1">
        Pick Wednesday or Saturday when you register
      </p>
    </div>
  );
}
