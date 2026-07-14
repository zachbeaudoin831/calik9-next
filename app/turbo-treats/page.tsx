import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";
import TurboAddToCart from "@/components/TurboAddToCart";
import { getTreatOffers } from "@/lib/turbo-treats";
import { formatMoney } from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Turbo Treats® — Single-Ingredient Dog Training Treats",
  description:
    "Pure flavor. Raw energy. Next-level nutrition. Freeze-dried, 100% single-ingredient dog treats by celebrity trainer Jas Leverette — the reward Cali K9® trainers use every day.",
  openGraph: {
    title: "Turbo Treats® — Single-Ingredient Dog Training Treats | Cali K9®",
    description:
      "Freeze-dried, 100% single-ingredient dog treats by celebrity trainer Jas Leverette. No fillers. No shortcuts. Just the reward dogs go crazy for.",
    url: "https://calik9.com/turbo-treats",
    images: [
      "https://cdn.shopify.com/s/files/1/0534/2275/1922/files/Combo-Pack-Beef-Liver-_-Chicken-Hearts-Cali-K9r-Online-Store-101553793.jpg?v=1777312311",
    ],
  },
};

const HERO_CHECKLIST = [
  "100% single ingredient — nothing else",
  "Freeze-dried to lock in raw nutrition",
  "No fillers, no artificial anything",
  "Built for training — the reward our trainers use daily",
];

const WHY_CARDS = [
  {
    icon: "🥩",
    title: "ONE INGREDIENT. PERIOD.",
    desc: "Flip the bag on most store treats and you'll find 30 ingredients you can't pronounce. Turbo Treats have exactly one: real chicken hearts or real beef liver. That's the whole label.",
  },
  {
    icon: "⚡",
    title: "HIGH-VALUE = HIGH FOCUS",
    desc: "Training runs on motivation. A reward your dog actually cares about buys you focus, faster reps, and cleaner obedience. This is the treat that keeps dogs locked in on the handler.",
  },
  {
    icon: "🧠",
    title: "NUTRITION THAT WORKS",
    desc: "Organ meat is nature's multivitamin — dense in protein and nutrients that support energy and performance. Freeze-drying preserves it without cooking the good stuff out.",
  },
];

