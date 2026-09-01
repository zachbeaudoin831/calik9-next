import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cali K9 Online Academy",
  description:
    "Train the dog you've always wanted, from home, step by step. The Cali K9® Online Academy: a 50-step roadmap taught by Jas Leverette of Netflix's Canine Intervention. $97/month, cancel anytime.",
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
];

const BEFORE = [
  "Piecing together random tips with no order",
  "Unsure what to train next, or why",
  "Dog listens sometimes, not consistently",
  "Tried things before without lasting results",
];

const AFTER = [
  "A step-by-step roadmap, start to finish",
  "Real communication your dog understands",
  "Progressive, reliable obedience you can build on",
  "The confidence of being your dog's trainer, not just its owner",
];

const PROBLEMS = [
  "Dog doesn't listen",
  "Pulling on leash",
  "Jumping on people",
  "Poor recall",
  "Lack of focus",
  "Overexcitement",
  "Difficulty around distractions",
  "Poor household boundaries",
  "Puppy foundation problems",
  "Unsure how to communicate clearly",
  "Dog listens to the trainer, not the owner",
  "Watched YouTube videos, no structured plan",
  "Tried training before, no consistent results",
];

const PHASES = [
  {
    num: 1,
    title: "Foundation & Household Structure",
    steps: "Steps 1–9",
    detail: "Establishing Household Boundaries · Building Food Value & Motivation · Hand-Feeding Meals",
    list: [
      "Establishing Boundaries in the Home",
      "Building Value for Food & Rewards",
      "Hand-Feeding Meals",
      "Increasing Food Motivation (“Ignition”)",
      "Leash-On Approach Inside the Home",
      "Establishing Household Rules & Boundaries",
      "No Beds/Couches During the Foundation Phase",
      "Initial Training Sessions",
      "Building Value for the Break/Play Command",
    ],
  },
  {
    num: 2,
    title: "Markers, Luring & The Training Box",
    steps: "Steps 10–17",
    detail: "Basic Luring Mechanics · Introducing the Training Box · Sustainment & Release Markers",
    list: [
      "Basic Luring Mechanics",
      "Introducing the Training Box",
      "Luring Onto the Training Box",
      "Climbing Onto the Box",
      "Sit + Focus on the Box",
      "Maintaining Position While Handler Moves Around Dog",
      "Establishing the Sustainment Marker",
      "Establishing & Reinforcing the Release Marker",
    ],
  },
  {
    num: 3,
    title: "Core Positions",
    steps: "Steps 18–25",
    detail: "Down, Stand & Front · Heel Position · Middle & Right Position",
    list: [
      "Down",
      "Circling the Down",
      "Stand",
      "Circling the Stand",
      "Front Position",
      "Heel Position",
      "Middle Position",
      "Right Position",
    ],
  },
  {
    num: 4,
    title: "Heeling & Movement Progression",
    steps: "Steps 26–31",
    detail: "Extending Recall Into Front · One, Three & Five-Step Heeling · Phasing Out the Lure",
    list: [
      "Extending Recall Into Front",
      "Extending Heel",
      "One-Step Heeling",
      "Three-Step Heeling",
      "Five-Step Heeling",
      "Phasing Out the Lure",
    ],
  },
  {
    num: 5,
    title: "Distance, Duration & Distraction",
    steps: "Steps 32–38",
    detail: "Adding Mild Distractions · Introducing the Touchpad · Rear-End Awareness",
    list: [
      "Adding Mild Distractions",
      "Increasing Distance",
      "Increasing Duration",
      "Increasing Distraction",
      "Introducing the Touchpad",
      "Rear-End Awareness (Touchpad-Assisted)",
      "Progressively Cleaner Positioning",
    ],
  },
  {
    num: 6,
    title: "Engagement & Real-World Reliability",
    steps: "Steps 39–44",
    detail: "Building Engagement Around Distractions · Handler Communication & Leadership",
    list: [
      "Building Engagement Around Distractions",
      "Increasing Obedience Reliability",
      "Progressing From Training Environments Into Real-World Environments",
      "Building Handler Communication",
      "Building Handler Leadership",
      "Increasing Freedom as Reliability Improves",
    ],
  },
  {
    num: 7,
    title: "Off-Leash Mastery & Generalization",
    steps: "Steps 45–50",
    detail: "Generalizing Commands · Reliable Recall & Heel · Off-Leash Reliability",
    list: [
      "Generalizing Commands in Different Environments",
      "Advanced Distraction Work",
      "Reliable Recall",
      "Reliable Heel",
      "Real-World Obedience",
      "Progression Toward Off-Leash Reliability",
    ],
  },
];

