import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import PackageHeading from "@/components/PackageHeading";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Business Coaching for Dog Trainers",
  description:
    "Learn how to build a 6-7 figure dog training business that runs without you. Business coaching from Jas Leverette, founder of Cali K9\u00ae and star of Netflix\u2019s Canine Intervention.",
  openGraph: {
    title: "Business Coaching for Dog Trainers | Cali K9\u00ae",
    description:
      "Learn how to build a 6-7 figure dog training business that runs without you. Business coaching from Jas Leverette.",
    url: "https://calik9.com/coaching",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Coaching for Dog Trainers | Cali K9\u00ae",
    description:
      "Learn how to build a 6-7 figure dog training business that runs without you. Business coaching from Jas Leverette.",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const TESTIMONIALS = [
  {
    initial: "M",
    name: "Marcus T.",
    role: "Dog Trainer, Texas",
    quote:
      "\u201CBefore working with Jas, I was charging $50 per session and barely getting by. Within 6 months of his coaching program I tripled my revenue and finally hired my first employee.\u201D",
  },
  {
    initial: "S",
    name: "Sarah K.",
    role: "Dog Trainer, Florida",
    quote:
      "\u201CJas showed me how to stop trading time for money. I went from solo trainer to running a full team in under a year. The business systems he teaches are worth every penny.\u201D",
  },
  {
    initial: "D",
    name: "Derek L.",
    role: "Dog Trainer, California",
    quote:
      "\u201CThe pricing strategy alone changed everything. I went from undercharging to running premium programs. Jas doesn\u2019t just talk about it \u2014 he\u2019s actually built it.\u201D",
  },
];

export default function CoachingPage() {
  return (
    <main>
      {/* ── Hero: Two-column layout ── */}
      <ServiceHero
        sidebar={
          <div className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-7">
            <div className="font-display text-[clamp(22px,2.5vw,28px)] font-bold tracking-[1px] uppercase text-white mb-2">
              Book a Free Strategy Call
            </div>
            <div className="font-body text-sm text-white/50 mb-4 leading-normal">
              Schedule a 30-minute call with our team to see if coaching is the
              right fit for you.
            </div>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/6lvTV85e5Qo4Wm27E9qG"
              className="w-full border-none rounded-sm block overflow-hidden"
              style={{ height: "700px" }}
              scrolling="no"
              title="Business Coaching Calendar"
              loading="lazy"
            />
          </div>
        }
      >
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-base font-bold tracking-[0.08em] uppercase px-[18px] py-2 rounded-full backdrop-blur-md">
            <span
              className="w-[7px] h-[7px] bg-green-400 rounded-full animate-pulse"
              aria-hidden="true"
            />
            Business Coaching
          </span>
        </div>

        <PackageHeading as="h1">
          Learn How to Build a 6-7 Figure Dog Training Business That Runs
          Without You
        </PackageHeading>

        <p className="font-body text-base text-white/70 leading-relaxed mb-6">
          Jas Leverette built Cali K9 from nothing into a global brand featured
          on Netflix. Now he teaches other dog trainers how to do the same
          &mdash; the business systems, the pricing, the marketing, the team
          building, and the mindset it takes to scale past six figures and
          beyond.
        </p>

        {/* Video badge */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 bg-green-400/[0.15] border border-green-400/[0.35] text-green-400 font-ui text-base font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch The Video Below!
          </span>
        </div>

        {/* Hero video */}
        <video
          className="w-full h-auto rounded-xl mb-8 block bg-black"
          poster="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/66a6bf61161e927f9b55aa1f.png"
          controls
          playsInline
          preload="metadata"
        >
          <source
            src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/66a91067104a606d1d06c968.mp4"
            type="video/mp4"
          />
        </video>

        <hr className="border-0 border-t border-white/[0.12] my-9" />
      </ServiceHero>

      {/* ── Client Testimonials ── */}
      <section className="relative overflow-hidden bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-400 block mb-3 opacity-50">
              Success Stories
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
              CLIENT TESTIMONIALS
            </h2>
            <div className="w-12 h-[3px] bg-blue-400 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white/[0.06] border border-white/[0.12] rounded-xl p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-white/[0.12] flex items-center justify-center font-display text-xl text-white shrink-0">
                    {t.initial}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="font-ui text-base font-bold text-white tracking-[0.02em]">
                      {t.name}
                    </div>
                    <div className="font-ui text-base font-semibold tracking-[0.06em] uppercase text-white/45">
                      {t.role}
                    </div>
                  </div>
                </div>
                <div
                  className="text-[#F59E0B] text-base tracking-[2px]"
                  aria-label="5 out of 5 stars"
                >
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="font-body text-[15px] leading-relaxed text-white/70 italic">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Ready to Scale?"
        heading="BOOK YOUR FREE STRATEGY CALL"
        description="Join other dog trainers who&rsquo;ve scaled their business with Jas Leverette&rsquo;s proven systems. 30 minutes could change your business forever."
        primaryCta={{ label: "Book Strategy Call \u2192", href: "#main-content" }}
        secondaryCta={{ label: "Learn More \u2192", href: "/contact" }}
      />
    </main>
  );
}
