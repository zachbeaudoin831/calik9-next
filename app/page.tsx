import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata = {
  title: "Elite Dog Training | Cali K9\u00ae",
  description:
    "Cali K9\u00ae \u2014 elite dog training by Jas Leverette, star of Netflix\u2019s Canine Intervention. 15+ years, 3,500+ dogs transformed. Bay Area, Los Angeles, Miami, New York & online.",
};

const MARQUEE_ITEMS = [
  "Board & Train",
  "Private Sessions",
  "Group Classes",
  "Obedience",
  "Aggression & Reactivity",
  "Puppy Development",
  "Behavior Modification",
  "Real-World Training",
];

const STATS = [
  { num: "3,500+", label: "Dogs Trained" },
  { num: "15+", label: "Years Experience" },
  { num: "Netflix", label: "Canine Intervention" },
  { num: "4.9\u2605", label: "Average Rating" },
  { num: "100%", label: "Commitment" },
];

const MEDIA_ROW_1 = [
  { src: "/images/media-logos/netflix.webp", alt: "Netflix", w: 128 },
  { src: "/images/media-logos/nbc.webp", alt: "NBC", w: 128 },
  { src: "/images/media-logos/abc.webp", alt: "ABC", w: 128 },
  { src: "/images/media-logos/ellen-show.webp", alt: "The Ellen Show", w: 171 },
  { src: "/images/media-logos/dr-phil.webp", alt: "Dr. Phil", w: 128 },
  { src: "/images/media-logos/people-magazine.webp", alt: "People Magazine", w: 128 },
  { src: "/images/media-logos/gma3.webp", alt: "GMA3", w: 128 },
];

const MEDIA_ROW_2 = [
  { src: "/images/media-logos/sf-chronicle.webp", alt: "San Francisco Chronicle", w: 304 },
  { src: "/images/media-logos/sfgate.webp", alt: "SFGate", w: 128 },
  { src: "/images/media-logos/la-times.webp", alt: "Los Angeles Times", w: 176 },
  { src: "/images/media-logos/washington-post.webp", alt: "The Washington Post", w: 176 },
  { src: "/images/media-logos/access-hollywood.webp", alt: "Access Hollywood", w: 379 },
  { src: "/images/media-logos/tmz.webp", alt: "TMZ", w: 192 },
];

const PILLARS = [
  { num: "01", name: "OBEDIENCE", desc: "Focused commands, distraction-proof responses.", img: "/images/cdn/659f2c414a146b09ae769799.webp" },
  { num: "02", name: "SOCIALIZATION", desc: "Confidence around people, dogs, and environments.", img: "/images/cdn/659f2e5fa8535bd2fb51264b.webp" },
  { num: "03", name: "AGILITY", desc: "Physical and mental engagement for a sharp dog.", img: "/images/cdn/659f2e5f66ffeb36c40a34d1.webp" },
  { num: "04", name: "BEHAVIOR MGT", desc: "Eliminate aggression, barking, and reactivity.", img: "/images/cdn/659f2e5f4a146b4136769805.webp" },
  { num: "05", name: "PROBLEM SOLVING", desc: "Custom strategies for every unique challenge.", img: "/images/cdn/659f2e5fa8535b739c51264a.webp" },
];

const TESTIMONIALS = [
  {
    initials: "MT",
    name: "Marcus T.",
    meta: "Zeus \u2014 German Shepherd \u00b7 Aggression",
    quote: "\u201CBefore Cali K9, Zeus was lunging at every dog on the street. After board and train, he walks by my side like a completely different dog.\u201D",
    result: "Now walks calmly past other dogs",
  },
  {
    initials: "JL",
    name: "Jennifer L.",
    meta: "Luna \u2014 Pit Bull Rescue \u00b7 Fear Aggression",
    quote: "\u201CWe were considering rehoming our rescue. Two weeks in board and train and she came back calm, focused, and loving. I\u2019m emotional typing this.\u201D",
    result: "Calm, focused & thriving after board & train",
  },
  {
    initials: "PK",
    name: "Priya K.",
    meta: "Mochi \u2014 Shiba Inu \u00b7 Reactivity",
    quote: "\u201CI tried three trainers before Jas. The online course alone solved problems others couldn\u2019t fix in person. The 5-Pillar system just makes sense.\u201D",
    result: "Reactivity eliminated \u2014 fixed what 3 trainers couldn\u2019t",
  },
];

