import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FormEmbed from "@/components/FormEmbed";

export const metadata: Metadata = {
  title: "Reserve Your Call — $7",
  description:
    "Walk through what your Free Behavior Assessment revealed on a 20-minute call with the Cali K9 team. $7 refundable reservation, credited toward any program.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// The $7 reservation is its own GHL product (separate from the $27 evaluation
// cart used elsewhere on the site). Drop its GHL form ID in here once the
// product exists — from the embed URL api.leadconnectorhq.com/widget/form/<ID>.
const BOOKING_FORM_ID: string | null = null;

const WHAT_ITEMS = [
  "Go over your Free Behavior Assessment results together",
  "See where your dog sits on the 50-Step Roadmap",
  "$7 reservation, credited toward any program — no sales script, no pressure",
];

const STATS = [
  { num: "10,000+", label: "Dogs Trained" },
  { num: "15+", label: "Years Experience" },
  { num: "4.9★", label: "Average Rating" },
  { num: "2009", label: "Founded" },
];

const PRESS_LOGOS = [
  { src: "/images/media-logos/netflix.webp", alt: "Netflix" },
  { src: "/images/media-logos/nbc.webp", alt: "NBC" },
  { src: "/images/media-logos/abc.webp", alt: "ABC" },
  { src: "/images/media-logos/ellen-show.webp", alt: "The Ellen Show" },
  { src: "/images/media-logos/dr-phil.webp", alt: "Dr. Phil" },
  { src: "/images/media-logos/people-magazine.webp", alt: "People" },
  { src: "/images/media-logos/gma3.webp", alt: "GMA3" },
  { src: "/images/media-logos/la-times.webp", alt: "LA Times" },
  { src: "/images/media-logos/washington-post.webp", alt: "Washington Post" },
];

const TESTIMONIALS = [
  {
    quote:
      "“I had the most educational session with my cali k9 trainer. The training information that was shared with me has helped me tremendously with training me dog. I'll be signing up again as a returning client.”",
    who: "Robert Walker — San Jose, CA",
  },
  {
    quote:
      "“Cali K9 has been a great experience! Every week we have seen improvements with our dog's obedience. Each week we are becoming more confident in being the leaders our dog needs and desires.”",
    who: "Phil Cano — North Hollywood, CA",
  },
  {
    quote:
      "“We signed up for Cali K9 at the end of March, and it was the best decision that we made for our dog Maverick… We have seen changes in him since day 1 of the training, his behavior has changed, he has become more obedient… I would definitely recommend Cali K9 to any of my friends and family.”",
    who: "John T — North Hollywood, CA",
  },
];

const CELEB_PHOTOS = [
  { name: "Steph Curry", image: "/images/funnel/jas-steph-curry.jpg" },
  { name: "Kendrick Lamar", image: "/images/funnel/jas-kendrick.jpg" },
  { name: "Dr. Phil", image: "/images/funnel/jas-dr-phil.jpg" },
  { name: "Kevin Hart", image: "/images/funnel/jas-kevin-hart.jpg" },
];

export default function BookYourCallPage() {
  return (
    <main>
      {/* ── Intro + booking ── */}
      <section className="pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10" id="book">
        <div className="max-w-[760px] mx-auto px-6 max-[480px]:px-4 text-center">
          <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-500 block mb-4">
            Your Next Step After The Free Behavior Assessment
          </span>
          <h1 className="font-display text-[clamp(32px,4.5vw,48px)] text-ink leading-[1.02] mb-5">
            LET&rsquo;S WALK THROUGH WHAT YOUR ASSESSMENT REVEALED. $7 REFUNDABLE RESERVATION, 20
            MINUTES.
          </h1>
          <p className="font-body text-base text-[#4b4f58] leading-relaxed max-w-[620px] mx-auto">
            You just completed the Free Behavior Assessment &mdash; this call is where we connect
            those results to a plan. We&rsquo;ll walk you through exactly what the assessment
            revealed about your dog and which part of the{" "}
            <strong className="text-ink">Cali K9 5 Pillar, 50-Step System&trade;</strong> they need
            next, then point you to <strong className="text-ink">Academy</strong>,{" "}
            <strong className="text-ink">Elite</strong>, or{" "}
            <strong className="text-ink">VIP</strong> &mdash; whichever fits. A $7 reservation
            holds your spot and is fully credited toward any program you join &mdash; no pressure
            to buy anything.
          </p>

          <div className="flex flex-col gap-2.5 max-w-[520px] mx-auto mt-6 text-left">
            {WHAT_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-2.5 font-body text-[14.5px] text-ink/80">
                <span className="text-blue-500 font-bold shrink-0">&#10003;</span> {item}
              </div>
            ))}
          </div>

          <blockquote className="max-w-[560px] mx-auto mt-7 border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink text-left">
            &ldquo;If you treat a dog like a human, it will treat you like a dog.&rdquo;
            <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
              &mdash; Jas Leverette
            </span>
          </blockquote>

          <Image
            src="/images/funnel/bookcall-jas-hero.jpg"
            alt="Jas Leverette with a client's dog"
            width={760}
            height={492}
            className="w-full h-auto rounded-xl object-cover mt-8 shadow-md"
          />

          {/* Booking — the new $7 reservation product's GHL form. */}
          <div className="mt-8 rounded-[18px] bg-ink p-6 max-[480px]:p-3 text-left">
            {BOOKING_FORM_ID ? (
              <FormEmbed
                formId={BOOKING_FORM_ID}
                formName="$7 Call Reservation"
                title="Reserve Your Call — $7"
                height={828}
              />
            ) : (
              <div className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-7 text-center">
                <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-2">
                  Reserve Your Call &mdash; $7
                </div>
                <p className="font-body text-[14px] text-white/60">
                  Booking opens shortly &mdash; check back soon.
                </p>
              </div>
            )}
            <p className="font-body text-[12.5px] text-white/50 text-center mt-4">
              $7 refundable reservation &middot; 20-minute call &middot; Credited toward any
              program
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 mt-7">
            <Link href="/academy" className="font-body text-[13.5px] text-gray-muted underline hover:text-ink">
              Not ready for a call? Browse the programs instead
            </Link>
            <Link href="/free-masterclass" className="font-body text-[13.5px] text-gray-muted underline hover:text-ink">
              Not ready to reserve? Watch the free training instead
            </Link>
          </div>
        </div>
      </section>

      {/* ── Credibility / trust strip ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <div className="grid grid-cols-4 gap-4 text-center max-[480px]:grid-cols-2">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-ink leading-none">{stat.num}</div>
                <div className="font-ui text-[10px] font-semibold tracking-[1.5px] uppercase text-gray-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center font-ui text-[12px] font-semibold tracking-[2px] uppercase text-gray-muted mt-10 mb-4">
            As Featured On
          </div>
          <div className="flex items-center justify-center gap-x-7 gap-y-4 flex-wrap">
            {PRESS_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={40}
                className="h-8 w-auto opacity-70"
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 max-md:grid-cols-1">
            {TESTIMONIALS.map((t) => (
              <div key={t.who} className="bg-white border border-border rounded-xl p-5 text-left">
                <p className="font-body text-[13.5px] italic text-ink/80 leading-relaxed mb-3">
                  {t.quote}
                </p>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-gray-muted">
                  {t.who}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center font-ui text-[12px] font-semibold tracking-[2px] uppercase text-gray-muted mt-10 mb-4">
            Trained Dogs For
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-[640px] mx-auto max-[480px]:grid-cols-2">
            {CELEB_PHOTOS.map((celeb) => (
              <div key={celeb.name} className="text-center">
                <Image
                  src={celeb.image}
                  alt={`Jas Leverette with ${celeb.name}`}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover rounded-lg h-auto"
                />
                <span className="block font-ui text-xs font-bold tracking-[1px] uppercase text-gray-muted mt-2">
                  {celeb.name}
                </span>
              </div>
            ))}
          </div>

          <p className="font-body text-[12.5px] text-gray-muted text-center max-w-[620px] mx-auto mt-8 leading-relaxed">
            Jas Leverette is the host &amp; executive producer of Netflix&rsquo;s{" "}
            <em>Canine Intervention</em>, and has trained dogs for clients including Stephen Curry,
            Kevin Hart, and law enforcement K9 units.
          </p>
        </div>
      </section>

      {/* ── Why take the call ── */}
      <section className="py-14 max-md:py-10 text-center">
        <div className="max-w-[640px] mx-auto px-6 max-[480px]:px-4">
          <h3 className="font-display text-[24px] text-ink mb-3.5">WHY TAKE THE CALL</h3>
          <p className="font-body text-[14.5px] text-[#4b4f58] leading-[1.7]">
            You don&rsquo;t need it to get started &mdash; the Cali K9 5 Pillar, 50-Step
            System&trade; works on its own. But this call is where we show you exactly where your
            dog sits on the 50-Step Roadmap right now and what&rsquo;s missing before they can move
            to the next step &mdash; whether they&rsquo;re fearful and reactive, pushy and
            overconfident, or simply a good dog who&rsquo;s never had real training. Most members
            who book this call move through the early steps faster, because they walk in already
            knowing exactly where to start and what to watch for with their specific dog.
          </p>

          <p className="font-ui text-xs text-gray-muted/70 mt-12">
            &copy; 2026 Cali K9&reg; &middot;{" "}
            <Link href="/privacy-policy" className="hover:text-ink">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:text-ink">
              Terms
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
