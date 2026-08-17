"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

const FORM_ID = "hZHHQAAWiOEP0ADyInGy";

export default function RegisterModal({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Escape closes; lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <>
      <div className={`text-center ${className}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn btn-white btn-lg text-center max-md:w-full"
        >
          Join Saturday&rsquo;s Class
          <span aria-hidden="true" className="ml-2 relative -top-[2.5px] leading-none">
            &rarr;
          </span>
        </button>
        <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
          Free &middot; Live on Zoom &middot; Only 100 Spots Per Time Slot
        </p>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 max-[480px]:p-2"
          role="dialog"
          aria-modal="true"
          aria-label="Register for the free class"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 bg-[#050A1E]/80 backdrop-blur-sm cursor-default"
          />

          {/* Panel */}
          <div className="relative w-full max-w-[560px] max-h-[92vh] overflow-y-auto bg-white rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/[0.06] hover:bg-black/[0.12] text-ink flex items-center justify-center transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="px-7 pt-8 pb-2 max-[480px]:px-5 text-center">
              <span className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-600 font-ui text-[11px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full mb-4">
                Free Live Class &middot; Saturday 9AM PST
              </span>
              <h2 className="font-display text-[clamp(26px,3vw,34px)] text-ink leading-[0.95] mb-2">
                SAVE YOUR SPOT
              </h2>
              <p className="font-body text-sm text-gray-muted leading-relaxed">
                Enter your details and we&rsquo;ll send your Zoom link.
              </p>
            </div>

            <div className="px-4 pb-4">
              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
                id={`inline-${FORM_ID}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Webinar Lead From $79 Offer"
                data-height="447"
                data-layout-iframe-id={`inline-${FORM_ID}`}
                data-form-id={FORM_ID}
                title="Webinar Lead From $79 Offer"
                className="w-full border-none rounded-sm block"
                style={{ height: "447px" }}
              />
            </div>
          </div>

          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </div>
      )}
    </>
  );
}
