"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function BundleThanks() {
  const params = useSearchParams();
  const bump = params.get("bump") === "1";
  const total = bump ? 44 : 27;

  useEffect(() => {
    // Meta Pixel Purchase — base pixel loads globally in the root layout.
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    let tries = 10;
    const fire = () => {
      if (typeof w.fbq === "function") {
        w.fbq("track", "Purchase", { value: total, currency: "USD", content_name: "Starter Bundle" });
      } else if (tries-- > 0) setTimeout(fire, 300);
    };
    fire();
  }, [total]);

  const steps = [
    {
      title: "Check your inbox",
      desc: "Your login details arrive by email within a few minutes. Search for “Cali K9” and check spam if you don't see it.",
    },
    {
      title: "Start with Module 1",
      desc: "Four short lessons: what motivates your dog, the 3 phases and 3 objectives of training, and 10 tips for everyday life. Watch these before you touch a leash.",
    },
    {
      title: "Then Module 2",
      desc: "Six lessons where the training starts: ignition, the release word and hand-feeding, luring, the spin, the training box, and search. A few focused minutes a day.",
    },
    ...(bump
      ? [{
          title: "Your Loose-Leash Walking Rapid Fix",
          desc: "The 20-minute video and drill sheet are included with your login. Use it alongside Module 2 if pulling is your biggest problem right now.",
        }]
      : []),
  ];

  return (
    <>
      <section
        className="pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            &#10003; Order Confirmed
          </span>
          <h1 className="font-display text-[clamp(38px,5.5vw,60px)] leading-[0.95] mb-5">
            YOU&rsquo;RE IN. <span className="text-[#6A9FFF]">MODULES 1 &amp; 2 ARE YOURS.</span>
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-[580px] mx-auto">
            Your Starter Bundle{bump ? " and the Loose-Leash Walking Rapid Fix are" : " is"} confirmed.
            A receipt and your login are on the way to your inbox.
          </p>
        </div>
      </section>

      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <h2 className="font-display text-[30px] text-ink text-center mb-8">WHAT TO DO NOW</h2>
          <div className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white border border-border rounded-xl p-5 flex gap-4 items-start">
                <div className="font-display text-2xl text-blue-500 leading-none shrink-0 w-8">{i + 1}</div>
                <div>
                  <div className="font-ui text-base font-bold tracking-[0.5px] uppercase text-ink mb-1">{s.title}</div>
                  <p className="font-body text-[14.5px] text-[#4b4f58] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-ink rounded-[18px] p-8 max-md:p-6 text-center text-white mt-10">
            <h3 className="font-display text-[26px] leading-[0.95] mb-3">SEE THE WHOLE SYSTEM TAUGHT LIVE</h3>
            <p className="font-body text-[15px] text-white/70 leading-relaxed max-w-[520px] mx-auto mb-6">
              Every Saturday at 10:00 AM Pacific, Jas teaches the full 5 Pillar, 50-Step framework
              on a free live masterclass. Modules 1 and 2 will make a lot more sense after it.
            </p>
            <Link href="/free-masterclass" className="btn btn-gold">
              Save My Free Seat &rarr;
            </Link>
          </div>

          <p className="font-body text-[13px] text-gray-muted text-center mt-8">
            Didn&rsquo;t get your login within 15 minutes? Check spam, then reach us at{" "}
            <Link href="/contact-us" className="underline">calik9.com/contact-us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
