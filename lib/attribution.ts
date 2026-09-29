// Client-side read of what components/AttributionCapture.tsx stored.
// The last campaign touch wins; with none, the first visit (referrer/landing).

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

export function readAttribution(): Attribution {
  try {
    const last = localStorage.getItem("ck9-attr-last");
    const first = localStorage.getItem("ck9-attr-first");
    const firstObj: Attribution = first ? JSON.parse(first) : {};
    const lastObj: Attribution = last ? JSON.parse(last) : {};
    return { ...lastObj, referrer: lastObj.referrer || firstObj.referrer, landing_page: lastObj.landing_page || firstObj.landing_page };
  } catch {
    return {};
  }
}
