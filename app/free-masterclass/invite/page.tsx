import type { Metadata } from "next";
import Masterclass from "../Masterclass";
import EventDate from "../EventDate";

export const metadata: Metadata = {
  title: "Your Next Step: Free Live Masterclass",
  description:
    "Based on your Free Behavior Assessment, the free live masterclass with Jas Leverette is the best next step for you and your dog. Live Wednesdays and Saturdays on Zoom.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// Landing page for the Academy-tier quiz result. Same masterclass page,
// with a personalized intro band on top that connects the assessment to
// the invitation.
export default function MasterclassInvitePage() {
  return (
    <Masterclass
      intro={
        <section className="bg-blue-700 text-white pt-[108px] pb-12 max-md:pt-[96px] max-md:pb-10">
          <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4 text-center">
            <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-200 block mb-4">
              Your Free Behavior Assessment Results
            </span>
            <h1 className="font-display text-[clamp(34px,5vw,56px)] leading-[0.98] mb-5">
              BASED ON YOUR ASSESSMENT, YOU&rsquo;D BENEFIT MOST FROM JOINING OUR FREE MASTERCLASS
              THIS WEEK
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed max-w-[640px] mx-auto mb-7">
              Live twice a week with <strong className="text-white">Jas Leverette</strong>, host of
              Netflix&rsquo;s <em>Canine Intervention</em>. In one session you&rsquo;ll see the exact
              framework your assessment points to &mdash; and what to do first with your dog this
              week.
            </p>
            <EventDate center />
            <a href="#register" className="btn btn-gold btn-lg mt-8 inline-block">
              Save My Free Seat &rarr;
            </a>
            <p className="font-body text-[12.5px] text-white/50 mt-4">
              Free &middot; Live on Zoom &middot; Replay sent to everyone who registers
            </p>
          </div>
        </section>
      }
    />
  );
}
