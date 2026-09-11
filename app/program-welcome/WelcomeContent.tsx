"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { parseTier, TIER_INFO } from "@/lib/package-checkout";

const NEXT_STEPS: Record<"elite" | "vip", { title: string; desc: string }[]> = {
  elite: [
    { title: "Check your inbox", desc: "Your Academy login and the Start Here onboarding video arrive within a few minutes. Search for “Cali K9” if it isn't there." },
    { title: "Book your onboarding call", desc: "A member of the team reaches out within one business day to set your first Wednesday small-group coaching session with Jas." },
    { title: "Start Step 1 today", desc: "Watch the Start Here video, meet your dog where they are on the 50-Step Roadmap, and put in your first reps." },
    { title: "Your gear ships", desc: "If you added the Training Kit or Turbo Treats, they ship from Cali K9 within 1–2 business days with tracking by email." },
  ],
  vip: [
    { title: "Check your inbox", desc: "Your Academy login and the Start Here onboarding video arrive within a few minutes. Search for “Cali K9” if it isn't there." },
    { title: "Your private WhatsApp line", desc: "Within one business day you'll get an invite to your direct line to the Cali K9 team — support within 24 hours, for a full year." },
    { title: "Priority coaching booking", desc: "The team schedules your first of eight Wednesday coaching sessions with Jas and walks you through priority booking." },
    { title: "Your Training Kit ships", desc: "The complete Cali K9 Training Kit is included and ships within 1–2 business days, with any Turbo Treats you added." },
  ],
};

export default function WelcomeContent() {
  const params = useSearchParams();
  const tier = parseTier(params.get("tier"));
  const info = TIER_INFO[tier];
  const total = Number(params.get("total")) || info.price;

  useEffect(() => {
    // Meta Pixel Purchase — base pixel loads globally in the root layout.
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    let tries = 10;
    const fire = () => {
      if (typeof w.fbq === "function") w.fbq("track", "Purchase", { value: total, currency: "USD", content_name: info.name });
      else if (tries-- > 0) setTimeout(fire, 300);
    };
    fire();
  }, [total, info.name]);

  return (
    <>
      <section className="pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10 bg-ink text-white text-center">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <span className="inline-block bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">
            &#10003; Order confirmed
          </span>
          <h1 className="font-display text-[clamp(38px,5.5vw,62px)] leading-[0.95] mb-4">
            WELCOME TO {info.name.replace("Cali K9 ", "").toUpperCase()}.
            <br />
            <span className="text-[#6A9FFF]">YOUR DOG&rsquo;S TRANSFORMATION STARTS NOW.</span>
          </h1>
          <p className="font-body text-lg text-white/75 leading-relaxed max-w-[600px] mx-auto">
            You&rsquo;re officially part of the Cali K9 pack. A receipt is on its way, and everything
            below happens automatically &mdash; you don&rsquo;t need to do anything except check your
            inbox.
          </p>
        </div>
      </section>

      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <h2 className="font-display text-[30px] text-ink text-center mb-8">WHAT HAPPENS NEXT</h2>
          <div className="flex flex-col gap-4">
            {NEXT_STEPS[tier].map((s, i) => (
              <div key={s.title} className="bg-white border border-border rounded-xl p-5 flex gap-4 items-start">
                <div className="font-display text-2xl text-blue-500 leading-none shrink-0 w-8">{i + 1}</div>
                <div>
                  <div className="font-ui text-base font-bold tracking-[0.5px] uppercase text-ink mb-1">{s.title}</div>
                  <p className="font-body text-[14.5px] text-[#4b4f58] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/academy" className="btn btn-blue btn-lg">
              Go To The Academy &rarr;
            </Link>
            <p className="font-body text-[13px] text-gray-muted mt-4">
              Questions? Reply to your receipt email or reach us at{" "}
              <Link href="/contact-us" className="underline">calik9.com/contact-us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