export default async function TurboTreatsPage() {
  const offers = await getTreatOffers();

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[128px] pb-20 max-md:pt-28 max-md:pb-12"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-center max-md:grid-cols-1">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.22] text-white font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full backdrop-blur-md mb-5">
                By Jas Leverette · Host of Netflix&rsquo;s Canine Intervention
              </span>

              <h1 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-[0.9] mb-4">
                TURBO <span className="text-[#8A97C4]">TREATS</span>
              </h1>

              <p className="font-ui text-[15px] font-bold tracking-[3px] uppercase text-blue-300 mb-5">
                Pure Flavor. Raw Energy. Next-Level Nutrition.
              </p>

              <p className="font-body text-base text-white/70 leading-relaxed mb-6 max-w-[480px]">
                Your dog&rsquo;s not just a pet — they&rsquo;re family. Turbo Treats are
                built different: clean protein and that natural flavor dogs go
                crazy for, from the trainer behind 10,000+ dog transformations.
              </p>

              <ul className="list-none p-0 m-0 mb-8">
                {HERO_CHECKLIST.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] text-white/80 leading-normal py-[5px] pl-7 relative"
                  >
                    <span className="absolute left-0 text-green-400 font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 flex-wrap max-[480px]:flex-col max-[480px]:items-stretch">
                <a href="#buy" className="btn btn-white btn-lg">
                  Shop Turbo Treats &darr;
                </a>
              </div>
            </div>

            <div className="max-md:order-first">
              <Image
                src="https://cdn.shopify.com/s/files/1/0534/2275/1922/files/Combo-Pack-Beef-Liver-_-Chicken-Hearts-Cali-K9r-Online-Store-101553793.jpg?v=1777312311"
                alt="Turbo Treats Combo Pack — freeze-dried beef liver and chicken hearts"
                width={640}
                height={640}
                priority
                className="w-full h-auto rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Credibility strip ── */}
      <section className="bg-ink py-6">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="flex items-center justify-between gap-6 flex-wrap max-md:justify-center">
            {[
              { big: "1", small: "Ingredient Per Bag" },
              { big: "0", small: "Fillers or Additives" },
              { big: "10,000+", small: "Dogs Trained by Cali K9" },
              { big: "NETFLIX", small: "Canine Intervention" },
            ].map((stat) => (
              <div key={stat.small} className="text-center">
                <div className="font-display text-3xl text-white leading-none">{stat.big}</div>
                <div className="font-ui text-[10px] font-semibold tracking-[1.5px] uppercase text-white/50 mt-1">
                  {stat.small}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why single ingredient ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Built Different
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              WHY TRAINERS REACH FOR TURBO TREATS
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-black/[0.06] rounded-xl p-7 h-full"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-display text-xl text-ink mb-3">{card.title}</h3>
                <p className="font-body text-[15px] text-gray-muted leading-[1.7]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buy section ── */}
      <section id="buy" className="py-20 max-md:py-12 max-[480px]:py-8 bg-white scroll-mt-[68px]">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Fuel the Session
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              PICK YOUR DOG&rsquo;S FLAVOR
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          {offers.length === 0 ? (
            <div className="text-center py-10">
              <p className="font-body text-base text-gray-muted mb-6">
                Turbo Treats are available in the Cali K9 shop.
              </p>
              <Link href="/shop?category=turbo-treats" className="btn btn-blue btn-lg">
                Shop Turbo Treats &rarr;
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 items-stretch">
              {offers.map((offer) => (
                <div
                  key={offer.handle}
                  className={`relative bg-white rounded-xl p-6 flex flex-col text-center ${
                    offer.featured
                      ? "border-2 border-blue-500 shadow-[0_12px_40px_rgba(18,54,160,0.15)]"
                      : "border border-black/[0.08] shadow-sm"
                  }`}
                >
                  {offer.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                      Best Value
                    </span>
                  )}

                  {offer.image && (
                    <Link href={`/shop/${offer.handle}`} className="block mb-5">
                      <Image
                        src={offer.image.url}
                        alt={offer.image.altText ?? `Turbo Treats ${offer.displayName}`}
                        width={480}
                        height={480}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </Link>
                  )}

                  <h3 className="font-display text-2xl text-ink leading-tight mb-2">
                    {offer.displayName.toUpperCase()}
                  </h3>
                  <p className="font-body text-sm text-gray-muted leading-relaxed mb-4 flex-1">
                    {offer.blurb}
                  </p>

                  <div className="font-display text-3xl text-ink leading-none mb-5">
                    {formatMoney(offer.price.amount, offer.price.currencyCode)}
                    {offer.compareAt && (
                      <span className="ml-2 font-ui text-base font-normal text-gray-muted line-through align-middle">
                        {formatMoney(offer.compareAt.amount, offer.compareAt.currencyCode)}
                      </span>
                    )}
                  </div>

                  <TurboAddToCart
                    variantId={offer.variantId}
                    available={offer.available}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          )}

          <p className="font-ui text-xs text-gray-muted flex items-center justify-center gap-1.5 mt-8">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Secure checkout powered by Shopify
          </p>
        </div>
      </section>

      {/* ── The trainer behind the treat ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1">
            <Image
              src="/images/jas-headshot.jpg"
              alt="Jas Leverette, founder of Cali K9 and creator of Turbo Treats"
              width={600}
              height={700}
              className="w-full h-auto rounded-xl object-cover"
            />
            <div>
              <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
                The Trainer Behind the Treat
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-6">
                MADE BY JAS LEVERETTE
              </h2>
              <p className="font-body text-base text-gray-muted leading-[1.8] mb-4">
                Jas Leverette is the founder of Cali K9&reg;, host of Netflix&rsquo;s{" "}
                <em>Canine Intervention</em>, and the trainer celebrities and
                everyday families trust with their dogs. After 15+ years and
                10,000+ dogs, he knows exactly what separates a treat dogs
                tolerate from a reward they&rsquo;ll work for.
              </p>
              <p className="font-body text-base text-gray-muted leading-[1.8] mb-8">
                Turbo Treats is that reward — the same single-ingredient,
                freeze-dried protein used inside Cali K9 training programs,
                now available for your training sessions at home.
              </p>
              <a href="#buy" className="btn btn-blue btn-lg">
                Get Turbo Treats &uarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CtaBlock
        eyebrow="Train Like a Pro"
        heading="REWARD THEM LIKE FAMILY"
        description="Single-ingredient. Freeze-dried. Trainer-approved. Give your dog the reward that makes training click — and pair it with a Cali K9 program for the full transformation."
        primaryCta={{ label: "Shop Turbo Treats →", href: "#buy" }}
        secondaryCta={{ label: "Book an Evaluation →", href: "/evaluation-with-behavior-specialist" }}
      />
    </main>
  );
}
