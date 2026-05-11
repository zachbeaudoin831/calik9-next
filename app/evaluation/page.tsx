import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import StarsRow from "@/components/StarsRow";
import PackageHeading from "@/components/PackageHeading";
import FormEmbed from "@/components/FormEmbed";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Dog Behavior Evaluation",
  description:
    "Book a behavior evaluation with Cali K9\u00ae. Our experts pinpoint the root cause and give you a custom training roadmap. Discover your dog\u2019s path to transformation.",
  openGraph: {
    title: "Dog Behavior Evaluation | Cali K9\u00ae",
    description:
      "Book a behavior evaluation with Cali K9\u00ae. Our experts pinpoint the root cause and give you a custom training roadmap. Discover your dog\u2019s path to transformation.",
    url: "https://calik9.com/evaluation",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Behavior Evaluation | Cali K9\u00ae",
    description:
      "Book a behavior evaluation with Cali K9\u00ae. Our experts pinpoint the root cause and give you a custom training roadmap.",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

const BEHAVIOR_PILLS = [
  "Dog Aggression",
  "Anxiety",
  "Leash Pulling",
  "Disobedience",
  "Nipping",
  "Socialization",
  "Recall",
  "Potty Training",
  "Agility",
  "& More",
];

const CHECKLIST = [
  "In-Depth Behavioral Assessment",
  "Custom Training Roadmap",
  "All Breeds Welcome",
  "Results Guaranteed",
  "As Seen on Netflix\u2019s Canine Intervention",
];

const PROCESS_STEPS = [
  {
    num: 1,
    title: "WE CONFIRM YOUR SPOT",
    desc: "A Cali K9 specialist calls or texts you within 24 hours to confirm your evaluation slot and answer any initial questions. We move fast.",
  },
  {
    num: 2,
    title: "YOUR EVALUATION",
    desc: "In-person at one of our locations or via Zoom \u2014 a 30\u201345 minute deep dive into your dog\u2019s behavior. A Cali K9 expert conducts a thorough behavioral assessment.",
  },
  {
    num: 3,
    title: "GET YOUR PLAN",
    desc: "You receive a custom roadmap, program recommendation, and immediate action steps you can use the same day. Results start before training even begins.",
  },
];

const STATS = [
  { num: "3,500+", label: "Dogs Evaluated" },
  { num: "15+", label: "Years Experience" },
  { num: "4.9\u2605", label: "Average Rating" },
  { num: "11", label: "Celebrity Clients" },
  { num: "100%", label: "Commitment" },
];

const CELEB_CHIPS = [
  "Stephen Curry",
  "Kevin Hart",
  "Michael B. Jordan",
  "Marshawn Lynch",
  "Jason Derulo",
  "Coi Leray",
  "Demi Moore",
  "Draya Michele",
];

const SOCIAL_CARDS = [
  { name: "Steph Curry", image: "/images/social/social-6.png", alt: "Steph Curry with Cali K9" },
  { name: "Kevin Hart", image: "/images/social/social-4.png", alt: "Kevin Hart with Cali K9" },
  { name: "Kendrick Lamar", image: "/images/social/social-3.jpeg", alt: "Kendrick Lamar with Cali K9" },
  { name: "Dr. Phil", image: "/images/social/social-9.png", alt: "Dr. Phil with Cali K9" },
  { name: "Demi Moore", image: "/images/social/social-5.png", alt: "Demi Moore with Cali K9" },
  { name: "Jason Derulo", image: "/images/social/social-2.png", alt: "Jason Derulo with Cali K9" },
  { name: "San Jose Police", image: "/images/social/social-7.png", alt: "San Jose Police Department K9 unit" },
  { name: "Coi Leray", image: "/images/social/social-1.png", alt: "Coi Leray with Cali K9" },
  { name: "Turks & Caicos Military", image: "/images/social/social-8.png", alt: "Turks and Caicos Military" },
];

const REVIEWS = [
  {
    initials: "MT",
    name: "Marcus T.",
    detail: "Zeus \u2014 German Shepherd, Aggression",
    quote:
      "\u201CI was terrified to book because I thought they\u2019d tell me Zeus was hopeless. The evaluation was the opposite \u2014 they pinpointed the exact trigger and gave me a plan in 30 minutes that worked before training even started.\u201D",
    result: "Now walks calmly past other dogs",
  },
  {
    initials: "JL",
    name: "Jennifer L.",
    detail: "Luna \u2014 Pit Bull Rescue, Fear Aggression",
    quote:
      "\u201CWe\u2019d been turned away by two trainers before. I booked the eval expecting more rejection. Instead, they spent 45 minutes with us and gave us real hope. Luna is a different dog today.\u201D",
    result: "Completed board and train, zero incidents",
  },
  {
    initials: "PK",
    name: "Priya K.",
    detail: "Mochi \u2014 Shiba Inu, Leash Reactivity",
    quote:
      "\u201CThe evaluation alone \u2014 before paying anything \u2014 was more valuable than 3 sessions with my previous trainer. The action tips I was given immediately reduced Mochi\u2019s reactivity by half.\u201D",
    result: "Now reactive-free on walks",
  },
  {
    initials: "RD",
    name: "Robert D.",
    detail: "Titan \u2014 Rottweiler, Human Aggression",
    quote:
      "\u201CMy dog had bitten twice. I was considering putting him down. The Cali K9 evaluation changed my understanding of why he was doing it. That one conversation may have saved his life.\u201D",
    result: "No incidents in 14 months post-training",
  },
  {
    initials: "AS",
    name: "Ashley S.",
    detail: "Bella \u2014 Golden Retriever, Severe Anxiety",
    quote:
      "\u201CI did the Zoom evaluation and it was surprisingly thorough. They watched videos I sent, asked really specific questions, and gave me a framework that explained Bella\u2019s behavior perfectly.\u201D",
    result: "Anxiety managed, thriving on online course",
  },
  {
    initials: "CW",
    name: "Carlos W.",
    detail: "Rex \u2014 Belgian Malinois, High Drive Issues",
    quote:
      "\u201CI have a high-drive working dog and most trainers are overwhelmed by him. Cali K9 evaluated him, recognized his potential immediately, and recommended the perfect program.\u201D",
    result: "Competing in protection sports now",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does the evaluation include?",
    a: "The evaluation is a thorough behavioral assessment conducted by a Cali K9 expert. You\u2019ll leave with a clear picture of your dog\u2019s root behaviors, a custom training roadmap, and a program recommendation tailored to your dog\u2019s needs and your schedule.",
  },
  {
    q: "How long does the evaluation take?",
    a: "A standard evaluation is 30\u201345 minutes. For more complex behavioral issues \u2014 severe aggression, multiple behaviors, trauma \u2014 we may schedule 60 minutes to ensure we get it right. We never rush an evaluation.",
  },
  {
    q: "Can I do the evaluation online over Zoom?",
    a: "Absolutely. Our Zoom evaluations are just as thorough as in-person. You\u2019ll share video footage of your dog\u2019s behavior, and our specialist guides you through the same diagnostic process. Many clients outside LA, Bay Area, and Miami use this option.",
  },
  {
    q: "My dog is really aggressive. Is it safe?",
    a: "Yes. We\u2019ve evaluated thousands of aggressive dogs \u2014 including dogs that had bitten their owners. Our team is specifically trained in behavior modification for aggression. We\u2019ll give you safety protocols before you arrive. Aggressive dogs are our specialty.",
  },
  {
    q: "Will Jas personally do my evaluation?",
    a: "Due to demand, Jas personally handles complex cases, while his trained specialists conduct standard evaluations. Every Cali K9 evaluator is trained in Jas\u2019s exact method to the same high standard.",
  },
  {
    q: "What if I can\u2019t afford the training programs?",
    a: "We offer multiple levels \u2014 from the $27/month Skool community to the $500 online course. Payment plans are available for in-person and board and train programs. The evaluation will help us recommend the right program for your budget.",
  },
  {
    q: "What breeds and ages do you work with?",
    a: "All breeds, all ages \u2014 from 8-week-old puppies to 12-year-old seniors. From Chihuahuas to Belgian Malinois. We specialize in high-drive and working breeds but our system works across all temperaments. There is no dog we won\u2019t evaluate.",
  },
  {
    q: "How soon can I get an evaluation?",
    a: "We typically contact you within 24 hours of booking and can often schedule within 3\u20137 days. Zoom evaluations can often be scheduled within 48 hours. Fill out the form and we\u2019ll find the first available slot for you.",
  },
];

export default function EvaluationPage() {
  return (
    <main>
      {/* ── Hero with inline booking form ── */}
      <ServiceHero
        sidebar={
          <>
            <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/85 mb-2">
              Book Your Evaluation &mdash; Takes 60 Seconds
            </div>
            <div className="flex items-baseline gap-2 mb-5">
              <span className="font-display text-[40px] text-white leading-none">$27</span>
              <span className="font-ui text-xs font-semibold tracking-[1px] uppercase text-white/50">
                One-time &middot; No subscription
              </span>
            </div>
            <FormEmbed
              formId="GtiGDcoxe0fG5ufwj7Km"
              formName="Evaluation Cart"
              title="Book Your Evaluation"
              height={804}
            />

            {/* Desktop-only AMAVI photo below the cart. Mobile renders the
                same image inside the intro section to fill the hero. */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] aspect-[16/10] mt-5 max-[900px]:hidden">
              <Image
                src="/images/trained-dogs1.jpeg"
                alt="Cali K9 trained dogs sitting calmly outside a Miami restaurant"
                fill
                className="object-cover"
                style={{ objectPosition: "center 78%" }}
                sizes="50vw"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-3 py-1.5">
                <span className="font-ui text-[10px] font-bold tracking-[2px] uppercase text-white/50 block">
                  Real Cali K9 Clients
                </span>
                <span className="font-ui text-xs font-bold tracking-[1px] text-white/85">
                  Off-leash control in the real world
                </span>
              </div>
            </div>
          </>
        }
        intro={
          <>
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-base font-bold tracking-[0.08em] uppercase px-[18px] py-2 rounded-full backdrop-blur-md">
                Evaluation
              </span>
            </div>

            <h1 className="font-display text-[clamp(42px,6vw,64px)] max-md:text-[clamp(64px,18vw,96px)] text-white leading-[0.93] mb-5">
              BOOK YOUR <span className="text-white/50">EVALUATION</span>
            </h1>

            <p className="font-body text-base text-white/70 leading-relaxed mb-6">
              A direct consultation with a Cali K9 expert &mdash; to assess your
              dog&rsquo;s behavioral needs and build a custom roadmap to fix them.
            </p>

            {/* Hero video. Placed in the intro so on mobile it appears
                above the cart (between intro and sidebar stacking order). */}
            <video
              className="w-full rounded-xl block mb-6 bg-black"
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
          </>
        }
      >
        {/* Mobile-only image, below the video. Desktop renders the same
            photo below the form in the sidebar so it sits beneath the cart. */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] aspect-[16/10] mb-6 min-[901px]:hidden">
          <Image
            src="/images/trained-dogs1.jpeg"
            alt="Cali K9 trained dogs sitting calmly outside a Miami restaurant"
            fill
            className="object-cover"
            style={{ objectPosition: "center 78%" }}
            sizes="100vw"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-3 py-1.5">
            <span className="font-ui text-[10px] font-bold tracking-[2px] uppercase text-white/50 block">
              Real Cali K9 Clients
            </span>
            <span className="font-ui text-xs font-bold tracking-[1px] text-white/85">
              Off-leash control in the real world
            </span>
          </div>
        </div>

        {/* We address pills */}
        <div className="mb-6">
          <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-white/45 mb-3">
            We address:
          </div>
          <div className="flex flex-wrap gap-2">
            {BEHAVIOR_PILLS.map((pill) => (
              <span
                key={pill}
                className="font-ui text-[13px] font-semibold tracking-[1px] text-white/55 px-4 py-1.5 border border-white/[0.14] rounded-sm transition-colors hover:text-white hover:border-blue-400/50 hover:bg-blue-400/10"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="flex flex-col gap-2.5 mb-8">
          {CHECKLIST.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 font-ui text-base font-semibold tracking-[0.5px] text-white/85"
            >
              <span className="text-green-500 text-xl">&#10003;</span> {item}
            </div>
          ))}
        </div>

        {/* Mini stats */}
        <div className="flex gap-8 flex-wrap">
          <div className="text-center">
            <div className="font-display text-4xl text-white leading-none">3,500+</div>
            <div className="font-ui text-xs font-semibold tracking-[2px] uppercase text-white/50 mt-1">
              Dogs Evaluated
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl text-white leading-none">15+</div>
            <div className="font-ui text-xs font-semibold tracking-[2px] uppercase text-white/50 mt-1">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl text-white leading-none">
              4.9<span className="text-[22px] align-middle ml-0.5">&#9733;</span>
            </div>
            <div className="font-ui text-xs font-semibold tracking-[2px] uppercase text-white/50 mt-1">
              Average Rating
            </div>
          </div>
        </div>
      </ServiceHero>

      {/* ── What to Expect ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              The Process
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              WHAT TO EXPECT<br />AFTER YOU BOOK
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-[1000px] mx-auto max-[768px]:grid-cols-1 max-[768px]:gap-6 max-[768px]:max-w-[480px]">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                className="text-center px-7 py-10 bg-white rounded-xl border border-black/[0.06] relative max-[768px]:px-6 max-[768px]:py-8"
              >
                {/* Connecting arrow (desktop only) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="absolute -right-6 top-14 text-2xl text-blue-500 font-bold z-[1] max-[768px]:hidden">
                    &#8594;
                  </span>
                )}
                <div className="w-[60px] h-[60px] bg-blue-500 text-white font-display text-[28px] rounded-full flex items-center justify-center mx-auto mb-5 leading-none">
                  {step.num}
                </div>
                <h3 className="font-display text-xl text-ink mb-3 tracking-[0.5px]">
                  {step.title}
                </h3>
                <p className="font-body text-[15px] text-gray-muted leading-[1.65]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Callout box */}
          <div className="text-center mt-12 p-9 bg-cream border border-black/[0.08] rounded-xl">
            <p className="font-display text-[28px] text-ink mb-2">
              ONE EVALUATION.<br />
              <span className="text-blue-500">THE TRANSFORMATION IS PRICELESS.</span>
            </p>
            <p className="font-body text-[15px] text-gray-muted max-w-[520px] mx-auto mb-6 leading-[1.65]">
              Most dog owners spend months and thousands of dollars on trainers
              who never fix the real problem. One evaluation with Cali K9
              changes everything.
            </p>
            <Link
              href="#main-content"
              className="btn btn-blue"
            >
              Book Your Evaluation &mdash; $27
            </Link>
          </div>
        </div>
      </section>

      {/* ── Results Gallery ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Proven Results
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              REAL TRANSFORMATIONS
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-[960px] mx-auto max-[600px]:grid-cols-1">
            <Image
              src="/images/trained-dogs1.jpeg"
              alt="Trained dogs demonstrating obedience and discipline after Cali K9 program"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg block"
            />
            <Image
              src="/images/trained-dogs2.jpeg"
              alt="Dogs showcasing real-world training results from Cali K9 experts"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg block"
            />
          </div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section className="relative overflow-hidden bg-blue-700 py-20 max-md:py-12 max-[480px]:py-8">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-400 block mb-3 opacity-50">
              Why Cali K9&reg;
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-12">
              TRUSTED BY THOUSANDS<br />OF DOG OWNERS
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-5 gap-8 text-center mb-14 max-[768px]:grid-cols-3 max-[768px]:gap-5 max-[480px]:grid-cols-2 max-[480px]:gap-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl text-white leading-none max-[480px]:text-4xl">
                  {stat.num}
                </div>
                <div className="font-ui text-xs font-semibold tracking-[2px] uppercase text-white/50 mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Celebrity chips */}
          <div className="font-ui text-xs font-bold tracking-[3px] uppercase text-white/35 mb-3 mt-12 text-center">
            Trusted By
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {CELEB_CHIPS.map((name) => (
              <span
                key={name}
                className="font-ui text-[13px] font-semibold tracking-[1px] text-white/55 px-4 py-1.5 border border-white/[0.14] rounded-sm transition-colors hover:text-white hover:border-blue-400/50 hover:bg-blue-400/10"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Social proof photo grid */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-lg:grid-cols-2 max-sm:gap-2">
            {SOCIAL_CARDS.map((card) => (
              <div
                key={card.name}
                className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white/[0.04] transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] group"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-top transition-transform duration-[400ms] group-hover:scale-[1.04]"
                  sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(13,29,48,0.85) 0%, transparent 60%)",
                  }}
                >
                  <span className="font-display text-[22px] text-white tracking-[1px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {card.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Client reviews */}
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
            {REVIEWS.map((review) => (
              <div
                key={review.initials}
                className="bg-white/[0.06] border border-white/[0.12] rounded-xl p-8 card-hover flex flex-col"
              >
                <div className="flex gap-[3px] mb-3" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-sm leading-none">&#9733;</span>
                  ))}
                </div>
                <p className="font-body text-[15px] leading-relaxed mb-5 mt-0 italic text-white/70 flex-1">
                  {review.quote}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.12] flex items-center justify-center font-display text-sm text-white shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <cite className="font-ui text-sm font-bold text-white not-italic block">
                      {review.name}
                    </cite>
                    <span className="font-ui text-xs text-blue-400">
                      {review.detail}
                    </span>
                  </div>
                </div>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block">
                  &#10003; {review.result}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <p className="font-ui text-[13px] font-semibold tracking-[2px] uppercase text-white/40">
              Every success story started with an evaluation
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              FAQ
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              COMMON QUESTIONS
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>
          <div className="max-w-[800px] mx-auto space-y-3">
            {FAQ_ITEMS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-black/[0.06] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-ui text-base font-bold tracking-[0.5px] text-ink select-none list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-blue-500 text-xl ml-4 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="font-body text-[15px] text-gray-muted leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="15 Years. 3,500+ Dogs."
        heading="READY TO START?"
        description="In 15 years and 3,500+ evaluations, our team has yet to encounter a dog they couldn&rsquo;t help."
        primaryCta={{ label: "Book My Evaluation \u2014 $27 \u2192", href: "#main-content" }}
        secondaryCta={{ label: "Get in Touch \u2192", href: "/contact" }}
      />
    </main>
  );
}
