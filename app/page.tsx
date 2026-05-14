import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import CtaBlock from "@/components/CtaBlock";
import ShopTeaser from "@/components/ShopTeaser";
import HeroEntrance from "@/components/HeroEntrance";
import CountUp from "@/components/CountUp";
import TestimonialSection from "@/components/TestimonialSection";
import type { Testimonial } from "@/components/TestimonialSection";
import { dedupeProductsByTitle, getProductsByCollection, isServiceProduct } from "@/lib/shopify";

export const metadata = {
  title: "Elite Dog Training | Cali K9\u00ae",
  description:
    "Cali K9\u00ae \u2014 elite dog training by Jas Leverette, star of Netflix\u2019s Canine Intervention. 15+ years, 10,000+ dogs transformed. Bay Area, Los Angeles, Miami, New York & online.",
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
  { num: "10,000+", label: "Dogs Trained" },
  { num: "15+", label: "Years Experience" },
  { num: "Netflix", label: "Canine Intervention" },
  { num: "4.9", star: true, label: "Average Rating" },
  { num: "100%", label: "Commitment" },
];

const MEDIA_ROW_1 = [
  { src: "/images/media-logos/netflix.webp", alt: "Netflix", w: 128, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/nbc.webp", alt: "NBC", w: 128, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/abc.webp", alt: "ABC", w: 128, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/ellen-show.webp", alt: "The Ellen Show", w: 171, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/dr-phil.webp", alt: "Dr. Phil", w: 128, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/people-magazine.webp", alt: "People Magazine", w: 128, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/gma3.webp", alt: "GMA3", w: 128, h: "h-16 max-md:h-12" },
];

const MEDIA_ROW_2 = [
  { src: "/images/media-logos/sf-chronicle.webp", alt: "San Francisco Chronicle", w: 304, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/sfgate.webp", alt: "SFGate", w: 128, h: "h-16 max-md:h-12" },
  { src: "/images/media-logos/la-times.webp", alt: "Los Angeles Times", w: 176, h: "h-[88px] max-md:h-16" },
  { src: "/images/media-logos/washington-post.webp", alt: "The Washington Post", w: 176, h: "h-[88px] max-md:h-16" },
  { src: "/images/media-logos/access-hollywood.webp", alt: "Access Hollywood", w: 379, h: "h-[52px] max-md:h-10" },
  { src: "/images/media-logos/tmz.webp", alt: "TMZ", w: 192, h: "h-16 max-md:h-12" },
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
    desc: "Full immersive program. Your dog lives with us. Maximum results in minimum time \u2014 all 5 Pillars addressed, daily video updates, and a handoff session.",
    href: "/board-and-train",
  },
  {
    title: "IN-PERSON TRAINING",
    desc: "One-on-one, semi-private, and group sessions with certified Cali K9 trainers \u2014 tailored to your dog\u2019s behavior, temperament, and goals.",
    href: "/in-person",
  },
  {
    title: "ONLINE 5-PILLAR",
    desc: "Jas\u2019s complete method. Self-paced, lifetime access. Train from anywhere worldwide \u2014 full curriculum, community support, and upgrade to in-person anytime.",
    href: "/online-training-program2",
    featured: true,
  },
];

