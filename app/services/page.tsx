import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";

export const metadata = {
  title: "Dog Training Services",
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
    tag: "Exclusive \u00b7 Limited Spots",
    name: "VIP\nWITH JAS",
    desc: "Direct hands-on training with Jas Leverette himself. Trusted by Stephen Curry, Kevin Hart, and Michael B. Jordan.",
    href: "/vip-with-jas",
    bg: "linear-gradient(145deg, #0A0A16, #16103A, #201450)",
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
  { title: "Obedience", desc: "Foundational and advanced obedience \u2014 sit, stay, recall, heel, and complex commands \u2014 built for real-world reliability." },
  { title: "Puppy Training", desc: "Early socialization, crate training, bite inhibition, and foundational obedience. Set your puppy up for a lifetime of good behavior." },
  { title: "Off-Leash Control", desc: "Advanced off-leash reliability for dogs ready to take their training to the highest level." },
];

const LOCATIONS = [
  { name: "Bay Area, CA", address: "950 South 1st Street, San Jose, CA 95110", desc: "Flagship location \u2014 in-person training, Board & Train, and group classes." },
  { name: "Los Angeles, CA", address: "5015 Lankershim Blvd., North Hollywood, CA 91601", desc: "Private sessions and Board & Train programs serving LA and surrounding communities." },
  { name: "Miami, FL", desc: "East Coast private sessions and intensive programs \u2014 same elite Cali K9 standard." },
  { name: "New York, NY", desc: "Serving the NYC metro area with private sessions and intensive programs." },
  { name: "Online Worldwide", desc: "Full 5-Pillar system \u2014 train from anywhere on your schedule." },
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
      <section className="relative overflow-hidden bg-blue-700 py-32 pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
        />
        <div className="max-w-[1280px] mx-auto px-5 relative z-[1] text-center">
          <div className="flex items-center justify-center gap-3.5 mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-2 font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              15+ Years &middot; Celebrity Trainers &middot; Netflix Featured
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              Est. 2009 &middot; Bay Area &middot; Los Angeles &middot; Miami &middot; New York
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none text-white mb-5">
            TRAINING <span className="text-[#8A97C4]">SERVICES</span>
          </h1>
          <p className="font-body text-base text-white/75 leading-relaxed max-w-[560px] mx-auto mb-9">
            World-class dog training built on the 5-Pillar System &mdash; proven with thousands of dogs,
            from anxious rescues to celebrity companions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#new-clients" className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] bg-white text-ink px-8 py-3.5 rounded-sm no-underline hover:bg-off transition-colors">
              New Clients &rarr;
            </a>
            <a href="#returning-clients" className="inline-block font-ui text-sm font-bold uppercase tracking-[2px] border-2 border-white/40 text-white px-8 py-3.5 rounded-sm no-underline hover:bg-white/10 transition-colors">
              Returning Clients &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── NEW CLIENTS ── */}
      <section id="new-clients" className="py-20 bg-off">
        <div className="max-w-[1280px] mx-auto px-5">
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-2">NEW CLIENTS</h2>
          <p className="font-ui text-sm font-bold tracking-[2px] uppercase text-gray-muted mb-10">Choose your service</p>
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
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
      <section id="returning-clients" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5">
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-2">RETURNING CLIENTS</h2>
          <p className="font-ui text-sm font-bold tracking-[2px] uppercase text-gray-muted mb-10">Choose your service</p>
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {RETURNING_CLIENT_CARDS.map((card) => (
              <ServiceCard key={card.name} card={card as typeof NEW_CLIENT_CARDS[0]} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL BLOCK ── */}
      <section className="relative overflow-hidden bg-blue-700 py-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 relative z-[1]">
          <div className="text-center max-w-[700px] mx-auto">
            <span className="font-display text-[80px] text-white/10 leading-none block mb-[-20px]" aria-hidden="true">&ldquo;</span>
            <blockquote>
              <p className="font-body text-[clamp(18px,2.5vw,24px)] italic font-light text-white/90 leading-relaxed mb-8">
                Jas took care of my boys. He got them straight. They listen to me now. They got the best dog trainer right here.
              </p>
            </blockquote>
            <div className="inline-flex items-center gap-4 bg-white/[0.08] border border-white/[0.15] rounded-full px-6 py-3">
              <Image
                src="/images/celebs/steph-curry.png"
                alt="Stephen Curry"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover object-top"
              />
              <div className="text-left">
                <div className="font-display text-lg text-white">STEPHEN CURRY</div>
                <div className="text-amber-400 text-xs tracking-[2px]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-white/50">
                  NBA Champion &middot; Golden State Warriors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIZATIONS ── */}
      <section className="py-20 bg-off">
        <div className="max-w-[1280px] mx-auto px-5">
          <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
            What We Address
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
            Dog Behavior Specializations
          </h2>
          <div className="w-12 h-[2px] bg-blue-500 mb-10" />
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
      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-5">
          <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
            Where We Train
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
            Service Locations
          </h2>
          <div className="w-12 h-[2px] bg-blue-500 mb-10" />
          <ul className="list-none space-y-4">
            {LOCATIONS.map((loc) => (
              <li
                key={loc.name}
                className="flex items-start gap-6 py-5 border-b border-border last:border-b-0 max-sm:flex-col max-sm:gap-2"
              >
                <div className="min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
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
        eyebrow="Get Started Today"
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Join thousands of families who\u2019ve trusted Cali K9\u00ae to unlock their dog\u2019s potential."
        primaryCta={{ label: "Book Evaluation \u2192", href: "/evaluation" }}
        secondaryCta={{ label: "Call (510) 890-0298", href: "tel:5108900298" }}
      />
    </>
  );
}
