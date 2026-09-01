"use client";

import { useEffect, useState } from "react";

// Computed client-side so the date never goes stale: the upcoming Saturday,
// 11:00 AM Pacific / 2:00 PM Eastern — matching the live Saturday class the
// /register-now funnel promotes. Update here if the webinar slot changes.
export default function EventDate() {
  const [dateStr, setDateStr] = useState("Saturday");
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const now = new Date();
    let daysUntilSat = (6 - now.getDay() + 7) % 7;
    // If it's already past the slot today, roll to next week.
    if (daysUntilSat === 0 && now.getHours() >= 14) daysUntilSat = 7;
    const target = new Date(now);
    target.setDate(now.getDate() + daysUntilSat);
    setDateStr(
      target.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
    );

    // Best-effort local-time display, anchoring 11:00 AM Pacific (PDT ≈ 18:00 UTC).
    try {
      const anchorUTC = new Date(
        Date.UTC(target.getFullYear(), target.getMonth(), target.getDate(), 18, 0, 0),
      );
      const localStr = anchorUTC.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      });
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setLocalTime(`Your local time: approximately ${localStr} (${tz})`);
    } catch {
      // Intl unsupported — skip local time display
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-3 flex-wrap lg:justify-start">
        <span className="bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full">
          Live Saturday on Zoom
        </span>
        <span className="font-body text-[15px] text-white/85">
          <b>{dateStr}</b> &middot; 11:00 AM Pacific / 2:00 PM Eastern
        </span>
      </div>
      {localTime && (
        <p className="font-body text-[12.5px] text-white/50 mt-2 text-center lg:text-left">
          {localTime}
        </p>
      )}
    </>
  );
}
