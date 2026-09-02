import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "../starter-bundle/Countdown";
import BundleCta from "../starter-bundle/BundleCta";

export const metadata: Metadata = {
  title: "Start With The Starter Bundle",
  description:
    "Not ready for the full Academy? Start the Cali K9 5 Pillar, 50-Step System™ anyway — the exact first 10 steps, one-time $27.",
  // Post-registration offer page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

const BUNDLE_ITEMS = [
  {
    name: "Quick-Start Video Training — Steps 1–10",
    desc: "Real, filmed lessons from Jas covering the first-step training that builds communication and structure from day one: boundaries, food value, hand-feeding, leash-on approach, household rules",
    value: "$97 value",
    swatch: "linear-gradient(160deg, #1A3FAB, #122E85)",
    icon: "play",
  },
  {
    name: "10-Step Roadmap & Progress Tracker",
    desc: "Your first 10 steps of the Cali K9 50-Step Roadmap — know exactly which step you're on and what comes next",
    value: "$37 value",
    swatch: "linear-gradient(160deg, #5468e8, #1A3FAB)",
    icon: "map",
  },
  {
    name: "7-Day Training Plan",
    desc: "A structured, day-by-day checklist that builds engagement and motivation from the very first session — no guessing what to do next",
    value: "$47 value",
    swatch: "linear-gradient(160deg, #4b5fe8, #2c3fc9)",
    icon: "calendar",
  },
  {
    name: "Equipment Checklist",
    desc: "Leash, rewards, training platform — the proper tool use behind every step, so you're set up to execute correctly from day one",
    value: "$17 value",
    swatch: "linear-gradient(160deg, #232838, #12162a)",
    icon: "list",
  },
  {
    name: "Troubleshooting Guide",
    desc: "What to do when your dog isn't responding the way the video shows",
    value: "$25 value",
    swatch: "linear-gradient(160deg, #2c3149, #151827)",
    icon: "help",
  },
];

// Cover-art placeholders drawn in code — swap for real cover images when the
// finished art exists.
const BUNDLE_VIDEO =
  "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6660dc34c6bcc82fd3e84b3a.mp4";

const COVERS = [
  {
    title: "10-Step Quick-Start Roadmap",
    tag: "GUIDE 01",
    bg: "linear-gradient(160deg, #1A3FAB, #122E85)",
    accent: "#F59E0B",
    icon: "map",
  },
  {
    title: "7-Day Training Plan",
    tag: "GUIDE 02",
    bg: "linear-gradient(160deg, #5468e8, #1A3FAB)",
    accent: "#FFFFFF",
    icon: "calendar",
  },
  {
    title: "Equipment Checklist",
    tag: "GUIDE 03",
    bg: "linear-gradient(160deg, #232838, #12162a)",
    accent: "#6A9FFF",
    icon: "list",
  },
  {
    title: "Troubleshooting Guide",
    tag: "GUIDE 04",
    bg: "linear-gradient(160deg, #2c3149, #151827)",
    accent: "#F59E0B",
    icon: "help",
  },
];

const COVER_POSITIONS = [
  "top-2 left-0 -rotate-[10deg]",
  "top-[34px] right-6 rotate-[8deg]",
  "bottom-[34px] left-4 rotate-[7deg] z-[1]",
  "bottom-3 right-0.5 -rotate-[6deg] z-[4]",
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is this a subscription?",
    a: "No. This is a one-time payment of $27 (plus the optional $17 add-on). Nothing recurs.",
  },
  {
    q: "Can I still join the Academy, Elite, or VIP later?",
    a: "Yes — nothing here locks you out of anything. This bundle just gets you moving today; you can join Academy, Elite, or VIP whenever it makes sense for you.",
  },
  {
    q: "How do I access it?",
    a: (
      <>
        Instantly. You&rsquo;ll get login details by email the moment your payment goes through,
        along with a link to{" "}
        <Link href="/book-your-call" className="text-blue-500 underline">
          book your free evaluation call
        </Link>{" "}
        whenever you&rsquo;re ready for it.
      </>
    ),
  },
  {
    q: "What happens on the evaluation call?",
    a: "It's a 20-minute call with our team, held with a $7 refundable reservation credited toward any program, to talk through your dog's specific situation and point you to whatever's next — whether that's the Academy, Elite, VIP, or nothing at all. No pressure, no sales script.",
  },
  {
    q: "What if I decide not to continue after this?",
    a: "No problem — the Starter Bundle is yours to keep either way. There's no obligation to join the Academy.",
  },
];