export default async function HomePage() {
  const [treatsRaw, equipmentRaw] = await Promise.all([
    getProductsByCollection("turbo-treats", 10),
    getProductsByCollection("training-equipment", 30),
  ]);
  const treats = dedupeProductsByTitle(treatsRaw.filter((p) => !isServiceProduct(p)));
  const equipment = dedupeProductsByTitle(equipmentRaw.filter((p) => !isServiceProduct(p)));
  // Explicit teaser order: Turbo Treats Chicken Hearts → Turbo Treats Beef
  // Liver → Cali K9 Training Kit. Apparel takes the 4th slot via a custom
  // card on ShopTeaser (links to /shop).
  const teaserHandles = [
    "turbo-treats-chicken-hearts",
    "turbo-treats-beef-liver",
    "starter-training-kit",
  ];
  const pool = [...treats, ...equipment];
  const allProducts = teaserHandles
    .map((h) => pool.find((p) => p.handle === h))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-home relative flex items-center min-h-screen max-[900px]:min-h-0 overflow-hidden antialiased">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-[3] flex flex-col justify-center pt-24 px-10 pb-20 max-w-[1200px] mx-auto w-full max-md:px-6 max-md:pt-20">
          {/* Eyebrow row */}
          <HeroEntrance delay={0}>
            <div className="flex items-center gap-3.5 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-2 bg-[rgba(229,9,20,0.12)] border border-[rgba(229,9,20,0.35)] rounded-sm px-3.5 py-1.5 font-ui text-xs font-bold tracking-[2.5px] uppercase text-white">
                <span className="text-[#E50914] text-base font-black leading-none">N</span> Canine Intervention
              </span>
              <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
                Est. 2009 &middot; Bay Area &middot; Los Angeles &middot; Miami &middot; New York
              </span>
            </div>
          </HeroEntrance>

          <HeroEntrance delay={120}>
            <h1 className="font-display leading-[0.9] tracking-[1px] text-white mb-5">
              <span className="block md:whitespace-nowrap text-[clamp(56px,6.5vw,88px)]">
                THERE ARE NO <span className="text-white/45">BAD</span> DOGS,
              </span>
              <span className="block mt-3 text-[clamp(26px,3vw,40px)] tracking-[2px] text-white/70">
                JUST UNINFORMED OWNERS
              </span>
            </h1>
          </HeroEntrance>

          <HeroEntrance delay={240}>
            <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-relaxed max-w-[560px] mb-9">
              Jas Leverette and Cali K9&reg; deliver professional dog training rooted in relationship, structure, and results.
              Trusted by thousands of families &mdash; and zero unsolvable dogs.
            </p>
          </HeroEntrance>

          <HeroEntrance delay={360}>
            <div className="flex gap-4 flex-wrap max-sm:flex-col max-sm:items-stretch">
              <Link href="/evaluation-with-behavior-specialist" className="btn btn-white btn-lg min-w-[240px]">
                Book Evaluation &rarr;
              </Link>
              <Link href="/newclientservices" className="btn btn-outline-white min-w-[240px]">
                View Programs &rarr;
              </Link>
            </div>
          </HeroEntrance>

          {/* Stats */}
          <HeroEntrance delay={500}>
            <div className="flex gap-9 mt-11 pt-8 border-t border-white/[0.12] flex-wrap max-sm:gap-5">
              {STATS.map((s) => (
                <div key={s.label} className="text-left max-md:text-center">
                  <div className="font-display text-[30px] text-white leading-none">
                    <CountUp value={s.num} />
                    {s.star && <span className="text-[#F59E0B] text-[22px] align-middle ml-0.5">&#9733;</span>}
                  </div>
                  <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/[0.48] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </HeroEntrance>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-blue-500 overflow-hidden py-3" aria-hidden="true">
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="font-ui text-sm font-bold tracking-[3px] uppercase text-white/90 mx-6 shrink-0">
              {item}
              <span className="text-white/30 ml-6">&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MEDIA LOGOS ── */}
      <section className="bg-white pt-12 pb-11 border-y border-black/[0.07]" aria-label="As featured in media">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="flex items-center gap-4 mb-9">
            <span className="flex-1 h-px bg-black/10" />
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-[#5a5a5a] whitespace-nowrap">As Featured In</span>
            <span className="flex-1 h-px bg-black/10" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-0 mb-2">
            {MEDIA_ROW_1.map((m) => (
              <Image key={m.alt} src={m.src} alt={m.alt} width={m.w} height={128} className={`${m.h} w-auto object-contain p-2 px-3 max-md:p-1.5 max-md:px-2.5 hover:scale-[1.07] transition-transform`} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-0">
            {MEDIA_ROW_2.map((m) => (
              <Image key={m.alt} src={m.src} alt={m.alt} width={m.w} height={128} className={`${m.h} w-auto object-contain p-2 px-3 max-md:p-1.5 max-md:px-2.5 hover:scale-[1.07] transition-transform`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT JAS TEASER ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
            <figure className="relative">
              <Image
                src="/images/jas-eval.webp"
                alt="Jas Leverette with NBA champion Steph Curry"
                width={700}
                height={700}
                className="w-full h-[clamp(220px,35vw,380px)] object-cover object-top rounded-xl"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-3 py-1.5">
                <span className="font-ui text-[10px] font-bold tracking-[2px] uppercase text-white/50 block">Client</span>
                <span className="font-ui text-xs font-bold tracking-[1px] text-blue-200">Steph Curry</span>
              </div>
            </figure>
            <div>
              <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
                Meet the Founder
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
                THE TRAINER CELEBRITIES TRUST
              </h2>
              <div className="w-12 h-[3px] bg-blue-500 mb-6" />
              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-6">
                Born in Yonkers, raised in Oakland &mdash; Jas Leverette built Cali K9&reg; from a van and a phone number in San Jose
                into America&rsquo;s most trusted dog training brand. 15+ years. 10,000+ dogs. Netflix. And counting. As host of
                Netflix&rsquo;s <em>Canine Intervention</em>, Jas proves one thing over and over: there is no such thing as an unfixable dog.
              </p>
              <Link href="/about-us" className="btn btn-blue">
                Meet Jas &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAINING PROGRAMS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Training Programs
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              TRANSFORM YOUR DOG&apos;S BEHAVIOR
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-6" />
            <p className="font-body text-base text-gray-muted max-w-[520px] mx-auto">
              Every program is built around your dog&apos;s individual needs and your family&apos;s goals.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className={`relative rounded-xl border p-8 card-hover ${
                  p.featured
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-white border-border text-ink"
                }`}
              >
                {p.featured && (
                  <span className="absolute top-0 right-0 bg-amber-400 text-ink font-ui text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-bl-lg rounded-tr-xl">
                    Most Popular
                  </span>
                )}
                <div className="font-display text-xl mb-3">{p.title}</div>
                <p className={`font-body text-sm leading-relaxed mb-6 ${p.featured ? "text-white/80" : "text-gray-muted"}`}>
                  {p.desc}
                </p>
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
              </div>
            ))}
          </div>

          <div className="text-center mt-9">
            <Link href="/newclientservices" className="btn btn-outline">
              View All Programs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY OUR METHOD WORKS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-9">
            <figure className="relative">
              <Image
                src="/images/dog-line-up.webp"
                alt="Dog group training session at the Cali K9 facility"
                width={1000}
                height={740}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-3 py-1.5">
                <span className="font-ui text-[10px] font-bold tracking-[2px] uppercase text-white/50 block">Group Training</span>
                <span className="font-ui text-xs font-bold tracking-[1px] text-white/80">Dogs in formation &mdash; Cali K9&reg; Training Facility</span>
              </div>
            </figure>
            <div>
              <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
                Why Our Method Works
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
                THE CALI K9<sup className="text-[0.42em] align-super font-ui">&reg;</sup><br />
                <span className="text-blue-500">TRAINING METHOD</span>
              </h2>
              <div className="w-12 h-[3px] bg-blue-500 mb-6" />
              <p className="font-body text-base text-gray-muted leading-[1.75] mb-7">
                Our proprietary dog training system is recognized as one of the best in the world &mdash; and our reviews,
                testimonials, and client track record confirm it. Evolving since 2009, our method uses
                <strong> motivational-based training</strong> to keep training a game for your dog. We call a motivated dog
                <em> &ldquo;ignition&rdquo;</em> and describe the process as <em>&ldquo;gamified.&rdquo;</em> Our 5-pillar
                system adapts to your dog&rsquo;s specific needs and your training goals &mdash; any issue you&rsquo;re facing
                will be addressed and solved.
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
                href="/evaluation-with-behavior-specialist"
                className="btn btn-blue"
              >
                GET MY DOG EVALUATED &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-PILLAR SYSTEM ── */}
      <section className="relative overflow-hidden bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-white/65 block mb-3">
              The Method
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
              THE CALI K9<sup className="text-[0.42em] align-super font-ui">&reg;</sup><br />5-PILLAR SYSTEM
            </h2>
            <div className="w-12 h-[3px] bg-white/15 mx-auto mb-6" />
            <p className="font-body text-base text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Jas&rsquo;s comprehensive step-by-step training system &mdash; led by the host of Netflix&rsquo;s <em>Canine Intervention</em>.
              This proven program works in just 15 minutes a day.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-5 mb-12 max-[900px]:grid-cols-3 max-[560px]:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.num} className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-white/[0.08] card-hover group">
                  <Image
                    src={p.img}
                    alt={`${p.name} training`}
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
            <Link href="/evaluation-with-behavior-specialist" className="btn btn-white btn-lg">
              Book Evaluation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSection
        testimonials={TESTIMONIALS}
        ctaHref="/testimonials"
        ctaLabel="Read All Reviews →"
      />

      {/* ── MISSION + VIDEO ── */}
      <section className="relative overflow-hidden bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
            <div>
              <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-400 block mb-3">
                The Mission
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
                THERE ARE NO BAD DOGS.<br />JUST UNINFORMED OWNERS.
              </h2>
              <div className="w-12 h-[3px] bg-white/15 mb-6" />
              <p className="font-body text-[15px] text-white/70 leading-[1.8] mb-8">
                Jas Leverette, world-renowned canine behaviorist and dog trainer, is on a mission to help reduce dog bite
                cases and dogs sent to shelters worldwide. He helps the dog that no one else will. There is no dog he
                can&rsquo;t help, and he has never turned a dog away.
              </p>
              <Link href="/about-us" className="btn btn-outline-white">
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


      {/* ── SHOP TEASER ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Cali K9&reg; Gear
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              TRAIN LIKE A PRO.<br /><span className="text-blue-500">LOOK THE PART.</span>
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-6" />
            <p className="font-body text-base text-gray-muted max-w-[520px] mx-auto">
              Premium training treats, professional gear, and Cali K9&reg; apparel
              &mdash; everything Jas uses with his dogs.
            </p>
          </div>

          <ShopTeaser
            products={allProducts}
            apparelCard={{
              title: "Cali K9 Apparel",
              href: "/shop",
              image: "/images/cdn/66f3574be550d972a87c4363.webp",
            }}
          />

          <div className="text-center">
            <Link
              href="/shop"
              className="btn btn-blue btn-lg"
            >
              Visit the Shop &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CtaBlock
        eyebrow="Get Started"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who've trusted Cali K9® to unlock their dog's potential. Results guaranteed."
        primaryCta={{ label: "Book Evaluation \u2192", href: "/evaluation-with-behavior-specialist" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/newclientservices" }}
      />

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
