"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// One-click add-to-order endpoints — not wired yet. These should charge the
// card from the original checkout (GHL one-click upsell links).
const ADD_URL_ONETIME: string | null = null;
const ADD_URL_SUBSCRIBE: string | null = null;

// Final step in the post-purchase flow.
const NEXT_URL = "/book-your-call";

const FEATURES = [
  "Pea-sized — built for the split-second timing that turns a reward into real communication",
  "High-value enough to hold focus and engagement through a full session, rep after rep",
  "The same motivation tool Jas uses to build positioning, repetition, and relationship in his own sessions",
];

export default function TreatsOffer() {
  const [mode, setMode] = useState<"one-time" | "subscribe">("one-time");

  const addUrl = mode === "one-time" ? ADD_URL_ONETIME : ADD_URL_SUBSCRIBE;

  const addToOrder = () => {
    if (!addUrl) return; // placeholder until the one-click upsell links are wired
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "AddToCart", { value: mode === "one-time" ? 27 : 23, currency: "USD" });
    }
    window.location.href = addUrl;
  };

  return (
    <>
      {/* Product card */}
      <div className="max-w-[720px] mx-auto mt-8 bg-white border-2 border-blue-500 rounded-[18px] overflow-hidden shadow-lg text-left">
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-6 p-7 max-md:grid-cols-1 max-[480px]:p-5">
          <div className="grid grid-cols-2 gap-2 items-center">
            <Image
              src="/images/funnel/turbo-beef.webp"
              alt="Cali K9 Turbo Treats — Beef Hearts"
              width={400}
              height={400}
              className="w-full h-auto rounded-xl bg-cream"
            />
            <Image
              src="/images/funnel/turbo-chicken.webp"
              alt="Cali K9 Turbo Treats — Chicken Hearts"
              width={400}
              height={400}
              className="w-full h-auto rounded-xl bg-cream"
            />
          </div>
          <div>
            <div className="font-ui text-[11px] font-bold tracking-[1.2px] uppercase text-blue-700 bg-blue-50 inline-block px-3 py-1.5 rounded-full mb-3">
              Motivation + Engagement Accelerator &middot; One-Time Offer
            </div>
            <h2 className="font-display text-[26px] text-ink leading-tight mb-2.5">
              CALI K9 TURBO TREATS &mdash; 2 BAGS
            </h2>
            <p className="font-body text-[13.5px] text-gray-muted leading-relaxed mb-4">
              These are not just treats. They are one of the tools we use to build engagement,
              reward correct decisions, and help dogs progress through the Cali K9 system &mdash;
              small, soft, and high-value enough for the rapid-fire reward timing the marker and
              luring work in your Foundation Phase requires.
            </p>
            <ul className="space-y-1.5">
              {FEATURES.map((item) => (
                <li key={item} className="font-body text-[13.5px] text-ink/80 pl-5 relative">
                  <span className="absolute left-0 text-blue-500 font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Purchase options */}
      <div className="max-w-[720px] mx-auto mt-5 grid grid-cols-2 gap-4 max-md:grid-cols-1 text-left">
        <button
          type="button"
          onClick={() => setMode("one-time")}
          className={`rounded-xl border-2 p-5 cursor-pointer transition-colors bg-white ${
            mode === "one-time" ? "border-blue-500" : "border-border hover:border-blue-500"
          }`}
        >
          <div className="flex items-center gap-2.5 mb-2">
            <span
              className={`w-[18px] h-[18px] rounded-full border-[1.5px] shrink-0 ${
                mode === "one-time" ? "bg-blue-500 border-blue-500" : "border-gray-muted"
              }`}
            />
            <span className="font-ui text-sm font-bold tracking-[0.5px] uppercase text-ink">
              One-Time Purchase
            </span>
          </div>
          <div className="font-display text-[28px] text-ink">
            $27{" "}
            <span className="font-body text-[13px] text-gray-muted line-through">$39.98</span>
          </div>
          <div className="font-body text-[12.5px] text-gray-muted mt-1">
            2 bags, ships once with your order
          </div>
        </button>
        <button
          type="button"
          onClick={() => setMode("subscribe")}
          className={`relative rounded-xl border-2 p-5 cursor-pointer transition-colors bg-white ${
            mode === "subscribe" ? "border-blue-500" : "border-border hover:border-blue-500"
          }`}
        >
          <span className="absolute -top-2.5 right-4 bg-amber-400 text-[#2b1d05] font-ui text-[10px] font-bold tracking-[0.5px] uppercase px-2.5 py-1 rounded-full">
            Best Value &mdash; Save 15%
          </span>
          <div className="flex items-center gap-2.5 mb-2">
            <span
              className={`w-[18px] h-[18px] rounded-full border-[1.5px] shrink-0 ${
                mode === "subscribe" ? "bg-blue-500 border-blue-500" : "border-gray-muted"
              }`}
            />
            <span className="font-ui text-sm font-bold tracking-[0.5px] uppercase text-ink">
              Subscribe &amp; Save
            </span>
          </div>
          <div className="font-display text-[28px] text-ink">
            $23<span className="font-body text-[13px] text-gray-muted">/mo</span>
          </div>
          <div className="font-body text-[12.5px] text-gray-muted mt-1">
            2 fresh bags shipped every month &middot; free shipping &middot; cancel anytime
          </div>
        </button>
      </div>

      {/* CTA */}
      <div className="max-w-[640px] mx-auto mt-6">
        <button type="button" onClick={addToOrder} className="btn btn-blue btn-lg w-full !py-5">
          {mode === "one-time"
            ? "Yes! Add 2 Bags To My Order — $27"
            : "Yes! Start My Subscription — $23/mo"}
        </button>
        <p className="font-body text-[12.5px] text-gray-muted mt-3 text-center">
          {mode === "one-time"
            ? "Charged to the card you just used · Ships with your order confirmation · No extra checkout steps"
            : "Charged to the card you just used · First 2 bags ship with your order · Cancel anytime from your account"}
        </p>
        <Link
          href={NEXT_URL}
          className="block text-center font-body text-[13px] text-gray-muted underline mt-5"
        >
          No thanks, I&rsquo;ll pass on the treats my dog would love &mdash; continue without
          adding this
        </Link>
      </div>

      {/* Trust row */}
      <ul className="flex justify-center gap-6 flex-wrap mt-7 font-body text-[12.5px] text-ink/70">
        {["One click, no re-checkout", "Ships in 3–5 business days", "Secure order"].map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="text-green-500 font-bold">&#10003;</span> {item}
          </li>
        ))}
      </ul>
    </>
  );
}
