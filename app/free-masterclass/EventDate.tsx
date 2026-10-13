"use client";

import { useEffect, useState } from "react";
import {
  CLASSIC_SESSIONS,
  dayPhrase,
  nextOccurrence,
  sessionsFor,
  timesAWeek,
  type SessionId,
} from "@/lib/masterclass-sessions";

// The live masterclass date block. The schedule itself lives in
// lib/masterclass-sessions.ts. Pages that register through the GHL form
// (masterclass, invite, results, call thank-you) show CLASSIC_SESSIONS;
// /free-masterclass-live passes every session.
export default function EventDate({
  center = false,
  sessions = CLASSIC_SESSIONS,
}: {
  center?: boolean;
  sessions?: readonly SessionId[];
}) {
  const list = sessionsFor(sessions);
  const [rows, setRows] = useState<{ date: string; label: string; local: string }[]>(
    list.map((s) => ({ date: s.day, label: s.label, local: "" })),
  );

  useEffect(() => {
    const now = new Date();
    let tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { /* no Intl */ }
    const next = sessionsFor(sessions).map((s) => {
      const occ = nextOccurrence(s, now);
      let local = "";
      try {
        local = occ.instant.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
      } catch { /* no Intl */ }
      return { date: occ.dateLabel, label: s.label, local: local && tz ? `${local} (${tz})` : local, at: occ.instant.getTime() };
    });
    // Soonest session first.
    next.sort((a, b) => a.at - b.at);
    setRows(next.map(({ date, label, local }) => ({ date, label, local })));
  }, [sessions]);

  return (
    <div className={`flex flex-col gap-2.5 ${center ? "items-center text-center" : "items-center lg:items-start"}`}>
      <span className="bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full">
        Live on Zoom &middot; {timesAWeek(list.length)}
      </span>
      {rows.map((r) => (
        <div key={r.date} className="font-body text-[15px] text-white/85 leading-snug">
          <b>{r.date}</b> &middot; {r.label}
          {r.local && <span className="block font-body text-[12px] text-white/50">Your local time: {r.local}</span>}
        </div>
      ))}
      <p className="font-ui text-[11px] tracking-[1px] uppercase text-white/45 mt-1">
        Pick {dayPhrase(sessions)} when you register
      </p>
    </div>
  );
}
