import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { CELEBS } from "@/components/CelebGrid";

export const metadata: Metadata = {
  title: "Free Dog Behavioral Assessment",
  description:
    "Struggling with your dog's behavior? Take Cali K9's free behavioral assessment and find out what's really going on — from the team behind Netflix's Canine Intervention.",
  openGraph: {
    title: "Free Dog Behavioral Assessment | Cali K9®",
    description:
      "Struggling with your dog's behavior? Take Cali K9's free behavioral assessment — from the team behind Netflix's Canine Intervention.",
    url: "https://calik9.com/free-behavioral-assessment",
    images: [
      "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67cf3c0717e9d95dac991999.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Dog Behavioral Assessment | Cali K9®",
    description:
      "Struggling with your dog's behavior? Take Cali K9's free behavioral assessment — from the team behind Netflix's Canine Intervention.",
    images: [
      "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67cf3c0717e9d95dac991999.png",
    ],
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

function Stars() {
  return (
    <div className="flex justify-center gap-[3px] mb-3" role="img" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#F59E0B] text-base leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function FreeBehavioralAssessmentPage() {
  return (
    <main>
      {/* ── Hero: headline + VSL + CTA ── */}
      <section
        className="relative overflow-hidden pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <h1 className="font-display text-[clamp(52px,8vw,96px)] text-white leading-[0.92] mb-5">
            STRUGGLING WITH YOUR DOG&rsquo;S{" "}
            <span className="text-white/60">BEHAVIOR?</span>
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
      <section className="bg-ink py-8">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <p className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-white/50 mb-4">
            You&rsquo;ve seen the team on
          </p>
          <div className="flex items-center justify-center gap-4">
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
        </div>
      </section>

      {/* ── Client reviews carousel ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Real Transformations
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink">
              WHAT 10,000+ DOG OWNERS ARE SAYING
            </h2>
          </div>

          <Carousel
            ariaLabel="Client reviews"
            desktopPerView={3}
            slides={TESTIMONIALS.map((t) => (
              <div
                key={t.initials}
                className="bg-white border border-border rounded-xl p-8 max-[480px]:p-6 text-center h-full"
              >
                <Stars />
                <p className="font-body text-base text-ink/80 italic leading-relaxed mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-display text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <cite className="font-ui text-sm font-bold not-italic block text-ink">
                      {t.name}
                    </cite>
                    <span className="font-ui text-xs text-gray-muted">{t.meta}</span>
                  </div>
                </div>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block">
                  &#10003; {t.result}
                </div>
              </div>
            ))}
          />
        </div>
      </section>

      {/* ── Celebrity carousel ── */}
      <section className="py-14 max-md:py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Trusted By The Best
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink max-w-[800px] mx-auto">
              CELEBRITIES, MILITARY &amp; LAW ENFORCEMENT RELY ON CALI K9
            </h2>
          </div>

          <Carousel
            ariaLabel="Celebrity testimonials"
            desktopPerView={3}
            slides={CELEBS.map((celeb) => (
              <article
                key={celeb.name}
                className="relative rounded-xl overflow-hidden aspect-square max-w-[440px] mx-auto"
                aria-label={`${celeb.name} testimonial`}
              >
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: celeb.objectPosition || "center top" }}
                  sizes="(max-width: 540px) 90vw, 440px"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end text-center p-[22px_20px]"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,10,30,0.96) 0%, rgba(5,10,30,0.75) 35%, rgba(5,10,30,0.15) 65%, transparent 100%)",
                  }}
                >
                  <div className="flex justify-center gap-0.5 mb-2" role="img" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#F59E0B] text-xs leading-none">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-[13px] italic font-light text-white/85 leading-normal mb-3.5">
                    {celeb.quote}
                  </p>
                  <div className="font-display text-xl text-white leading-none tracking-[0.5px] mb-1">
                    {celeb.name}
                  </div>
                  <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/50">
                    {celeb.meta}
                  </div>
                </div>
              </article>
            ))}
          />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-14 max-md:py-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <h2 className="font-display text-[clamp(34px,4.5vw,48px)] leading-[0.93] text-white mb-6">
            FIND OUT WHAT&rsquo;S REALLY GOING ON WITH YOUR DOG
          </h2>
          <AssessmentCta />
          <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
            Free &middot; Takes 2 Minutes &middot; No Obligation
          </p>
        </div>
      </section>
    </main>
  );
}
