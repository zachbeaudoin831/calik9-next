import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata = {
  title: "Dog Training Services | Cali K9\u00ae",
  description:
    "Dog training services from Cali K9\u00ae \u2014 Board & Train, private sessions, online programs, and more.",
};

const NEW_CLIENT_CARDS = [
  {
    tag: "Online Program",
    name: "ONLINE TRAINING\nPROGRAM 2.0",
    desc: "The full 5-Pillar system delivered digitally. Learn at your own pace with professional guidance and a complete video library.",
    href: "/online-training",
    bg: "linear-gradient(145deg, #1236A0, #1A3FAB, #2255CC)",
  },
  {
    tag: "Private Sessions",
    name: "IN-PERSON\nTRAINING",
    desc: "One-on-one, semi-private group classes, and virtual sessions tailored to your dog\u2019s behavior, temperament, and specific goals.",
    href: "/in-person",
    bg: "linear-gradient(145deg, #061225, #0D2260, #122E85)",
  },
  {
    tag: "Most Intensive \u00b7 8 Spots/Mo",
    name: "BOARD\n& TRAIN",
    desc: "Your dog lives with us while we build the foundation. Deep obedience, behavior modification, lifetime support.",
    href: "/board-and-train",
    bg: "linear-gradient(160deg, #04060F, #080C25, #0D1640)",
  },
  {
    tag: "For Professionals",
    name: "BUSINESS\nCOACHING",
    desc: "Built for dog trainers ready to scale. Leverage Jas\u2019s proven framework to grow a high-revenue training business.",
    href: "/coaching",
    bg: "linear-gradient(145deg, #0A1F3C, #0D2A5A, #0A3568)",
  },
  {
    tag: "Coming Soon",
    name: "CALI K9\nLICENSING",
    desc: "Own and operate under the Cali K9 brand. A turnkey licensing opportunity for qualified trainers \u2014 details coming soon.",
    href: null,
    bg: "linear-gradient(145deg, #1A1A2E, #16213E, #0F3460)",
    disabled: true,
  },
];

const RETURNING_CLIENT_CARDS = [
  {
    tag: "Virtual",
    name: "ZOOM\nGROUP CLASS",
    desc: "Live virtual group sessions with certified Cali K9 trainers. Reinforce training from anywhere in the world.",
    href: "/zoom-group",
    bg: "linear-gradient(145deg, #0A3278, #1550B0, #1A5FC0)",
  },
  {
    tag: "In-Person",
    name: "IN-PERSON\nGROUP CLASS",
    desc: "Real-world socialization and obedience reinforcement in a structured group setting at a Cali K9 facility.",
    href: "/group-class",
    bg: "linear-gradient(145deg, #052030, #083548, #0A4560)",
  },
  {
    tag: "Small Group",
    name: "SEMI-PRIVATE\nTRAINING",
    desc: "Personalized attention in a smaller group setting. Targeted behavior work with dedicated trainer oversight.",
    href: "/semi-private",
    bg: "linear-gradient(145deg, #180838, #251258, #301A70)",
  },
  {
    tag: "Intensive \u00b7 1 Week",
    name: "1 WEEK BOARD\n& TRAINING",
    desc: "An intensive one-week residential program. Fast results for returning clients ready to reinforce or escalate.",
    href: "/board-train-1week",
    bg: "linear-gradient(145deg, #2A0E00, #3D1500, #501C00)",
  },
];

const SPECIALIZATIONS = [
  { title: "Aggression", desc: "Dog-to-dog aggression, human aggression, resource guarding, and territorial behaviors. We safely address the root cause \u2014 not just the symptoms." },
  { title: "Reactivity", desc: "Leash reactivity, over-arousal, and threshold issues. We build calm, focused responses to triggers through structured desensitization." },
  { title: "Anxiety & Fear", desc: "Separation anxiety, fear of strangers, loud noises, and new environments. We build confidence through the 5-Pillar System." },
  { title: "Obedience", desc: "Foundational and advanced obedience \u2014 sit, stay, recall, heel, and complex commands \u2014 built for real-world reliability, not just performance in the yard." },
  { title: "Puppy Training", desc: "Early socialization, crate training, bite inhibition, and foundational obedience. Set your puppy up for a lifetime of good behavior from day one." },
  { title: "Off-Leash Control", desc: "Advanced off-leash reliability for dogs ready to take their training to the highest level. Freedom built on a rock-solid foundation of trust and communication." },
];

const LOCATIONS = [
  { name: "Bay Area, CA", address: "950 South 1st Street, San Jose, CA 95110", desc: "Flagship location \u2014 in-person training, Board & Train, and group classes throughout the San Francisco Bay Area." },
  { name: "Los Angeles, CA", address: "5015 Lankershim Blvd., North Hollywood, CA 91601", desc: "Private sessions and Board & Train programs serving LA and surrounding communities." },
  { name: "Miami, FL", desc: "East Coast private sessions and intensive programs \u2014 same elite Cali K9 standard." },
  { name: "New York, NY", desc: "Private sessions and select programs available. Contact us to check current availability." },
  { name: "Online \u00b7 Worldwide", desc: "The full 5-Pillar Online Program and Zoom Group Classes available to clients anywhere in the world.", globe: true },
];

