import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome To The Academy",
  description: "Your Cali K9 Academy membership is confirmed. Here's how to get started.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    num: "1",
    title: "CHECK YOUR EMAIL",
    desc: "Your member portal login is on its way. If you don't see it in a few minutes, check spam and promotions.",
  },
  {
    num: "2",
    title: "LOG IN AND START AT STEP 1",
    desc: "Begin the roadmap with Step 1: Establishing Boundaries in the Home. The portal tells you exactly what comes next.",
  },
  {
    num: "3",
    title: "TRAIN A LITTLE EVERY DAY",
    desc: "Most steps take 10 to 15 minutes a day. Consistency beats duration. Your dog advances when they're ready, never rushed.",
  },
];

export default function AcademyThankYouPage() {
  return (
    <main>
      {/* Meta Pixel: Purchase event for the Academy membership. Base pixel
          loads in the root layout. */}
      <Script id="meta-pixel-purchase-academy" strategy="afterInteractive">
        {`(function firePurchase(tries){
          if (typeof window.fbq === 'function') { window.fbq('track','Purchase',{value:97.00,currency:'USD'}); }
          else if (tries > 0) { setTimeout(function(){ firePurchase(tries - 1); }, 300); }
        })(20);`}
      </Script>

      <section
        className="relative overflow-hidden pt-[108px] pb-16 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            &#10003; Membership Confirmed
          </span>
          <h1 className="font-display text-[clamp(40px,5.5vw,64px)] text-white leading-[0.95] mb-5">
            WELCOME TO THE <span className="text-[#6A9FFF]">CALI K9 ACADEMY.</span>
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-[560px] mx-auto">
            Your dog&rsquo;s 50-step transformation starts now. Your member
            portal login is on its way to your inbox.
          </p>
        </div>
      </section>

      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Getting Started
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-[0.93] text-ink">
              YOUR FIRST STEPS
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 mb-12">
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

          {/* Jas welcome note */}
          <div className="bg-white border border-black/[0.06] rounded-xl p-8 max-[480px]:p-6">
            <div className="flex gap-6 items-start max-[480px]:flex-col">
              <Image
                src="/images/jas-headshot.jpg"
                alt="Jas Leverette"
                width={160}
                height={160}
                className="w-20 h-20 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-body text-base text-gray-muted leading-[1.8] mb-3">
                  &ldquo;Welcome to the Academy. You just did the thing most
                  owners never do: you committed to a system instead of
                  guessing. Follow the roadmap in order, keep your sessions
                  short and consistent, and bring your questions to the live
                  group training. I&rsquo;ll see you inside.&rdquo;
                </p>
                <cite className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted not-italic">
                  Jas Leverette &middot; Founder, Cali K9&reg;
                </cite>
              </div>
            </div>
          </div>

          <p className="font-body text-sm text-gray-muted text-center mt-8">
            Didn&rsquo;t get your login email within 15 minutes? Reply to your
            purchase receipt and our team will get you set up.
          </p>
        </div>
      </section>
    </main>
  );
}
