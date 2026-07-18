import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Free Cali K9 Community",
  description:
    "We don't leave any dog behind. Join the free Cali K9® dog training community and start improving your dog's behavior today.",
  // Funnel destination reached via survey conditional logic — keep out of search.
  robots: { index: false, follow: false },
};

export default function FreeAssessmentCommunityPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden pt-[128px] pb-20 max-md:pt-28 max-md:pb-12 min-h-screen"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-center">
          <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-6">
            🐾 Free Community
          </span>

          <h1 className="font-display text-[clamp(38px,5.5vw,60px)] text-white leading-[0.95] mb-6">
            WE DON&rsquo;T LEAVE ANY DOG{" "}
            <span className="text-white/50">BEHIND</span>
          </h1>

          <p className="font-body text-lg text-white/75 leading-relaxed mb-10 max-w-[560px] mx-auto">
            Based on your budget, we believe you would benefit from joining our
            free community.
          </p>

          {/* VSL placeholder — swap for the real video when ready */}
          <div className="relative w-full aspect-video rounded-xl bg-black/40 border border-white/[0.15] mb-10 flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="w-20 h-20 rounded-full bg-white/[0.12] border border-white/[0.25] flex items-center justify-center mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white ml-1"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="font-ui text-xs font-bold tracking-[2px] uppercase text-white/50">
              Video Coming Soon
            </p>
          </div>

          <a
            href="https://www.skool.com/cali-k9-dogtraining"
            className="btn btn-white btn-lg max-md:w-full text-center"
          >
            Join the Free Community &rarr;
          </a>
          <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
            100% Free &middot; Start Training Today
          </p>
        </div>
      </section>
    </main>
  );
}
