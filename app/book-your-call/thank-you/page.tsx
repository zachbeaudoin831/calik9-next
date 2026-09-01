import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import FormEmbed from "@/components/FormEmbed";
import EventDate from "../../free-masterclass/EventDate";

export const metadata: Metadata = {
  title: "Your Call Is Reserved",
  description:
    "Your 20-minute call with the Cali K9 team is booked. One more thing — reserve your free seat at Jas Leverette's live dog training masterclass.",
  robots: { index: false, follow: false },
};

const CALL_STEPS = [
  {
    num: "1",
    title: "CHECK YOUR EMAIL",
    desc: "Your booking confirmation and calendar invite are on their way. If you don't see them in a few minutes, check spam and promotions.",
  },
  {
    num: "2",
    title: "WE REVIEW YOUR ASSESSMENT",
    desc: "Before the call, our team goes through your Free Behavior Assessment so we can talk about your dog specifically, not dogs in general.",
  },
  {
    num: "3",
    title: "LEAVE WITH A PLAN",
    desc: "In 20 minutes we'll show you where your dog sits on the 50-Step Roadmap and point you to Academy, Elite, VIP — or nothing at all. Your $7 is credited toward any program.",
  },
];

const MASTERCLASS_BENEFITS = [
  "Discover why your dog isn't listening",
  "Learn the Cali K9 training framework",
  "Build focus around real-world distractions",
  "Understand the roadmap to reliable obedience",
  "Learn how to start making progress in only 15 minutes per day",
];

export default function BookCallThankYouPage() {
  return (
    <main>
      {/* Meta Pixel: Purchase event for the $7 call reservation. Base pixel
          loads in the root layout. */}
      <Script id="meta-pixel-purchase-call" strategy="afterInteractive">
        {`(function firePurchase(tries){
          if (typeof window.fbq === 'function') { window.fbq('track','Purchase',{value:7.00,currency:'USD'}); }
          else if (tries > 0) { setTimeout(function(){ firePurchase(tries - 1); }, 300); }
        })(20);`}
      </Script>

      {/* ── Booking confirmation ── */}
      <section
        className="relative overflow-hidden pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            &#10003; Call Reserved
          </span>
          <h1 className="font-display text-[clamp(40px,5.5vw,64px)] text-white leading-[0.95] mb-5">
            YOUR CALL IS <span className="text-[#6A9FFF]">BOOKED.</span>
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-[560px] mx-auto">
            Your confirmation and calendar invite are on the way to your inbox.
            Here&rsquo;s what happens next &mdash; and one thing to do before we
            talk.
          </p>
        </div>
      </section>

      {/* ── What happens next ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Your Call
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-[0.93] text-ink">
              WHAT HAPPENS NEXT
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {CALL_STEPS.map((s) => (
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
            Didn&rsquo;t get your confirmation within 15 minutes? Reply to your
            reservation receipt and our team will get you sorted.
          </p>
        </div>
      </section>

      {/* ── Webinar registration ── */}
      <section
        className="py-16 max-md:py-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[11.5px] font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> One More Thing &middot;
              Free For You
            </span>
            <h2 className="font-display text-[clamp(32px,4.5vw,52px)] text-white leading-[0.95] max-w-[820px] mx-auto mb-4">
              DON&rsquo;T WAIT FOR YOUR CALL &mdash; JOIN JAS&rsquo;S FREE LIVE MASTERCLASS
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed max-w-[600px] mx-auto">
              Before we even talk, you can see the Cali K9&reg; system for yourself.
              Jas teaches a free live masterclass on transforming your dog in just
              15 minutes a day &mdash; reserve your seat now while you&rsquo;re
              thinking about it.
            </p>
          </div>

          <div className="grid grid-cols-[1.05fr_0.95fr] gap-12 items-start max-lg:grid-cols-1">
            <div className="max-lg:text-center">
              <ul className="flex flex-col gap-2.5 mb-7 max-lg:max-w-[440px] max-lg:mx-auto text-left">
                {MASTERCLASS_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 font-body text-[15px] text-white/85">
                    <span className="text-amber-400 font-bold shrink-0">&#10003;</span> {benefit}
                  </li>
                ))}
              </ul>

              <EventDate />

              <p className="font-body text-[13.5px] text-white/50 mt-6">
                Registering also gets you the{" "}
                <b className="text-white/75">Cali K9 50-Step Dog Transformation Roadmap</b>, free.
                Want the full rundown first?{" "}
                <Link href="/free-masterclass" className="underline text-white/75 hover:text-white">
                  See everything the masterclass covers
                </Link>
                .
              </p>
            </div>

            <div id="register" className="scroll-mt-24">
              <FormEmbed
                formId="hZHHQAAWiOEP0ADyInGy"
                formName="Webinar Registration"
                title="Reserve Your Free Seat"
                height={447}
              />
              <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 text-center mt-3">
                100% Free &middot; No Credit Card Required
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
