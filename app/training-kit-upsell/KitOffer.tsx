"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { KIT_PRICE, parseTier } from "@/lib/package-checkout";

const KIT_CONTENTS = [
  "Training Box",
  "Cali K9 Turbo Treats — beef or chicken hearts, your choice",
  "Treat Pouch",
  "Slip Leash",
  "Long Line",
  "Tug Reward",
  "Tug Ball",
];

const FLAVORS = ["Beef Hearts", "Chicken Hearts"] as const;

export default function KitOffer() {
  const router = useRouter();
  const params = useSearchParams();
  const tier = parseTier(params.get("tier"));
  const [flavor, setFlavor] = useState<(typeof FLAVORS)[number]>("Beef Hearts");

  const addToOrder = () => {
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "AddToCart", { value: KIT_PRICE, currency: "USD" });
    }
    router.push(`/turbo-treats-upsell?tier=${tier}&kit=1&flavor=${encodeURIComponent(flavor)}`);
  };

  return (
    <>
      {/* Product card */}
      <div className="max-w-[720px] mx-auto mt-8 bg-white border-2 border-blue-500 rounded-[18px] overflow-hidden shadow-lg text-left">
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-6 p-7 max-md:grid-cols-1 max-[480px]:p-5">
          <Image
            src="/images/funnel/training-kit.webp"
            alt="The complete Cali K9 Training Kit"
            width={527}
            height={515}
            className="w-full h-auto rounded-xl bg-cream"
          />
          <div>
            <div className="font-ui text-[11px] font-bold tracking-[1.2px] uppercase text-blue-700 bg-blue-50 inline-block px-3 py-1.5 rounded-full mb-3">
              Implementation Accelerator &middot; One-Time Offer
            </div>
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

        {/* Flavor picker */}
        <div className="border-t border-border px-7 py-5 max-[480px]:px-5">
          <div className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-gray-muted mb-3">
            Choose Your Turbo Treats Flavor
          </div>
          <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
            {FLAVORS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFlavor(f)}
                className={`flex items-center gap-3 px-4 py-3.5 border-[1.5px] rounded-xl font-body text-[14.5px] font-semibold transition-colors cursor-pointer ${
                  flavor === f
                    ? "border-blue-500 bg-blue-50 text-ink"
                    : "border-border bg-white text-ink/70 hover:border-blue-500"
                }`}
              >
                <span
                  className={`w-[18px] h-[18px] rounded-full border-[1.5px] shrink-0 ${
                    flavor === f ? "bg-blue-500 border-blue-500" : "border-gray-muted"
                  }`}
                />
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Price strip */}
        <div className="bg-cream px-7 py-5 max-[480px]:px-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="font-display text-[32px] text-ink">
            $197{" "}
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
          Yes! Add My Implementation Accelerator &mdash; $197
        </button>
        <p className="font-body text-[12.5px] text-gray-muted mt-3 text-center">
          Added to your order total &middot; One combined checkout at the end &middot; Ships with
          your order
        </p>
        <Link
          href={`/turbo-treats-upsell?tier=${tier}&kit=0`}
          className="block text-center font-body text-[13px] text-gray-muted underline mt-5"
        >
          No thanks, I&rsquo;ll guess at my own gear and skip the tools built for this system
          &mdash; continue without adding this
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
