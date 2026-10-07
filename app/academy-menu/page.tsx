import type { Metadata } from "next";
import Link from "next/link";
import PaymentPlansSection from "@/components/PaymentPlansSection";

export const metadata: Metadata = {
  title: "Online Academy",
  description:
    "Three ways to train with Jas Leverette online: the Cali K9 Academy, Elite, and VIP. Same 5 Pillar, 50-Step System — choose how much coaching you want.",
  // Mockup page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

const PLANS = [
  {
    key: "academy",
    name: "Academy",
    tagline: "The complete system, at your own pace",
    price: "$97",
    priceNote: "/month",
    term: "Cancel anytime · No long-term contract",
    href: "/academy",
    featured: false,
    bestFor: "Owners who want the full roadmap and weekly live sessions, and are happy to do the reps themselves.",
    items: [
      "Complete 50-Step Roadmap™ — all 8 modules",
      "Full training video library",
      "Saturday Kickstart + weekly live training with Jas",
      "Weekly trainer-led live training",
      "Progress tracker & personalized training path",
      "Private member community",
    ],
  },
  {
    key: "elite",
    name: "Elite",
    tagline: "The system plus small-group coaching with Jas",
    price: "$997",
    priceNote: " one-time",
    term: "6 months of access · Not a subscription",
    href: "/elite",
    featured: true,
    bestFor: "Owners who want Jas to look at their dog, correct their technique, and keep them accountable.",
    items: [
      "Everything in the Academy, for 6 months",
      "4 Train With Jas coaching sessions",
      "Troubleshooting, video review & feedback",
      "Accountability & roadmap adjustments",
      "Certificate of Completion",
      "30-Day Progress Guarantee™",
    ],
  },
  {
    key: "vip",
    name: "VIP",
    tagline: "The highest-support path through the system",
    price: "$2,497",
    priceNote: " one-time",
    term: "12 months of access · Not a subscription",
    href: "/vip",
    featured: false,
    bestFor: "Owners working through fear, reactivity, or a dog testing every boundary who want the team on call.",
    items: [
      "Everything in Elite, for a full 12 months",
      "8 Train With Jas coaching sessions",
      "Private VIP WhatsApp group — replies within 24 hours",
      "Priority booking & priority support",
      "Full Training Kit included",
      "Payment plans available",
    ],
  },
];

const COMPARE: { label: string; values: [string, string, string] }[] = [
  { label: "Price", values: ["$97 / month", "$997 one-time", "$2,497 one-time"] },
  { label: "Access", values: ["While you're a member", "6 months", "12 months"] },
  { label: "50-Step Roadmap™ & all 8 modules", values: ["✓", "✓", "✓"] },
  { label: "Saturday live training with Jas", values: ["✓", "✓", "✓"] },
  { label: "Private member community", values: ["✓", "✓", "✓"] },
  { label: "Train With Jas coaching sessions", values: ["—", "4 sessions", "8 sessions"] },
  { label: "Video review & personal feedback", values: ["—", "✓", "✓ Priority"] },
  { label: "Private WhatsApp support", values: ["—", "—", "✓ Within 24 hours"] },
  { label: "Training Kit", values: ["Optional add-on", "Optional add-on", "Included"] },
];

const STATS = [
  { big: "10,000+", small: "Dogs Trained by Jas" },
  { big: "15+ Yrs", small: "Professional Experience" },
  { big: "Netflix", small: "Canine Intervention" },
  { big: "4.9★", small: "Average Member Rating" },
];

export default function OnlineCoursesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-14 max-md:pt-[100px] max-md:pb-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[820px] mx-auto px-6 max-[480px]:px-4">
          <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-[#6A9FFF] block mb-4">
            Cali K9&reg; Online Training
          </span>
          <h1 className="font-display text-[clamp(36px,5vw,58px)] text-white leading-[0.95] mb-4">
            TRAIN WITH <span className="text-[#F59E0B]">JAS LEVERETTE</span> FROM HOME
          </h1>
          <h2 className="font-display text-[clamp(22px,2.6vw,32px)] text-white/90 leading-tight mb-5">
            ONE SYSTEM. THREE WAYS IN &mdash;{" "}
            <span className="text-[#6A9FFF]">CHOOSE HOW MUCH COACHING YOU WANT.</span>
          </h2>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-[640px] mx-auto mb-8">
            Every program runs on the same Cali K9 5 Pillar, 50-Step System&trade; Jas uses with
            celebrity clients and on Netflix. The roadmap is identical. What changes is how
            involved Jas and the team are while you work through it.
          </p>
          <a href="#plans" className="btn btn-gold btn-lg">
            Compare The Programs &rarr;
          </a>
          <div className="flex items-center justify-center gap-x-10 gap-y-5 flex-wrap mt-12 pt-8 border-t border-white/[0.12]">
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

      {/* ── Plans ── */}
      <section className="py-16 max-md:py-10 bg-cream" id="plans">
        <div className="max-w-[1140px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Choose Your Program
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-[0.95] text-ink">
              ACADEMY, ELITE, OR VIP
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 items-stretch max-lg:grid-cols-1 max-lg:max-w-[520px] max-lg:mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.key}
                className={`relative flex flex-col rounded-[18px] overflow-hidden bg-white shadow-md ${
                  plan.featured ? "border-2 border-amber-400 lg:-mt-3 lg:mb-3" : "border border-border"
                }`}
              >
                {plan.featured && (
                  <div className="bg-amber-400 text-[#2b1d05] text-center font-ui text-[11px] font-bold tracking-[1.5px] uppercase py-1.5">
                    Most Popular
                  </div>
                )}
                <div className="bg-ink text-center px-6 pt-6 pb-5">
                  <div className="font-display text-[34px] text-white leading-none">{plan.name.toUpperCase()}</div>
                  <p className="font-body text-[13px] text-white/60 mt-2 min-h-[38px]">{plan.tagline}</p>
                  <div className="font-display text-[46px] text-white leading-none mt-3">
                    {plan.price}
                    <span className="font-body text-[14px] text-white/60">{plan.priceNote}</span>
                  </div>
                  <p className="font-ui text-[11px] tracking-[1px] uppercase text-white/45 mt-2">{plan.term}</p>
                </div>
                <div className="px-7 py-6 flex flex-col grow max-[480px]:px-5">
                  <ul className="space-y-2.5 mb-5">
                    {plan.items.map((item) => (
                      <li key={item} className="font-body text-[14.5px] text-ink/80 leading-normal pl-6 relative">
                        <span className="absolute left-0 text-blue-500 font-bold">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-cream rounded-lg px-4 py-3 mb-6">
                    <div className="font-ui text-[10.5px] font-bold tracking-[1.5px] uppercase text-blue-500 mb-1">
                      Best For
                    </div>
                    <p className="font-body text-[13.5px] text-ink/75 leading-snug">{plan.bestFor}</p>
                  </div>
                  <Link
                    href={plan.href}
                    className={`btn btn-lg w-full text-center mt-auto ${plan.featured ? "btn-gold" : "btn-blue"}`}
                  >
                    Learn More About {plan.name} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare ── */}
      <section className="py-16 max-md:py-10">
        <div className="max-w-[960px] mx-auto px-6 max-[480px]:px-4">
          <div className="text-center mb-9">
            <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Side By Side
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink">
              WHAT CHANGES BETWEEN THE THREE
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] border-collapse bg-white">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left font-ui text-[12px] font-bold tracking-[1.5px] uppercase px-5 py-4 w-[34%]">
                    &nbsp;
                  </th>
                  {PLANS.map((p) => (
                    <th
                      key={p.key}
                      className={`font-display text-xl font-normal px-4 py-4 ${p.featured ? "text-amber-400" : ""}`}
                    >
                      {p.name.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.label} className={i % 2 ? "bg-cream/60" : ""}>
                    <td className="font-body text-[14px] font-semibold text-ink px-5 py-3.5 border-t border-border">
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className={`font-body text-[14px] text-center px-4 py-3.5 border-t border-border ${
                          v === "—" ? "text-gray-muted/60" : v.startsWith("✓") ? "text-blue-500 font-semibold" : "text-ink/80"
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="border-t border-border px-5 py-4" />
                  {PLANS.map((p) => (
                    <td key={p.key} className="border-t border-border px-4 py-4 text-center">
                      <Link href={p.href} className="font-ui text-[13px] font-bold tracking-[1px] uppercase text-blue-500 underline">
                        See {p.name} &rarr;
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PaymentPlansSection />

      {/* ── Not sure ── */}
      <section className="py-16 max-md:py-10 bg-cream text-center">
        <div className="max-w-[680px] mx-auto px-6 max-[480px]:px-4">
          <span className="font-ui text-[14px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            Not Sure Which One?
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[0.95] text-ink mb-4">
            LET YOUR DOG DECIDE
          </h2>
          <p className="font-body text-base text-[#4b4f58] leading-relaxed mb-7">
            Take the Free Behavior Assessment. Thirteen questions, about two minutes, and
            you&rsquo;ll get a recommendation matched to your dog &mdash; or watch Jas teach the
            framework live at the free Saturday masterclass before you choose.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/free-behavior-assessment" className="btn btn-blue btn-lg">
              Take The Free Assessment &rarr;
            </Link>
            <Link href="/free-masterclass" className="btn btn-outline btn-lg">
              Join The Free Masterclass
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