const PHILOSOPHY = [
  {
    num: "1",
    title: "CLEAR COMMUNICATION",
    desc: "Your dog needs to understand exactly what you're asking. We build a shared language before we ask for behavior.",
  },
  {
    num: "2",
    title: "PACK LEADERSHIP",
    desc: "You become someone your dog understands, follows and respects. Not through force, but through consistent, fair structure.",
  },
  {
    num: "3",
    title: "EXPRESSION",
    desc: "We're not just suppressing behavior. Your dog gets to appropriately express energy and drive while developing real control.",
  },
];

const PILLARS = [
  { name: "Obedience", desc: "Foundational and advanced commands built for real-world reliability." },
  { name: "Socialization", desc: "Calm, confident behavior around dogs, people and new environments." },
  { name: "Agility", desc: "Body awareness, confidence and physical engagement through movement." },
  { name: "Behavior Modification", desc: "Addressing the root cause of unwanted behaviors, not just the symptoms." },
  { name: "Problem Solving", desc: "Techniques for the everyday challenges every owner runs into." },
];

const CONCEPT_CHIPS = [
  "Clear Communication",
  "Leadership",
  "Reward & Value Building",
  "Markers",
  "Luring",
  "Positioning",
  "Engagement",
  "Distance",
  "Duration",
  "Distraction",
  "Real-World Reliability",
];

const RESULTS = [
  {
    tag: "“Couldn't Control Him Around Distractions”",
    quote:
      "“Before Cali K9, Zeus was lunging at every dog on the street. Now he walks by my side like a completely different dog.”",
    name: "Marcus T.",
    meta: "Zeus · German Shepherd",
    result: "Now walks calmly past other dogs",
  },
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
    tag: "“Anxious And Tense At Home”",
    quote:
      "“Jas understands dog psychology on a level that's hard to describe. He gave us a clear plan. Three months later, our dog is a joy to live with.”",
    name: "Christine M.",
    meta: "Bay Area, CA",
    result: "Anxiety resolved. A joy to live with",
  },
  {
    tag: "“A Notoriously Difficult Breed”",
    quote:
      "“We have a Belgian Malinois. Jas handled him like it was nothing. The transformation in 30 days was something we never thought possible.”",
    name: "Robert J.",
    meta: "New York, NY",
    result: "Belgian Malinois transformed in 30 days",
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
    desc: "Fragmented. You have to guess what to watch, in what order, and whether you're even doing it correctly.",
    featured: false,
  },
  {
    name: "Cheap Courses",
    price: "$20–$50",
    desc: "Information without enough structure, progression or accountability. Easy to buy, hard to ever finish.",
    featured: false,
  },
  {
    name: "Cali K9 Academy",
    price: "$97/month",
    desc: "A structured roadmap that teaches the owner and the dog together. Step by step, start to finish.",
    featured: true,
  },
  {
    name: "Board & Train",
    price: "$3,000+",
    desc: "Can work well, but puts training in someone else's hands. You still have to learn to maintain and reproduce it.",
    featured: false,
  },
];

