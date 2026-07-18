import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CelebGrid from "@/components/CelebGrid";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Your Assessment Results — You're a Fit",
  description:
    "Based on your free behavioral assessment, your dog is a perfect fit for the Cali K9® 5-Pillar System. Book your $27 evaluation with a Professional Dog Training Specialist.",
  // Funnel destination reached via survey conditional logic — keep out of search.
  robots: { index: false, follow: false },
};

const TESTIMONIALS = [
  {
    initials: "JR",
    name: "Jessica R.",
    meta: "Oakland, CA — Google Review",
    quote:
      "“I was skeptical at first but the Board & Train program is worth every penny. Our dog came back completely different — calm, focused, obedient. Best money we’ve ever spent.”",
    result: "Calm, focused & obedient after Board & Train",
  },
  {
    initials: "DL",
    name: "David & Priya L.",
    meta: "Los Angeles, CA — Yelp Review",
    quote:
      "“After watching Canine Intervention we drove 4 hours to work with Cali K9. Worth every mile. Our pit bull went from dog-aggressive to walking past other dogs without a reaction. Unreal.”",
    result: "Dog-aggressive pit bull now walks past dogs calmly",
  },
  {
    initials: "RJ",
    name: "Robert J.",
    meta: "New York, NY — Google Review",
    quote:
      "“We have a Belgian Malinois — notoriously difficult breed. Jas handled him like it was nothing. The transformation in 30 days was something we never thought possible. Truly elite trainer.”",
    result: "Belgian Malinois transformed in 30 days",
  },
];

const PILLARS = [
  "Obedience",
  "Socialization",
  "Agility",
  "Behavior Modification",
  "Problem Solving Technique",
];

const MEDIA_LOGOS = [
  { src: "/images/media-logos/netflix.webp", alt: "Netflix" },
  { src: "/images/media-logos/nbc.webp", alt: "NBC" },
  { src: "/images/media-logos/abc.webp", alt: "ABC" },
  { src: "/images/media-logos/ellen-show.webp", alt: "The Ellen Show" },
  { src: "/images/media-logos/dr-phil.webp", alt: "Dr. Phil" },
  { src: "/images/media-logos/people-magazine.webp", alt: "People Magazine" },
];

function EvalCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/evaluation-with-behavior-specialist"
      className={`btn btn-white btn-lg text-center ${className}`}
    >
      Book Your $27 Evaluation &rarr;
    </Link>
  );
}

export default function FreeAssessmentQualifiedPage() {
  return (
    <main>
      {/* ── Hero: assessment results copy + CTA ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-16 max-md:pt-28 max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            &#10003; Your Assessment Has Been Reviewed
          </span>

          <h1 className="font-display text-[clamp(38px,5.5vw,60px)] text-white leading-[0.95] mb-8">
            GOOD NEWS — WE&rsquo;VE HELPED{" "}
            <span className="text-white/50">THOUSANDS OF DOGS LIKE YOURS</span>
          </h1>

          <div className="font-body text-lg text-white/75 leading-[1.85] space-y-5 text-left mb-8">
            <p>
              After reviewing your FREE Behavioral Assessment, we know
              we&rsquo;ve helped thousands of dogs that exhibit the same
              behavior you&rsquo;re experiencing with yours.
            </p>
            <p>
              We understand what you&rsquo;re going through, and we think you
              would be a{" "}
              <strong className="text-white">
                perfect fit to discuss your dog&rsquo;s issues with a
                Professional Dog Training Specialist
              </strong>
              . Without addressing these issues, these problems will escalate
              and cause further strain on your daily life.
            </p>
            <p>
              The Cali K9 System has helped the dogs that other trainers turn
              away. We&rsquo;ve helped over{" "}
              <strong className="text-white">10,000 dogs</strong> using the
              Cali K9 5-Pillar System:
            </p>
          </div>

          {/* 5 Pillars */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {PILLARS.map((pillar, i) => (
              <span
                key={pillar}
                className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.18] rounded-full px-4 py-2 font-ui text-[13px] font-bold tracking-[1px] uppercase text-white"
              >
                <span className="text-blue-400">{i + 1}</span> {pillar}
              </span>
            ))}
          </div>

          <EvalCta className="max-md:w-full" />
          <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
            One-on-One With a Cali K9 Specialist &middot; Results Guaranteed
          </p>
        </div>
      </section>

      {/* ── As seen on (media logos) ── */}
      <section className="bg-ink py-12">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <p className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-white/50 mb-8">
            As Seen On
          </p>
          <div className="flex items-center justify-center gap-x-12 gap-y-6 flex-wrap">
            {MEDIA_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={64}
                className="h-12 max-md:h-9 w-auto opacity-80"
              />
            ))}
          </div>
          <p className="font-body text-base text-white/60 leading-relaxed max-w-[560px] mx-auto mt-8">
            Jas Leverette took the toughest behavior cases in the country on
            Netflix&rsquo;s <em>Canine Intervention</em> — with the same
            5-Pillar System behind your assessment.
          </p>
        </div>
      </section>

      {/* ── Testimonials (dark) ── */}
      <TestimonialSection
        eyebrow="Dogs Other Trainers Turned Away"
        heading="THEY WERE STRUGGLING TOO — UNTIL THEY FOUND CALI K9"
        testimonials={TESTIMONIALS}
        theme="dark"
      />

      {/* ── Celebrity social proof ── */}
      <CelebGrid />

      {/* ── Final CTA ── */}
      <section
        className="py-20 max-md:py-12 max-[480px]:py-8 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-400 block mb-3">
            The Next Step
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
            TALK TO A PROFESSIONAL DOG TRAINING SPECIALIST
          </h2>
          <div className="w-12 h-[3px] bg-blue-400 mx-auto mb-6" />
          <p className="font-body text-base text-white/70 leading-relaxed mb-8">
            Book your $27 evaluation and get a complete behavioral assessment,
            a custom training roadmap, and the right program recommendation for
            your dog — before these issues escalate.
          </p>
          <EvalCta />
        </div>
      </section>
    </main>
  );
}
