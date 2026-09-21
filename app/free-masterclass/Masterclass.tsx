import type React from "react";
import Image from "next/image";
import Link from "next/link";
import FormEmbed from "@/components/FormEmbed";
import EventDate from "./EventDate";
import Faq from "./Faq";
import StickyCta from "./StickyCta";
import { posterFor } from "@/lib/video-poster";

// Page order (post-audit, 2026-09-21):
// Hero + form → Before/after videos → Problem identification → Why current
// training fails → What you'll learn → 50-Step Roadmap bonus → Testimonials →
// Jas / authority → Saturday details → Rescue mission → FAQ → Final CTA.

const CDN = "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media";

const BENEFITS = [
  "Discover why your dog isn't listening",
  "Learn the Cali K9 training framework",
  "Build focus around real-world distractions",
  "Understand the roadmap to reliable obedience",
  "Learn how to start making progress in only 15 minutes per day",
];

// Three short before → after clips, directly under the hero.
// Slots 1–2 are the real before/after clips already on the CDN (used on
// /elite and /vip). Slot 3 is the clip Zach supplied on 2026-09-21.
const BEFORE_AFTER = [
  {
    before: "Reactive",
    after: "Calm",
    name: "Max the Boxer",
    src: `${CDN}/6a9703d4d47ab15319050db5.mp4`,
  },
  {
    before: "Pulling",
    after: "Loose Leash",
    name: "VIP Transformation",
    src: `${CDN}/6a97042bef6af944f0f9a708.mp4`,
  },
  {
    before: "Aggressive",
    after: "Calm & Under Control",
    name: "Aggression Transformation",
    src: `${CDN}/6ab1b3dc966c1acf6d4aa920.mp4`,
  },
];

// The six strongest, most recognizable problems (cut from eleven).
const PAINS = [
  "Pulling on the leash",
  "Jumping on people",
  "Barking",
  "Reactivity toward dogs or people",
  "Ignoring commands",
  "Falls apart around distractions",
];

// Why random tips, isolated commands and inconsistent training don't work.
const FAILURES = [
  {
    title: "Random Tips",
    body: "A trick from one video, a fix from another. None of it connects, so your dog never learns how the pieces fit together.",
  },
  {
    title: "Isolated Commands",
    body: "“Sit” in the kitchen means nothing on a busy sidewalk. Commands taught without engagement and structure don't survive real life.",
  },
  {
    title: "Inconsistent Training",
    body: "Different rules on different days teach your dog that the rules are optional. Reliability comes from a clear, repeatable system.",
  },
];

// Scannable: why behavior happens → communication → engagement → obedience → real-world reliability.
const LEARN_ITEMS = [
  {
    title: "Why Your Dog Actually Behaves This Way",
    body: "What's really driving the pulling, jumping, barking and reactivity, and why it isn't stubbornness.",
  },
  {
    title: "How To Communicate So Your Dog Understands",
    body: "The shared language Cali K9 builds before ever asking for a behavior.",
  },
  {
    title: "How To Get Your Dog Focused On You",
    body: "Why motivation changes everything, and how to make your dog want to work with you.",
  },
  {
    title: "How Obedience Is Actually Built",
    body: "The order skills have to be taught in so each one supports the next.",
  },
  {
    title: "How To Make It Hold Up In The Real World",
    body: "Progressing from the living room to other dogs, people and distractions without the training falling apart.",
  },
];

// The eight modules of the 50-Step Roadmap (the actual product structure).
const MODULES = [
  { num: 1, title: "Household Foundation", steps: "Steps 1–4" },
  { num: 2, title: "Engagement & Training Structure", steps: "Steps 5–9" },
  { num: 3, title: "Markers, Luring & The Training Box", steps: "Steps 10–17" },
  { num: 4, title: "Core Positions", steps: "Steps 18–25" },
  { num: 5, title: "Heeling & Movement", steps: "Steps 26–31" },
  { num: 6, title: "Distance, Duration & Distraction", steps: "Steps 32–38" },
  { num: 7, title: "Real-World Reliability", steps: "Steps 39–44" },
  { num: 8, title: "Off-Leash Mastery", steps: "Steps 45–50" },
];

// Owner testimonial videos, hosted on the GHL media CDN.
const TESTIMONIAL_VIDEOS = [
  { name: "Manuel & Riyo", src: `${CDN}/6a96e0b528f06327141e25a1.mp4` },
  { name: "Michelle & Yolo", src: `${CDN}/6a96e0d728f06327141e28b7.mp4` },
];

