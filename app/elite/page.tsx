import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cali K9 Elite — $997",
  description:
    "The complete Cali K9 5 Pillar, 50-Step System™ plus 6 months of Academy access and 4 Train With Jas coaching sessions. One-time $997.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// Elite checkout runs through the order-builder flow: kit offer → treats
// offer → the combined payment link for the exact selection (see
// lib/package-checkout.ts).
const START_ORDER_URL = "/training-kit-upsell?tier=elite";

const INCLUDED = [
  {
    title: "Full Cali K9 Academy",
    desc: "The complete Cali K9 5 Pillar, 50-Step System™ — all 8 modules, the full 50-Step Roadmap, video curriculum, Saturday Kickstart & Academy Live, community, and Certificate of Completion eligibility.",
  },
  {
    title: "6 Months Academy & Library Access",
    desc: "Elite includes 6 months of full Academy membership and video library access — not lifetime, and not just a single month.",
  },
  {
    title: "4 Train With Jas Session Tokens",
    desc: "4 session tokens for live Wednesday small-group coaching, redeemable anytime throughout your full 6-month term.",
  },
  {
    title: "Wednesday Troubleshooting & Accountability",
    desc: "Live coaching at 6:00 PM Eastern / 3:00 PM Pacific for video review, coaching feedback, roadmap adjustments, and advanced problem-solving support.",
  },
];

const HOW_STEPS = [
  {
    n: "1",
    title: "Work The Roadmap",
    desc: "You move through the Cali K9 50-Step Roadmap™ at your own pace, with 6 months of Academy access to get there.",
  },
  {
    n: "2",
    title: "Book Your Wednesday Sessions",
    desc: "Use your 4 session tokens anytime across your 6-month term to reserve live Wednesday Train With Jas coaching.",
  },
  {
    n: "3",
    title: "Get Coached & Adjust",
    desc: "A trainer reviews your progress, gives direct feedback, and adjusts your plan before small mistakes become habits.",
  },
];

const COMPARE_ROWS = [
  { label: "50-Step Roadmap & Full Academy", academy: "✓", elite: "✓" },
  { label: "Academy & Library Access", academy: "Monthly", elite: "6 Months" },
  { label: "Train With Jas Coaching Sessions", academy: "—", elite: "4 (via session tokens)" },
  { label: "Personalized training path", academy: "✓", elite: "✓" },
  { label: "Accountability & roadmap adjustments", academy: "—", elite: "✓" },
  { label: "Best positioning", academy: "Do it yourself", elite: "Do it with us" },
];

const YES_ITEMS = [
  "You want feedback, troubleshooting, and progress checks — not just a video library",
  "You've tried self-directed training before and stalled out at a hard stage",
  "You want mistakes corrected fast, before they turn into habits",
  "You want more confidence your dog will hold up under real-world distraction",
];

const NO_ITEMS = [
  "You're comfortable following a system on your own",
  "You want to try the method before committing more",
  "Budget is the deciding factor right now",
];

const PRICE_LIST = [
  "Full Cali K9 Academy — all 8 modules & the full 50-Step Roadmap",
  "6 months of Academy & video library access",
  "4 Train With Jas session tokens, valid for the full 6-month term",
  "Wednesday coaching: troubleshooting, video review & feedback",
  "Accountability & roadmap adjustments + advanced problem-solving support",
  "Saturday Kickstart + Saturday Academy Live with Jas",
  "Certificate of Completion",
  "30-Day Progress Guarantee™",
  "1 bag of Turbo Treats",
  "Payment plans available",
];

const FAQS = [
  {
    q: "What's the difference between Academy and Elite?",
    a: "Both run on the exact same Cali K9 5 Pillar, 50-Step System™. Academy is monthly, roadmap-only access — the system tells you what to do. Elite adds 6 months of Academy access plus 4 Train With Jas session tokens for live Wednesday coaching — troubleshooting, video review, feedback, and roadmap adjustments — to help make sure you're doing it correctly.",
  },
  {
    q: "Is this a subscription?",
    a: "No — Elite is a one-time payment of $997 that includes 6 months of Academy access, not a recurring charge.",
  },
  {
    q: "How do the Wednesday coaching sessions work?",
    a: "Elite includes 4 Train With Jas session tokens, redeemable for live small-group Wednesday coaching at 6:00 PM Eastern / 3:00 PM Pacific, anytime across your 6-month term — covering troubleshooting, video review, coaching feedback, and roadmap adjustments. Cancel or reschedule at least 24 hours before your session to keep your token; cancellations inside 24 hours or no-shows use the token.",
  },
];

