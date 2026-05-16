import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Certified Dog Trainers",
  description:
    "Meet the certified Cali K9\u00ae trainers. Balanced training experts serving Bay Area, LA, Miami, and New York.",
  openGraph: {
    title: "Certified Dog Trainers | Cali K9\u00ae",
    description:
      "Meet the certified Cali K9\u00ae trainers. Balanced training experts serving Bay Area, LA, Miami, and New York.",
    url: "https://calik9.com/team",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Dog Trainers | Cali K9\u00ae",
    description:
      "Meet the certified Cali K9\u00ae trainers. Balanced training experts serving Bay Area, LA, Miami, and New York.",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const TRAINERS = [
  {
    initials: "JL",
    role: "Founder & Training Director",
    name: "JAS LEVERETTE",
    bio: "The architect of the 5-Pillar system. Still trains dogs personally. The standard every team member is held to.",
    tags: ["Netflix Host", "Schutzhund", "15+ Yrs"],
  },
  {
    initials: "TM",
    role: "Lead Trainer, Miami Circuit",
    name: "TRAINER \u2014 MIAMI",
    bio: "Cali K9 5-Pillar certified trainer handling the Miami circuit. Specializes in behavior modification and high-drive dogs.",
    tags: ["5-Pillar Certified", "Behavior Mod", "Miami Circuit"],
  },
  {
    initials: "TM",
    role: "Client Success Trainer",
    name: "TRAINER \u2014 MIAMI",
    bio: "Working directly with clients through their training journey. Ensures every dog and owner reaches their goals.",
    tags: ["5-Pillar Certified", "Client Education", "Socialization"],
  },
  {
    initials: "TM",
    role: "Group Class Specialist",
    name: "TRAINER \u2014 MIAMI",
    bio: "Leads group training sessions and socialization programs across the Miami circuit.",
    tags: ["Group Training", "Socialization", "Obedience"],
  },
  {
    initials: "TM",
    role: "Advanced & Sport Training",
    name: "TRAINER \u2014 MIAMI",
    bio: "Handles advanced obedience and canine sport preparation. Specializes in high-drive working breeds.",
    tags: ["IGP/Sport", "Advanced Obedience", "Dutch & Belgian Breeds"],
  },
  {
    initials: "TM",
    role: "Foundation & Puppy Programs",
    name: "TRAINER \u2014 MIAMI",
    bio: "Specializes in puppy foundations and first-time dog owners. Builds confidence from day one.",
    tags: ["Puppy Programs", "Foundation Training", "Owner Education"],
  },
];

const CERT_STEPS = [
  {
    num: "01",
    filled: false,
    title: "5-PILLAR SYSTEM",
    desc: "Every Cali K9 trainer is immersed in Jas\u2019s 5-Pillar training methodology \u2014 the same balanced system that has transformed over 10,000 dogs and built a global brand. No shortcuts. No exceptions.",
    statNum: "10,000+",
    statLabel: "Dogs Trained",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "02",
    filled: true,
    title: "DIRECT TRAINING UNDER JAS",
    desc: "Each team member learns directly from Jas Leverette \u2014 not from a manual, not from a video course. Hands-on mentorship with a Schutzhund-certified trainer who has worked with police K9 units and military working dogs.",
    statNum: "100%",
    statLabel: "Under Jas",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    filled: false,
    title: "RESULTS-FIRST STANDARD",
    desc: "Cali K9 trainers are held to one standard: results. From behavior modification to advanced obedience to puppy foundations, every trainer is obsessed with measurable outcomes for every dog and family they serve.",
    statNum: "4.9",
    statStar: true,
    statLabel: "Avg. Rating",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

const OPS_TEAM = [
  { initial: "Z", name: "ZACH", role: "GHL & Media Buying", desc: "GoHighLevel, ad management, and media buying. Keeps the funnel running and leads flowing." },
  { initial: "S", name: "SALLY", role: "Setter & Social Media", desc: "Appointment setting and social media management across all platforms." },
  { initial: "D", name: "DRU", role: "Videographer & Editor", desc: "Content creation: before/after videos, training footage, ad creative, and brand content." },
  { initial: "C", name: "CHE", role: "Admin & Scheduling", desc: "Emails, scheduling, and making sure every client appointment runs on time." },
  { initial: "N", name: "NOU", role: "Customer Service", desc: "First point of contact for clients. Handles inquiries, follow-ups, and client experience." },
  { initial: "4K", name: "4K", role: "Marketing & Production", desc: "Marketing, production, social media strategy, and ad analysis across all channels." },
  { initial: "DW", name: "DREW", role: "CRM & Copywriting", desc: "Shopify management, CRM systems, email copywriting, and automation flows." },
  { initial: "NM", name: "NYUSI", role: "Maintenance", desc: "Facility maintenance across all locations. Keeps training environments clean and operational." },
];

export default function TeamPage() {
  return (
    <main id="main-content">
      {/* ── HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:min-h-0 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              Meet the People Behind the Method
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              Certified Cali K9 Trainers
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            OUR <span className="text-white/40">TEAM</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px] mb-9">
            Hand-picked by Jas, certified in the 5-Pillar System, and obsessed
            with one thing: real results for dogs and the families who love them.
          </p>
        </div>
      </section>

      {/* ── TRAINER CARDS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Certified Trainers
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              EVERY PERSON ON THIS TEAM<br />LIVES THE METHOD
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-6" />
            <p className="font-body text-base text-gray-muted max-w-[600px] mx-auto">
              Hand-selected by Jas. Trained in the 5-Pillar system. Every role
              exists to serve one purpose: getting results for dogs and their
              families.
            </p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6">
            {TRAINERS.map((t, i) => (
              <article
                key={`${t.name}-${t.role}-${i}`}
                className="bg-white rounded-xl border border-black/[0.06] p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-off border-2 border-black/[0.06] flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-[28px] text-blue-500">
                    {t.initials}
                  </span>
                </div>
                <p className="font-body text-xs italic tracking-[1.5px] text-blue-500 mb-1.5">
                  {t.role}
                </p>
                <h3 className="font-display text-[22px] tracking-[1px] text-ink mb-3">
                  {t.name}
                </h3>
                <p className="font-body text-[14px] text-gray-muted leading-[1.65] mb-4">
                  {t.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-off border border-black/[0.06] rounded px-2.5 py-1 font-ui text-[10px] font-bold tracking-[1.5px] uppercase text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION SECTION ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              The Standard
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              THE CALI K9<sup>&reg;</sup> CERTIFICATION<br />WHAT IT MEANS
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-6" />
            <p className="font-body text-base text-gray-muted max-w-[640px] mx-auto">
              Not every trainer who applies earns the right to wear the Cali K9
              name. Here is what it takes &mdash; and what it means for your dog.
            </p>
          </div>

          {/* Cert steps */}
          <div className="space-y-6 mb-12">
            {CERT_STEPS.map((step) => (
              <div key={step.num} className="flex gap-6 max-md:flex-col">
                {/* Step number */}
                <div className="flex flex-col items-center max-md:flex-row max-md:gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-lg flex-shrink-0 ${
                      step.filled
                        ? "bg-blue-500 text-white"
                        : "border-2 border-blue-500 text-blue-500"
                    }`}
                  >
                    {step.num}
                  </div>
                  {step.num !== "03" && (
                    <div className="w-[2px] flex-1 bg-blue-200 min-h-[40px] max-md:hidden" />
                  )}
                </div>
                {/* Content card */}
                <div
                  className={`flex-1 rounded-xl p-8 flex max-[600px]:flex-col gap-6 items-start ${
                    step.filled
                      ? "bg-gradient-to-br from-[#060D24] to-[#0D1640]"
                      : "bg-white border border-black/[0.06]"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      step.filled
                        ? "bg-white/10 text-white"
                        : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-display text-xl tracking-[1px] mb-2 ${
                        step.filled ? "text-white" : "text-ink"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`font-body text-[15px] leading-[1.7] ${
                        step.filled ? "text-white/70" : "text-gray-muted"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-center min-w-[80px]">
                    <div
                      className={`font-display text-[32px] leading-none mb-1 ${
                        step.filled ? "text-blue-400" : "text-blue-500"
                      }`}
                    >
                      {step.statNum}
                      {step.statStar && (
                        <span className="text-[0.5em] text-[#F59E0B] ml-1">
                          &#9733;
                        </span>
                      )}
                    </div>
                    <div
                      className={`font-ui text-[11px] font-bold tracking-[1.5px] uppercase ${
                        step.filled ? "text-white/50" : "text-gray-500"
                      }`}
                    >
                      {step.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote box */}
          <div className="bg-gradient-to-br from-[#060D24] to-[#0D1640] rounded-xl p-10 max-w-[800px] mx-auto">
            <blockquote>
              <p className="font-body text-base italic font-light text-white/85 leading-[1.82] mb-4">
                &ldquo;Jas is the architect of the Cali K9 5-Pillar System and
                the standard every trainer on this team is held to. Raised in
                Oakland, he built Cali K9 from nothing into a
                global brand &mdash; and he still trains dogs personally. Every
                team member learns directly under him.&rdquo;
              </p>
              <cite className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-400/80 not-italic">
                The Cali K9&reg; Training Standard
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── OPERATIONS TEAM ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Behind the Scenes
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              THE TEAM THAT<br />RUNS THE MACHINE
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-6" />
            <p className="font-body text-base text-gray-muted max-w-[600px] mx-auto">
              Great training needs great support. These are the people who keep
              Cali K9 running at the level our clients expect.
            </p>
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6">
            {OPS_TEAM.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-xl border border-black/[0.06] p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-off border-2 border-black/[0.06] flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-base text-blue-500">
                    {m.initial}
                  </span>
                </div>
                <div className="font-display text-lg tracking-[1px] text-ink mb-1">
                  {m.name}
                </div>
                <p className="font-body text-xs italic tracking-[1.5px] text-blue-500 mb-2.5 text-center">
                  {m.role}
                </p>
                <p className="font-body text-[14px] text-gray-muted leading-[1.65]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="Join the Team"
        heading="INTERESTED IN JOINING OUR TEAM?"
        description="The Cali K9 Dog Trainer Mentorship is a program for serious practitioners who want to master the 5-Pillar system and build a professional dog training career under direct guidance from Jas. Mentorship graduates go on to become licensed Cali K9 facilitators, running the method in new cities across the US and internationally."
        primaryCta={{ label: "Explore the Coaching Program", href: "/business-coaching" }}
        secondaryCta={{ label: "Book Evaluation", href: "/evaluation-with-behavior-specialist" }}
        dark
      />
    </main>
  );
}
