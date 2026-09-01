"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  KIT_PRICE,
  TIER_INFO,
  TREATS_PRICE,
  checkoutUrl,
  parseTier,
} from "@/lib/package-checkout";

const FEATURES = [
  "Pea-sized — built for the split-second timing that turns a reward into real communication",
  "High-value enough to hold focus and engagement through a full session, rep after rep",
  "The same motivation tool Jas uses to build positioning, repetition, and relationship in his own sessions",
];

export default function TreatsOffer() {
  const params = useSearchParams();
  const tier = parseTier(params.get("tier"));
  // VIP includes the Training Kit, so VIP visitors never see the kit step.
  const kit = tier === "elite" && params.get("kit") === "1";
  const flavor = params.get("flavor") ?? undefined;

  const tierInfo = TIER_INFO[tier];
  const baseTotal = tierInfo.price + (kit ? KIT_PRICE : 0);

  const goToCheckout = (withTreats: boolean) => {
    const url = checkoutUrl(tier, kit, withTreats, flavor);
    if (!url) return; // placeholder until the payment links are wired
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "InitiateCheckout", {
        value: baseTotal + (withTreats ? TREATS_PRICE : 0),
        currency: "USD",
      });
    }
    window.location.href = url;
  };

  const orderLines = [
    { label: tierInfo.name, price: tierInfo.price },
    ...(kit
      ? [{ label: `Cali K9 Training Kit${flavor ? ` (${flavor})` : ""}`, price: KIT_PRICE }]
      : []),
    ...(tier === "vip" ? [{ label: "Cali K9 Training Kit — included with VIP", price: 0 }] : []),
  ];

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
            <div className="font-display text-[28px] text-ink mt-4">
              $27 <span className="font-body text-[13px] text-gray-muted line-through">$39.98</span>{" "}
              <span className="font-body text-[13px] text-gray-muted">
                2 bags, ships with your order
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Order summary */}
      <div className="max-w-[640px] mx-auto mt-6 bg-cream border border-border rounded-xl px-6 py-5 text-left">
        <div className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-gray-muted mb-3">
          Your Order So Far
        </div>
        {orderLines.map((line) => (
          <div
            key={line.label}
            className="flex justify-between font-body text-[14px] text-ink/80 py-1"
          >
            <span>{line.label}</span>
            <span>{line.price === 0 ? "Included" : `$${line.price.toLocaleString()}`}</span>
          </div>
        ))}
        <div className="flex justify-between font-body text-[14px] text-gray-muted py-1">
          <span>Turbo Treats &mdash; 2 bags (this offer)</span>
          <span>+ ${TREATS_PRICE}</span>
        </div>
        <div className="flex justify-between font-display text-lg text-ink border-t border-border mt-2 pt-2.5">
          <span>TOTAL WITH TREATS</span>
          <span>${(baseTotal + TREATS_PRICE).toLocaleString()}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="max-w-[640px] mx-auto mt-6">
        <button
          type="button"
          onClick={() => goToCheckout(true)}
          className="btn btn-blue btn-lg w-full !py-5"
        >
          Yes! Add 2 Bags &amp; Continue To Checkout &mdash; $
          {(baseTotal + TREATS_PRICE).toLocaleString()}
        </button>
        <p className="font-body text-[12.5px] text-gray-muted mt-3 text-center">
          One secure checkout for your whole order &middot; Ships with your order confirmation
        </p>
        <button
          type="button"
          onClick={() => goToCheckout(false)}
          className="block w-full text-center font-body text-[13px] text-gray-muted underline mt-5 cursor-pointer bg-transparent border-none"
        >
          No thanks, I&rsquo;ll pass on the treats my dog would love &mdash; continue to checkout
          without them (${baseTotal.toLocaleString()})
        </button>
      </div>

      {/* Trust row */}
      <ul className="flex justify-center gap-6 flex-wrap mt-7 font-body text-[12.5px] text-ink/70">
        {["One combined checkout", "Ships in 3–5 business days", "Secure order"].map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="text-green-500 font-bold">&#10003;</span> {item}
          </li>
        ))}
      </ul>
    </>
  );
}