const OFFER_STACK = [
  { item: "Complete Training Curriculum & Member Portal", detail: "Built on the 5-Pillar System. Every phase, every lesson, unlocked immediately", value: "$497" },
  { item: "The Full 50-Step Roadmap", detail: "Foundation → Positions → Leash → Recall → Distraction → Real-World", value: "$997" },
  { item: "Step-By-Step Training Demonstration Videos", detail: "Filmed lessons for every step, from Jas himself", value: "$697" },
  { item: "Owner Education", detail: "Learn how to train, not just what to train", value: "$197" },
  { item: "Member Resources & Problem-Solving Library", detail: "Know exactly what step to do next", value: "$147" },
  { item: "Private Community Access", detail: "Get support and share wins with other owners", value: "$97" },
  { item: "Live / Group Training Access", detail: "Get your specific questions answered", value: "$147" },
  { item: "Ongoing Access To Future & New Lessons", detail: "Your membership grows as the curriculum grows", value: "$197" },
];

const JAS_BULLETS = [
  "Star of Netflix's Canine Intervention, streaming globally",
  "15+ years training family pets, sport dogs, service dogs & K9s",
  "Trusted by NBA, NFL and A-list entertainment clients",
  "Certified Schutzhund (IPO) and PSA decoy/helper",
  "Voted “Best Dog Trainer” every year since 2012",
  "Featured on Ellen, TMZ, LA Times, SFGATE & CBS News",
];

const MEDIA_LOGOS = [
  { src: "/images/media-logos/netflix.webp", alt: "Netflix" },
  { src: "/images/media-logos/ellen-show.webp", alt: "The Ellen Show" },
  { src: "/images/media-logos/tmz.webp", alt: "TMZ" },
  { src: "/images/media-logos/la-times.webp", alt: "LA Times" },
  { src: "/images/media-logos/sfgate.webp", alt: "SFGATE" },
  { src: "/images/media-logos/nbc.webp", alt: "NBC" },
];

const TIER_ROWS: { label: string; academy: string; platinum: string; vip: string }[] = [
  { label: "50-Step Roadmap", academy: "✓", platinum: "✓", vip: "✓" },
  { label: "Full Academy & 5-Pillar System", academy: "✓", platinum: "✓", vip: "✓" },
  { label: "Training videos", academy: "✓", platinum: "✓", vip: "✓" },
  { label: "Problem-solving library", academy: "✓", platinum: "✓", vip: "✓" },
  { label: "Community", academy: "✓", platinum: "✓", vip: "✓" },
  { label: "Group Zoom training", academy: "✓", platinum: "✓", vip: "✓" },
  { label: "Kickstart Call", academy: "—", platinum: "1", vip: "1" },
  { label: "Private trainer check-ins", academy: "—", platinum: "4", vip: "8" },
  { label: "Personalized training plan", academy: "—", platinum: "✓", vip: "✓" },
  { label: "Progress / accountability reviews", academy: "—", platinum: "✓", vip: "✓" },
  { label: "Private call with Jas", academy: "—", platinum: "—", vip: "1" },
  { label: "Priority support", academy: "—", platinum: "—", vip: "✓" },
];

const JOIN_STEPS = [
  { num: "01", title: "Join The Academy", desc: "Complete your $97/month membership in under two minutes." },
  { num: "02", title: "Get Immediate Access", desc: "You're logged into the full member portal right away. No waiting." },
  { num: "03", title: "Start At Step 1", desc: "Begin the roadmap from the very first foundation step." },
  { num: "04", title: "Follow The Roadmap", desc: "Move through each step in order. No guessing what's next." },
  { num: "05", title: "Train Consistently", desc: "A few focused minutes a day builds real, lasting progress." },
  { num: "06", title: "Progress When Your Dog Is Ready", desc: "You advance to the next step only once your dog demonstrates understanding. Never rushed." },
];

