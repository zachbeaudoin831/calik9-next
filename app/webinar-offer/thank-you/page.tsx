import type { Metadata } from "next";
import Script from "next/script";
import BookingEmbed from "./BookingEmbed";

export const metadata: Metadata = {
  title: "You're In: Book Your Evaluation Call",
  description: "Your Cali K9 online training access is on its way. Book your one-on-one evaluation call now.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    num: "1",
    title: "CHECK YOUR EMAIL",
    desc: "Your login for the Cali K9 Online Training System is on its way. If you don't see it in a few minutes, check spam and promotions.",
  },
  {
    num: "2",
    title: "BOOK YOUR EVALUATION CALL",
    desc: "Pick a time below for your one-on-one call with a Cali K9 behavior specialist. Bring your toughest questions about your dog.",
  },
  {
    num: "3",
    title: "START WITH TRAIN WITH JAS 1.0",
    desc: "While you wait for your call, log in and start Series 1.0. It's the foundation everything else builds on.",
  },
];

export default function WebinarOfferThankYouPage() {
  return (
    <main>
      {/* Meta Pixel: Purchase event for the $79 offer. Base pixel loads in the root layout. */}
      <Script id="meta-pixel-purchase-79" strategy="afterInteractive">
        {`(function firePurchase(tries){
          if (typeof window.fbq === 'function') { window.fbq('track','Purchase',{value:79.00,currency:'USD'}); }
          else if (tries > 0) { setTimeout(function(){ firePurchase(tries - 1); }, 300); }
        })(20);`}
      </Script>

      <section
        className="relative overflow-hidden pt-[108px] pb-16 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            &#10003; Order Confirmed
          </span>
          <h1 className="font-display text-[clamp(40px,5.5vw,64px)] text-white leading-[0.95] mb-5">
            YOU&rsquo;RE IN. <span className="text-[#6A9FFF]">WELCOME TO CALI K9.</span>
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-[560px] mx-auto">
            Your online training access is on its way to your inbox. One more
            step: book your one-on-one evaluation call so we can map out the
            right plan for your dog.
          </p>
        </div>
      </section>

      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 mb-12">
            {STEPS.map((s) => (
              <div key={s.num} className="bg-white border border-black/[0.06] rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mb-4">
                  {s.num}
                </div>
                <h2 className="font-display text-lg text-ink mb-2">{s.title}</h2>
                <p className="font-body text-sm text-gray-muted leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Step 2
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-[0.93] text-ink">
              BOOK YOUR EVALUATION CALL
            </h2>
          </div>

          <div className="bg-white rounded-xl border border-black/[0.06] p-4 max-[480px]:p-2 shadow-sm">
            <BookingEmbed />
          </div>
          <p className="font-body text-sm text-gray-muted text-center mt-6">
            Can&rsquo;t book right now? The same link is in your confirmation
            email. Questions? Reply to that email and our team will help.
          </p>
        </div>
      </section>
    </main>
  );
}