function ServiceCard({ card }: { card: typeof NEW_CLIENT_CARDS[0] }) {
  const inner = (
    <div
      className="relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
      style={{ background: card.bg }}
    >
      {card.disabled && <div className="absolute inset-0 bg-black/15 rounded-xl pointer-events-none z-10" />}
      <div className="p-6 min-h-[280px] flex flex-col justify-between max-[900px]:p-[18px] max-[900px]:min-h-[240px]">
        <span className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-white/50 block mb-auto">
          {card.tag}
        </span>
        <div className="mt-6">
          <h3 className="font-display text-[clamp(28px,3.2vw,36px)] text-white leading-[1.05] mb-3 whitespace-pre-line max-[900px]:text-2xl">
            {card.name}
          </h3>
          <p className="font-body text-sm text-white/60 leading-relaxed mb-4 max-[900px]:text-[13px]">
            {card.desc}
          </p>
          <span className={`font-ui text-xs font-bold tracking-[2px] uppercase text-white/70 group-hover:text-white transition-colors ${card.disabled ? "opacity-50" : ""}`}>
            {card.disabled ? "Coming Soon" : "Get Started \u2192"}
          </span>
        </div>
      </div>
    </div>
  );

  if (card.disabled || !card.href) return inner;
  return <Link href={card.href} className="no-underline block">{inner}</Link>;
}

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:min-h-0 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap max-[900px]:justify-start">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              15+ Years &middot; Celebrity Trainers &middot; Netflix Featured
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              Est. 2009 &middot; Bay Area &middot; Los Angeles &middot; Miami &middot; New York
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            TRAINING <span className="text-[#8A97C4]">SERVICES</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px] mb-9">
            World-class dog training built on the 5-Pillar System &mdash; proven with thousands of dogs,
            from anxious rescues to celebrity companions.
          </p>
          <div className="flex gap-4 flex-wrap max-[768px]:flex-col max-[768px]:items-stretch">
            <a href="#new-clients" className="btn btn-white btn-lg">
              New Clients &rarr;
            </a>
            <a href="#returning-clients" className="btn btn-outline-white btn-lg">
              Returning Clients &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── NEW CLIENTS ── */}
      <section id="new-clients" className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-2">NEW CLIENTS</h2>
          <p className="font-ui text-sm font-bold tracking-[2px] uppercase text-gray-muted mb-10">Choose your service</p>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {NEW_CLIENT_CARDS.map((card) => (
              <ServiceCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HELP STRIP ── */}
      <div className="bg-blue-500 py-4 text-center">
        <p className="font-ui text-sm font-bold tracking-[1px] text-white">
          Don&apos;t know which program fits your dog?{" "}
          <Link href="/evaluation" className="text-white underline hover:text-blue-100 transition-colors">
            Schedule an Evaluation &rarr;
          </Link>
        </p>
      </div>

      {/* ── RETURNING CLIENTS ── */}
      <section id="returning-clients" className="py-20 max-md:py-12 max-[480px]:py-8 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-2">RETURNING CLIENTS</h2>
          <p className="font-ui text-sm font-bold tracking-[2px] uppercase text-gray-muted mb-10">Choose your service</p>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {RETURNING_CLIENT_CARDS.map((card) => (
              <ServiceCard key={card.name} card={card as typeof NEW_CLIENT_CARDS[0]} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSection
        eyebrow="Success Stories"
        heading="CLIENT RESULTS"
        theme="dark"
        testimonials={[
          {
            initials: "MT",
            name: "Marcus T.",
            meta: "Zeus — German Shepherd · Aggression",
            quote: "\u201CBefore Cali K9, Zeus was lunging at every dog on the street. After board and train, he walks by my side like a completely different dog.\u201D",
            result: "Now walks calmly past other dogs",
          },
          {
            initials: "JL",
            name: "Jennifer L.",
            meta: "Luna — Pit Bull Rescue · Fear Aggression",
            quote: "\u201CWe were considering rehoming our rescue. Two weeks in board and train and she came back calm, focused, and loving.\u201D",
            result: "Calm, focused & thriving after board & train",
          },
          {
            initials: "PK",
            name: "Priya K.",
            meta: "Mochi — Shiba Inu · Reactivity",
            quote: "\u201CI tried three trainers before Cali K9. The online course alone solved problems others couldn\u2019t fix in person.\u201D",
            result: "Reactivity eliminated — fixed what 3 trainers couldn\u2019t",
          },
        ]}
        ctaHref="/testimonials"
        ctaLabel="Read All Reviews →"
      />

      {/* ── SPECIALIZATIONS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            What We Address
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
            Dog Behavior Specializations
          </h2>
          <div className="w-12 h-[3px] bg-blue-500 mb-10" />
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {SPECIALIZATIONS.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-border p-8 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-display text-xl text-ink mb-3">{s.title}</h3>
                <p className="font-body text-sm text-gray-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            Where We Train
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
            Service Locations
          </h2>
          <div className="w-12 h-[3px] bg-blue-500 mb-10" />
          <ul className="list-none space-y-4">
            {LOCATIONS.map((loc) => (
              <li
                key={loc.name}
                className="flex items-start gap-6 py-5 border-b border-border last:border-b-0 max-sm:flex-col max-sm:gap-2"
              >
                <div className="min-w-[200px]">
                  <div className="flex items-center gap-2">
                    {loc.globe ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 shrink-0">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    )}
                    <span className="font-ui text-sm font-bold uppercase tracking-[1px] text-ink">{loc.name}</span>
                  </div>
                  {loc.address && (
                    <div className="font-body text-xs text-gray-muted mt-1 ml-6">{loc.address}</div>
                  )}
                </div>
                <span className="font-body text-sm text-gray-muted leading-relaxed">{loc.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="Not Sure Where to Start?"
        heading="DON'T KNOW WHICH PROGRAM FITS YOUR DOG?"
        description="Book an evaluation with Jas. We'll assess your dog's behavior and recommend exactly the right program for you."
        primaryCta={{ label: "Book an Evaluation \u2192", href: "/evaluation" }}
        secondaryCta={{ label: "Learn More", href: "/evaluation" }}
      />
    </>
  );
}
