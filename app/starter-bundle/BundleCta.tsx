"use client";

import { useState } from "react";

// Checkout destinations — not wired yet. Supply the $27 payment link (and the
// $44 with-bump variant, or a single GHL order form that carries the $17 bump
// natively) and drop them in here.
const CHECKOUT_URL_27: string | null = null;
const CHECKOUT_URL_44: string | null = null;

export default function BundleCta() {
  const [bump, setBump] = useState(false);

  const total = bump ? 44 : 27;
  const checkoutUrl = bump ? CHECKOUT_URL_44 : CHECKOUT_URL_27;

  const goToCheckout = () => {
    if (!checkoutUrl) return; // placeholder until the payment link is wired
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "InitiateCheckout", { value: total, currency: "USD" });
    }
    window.location.href = checkoutUrl;
  };

  return (
    <>
      {/* Order bump */}
      <div className="max-w-[640px] mx-auto mt-6 border-2 border-dashed border-blue-500 rounded-[14px] bg-blue-50 px-6 py-5 max-[480px]:px-4 flex gap-3.5 items-start text-left">
        <input
          type="checkbox"
          id="bumpCheck"
          checked={bump}
          onChange={(e) => setBump(e.target.checked)}
          className="w-[22px] h-[22px] accent-blue-500 shrink-0 mt-0.5 cursor-pointer"
        />
        <label htmlFor="bumpCheck" className="cursor-pointer">
          <div className="font-ui text-[11px] font-bold tracking-[1px] uppercase text-blue-700 mb-1.5">
            Yes, Add This &mdash; One-Time Offer
          </div>
          <h4 className="font-body text-[15.5px] font-bold text-ink mb-1">
            The Loose-Leash Walking Rapid Fix{" "}
            <span className="font-display text-blue-700 whitespace-nowrap">+ $17</span>
          </h4>
          <p className="font-body text-[13px] text-[#3d4a6b] leading-relaxed">
            A focused 20-minute video + drill sheet to stop leash pulling fast &mdash; normally
            $47, only offered here as an add-on.
          </p>
        </label>
      </div>

      {/* Main CTA */}
      <div className="max-w-[640px] mx-auto mt-6 text-center">
        <button
          type="button"
          onClick={goToCheckout}
          className="btn btn-blue btn-lg w-full !py-5 !text-[15px]"
        >
          Yes! Give Me The Starter Bundle &mdash; ${total}
        </button>
        <p className="font-body text-[12.5px] text-gray-muted mt-3">
          Instant digital access &middot; Secure checkout &middot; One-time payment, not a
          subscription
        </p>
      </div>

      {/* Trust row */}
      <ul className="flex justify-center gap-6 flex-wrap mt-6 font-body text-[12.5px] text-ink/70">
        {["Instant access", "Secure checkout", "One-time payment"].map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="text-green-500 font-bold">&#10003;</span> {item}
          </li>
        ))}
      </ul>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] hidden max-md:block">
        <button type="button" onClick={goToCheckout} className="btn btn-blue w-full">
          Get The Starter Bundle &mdash; ${total} &rarr;
        </button>
      </div>
    </>
  );
}