const FAQS = [
  { q: "Will this work for my breed?", a: "Yes. The 50-step roadmap is built on foundational communication and obedience principles that apply across breeds. Pacing simply adjusts to your individual dog." },
  { q: "What age should my dog be?", a: "The system works from puppyhood through adulthood. Younger dogs and older dogs both move through the roadmap, just at their own pace." },
  { q: "Can I use this with a puppy?", a: "Absolutely. Many members start the same week they bring their puppy home, building good habits from Step 1 instead of fixing bad ones later." },
  { q: "Can older dogs learn the system?", a: "Yes. Older dogs often move through the foundation phases quickly since they're typically calmer and more focused." },
  { q: "What if my dog already knows basic obedience?", a: "You can move through the foundational phases at your own pace and spend more time on the distraction, distance and real-world reliability phases where most dogs actually struggle." },
  { q: "What if I've already hired a trainer?", a: "The Academy is a great next step. It teaches you, the owner, how to maintain and build on the behaviors long after a trainer hands the dog back." },
  { q: "What if I've watched a lot of YouTube training?", a: "That's exactly the gap the Academy fills: a single structured system to follow instead of piecing together advice from dozens of unrelated videos." },
  { q: "How much should I train each day?", a: "Most steps take just 10 to 15 minutes a day. Consistency matters far more than duration." },
  { q: "Where do I start?", a: "Right at Step 1: Establishing Boundaries in the Home. The roadmap tells you exactly what comes next after that." },
  { q: "What equipment do I need?", a: "Just a leash, treats, and your dog to start. Any additional recommended equipment (like the training box or touchpad) is covered inside the relevant steps." },
  { q: "How long does the 50-step roadmap take?", a: "It depends on your dog and your consistency. Most members see noticeable changes within the first 1 to 2 phases (roughly 2 to 3 weeks)." },
  { q: "Can my spouse/family participate?", a: "Yes. One membership covers your household, so everyone can stay consistent with the same commands and approach." },
  { q: "Is everything online?", a: "Yes, the Academy is 100% online and accessible from your phone, tablet or computer, anywhere." },
  { q: "What happens immediately after purchasing?", a: "You get instant access to the member portal and can start Step 1 right away. See the “What Happens The Moment You Join” section above for the full walkthrough." },
  { q: "Can I cancel?", a: "Yes. There's no contract. Manage or cancel your membership anytime from your account." },
  { q: "What happens to my access if I cancel?", a: "Your access continues through the end of your current billing period, then ends. You can rejoin anytime." },
  { q: "What's the difference between Academy, Platinum and VIP?", a: "All three include the exact same Cali K9 method and 50-step roadmap. The difference is access, accountability and personalization, not the training system. Academy gives you the system. Platinum adds a Kickstart Call, a personalized plan and 4 private trainer check-ins. VIP adds 8 check-ins, priority support and one private call directly with Jas." },
  { q: "What should I do if my dog has serious aggression or safety issues?", a: "The Academy is built for everyday obedience, communication and behavior challenges. For serious aggression or safety concerns, please book an evaluation with our team first. These cases often need hands-on, professional support before or alongside a self-directed program." },
];