// Before → after written testimonials (strongest four from the Academy page).
const RESULTS = [
  {
    before: "Lunging at every dog on the street",
    quote: "“Before Cali K9, Zeus was lunging at every dog on the street. Now he walks by my side like a completely different dog.”",
    name: "Marcus T.",
    meta: "Zeus · German Shepherd",
  },
  {
    before: "Reactive, and three trainers couldn't fix it",
    quote: "“I tried three trainers before Jas. The online course alone solved problems others couldn't fix in person. The system just makes sense.”",
    name: "Priya K.",
    meta: "Mochi · Shiba Inu",
  },
  {
    before: "A fearful rescue we almost returned",
    quote: "“We were considering rehoming our rescue. She came back calm, focused, and loving. I'm emotional typing this.”",
    name: "Jennifer L.",
    meta: "Luna · Pit Bull Rescue",
  },
  {
    before: "No recall, afraid to go off-leash",
    quote: "“Nothing comes close to the depth of Jas's system. My dog is off-leash reliable at 8 months old.”",
    name: "Amanda K.",
    meta: "Miami, FL",
  },
];

const REVIEW_SCREENSHOTS = [
  { src: "/images/funnel/review-antonio-choice.png", width: 1246, height: 576, alt: "Five-star Google review from Antonio Choice: walks calmly without pulling or reacting after a year with Cali K9" },
  { src: "/images/funnel/review-robert-walker.png", width: 1234, height: 532, alt: "Five-star Google review from Robert Walker: the most educational session, signing up again as a returning client" },
];

const JAS_STATS = [
  { big: "Netflix", small: "Host of Canine Intervention" },
  { big: "15+ Yrs", small: "Professional Experience" },
  { big: "10,000+", small: "Dogs Trained" },
  { big: "Since 2012", small: "Voted Best Dog Trainer" },
];

const PRESS_LOGOS = [
  { src: "/images/media-logos/lg/netflix.webp", alt: "Netflix", w: 1191, h: 320 },
  { src: "/images/media-logos/lg/access-hollywood.webp", alt: "Access Hollywood", w: 1398, h: 320 },
  { src: "/images/media-logos/lg/ellen-show.webp", alt: "The Ellen Show", w: 840, h: 320 },
  { src: "/images/media-logos/lg/dr-phil.webp", alt: "Dr. Phil", w: 1225, h: 320 },
];

// Circle crops of Jas with each client, hosted on the GHL media CDN (1200×1200, transparent outside the circle).
const RECOGNIZABLE_NAMES = [
  { name: "Demi Moore", image: `${CDN}/6aa4587785678ef96c59f5f5.png` },
  { name: "Steph Curry", image: `${CDN}/6aa45888cbbb253811900262.png` },
  { name: "Kevin Hart", image: `${CDN}/6aa45898f4e2fd8aa0feb41a.png` },
  { name: "Kendrick Lamar", image: `${CDN}/6aa458abcbbb2538119005d2.png` },
];

const SATURDAY = [
  {
    title: "What To Bring",
    items: ["A phone, tablet or laptop", "Something to take notes with", "Your questions about your dog (your dog can stay on the couch)"],
  },
  {
    title: "What You'll Leave Knowing",
    items: ["Why your dog does what it does", "The order training has to happen in", "Exactly what to work on first this week"],
  },
];

