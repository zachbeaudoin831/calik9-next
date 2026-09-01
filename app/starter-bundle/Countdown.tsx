"use client";

import { useEffect, useState } from "react";

// Evergreen 15-minute countdown, anchored to the visitor's first page view for
// the session so a refresh doesn't restart it. Swap DURATION_SECONDS (or the
// whole deadline calculation) if this should instead tick down to the webinar
// start time.
const DURATION_SECONDS = 15 * 60;
const DEADLINE_KEY = "calik9_starter_bundle_deadline";

function readDeadline(): number {
  const now = Date.now();
  try {
    const stored = sessionStorage.getItem(DEADLINE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (Number.isFinite(parsed) && parsed > now - 24 * 3600 * 1000) return parsed;
    }
    const deadline = now + DURATION_SECONDS * 1000;
    sessionStorage.setItem(DEADLINE_KEY, String(deadline));
    return deadline;
  } catch {
    return now + DURATION_SECONDS * 1000;
  }
}

export default function Countdown() {
  // Render the full duration on the server pass; the real remaining time takes
  // over after hydration.
  const [remaining, setRemaining] = useState(DURATION_SECONDS);

  useEffect(() => {
    const deadline = readDeadline();
    const tick = () =>
      setRemaining(Math.max(0, Math.round((deadline - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { n: Math.floor(remaining / 3600), label: "Hours" },
    { n: Math.floor((remaining % 3600) / 60), label: "Minutes" },
    { n: remaining % 60, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center gap-3.5 mt-8 mb-1.5">
      {boxes.map((box) => (
        <div key={box.label} className="bg-ink text-white rounded-[10px] px-4 py-3 text-center min-w-[64px]">
          <div className="font-display text-2xl leading-none">
            {String(box.n).padStart(2, "0")}
          </div>
          <div className="font-ui text-[9.5px] font-semibold tracking-[1px] uppercase text-white/60 mt-1">
            {box.label}
          </div>
        </div>
      ))}
    </div>
  );
}
