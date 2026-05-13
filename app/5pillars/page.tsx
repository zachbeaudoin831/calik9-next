import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";

export const metadata = {
  title: "The Cali K9® 5-Pillar System | Cali K9®",
  description:
    "The Cali K9® 5-Pillar System — Obedience, Socialization, Agility, Behavior Management, and Problem Solving. Jas Leverette's complete dog training framework.",
};

const PILLARS = [
  {
    num: "01",
    name: "OBEDIENCE",
    desc: "Foundational and advanced commands — sit, stay, recall, heel — built for real-world reliability, not just performance in the yard.",
    img: "/images/cdn/659f2c414a146b09ae769799.webp",
  },
  {
    num: "02",
    name: "SOCIALIZATION",
    desc: "Confidence around people, dogs, and environments. Safe exposure that builds a stable, well-adjusted dog instead of a fearful one.",
    img: "/images/cdn/659f2e5fa8535bd2fb51264b.webp",
  },
  {
    num: "03",
    name: "AGILITY",
    desc: "Physical and mental engagement that keeps your dog sharp. Body awareness, coordination, and confidence on novel surfaces.",
    img: "/images/cdn/659f2e5f66ffeb36c40a34d1.webp",
  },
  {
    num: "04",
    name: "BEHAVIOR MANAGEMENT",
    desc: "Eliminate aggression, barking, leash pulling, and reactivity. We address the root cause, not just the symptoms.",
    img: "/images/cdn/659f2e5f4a146b4136769805.webp",
  },
  {
    num: "05",
    name: "PROBLEM SOLVING",
    desc: "Custom strategies for every unique challenge — because no two dogs are the same, and template-based training doesn't work.",
    img: "/images/cdn/659f2e5fa8535b739c51264a.webp",
  },
];

export default function FivePillarsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:min-h-0 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              The Method
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              Built by Jas Leverette · Proven over 15+ years
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            THE CALI K9<sup className="text-[0.42em] align-super font-ui">&reg;</sup>
            <br />
            <span className="text-[#8A97C4]">5-PILLAR SYSTEM</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[640px] mb-9">
            Jas&rsquo;s comprehensive, step-by-step dog training framework
            &mdash; the same five pillars every Cali K9 program is built on, from
            puppy basics to full board &amp; train.
          </p>
          <div className="flex gap-4 flex-wrap max-[768px]:flex-col max-[768px]:items-stretch">
            <Link href="/evaluation-with-jas" className="btn btn-white btn-lg">
              Book Evaluation &rarr;
            </Link>
            <Link href="/online-training-program2" className="btn btn-outline-white btn-lg">
              Train at Home &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-blue-700 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-white/65 block mb-3">
              Five Pillars
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
              EVERY PROGRAM. ONE FRAMEWORK.
            </h2>
            <div className="w-12 h-[3px] bg-white/15 mx-auto mb-6" />
            <p className="font-body text-base text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Whether you start with Online Training, In-Person, or Board &amp;
              Train, your dog moves through the same five pillars in a logical
              progression. No guesswork.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-5 max-[900px]:grid-cols-3 max-[560px]:grid-cols-2 mb-12">
            {PILLARS.map((p) => (
              <div key={p.num} className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-white/[0.08] card-hover group">
                  <Image
                    src={p.img}
                    alt={`${p.name} pillar`}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 20vw"
                  />
                  <span className="absolute bottom-[-8px] right-0.5 font-display text-[clamp(5rem,8vw,7rem)] text-white/[0.07] leading-none select-none pointer-events-none">
                    {p.num.replace("0", "")}
                  </span>
                </div>
                <div>
                  <p className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-400 mb-1">
                    {p.num} / Pillar
                  </p>
                  <h3 className="font-display text-[clamp(1.1rem,1.6vw,1.45rem)] text-white leading-[1.15] mb-2">
                    {p.name}
                  </h3>
                  <p className="font-body text-[13px] text-white/60 leading-[1.55]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/online-training-program2" className="btn btn-white btn-lg">
              Get the 5-Pillar Program &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="See It In Action"
        heading="START WITH AN EVALUATION"
        description="Book a $27 evaluation with our team. We'll assess your dog through the 5-Pillar framework and recommend the right starting point."
        primaryCta={{ label: "Book Evaluation →", href: "/evaluation-with-jas" }}
        secondaryCta={{ label: "View Programs →", href: "/newclientservices" }}
      />
    </main>
  );
}
