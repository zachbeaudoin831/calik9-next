import type { Metadata } from "next";
import Link from "next/link";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Monthly Memberships | Cali K9®",
  description:
    "Stay consistent with Cali K9® monthly memberships — In-Person Group Classes ($197/mo) and live Zoom Coaching ($97/mo) for existing Cali K9 clients.",
  openGraph: {
    title: "Monthly Memberships | Cali K9®",
    description:
      "In-Person Group Classes ($197/mo) and Zoom Coaching ($97/mo) — pick the cadence that fits your week.",
    url: "https://calik9.com/memberships",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const TIERS = [
  {
    label: "In-Person",
    name: "Group Classes",
    price: "$197",
    cadence: "per month",
    headline: "Stay consistent and structured.",
    description:
      "Four in-person group training sessions every month at a Cali K9 facility, with a certified trainer and a structured monthly curriculum.",
    bullets: [
      "4 in-person group sessions per month",
      "Certified Cali K9 trainer every session",
      "Structured monthly curriculum",
      "Community app access & training resources",
      "Max 8 dogs per class",
    ],
    cta: "Sign Up — $197/mo",
    href: "/group-class",
    bg: "linear-gradient(160deg, #052030, #083548, #0A4560)",
  },
  {
    label: "Virtual",
    name: "Zoom Coaching",
    price: "$97",
    cadence: "per month",
    headline: "Get expert guidance from anywhere.",
    description:
      "Four live weekly Zoom coaching sessions per month with a certified Cali K9 trainer. Real-time feedback to keep your dog's training sharp from anywhere in the world.",
    bullets: [
      "4 live weekly Zoom calls per month",
      "Certified Cali K9 trainer",
      "Real-time feedback and Q&A",
      "Cali K9 app & community access",
      "Cancel anytime",
    ],
    cta: "Sign Up — $97/mo",
    href: "/zoom-group",
    bg: "linear-gradient(160deg, #0A1F4F, #122E85, #1A3FAB)",
  },
];

export default function MembershipsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:min-h-0 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              Returning Clients · Memberships
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            MONTHLY <span className="text-[#8A97C4]">MEMBERSHIPS</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[640px] mb-9">
            Pick the cadence that fits your week &mdash; in-person Group Classes
            for structure and socialization, or live Zoom Coaching for guidance
            from anywhere.
          </p>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="relative rounded-2xl overflow-hidden flex flex-col text-white p-10 max-[480px]:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                style={{ background: tier.bg }}
              >
                <span className="font-ui text-[11px] font-bold tracking-[3px] uppercase text-white/55 mb-3">
                  {tier.label}
                </span>
                <h2 className="font-display text-[clamp(28px,3.5vw,40px)] leading-[1.05] tracking-[1px] uppercase mb-4">
                  {tier.name}
                </h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-[clamp(48px,5vw,60px)] leading-none">
                    {tier.price}
                  </span>
                  <span className="font-ui text-sm font-semibold tracking-[1px] uppercase text-white/55">
                    {tier.cadence}
                  </span>
                </div>
                <p className="font-body text-base text-white/80 leading-relaxed mb-2">
                  {tier.headline}
                </p>
                <p className="font-body text-[15px] text-white/65 leading-[1.65] mb-6">
                  {tier.description}
                </p>
                <ul className="list-none p-0 m-0 mb-8">
                  {tier.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-body text-[15px] text-white/80 leading-normal py-2 pl-6 relative border-b border-white/[0.08] last:border-b-0"
                    >
                      <span className="absolute left-0 text-green-500 font-bold text-base">
                        &#10003;
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className="mt-auto inline-flex items-center justify-center bg-white text-blue-700 font-ui text-sm font-bold tracking-[2px] uppercase px-6 py-3.5 rounded-sm no-underline hover:bg-off transition-colors"
                >
                  {tier.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>

          <p className="font-body text-[15px] italic text-gray-muted text-center mt-10 leading-relaxed">
            Memberships are available to existing Cali K9 clients. New?{" "}
            <Link
              href="/evaluation"
              className="text-blue-500 underline underline-offset-2 hover:text-blue-700"
            >
              Start with an evaluation
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Stay Consistent"
        heading="KEEP YOUR DOG'S TRAINING SHARP"
        description="Memberships are the easiest way for Cali K9 graduates to maintain progress, troubleshoot new challenges, and stay connected to the community."
        primaryCta={{ label: "View Programs →", href: "/services" }}
        secondaryCta={{ label: "Book Evaluation →", href: "/evaluation" }}
      />
    </main>
  );
}
