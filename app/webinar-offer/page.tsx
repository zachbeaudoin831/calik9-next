import type { Metadata } from "next";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { CELEBS } from "@/components/CelebGrid";

export const metadata: Metadata = {
  title: "Webinar Special: Online Training + Evaluation Call for $79",
  description:
    "Webinar attendees only: get the complete Cali K9® Online Training System ($497 value) plus a one-on-one evaluation call about your dog, all for $79.",
  // Post-webinar offer page. Keep out of search.
  robots: { index: false, follow: false },
};

// TODO: swap for the real checkout link (GHL order form / Shopify product)
// once it exists. Every CTA on the page reads from this one constant.
const CHECKOUT_URL = "#checkout";

const COURSES = [
  "Train With Jas Series 1.0",
  "Train With Jas Series 1.0 Advanced",
  "Train With Jas Series 2.0",
  "100 Problem-Solving Technique Videos",
  "How to Motivate Your Dog Video",
  "10 Rules to Live By Video",
  "Daily Homework to Keep Your Training Consistent",
  "The Service Dog Training Course",
  "Access to the Cali K9 Membership Community",
];

const STACK = [
  { item: "Complete Cali K9 Online Training System", value: "$497" },
  { item: "One-on-One Evaluation Call About Your Dog", value: "$27" },
];

const TESTIMONIALS = [
  {
    initials: "PK",
    name: "Priya K.",
    meta: "Mochi · Shiba Inu · Reactivity",
    quote:
      "“I tried three trainers before Jas. The online course alone solved problems others couldn’t fix in person. The 5-Pillar system just makes sense.”",
    result: "Reactivity eliminated. Fixed what 3 trainers couldn’t",
  },
  {
    initials: "AK",
    name: "Amanda K.",
    meta: "Miami, FL · Google Review",
    quote:
      "“The online program is incredible value. I’ve done 3 other dog training courses and nothing comes close to the depth of Jas’s system. My dog is off-leash reliable at 8 months old.”",
    result: "Off-leash reliable at 8 months old",
  },
  {
    initials: "MT",
    name: "Marcus T.",
    meta: "Zeus · German Shepherd · Aggression",
    quote:
      "“Before Cali K9, Zeus was lunging at every dog on the street. Now he walks by my side like a completely different dog.”",
    result: "Now walks calmly past other dogs",
  },
];

const FAQS = [
  {
    q: "What exactly do I get for $79?",
    a: "Lifetime access to the complete Cali K9 Online Training System (every course, the 100 problem-solving videos, daily homework, and the membership community), plus a private one-on-one evaluation call where a Cali K9 specialist assesses your dog and maps out your next steps.",
  },
  {
    q: "How does the evaluation call work?",
    a: "After purchase you'll get a link to book your call. It's a direct consultation with a Cali K9 behavior specialist. Bring your toughest issues (reactivity, aggression, anxiety, obedience) and leave with a custom roadmap.",
  },
  {
    q: "Is this really the same $497 program?",
    a: "Yes. It is the same online curriculum listed on our site at $497. This webinar-attendee price bundles it with the evaluation call for $79.",
  },
  {
    q: "Will this work for my dog's breed or age?",
    a: "The 5-Pillar System is breed-agnostic and works at every age. We've used it on 10,000+ dogs: puppies, seniors, working breeds, rescues, and the dogs other trainers turned away.",
  },
  {
    q: "What's your refund policy?",
    a: "All sales are final and no refunds are issued. If you have questions before purchasing, reach out and our team will help you decide if it's the right fit.",
  },
];

const CELEB_ORDER = [
  "STEPHEN CURRY",
  "DEMI MOORE",
  "KEVIN HART",
  "COI LERAY",
  "KENDRICK LAMAR",
  "DR. PHIL",
  "JASON DERULO",
  "SAN JOSE POLICE",
  "TURKS & CAICOS MILITARY",
];
const ORDERED_CELEBS = CELEB_ORDER.map((n) => CELEBS.find((c) => c.name === n)).filter(
  (c): c is (typeof CELEBS)[number] => Boolean(c),
);

