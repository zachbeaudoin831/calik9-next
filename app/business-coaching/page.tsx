import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import PackageHeading from "@/components/PackageHeading";
import CelebGrid from "@/components/CelebGrid";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Business Coaching for Dog Trainers",
  description:
    "Learn how to build a 6-7 figure dog training business that runs without you. Business coaching from Jas Leverette, founder of Cali K9\u00ae and star of Netflix\u2019s Canine Intervention.",
  openGraph: {
    title: "Business Coaching for Dog Trainers | Cali K9\u00ae",
    description:
      "Learn how to build a 6-7 figure dog training business that runs without you. Business coaching from Jas Leverette.",
    url: "https://calik9.com/business-coaching",
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

// Mentee testimonial videos hosted on the LeadConnector CDN so we
// don't bloat the git repo with hundreds of MB of source files.
const MENTEE_VIDEOS: { name: string; src: string; type: string }[] = [
  { name: "Twahlee", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f205946630fc6c0b431666.mp4", type: "video/mp4" },
  { name: "Steve", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f20594fc17decc45e1bc55.mp4", type: "video/mp4" },
  { name: "Apex", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f20594e84e52bef4aee443.mp4", type: "video/mp4" },
  { name: "Apex 02", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f20594fc17decc45e1bc54.mp4", type: "video/mp4" },
  { name: "Demola", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f22bd749d7293cbd5401d4.mp4", type: "video/mp4" },
  { name: "Eric Darnell", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f2059449d7293cbd491c0b.mp4", type: "video/mp4" },
  { name: "Hector", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f22bd7fab44d4020a6d673.mp4", type: "video/mp4" },
  { name: "Jeff", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f22bd7f50d9ecd2e18c5be.mp4", type: "video/mp4" },
  { name: "Kayla", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f22bd7d69684612035712b.mp4", type: "video/mp4" },
  { name: "Mentee Story", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f20594590487fe57be4d64.mp4", type: "video/mp4" },
  { name: "Simon", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/69f22bd7fc17decc45eceaf5.mp4", type: "video/mp4" },
];

const COACHING_TESTIMONIALS = [
  {
    initials: "MT",
    name: "Marcus T.",
    meta: "Dog Trainer · Texas",
    quote:
      "\u201CBefore working with Jas, I was charging $50 per session and barely getting by. Within 6 months of his coaching program I tripled my revenue and finally hired my first employee.\u201D",
    result: "Tripled revenue in 6 months",
  },
  {
    initials: "SK",
    name: "Sarah K.",
    meta: "Dog Trainer · Florida",
    quote:
      "\u201CJas showed me how to stop trading time for money. I went from solo trainer to running a full team in under a year. The business systems he teaches are worth every penny.\u201D",
    result: "Built a full team in under a year",
  },
  {
    initials: "DL",
    name: "Derek L.",
    meta: "Dog Trainer · California",
    quote:
      "\u201CThe pricing strategy alone changed everything. I went from undercharging to running premium programs. Jas doesn\u2019t just talk about it \u2014 he\u2019s actually built it.\u201D",
    result: "Now running premium programs",
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
              Mentorship Qualifier
            </div>
            <div className="font-body text-sm text-white/50 mb-4 leading-normal">
              Fill the form to find out if you qualify for the Mentorship Program.
            </div>
            <form className="space-y-3 font-body text-sm text-white/80">
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">
                  Current experience level with dogs and dog training
                </label>
                <textarea
                  name="experience"
                  rows={2}
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">
                  Biggest goal from joining the Cali K9 Mentorship Program
                </label>
                <textarea
                  name="goal"
                  rows={2}
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">
                  Current monthly income from dog training or related services
                </label>
                <input
                  type="text"
                  name="income"
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">
                  How committed are you to investing time, energy, and money into becoming successful? (1–10)
                </label>
                <input
                  type="number"
                  name="commitment"
                  min={1}
                  max={10}
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">
                  Why do you believe you are a good fit for this mentorship program?
                </label>
                <textarea
                  name="fit"
                  rows={2}
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-1">
                  Are you prepared to invest in mentorship if accepted into the program?
                </label>
                <select
                  name="invest"
                  className="w-full bg-white/[0.06] border border-white/15 rounded-sm px-3 py-2 text-white focus:outline-none focus:border-blue-400 transition-colors"
                >
                  <option value="" className="bg-blue-700">Select…</option>
                  <option value="yes" className="bg-blue-700">Yes</option>
                  <option value="no" className="bg-blue-700">No</option>
                  <option value="maybe" className="bg-blue-700">Maybe — depends on details</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full font-ui text-sm font-bold tracking-[2px] uppercase bg-blue-500 text-white px-5 py-3 rounded-sm mt-2 hover:bg-blue-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        }
        intro={
          <>
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
              Without Running You to the Ground
            </PackageHeading>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              Jas Leverette built Cali K9 from nothing into a global brand featured
              on Netflix. Now he teaches other dog trainers how to do the same
              &mdash; the business systems, the pricing, the marketing, the team
              building, and the mindset it takes to scale past six figures and
              beyond.
            </p>
          </>
        }
      >
        {/* Hero video — clean thumbnail (video frame at metadata load,
            browser will overlay its own play button) */}
        <video
          className="w-full h-auto rounded-xl mb-8 block bg-black"
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

      {/* ── Mentee Video Testimonials ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Mentee Testimonials
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              REAL TRAINERS, REAL RESULTS
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {MENTEE_VIDEOS.map((v) => (
              <figure
                key={v.name}
                className="rounded-xl overflow-hidden bg-white border border-border shadow-sm flex flex-col"
              >
                <video
                  className="w-full aspect-video object-contain bg-black"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={v.src} type={v.type} />
                  Your browser does not support the video tag.
                </video>
                <figcaption className="p-4">
                  <div className="font-display text-lg text-ink leading-tight">
                    {v.name}
                  </div>
                  <div className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-gray-muted mt-1">
                    Cali K9 Mentee
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimonials ── */}
      <TestimonialSection
        eyebrow="Success Stories"
        heading="CLIENT TESTIMONIALS"
        theme="dark"
        testimonials={COACHING_TESTIMONIALS}
      />

      {/* ── Celebrity Social Proof ── */}
      <CelebGrid />

    </main>
  );
}
