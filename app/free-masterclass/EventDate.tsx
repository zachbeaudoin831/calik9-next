"use client";

import { useEffect, useState } from "react";

// The live masterclass slot. Change these two lines if the time moves —
// every page that shows the date (masterclass, invite, call thank-you)
// reads from here.
const SLOT_HOUR_PACIFIC = 10; // 10:00 AM Pacific
const SLOT_LABEL = "10:00 AM Pacific / 1:00 PM Eastern";

// UTC instant of SLOT_HOUR_PACIFIC on a given calendar date in Los Angeles,
// correct across daylight-saving changes.
function slotInstant(y: number, m: number, d: number): Date {
  const guess = new Date(Date.UTC(y, m, d, SLOT_HOUR_PACIFIC + 7, 0, 0)); // assume PDT (UTC-7)
  try {
    const laHour = Number(
      new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "numeric", hour12: false }).format(guess),
    );
    const drift = laHour - SLOT_HOUR_PACIFIC; // +1 when the date is on PST (UTC-8)
    return new Date(guess.getTime() - drift * 3600 * 1000);
  } catch {
    return guess;
  }
}

export default function EventDate({ center = false }: { center?: boolean }) {
  const [dateStr, setDateStr] = useState("Saturday");
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const now = new Date();
    let daysUntilSat = (6 - now.getDay() + 7) % 7;
    let target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilSat);
    let instant = slotInstant(target.getFullYear(), target.getMonth(), target.getDate());
    // Already past this Saturday's slot → roll to next week.
    if (instant.getTime() < now.getTime()) {
      daysUntilSat += 7;
      target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilSat);
      instant = slotInstant(target.getFullYear(), target.getMonth(), target.getDate());
    }
    setDateStr(target.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }));

    try {
      const localStr = instant.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setLocalTime(`Your local time: ${localStr} (${tz})`);
    } catch {
      // Intl unsupported — skip local time display
    }
  }, []);

  return (
    <>
      <div className={`flex items-center justify-center gap-3 flex-wrap ${center ? "" : "lg:justify-start"}`}>
        <span className="bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full">
          Live Saturday on Zoom
        </span>
        <span className="font-body text-[15px] text-white/85">
          <b>{dateStr}</b> &middot; {SLOT_LABEL}
        </span>
      </div>
      {localTime && (
        <p className={`font-body text-[12.5px] text-white/50 mt-2 text-center ${center ? "" : "lg:text-left"}`}>
          {localTime}
        </p>
      )}
    </>
  );
}
