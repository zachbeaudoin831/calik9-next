import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cali K9 VIP — $2,497",
  description:
    "The highest-support path through the Cali K9 System: 8 Train With Jas sessions over 12 months, priority booking, a private VIP WhatsApp group, and the full Training Kit.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// $2,497 VIP checkout — payment link not wired yet. Drop it in here.
const CHECKOUT_URL: string | null = null;

const INCLUDED = [
  {
    title: "Everything In Elite (And Academy)",
    desc: "The full 50-Step Roadmap and 8 modules, Saturday Kickstart & Academy Live, the private member community, Certificate of Completion, and the 30-Day Progress Guarantee™ — the full foundation, included.",
    highlight: false,
  },
  {
    title: "8 Session Tokens Over 12 Months",
    desc: "Double Elite's 4 tokens, redeemable for Wednesday Train With Jas small-group coaching across a full year instead of 6 months.",
    highlight: true,
  },
  {
    title: "Private VIP WhatsApp Group",
    desc: "Direct text and video problem-solving support with responses within 24 hours — access every other tier doesn't include.",
    highlight: true,
  },
  {
    title: "Priority Booking & Priority Support",
    desc: "Priority RSVP for Train With Jas sessions, plus priority handling across every touchpoint.",
    highlight: false,
  },
  {
    title: "Full Training Kit Included",
    desc: "The complete Cali K9 Training Kit included at no extra cost — not sold separately for VIP members.",
    highlight: false,
  },
];

const DIFFS = [
  {
    label: "Session Tokens",
    value: "4 → 8",
    desc: "Double the Train With Jas coaching sessions to redeem across your term.",
  },
  {
    label: "Term Length",
    value: "6 → 12 Months",
    desc: "A full year of Academy access and time to use your sessions instead of 6 months.",
  },
  {
    label: "Booking Priority",
    value: "Priority RSVP",
    desc: "VIP members get priority booking access for Wednesday sessions over Elite members.",
  },
  {
    label: "Support Access",
    value: "WhatsApp + Training Kit",
    desc: "A private VIP WhatsApp group for 24-hour text/video support, plus the full Training Kit included.",
  },
];

const YES_ITEMS = [
  "You're overcoming a serious behavior issue and want faster troubleshooting",
  "You have a high-potential dog and want help maximizing it",
  "You want more Train With Jas sessions and a full year to use them, not just 6 months",
  "Your dog's situation benefits from ongoing WhatsApp support between sessions",
  "You want faster progression and more confidence in difficult real-world situations",
];

const NO_ITEMS = [
  "You don't need priority booking or the private WhatsApp group",
  "4 sessions over 6 months is enough support for your situation",
  "You'd rather start at $997 and upgrade later",
];

const PRICE_LIST = [
  "Everything in Elite",
  "12 months of Academy access",
  "8 Train With Jas session tokens",
  "Priority RSVP & booking",
  "Private VIP WhatsApp group",
  "Full Training Kit included",
  "Priority support",
  "Payment plans available",
];

const FAQS = [
  {
    q: "What's the difference between Elite and VIP?",
    a: "Both move you through the same Cali K9 5 Pillar, 50-Step System™. VIP includes a full 12 months of Academy access (vs. 6 for Elite), 8 Train With Jas session tokens instead of 4, priority RSVP/booking for those sessions, a private VIP WhatsApp group with text and video support within 24 hours, priority support, and the full Training Kit included at no extra cost.",
  },
  {
    q: "Is this a subscription?",
    a: "No — VIP is a one-time payment of $2,497, not a recurring charge.",
  },
  {
    q: "How do the 8 Train With Jas session tokens work?",
    a: "Each token books one Wednesday Train With Jas small-group coaching session. VIP includes 8 tokens usable throughout the full 12-month term, with priority RSVP over Elite members. Cancel or reschedule at least 24 hours ahead to keep your token — cancellations inside 24 hours or no-shows count as used.",
  },
];

function PricingCta() {
  return CHECKOUT_URL ? (
    <a href={CHECKOUT_URL} className="btn btn-blue btn-lg w-full text-center">
      Get VIP &mdash; $2,497 &rarr;
    </a>
  ) : (
    <button type="button" className="btn btn-blue btn-lg w-full">
      Get VIP &mdash; $2,497 &rarr;
    </button>
  );
}