function RegisterCta({ label = "Reserve My Free Seat →", light = false }: { label?: string; light?: boolean }) {
  return (
    <a href="#register" className={`btn btn-lg text-center max-md:w-full ${light ? "btn-white" : "btn-blue"}`}>
      {label}
    </a>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-9">
      {eyebrow && (
        <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-[0.95] text-ink max-w-[760px] mx-auto">
        {title}
      </h2>
      {sub && (
        <p className="font-body text-base text-gray-muted max-w-[560px] mx-auto mt-4">{sub}</p>
      )}
    </div>
  );
}

// Premium mockup of the actual roadmap: a stacked-document card listing the
// eight modules with their step ranges, replacing the old 1–50 number grid.
function RoadmapMockup() {
  return (
    <div className="relative max-w-[420px] mx-auto w-full">
      <div className="absolute inset-x-6 -bottom-3 h-full rounded-[18px] bg-white/[0.06] border border-white/10" aria-hidden="true" />
      <div className="absolute inset-x-3 -bottom-1.5 h-full rounded-[18px] bg-white/[0.09] border border-white/10" aria-hidden="true" />
      <div className="relative bg-ink rounded-[18px] border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="px-6 pt-6 pb-5 border-b border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="font-ui text-[10px] font-bold tracking-[2.5px] uppercase text-amber-400">
                Cali K9&reg; &middot; Official Training Plan
              </div>
              <div className="font-display text-[22px] text-white leading-none mt-2">
                THE 50-STEP ROADMAP&trade;
              </div>
            </div>
            <div className="shrink-0 w-12 h-12 rounded-full border-2 border-amber-400/80 flex flex-col items-center justify-center text-center leading-none">
              <span className="font-display text-[16px] text-white">50</span>
              <span className="font-ui text-[7px] font-bold tracking-[1px] uppercase text-amber-400">Steps</span>
            </div>
          </div>
        </div>
        <ol className="px-6 py-4">
          {MODULES.map((m) => (
            <li key={m.num} className="flex items-center gap-3.5 py-2.5 border-b border-white/[0.07] last:border-b-0">
              <span className="w-7 h-7 rounded-md bg-blue-500 text-white font-display text-[14px] flex items-center justify-center shrink-0">
                {m.num}
              </span>
              <span className="flex-1 font-body text-[13.5px] font-semibold text-white/90 leading-tight">
                {m.title}
              </span>
              <span className="font-ui text-[10px] font-bold tracking-[1px] uppercase text-blue-200 shrink-0">
                {m.steps}
              </span>
            </li>
          ))}
        </ol>
        <div className="px-6 pb-5">
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 via-blue-200 to-amber-400" />
          </div>
          <div className="flex justify-between font-ui text-[9px] font-semibold tracking-[0.5px] uppercase text-white/45 mt-2">
            <span>Foundation</span>
            <span>Obedience</span>
            <span>Off-Leash</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Masterclass({ intro }: { intro?: React.ReactNode }) {
  return (
    <main>
      {intro}
      {/* ── 1. Hero + registration ── */}
      <section
        className="relative overflow-hidden pt-[100px] pb-14 max-md:pt-[88px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-12 items-start max-lg:grid-cols-1">
            <div className="max-lg:text-center">
              <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[11.5px] font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Cali K9 Presents &middot;
                Free Live Training Class
              </span>
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 block mb-4">
                Free Live Dog Training Masterclass
              </span>
              <h1 className="font-display text-[clamp(38px,5vw,68px)] text-white leading-[0.95] mb-7">
                TRANSFORM YOUR DOG IN JUST 15 MINUTES A DAY
              </h1>
              <p className="font-body text-lg lg:text-xl text-white/70 leading-relaxed mb-8 max-w-[560px] max-lg:mx-auto">
                Discover the same Cali K9&reg; training system Jas Leverette has used to help
                transform thousands of dogs &mdash; from basic obedience to pulling, reactivity,
                anxiety, aggression and reliable real-world control.
              </p>

              <div className="mb-8">
                <span className="inline-flex items-center gap-2 font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live With
                  Jas Leverette
                </span>
                <div className="font-display text-2xl lg:text-3xl text-white mt-2">JAS LEVERETTE</div>
                <div className="font-body text-[13.5px] lg:text-[15px] text-white/60 mt-1">
                  Founder of Cali K9&reg; &middot; Host &amp; Executive Producer of Netflix&rsquo;s{" "}
                  <em>Canine Intervention</em>
                </div>
              </div>

              <ul className="flex flex-col gap-3 lg:gap-4 mb-8 max-lg:max-w-[440px] max-lg:mx-auto text-left">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 font-body text-[15px] lg:text-[16.5px] text-white/85">
                    <span className="text-amber-400 font-bold shrink-0">&#10003;</span> {benefit}
                  </li>
                ))}
              </ul>

              <EventDate />
            </div>

            <div>
              <div className="relative rounded-xl overflow-hidden mb-6">
                <Image
                  src={`${CDN}/6aa475c9cbbb25381192ef2d.webp`}
                  alt="Jas Leverette training a dog"
                  width={1535}
                  height={1024}
                  className="w-full h-auto object-cover"
                  priority
                />
                <span className="absolute bottom-3 left-3 bg-black/80 text-white font-ui text-[11px] font-bold tracking-[1px] uppercase px-3 py-1.5 rounded-md">
                  &#9654; As Seen On Netflix
                </span>
              </div>

              <div id="register" className="scroll-mt-24">
                <FormEmbed
                  formId="hZHHQAAWiOEP0ADyInGy"
                  formName="Webinar Registration"
                  title="Reserve Your Free Seat"
                  height={447}
                />
                <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 text-center mt-3">
                  100% Free &middot; No Credit Card Required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── As seen on ── */}
      <section className="bg-white py-8 border-b border-border">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4 text-center">
          <div className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-gray-muted mb-6">
            As Seen On
          </div>
          <div className="flex items-center justify-between max-md:justify-center max-md:gap-x-8 gap-y-5 flex-wrap">
            {PRESS_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                sizes="(max-width: 768px) 130px, 170px"
                className="h-auto w-auto max-h-11 max-w-[170px] max-md:max-h-8 max-md:max-w-[130px] object-contain opacity-70"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Before / after transformation proof ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead
            eyebrow="Real Transformations"
            title="SEE WHAT'S POSSIBLE WITH THE RIGHT SYSTEM"
            sub="Same dogs. Same owners. The only thing that changed was the system."
          />
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {BEFORE_AFTER.map((clip) => (
              <div key={clip.src} className="bg-white border border-border rounded-xl p-3 shadow-sm">
                <video
                  poster={posterFor(clip.src)}
                  className="w-full aspect-[4/3] object-cover rounded-lg bg-black"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={clip.src} type="video/mp4" />
                </video>
                <div className="flex items-center justify-center gap-2 mt-3 font-ui text-[12px] font-bold tracking-[1px] uppercase">
                  <span className="text-red-500">{clip.before}</span>
                  <span className="text-gray-muted" aria-hidden="true">&rarr;</span>
                  <span className="text-blue-500">{clip.after}</span>
                </div>
                <div className="font-body text-[13px] text-gray-muted text-center mt-1">{clip.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-9">
            <RegisterCta />
          </div>
        </div>
      </section>

      {/* ── 3. Problem identification ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead eyebrow="Sound Familiar?" title="DOES THIS SOUND LIKE YOUR DOG?" />
          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-[480px]:grid-cols-1">
            {PAINS.map((pain) => (
              <div
                key={pain}
                className="flex items-center gap-2.5 bg-white border border-border rounded-lg px-4 py-4 font-body text-[15px] font-semibold text-ink/85"
              >
                <span className="text-red-500 shrink-0" aria-hidden="true">
                  &#9888;
                </span>
                {pain}
              </div>
            ))}
          </div>
          <p className="font-body text-base text-gray-muted text-center max-w-[560px] mx-auto mt-8">
            If you nodded at even one of these, Saturday&rsquo;s masterclass was built for you and
            your dog.
          </p>
        </div>
      </section>

      {/* ── 4. Why current training fails ── */}
      <section className="py-14 max-md:py-10 bg-ink">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <h2 className="font-display text-[clamp(30px,4.5vw,46px)] text-white leading-[0.95] mb-5">
              YOUR DOG ISN&rsquo;T THE PROBLEM.
              <br />
              <span className="text-blue-200">YOUR DOG NEEDS A SYSTEM THEY CAN UNDERSTAND.</span>
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed">
              Your dog&rsquo;s behavior isn&rsquo;t random. It&rsquo;s the result of how they&rsquo;ve
              been taught so far. Here&rsquo;s why most of what owners try never turns into reliable,
              real-world behavior.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {FAILURES.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-red-400 mb-2.5">
                  &#10007; {f.title}
                </div>
                <p className="font-body text-[14.5px] text-white/75 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[15px] text-white/85 text-center max-w-[600px] mx-auto mt-9">
            A system gives your dog one clear language, one order of operations and one set of
            rules. That&rsquo;s what makes behavior stick. That&rsquo;s what Saturday is about.
          </p>
        </div>
      </section>

      {/* ── 5. What you'll learn ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead eyebrow="Free Masterclass" title="WHAT YOU'LL LEARN IN THE FREE MASTERCLASS" />
          <div className="flex flex-col gap-5">
            {LEARN_ITEMS.map((item, i) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="font-display text-2xl text-blue-500 shrink-0 w-10">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-body text-base font-bold text-ink mb-1">{item.title}</h4>
                  <p className="font-body text-[14px] text-gray-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-9">
            <RegisterCta />
          </div>
        </div>
      </section>

      {/* ── 6. Roadmap bonus ── */}
      <section
        className="py-16 max-md:py-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[1fr_0.9fr] gap-12 items-center max-md:grid-cols-1">
            <div className="max-md:text-center">
              <span className="inline-block bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">
                Free Registration Bonus
              </span>
              <h2 className="font-display text-[clamp(30px,4.5vw,46px)] text-white leading-[0.95] mb-4">
                THE CALI K9 50-STEP ROADMAP&trade;
              </h2>
              <p className="font-ui text-[15px] font-semibold tracking-[1px] uppercase text-blue-200 mb-5">
                8 Modules &rarr; 50 Simple Steps &rarr; One Fully Trained Dog
              </p>
              <p className="font-body text-[15px] text-white/70 leading-relaxed mb-6">
                Most owners don&rsquo;t fail because they aren&rsquo;t trying. They fail because
                they don&rsquo;t know what to work on next. The Roadmap lays out the entire
                progression, from household foundation to off-leash reliability, in the exact
                order Jas teaches it. Yours free the moment you register.
              </p>
              <RegisterCta label="Get The Roadmap + Reserve My Seat →" light />
              <p className="font-body text-xs text-white/50 mt-3">Sent to your inbox when you register.</p>
            </div>
            <RoadmapMockup />
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials / results ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead eyebrow="Real Results" title="REAL DOGS. REAL OWNERS. REAL TRANSFORMATIONS." />
          <div className="grid grid-cols-2 gap-5 max-w-[760px] mx-auto max-md:grid-cols-1">
            {TESTIMONIAL_VIDEOS.map((v) => (
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

          <div className="grid grid-cols-2 gap-5 max-w-[760px] mx-auto mt-6 max-md:grid-cols-1">
            {REVIEW_SCREENSHOTS.map((shot) => (
              <div
                key={shot.src}
                className="bg-white border border-border rounded-xl p-3 shadow-sm flex items-center"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 mt-6 max-md:grid-cols-1">
            {RESULTS.map((r) => (
              <div key={r.name} className="bg-cream border border-border rounded-xl p-6">
                <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-red-500 mb-3">
                  Before: {r.before}
                </div>
                <p className="font-body text-[15px] text-ink leading-relaxed mb-4">{r.quote}</p>
                <div className="font-ui text-[13px] font-bold tracking-[0.5px] uppercase text-ink">
                  {r.name}
                  <span className="font-body font-normal normal-case tracking-normal text-gray-muted"> &middot; {r.meta}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-9">
            <RegisterCta />
          </div>
        </div>
      </section>

      {/* ── 8. Jas / authority ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[0.85fr_1.15fr] gap-10 items-center max-md:grid-cols-1">
            <Image
              src="/images/funnel/jas-class.jpg"
              alt="Jas Leverette teaching a training class"
              width={480}
              height={270}
              className="w-full h-auto rounded-xl object-cover"
            />
            <div>
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-500 block mb-2">
                Your Trainer This Saturday
              </span>
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] text-ink leading-[0.95] mb-4">
                JAS LEVERETTE
              </h2>
              <p className="font-body text-[15px] text-[#4b4f58] leading-relaxed mb-3">
                Jas is the founder of Cali K9 and the host and executive producer of Netflix&rsquo;s{" "}
                <em>Canine Intervention</em>, where millions watched him take on the dogs other
                trainers had given up on.
              </p>
              <p className="font-body text-[15px] text-[#4b4f58] leading-relaxed mb-5">
                The same system has transformed family pets, serious behavioral cases and the dogs
                of some of the world&rsquo;s most recognizable athletes and entertainers. On
                Saturday he teaches it to you directly.
              </p>
              <div className="grid grid-cols-4 gap-3 max-[560px]:grid-cols-2 mb-6">
                {JAS_STATS.map((s) => (
                  <div key={s.big} className="bg-white border border-border rounded-lg px-3 py-3 text-center">
                    <div className="font-display text-[20px] text-blue-500 leading-none">{s.big}</div>
                    <div className="font-ui text-[10px] font-semibold tracking-[0.5px] uppercase text-gray-muted mt-1.5 leading-tight">
                      {s.small}
                    </div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink">
                &ldquo;If you treat a dog like a human, it will treat you like a dog.&rdquo;
                <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
                  &mdash; Jas Leverette
                </span>
              </blockquote>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-black/[0.08]">
            <div className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-gray-muted text-center mb-6">
              Trusted To Train Dogs For Some Of The World&rsquo;s Most Recognizable Names
            </div>
            <div className="flex items-center justify-center gap-8 max-md:gap-5 flex-wrap">
              {RECOGNIZABLE_NAMES.map((celeb) => (
                <div key={celeb.name} className="text-center w-[120px] max-md:w-[96px]">
                  <Image
                    src={celeb.image}
                    alt={`Jas Leverette with ${celeb.name}`}
                    width={240}
                    height={240}
                    className="w-full h-auto rounded-full"
                  />
                  <span className="block font-ui text-[11px] font-bold tracking-[1px] uppercase text-ink mt-2.5">
                    {celeb.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Saturday details ── */}
      <section className="py-14 max-md:py-10 bg-ink">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-200 block mb-3">
              Live Saturday Masterclass
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-[0.95] text-white max-w-[760px] mx-auto mb-6">
              ONE SATURDAY MORNING. A COMPLETELY DIFFERENT WEEK WITH YOUR DOG.
            </h2>
            <EventDate center />
          </div>
          <div className="grid grid-cols-2 gap-5 max-w-[800px] mx-auto max-md:grid-cols-1">
            {SATURDAY.map((col) => (
              <div key={col.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-blue-200 mb-4">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-body text-[14.5px] text-white/85">
                      <span className="text-amber-400 font-bold shrink-0">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-body text-[14px] text-white/60 text-center max-w-[560px] mx-auto mt-8 mb-8">
            Live on Zoom, from anywhere. Register and we&rsquo;ll send the link, a reminder, and the
            Roadmap straight to your inbox.
          </p>
          <div className="text-center">
            <RegisterCta light />
          </div>
        </div>
      </section>

      {/* ── 10. Street dog mission (compressed) ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-10 items-center max-md:grid-cols-1">
            <Image
              src={`${CDN}/6aa43e77cbbb2538118d3b55.webp`}
              alt="A street dog resting on a curb in Morocco"
              width={1172}
              height={774}
              className="w-full h-auto rounded-xl object-cover"
            />
            <div className="max-md:text-center">
              <span className="inline-block bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-4">
                &#10022; The Cali K9 Mission
              </span>
              <h2 className="font-display text-[clamp(28px,3.5vw,42px)] leading-[0.95] text-ink mb-4">
                TRAIN YOUR DOG. HELP SAVE ANOTHER.
              </h2>
              <p className="font-body text-[15px] text-[#4b4f58] leading-relaxed mb-3">
                A portion of every Cali K9 program funds the rescue, veterinary care, rehabilitation
                and rehoming of street dogs, beginning in Morocco.
              </p>
              <p className="font-body text-[15px] text-[#4b4f58] leading-relaxed">
                Every dog we train helps another dog get a second chance. Follow the journey on{" "}
                <a href="https://www.youtube.com/channel/UCGtJ7tl98bL-dl7lyanHmMg" target="_blank" rel="noopener" className="text-blue-500 font-semibold hover:underline">
                  YouTube
                </a>{" "}
                and{" "}
                <a href="https://www.instagram.com/calik9/" target="_blank" rel="noopener" className="text-blue-500 font-semibold hover:underline">
                  Instagram
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[680px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead title="FREQUENTLY ASKED QUESTIONS" />
          <Faq />
        </div>
      </section>

      {/* ── 12. Final CTA ── */}
      <section
        className="py-16 max-md:py-10 text-center max-md:pb-24"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[680px] mx-auto px-6">
          <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 block mb-4">
            Your Seat Is Waiting
          </span>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] text-white leading-[0.95] mb-5">
            TRANSFORM YOUR DOG IN JUST 15 MINUTES A DAY
          </h2>
          <p className="font-body text-base lg:text-lg text-white/70 leading-relaxed mb-7 max-w-[560px] mx-auto">
            Join Jas live this Saturday and leave knowing exactly why your dog does what it does,
            and what to work on first.
          </p>
          <div className="mb-8">
            <EventDate center />
          </div>
          <RegisterCta light />
          <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
            Free &middot; Live Online &middot; No Credit Card Required
          </p>

          <p className="font-ui text-xs text-white/35 mt-10">
            &copy; 2026 Cali K9&reg; &middot;{" "}
            <Link href="/privacy-policy" className="hover:text-white/60">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:text-white/60">
              Terms
            </Link>
          </p>
        </div>
      </section>

      <StickyCta />
    </main>
  );
}
