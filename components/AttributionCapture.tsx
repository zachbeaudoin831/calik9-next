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
import { ATTRIBUTION_PARAMS as PARAMS, FIRST_KEY, LAST_KEY } from "@/lib/attribution";

// Write to both stores; each is best-effort so one being blocked never
// prevents the other (some in-app / privacy browsers throw on localStorage).
function setBoth(key: string, value: string) {
  for (const kind of ["localStorage", "sessionStorage"] as const) {
    try {
      window[kind].setItem(key, value);
    } catch {
      // blocked — try the other store
    }
  }
}
function hasEither(key: string): boolean {
  for (const kind of ["localStorage", "sessionStorage"] as const) {
    try {
      if (window[kind].getItem(key)) return true;
    } catch {
      // blocked
    }
  }
  return false;
}

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
      const json = JSON.stringify(record);
      if (!hasEither(FIRST_KEY)) setBoth(FIRST_KEY, json);
      if (hasCampaign) setBoth(LAST_KEY, json);
    } catch {
      // storage blocked — attribution is best-effort
    }
  }, [pathname]);
  return null;
}
