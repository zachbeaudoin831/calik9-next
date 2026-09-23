import type { Metadata } from "next";
import Link from "next/link";
import AssessmentQuiz from "./AssessmentQuiz";

export const metadata: Metadata = {
  title: "Free Behavior Assessment — Which Dog Do You Have?",
  description:
    "Take the free 2-minute assessment to discover what's driving your dog's behavior — and what to work on next. 13 questions, personalized results.",
  // Quiz funnel draft. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// Authority bar under the hero — nothing else lives here.
const TRUST_ITEMS = [
  { big: "10,000+", small: "Dogs Trained" },
  { big: "4.9★", small: "" },
  { big: "15+", small: "Years" },
];

export default function FreeBehaviorAssessmentPage() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-10 max-md:pt-[100px] max-md:pb-8 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
            ★ Free Behavior Assessment
          </span>
          <h1 className="font-display text-[clamp(40px,6vw,68px)] text-white leading-[0.95] mb-5">
            WHICH DOG DO YOU HAVE?
          </h1>
          <video
            className="w-full max-w-[760px] mx-auto rounded-xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)] mb-6"
            poster="/images/funnel/quiz-video-thumb.jpg"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6ab16f43ff484614db830523.mp4"
              type="video/mp4"
            />
          </video>
          <p className="font-body text-lg max-md:text-base text-white/80 leading-relaxed max-w-[600px] mx-auto">
            Take the free 2-minute assessment to discover what&rsquo;s driving your dog&rsquo;s
            behavior &mdash; and what to work on next.
          </p>
          <p className="font-ui text-[12.5px] font-bold tracking-[1.5px] uppercase text-white/60 mt-5">
            13 Questions &nbsp;&bull;&nbsp; 2 Minutes &nbsp;&bull;&nbsp; Personalized Results
          </p>
        </div>
      </section>

      {/* ── 2. Authority bar ── */}
      <div className="bg-ink py-4 border-b border-white/10">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 flex items-center justify-center gap-6 max-md:gap-4 flex-wrap text-center">
          <span className="bg-white text-ink font-ui text-[11px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-sm">
            Netflix
          </span>
          {TRUST_ITEMS.map((item) => (
            <span
              key={item.big}
              className="font-ui text-[12px] font-semibold tracking-[0.5px] uppercase text-white/50"
            >
              <b className="text-white">{item.big}</b> {item.small}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3–5. Question 1 immediately → Q13 → contact gate ── */}
      <section className="py-12 max-md:py-8 bg-cream" id="quiz">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <AssessmentQuiz />
        </div>
        <p className="font-ui text-xs text-gray-muted/70 text-center mt-12">
          &copy; 2026 Cali K9&reg; &middot;{" "}
          <Link href="/privacy-policy" className="hover:text-ink">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms-of-service" className="hover:text-ink">
            Terms
          </Link>
        </p>
      </section>
    </main>
  );
}