function BuyCta({ className = "" }: { className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <a href={CHECKOUT_URL} className="btn btn-white btn-lg text-center max-md:w-full">
        Get Instant Access for $79
        <span aria-hidden="true" className="ml-2 relative -top-[2.5px] leading-none">
          &rarr;
        </span>
      </a>
      <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
        One-Time Payment &middot; No Subscription &middot; Instant Access
      </p>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex justify-center gap-[3px] mb-3" role="img" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#F59E0B] text-base leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function WebinarOfferPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-[#F59E0B] text-ink font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            🔥 Webinar Attendee Special
          </span>

          <h1 className="font-display text-[clamp(40px,5.5vw,68px)] text-white leading-[0.95] mb-5">
            THE ENTIRE CALI K9 ONLINE TRAINING SYSTEM{" "}
            <span className="text-[#6A9FFF]">+ A ONE-ON-ONE EVALUATION CALL</span>
          </h1>

          <p className="font-body text-xl text-white/75 leading-relaxed mb-8 max-w-[600px] mx-auto">
            Everything Jas teaches, the full 5-Pillar course library behind
            10,000+ transformed dogs, plus a private call with a Cali K9
            specialist about <em>your</em> dog.
          </p>

          {/* Price stack */}
          <div className="inline-flex items-end gap-4 mb-8">
            <span className="font-display text-[clamp(28px,3vw,36px)] text-white/40 line-through leading-none">
              $524
            </span>
            <span className="font-display text-[clamp(72px,9vw,110px)] text-white leading-[0.85]">
              $79
            </span>
            <span className="font-ui text-sm font-bold tracking-[1.5px] uppercase text-[#F59E0B] mb-2">
              Today Only
            </span>
          </div>

          <BuyCta />
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Everything Included
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink">
              HERE&rsquo;S WHAT YOU GET
            </h2>
          </div>

          {/* Part 1: courses */}
          <div className="bg-white border border-black/[0.06] rounded-xl p-8 max-[480px]:p-6 mb-5">
            <div className="flex items-start justify-between gap-6 mb-5 max-[480px]:flex-col max-[480px]:gap-2">
              <div>
                <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-500 mb-1.5">
                  Part 1 &middot; Lifetime Access
                </div>
                <h3 className="font-display text-[clamp(26px,3vw,34px)] text-ink leading-none">
                  THE COMPLETE ONLINE TRAINING SYSTEM
                </h3>
              </div>
              <div className="text-right max-[480px]:text-left shrink-0">
                <div className="font-display text-3xl text-ink leading-none">$497</div>
                <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-gray-muted mt-1">
                  Value
                </div>
              </div>
            </div>
            <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-5">
              Jas&rsquo;s entire 5-Pillar method, delivered digitally. Self-paced,
              lifetime access, and built to fix the problems other trainers
              can&rsquo;t: reactivity, aggression, anxiety, and everything in
              between.
            </p>
            <ul className="list-none p-0 m-0 grid grid-cols-2 gap-x-6 max-md:grid-cols-1">
              {COURSES.map((item) => (
                <li
                  key={item}
                  className="font-body text-sm text-ink/80 leading-normal py-1 pl-6 relative"
                >
                  <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Part 2: evaluation call */}
          <div className="bg-white border border-black/[0.06] rounded-xl p-8 max-[480px]:p-6 mb-8">
            <div className="flex items-start justify-between gap-6 mb-5 max-[480px]:flex-col max-[480px]:gap-2">
              <div>
                <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-500 mb-1.5">
                  Part 2 &middot; One-on-One
                </div>
                <h3 className="font-display text-[clamp(26px,3vw,34px)] text-ink leading-none">
                  YOUR PRIVATE EVALUATION CALL
                </h3>
              </div>
              <div className="text-right max-[480px]:text-left shrink-0">
                <div className="font-display text-3xl text-ink leading-none">$27</div>
                <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-gray-muted mt-1">
                  Value
                </div>
              </div>
            </div>
            <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-5">
              A direct consultation with a Cali K9 behavior specialist about
              your dog. Not a webinar, not a group call. We assess what&rsquo;s
              really driving the behavior and hand you a custom roadmap so you
              know exactly where to start inside the courses.
            </p>
            <ul className="list-none p-0 m-0 grid grid-cols-2 gap-x-6 max-md:grid-cols-1">
              {[
                "In-depth behavioral assessment",
                "Custom training roadmap",
                "Ask anything about your dog",
                "All breeds & ages welcome",
              ].map((item) => (
                <li
                  key={item}
                  className="font-body text-sm text-ink/80 leading-normal py-1 pl-6 relative"
                >
                  <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Value stack */}
          <div className="bg-ink rounded-xl p-8 max-[480px]:p-6 text-white">
            <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-white/50 mb-4">
              Total Value
            </div>
            <ul className="list-none p-0 m-0 mb-5 divide-y divide-white/10">
              {STACK.map((row) => (
                <li key={row.item} className="flex items-center justify-between gap-4 py-3">
                  <span className="font-body text-[15px] text-white/85">{row.item}</span>
                  <span className="font-ui text-base font-bold text-white/60 line-through shrink-0">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 pt-4 border-t-2 border-[#F59E0B]/60">
              <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-white">
                Webinar Price
              </span>
              <span className="font-display text-5xl text-[#F59E0B] leading-none">$79</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section
        className="py-12 max-md:py-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <BuyCta />
        </div>
      </section>

      {/* ── Netflix band ── */}
      <section className="bg-ink py-10">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <p className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-white/50 mb-5">
            The system you&rsquo;ve seen on
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/media-logos/netflix.webp"
              alt="Netflix"
              width={128}
              height={64}
              className="h-12 w-auto"
            />
            <span className="font-display text-3xl max-md:text-2xl text-white leading-none">
              CANINE INTERVENTION
            </span>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-14 max-md:py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Real Transformations
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink">
              WHAT THE ONLINE SYSTEM DID FOR THEIR DOGS
            </h2>
          </div>

          <Carousel
            ariaLabel="Client reviews"
            desktopPerView={3}
            slides={TESTIMONIALS.map((t) => (
              <div
                key={t.initials}
                className="bg-cream border border-black/[0.05] rounded-xl p-8 max-[480px]:p-6 text-center h-full"
              >
                <Stars />
                <p className="font-body text-base text-ink/80 italic leading-relaxed mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-display text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <cite className="font-ui text-sm font-bold not-italic block text-ink">
                      {t.name}
                    </cite>
                    <span className="font-ui text-xs text-gray-muted">{t.meta}</span>
                  </div>
                </div>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block">
                  &#10003; {t.result}
                </div>
              </div>
            ))}
          />
        </div>
      </section>

      {/* ── Celebrities ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Trusted By The Best
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink max-w-[800px] mx-auto">
              THE TRAINER CELEBRITIES &amp; LAW ENFORCEMENT RELY ON
            </h2>
          </div>

          <Carousel
            ariaLabel="Celebrity testimonials"
            desktopPerView={3}
            desktopRows={2}
            slides={ORDERED_CELEBS.map((celeb) => (
              <article
                key={celeb.name}
                className="relative rounded-xl overflow-hidden aspect-square max-w-[440px] mx-auto"
                aria-label={`${celeb.name} testimonial`}
              >
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: celeb.objectPosition || "center top" }}
                  sizes="(max-width: 540px) 90vw, 370px"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end text-center p-[22px_20px]"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,10,30,0.96) 0%, rgba(5,10,30,0.75) 35%, rgba(5,10,30,0.15) 65%, transparent 100%)",
                  }}
                >
                  <div className="flex justify-center gap-0.5 mb-2" role="img" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#F59E0B] text-xs leading-none">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-[13px] italic font-light text-white/85 leading-normal mb-3.5">
                    {celeb.quote}
                  </p>
                  <div className="font-display text-xl text-white leading-none tracking-[0.5px] mb-1">
                    {celeb.name}
                  </div>
                  <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/50">
                    {celeb.meta}
                  </div>
                </div>
              </article>
            ))}
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Got Questions
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <div className="divide-y divide-black/[0.08]">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-ui text-lg font-bold text-ink mb-2">{faq.q}</h3>
                <p className="font-body text-[15px] text-gray-muted leading-[1.75]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-16 max-md:py-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <h2 className="font-display text-[clamp(34px,4.5vw,48px)] leading-[0.93] text-white mb-4">
            THE WHOLE SYSTEM. A CALL ABOUT YOUR DOG. $79.
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-8">
            $524 of training for $79. The same 5-Pillar System behind 10,000+
            transformed dogs, plus a specialist in your corner. Only for
            webinar attendees.
          </p>
          <BuyCta />
          <p className="font-body text-xs text-white/35 mt-8 max-w-[440px] mx-auto">
            All sales are final. Cali K9&reg; does not issue refunds. Questions?
            Reach out to our team before purchasing.
          </p>
        </div>
      </section>
    </main>
  );
}
