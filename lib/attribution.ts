// Client-side read of what components/AttributionCapture.tsx stored.
// The last campaign touch wins; with none, the first visit (referrer/landing).
//
// Resilient by design: if localStorage is blocked (some in-app and privacy
// browsers), fall back to sessionStorage, and finally to the live URL and
// referrer at the moment of submit — so a lead is never sent with nothing.

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
  at?: string;
};

export const ATTRIBUTION_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"] as const;
export const FIRST_KEY = "ck9-attr-first";
export const LAST_KEY = "ck9-attr-last";

function readStore(store: Storage | undefined, key: string): Attribution {
  try {
    const raw = store?.getItem(key);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function safeStorage(kind: "localStorage" | "sessionStorage"): Storage | undefined {
  try {
    return window[kind];
  } catch {
    return undefined;
  }
}

// Campaign params present on the current URL right now (last-resort source).
export function attributionFromUrl(): Attribution {
  const out: Attribution = {};
  try {
    const qs = new URLSearchParams(window.location.search);
    for (const p of ATTRIBUTION_PARAMS) {
      const v = qs.get(p);
      if (v) out[p] = v.slice(0, 200);
    }
  } catch {
    // ignore
  }
  return out;
}

function externalReferrer(): string {
  try {
    const ref = document.referrer || "";
    return ref && !ref.startsWith(window.location.origin) ? ref.slice(0, 300) : "";
  } catch {
    return "";
  }
}

export function readAttribution(): Attribution {
  const local = safeStorage("localStorage");
  const session = safeStorage("sessionStorage");
  // Prefer localStorage (survives across visits); sessionStorage mirrors it
  // for browsers where localStorage throws.
  const first = { ...readStore(session, FIRST_KEY), ...readStore(local, FIRST_KEY) };
  const last = { ...readStore(session, LAST_KEY), ...readStore(local, LAST_KEY) };
  const merged: Attribution = {
    ...last,
    referrer: last.referrer || first.referrer,
    landing_page: last.landing_page || first.landing_page,
  };
  const hasCampaign = ATTRIBUTION_PARAMS.some((p) => merged[p]);
  if (!hasCampaign) Object.assign(merged, attributionFromUrl());
  if (!merged.landing_page) {
    try {
      merged.landing_page = window.location.pathname;
    } catch {
      // ignore
    }
  }
  if (!merged.referrer) merged.referrer = externalReferrer();
  if (!merged.at) merged.at = new Date().toISOString();
  return merged;
}
