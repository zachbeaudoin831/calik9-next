import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FormEmbed from "@/components/FormEmbed";
import EventDate from "./EventDate";
import Faq from "./Faq";
import StickyCta from "./StickyCta";

export const metadata: Metadata = {
  title: "Free Live Dog Training Masterclass",
  description:
    "Transform your dog in just 15 minutes a day. Join Jas Leverette of Netflix's Canine Intervention live for a free online masterclass on the Cali K9® training system.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

const BENEFITS = [
  "Discover why your dog isn't listening",
  "Learn the Cali K9 training framework",
  "Build focus around real-world distractions",
  "Understand the roadmap to reliable obedience",
  "Learn how to start making progress in only 15 minutes per day",
];

const PAINS = [
  "Pulling on walks",
  "Jumping on people",
  "Ignoring commands",
  "Barking / reactivity",
  "Aggression",
  "Anxiety",
  "Poor focus",
  "Only listens when food is visible",
  "Bad recall",
  "Losing control around distractions",
  "Previous training that didn't last",
];

const LEARN_ITEMS = [
  {
    title: "Why Your Dog Actually Behaves This Way",
    body: "Understand what's driving pulling, jumping, barking, reactivity, anxiety, aggression and lack of focus.",
  },
  {
    title: "The Cali K9 Training System",
    body: "Learn the framework Cali K9 uses to create communication, engagement, structure and obedience.",
  },
  {
    title: "How To Get Your Dog Focused On You",
    body: "Learn how motivation changes training and why your dog should want to work with you.",
  },
  {
    title: "How To Build Real-World Obedience",
    body: "Training shouldn't disappear when another dog, person or distraction enters the environment. Learn how to progress obedience into real life.",
  },
  {
    title: "The Roadmap To Your Dream Dog",
    body: "Stop randomly trying exercises. Understand what to teach first, what comes next and how the skills build on one another.",
  },
];

const OBJECTIVES = [
  {
    num: "01 — Clear Communication",
    body: "Your dog needs to clearly understand what you're asking.",
  },
  {
    num: "02 — Leadership & Structure",
    body: "Create boundaries, accountability, consistency and confidence.",
  },
  {
    num: "03 — Expression & Motivation",
    body: "Cali K9 doesn't aim to create robotic dogs. The goal is a dog that enjoys working, understands the rules and wants to engage with you.",
  },
];

const PRESS_LOGOS = [
  { src: "/images/media-logos/netflix.webp", alt: "Netflix" },
  { src: "/images/media-logos/access-hollywood.webp", alt: "Access Hollywood" },
  { src: "/images/media-logos/ellen-show.webp", alt: "The Ellen Show" },
  { src: "/images/media-logos/dr-phil.webp", alt: "Dr. Phil" },
];

const RECOGNIZABLE_NAMES = [
  { name: "Demi Moore", image: "/images/funnel/demi-circle.png" },
  { name: "Steph Curry", image: "/images/funnel/steph-circle.png" },
  { name: "Kevin Hart", image: "/images/funnel/kevin-circle.png" },
  { name: "Kendrick Lamar", image: "/images/funnel/kendrick-circle.png" },
];

const REVIEW_SCREENSHOTS = [
  { src: "/images/funnel/review-1.png", width: 1376, height: 1688, alt: "Five-star client review of Cali K9" },
  { src: "/images/funnel/review-2.png", width: 1376, height: 596, alt: "Five-star client review of Cali K9" },
];

// Owner testimonial videos, hosted on the GHL media CDN.
const TESTIMONIAL_VIDEOS = [
  {
    name: "Manuel & Riyo",
    src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96e0b528f06327141e25a1.mp4",
  },
  {
    name: "Michelle & Yolo",
    src: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a96e0d728f06327141e28b7.mp4",
  },
];

const HOW_STEPS = [
  { n: "1", title: "Reserve Your Free Seat", body: "Enter your information above." },
  { n: "2", title: "Get Your 50-Step Roadmap", body: "We'll send your registration details and bonus." },
  { n: "3", title: "Join Jas Live", body: "Attend the free online masterclass." },
  { n: "4", title: "Start Training With A Plan", body: "Leave understanding what to work on next with your dog." },
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

export default function FreeMasterclassPage() {
  return (
    <main>
      {/* ── Hero + registration ── */}
      <section
        className="relative overflow-hidden pt-[100px] pb-14 max-md:pt-[88px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-12 items-start max-lg:grid-cols-1">
            <div className="max-lg:text-center">
              <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[11.5px] font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Cali K9 Presents &middot;
                Free Live Training Class
              </span>
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 block mb-3">
                Free Live Dog Training Masterclass
              </span>
              <h1 className="font-display text-[clamp(38px,5vw,62px)] text-white leading-[0.95] mb-5">
                TRANSFORM YOUR DOG IN JUST 15 MINUTES A DAY
              </h1>
              <p className="font-body text-lg text-white/70 leading-relaxed mb-6 max-w-[520px] max-lg:mx-auto">
                Discover the same Cali K9&reg; training system Jas Leverette has used to help
                transform thousands of dogs &mdash; from basic obedience to pulling, reactivity,
                anxiety, aggression and reliable real-world control.
              </p>

              <div className="mb-6">
                <span className="inline-flex items-center gap-2 font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live With
                  Jas Leverette
                </span>
                <div className="font-display text-2xl text-white mt-1.5">JAS LEVERETTE</div>
                <div className="font-body text-[13.5px] text-white/60">
                  Founder of Cali K9&reg; &middot; Host &amp; Executive Producer of Netflix&rsquo;s{" "}
                  <em>Canine Intervention</em>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-7 max-lg:max-w-[440px] max-lg:mx-auto text-left">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 font-body text-[15px] text-white/85">
                    <span className="text-amber-400 font-bold shrink-0">&#10003;</span> {benefit}
                  </li>
                ))}
              </ul>

              <EventDate />
            </div>

            <div>
              <div className="relative rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/funnel/masterclass-jas-training.jpg"
                  alt="Jas Leverette training a dog"
                  width={560}
                  height={295}
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
        <div className="max-w-[860px] mx-auto px-6 text-center">
          <div className="font-ui text-[12px] font-semibold tracking-[2px] uppercase text-gray-muted mb-4">
            As Seen On
          </div>
          <div className="flex items-center justify-center gap-x-8 gap-y-4 flex-wrap">
            {PRESS_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={40}
                className="h-8 w-auto opacity-70"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Video proof ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead
            eyebrow="See What's Possible"
            title="THIS ISN'T ABOUT TEACHING A FEW TRICKS"
            sub="It's about changing the communication, structure and relationship between you and your dog."
          />
          <video
            className="w-full rounded-xl block bg-black shadow-lg"
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
          <div className="text-center mt-8">
            <RegisterCta />
          </div>
        </div>
      </section>

      {/* ── Pain identification ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead eyebrow="Sound Familiar?" title="DOES THIS SOUND LIKE YOUR DOG?" />
          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-[480px]:grid-cols-1">
            {PAINS.map((pain) => (
              <div
                key={pain}
                className="flex items-center gap-2.5 bg-white border border-border rounded-lg px-4 py-3.5 font-body text-[14px] font-medium text-ink/80"
              >
                <span className="text-red-500 shrink-0" aria-hidden="true">
                  &#9888;
                </span>
                {pain}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <h3 className="font-display text-[clamp(24px,3.5vw,34px)] text-ink leading-tight mb-6">
              YOU DON&rsquo;T NEED A BETTER DOG.
              <br />
              YOU NEED A <span className="text-blue-500">BETTER SYSTEM.</span>
            </h3>
            <RegisterCta label="Show Me The System →" />
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-14 max-md:py-10 bg-ink text-center">
        <div className="max-w-[680px] mx-auto px-6">
          <h2 className="font-display text-[clamp(30px,4.5vw,46px)] text-white leading-[0.95] mb-5">
            THERE ARE NO BAD DOGS.
            <br />
            <span className="text-blue-200">JUST UNINFORMED OWNERS.</span>
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed">
            Your dog&rsquo;s behavior isn&rsquo;t random. Once you understand communication,
            motivation, structure and reinforcement, training becomes much easier to understand.
            This masterclass will show you what most owners have been missing.
          </p>
        </div>
      </section>

      {/* ── What you'll learn ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead eyebrow="Free Masterclass" title="WHAT YOU'LL DISCOVER IN THE FREE MASTERCLASS" />
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

      {/* ── 3 core objectives ── */}
      <section className="py-14 max-md:py-10 bg-ink">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] text-white text-center leading-[0.95] mb-9">
            EVERY CALI K9 TRAINING SESSION HAS 3 OBJECTIVES
          </h2>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {OBJECTIVES.map((obj) => (
              <div key={obj.num} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="font-ui text-[13px] font-bold tracking-[1px] uppercase text-blue-200 mb-2.5">
                  {obj.num}
                </div>
                <p className="font-body text-[14px] text-white/75 leading-relaxed">{obj.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap bonus ── */}
      <section
        className="py-14 max-md:py-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-10 items-center max-md:grid-cols-1">
            <div className="max-md:text-center">
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 block mb-3">
                Free Registration Bonus
              </span>
              <h2 className="font-display text-[clamp(28px,4vw,42px)] text-white leading-[0.95] mb-4">
                GET THE CALI K9 50-STEP DOG TRANSFORMATION ROADMAP
              </h2>
              <p className="font-body text-[15px] text-white/70 leading-relaxed mb-3">
                Most owners don&rsquo;t fail because they aren&rsquo;t trying. They fail because
                they don&rsquo;t know what to work on next.
              </p>
              <p className="font-body text-[15px] text-white/70 leading-relaxed mb-6">
                The Cali K9 50-Step Roadmap gives you a clear progression from building engagement
                and reward value through obedience, distractions and advanced control.
              </p>
              <RegisterCta label="Get The Roadmap + Reserve My Seat →" light />
              <p className="font-body text-xs text-white/50 mt-3">Included free when you register.</p>
            </div>
            <div className="bg-ink rounded-[18px] p-6 max-w-[380px] mx-auto w-full">
              <div className="text-center font-ui text-[11px] font-bold tracking-[2px] uppercase text-blue-200 mb-4">
                The 50-Step Roadmap
              </div>
              <div className="grid grid-cols-10 gap-1">
                {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => (
                  <div
                    key={n}
                    className={`aspect-square rounded-[4px] flex items-center justify-center font-ui text-[8px] font-semibold ${
                      n <= 10 ? "bg-blue-500 text-white" : "bg-white/10 text-white/40"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-ui text-[9px] font-semibold tracking-[0.5px] uppercase text-white/40 mt-3">
                <span>Engagement</span>
                <span>Obedience</span>
                <span>Off-Leash</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real client proof ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead eyebrow="Real Results" title="REAL DOGS. REAL OWNERS. REAL TRANSFORMATIONS." />
          <div className="grid grid-cols-2 gap-5 max-w-[760px] mx-auto max-md:grid-cols-1">
            {TESTIMONIAL_VIDEOS.map((v) => (
              <div key={v.name}>
                <video
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
        </div>
      </section>

      {/* ── Meet Jas ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-10 items-center max-md:grid-cols-1">
            <Image
              src="/images/funnel/jas-class.jpg"
              alt="Jas Leverette teaching a training class"
              width={480}
              height={270}
              className="w-full h-auto rounded-xl object-cover"
            />
            <div>
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-500 block mb-2">
                Meet Your Trainer
              </span>
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] text-ink leading-[0.95] mb-4">
                JAS LEVERETTE
              </h2>
              <p className="font-body text-[15px] text-[#4b4f58] leading-relaxed mb-3">
                Jas Leverette built Cali K9 around a simple belief: dog owners don&rsquo;t need
                more random tips. They need a system.
              </p>
              <p className="font-body text-[15px] text-[#4b4f58] leading-relaxed mb-3">
                His approach has been used with family dogs, serious behavioral cases and dogs
                belonging to some of the world&rsquo;s most recognizable athletes and entertainers.
              </p>
              <p className="font-body text-[15px] text-[#4b4f58] leading-relaxed mb-5">
                His work became the basis of Netflix&rsquo;s <em>Canine Intervention</em>, bringing
                the Cali K9 philosophy to audiences around the world. Now Jas is teaching that
                system directly to dog owners online.
              </p>
              <blockquote className="border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink">
                &ldquo;If you treat a dog like a human, it will treat you like a dog.&rdquo;
                <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
                  &mdash; Jas Leverette
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Celebrity authority ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead title="TRUSTED TO TRAIN DOGS FOR SOME OF THE WORLD'S MOST RECOGNIZABLE NAMES" />
          <div className="grid grid-cols-4 gap-6 max-[560px]:grid-cols-2">
            {RECOGNIZABLE_NAMES.map((celeb) => (
              <div key={celeb.name} className="text-center">
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  width={300}
                  height={300}
                  className="w-full max-w-[170px] mx-auto h-auto rounded-full"
                />
                <span className="block font-ui text-[13px] font-bold tracking-[1px] uppercase text-ink mt-3">
                  {celeb.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead title="HERE'S WHAT HAPPENS NEXT" />
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-[480px]:grid-cols-1">
            {HOW_STEPS.map((step) => (
              <div key={step.n} className="bg-white border border-border rounded-xl p-5 text-center">
                <div className="w-9 h-9 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mx-auto mb-3">
                  {step.n}
                </div>
                <h4 className="font-body text-[14.5px] font-bold text-ink mb-1.5">{step.title}</h4>
                <p className="font-body text-[13px] text-gray-muted leading-normal">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-9">
            <RegisterCta />
          </div>
        </div>
      </section>

      {/* ── Street dog mission ── */}
      <section className="py-14 max-md:py-10 bg-ink text-center">
        <div className="max-w-[640px] mx-auto px-6">
          <h2 className="font-display text-[clamp(28px,4vw,42px)] text-white leading-[0.95] mb-4">
            TRAIN YOUR DOG.
            <br />
            HELP SAVE ANOTHER.
          </h2>
          <p className="font-body text-[15px] text-white/70 leading-relaxed mb-3">
            Cali K9&rsquo;s mission is expanding beyond helping family dogs. We&rsquo;re working to
            help rescue, rehabilitate, train and rehome street dogs internationally, beginning in
            Morocco.
          </p>
          <p className="font-body text-[15px] text-white/70 leading-relaxed">
            A portion of every Cali K9 program supports our international street-dog mission.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[680px] mx-auto px-6 max-[480px]:px-4">
          <SectionHead title="FREQUENTLY ASKED QUESTIONS" />
          <Faq />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-14 max-md:py-10 text-center max-md:pb-24"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <h2 className="font-display text-[clamp(32px,4.5vw,48px)] text-white leading-[0.95] mb-5">
            STOP GUESSING.
            <br />
            START TRAINING WITH A SYSTEM.
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-7">
            Give Jas one masterclass and leave with a clearer understanding of your dog, your
            training and exactly what you should work on next.
          </p>
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
