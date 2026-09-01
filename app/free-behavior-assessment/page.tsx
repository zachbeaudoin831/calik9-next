import type { Metadata } from "next";
import Link from "next/link";
import AssessmentQuiz from "./AssessmentQuiz";

export const metadata: Metadata = {
  title: "Free Behavior Assessment — Which Dog Do You Have?",
  description:
    "Answer 13 quick questions and find out exactly what part of the Cali K9 5 Pillar, 50-Step System™ your dog needs next — from Chaos, to Control, to Freedom.",
  // Quiz funnel draft. Keep out of search while in review.
  robots: { index: false, follow: false },
};

const TRUST_ITEMS = [
  { big: "10,000+", small: "Dogs Trained" },
  { big: "4.9★", small: "Average Rating" },
  { big: "15+", small: "Years Experience" },
];

const WHY_ITEMS = [
  {
    title: "No Wrong Answer",
    body: "Every path leads somewhere real — Academy, Elite, or VIP.",
  },
  {
    title: "Not A Sales Script",
    body: "This routes you based on your answers, not on pushing the most expensive option.",
  },
];

export default function FreeBehaviorAssessmentPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-12 max-md:pt-[100px] max-md:pb-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
            ★ Free Behavior Assessment &middot; 2 Minutes &middot; Personalized Results
          </span>
          <h1 className="font-display text-[clamp(40px,6vw,68px)] text-white leading-[0.95] mb-5">
            WHICH DOG DO YOU HAVE?
          </h1>
          <p className="font-body text-base text-white/70 leading-relaxed max-w-[600px] mx-auto">
            Every dog needs training &mdash; but every dog starts from a different place. Fearful
            &amp; reactive. Pushy &amp; overconfident. Or a good dog that&rsquo;s simply never been
            trained. Answer a few quick questions and we&rsquo;ll show you which one you&rsquo;ve
            got, and exactly what part of the Cali K9 5 Pillar, 50-Step System&trade; your dog
            needs next &mdash; the roadmap from Chaos, to Control, to Freedom.
          </p>
        </div>
      </section>

      {/* ── Mini trust bar ── */}
      <div className="bg-ink py-4 border-b border-white/10">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 flex items-center justify-center gap-6 flex-wrap text-center">
          <span className="bg-white text-ink font-ui text-[11px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-sm">
            Netflix
          </span>
          {TRUST_ITEMS.map((item) => (
            <span
              key={item.small}
              className="font-ui text-[12px] font-semibold tracking-[0.5px] uppercase text-white/50"
            >
              <b className="text-white">{item.big}</b> {item.small}
            </span>
          ))}
          <span className="font-ui text-[12px] font-semibold tracking-[0.5px] uppercase text-white/50 max-md:hidden">
            <b className="text-white">5 Pillars &rarr; 8 Modules &rarr; 50 Simple Steps</b> &mdash;
            One Fully Trained Dog
          </span>
        </div>
      </div>

      {/* ── Quiz ── */}
      <section className="py-16 max-md:py-10 bg-cream" id="quiz">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <blockquote className="max-w-[560px] mx-auto mb-6 border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink text-left">
            &ldquo;There are no bad dogs &mdash; just uninformed owners.&rdquo;
            <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
              &mdash; Jas Leverette
            </span>
          </blockquote>
          <AssessmentQuiz />
        </div>
      </section>

      {/* ── Why-strip ── */}
      <section className="py-14 max-md:py-10 bg-white">
        <div className="max-w-[840px] mx-auto px-10 max-md:px-6 grid grid-cols-3 gap-5 text-center max-md:grid-cols-1">
          {WHY_ITEMS.map((item) => (
            <div key={item.title}>
              <h5 className="font-ui text-sm font-bold text-ink mb-1.5">{item.title}</h5>
              <p className="font-body text-[13px] text-gray-muted leading-normal">{item.body}</p>
            </div>
          ))}
          <div>
            <h5 className="font-ui text-sm font-bold text-ink mb-1.5">
              Still Want To Talk First?
            </h5>
            <p className="font-body text-[13px] text-gray-muted leading-normal">
              Skip the quiz and{" "}
              <Link
                href="/evaluation-with-behavior-specialist"
                className="text-blue-500 underline"
              >
                book a $27 evaluation
              </Link>{" "}
              instead.
            </p>
          </div>
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
