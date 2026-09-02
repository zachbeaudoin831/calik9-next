import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Training Menu",
  description:
    "Choose your next step with Cali K9® — a $7 evaluation, the full 5-Pillar online training program, or a private hour with Jas Leverette.",
  // Draft funnel page promoted after the free training class — keep out of search.
  robots: { index: false, follow: false },
};

const OFFERS = [
  {
    num: "01",
    tag: "Start Here",
    name: "EVALUATION",
    price: "$7",
    priceNote: "one-time",
    desc: "A direct consultation with a Cali K9 behavior specialist. We assess what's driving your dog's behavior — reactivity, aggression, anxiety, anything — and build your custom training roadmap.",
    bullets: [
      "In-depth behavioral assessment",
      "Custom training roadmap",
      "All breeds welcome",
      "Results guaranteed",
    ],
    cta: "Book Your Evaluation",
    href: "/evaluation-with-behavior-specialist",
    featured: false,
  },
  {
    num: "02",
    tag: "Train From Anywhere",
    name: "ONLINE TRAINING",
    price: "$497",
    priceNote: "from · one-time",
    desc: "Jas's complete 5-Pillar System, delivered digitally. Self-paced courses, 100+ problem-solving videos, and 6 months of live weekly group Zoom calls with senior trainers.",
    bullets: [
      "Full 5-Pillar curriculum · lifetime access",
      "6 months of live weekly Zoom coaching",
      "100 problem-solving technique videos",
      "Membership community access",
    ],
    cta: "View Online Training",
    href: "/online-training-program2",
    featured: true,
  },
  {
    num: "03",
    tag: "Premium",
    name: "ONE HOUR WITH JAS",
    price: "$1,000",
    priceNote: "private session",
    desc: "A private one-on-one hour with Jas Leverette himself — founder of Cali K9 and host of Netflix's Canine Intervention. Bring your toughest behavior problems. Leave with answers.",
    bullets: [
      "One full hour, one-on-one with Jas",
      "Direct assessment of your dog's behavior",
      "The trainer trusted by Steph Curry & Kevin Hart",
      "Extremely limited availability",
    ],
    cta: "Book Your Hour With Jas",
    href: "/contact-us",
    featured: false,
  },
];

export default function DogTrainingMenuPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-16 max-md:pt-28 max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-6">
            🐾 Ready For The Next Step?
          </span>

          <h1 className="font-display text-[clamp(44px,6vw,72px)] text-white leading-[0.93] mb-5">
            DOG TRAINING <span className="text-white/50">MENU</span>
          </h1>

          <p className="font-body text-lg text-white/70 leading-relaxed mb-8 max-w-[560px] mx-auto">
            Three ways to keep the transformation going — every one built on
            the same 5-Pillar System behind 10,000+ dogs, including the ones
            other trainers turned away.
          </p>

          <p className="font-ui text-base text-white/60 flex items-center justify-center gap-2">
            <span className="text-[#F59E0B] text-xl tracking-tight">★★★★★</span>
            4.9 Average Client Rating &middot; As Seen on Netflix
          </p>
        </div>
      </section>

      {/* ── Menu ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 space-y-6">
          {OFFERS.map((offer) => (
            <div
              key={offer.num}
              className={`relative bg-white rounded-xl p-8 max-[480px]:p-6 ${
                offer.featured
                  ? "border-2 border-blue-500 shadow-[0_12px_40px_rgba(18,54,160,0.15)]"
                  : "border border-black/[0.08] shadow-sm"
              }`}
            >
              {offer.featured && (
                <span className="absolute -top-3.5 left-8 bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="flex items-start justify-between gap-6 mb-4 max-[480px]:flex-col max-[480px]:gap-2">
                <div>
                  <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-blue-500 mb-1.5">
                    {offer.num} &middot; {offer.tag}
                  </div>
                  <h2 className="font-display text-[clamp(28px,3.5vw,40px)] text-ink leading-none">
                    {offer.name}
                  </h2>
                </div>
                <div className="text-right max-[480px]:text-left shrink-0">
                  <div className="font-display text-[clamp(30px,3.5vw,44px)] text-ink leading-none">
                    {offer.price}
                  </div>
                  <div className="font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-gray-muted mt-1">
                    {offer.priceNote}
                  </div>
                </div>
              </div>

              <p className="font-body text-[15px] text-gray-muted leading-[1.7] mb-5">
                {offer.desc}
              </p>

              <ul className="list-none p-0 m-0 mb-6 grid grid-cols-2 gap-x-6 max-md:grid-cols-1">
                {offer.bullets.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm text-ink/80 leading-normal py-1 pl-6 relative"
                  >
                    <span className="absolute left-0 text-green-500 font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={offer.href}
                className={`btn btn-lg w-full text-center block ${
                  offer.featured ? "btn-blue" : "btn-outline"
                }`}
              >
                {offer.cta} &rarr;
              </Link>
            </div>
          ))}

          <p className="font-body text-sm text-gray-muted text-center pt-2">
            Not sure which fits your dog? Start with the $7 evaluation — we&rsquo;ll
            point you to the right program.
          </p>
        </div>
      </section>

      {/* ── Trust band ── */}
      <section className="bg-ink py-10">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <p className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-white/50 mb-5">
            You&rsquo;ve seen the team on
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/media-logos/netflix.webp"
              alt="Netflix"
              width={128}
              height={64}
              className="h-12 w-auto"
            />
            <span className="font-display text-3xl max-md:text-2xl text-white leading-none">
              CANINE INTERVENTION
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
