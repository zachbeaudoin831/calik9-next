"use client";

import Script from "next/script";

const CALENDAR_ID = "IHyyYQ8nbtwJM4Wawh8s";

export default function BookingEmbed() {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
        id="hg4TVV9mOCu8kjfapIKg_1787019140353"
        title="Book your evaluation call"
        allow="payment"
        scrolling="no"
        className="w-full border-none block overflow-hidden min-h-[700px]"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
