"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { KIT_PRICE, TIER_INFO, checkoutUrl, parseTier } from "@/lib/package-checkout";

const KIT_CONTENTS = [
  "Training Box",
  "Cali K9 Turbo Treats — 2 bags (Beef Hearts + Chicken Hearts)",
  "Treat Pouch",
  "Slip Leash",
  "Long Line",
  "Tug Reward",
  "Tug Ball",
];

export default function KitOffer() {
  const router = useRouter();
  const params = useSearchParams();
  const tier = parseTier(params.get("tier"));
  const tierInfo = TIER_INFO[tier];

  // VIP already includes the Training Kit — never show this step to VIP.
  useEffect(() => {
    if (tier === "vip") router.replace("/turbo-treats-upsell?tier=vip");
  }, [tier, router]);

  const addToOrder = () => {
    const url = checkoutUrl(tier, true, false);
    if (!url) return; // placeholder until the payment link is wired
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "AddToCart", { value: KIT_PRICE, currency: "USD" });
      w.fbq("track", "InitiateCheckout", {
        value: tierInfo.price + KIT_PRICE,
        currency: "USD",
      });
    }
    window.location.href = url;
  };

  return (
    <>
      {/* Product card */}
      <div className="max-w-[720px] mx-auto mt-8 bg-white border-2 border-blue-500 rounded-[18px] overflow-hidden shadow-lg text-left">
        <div className="p-7 pb-0 max-[480px]:p-5 max-[480px]:pb-0">
          <div className="font-ui text-[11px] font-bold tracking-[1.2px] uppercase text-blue-700 bg-blue-50 inline-block px-3 py-1.5 rounded-full">
            Implementation Accelerator &middot; One-Time Offer
          </div>
        </div>
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-6 p-7 pt-4 max-md:grid-cols-1 max-[480px]:p-5 max-[480px]:pt-4">
          <Image
            src="/images/funnel/training-kit.webp"
            alt="The complete Cali K9 Training Kit"
            width={527}
            height={515}
            className="w-full h-auto rounded-xl bg-cream"
          />
          <div>
            <h2 className="font-display text-[26px] text-ink leading-tight mb-2.5">
              CALI K9 COMPLETE TRAINING KIT
            </h2>
            <p className="font-body text-[13.5px] text-gray-muted leading-relaxed mb-4">
              We do not just give you the roadmap. We give you access to the same types of tools we
              use to help master it. This kit is the exact equipment we use to execute the Cali K9
              System correctly, bundled into one order &mdash; so you&rsquo;re never stuck guessing
              what gear to buy or improvising with the wrong tools.
            </p>
            <ul className="space-y-1.5">
              {KIT_CONTENTS.map((item) => (
                <li key={item} className="font-body text-[13.5px] text-ink/80 pl-5 relative">
                  <span className="absolute left-0 text-blue-500 font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price strip */}
        <div className="bg-cream px-7 py-5 max-[480px]:px-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="font-display text-[32px] text-ink">
            ${KIT_PRICE}{" "}
            <span className="font-body text-[13px] text-gray-muted">
              one-time, added to your order total
            </span>
          </div>
          <div className="font-ui text-[11.5px] font-bold tracking-[0.5px] uppercase text-green-500">
            Only offered here &mdash; not sold as a bundle anywhere else
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[640px] mx-auto mt-6">
        <button type="button" onClick={addToOrder} className="btn btn-blue btn-lg w-full !py-5">
          Yes! Add My Implementation Accelerator &mdash; ${KIT_PRICE}
        </button>
        <p className="font-body text-[12.5px] text-gray-muted mt-3 text-center">
          Added to your order total &middot; One secure checkout &middot; Ships with your order
        </p>
        <Link
          href={`/turbo-treats-upsell?tier=${tier}`}
          className="btn btn-lg w-full mt-5 !bg-red-600 !border-red-600 !text-white hover:!bg-red-700 hover:!border-red-700 text-center"
        >
          No Thanks! I Have Items Like These Already
        </Link>
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