function PricingCta() {
  return (
    <Link href={START_ORDER_URL} className="btn btn-blue btn-lg w-full text-center">
      Get Elite &mdash; $997 &rarr;
    </Link>
  );
}

export default function ElitePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-14 max-md:pt-[100px] max-md:pb-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
            ★ Elite Tier &middot; $997
          </span>
          <h1 className="font-display text-[clamp(36px,5vw,58px)] text-white leading-[0.95] mb-5">
            THE COMPLETE SYSTEM. PLUS THE COACHING TO MAKE SURE YOU GET IT RIGHT.
          </h1>
          <p className="font-body text-base text-white/70 leading-relaxed max-w-[620px] mx-auto mb-6">
            Elite runs on the same Cali K9 5 Pillar, 50-Step System&trade; as Academy &mdash; every
            module, every step of the roadmap, the full video curriculum &mdash; then adds 6 months
            of Academy access and 4 Train With Jas coaching sessions with a real trainer
            who&rsquo;s watching your progress.
          </p>
          <p className="font-ui text-base italic text-blue-200 mb-7">
            &ldquo;The roadmap tells you what to do. Elite helps make sure you are doing it
            correctly.&rdquo;
          </p>
          <a href="#pricing" className="btn btn-white btn-lg">
            Get Elite &mdash; $997 &rarr;
          </a>
          <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
            One-Time Payment &middot; Not A Subscription
          </p>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              What&rsquo;s Included
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink max-w-[700px] mx-auto">
              THE SAME CALI K9 SYSTEM &mdash; PLUS A COACH MAKING SURE YOU GET IT RIGHT
            </h2>
            <p className="font-body text-base text-gray-muted max-w-[560px] mx-auto mt-4">
              Elite runs on the exact same Cali K9 5 Pillar, 50-Step System&trade; as Academy. The
              roadmap doesn&rsquo;t change &mdash; how much support you have while you work it
              does.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {INCLUDED.map((item) => (
              <div key={item.title} className="flex gap-3.5 bg-white border border-border rounded-xl p-6">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 font-bold">
                  &#10003;
                </span>
                <div>
                  <h5 className="font-body text-[15.5px] font-bold text-ink mb-1.5">{item.title}</h5>
                  <p className="font-body text-[13.5px] text-gray-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <blockquote className="max-w-[560px] mx-auto mt-9 border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink text-left">
            &ldquo;If you treat a dog like a human, it will treat you like a dog.&rdquo;
            <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
              &mdash; Jas Leverette
            </span>
          </blockquote>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              How It Works
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink">
              FROM ROADMAP TO COACHING, STEP BY STEP
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {HOW_STEPS.map((s) => (
              <div key={s.n} className="bg-white border border-black/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="font-display text-lg text-ink mb-2 uppercase">{s.title}</h3>
                <p className="font-body text-sm text-gray-muted leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              See The Difference
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink">
              ACADEMY VS. ELITE
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full font-body text-[14px] text-ink">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-4 font-body font-semibold">&nbsp;</th>
                  <th className="p-4 text-center">
                    <span className="font-display text-lg block">ACADEMY</span>
                    <span className="font-ui text-xs text-white/60">$97/mo</span>
                  </th>
                  <th className="p-4 text-center bg-blue-500">
                    <span className="font-display text-lg block">ELITE</span>
                    <span className="font-ui text-xs text-white/80">$997</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 text-left">{row.label}</td>
                    <td className="p-3.5 text-center text-gray-muted">{row.academy}</td>
                    <td className="p-3.5 text-center font-semibold text-blue-700 bg-blue-50/60">
                      {row.elite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Is Elite Right For You?
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink max-w-[640px] mx-auto">
              BUILT FOR OWNERS WHO WANT A COACH, NOT JUST A COURSE
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            <div className="bg-white border-2 border-blue-500 rounded-xl p-7">
              <h5 className="font-ui text-sm font-bold tracking-[1px] uppercase text-blue-500 mb-4">
                Elite Is For You If &mdash;
              </h5>
              <ul className="space-y-2.5">
                {YES_ITEMS.map((item) => (
                  <li key={item} className="font-body text-[14.5px] text-ink/80 leading-normal pl-6 relative">
                    <span className="absolute left-0 text-blue-500 font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-border rounded-xl p-7">
              <h5 className="font-ui text-sm font-bold tracking-[1px] uppercase text-gray-muted mb-4">
                Start With Academy Instead If &mdash;
              </h5>
              <ul className="space-y-2.5">
                {NO_ITEMS.map((item) => (
                  <li key={item} className="font-body text-[14.5px] text-gray-muted leading-normal pl-6 relative">
                    <span className="absolute left-0 text-gray-muted">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/academy" className="font-body text-[13.5px] text-blue-500 underline block mt-5">
                See The Academy &mdash; $97/month &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4 text-center">
          <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            Real Members, Real Dogs
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink mb-8">
            A COACH IS ACTUALLY WATCHING YOUR PROGRESS
          </h2>
          <Image
            src="/images/funnel/jas-zoom.jpg"
            alt="Jas Leverette on a live trainer check-in call"
            width={794}
            height={898}
            className="w-full max-w-[440px] mx-auto h-auto rounded-xl shadow-md"
          />
          <p className="font-body text-[13.5px] text-gray-muted mt-4">
            A live Wednesday Train With Jas check-in &mdash; video review, feedback, and roadmap
            adjustments with a real trainer.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-14 max-md:py-10 bg-cream" id="pricing">
        <div className="max-w-[640px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Get Started
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink">
              JOIN ELITE TODAY
            </h2>
          </div>
          <div className="border-2 border-blue-500 rounded-[18px] overflow-hidden shadow-lg bg-white">
            <div className="bg-ink text-center px-7 pt-6 pb-5">
              <div className="inline-block bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full mb-3.5">
                Elite
              </div>
              <div className="font-display text-[46px] text-white leading-none">$997</div>
              <p className="font-body text-[12.5px] text-white/60 mt-2">
                One-time payment &middot; Not a subscription
              </p>
            </div>
            <ul className="px-8 py-6 space-y-2.5 max-[480px]:px-5">
              {PRICE_LIST.map((item) => (
                <li key={item} className="font-body text-[14.5px] text-ink/80 leading-normal pl-6 relative">
                  <span className="absolute left-0 text-blue-500 font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="px-8 pb-7 max-[480px]:px-5 text-center">
              <PricingCta />
              <p className="font-body text-[12.5px] text-gray-muted mt-3">
                Payment plans available at checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[680px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Questions
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink">
              ELITE FAQ
            </h2>
          </div>
          {FAQS.map((faq) => (
            <div key={faq.q} className="border-b border-border py-4">
              <div className="font-body text-[15px] font-bold text-ink mb-1.5">{faq.q}</div>
              <div className="font-body text-[13.5px] text-[#4b4f58] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIP tease ── */}
      <section className="py-14 max-md:py-10 bg-ink text-center">
        <div className="max-w-[680px] mx-auto px-6">
          <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 block mb-3">
            Want Even More Access?
          </span>
          <h3 className="font-display text-[clamp(26px,3.5vw,36px)] text-white leading-[0.95] mb-4">
            VIP ADDS 8 SESSION TOKENS AND A FULL YEAR OF ACCESS
          </h3>
          <p className="font-body text-[14.5px] text-white/70 leading-relaxed mb-6">
            VIP is everything in Elite, plus a full year of Academy access, 8 total Train With Jas
            session tokens with priority booking, a private VIP WhatsApp group with 24-hour text
            and video support, and the full Cali K9 Training Kit &mdash; for owners who want the
            most hands-on experience available.
          </p>
          <Link href="/vip" className="btn btn-white">
            See VIP &mdash; $2,497 &rarr;
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-14 max-md:py-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <h2 className="font-display text-[clamp(30px,4.5vw,44px)] text-white leading-[0.95] mb-5">
            STOP GUESSING WHETHER YOU&rsquo;RE DOING IT RIGHT.
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-7">
            Join Elite for $997 and get the full Cali K9 5 Pillar, 50-Step System&trade; plus 6
            months of Academy access and 4 Train With Jas coaching sessions.
          </p>
          <a href="#pricing" className="btn btn-white btn-lg">
            Get Elite &mdash; $997 &rarr;
          </a>
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
