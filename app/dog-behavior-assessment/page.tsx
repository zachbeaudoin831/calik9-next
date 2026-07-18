import type { Metadata } from "next";
import SurveyEmbed from "./SurveyEmbed";

export const metadata: Metadata = {
  title: "Dog Behavior Assessment",
  description:
    "Answer a few quick questions about your dog's behavior and Cali K9® will point you toward the right next step. Free, takes about 2 minutes.",
  openGraph: {
    title: "Dog Behavior Assessment | Cali K9®",
    description:
      "Answer a few quick questions about your dog's behavior and Cali K9® will point you toward the right next step. Free, takes about 2 minutes.",
    url: "https://calik9.com/dog-behavior-assessment",
    images: ["https://calik9.com/images/cdn/66a311486dce452f20d2ffcd.webp"],
  },
};

export default function DogBehaviorAssessmentPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden pt-[128px] pb-16 max-md:pt-[168px] max-md:pb-10 min-h-screen"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
              Free &middot; Takes 2 Minutes
            </span>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] text-white leading-[0.95] mb-4">
              YOUR DOG&rsquo;S BEHAVIOR <span className="text-white/50">ASSESSMENT</span>
            </h1>
            <p className="font-body text-base text-white/70 leading-relaxed max-w-[540px] mx-auto">
              Answer a few quick questions and we&rsquo;ll point you toward the
              right next step for your dog — the same way we started with
              10,000+ dogs before yours.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 max-[480px]:p-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <SurveyEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
