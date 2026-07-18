import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CelebGrid from "@/components/CelebGrid";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Free Dog Behavioral Assessment",
  description:
    "Struggling with your dog's behavior? Take Cali K9's free behavioral assessment and find out what's really going on — from the team behind Netflix's Canine Intervention.",
  openGraph: {
    title: "Free Dog Behavioral Assessment | Cali K9®",
    description:
      "Struggling with your dog's behavior? Take Cali K9's free behavioral assessment — from the team behind Netflix's Canine Intervention.",
    url: "https://calik9.com/free-behavioral-assessment",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const TESTIMONIALS = [
  {
    initials: "MT",
    name: "Marcus T.",
    meta: "Zeus — German Shepherd · Aggression",
    quote:
      "“Before Cali K9, Zeus was lunging at every dog on the street. After board and train, he walks by my side like a completely different dog.”",
    result: "Now walks calmly past other dogs",
  },
  {
    initials: "JL",
    name: "Jennifer L.",
    meta: "Luna — Pit Bull Rescue · Fear Aggression",
    quote:
      "“We were considering rehoming our rescue. Two weeks in board and train and she came back calm, focused, and loving. I’m emotional typing this.”",
    result: "Calm, focused & thriving after board & train",
  },
  {
    initials: "PK",
    name: "Priya K.",
    meta: "Mochi — Shiba Inu · Reactivity",
    quote:
      "“I tried three trainers before Jas. The online course alone solved problems others couldn’t fix in person. The 5-Pillar system just makes sense.”",
    result: "Reactivity eliminated — fixed what 3 trainers couldn’t",
  },
];

function AssessmentCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/dog-behavior-assessment"
      className={`btn btn-white btn-lg text-center ${className}`}
    >
      Take Free Behavioral Assessment &rarr;
    </Link>
  );
}

export default function FreeBehavioralAssessmentPage() {
  return (
    <main>
      {/* ── Hero: headline + VSL + CTA ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-16 max-md:pt-[168px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <h1 className="font-display text-[clamp(40px,6vw,68px)] text-white leading-[0.95] mb-4">
            STRUGGLING WITH YOUR DOG&rsquo;S{" "}
            <span className="text-white/50">BEHAVIOR?</span>
          </h1>

          <p className="font-body text-lg text-white/70 leading-relaxed mb-8 max-w-[560px] mx-auto">
            Aggression, anxiety, leash pulling, reactivity — whatever
            you&rsquo;re dealing with, it&rsquo;s fixable. Watch the video, then
            take our free behavioral assessment to find out what&rsquo;s really
            going on with your dog.
          </p>

          {/* VSL — same video as the evaluation page */}
          <video
            className="w-full rounded-xl block mb-8 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            poster="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67cf3c0717e9d95dac991999.png"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67d1be3a9138277227e87326.mp4"
              type="video/mp4"
            />
          </video>

          <AssessmentCta className="max-md:w-full" />

          <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
            Free &middot; Takes 2 Minutes &middot; No Obligation
          </p>
        </div>
      </section>

      {/* ── Netflix / Canine Intervention band ── */}
      <section className="bg-ink py-10">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <p className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-white/50 mb-5">
            You&rsquo;ve seen the team on
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="/images/media-logos/netflix.webp"
              alt="Netflix"
              width={128}
              height={64}
              className="h-12 w-auto"
            />
            <span className="font-display text-3xl max-md:text-2xl text-white leading-none">
              CANINE INTERVENTION
            </span>
          </div>
          <p className="font-body text-base text-white/60 leading-relaxed max-w-[560px] mx-auto">
            Jas Leverette and the Cali K9&reg; team took the toughest behavior
            cases on Netflix — and used the same 5-Pillar system your assessment
            is built on.
          </p>
        </div>
      </section>

      {/* ── Client testimonials ── */}
      <TestimonialSection testimonials={TESTIMONIALS} />

      {/* ── Celebrity social proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <section
        className="py-20 max-md:py-12 max-[480px]:py-8 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-400 block mb-3">
            It Starts With Two Minutes
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
            FIND OUT WHAT&rsquo;S REALLY GOING ON WITH YOUR DOG
          </h2>
          <div className="w-12 h-[3px] bg-blue-400 mx-auto mb-6" />
          <p className="font-body text-base text-white/70 leading-relaxed mb-8">
            Answer a few quick questions about your dog&rsquo;s behavior and
            we&rsquo;ll point you toward the right next step — the same way we
            started with 10,000+ dogs before yours.
          </p>
          <AssessmentCta />
        </div>
      </section>
    </main>
  );
}
