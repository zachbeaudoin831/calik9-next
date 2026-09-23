import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PaymentPlansSection from "@/components/PaymentPlansSection";

export const metadata: Metadata = {
  title: "Cali K9 All Access — $4,997",
  description:
    "Lifetime access to the complete Cali K9 Academy plus 12 months of VIP coaching and 8 Train With Jas sessions. One-time payment, or 3 payments of $1,797.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// GHL payment links for All Access. Drop them in when the products exist;
// until then the pricing card shows a "checkout opens shortly" note.
const CHECKOUT_ONE_TIME: string | null = null; // $4,997 one-time
const CHECKOUT_PLAN: string | null = null; //     3 × $1,797

const INCLUDED = [
  {
    title: "Lifetime Cali K9 Academy",
    tag: "For Life",
    highlight: true,
    items: [
      "Complete Cali K9 50-Step Roadmap™",
      "All 8 training modules",
      "All 6 Universities",
      "Full training video library",
      "Training checklists and progress tools",
      "All future core Academy curriculum updates",
      "Lifetime access — no monthly Academy fee, ever",
    ],
  },
  {
    title: "12 Months Of VIP Coaching",
    tag: "12 Months",
    highlight: true,
    items: [
      "VIP WhatsApp access",
      "Priority coaching support",
      "Training questions answered",
      "Video submissions",
      "Priority feedback",
      "Priority Q&A and hot-seat opportunities",
    ],
  },
  {
    title: "Train With Jas",
    tag: "8 Sessions",
    highlight: true,
    items: [
      "8 Train With Jas sessions",
      "Live coaching",
      "Behavior troubleshooting",
      "Training feedback",
      "Video breakdowns",
      "Progress reviews",
      "Advanced training guidance",
    ],
  },
  {
    title: "Priority Video Feedback",
    tag: "Priority",
    highlight: false,
    items: [
      "Priority review of submitted training videos",
      "Technique corrections",
      "Behavior troubleshooting",
      "Training-plan adjustments",
    ],
  },
  {
    title: "Lifetime All Access Community",
    tag: "For Life",
    highlight: false,
    items: [
      "Permanent access to the private All Access community",
      "Member discussions",
      "Training wins",
      "Special announcements",
      "Member-only updates and opportunities",
    ],
  },
  {
    title: "All Access Workshops",
    tag: "Advanced",
    highlight: false,
    items: [
      "Reactivity",
      "Aggression",
      "Off-leash reliability",
      "Recall",
      "Puppy development",
      "Anxiety",
      "Advanced obedience",
      "Multi-dog households",
    ],
  },
  {
    title: "Preferred Member Benefits",
    tag: "Members Only",
    highlight: false,
    items: [
      "Preferred pricing or priority access, when available, for:",
      "Live events and workshops",
      "Training intensives and specialty programs",
      "Cali K9 products",
      "Future premium experiences",
    ],
  },
  {
    title: "Turbo Treats Bonus",
    tag: "Bonus",
    highlight: false,
    items: [
      "Exclusive All Access Turbo Treats benefit, such as:",
      "Complimentary training reward pack",
      "Member-only discount",
      "Preferred bundle pricing",
    ],
  },
];

const VALUE_STACK = [
  { item: "Lifetime Cali K9 Academy", value: "$4,997" },
  { item: "12 Months VIP Coaching", value: "$5,000" },
  { item: "8 Train With Jas Sessions", value: "$4,000" },
  { item: "Lifetime All Access Community", value: "$2,500" },
  { item: "Priority Video Feedback", value: "$1,500" },
  { item: "Advanced Workshops", value: "$1,000+" },
  { item: "Future Academy Updates", value: "Included For Life" },
];

const YES_ITEMS = [
  "You want the Academy for the life of your dog — and every dog after — with no monthly fee",
  "You want a full year of Jas and the team involved: WhatsApp, priority feedback, and 8 live sessions",
  "You're working through reactivity, aggression, or anxiety and want the advanced workshops on top of the roadmap",
  "You'd rather make one decision now than upgrade tier by tier",
  "You want first access and preferred pricing on everything Cali K9 does next",
];

const NO_ITEMS = [
  "12 months of Academy access is enough for your situation",
  "You don't need the advanced workshops or the lifetime community",
  "You'd rather start at $2,497 and decide on lifetime later",
];

const PRICE_LIST = [
  "Lifetime Cali K9 Academy — all 8 modules, 6 Universities, every future update",
  "12 months of VIP coaching and WhatsApp access",
  "8 Train With Jas sessions",
  "Priority video feedback",
  "Lifetime All Access community",
  "Advanced workshops",
  "Preferred member benefits",
  "Turbo Treats bonus",
];

const FAQS = [
  {
    q: "What does “lifetime” actually mean?",
    a: "Your access to the Cali K9 Academy — the 50-Step Roadmap™, all 8 modules, the 6 Universities, the video library, and every future core curriculum update — never expires and never has a monthly fee. The same goes for the All Access community. The VIP coaching, WhatsApp access, and the 8 Train With Jas sessions run for 12 months from the day you join.",
  },
  {
    q: "Is this a subscription?",
    a: "No. All Access is a one-time payment of $4,997. If you prefer, you can split it into 3 payments of $1,797 at checkout — that's a fixed plan, not a recurring membership.",
  },
  {
    q: "How do the 8 Train With Jas sessions work?",
    a: "Each session is live coaching with Jas — behavior troubleshooting, training feedback, video breakdowns, and progress reviews on your dog. Your 8 sessions are usable across your 12 months of VIP coaching, with priority booking. Cancel or reschedule at least 24 hours ahead to keep a session; cancellations inside 24 hours or no-shows count as used.",
  },
  {
    q: "What's the difference between VIP and All Access?",
    a: "VIP gives you 12 months of Academy access with 8 Train With Jas sessions and the WhatsApp group. All Access keeps the same 12 months of VIP-level coaching and adds lifetime Academy access, the lifetime All Access community, priority video feedback, the advanced workshops, preferred member benefits, and the Turbo Treats bonus.",
  },
  {
    q: "What happens after the 12 months?",
    a: "Your Academy and community access continue for life. The VIP coaching, WhatsApp line, and any unused Train With Jas sessions end at the 12-month mark.",
  },
];

function PricingButtons() {
  if (!CHECKOUT_ONE_TIME && !CHECKOUT_PLAN) {
    return (
      <div className="bg-cream border border-border rounded-xl p-5 text-center">
        <div className="font-ui text-sm font-bold tracking-[1.5px] uppercase text-ink mb-1">
          Checkout opens shortly
        </div>
        <p className="font-body text-[13px] text-gray-muted">
          $4,997 one-time, or 3 payments of $1,797.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      {CHECKOUT_ONE_TIME && (
        <a href={CHECKOUT_ONE_TIME} className="btn btn-gold btn-lg w-full text-center">
          Get All Access &mdash; $4,997 &rarr;
        </a>
      )}
      {CHECKOUT_PLAN && (
        <a href={CHECKOUT_PLAN} className="btn btn-outline btn-lg w-full text-center">
          Or 3 Payments Of $1,797 &rarr;
        </a>
      )}
    </div>
  );
}

export default function AllAccessPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-14 max-md:pt-[100px] max-md:pb-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <span className="inline-flex items-center gap-2 bg-amber-400 text-[#2b1d05] font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-5">
            ★ Cali K9 All Access &middot; $4,997
          </span>
          <h1 className="font-display text-[clamp(36px,5vw,58px)] text-white leading-[0.95] mb-5">
            LIFETIME ACCESS TO THE ACADEMY. A FULL YEAR OF VIP COACHING WITH JAS.
          </h1>
          <p className="font-body text-base text-white/70 leading-relaxed max-w-[640px] mx-auto mb-6">
            All Access is the complete Cali K9 Academy &mdash; the 50-Step Roadmap&trade;, all 8
            modules, all 6 Universities, and every future update &mdash; yours for life, with no
            monthly fee. On top of it: 12 months of VIP coaching, 8 Train With Jas sessions,
            priority video feedback, the advanced workshops, and a lifetime seat in the All Access
            community.
          </p>
          <p className="font-ui text-base italic text-blue-200 mb-7">
            &ldquo;One decision. Every dog you&rsquo;ll ever own.&rdquo;
          </p>
          <div className="max-w-[640px] mx-auto mb-7">
            <video
              poster="/images/funnel/posters/6ab1bf732e45fddc38528f40.jpg"
              className="w-full h-auto rounded-xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6ab1bf732e45fddc38528f40.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <a href="#pricing" className="btn btn-gold btn-lg">
            Get All Access &mdash; $4,997 &rarr;
          </a>
          <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
            One-Time Payment &middot; Or 3 Payments Of $1,797 &middot; Not A Subscription
          </p>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              What&rsquo;s Included
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink max-w-[700px] mx-auto">
              EVERYTHING CALI K9 OFFERS ONLINE. FOR LIFE.
            </h2>
            <p className="font-body text-base text-gray-muted max-w-[600px] mx-auto mt-4">
              The same Cali K9 5 Pillar, 50-Step System&trade; every tier moves through &mdash;
              with the Academy unlocked permanently, a full year of the highest level of coaching,
              and the advanced material that only All Access members get.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {INCLUDED.map((group) => (
              <div
                key={group.title}
                className={`rounded-xl p-6 ${
                  group.highlight ? "bg-blue-50 border-2 border-blue-500" : "bg-white border border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h5 className="font-display text-[22px] text-ink leading-tight">{group.title}</h5>
                  <span
                    className={`shrink-0 font-ui text-[10.5px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-full ${
                      group.highlight ? "bg-blue-500 text-white" : "bg-cream text-gray-muted"
                    }`}
                  >
                    {group.tag}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-body text-[14px] text-ink/80 leading-normal pl-5 relative">
                      <span className="absolute left-0 text-blue-500 font-bold">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value stack ── */}
      <section className="py-14 max-md:py-10 bg-ink">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-200 block mb-3">
              Offer Value
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-white max-w-[680px] mx-auto">
              WHAT YOU&rsquo;RE ACTUALLY GETTING
            </h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            {VALUE_STACK.map((row, i) => (
              <div
                key={row.item}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${
                  i ? "border-t border-white/10" : ""
                }`}
              >
                <span className="font-body text-[15px] text-white/85">{row.item}</span>
                <span className="font-display text-xl text-amber-400 shrink-0">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 px-6 py-5 bg-amber-400/10 border-t-2 border-amber-400/50">
              <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-white">Total Value</span>
              <span className="font-display text-3xl text-amber-400">$18,997</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-white/50 mb-1">
              Your Investment
            </div>
            <div className="font-display text-[48px] text-white leading-none">$4,997</div>
            <p className="font-body text-[13.5px] text-white/60 mt-2">
              One-time &middot; or 3 payments of $1,797
            </p>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Is All Access Right For You?
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink max-w-[680px] mx-auto">
              BUILT FOR OWNERS WHO ARE ALL IN
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            <div className="bg-white border-2 border-blue-500 rounded-xl p-7">
              <h5 className="font-ui text-sm font-bold tracking-[1px] uppercase text-blue-500 mb-4">
                All Access Is For You If &mdash;
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
                Consider VIP Instead If &mdash;
              </h5>
              <ul className="space-y-2.5">
                {NO_ITEMS.map((item) => (
                  <li key={item} className="font-body text-[14.5px] text-gray-muted leading-normal pl-6 relative">
                    <span className="absolute left-0 text-gray-muted">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/vip" className="font-body text-[13.5px] text-blue-500 underline block mt-5">
                See VIP &mdash; $2,497 &rarr;
              </Link>
            </div>
          </div>
          <blockquote className="max-w-[560px] mx-auto mt-9 border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink text-left">
            &ldquo;You can take a dog out of the pack, but not the pack out of the dog.&rdquo;
            <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
              &mdash; Jas Leverette
            </span>
          </blockquote>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[1140px] mx-auto px-6 max-[480px]:px-4 text-center">
          <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            Real Members, Real Dogs
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink mb-8">
            COACHED DIRECTLY BY JAS AND THE TEAM
          </h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <div>
              <video
                poster="/images/funnel/posters/6a970427c7069f4fc79e45f5.jpg"
                className="w-full aspect-[4/3] object-cover rounded-xl bg-black shadow-md"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a970427c7069f4fc79e45f5.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="font-ui text-sm font-bold tracking-[1px] uppercase text-ink mt-3">
                Mylene &mdash; VIP Coaching Member
              </p>
            </div>
            <div>
              <Image
                src="/images/funnel/vip-session.jpg"
                alt="An online coaching session with Jas Leverette"
                width={1600}
                height={1167}
                className="w-full aspect-[4/3] object-cover rounded-xl shadow-md"
              />
              <p className="font-ui text-sm font-bold tracking-[1px] uppercase text-ink mt-3">
                A Live Session With Jas
              </p>
            </div>
            <div>
              <video
                poster="/images/funnel/posters/6a97042bef6af944f0f9a708.jpg"
                className="w-full aspect-[4/3] object-cover rounded-xl bg-black shadow-md"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a97042bef6af944f0f9a708.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="font-ui text-sm font-bold tracking-[1px] uppercase text-ink mt-3">
                Before &amp; After &mdash; Coached Transformation
              </p>
            </div>
          </div>
          <p className="font-body text-[13.5px] text-gray-muted mt-6">
            Direct, individualized coaching on your dog for a full year &mdash; and the Academy for
            every year after.
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
              JOIN ALL ACCESS TODAY
            </h2>
          </div>
          <div className="border-2 border-amber-400 rounded-[18px] overflow-hidden shadow-lg bg-white">
            <div className="bg-ink text-center px-7 pt-6 pb-5">
              <div className="inline-block bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full mb-3.5">
                All Access
              </div>
              <div className="font-display text-[46px] text-white leading-none">$4,997</div>
              <p className="font-body text-[12.5px] text-white/60 mt-2">
                One-time payment &middot; or 3 payments of $1,797
              </p>
              <p className="font-ui text-[11px] tracking-[1.5px] uppercase text-amber-400/90 mt-2">
                $18,997 total value
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
            <div className="px-8 pb-7 max-[480px]:px-5">
              <PricingButtons />
              <p className="font-body text-[12.5px] text-gray-muted mt-3 text-center">
                Choose one-time or the 3-payment plan at checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      <PaymentPlansSection />

      {/* ── FAQ ── */}
      <section className="py-14 max-md:py-10">
        <div className="max-w-[680px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Questions
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink">
              ALL ACCESS FAQ
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

      {/* ── Final CTA ── */}
      <section
        className="py-14 max-md:py-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[680px] mx-auto px-6">
          <h2 className="font-display text-[clamp(30px,4.5vw,44px)] text-white leading-[0.95] mb-5">
            THE ACADEMY FOR LIFE. JAS IN YOUR CORNER FOR A YEAR.
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-7">
            Join All Access for $4,997 &mdash; or 3 payments of $1,797 &mdash; and get lifetime
            Academy access, 12 months of VIP coaching, 8 Train With Jas sessions, priority video
            feedback, the advanced workshops, and a permanent seat in the All Access community.
          </p>
          <a href="#pricing" className="btn btn-gold btn-lg">
            Get All Access &mdash; $4,997 &rarr;
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
