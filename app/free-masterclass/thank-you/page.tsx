import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import EventDate from "../EventDate";

export const metadata: Metadata = {
  title: "Your Seat Is Reserved",
  description:
    "You're registered for Jas Leverette's free live dog training masterclass. Here's what to do before class starts.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    num: "1",
    title: "CHECK YOUR EMAIL",
    desc: "Your Zoom link and registration details are on the way, along with your free 50-Step Dog Transformation Roadmap. Not there in a few minutes? Check spam and promotions.",
  },
  {
    num: "2",
    title: "BLOCK OFF THE TIME",
    desc: "This is a live session, not a replay library. Add it to your calendar now so Saturday doesn't get away from you.",
  },
  {
    num: "3",
    title: "SHOW UP READY",
    desc: "Bring something to take notes with, your questions, and have your dog nearby — you'll want to try what Jas shows you.",
  },
];

export default function MasterclassThankYouPage() {
  return (
    <main>
      {/* Meta Pixel: registration event. Base pixel loads in the root layout. */}
      <Script id="meta-pixel-masterclass-reg" strategy="afterInteractive">
        {`(function fireReg(tries){
          if (typeof window.fbq === 'function') { window.fbq('track','CompleteRegistration'); }
          else if (tries > 0) { setTimeout(function(){ fireReg(tries - 1); }, 300); }
        })(20);`}
      </Script>

      {/* ── Confirmation hero ── */}
      <section
        className="relative overflow-hidden pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            &#10003; Seat Reserved
          </span>
          <h1 className="font-display text-[clamp(40px,5.5vw,64px)] text-white leading-[0.95] mb-5">
            YOU&rsquo;RE IN. <span className="text-[#6A9FFF]">SEE YOU SATURDAY.</span>
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-[560px] mx-auto mb-7">
            Your seat at Jas&rsquo;s free live masterclass is confirmed. Your Zoom
            link and the 50-Step Roadmap are on the way to your inbox.
          </p>
          <EventDate center />
        </div>
      </section>

      {/* ── Before class ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Before Class
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-[0.93] text-ink">
              THREE THINGS TO DO NOW
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {STEPS.map((s) => (
              <div key={s.num} className="bg-white border border-black/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mb-4">
                  {s.num}
                </div>
                <h3 className="font-display text-lg text-ink mb-2">{s.title}</h3>
                <p className="font-body text-sm text-gray-muted leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-gray-muted text-center mt-8">
            Didn&rsquo;t get your registration email within 15 minutes? Check spam
            first, then reach out through{" "}
            <Link href="/contact-us" className="underline hover:text-ink">
              our contact page
            </Link>{" "}
            and we&rsquo;ll resend it.
          </p>
        </div>
      </section>

      {/* ── Starter bundle cross-sell ── */}
      <section className="py-14 max-md:py-10 bg-white">
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="bg-ink rounded-[18px] p-9 max-md:p-6 text-center text-white">
            <span className="inline-block bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-1.5 rounded-full mb-4">
              For Registrants Only
            </span>
            <h2 className="font-display text-[clamp(26px,3.5vw,36px)] leading-[0.95] mb-3">
              WANT A HEAD START BEFORE CLASS?
            </h2>
            <p className="font-body text-[15px] text-white/70 leading-relaxed max-w-[540px] mx-auto mb-6">
              Get the Foundation Starter Bundle &mdash; the exact first 10 steps of
              the 50-Step System, with real video lessons from Jas &mdash; for a
              one-time $27. Walk into the masterclass already seeing wins with
              your dog.
            </p>
            <Link href="/starter-bundle" className="btn btn-white">
              See The Starter Bundle &mdash; $27 &rarr;
            </Link>
            <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
              One-Time Payment &middot; Instant Access &middot; Not A Subscription
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
