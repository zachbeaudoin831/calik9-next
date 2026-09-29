"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Remembers where a visitor came from so the quiz (and anything else that
 * posts to GHL) can report it. Runs on every page:
 *
 * - `ck9-attr-first`: the first visit we ever saw (never overwritten).
 * - `ck9-attr-last`: the most recent visit that carried campaign params
 *   (utm_* / fbclid / gclid). A plain revisit doesn't clobber an ad click.
 *
 * Read it back with readAttribution() from lib/attribution.ts.
 */
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"];

export default function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      const qs = new URLSearchParams(window.location.search);
      const touch: Record<string, string> = {};
      for (const p of PARAMS) {
        const v = qs.get(p);
        if (v) touch[p] = v.slice(0, 200);
      }
      const hasCampaign = Object.keys(touch).length > 0;
      const ref = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : "";
      const record = {
        ...touch,
        landing_page: window.location.pathname,
        referrer: ref.slice(0, 300),
        at: new Date().toISOString(),
      };
      if (!localStorage.getItem("ck9-attr-first")) localStorage.setItem("ck9-attr-first", JSON.stringify(record));
      if (hasCampaign) localStorage.setItem("ck9-attr-last", JSON.stringify(record));
    } catch {
      // storage blocked — attribution is best-effort
    }
  }, [pathname]);
  return null;
}