function CoverIcon({ name, size = 16 }: { name: string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 2,
  };
  switch (name) {
    case "play":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M4 19V5a2 2 0 0 1 2-2h12l2 2v14l-2-2H6a2 2 0 0 0-2 2z" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M3 9h18M8 2v4M16 2v4" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.5-2.3 1.7-2.3 3.2M12 17h.01" />
        </svg>
      );
  }
}

function LockIcon() {
  return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </svg>
  );
}

function ProductMockup() {
  return (
    <div className="relative max-w-[560px] mx-auto mt-10">
      {/* Value badge */}
      <div className="absolute -top-6 right-0 z-[6] bg-blue-500 text-white text-center px-4 py-2.5 rounded-xl rotate-[7deg] shadow-[0_12px_26px_rgba(26,63,171,0.4)] max-md:static max-md:inline-block max-md:rotate-0 max-md:mb-2.5">
        <div className="font-display text-[15px] tracking-[0.4px]">$223 Value</div>
        <div className="font-ui text-[9.5px] font-semibold uppercase tracking-[0.6px] mt-0.5">
          Today Just $27
        </div>
      </div>

      <div className="relative h-[400px] mx-auto max-md:h-auto max-md:flex max-md:flex-col max-md:items-center max-md:gap-4">
        {/* Laptop playing the real bundle video */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[300px] z-[2] max-md:static max-md:translate-x-0 max-md:w-[88%] max-md:max-w-[280px]">
          <div className="rounded-[10px_10px_3px_3px] border-[6px] border-[#1c2440] aspect-[16/10] relative overflow-hidden bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src={BUNDLE_VIDEO} type="video/mp4" />
            </video>
          </div>
          <div
            className="h-[9px] rounded-b-lg -mx-2.5"
            style={{ background: "linear-gradient(180deg, #2a2e38, #191b21)" }}
          />
        </div>

        {/* Phone */}
        <div className="absolute right-[22px] bottom-1.5 w-[104px] bg-ink rounded-[20px] px-1.5 py-[7px] shadow-[0_16px_30px_rgba(17,18,20,0.3)] border-2 border-[#2a2c31] z-[3] max-md:hidden">
          <div className="w-8 h-1 bg-[#2a2c31] rounded mx-auto mb-1.5" />
          <div className="bg-white rounded-xl px-1.5 py-[7px] flex flex-col gap-1">
            {[
              { label: "Step 1 — Boundaries", state: "done" },
              { label: "Step 2 — Food Value", state: "done" },
              { label: "Step 3 — Hand-Feeding", state: "active" },
              { label: "Step 4 — Motivation", state: "todo" },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex items-center gap-[5px] text-[7.5px] px-1 py-1 rounded-[5px] ${
                  row.state === "active"
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-[#4B4F58]"
                }`}
              >
                <span
                  className={`w-[11px] h-[11px] rounded-full flex items-center justify-center text-[6px] shrink-0 text-white ${
                    row.state === "done"
                      ? "bg-blue-500"
                      : row.state === "active"
                        ? "bg-blue-700"
                        : "bg-[#eceef4]"
                  }`}
                >
                  {row.state === "done" ? "✓" : row.state === "active" ? "▶" : ""}
                </span>
                {row.label}
              </div>
            ))}
          </div>
        </div>

        {/* Guide covers — drawn placeholder cover art */}
        <div className="contents max-md:grid max-md:grid-cols-2 max-md:gap-3 max-md:w-full max-md:max-w-[280px]">
          {COVERS.map((cover, i) => (
            <div
              key={cover.title}
              className={`absolute w-[96px] aspect-[3/4] rounded-[9px] overflow-hidden flex flex-col text-white shadow-[0_12px_22px_rgba(17,18,20,0.25)] border-l-2 border-white/10 ${COVER_POSITIONS[i]} max-md:static max-md:rotate-0 max-md:w-auto`}
              style={{ background: cover.bg }}
            >
              <div className="flex items-center justify-between px-2 pt-2">
                <span className="font-ui text-[6px] font-bold tracking-[0.5px] text-white/80">
                  CALI K9&reg;
                </span>
                <span
                  className="font-ui text-[5.5px] font-bold tracking-[0.5px]"
                  style={{ color: cover.accent }}
                >
                  {cover.tag}
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-1.5 px-2 text-center">
                <span className="w-6 h-6 rounded-full bg-white/[0.12] border border-white/[0.25] flex items-center justify-center">
                  <CoverIcon name={cover.icon} size={12} />
                </span>
                <span className="font-ui text-[8.5px] font-bold leading-[1.25] uppercase tracking-[0.3px]">
                  {cover.title}
                </span>
              </div>
              <div className="px-2 pb-2">
                <div className="h-[2px] w-7 mx-auto mb-1 rounded" style={{ background: cover.accent }} />
                <div className="font-ui text-[5px] font-semibold tracking-[0.5px] text-white/60 text-center uppercase">
                  The 5 Pillar, 50-Step System&trade;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center font-ui text-xs font-semibold tracking-[1.2px] text-ink/60 uppercase mt-3.5">
        Cali K9 Foundation Starter Bundle
      </div>
    </div>
  );
}

export default function StarterBundleDownsellPage() {
  return (
    <main className="bg-white">
      {/* ── Confirmation strip ── */}
      <div className="pt-[68px]">
        <div className="bg-blue-50 border-b border-border text-center px-4 py-3 font-body text-[13.5px] font-semibold text-blue-700">
          <svg
            width={14}
            height={14}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            className="inline align-[-2px] mr-1.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Thanks for staying for today&rsquo;s live training &mdash; one quick thing before you go...
        </div>
      </div>

      {/* ── Hero + offer ── */}
      <section className="pt-12 pb-11 text-center">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4">
          <h1 className="font-display text-[clamp(30px,5vw,44px)] text-ink leading-[1.05] max-w-[600px] mx-auto mb-4">
            NOT READY FOR THE FULL ACADEMY YET? START WITH THIS INSTEAD.
          </h1>
          <p className="font-body text-[17px] text-[#4b4f58] leading-relaxed max-w-[560px] mx-auto">
            If the $97/month Academy isn&rsquo;t the right fit for you right now, here&rsquo;s
            the easiest way to start today anyway &mdash; begin learning{" "}
            <strong className="text-ink">The Cali K9 5 Pillar, 50-Step System&trade;</strong> with
            the exact <strong className="text-ink">first 10 steps</strong>, the same foundation
            phase every Academy member starts with, for a{" "}
            <strong className="text-ink">one-time $27</strong>.
          </p>

          <ProductMockup />

          <Countdown />

          {/* Price card */}
          <div className="max-w-[640px] mx-auto mt-8 border-2 border-blue-500 rounded-[18px] overflow-hidden shadow-lg text-left">
            <div className="bg-ink text-center px-7 pt-6 pb-5">
              <div className="inline-block bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full mb-3.5">
                Today's Training Special
              </div>
              <h2 className="font-display text-2xl text-white mb-3.5">
                CALI K9 FOUNDATION STARTER BUNDLE
              </h2>
              <div className="flex items-baseline justify-center gap-3.5">
                <span className="font-display text-xl text-white/40 line-through">$223</span>
                <span className="font-display text-[46px] text-white">
                  $27 <span className="font-body text-[15px] text-white/60">one-time</span>
                </span>
              </div>
              <p className="font-body text-[12.5px] text-white/60 mt-2">
                Not a subscription. Instant access. No recurring charge.
              </p>
            </div>

            <div className="px-8 pt-6 pb-2 max-[480px]:px-5">
              {BUNDLE_ITEMS.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex justify-between gap-3.5 items-start py-3.5 ${
                    i < BUNDLE_ITEMS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div
                      className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center shrink-0 shadow-[0_6px_14px_rgba(17,18,20,0.15)]"
                      style={{ background: item.swatch }}
                    >
                      <CoverIcon name={item.icon} />
                    </div>
                    <div>
                      <div className="font-body text-[14.5px] font-bold text-ink">{item.name}</div>
                      <div className="font-body text-[12.5px] text-gray-muted mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <div className="font-ui text-[13px] font-semibold text-gray-muted line-through whitespace-nowrap">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cream px-8 pt-5 pb-6 text-center">
              <div className="font-body text-[13.5px] text-gray-muted mb-1">
                Total Value: <b className="line-through text-ink">$223</b>
              </div>
              <div className="font-display text-[19px] text-ink">
                Today, Just <b className="text-blue-700 text-[26px]">$27</b>
              </div>
            </div>
          </div>

          <BundleCta />
        </div>
      </section>

      {/* ── Roadmap centerpiece ── */}
      <section className="pb-11">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4">
          <div className="bg-ink rounded-[20px] p-9 max-md:p-5 text-white max-w-[660px] mx-auto">
            <div className="text-center font-ui text-[12.5px] font-semibold tracking-[2px] uppercase text-blue-200 mb-1.5">
              &mdash; The Cali K9 5 Pillar, 50-Step System&trade; &mdash;
            </div>
            <div className="text-center font-display text-[22px] max-md:text-lg mb-5">
              THIS STARTER BUNDLE IS STEPS 1&ndash;10 OF THE FULL 50-STEP ROADMAP
            </div>
            <div className="grid grid-cols-5 gap-[5px] mb-2">
              {["Start Here", "Foundations", "Engagement", "Communication", "Basic Training"].map(
                (phase) => (
                  <span
                    key={phase}
                    className="font-ui text-[8.5px] text-center text-white/55 uppercase tracking-[0.2px] leading-[1.3]"
                  >
                    {phase}
                  </span>
                ),
              )}
            </div>
            <div className="grid grid-cols-10 gap-[5px] mb-5">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-[7px] bg-blue-500 flex items-center justify-center font-ui text-xs font-semibold text-white"
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 mb-6">
              {["Steps 11–20", "Steps 21–30", "Steps 31–40", "Steps 41–50"].map((range) => (
                <div
                  key={range}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-[10px] px-4 py-3"
                >
                  <span className="font-ui text-[13px] font-semibold text-white/45 tracking-[0.5px]">
                    {range}
                  </span>
                  <span className="flex items-center gap-1.5 font-ui text-[10.5px] text-white/35 uppercase tracking-[1px]">
                    <LockIcon />
                    Locked
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center border-t border-white/[0.12] pt-5">
              <p className="font-body text-[13.5px] text-white/65 leading-relaxed mb-3.5">
                Steps 1&ndash;10 are yours today &mdash; your first step into engagement,
                motivation, communication, and structure. The complete Cali K9 5 Pillar, 50-Step
                System&trade; &mdash; Positions, Leash Work, Distractions, Real-World &amp;
                Off-Leash Reliability &mdash; lives inside:
              </p>
              <Link href="/academy" className="btn btn-blue">
                Cali K9 Academy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[640px] mx-auto border-t border-border" />

      {/* ── Why start now ── */}
      <section className="py-11 text-center">
        <div className="max-w-[640px] mx-auto px-6 max-[480px]:px-4">
          <h3 className="font-display text-[24px] text-ink mb-3.5">
            WHY START NOW INSTEAD OF WAITING?
          </h3>
          <p className="font-body text-[14.5px] text-[#4b4f58] leading-[1.7]">
            Most dogs don&rsquo;t fail because their owner doesn&rsquo;t care &mdash; they fail
            because there&rsquo;s no starting point. You just watched today&rsquo;s training, and
            you don&rsquo;t have to decide on the full Academy today to start seeing results.
            Start learning the Cali K9 5 Pillar, 50-Step System&trade;, start using the same tools
            we use, and start seeing wins with your dog &mdash; these are the same first 10 steps
            every Academy member starts with, so you can begin right now while you decide
            what&rsquo;s next.
          </p>
          <blockquote className="max-w-[560px] mx-auto mt-5 border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink text-left">
            &ldquo;There are no bad dogs &mdash; just uninformed owners.&rdquo;
            <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
              &mdash; Jas Leverette
            </span>
          </blockquote>
        </div>
      </section>

      {/* ── Upsell note ── */}
      <div className="max-w-[640px] mx-auto px-6 max-[480px]:px-4">
        <div className="bg-cream border border-border rounded-[14px] px-7 py-5 max-[480px]:px-4 text-center">
          <div className="font-ui text-[11.5px] font-bold tracking-[1.2px] uppercase text-blue-700 mb-2">
            Just So You Know
          </div>
          <p className="font-body text-[13.5px] text-[#4b4f58] leading-relaxed">
            This Starter Bundle is Steps 1&ndash;10 of the complete Cali K9 5 Pillar, 50-Step
            System&trade; &mdash; plus a free evaluation call once you&rsquo;ve worked through it.
            If you love it, you&rsquo;ll get the option to continue with the complete system
            whenever you&rsquo;re ready &mdash; no pressure, just an option.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="pt-11 pb-14 max-md:pb-24">
        <div className="max-w-[640px] mx-auto px-6 max-[480px]:px-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="border-b border-border py-4">
              <div className="font-body text-[14.5px] font-bold text-ink mb-1.5">{faq.q}</div>
              <div className="font-body text-[13.5px] text-[#4b4f58] leading-relaxed">{faq.a}</div>
            </div>
          ))}

          <p className="font-ui text-xs text-gray-muted/70 text-center mt-12">
            &copy; 2026 Cali K9&reg; &middot;{" "}
            <Link href="/privacy-policy" className="hover:text-ink">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:text-ink">
              Terms
            </Link>
            {" · "}
            <Link href="/refund-policy" className="hover:text-ink">
              Refund Policy
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
