import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posterFor } from "@/lib/video-poster";

export const metadata: Metadata = {
  title: "Cali K9 Online Academy",
  description:
    "Train live with Jas Leverette every week. The Cali K9® Online Academy: the complete 8-module, 50-step system plus weekly live coaching, taught by the trainer from Netflix's Canine Intervention. $97/month, cancel anytime.",
  // Draft membership sales page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// $97/mo membership checkout. Every Join CTA on the page reads from this
// one constant.
const JOIN_URL = "https://link.fastpaydirect.com/payment-link/6a9617c6d6768df054449011";

const STATS = [
  { big: "10,000+", small: "Dogs Trained by Jas" },
  { big: "15+ Yrs", small: "Professional Experience" },
  { big: "Netflix", small: "Canine Intervention" },
  { big: "4.9★", small: "Average Member Rating" },
  { big: "Gives Back", small: "A Portion Of Profits Fund Street Dog Rescue" },
];

const PROBLEMS = [
  "Dog doesn't listen",
  "Pulling on leash",
  "Jumping on people",
  "Poor recall",
  "Overexcitement",
  "Falls apart around distractions",
  "Listens to the trainer, not to you",
  "Tried training before, no lasting results",
];

const PHASES = [
  { num: 1, title: "Getting To Know Your Dog", steps: "Steps 1–8", detail: "Training tools · The 3 motivators & 5 pillars · Your dog's temperament · How dogs think" },
  { num: 2, title: "Building Drive & First Commands", steps: "Steps 9–14", detail: "Ignition · Release word & hand-feeding · Luring, spin, the box & search" },
  { num: 3, title: "Box Work: Sit, Down & Focus", steps: "Steps 15–20", detail: "Sit & down on the box · Holding position while you move · Beginner agility" },
  { num: 4, title: "Proofing & Positions", steps: "Steps 21–26", detail: "Leash proofing · Front & heel position · Teaching the recall" },
  { num: 5, title: "Touchpad & Heeling Basics", steps: "Steps 27–33", detail: "Heeling along a wall · Your first distractions · Touchpad sit, stand & search" },
  { num: 6, title: "Removing The Training Wheels", steps: "Steps 34–38", detail: "Heeling without help · Higher-value rewards · Corrections & socialization" },
  { num: 7, title: "Advanced Foundations", steps: "Steps 39–44", detail: "Ignition 2.0 · Indirect reward · Long-distance positions · Phasing out the box" },
  { num: 8, title: "Advanced Reliability & Real-World Proofing", steps: "Steps 45–50", detail: "Commands in motion · Advanced recall & heeling · Advanced distractions" },
];

const METHOD_FLOW = [
  { big: "3", label: "Motivators", sub: "Praise, food, toy" },
  { big: "5", label: "Pillars", sub: "The skills every dog needs" },
  { big: "8", label: "Modules", sub: "Orientation to real-world proofing" },
  { big: "50", label: "Steps", sub: "One fully trained dog" },
];

const PILLARS = [
  { name: "Obedience", image: "/images/funnel/pillar-1.jpg" },
  { name: "Socialization", image: "/images/funnel/pillar-2.jpg" },
  { name: "Agility", image: "/images/funnel/pillar-3.jpg" },
  { name: "Behavior Management", image: "/images/funnel/pillar-4.jpg" },
  { name: "Problem-Solving", image: "/images/funnel/pillar-5.jpg" },
];

const MOTIVATORS = [
  { name: "Praise", desc: "Tells your dog, in the moment, exactly when they've gotten it right.", image: "/images/funnel/motivator-praise.png" },
  { name: "Food", desc: "The most controllable reward. Builds value, engagement and precision from Step 1.", image: "/images/funnel/motivator-food.png" },
  { name: "Toy", desc: "Channels your dog's drive into focus instead of suppressing it.", image: "/images/funnel/motivator-toy.png" },
];

const RESULTS = [
  {
    tag: "“Reactive And Nothing Worked”",
    quote:
      "“I tried three trainers before Jas. The online course alone solved problems others couldn't fix in person. The 5-Pillar system just makes sense.”",
    name: "Priya K.",
    meta: "Mochi · Shiba Inu",
    result: "Reactivity eliminated. Fixed what 3 trainers couldn't",
  },
  {
    tag: "“No Recall, Afraid To Go Off-Leash”",
    quote:
      "“The online program is incredible value. Nothing comes close to the depth of Jas's system. My dog is off-leash reliable at 8 months old.”",
    name: "Amanda K.",
    meta: "Miami, FL",
    result: "Off-leash reliable at 8 months old",
  },
  {
    tag: "“A Fearful Rescue We Almost Returned”",
    quote:
      "“We were considering rehoming our rescue. She came back calm, focused, and loving. I'm emotional typing this.”",
    name: "Jennifer L.",
    meta: "Luna · Pit Bull Rescue",
    result: "Calm, focused & thriving",
  },
];

const LANDSCAPE = [
  {
    name: "YouTube",
    price: "Free",
    desc: "Random information. No order, no feedback, and no way to know if you're doing it right.",
    featured: false,
  },
  {
    name: "Online Courses",
    price: "$20–$50",
    desc: "Information. A library of videos with no live coaching and no accountability, so most people never finish.",
    featured: false,
  },
  {
    name: "Cali K9 Academy",
    price: "$97/month",
    desc: "A complete system plus live coaching and accountability every week. You learn to train your dog.",
    featured: true,
  },
  {
    name: "Board & Train",
    price: "$5,000+",
    desc: "The trainer trains the dog. You still have to learn how to maintain it once the dog comes home.",
    featured: false,
  },
];

const OFFER_STACK = [
  "Complete 50-Step Roadmap™",
  "All 8 Training Modules",
  "Full Training Video Library",
  "Weekly Live Training With Jas",
  "Weekly Trainer-Led Live Training",
  "Personalized Training Path",
  "Progress Tracker",
  "Private Member Community",
  "New Training & Updates As They Release",
];

const JAS_BULLETS = [
  "Star of Netflix's Canine Intervention, streaming globally",
  "15+ years training family pets, sport dogs, service dogs & K9s",
  "Trusted by NBA, NFL and A-list entertainment clients",
  "Certified Schutzhund (IPO) and PSA decoy/helper",
  "Voted “Best Dog Trainer” every year since 2012",
  "Featured on Ellen, TMZ, LA Times, SFGATE & CBS News",
];

// Real lesson clips from inside the Academy, hosted on the GHL media CDN.
const SAMPLE_VIDEOS = [
  {
    level: "Beginner · Module 2",
    title: "Foundation: Building Value & Engagement",
    desc: "Watch Jas demonstrate the step, then see an owner and dog practice it and reach the finished result.",
    src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96ddd7389c8c4614069da5.mp4",
  },
  {
    level: "Intermediate · Module 5",
    title: "Heeling: From One Step To Five",
    desc: "The exact drill progression Jas uses to build clean heel position — demonstrated, then practiced.",
    src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96ddfca227fec6bd91923a.mp4",
  },
  {
    level: "Advanced · Module 8",
    title: "Off-Leash Reliability in the Real World",
    desc: "See the finished result — a bulletproof recall around heavy distractions, the payoff of the full roadmap.",
    src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96de23c7069f4fc79a22c9.mp4",
  },
];

// Member transformation videos. The first three run high on the page under
// the authority bar; the rest appear in "More Member Transformations".
const TRANSFORMATIONS = [
  { name: "Sam & Jax", label: "Reactive → Calm", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a985a23a1f3f48f4b9d915b.mp4" },
  { name: "Jen & Prince", label: "No Control → Reliable Obedience", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96deb8389c8c461406b4ad.mp4" },
  { name: "Rachel & Zara", label: "Poor Recall → Off-Leash Reliability", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96ded3389c8c461406b7da.mp4" },
];

const MEMBER_VIDEOS = [
  { name: "Kristen", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96dee5c7069f4fc79a363b.mp4" },
  { name: "Courtney", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96df0cfac7854efe093ca3.mp4" },
  { name: "VIP Member — Miami", src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96df1efac7854efe093e8f.mp4" },
];

// "Inside the Academy" hero video.
const HERO_VIDEO = "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6ab17858966c1acf6d448da3.mp4";

// Circle crops of Jas with each client, hosted on the GHL media CDN (same set as the masterclass page).
const CDN = "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media";
const RECOGNIZABLE_NAMES = [
  { name: "Demi Moore", image: `${CDN}/6aa4587785678ef96c59f5f5.png` },
  { name: "Steph Curry", image: `${CDN}/6aa45888cbbb253811900262.png` },
  { name: "Kevin Hart", image: `${CDN}/6aa45898f4e2fd8aa0feb41a.png` },
  { name: "Kendrick Lamar", image: `${CDN}/6aa458abcbbb2538119005d2.png` },
];

const MEDIA_LOGOS = [
  { src: "/images/media-logos/lg/netflix.webp", alt: "Netflix", w: 1191, h: 320 },
  { src: "/images/media-logos/lg/ellen-show.webp", alt: "The Ellen Show", w: 840, h: 320 },
  { src: "/images/media-logos/lg/tmz.webp", alt: "TMZ", w: 755, h: 320 },
  { src: "/images/media-logos/lg/la-times.webp", alt: "LA Times", w: 2468, h: 320 },
  { src: "/images/media-logos/lg/sfgate.webp", alt: "SFGATE", w: 778, h: 320 },
  { src: "/images/media-logos/lg/nbc.webp", alt: "NBC", w: 311, h: 320 },
];

const JOIN_STEPS = [
  { num: "01", title: "Join", desc: "Complete your $97/month membership in under two minutes." },
  { num: "02", title: "Get Instant Access", desc: "You're inside the full member portal immediately. No waiting." },
  { num: "03", title: "Start Your Personalized Roadmap", desc: "Begin at Step 1 on a recommended path built for your dog, with your progress tracker ready to go." },
  { num: "04", title: "Train With Us Live Every Week", desc: "Bring your dog and your questions to Academy Live with Jas on Saturdays and the trainer-led session on Wednesdays." },
];

// Live schedule. Jas runs these from Morocco (UTC+1, no DST); the US times
// below are the Pacific/Eastern equivalents while the US is on daylight time
// (5:00 PM / 6:00 PM / 7:15 PM Morocco). When US clocks fall back in
// November, each becomes one hour earlier here (8:00 AM PT, etc.).
const SCHEDULE = [
  { day: "Sat · 9:00 AM PT / 12:00 PM ET", title: "Kickstart", access: "Free · Community", tone: "free" },
  { day: "Sat · 10:00 AM PT / 1:00 PM ET", title: "Live Webinar", access: "Open To Guests", tone: "guest" },
  { day: "Sat · 11:15 AM PT / 2:15 PM ET", title: "Academy Live With Jas", access: "Members Only", tone: "members" },
  { day: "Wed · Evening", title: "Trainer-Led Academy Live", access: "Members Only", tone: "members" },
];

const FAQS = [
  { q: "Will this work for my breed?", a: "Yes. The 50-step roadmap is built on foundational communication and obedience principles that apply across breeds. Pacing simply adjusts to your individual dog." },
  { q: "What age should my dog be?", a: "The system works from puppyhood through adulthood. Younger dogs and older dogs both move through the roadmap, just at their own pace. Older dogs often move through the foundation quickly since they're typically calmer and more focused." },
  { q: "Can I use this with a puppy?", a: "Absolutely. Many members start the same week they bring their puppy home, building good habits from Step 1 instead of fixing bad ones later." },
  { q: "How much time does it take each day?", a: "Most steps take 10 to 15 minutes a day. Consistency matters far more than duration." },
  { q: "What equipment do I need?", a: "Just a leash, treats, and your dog to start. Any additional recommended equipment (like the training box, touchpad or training collar) is covered inside the relevant steps." },
  { q: "What if my dog has serious aggression or safety issues?", a: "The Academy is built for everyday obedience, communication and behavior challenges. For serious aggression or safety concerns, please book an evaluation with our team first. These cases often need hands-on, professional support before or alongside a self-directed program." },
  { q: "Can I cancel?", a: "Yes. There's no contract. Manage or cancel your membership anytime from your account. Your access continues through the end of your current billing period." },
  { q: "Can my spouse or family participate?", a: "Yes. One membership covers your household, so everyone can stay consistent with the same commands and approach." },
  { q: "When will I see progress?", a: "It depends on your dog and your consistency. Most members see noticeable changes within the first one to two modules, roughly two to three weeks." },
  { q: "What's the difference between Academy, Elite and VIP?", a: "All three include the exact same Cali K9 method and 50-step roadmap. The difference is access, accountability and personalization. Academy is a $97/month membership with the full system and weekly live training. Elite ($997) adds a 6-month term and 4 Train With Jas small-group coaching sessions. VIP ($2,497) adds a 12-month term, 8 sessions, priority booking, a private VIP WhatsApp group and the Training Kit." },
];

function JoinCta({
  label = "Join The Academy — $97/Month",
  light = false,
  left = false,
}: {
  label?: string;
  light?: boolean;
  left?: boolean;
}) {
  return (
    <div className={left ? "text-left max-md:text-center" : "text-center"}>
      <a
        href={JOIN_URL}
        className="btn btn-gold btn-lg text-center max-md:w-full"
      >
        {label}
        <span aria-hidden="true" className="ml-2 relative -top-[2.5px] leading-none">
          &rarr;
        </span>
      </a>
      <p className={`font-ui text-xs tracking-[1.5px] uppercase mt-4 ${light ? "text-gray-muted" : "text-white/40"}`}>
        Instant Access &middot; Cancel Anytime &middot; No Long-Term Contract
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  maxW = "760px",
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  dark?: boolean;
  maxW?: string;
}) {
  return (
    <div className="text-center mb-10">
      <span className={`font-ui text-[15px] font-semibold tracking-[4px] uppercase block mb-3 ${dark ? "text-[#6A9FFF]" : "text-blue-500"}`}>
        {eyebrow}
      </span>
      <h2 className={`font-display text-[clamp(30px,4vw,44px)] leading-[0.95] mx-auto ${dark ? "text-white" : "text-ink"}`} style={{ maxWidth: maxW }}>
        {title}
      </h2>
      {sub && (
        <p className={`font-body text-base mt-4 max-w-[620px] mx-auto ${dark ? "text-white/60" : "text-gray-muted"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

const NAVY = "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)";

export default function AcademyPage() {
  return (
    <main>
      {/* ── Trust bar ── */}
      <section className="bg-ink pt-[84px] pb-3.5 max-md:pt-[80px]">
        <p className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-white/70 text-center px-4">
          <span className="text-[#F59E0B]">★★★★★</span> 4.9/5 From Academy Members
          &nbsp;&middot;&nbsp; As Seen on Netflix&rsquo;s Canine Intervention
        </p>
      </section>

      {/* ── 1. Hero + 2. Inside the Academy video + 3. Authority stats ── */}
      <section className="relative overflow-hidden py-16 max-md:py-10" style={{ background: NAVY }}>
        <div className="max-w-[1240px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-10 items-center max-md:grid-cols-1">
            <div>
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-[#6A9FFF] block mb-4">
                The Cali K9&reg; Online Academy
              </span>
              <h1 className="font-display text-[clamp(30px,3.6vw,46px)] text-white leading-[0.95] mb-4 md:whitespace-nowrap">
                TRAIN LIVE WITH <span className="text-[#F59E0B]">JAS LEVERETTE</span>
              </h1>
              <h2 className="font-ui text-[clamp(20px,2.1vw,26px)] font-bold text-white/90 leading-snug mb-5">
                The complete Cali K9 training system &mdash;{" "}
                <span className="text-[#6A9FFF]">with live coaching every week.</span>
              </h2>
              <p className="font-body text-lg text-white/70 leading-relaxed mb-4 max-w-[540px]">
                Follow the 8-module, 50-step system from home in 10&ndash;15 minutes a
                day. Then train live with Jas and the Cali K9 team every week.
                Whether your dog is reactive, pushy or simply untrained, this is the
                same method Jas uses with celebrity clients and on Netflix.
              </p>
              <p className="font-body text-base font-semibold text-white/85 mb-7">
                $97/month. Instant access. Cancel anytime.
              </p>
              <JoinCta left />
            </div>

            <div className="max-md:order-first">
              <video
                className="w-full h-auto rounded-xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                controls
                playsInline
                preload="metadata"
                poster="/images/funnel/academy-jas-teaching.jpg"
              >
                <source src={HERO_VIDEO} type="video/mp4" />
              </video>
              <p className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 text-center mt-3">
                Watch: Inside The Cali K9 Academy
              </p>
            </div>
          </div>

          {/* Authority stats */}
          <div className="flex items-center justify-between gap-6 flex-wrap max-md:justify-center mt-12 pt-8 border-t border-white/[0.12]">
            {STATS.map((s) => (
              <div key={s.small} className="text-center">
                <div className="font-display text-3xl text-white leading-none">{s.big}</div>
                <div className="font-ui text-[10px] font-semibold tracking-[1.5px] uppercase text-white/50 mt-1">
                  {s.small}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. As seen on + Trusted by strip ── */}
      <section className="bg-white py-8 border-b border-black/[0.06]">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <div className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-gray-muted mb-6">
            As Seen On
          </div>
          <div className="flex items-center justify-between max-md:justify-center max-md:gap-x-7 gap-y-6 flex-wrap">
            {MEDIA_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                sizes="(max-width: 768px) 130px, 160px"
                className="h-auto w-auto max-h-11 max-w-[160px] max-md:max-h-8 max-md:max-w-[130px] object-contain opacity-70"
              />
            ))}
          </div>

          <div className="mt-8 pt-7 border-t border-black/[0.06] flex items-center justify-between max-md:justify-center gap-x-8 gap-y-5 flex-wrap">
            <span className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-gray-muted max-md:w-full">
              Trusted By
            </span>
            {RECOGNIZABLE_NAMES.map((celeb) => (
              <div key={celeb.name} className="flex items-center gap-3">
                <Image
                  src={celeb.image}
                  alt={`Jas Leverette with ${celeb.name}`}
                  width={300}
                  height={300}
                  className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-full object-cover"
                />
                <span className="font-ui text-[15px] max-md:text-[13px] font-bold tracking-[1px] uppercase text-ink">
                  {celeb.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Before/after dog transformations ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            eyebrow="Real Dogs. Real Results."
            title="WATCH WHAT MEMBERS BUILT WITH THE SYSTEM"
            sub="Real owners, training their own dogs at home with the Cali K9 method."
          />
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {TRANSFORMATIONS.map((v) => (
              <div key={v.name} className="flex flex-col">
                <video
                  poster={posterFor(v.src)}
                  className="w-full rounded-xl bg-black shadow-md"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={v.src} type="video/mp4" />
                </video>
                <div className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-blue-500 mt-4">
                  {v.label}
                </div>
                <div className="font-ui text-sm font-bold text-ink mt-1">{v.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Does this sound like your dog? ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[900px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            eyebrow="Sound Familiar?"
            title="DOES THIS SOUND LIKE YOUR DOG?"
            sub="Whatever brought you here, there's a step in the roadmap built to fix it."
          />
          <div className="flex flex-wrap justify-center gap-2.5">
            {PROBLEMS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 bg-cream border border-black/[0.06] rounded-full px-4 py-2 font-ui text-[13px] font-semibold text-ink/80"
              >
                <span className="text-green-500 font-bold">&#10003;</span> {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. The solution: 8 modules → 50 steps ── */}
      <section className="py-16 max-md:py-10" style={{ background: NAVY }}>
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            dark
            eyebrow="The Solution"
            title={<>8 MODULES &rarr; 50 SIMPLE STEPS &rarr; ONE FULLY TRAINED DOG</>}
            sub="The exact progression Cali K9 uses, from getting to know your dog to real-world, off-leash reliability, so you always know what to train next."
            maxW="860px"
          />

          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1 mb-10">
            {PHASES.map((phase) => (
              <div key={phase.num} className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-5 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-white text-blue-700 font-display text-xl flex items-center justify-center shrink-0">
                  {phase.num}
                </div>
                <div>
                  <h3 className="font-display text-xl text-white leading-tight">{phase.title}</h3>
                  <span className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-[#F59E0B] block mt-1">
                    {phase.steps}
                  </span>
                  <p className="font-body text-sm text-white/55 mt-1.5">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-display text-2xl text-white text-center mb-6">
            50 STEPS. ONE SYSTEM. START AT STEP 1 TODAY.
          </p>
          <JoinCta />
        </div>
      </section>

      {/* ── 7. Train live every week ── */}
      <section className="py-16 max-md:py-10 bg-ink">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[0.75fr_1.25fr] gap-12 items-center max-md:grid-cols-1 max-md:gap-8">
            <div>
              <Image
                src="/images/funnel/jas-zoom.jpg"
                alt="Jas Leverette giving a thumbs up in front of a live Academy class on screen"
                width={884}
                height={1000}
                className="w-full h-auto rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-md:max-w-[420px] max-md:mx-auto"
              />
              <p className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 text-center mt-3">
                Members Train Live With Jas Every Week
              </p>
            </div>
            <div>
              <div className="mb-8 max-md:text-center">
                <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-200 block mb-3">
                  Not Another Course
                </span>
                <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-white mb-4">
                  TRAIN LIVE WITH JAS EVERY WEEK
                </h2>
                <p className="font-body text-base text-white/70 leading-relaxed max-w-[560px] max-md:mx-auto">
                  This isn&rsquo;t a course you buy and forget. Every Saturday, Jas goes
                  live with the Academy for Q&amp;A, case breakdowns and coaching on your
                  dog. Every Wednesday, a Cali K9 trainer runs a second live session.
                  You&rsquo;re never training alone.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
                {SCHEDULE.map((s) => (
                  <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-blue-200 mb-2">
                      {s.day}
                    </div>
                    <h5 className="font-display text-lg text-white mb-3">{s.title}</h5>
                    <span
                      className={`inline-block font-ui text-[10.5px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full ${
                        s.tone === "members"
                          ? "bg-blue-500 text-white"
                          : s.tone === "guest"
                            ? "bg-amber-400 text-[#2b1d05]"
                            : "bg-white/15 text-white/80"
                      }`}
                    >
                      {s.access}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 mt-4 max-md:text-center">
                PT = Pacific Time &middot; ET = Eastern Time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Everything you get for $97/month ── */}
      <section id="offer" className="py-16 max-md:py-10 scroll-mt-[84px]" style={{ background: NAVY }}>
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            dark
            eyebrow="The Offer"
            title="EVERYTHING YOU GET FOR $97/MONTH"
            sub="The full system, plus live coaching every week. One membership."
          />

          <div className="bg-white/[0.06] border border-white/[0.15] rounded-xl p-8 max-[480px]:p-5">
            <ul className="list-none p-0 m-0 grid grid-cols-1 gap-y-3 mb-7">
              {OFFER_STACK.map((item) => (
                <li key={item} className="font-ui text-[16px] font-bold text-white pl-8 relative leading-snug">
                  <span className="absolute left-0 top-0 text-[#F59E0B] text-lg leading-none">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 pt-6 border-t-2 border-[#F59E0B]/60 mb-7">
              <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-white">
                Cancel Anytime
              </span>
              <span className="font-display text-4xl text-[#F59E0B] leading-none">
                $97<span className="text-xl text-white/70">/mo</span>
              </span>
            </div>
            <JoinCta label="Join Now — $97/Month" />
          </div>
        </div>
      </section>

      {/* ── 9. The Cali K9 Method™ ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            eyebrow="The Methodology"
            title={<>THE CALI K9 METHOD&trade;</>}
            sub="Not generic obedience lessons. A proprietary framework that works whether your dog is fearful and reactive, pushy and overconfident, or simply undertrained."
          />

          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3 max-md:grid-cols-1 max-md:gap-2 mb-12">
            {METHOD_FLOW.map((node, i) => (
              <div key={node.label} className="contents">
                {i > 0 && (
                  <span aria-hidden="true" className="font-display text-3xl text-blue-500 text-center max-md:rotate-90 max-md:leading-none">
                    &rarr;
                  </span>
                )}
                <div className="bg-white border border-black/[0.06] rounded-xl p-6 text-center">
                  <div className="font-display text-[44px] text-blue-500 leading-none">{node.big}</div>
                  <div className="font-display text-xl text-ink mt-1">{node.label.toUpperCase()}</div>
                  <div className="font-ui text-[12px] text-gray-muted mt-1">{node.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center font-ui text-[13px] font-bold tracking-[2px] uppercase text-gray-muted mb-5">
            The 3 Motivators
          </div>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 mb-12">
            {MOTIVATORS.map((m) => (
              <div key={m.name} className="bg-white border border-black/[0.06] rounded-xl p-5 flex items-center gap-4">
                <Image
                  src={m.image}
                  alt={`${m.name} — Cali K9 motivator`}
                  width={200}
                  height={200}
                  className="w-16 h-16 object-contain shrink-0"
                />
                <div>
                  <h3 className="font-display text-lg text-ink mb-1">{m.name.toUpperCase()}</h3>
                  <p className="font-body text-[13.5px] text-gray-muted leading-[1.55]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center font-ui text-[13px] font-bold tracking-[2px] uppercase text-gray-muted mb-5">
            The 5 Pillars
          </div>
          <div className="grid grid-cols-5 gap-4 max-md:grid-cols-3 max-[480px]:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.name} className="bg-white border border-black/[0.06] rounded-xl p-3 text-center">
                <Image
                  src={pillar.image}
                  alt={`Pillar ${i + 1} — ${pillar.name}`}
                  width={498}
                  height={381}
                  className="w-full h-auto rounded-lg mb-3"
                />
                <div className="font-ui text-[10px] font-bold tracking-[1.5px] uppercase text-blue-500 mb-1">
                  Pillar {i + 1}
                </div>
                <div className="font-display text-[15px] text-ink leading-tight">{pillar.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. See the training in action ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            eyebrow="Preview The Product"
            title="SEE THE TRAINING IN ACTION"
            sub="Look inside before you buy. Real lessons from the library, beginner through advanced."
          />
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {SAMPLE_VIDEOS.map((v) => (
              <div key={v.title} className="flex flex-col">
                <video
                  poster={posterFor(v.src)}
                  className="w-full rounded-xl bg-black shadow-md"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={v.src} type="video/mp4" />
                </video>
                <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-blue-500 mt-4 mb-1">
                  {v.level}
                </div>
                <h3 className="font-display text-lg text-ink mb-1">{v.title}</h3>
                <p className="font-body text-[14px] text-gray-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="font-body text-[15px] font-semibold text-ink mb-4">
              You&rsquo;ve seen what&rsquo;s inside. Your dog&rsquo;s roadmap starts at Step 1.
            </p>
            <JoinCta light />
          </div>
        </div>
      </section>

      {/* ── 11. More member transformations ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            eyebrow="In Their Own Words"
            title="MORE MEMBER TRANSFORMATIONS"
          />
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 mb-8">
            {MEMBER_VIDEOS.map((v) => (
              <div key={v.name}>
                <video
                  poster={posterFor(v.src)}
                  className="w-full rounded-xl bg-black shadow-md"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={v.src} type="video/mp4" />
                </video>
                <div className="font-ui text-sm font-bold tracking-[1px] uppercase text-ink mt-3 text-center">
                  {v.name}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {RESULTS.map((r) => (
              <div key={r.name} className="bg-white border border-black/[0.05] rounded-xl p-7 flex flex-col">
                <div className="font-ui text-[13px] font-bold tracking-[1px] uppercase text-blue-500 mb-3">
                  {r.tag}
                </div>
                <p className="font-body text-[15px] text-ink/80 italic leading-relaxed mb-4 flex-1">{r.quote}</p>
                <div className="font-ui text-sm font-bold text-ink">{r.name}</div>
                <div className="font-ui text-xs text-gray-muted mb-3">{r.meta}</div>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block self-start">
                  &#10003; {r.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Why Academy ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading
            eyebrow="Why The Academy"
            title="A SYSTEM, LIVE COACHING AND ACCOUNTABILITY. NOT JUST INFORMATION."
            maxW="820px"
          />

          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-[480px]:grid-cols-1 items-stretch">
            {LANDSCAPE.map((opt) => (
              <div
                key={opt.name}
                className={`rounded-xl p-6 flex flex-col ${
                  opt.featured
                    ? "bg-blue-500 text-white shadow-[0_12px_40px_rgba(18,54,160,0.3)]"
                    : "bg-cream border border-black/[0.06]"
                }`}
              >
                <div className={`font-display text-xl leading-tight mb-1 ${opt.featured ? "text-white" : "text-ink"}`}>
                  {opt.name}
                </div>
                <div className={`font-ui text-sm font-bold mb-3 ${opt.featured ? "text-[#F59E0B]" : "text-blue-500"}`}>
                  {opt.price}
                </div>
                <p className={`font-body text-sm leading-[1.7] ${opt.featured ? "text-white/85" : "text-gray-muted"}`}>
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. Meet Jas ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1">
            <div className="flex flex-col gap-4">
              <Image
                src="/images/funnel/jas-san-jose-police.jpg"
                alt="Jas Leverette with two San Jose Police K-9 officers and their dogs in front of the Cali K9 training van"
                width={1600}
                height={900}
                className="w-full h-auto aspect-[16/9] rounded-xl object-cover object-top"
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/funnel/jas-class.jpg"
                  alt="Jas Leverette teaching a training seminar"
                  width={300}
                  height={225}
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
                <Image
                  src="/images/funnel/jas-turks-caicos-military.jpg"
                  alt="Jas Leverette with Turks and Caicos military K-9 handlers holding their training certificates"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
              </div>
            </div>
            <div>
              <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
                Meet Jas
              </span>
              <h2 className="font-display text-[clamp(28px,3.5vw,40px)] leading-[0.95] text-ink mb-6">
                LEARN DIRECTLY FROM A TRAINER WITH A PROVEN TRACK RECORD
              </h2>
              <ul className="list-none p-0 m-0 space-y-2 mb-6">
                {JAS_BULLETS.map((b) => (
                  <li key={b} className="font-body text-[15px] text-gray-muted leading-normal pl-6 relative">
                    <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                    {b}
                  </li>
                ))}
              </ul>
              <blockquote className="border-l-2 border-blue-500 pl-5">
                <p className="font-body text-base italic text-ink/80 leading-relaxed mb-1">
                  &ldquo;There are no bad dogs. Just uninformed owners.&rdquo;
                </p>
                <cite className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted not-italic">
                  Jas Leverette
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. What happens when you join ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading eyebrow="Zero Guesswork" title="WHAT HAPPENS WHEN YOU JOIN" />
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-[480px]:grid-cols-1">
            {JOIN_STEPS.map((s) => (
              <div key={s.num} className="bg-cream border border-black/[0.05] rounded-xl p-6">
                <div className="font-display text-2xl text-blue-500 mb-2">{s.num}</div>
                <h3 className="font-display text-lg text-ink mb-1.5">{s.title}</h3>
                <p className="font-body text-sm text-gray-muted leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. Join the Academy ── */}
      <section className="py-12 max-md:py-10 text-center" style={{ background: "linear-gradient(135deg, #8f9fe8 0%, #7c8bf5 100%)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="font-display text-[clamp(24px,3vw,32px)] text-ink leading-tight mb-6">
            JOIN THE ACADEMY &mdash; $97/MONTH
          </h2>
          <JoinCta label="Join The Academy — $97/Month" />
        </div>
      </section>

      {/* ── 16. FAQ ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <SectionHeading eyebrow="Questions" title="FREQUENTLY ASKED QUESTIONS" />
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white border border-black/[0.06] rounded-xl">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 font-ui text-[15px] font-bold text-ink">
                  {faq.q}
                  <span className="text-blue-500 text-xl leading-none shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="font-body text-[15px] text-gray-muted leading-[1.75] px-5 pb-5">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 17. Rescue mission ── */}
      <section className="py-16 max-md:py-10 bg-ink">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-12 items-center max-md:grid-cols-1">
            <Image
              src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6aa43e77cbbb2538118d3b55.webp"
              alt="A street dog resting on a curb in Morocco"
              width={1172}
              height={774}
              className="w-full h-auto rounded-xl object-cover"
            />
            <div>
              <span className="inline-block bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-4">
                &#10022; The Cali K9 Mission
              </span>
              <h2 className="font-display text-[clamp(28px,3.5vw,42px)] leading-[0.95] text-white mb-4">
                TRAIN YOUR DOG. HELP SAVE ANOTHER.
              </h2>
              <p className="font-body text-base text-white/75 leading-relaxed">
                A portion of every Academy membership funds the rescue, veterinary care,
                rehabilitation and rehoming of street dogs, starting in Morocco. Your dog
                gets trained. Another dog gets a second chance. Every month you stay, the
                mission keeps going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 18. Final CTA ── */}
      <section className="py-16 max-md:py-10 text-center" style={{ background: NAVY }}>
        <div className="max-w-[680px] mx-auto px-6">
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-[#6A9FFF] block mb-3">
            Ready When You Are
          </span>
          <h2 className="font-display text-[clamp(34px,4.5vw,52px)] leading-[0.93] text-white mb-5">
            START TRAINING TODAY &mdash; $97/MONTH
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-8 max-w-[560px] mx-auto">
            The complete Cali K9 system, live coaching with Jas every week, and a
            roadmap that tells you exactly what to train next. Start at Step 1 today.
          </p>
          <JoinCta label="Start Training Today — $97/Month" />

          <p className="font-ui text-xs text-white/35 mt-10">
            <Link href="/privacy-policy" className="hover:text-white/60">Privacy Policy</Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:text-white/60">Terms</Link>
            {" · "}
            <Link href="/refund-policy" className="hover:text-white/60">Refund Policy</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