function JoinCta({
  label = "Join The Academy for $97/Month",
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
        className={`btn btn-lg text-center max-md:w-full ${light ? "btn-blue" : "btn-white"}`}
      >
        {label}
        <span aria-hidden="true" className="ml-2 relative -top-[2.5px] leading-none">
          &rarr;
        </span>
      </a>
      <p className={`font-ui text-xs tracking-[1.5px] uppercase mt-4 ${light ? "text-gray-muted" : "text-white/40"}`}>
        Cancel Anytime &middot; Instant Access &middot; No Long-Term Contract
      </p>
    </div>
  );
}

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

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-16 max-md:py-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-center max-md:grid-cols-1">
            <div>
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-[#6A9FFF] block mb-4">
                The Cali K9&reg; Online Academy
              </span>
              <h1 className="font-display text-[clamp(42px,5.5vw,68px)] text-white leading-[0.95] mb-5">
                TRAIN THE DOG YOU&rsquo;VE ALWAYS WANTED.{" "}
                <span className="text-[#6A9FFF]">FROM HOME, STEP BY STEP.</span>
              </h1>
              <p className="font-body text-lg text-white/70 leading-relaxed mb-4 max-w-[520px]">
                A structured, sequential dog-training system, not a random
                library of videos. Follow the same proven method Jas Leverette
                uses with celebrity clients and on Netflix, broken into a
                50-step roadmap that teaches <em>you</em> how to train{" "}
                <em>your</em> dog.
              </p>
              <p className="font-body text-base font-semibold text-white/85 mb-7">
                Immediate access the moment you join. Cancel anytime.
              </p>
              <JoinCta left />
            </div>

            <div className="max-md:order-first">
              <Image
                src="/images/hero-jas.jpg"
                alt="Jas Leverette training a dog"
                width={640}
                height={720}
                priority
                className="w-full h-auto rounded-xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

          {/* Stats */}
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

      {/* ── Transformation ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              The Transformation
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink max-w-[720px] mx-auto">
              FROM &ldquo;I DON&rsquo;T KNOW WHAT TO DO&rdquo; TO &ldquo;I HAVE A SYSTEM&rdquo;
            </h2>
            <p className="font-body text-base text-gray-muted max-w-[560px] mx-auto mt-4">
              This isn&rsquo;t access to videos. It&rsquo;s a transformation
              program that teaches you exactly what to train next, and how to
              communicate with your dog so it actually works.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <div className="bg-white border border-red-500/20 rounded-xl p-7">
              <div className="font-ui text-sm font-bold tracking-[1px] uppercase text-red-500 mb-4">
                Before: &ldquo;I don&rsquo;t know what to do with my dog.&rdquo;
              </div>
              <ul className="list-none p-0 m-0 space-y-2.5">
                {BEFORE.map((item) => (
                  <li key={item} className="font-body text-[15px] text-gray-muted leading-normal pl-6 relative">
                    <span className="absolute left-0 text-red-500 font-bold">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-500 rounded-xl p-7 shadow-[0_12px_40px_rgba(18,54,160,0.12)]">
              <div className="font-ui text-sm font-bold tracking-[1px] uppercase text-blue-500 mb-4">
                After: &ldquo;I have a clear system and know exactly what to do.&rdquo;
              </div>
              <ul className="list-none p-0 m-0 space-y-2.5">
                {AFTER.map((item) => (
                  <li key={item} className="font-body text-[15px] text-ink/80 leading-normal pl-6 relative">
                    <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-base text-gray-muted text-center mt-8 max-w-[560px] mx-auto">
            Stop guessing what to train next. Follow the Cali K9 system from{" "}
            <strong className="text-ink">Step 1 through Step 50</strong>, and
            learn how to become the trainer your dog needs.
          </p>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[900px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Sound Familiar?
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink">
              BUILT FOR YOUR DOG&rsquo;S EXACT PROBLEM
            </h2>
            <p className="font-body text-base text-gray-muted mt-4">
              Whatever brought you here, there&rsquo;s a step in the roadmap built to address it.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {PROBLEMS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 bg-cream border border-black/[0.06] rounded-full px-4 py-2 font-ui text-[13px] font-semibold text-ink/80"
              >
                <span className="text-green-500 font-bold">&#10003;</span> {p}
              </span>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
            <p className="font-body text-sm text-gray-muted leading-relaxed">
              <strong className="text-ink">A note on serious behavior cases:</strong>{" "}
              the Academy is built for everyday obedience, communication and
              household-behavior challenges. If your dog is showing serious
              aggression or safety-related behavior, please{" "}
              <Link href="/evaluation-with-behavior-specialist" className="text-blue-500 underline hover:text-blue-700">
                book an evaluation
              </Link>{" "}
              with our team first. Some cases need hands-on professional support
              before starting a self-directed program.
            </p>
          </div>
        </div>
      </section>

      {/* ── 50-step roadmap ── */}
      <section
        className="py-16 max-md:py-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[900px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-[#6A9FFF] block mb-3">
              The Academy System
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-white">
              YOUR DOG&rsquo;S 50-STEP TRANSFORMATION ROADMAP
            </h2>
            <p className="font-body text-base text-white/60 mt-4 max-w-[620px] mx-auto">
              The exact progression Cali K9 uses, from household foundation to
              off-leash reliability, organized into 7 achievable phases so it
              never feels overwhelming.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {PHASES.map((phase) => (
              <div key={phase.num} className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-5 flex gap-5 items-start">
                <div className="w-11 h-11 rounded-full bg-white text-blue-700 font-display text-xl flex items-center justify-center shrink-0">
                  {phase.num}
                </div>
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display text-xl text-white leading-tight">{phase.title}</h3>
                    <span className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-[#F59E0B]">
                      {phase.steps}
                    </span>
                  </div>
                  <p className="font-body text-sm text-white/55 mt-1">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <details className="group bg-white/[0.05] border border-white/[0.12] rounded-xl">
            <summary className="cursor-pointer list-none p-5 text-center font-ui text-sm font-bold tracking-[2px] uppercase text-white/85 hover:text-white transition-colors">
              See The Full 50-Step Roadmap
              <span className="ml-2 inline-block transition-transform group-open:rotate-180">&darr;</span>
            </summary>
            <div className="px-6 pb-6 grid grid-cols-2 gap-x-10 gap-y-6 max-md:grid-cols-1">
              {(() => {
                let step = 0;
                return PHASES.map((phase) => (
                  <div key={phase.num}>
                    <div className="font-ui text-xs font-bold tracking-[1.5px] uppercase text-[#6A9FFF] mb-2">
                      Phase {phase.num} &middot; {phase.title}
                    </div>
                    <ul className="list-none p-0 m-0 space-y-1">
                      {phase.list.map((item) => {
                        step += 1;
                        return (
                          <li key={item} className="font-body text-sm text-white/70 leading-normal">
                            <span className="font-ui font-bold text-white/40 mr-2">
                              {String(step).padStart(2, "0")}
                            </span>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ));
              })()}
            </div>
          </details>

          <div className="mt-10">
            <p className="font-display text-2xl text-white text-center mb-6">
              50 STEPS. ONE SYSTEM. START AT STEP 1 TODAY.
            </p>
            <JoinCta />
          </div>
        </div>
      </section>

      {/* ── Philosophy + methodology ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Our Training Philosophy
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink">
              THREE THINGS EVERY STEP IS BUILT AROUND
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 mb-14">
            {PHILOSOPHY.map((p) => (
              <div key={p.num} className="bg-white border border-black/[0.06] rounded-xl p-7">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mb-4">
                  {p.num}
                </div>
                <h3 className="font-display text-xl text-ink mb-2">{p.title}</h3>
                <p className="font-body text-[15px] text-gray-muted leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              The Methodology
            </span>
            <h2 className="font-display text-[clamp(28px,3.5vw,40px)] leading-[0.95] text-ink">
              BUILT ON THE 5-PILLAR SYSTEM
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-1 mb-8">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.name} className="bg-white border border-black/[0.06] rounded-xl p-5 text-center">
                <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-blue-500 mb-1.5">
                  Pillar {i + 1}
                </div>
                <div className="font-display text-lg text-ink leading-tight mb-2">{pillar.name}</div>
                <p className="font-body text-[13px] text-gray-muted leading-[1.6]">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {CONCEPT_CHIPS.map((c) => (
              <span key={c} className="font-ui text-xs font-bold tracking-[1px] uppercase text-blue-500 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Real Members, Real Dogs
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink max-w-[760px] mx-auto">
              TRANSFORMATIONS, ORGANIZED BY YOUR EXACT PROBLEM
            </h2>
            <p className="font-body text-base text-gray-muted mt-4">
              Find the story that sounds like your dog.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {RESULTS.map((r) => (
              <div key={r.name} className="bg-cream border border-black/[0.05] rounded-xl p-7 flex flex-col">
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

      {/* ── Landscape comparison ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              The Competitive Landscape
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink max-w-[820px] mx-auto">
              A STRUCTURED ROADMAP THAT TEACHES YOU AND YOUR DOG. TOGETHER.
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-[480px]:grid-cols-1 items-stretch">
            {LANDSCAPE.map((opt) => (
              <div
                key={opt.name}
                className={`rounded-xl p-6 flex flex-col ${
                  opt.featured
                    ? "bg-blue-500 text-white shadow-[0_12px_40px_rgba(18,54,160,0.3)]"
                    : "bg-white border border-black/[0.06]"
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

      {/* ── The offer ── */}
      <section
        id="offer"
        className="py-16 max-md:py-10 scroll-mt-[84px]"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-[#6A9FFF] block mb-3">
              The Offer
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-white">
              EVERYTHING INSIDE THE CALI K9 ONLINE ACADEMY
            </h2>
            <p className="font-body text-base text-white/60 mt-4">
              Not just $97 for &ldquo;an Academy.&rdquo; Here&rsquo;s the complete curriculum you get access to.
            </p>
          </div>

          <div className="bg-white/[0.06] border border-white/[0.15] rounded-xl p-8 max-[480px]:p-5">
            <ul className="list-none p-0 m-0 divide-y divide-white/10 mb-6">
              {OFFER_STACK.map((row) => (
                <li key={row.item} className="py-3.5 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-ui text-[15px] font-bold text-white">{row.item}</div>
                    <div className="font-body text-sm text-white/55">{row.detail}</div>
                  </div>
                  <span className="font-ui text-sm font-bold text-white/50 line-through shrink-0 mt-0.5">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 pt-5 border-t-2 border-[#F59E0B]/60 mb-7">
              <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-white">
                Total Value: <span className="line-through text-white/60">$2,979</span>
              </span>
              <span className="font-display text-4xl text-[#F59E0B] leading-none">
                $97<span className="text-xl text-white/70">/mo</span>
              </span>
            </div>
            <JoinCta label="Join The Academy Now" />
          </div>

          <p className="font-body text-sm text-white/45 text-center mt-6 max-w-[560px] mx-auto">
            This is a structured, sequential training system, not a random video
            library. Every piece above supports the same 50-step roadmap.
          </p>
        </div>
      </section>

      {/* ── Meet your trainer ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1">
            <Image
              src="/images/jas-headshot.jpg"
              alt="Jas Leverette, founder of Cali K9 and star of Netflix's Canine Intervention"
              width={600}
              height={700}
              className="w-full h-auto rounded-xl object-cover"
            />
            <div>
              <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
                Meet Your Trainer
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

          <div className="flex items-center justify-center gap-x-10 gap-y-5 flex-wrap mt-12 pt-8 border-t border-black/[0.06]">
            {MEDIA_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={64}
                className="h-9 w-auto opacity-60"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Choose Your Path
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink">
              ACADEMY, PLATINUM OR VIP?
            </h2>
            <p className="font-body text-base text-gray-muted mt-4 max-w-[640px] mx-auto">
              Every tier gets the exact same Cali K9 system: the 50-step
              roadmap, the 5-Pillar System, the full video curriculum. The
              difference isn&rsquo;t the training method. It&rsquo;s access,
              accountability and personalization.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl overflow-hidden border-separate border-spacing-0 min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted p-4 border-b border-border w-[34%]" />
                  <th className="text-center p-4 border-b border-border bg-blue-500/[0.06]">
                    <div className="font-display text-xl text-ink leading-none">Academy</div>
                    <div className="font-ui text-sm font-bold text-blue-500 mt-1">$97/mo</div>
                    <div className="font-ui text-[10px] font-bold tracking-[1.5px] uppercase text-green-600 mt-1">Start Here</div>
                  </th>
                  <th className="text-center p-4 border-b border-border">
                    <div className="font-display text-xl text-ink leading-none">Platinum</div>
                    <div className="font-ui text-sm font-bold text-blue-500 mt-1">$997</div>
                  </th>
                  <th className="text-center p-4 border-b border-border">
                    <div className="font-display text-xl text-ink leading-none">VIP</div>
                    <div className="font-ui text-sm font-bold text-blue-500 mt-1">$2,497</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TIER_ROWS.map((row, i) => (
                  <tr key={row.label}>
                    <td className={`font-ui text-[13px] font-bold text-ink p-3.5 ${i < TIER_ROWS.length - 1 ? "border-b border-border" : ""}`}>
                      {row.label}
                    </td>
                    <td className={`font-body text-[15px] text-ink text-center p-3.5 bg-blue-500/[0.06] ${i < TIER_ROWS.length - 1 ? "border-b border-border" : ""}`}>
                      {row.academy}
                    </td>
                    <td className={`font-body text-[15px] text-gray-muted text-center p-3.5 ${i < TIER_ROWS.length - 1 ? "border-b border-border" : ""}`}>
                      {row.platinum}
                    </td>
                    <td className={`font-body text-[15px] text-gray-muted text-center p-3.5 ${i < TIER_ROWS.length - 1 ? "border-b border-border" : ""}`}>
                      {row.vip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 mb-8">
            <div className="bg-white border-2 border-blue-500 rounded-xl p-6">
              <div className="font-ui text-xs font-bold tracking-[1.5px] uppercase text-blue-500 mb-2">Academy · Do It Yourself</div>
              <p className="font-body text-sm text-gray-muted leading-[1.7]">
                &ldquo;Give me the system and show me exactly what to do.&rdquo;
                The 50-step roadmap, full curriculum, community and group
                coaching. Everything you need to train your own dog.
              </p>
            </div>
            <div className="bg-white border border-black/[0.06] rounded-xl p-6">
              <div className="font-ui text-xs font-bold tracking-[1.5px] uppercase text-blue-500 mb-2">Platinum · Do It With Us</div>
              <p className="font-body text-sm text-gray-muted leading-[1.7]">
                Everything in Academy, plus a Kickstart Call, a personalized
                plan, and 4 private trainer check-ins so you implement it
                correctly.
              </p>
            </div>
            <div className="bg-white border border-black/[0.06] rounded-xl p-6">
              <div className="font-ui text-xs font-bold tracking-[1.5px] uppercase text-blue-500 mb-2">VIP · Our Highest Support</div>
              <p className="font-body text-sm text-gray-muted leading-[1.7]">
                Everything in Platinum, plus 8 trainer check-ins, priority
                support, a customized progression, and one private call directly
                with Jas.
              </p>
            </div>
          </div>

          <p className="font-body text-base text-gray-muted text-center mb-6">
            Most owners start here. Join the Academy today.
          </p>
          <JoinCta light />
        </div>
      </section>

      {/* ── What happens when you join ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[1000px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Zero Guesswork
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink">
              WHAT HAPPENS THE MOMENT YOU JOIN
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
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

      {/* ── FAQ ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Questions
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-[0.95] text-ink">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

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

      {/* ── Final CTA ── */}
      <section
        className="py-16 max-md:py-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[680px] mx-auto px-6">
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-[#6A9FFF] block mb-3">
            Ready When You Are
          </span>
          <h2 className="font-display text-[clamp(34px,4.5vw,52px)] leading-[0.93] text-white mb-5">
            START YOUR DOG&rsquo;S 50-STEP TRANSFORMATION
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-8 max-w-[560px] mx-auto">
            Stop guessing what to train next. Join the Academy for $97/month and
            follow the exact system Jas Leverette uses with celebrity clients,
            from Step 1 through Step 50, starting today.
          </p>
          <JoinCta label="Join The Cali K9 Academy for $97/Month" />

          <div className="flex items-center justify-center gap-6 flex-wrap mt-10">
            {["Full 50-step roadmap", "Structured, not random videos", "Community & coaching", "Taught by a Netflix-featured trainer"].map((chip) => (
              <span key={chip} className="font-ui text-xs font-bold tracking-[1px] uppercase text-white/60">
                &#10003; {chip}
              </span>
            ))}
          </div>

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