export default function VipPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-14 max-md:pt-[100px] max-md:pb-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4">
          <span className="inline-flex items-center gap-2 bg-amber-400 text-[#2b1d05] font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-5">
            ★ VIP Tier &middot; $2,497
          </span>
          <h1 className="font-display text-[clamp(36px,5vw,58px)] text-white leading-[0.95] mb-5">
            THE HIGHEST-SUPPORT PATH THROUGH THE CALI K9 SYSTEM.
          </h1>
          <p className="font-body text-base text-white/70 leading-relaxed max-w-[640px] mx-auto mb-6">
            Whether you are overcoming major behavior issues or building an exceptional dog, VIP
            gives you the highest level of support through the transformation &mdash; 8 Train With
            Jas session tokens redeemable across a full 12 months instead of Elite&rsquo;s 4 tokens
            over 6, priority booking, a private VIP WhatsApp group for text and video support
            within 24 hours, and the full Training Kit included.
          </p>
          <p className="font-ui text-base italic text-blue-200 mb-7">
            &ldquo;I want you guys involved &mdash; tell me exactly what to do with MY dog.&rdquo;
          </p>
          <a href="#pricing" className="btn btn-white btn-lg">
            Get VIP &mdash; $2,497 &rarr;
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
              THE HIGHEST LEVEL OF SUPPORT INSIDE THE SYSTEM
            </h2>
            <p className="font-body text-base text-gray-muted max-w-[600px] mx-auto mt-4">
              VIP moves you through the exact same Cali K9 5 Pillar, 50-Step System&trade; as every
              other tier. What changes is how much of the team &mdash; and Jas himself &mdash; is
              involved as you move through it, so troubleshooting is faster and support is more
              individualized.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className={`flex gap-3.5 rounded-xl p-6 ${
                  item.highlight
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-white border border-border"
                }`}
              >
                <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold">
                  &#10003;
                </span>
                <div>
                  <h5 className="font-body text-[15.5px] font-bold text-ink mb-1.5">{item.title}</h5>
                  <p className="font-body text-[13.5px] text-gray-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-[13.5px] text-gray-muted text-center max-w-[620px] mx-auto mt-7">
            8 session tokens across a full year, priority booking, and the private WhatsApp group
            are what make VIP the highest-support path through the system &mdash; everything else
            scales up from Elite.
          </p>
        </div>
      </section>

      {/* ── Elite vs VIP ── */}
      <section className="py-14 max-md:py-10 bg-ink">
        <div className="max-w-[1000px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-200 block mb-3">
              Elite vs. VIP
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-white max-w-[680px] mx-auto">
              WHAT THE EXTRA $1,500 BUYS YOU INSIDE THE SYSTEM
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-[480px]:grid-cols-1">
            {DIFFS.map((d, i) => (
              <div
                key={d.label}
                className={`rounded-xl p-6 border ${
                  i % 2 ? "bg-amber-400/10 border-amber-400/40" : "bg-white/5 border-white/10"
                }`}
              >
                <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mb-2">
                  {d.label}
                </div>
                <div className={`font-display text-2xl mb-2 ${i % 2 ? "text-amber-400" : "text-white"}`}>
                  {d.value}
                </div>
                <p className="font-body text-[13px] text-white/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Is VIP Right For You?
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink max-w-[680px] mx-auto">
              BUILT FOR OWNERS WHO WANT THE HIGHEST LEVEL OF SUPPORT
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            <div className="bg-white border-2 border-blue-500 rounded-xl p-7">
              <h5 className="font-ui text-sm font-bold tracking-[1px] uppercase text-blue-500 mb-4">
                VIP Is For You If &mdash;
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
                Consider Elite Instead If &mdash;
              </h5>
              <ul className="space-y-2.5">
                {NO_ITEMS.map((item) => (
                  <li key={item} className="font-body text-[14.5px] text-gray-muted leading-normal pl-6 relative">
                    <span className="absolute left-0 text-gray-muted">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/elite" className="font-body text-[13.5px] text-blue-500 underline block mt-5">
                See Elite &mdash; $997 &rarr;
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
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4 text-center">
          <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            Real Members, Real Dogs
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink mb-8">
            VIP MEMBERS MOVING THROUGH THE SYSTEM
          </h2>
          <Image
            src="/images/funnel/vip-session.jpg"
            alt="An online VIP training session with Jas Leverette"
            width={1600}
            height={1167}
            className="w-full h-auto rounded-xl shadow-md"
          />
          <p className="font-body text-[13.5px] text-gray-muted mt-4">
            An online VIP session with Jas &mdash; direct, individualized coaching on your dog.
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
              JOIN VIP TODAY
            </h2>
          </div>
          <div className="border-2 border-amber-400 rounded-[18px] overflow-hidden shadow-lg bg-white">
            <div className="bg-ink text-center px-7 pt-6 pb-5">
              <div className="inline-block bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full mb-3.5">
                VIP
              </div>
              <div className="font-display text-[46px] text-white leading-none">$2,497</div>
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
              VIP FAQ
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
            THE HIGHEST LEVEL OF SUPPORT THROUGH THE TRANSFORMATION.
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-7">
            Whether you&rsquo;re overcoming major behavior issues or building an exceptional dog,
            join VIP for $2,497 and get the full system, 8 Train With Jas session tokens over a
            full 12 months, priority booking, the private VIP WhatsApp group, the full Training
            Kit, and priority support.
          </p>
          <a href="#pricing" className="btn btn-white btn-lg">
            Get VIP &mdash; $2,497 &rarr;
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
