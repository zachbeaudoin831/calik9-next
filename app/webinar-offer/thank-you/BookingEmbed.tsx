"use client";

import Script from "next/script";

// TODO: paste the GHL calendar embed for the evaluation call here. Until a
// calendar ID is provided, the page falls back to the "check your email"
// instructions rendered by the parent.
const CALENDAR_ID: string | null = null;

export default function BookingEmbed() {
  if (!CALENDAR_ID) return null;
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
        id={`booking-${CALENDAR_ID}`}
        title="Book your evaluation call"
        scrolling="no"
        className="w-full border-none block min-h-[700px]"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
