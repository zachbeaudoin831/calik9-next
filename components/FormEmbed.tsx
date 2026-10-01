"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { SESSION_KEY, type SessionResult } from "@/app/free-behavior-assessment/results/content";

interface FormEmbedProps {
  formId: string;
  formName: string;
  title: string;
  height?: number;
}

const subscribeNoop = () => () => {};

// The quiz's session (first name / email / phone / dog name), if this visitor
// just completed the Free Behavior Assessment in this tab.
function readQuizSession(): string | null {
  try {
    return window.sessionStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
}

// GHL forms accept prefill values as URL query parameters keyed by field:
// first_name / last_name / email / phone, and custom fields by their key.
function prefillParams(raw: string | null): string {
  if (!raw) return "";
  try {
    const s = JSON.parse(raw) as SessionResult;
    const q = new URLSearchParams();
    if (s.firstName) {
      q.set("first_name", s.firstName);
      if (s.lastName) q.set("last_name", s.lastName);
      q.set("full_name", s.fullName || s.firstName); // forms with a single "Full Name" field
    }
    if (s.email) q.set("email", s.email);
    if (s.phone) q.set("phone", s.phone);
    if (s.dogName) q.set("dog_name", s.dogName);
    const str = q.toString();
    return str ? `?${str}` : "";
  } catch {
    return "";
  }
}

export default function FormEmbed({ formId, formName, title, height = 896 }: FormEmbedProps) {
  // Server snapshot is null so SSR and hydration match; the iframe itself is
  // only rendered on the client so it loads once, with the prefill in place.
  const raw = useSyncExternalStore(subscribeNoop, readQuizSession, () => null);
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
  const src = `https://api.leadconnectorhq.com/widget/form/${formId}${prefillParams(raw)}`;

  return (
    <div className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-7">
      <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-2">
        {title}
      </div>
      {mounted ? (
        <iframe
          src={src}
          id={`inline-${formId}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height={String(height)}
          data-layout-iframe-id={`inline-${formId}`}
          data-form-id={formId}
          title={formName}
          loading="eager"
          allow="payment *"
          className="w-full border-none rounded-sm block overflow-hidden"
          style={{ height: `${height}px` }}
        />
      ) : (
        <div className="w-full rounded-sm bg-white/[0.04]" style={{ height: `${height}px` }} aria-hidden="true" />
      )}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