const PROGRAMS = [
  {
    title: "BOARD & TRAIN",
    desc: "Full immersive program. Your dog lives with us. Maximum results in minimum time \u2014 2\u20134 weeks, all 5 Pillars addressed, daily video updates, and a handoff session.",
    href: "/services#board-and-train",
  },
  {
    title: "IN-PERSON TRAINING",
    desc: "One-on-one, semi-private, and group sessions with certified Cali K9 trainers \u2014 tailored to your dog\u2019s behavior, temperament, and goals.",
    href: "/services#in-person",
  },
  {
    title: "VIP TRAINING",
    desc: "One-on-one sessions with Jas himself. Fully customized to your dog\u2019s specific needs \u2014 the same private training trusted by celebrities.",
    href: "https://go.calik9.com/vip-with-jas",
    featured: true,
    external: true,
  },
  {
    title: "ONLINE 5-PILLAR",
    desc: "Jas\u2019s complete method. Self-paced, lifetime access. Train from anywhere worldwide \u2014 full curriculum, community support, and upgrade to in-person anytime.",
    href: "/services#online-program",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center min-h-screen overflow-hidden antialiased"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,26,92,0.97) 0%, rgba(10,26,92,0.92) 30%, rgba(18,46,133,0.60) 58%, rgba(10,26,92,0.15) 100%), url('/images/hero-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-[1] flex flex-col justify-center pt-[calc(var(--banner-h,0px)+96px)] px-12 pb-20 max-w-[1200px] mx-auto w-full max-md:px-5 max-md:pt-[calc(var(--banner-h,0px)+80px)]">
          {/* Eyebrow row */}
          <div className="flex items-center gap-3.5 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-[rgba(229,9,20,0.12)] border border-[rgba(229,9,20,0.35)] rounded-sm px-3.5 py-1.5 font-ui text-xs font-bold tracking-[2.5px] uppercase text-white">
              <span className="text-[#E50914] text-base font-black leading-none">N</span> Canine Intervention
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              Est. 2009 &middot; Bay Area &middot; Los Angeles &middot; Miami &middot; New York
            </span>
          </div>

          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5 max-w-[640px]">
            THERE ARE NO <span className="text-white/45">BAD</span> DOGS.
          </h1>

          <p className="font-body text-base text-white/75 leading-relaxed max-w-[560px] mb-9">
            Jas Leverette and Cali K9&reg; deliver professional dog training rooted in relationship, structure, and results.
            Trusted by thousands of families &mdash; and zero unsolvable dogs.
          </p>

          <div className="flex gap-4 flex-wrap max-sm:flex-col max-sm:items-stretch">
            <Link
              href="/evaluation"
              className="inline-flex items-center justify-center min-w-[240px] text-center font-ui text-sm font-bold uppercase tracking-[2px] bg-white text-ink px-8 py-3.5 rounded-sm no-underline hover:bg-off transition-colors"
            >
              Book Evaluation &rarr;
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center min-w-[240px] text-center font-ui text-sm font-bold uppercase tracking-[2px] border-2 border-white/40 text-white px-8 py-3.5 rounded-sm no-underline hover:bg-white/10 transition-colors"
            >
              View Programs &rarr;
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-9 mt-11 pt-8 border-t border-white/[0.12] flex-wrap max-sm:gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="text-left max-md:text-center">
                <div className="font-display text-[30px] text-white leading-none">{s.num}</div>
                <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/[0.48] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-blue-500 overflow-hidden py-3" aria-hidden="true">
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="font-ui text-sm font-bold tracking-[3px] uppercase text-white/90 mx-6 shrink-0">
              {item}
              <span className="text-white/30 ml-6">&loz;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MEDIA LOGOS ── */}
      <section className="bg-white py-12 border-b border-border" aria-label="As featured in media">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex-1 h-px bg-border" />
            <span className="font-ui text-xs font-bold tracking-[3px] uppercase text-gray-muted">As Featured In</span>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6 max-sm:gap-4">
            {MEDIA_ROW_1.map((m) => (
              <Image key={m.alt} src={m.src} alt={m.alt} width={m.w} height={128} className="h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all max-sm:h-7" />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 max-sm:gap-4">
            {MEDIA_ROW_2.map((m) => (
              <Image key={m.alt} src={m.src} alt={m.alt} width={m.w} height={128} className="h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all max-sm:h-7" />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT JAS TEASER ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
            <div>
              <Image
                src="/images/jas-eval.webp"
                alt="Jas Leverette with NBA champion Steph Curry"
                width={700}
                height={700}
                className="w-full h-[clamp(220px,35vw,380px)] object-cover object-top rounded-xl"
              />
            </div>
            <div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
                Meet the Founder
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
                THE TRAINER CELEBRITIES TRUST
              </h2>
              <div className="w-12 h-[2px] bg-blue-500 mb-6" />
              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-6">
                Born in Yonkers, raised in Oakland &mdash; Jas Leverette built Cali K9&reg; from a van and a phone number in San Jose
                into America&rsquo;s most trusted dog training brand. 15+ years. 3,500+ dogs. Netflix. And counting. As host of
                Netflix&rsquo;s <em>Canine Intervention</em>, Jas proves one thing over and over: there is no such thing as an unfixable dog.
              </p>
              <Link
                href="/about"
                className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] bg-blue-500 text-white px-8 py-3.5 rounded-sm no-underline hover:bg-blue-700 transition-colors"
              >
                Meet Jas &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAINING PROGRAMS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              Training Programs
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              TRANSFORM YOUR DOG&apos;S BEHAVIOR
            </h2>
            <div className="w-12 h-[2px] bg-blue-500 mx-auto mb-6" />
            <p className="font-body text-base text-gray-muted max-w-[520px] mx-auto">
              Every program is built around your dog&apos;s individual needs and your family&apos;s goals.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className={`relative rounded-xl border p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  p.featured
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-white border-border text-ink"
                }`}
              >
                {p.featured && (
                  <span className="absolute top-0 right-0 bg-amber-400 text-ink font-ui text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-bl-lg rounded-tr-xl">
                    Premium
                  </span>
                )}
                <div className="font-display text-xl mb-3">{p.title}</div>
                <p className={`font-body text-sm leading-relaxed mb-6 ${p.featured ? "text-white/80" : "text-gray-muted"}`}>
                  {p.desc}
                </p>
                {p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block font-ui text-xs font-bold uppercase tracking-[2px] px-5 py-2.5 rounded-sm no-underline transition-colors ${
                      p.featured
                        ? "bg-white text-blue-500 hover:bg-off"
                        : "border border-blue-500 text-blue-500 hover:bg-blue-50"
                    }`}
                  >
                    Learn More &rarr;
                  </a>
                ) : (
                  <Link
                    href={p.href}
                    className={`inline-block font-ui text-xs font-bold uppercase tracking-[2px] px-5 py-2.5 rounded-sm no-underline transition-colors ${
                      p.featured
                        ? "bg-white text-blue-500 hover:bg-off"
                        : "border border-blue-500 text-blue-500 hover:bg-blue-50"
                    }`}
                  >
                    Learn More &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-9">
            <Link
              href="/services"
              className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] border-2 border-blue-500 text-blue-500 px-8 py-3.5 rounded-sm no-underline hover:bg-blue-50 transition-colors"
            >
              View All Programs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY OUR METHOD WORKS ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-9">
            <div>
              <Image
                src="/images/dog-line-up.webp"
                alt="Dog group training session at the Cali K9 facility"
                width={1000}
                height={740}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
                Why Our Method Works
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
                THE CALI K9<sup className="text-[0.42em] align-super font-ui">&reg;</sup><br />
                <span className="text-blue-500">TRAINING METHOD</span>
              </h2>
              <div className="w-12 h-[2px] bg-blue-500 mb-6" />
              <p className="font-body text-base text-gray-muted leading-[1.75] mb-7">
                Our proprietary dog training system is recognized as one of the best in the world &mdash; and our reviews,
                testimonials, and client track record confirm it. Evolving since 2009, our method uses
                <strong> motivational-based training</strong> to keep training a game for your dog. We call a motivated dog
                <em> &ldquo;ignition&rdquo;</em> and describe the process as <em>&ldquo;gamified.&rdquo;</em> Our 5-pillar
                system adapts to your dog&rsquo;s specific needs and your training goals.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["Obedience", "Socialization", "Agility", "Behavior Management", "Problem Solving"].map((p) => (
                  <span
                    key={p}
                    className="font-ui text-xs font-bold tracking-[1.5px] uppercase text-blue-500 bg-[rgba(37,59,140,0.08)] border-[1.5px] border-[rgba(37,59,140,0.18)] rounded-md px-3.5 py-2"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <Link
                href="/evaluation"
                className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] bg-blue-500 text-white px-8 py-3.5 rounded-sm no-underline hover:bg-blue-700 transition-colors"
              >
                GET MY DOG EVALUATED &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-PILLAR SYSTEM ── */}
      <section className="relative overflow-hidden bg-blue-700 py-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 relative z-[1]">
          <div className="text-center mb-14">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-white/65 block mb-3">
              The Method
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
              THE CALI K9<sup className="text-[0.42em] align-super font-ui">&reg;</sup><br />5-PILLAR SYSTEM
            </h2>
            <div className="w-12 h-[2px] bg-white/15 mx-auto mb-6" />
            <p className="font-body text-base text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Jas&rsquo;s comprehensive step-by-step training system &mdash; led by the host of Netflix&rsquo;s <em>Canine Intervention</em>.
              This proven program works in just 15 minutes a day.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-5 mb-12 max-[900px]:grid-cols-3 max-[560px]:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.num} className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-white/[0.08] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all group">
                  <Image
                    src={p.img}
                    alt={`${p.name} training`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-400"
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
            <Link
              href="/services#online-program"
              className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] bg-white text-ink px-8 py-3.5 rounded-sm no-underline hover:bg-off transition-colors"
            >
              Get the 5-Pillar Program &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              Real Transformations
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              WHAT 3,500+ OWNERS SAY
            </h2>
            <div className="w-12 h-[2px] bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-border p-8 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="text-amber-400 text-lg tracking-[2px] mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="font-body text-[15px] text-ink/80 leading-relaxed mb-5 italic">{t.quote}</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-display text-sm text-blue-500">
                    {t.initials}
                  </div>
                  <div>
                    <cite className="font-ui text-sm font-bold text-ink not-italic block">{t.name}</cite>
                    <span className="font-ui text-xs text-gray-muted">{t.meta}</span>
                  </div>
                </div>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block">
                  &#10003; {t.result}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-9">
            <Link
              href="/testimonials"
              className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] border-2 border-blue-500 text-blue-500 px-8 py-3.5 rounded-sm no-underline hover:bg-blue-50 transition-colors"
            >
              Read All Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION + VIDEO ── */}
      <section className="relative overflow-hidden bg-blue-700 py-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 relative z-[1]">
          <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
            <div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-400 block mb-3">
                The Mission
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
                THERE ARE NO BAD DOGS.<br />JUST UNINFORMED OWNERS.
              </h2>
              <div className="w-12 h-[2px] bg-white/15 mb-6" />
              <p className="font-body text-[15px] text-white/70 leading-[1.8] mb-8">
                Jas Leverette, world-renowned canine behaviorist and dog trainer, is on a mission to help reduce dog bite
                cases and dogs sent to shelters worldwide. He helps the dog that no one else will. There is no dog he
                can&rsquo;t help, and he has never turned a dog away.
              </p>
              <Link
                href="/about"
                className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] border-2 border-white/40 text-white px-8 py-3.5 rounded-sm no-underline hover:bg-white/10 transition-colors"
              >
                Learn More About Jas &rarr;
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/7xnvzdfVZOQ"
                  title="Jas Leverette — There Are No Bad Dogs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE TRAINING RESOURCE ── */}
      <section className="py-20 bg-border">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-[72px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
            <div>
              <Image
                src="/images/cdn/jas-board-and-train.webp"
                alt="Jas Leverette with dogs during board and train program"
                width={900}
                height={1053}
                className="w-full h-[clamp(320px,42vw,520px)] object-cover object-top rounded-xl"
              />
            </div>
            <div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
                Free Training Resource
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
                START TRAINING FREE!
              </h2>
              <div className="w-12 h-[2px] bg-blue-500 mb-6" />
              <p className="font-body text-base text-gray-muted leading-[1.65] mb-8 max-w-[440px]">
                First steps to the Cali K9 System. Get instant access to our <strong>&ldquo;3 Tips To Motivate Your Dog&rdquo;</strong> Video
                by filling out the form below.
              </p>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/m3PZaFKdwEQZ40N1n1Ac"
                id="inline-m3PZaFKdwEQZ40N1n1Ac"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-form-name="3 Tips to Keep Your Dog From Being Distracted - New"
                data-height="386"
                data-form-id="m3PZaFKdwEQZ40N1n1Ac"
                title="3 Tips to Keep Your Dog From Being Distracted"
                className="w-full h-[386px] border-none rounded-sm block overflow-hidden"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP TEASER ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              Cali K9&reg; Gear
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              TRAIN LIKE A PRO.<br /><span className="text-blue-500">LOOK THE PART.</span>
            </h2>
            <div className="w-12 h-[2px] bg-blue-500 mx-auto mb-6" />
            <p className="font-body text-base text-gray-muted max-w-[480px] mx-auto">
              Official Cali K9&reg; apparel and training gear. Represent the method.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              { name: "Hoodies & Apparel", icon: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" },
              { name: "Hats & Headwear", icon: "M3 9c0-3.3 4-6 9-6s9 2.7 9 6M3 9v3h18V9M3 12v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6" },
              { name: "Training Equipment", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8v4l3 3" },
              { name: "Collars & Leashes", icon: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" },
            ].map((item) => (
              <a
                key={item.name}
                href="https://shop.calik9.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl border border-black/8 shadow-sm hover:shadow-lg hover:border-blue-500/25 transition-all no-underline"
              >
                <div className="aspect-[4/3] rounded-t-xl bg-gradient-to-br from-[#e8eaf4] to-[#d0d5e8] flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(26,63,171,0.4)" strokeWidth="1.2">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="font-ui text-sm font-bold uppercase tracking-[1px] text-ink mb-1">{item.name}</div>
                  <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-500">Shop Now &rarr;</div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://shop.calik9.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] bg-blue-500 text-white px-8 py-3.5 rounded-sm no-underline hover:bg-blue-700 transition-colors"
            >
              Visit the Shop &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── CELEBRITY SOCIAL PROOF ── */}
      <CelebGrid />

      {/* ── FINAL CTA ── */}
      <CtaBlock
        eyebrow="Get Started"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who've trusted Cali K9® to unlock their dog's potential. Results guaranteed."
        primaryCta={{ label: "Book Evaluation \u2192", href: "/evaluation" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/services" }}
      />

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
