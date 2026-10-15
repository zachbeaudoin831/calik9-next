"use client";

import Script from "next/script";

const CALENDAR_ID = "IHyyYQ8nbtwJM4Wawh8s";

// `src` swaps in a different GHL calendar (full widget URL); defaults to the
// $7 call calendar. GHL's embed script pre-fills the visitor's details from
// its sticky-contact record when they've submitted a GHL form on this site.
export default function BookingEmbed({ title = "Book your call", src }: { title?: string; src?: string }) {
  return (
    <>
      <iframe
        src={src || `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
        id="hg4TVV9mOCu8kjfapIKg_1787019140353"
        title={title}
        allow="payment"
        scrolling="no"
        className="w-full border-none block overflow-hidden min-h-[700px]"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
