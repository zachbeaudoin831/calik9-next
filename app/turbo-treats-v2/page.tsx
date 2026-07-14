import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TurboAddToCart from "@/components/TurboAddToCart";
import { getTreatOffers } from "@/lib/turbo-treats";
import { formatMoney } from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Turbo Treats® — The Reward Dogs Work For",
  description:
    "One ingredient. Zero fillers. Freeze-dried chicken hearts and beef liver from celebrity dog trainer Jas Leverette. Grab a bag and watch your dog lock in.",
  // Draft variant page — keep out of search while A/B versions are both live.
  robots: { index: false, follow: false },
};

const COMPARISON: { label: string; turbo: string; typical: string }[] = [
  { label: "Ingredients", turbo: "1 — real chicken hearts or beef liver", typical: "20–40, mostly fillers" },
  { label: "Protein source", turbo: "100% real organ meat", typical: "Meat 'meal' + by-products" },
  { label: "Preservation", turbo: "Freeze-dried raw", typical: "Cooked + preservatives" },
  { label: "Artificial colors & flavors", turbo: "None", typical: "Common" },
  { label: "Made for training", turbo: "Yes — high-value reward", typical: "No — snack-grade" },
];

const TRAINING_MOMENTS = [
  {
    num: 1,
    title: "RECALL",
    desc: "Coming when called has to beat squirrels, smells, and other dogs. A high-value reward makes you the most interesting thing in the park.",
  },
  {
    num: 2,
    title: "FOCUS & HEEL",
    desc: "Mark calm attention at your side and pay it instantly. Small, breakable pieces keep the reps fast and your dog engaged.",
  },
  {
    num: 3,
    title: "SOCIALIZATION",
    desc: "New people, new dogs, new places. Rewarding calm behavior around triggers builds a confident, well-balanced dog.",
  },
  {
    num: 4,
    title: "EVERYDAY WINS",
    desc: "Crate time, grooming, nail trims, door manners. Catch the good behavior, pay it well, and watch it become the default.",
  },
];

export default async function TurboTreatsV2Page() {
  const offers = await getTreatOffers();

  return (
    <main>
      {/* ── Hero (light, product-first) ── */}
      <section className="pt-[128px] pb-14 max-md:pt-28 max-md:pb-10 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1 max-md:gap-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-500 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-5">
                🐾 From Cali K9&reg; · As Seen on Netflix
              </span>

              <h1 className="font-display text-[clamp(42px,6vw,68px)] text-ink leading-[0.92] mb-5">
                THE REWARD DOGS <span className="text-blue-500">WORK FOR</span>
              </h1>

              <p className="font-body text-lg text-gray-muted leading-relaxed mb-6 max-w-[460px]">
                Turbo Treats&reg; are freeze-dried, 100% single-ingredient
                protein — real chicken hearts and real beef liver, nothing
                else. Created by celebrity trainer Jas Leverette and used in
                Cali K9 training sessions every single day.
              </p>

              <div className="flex items-center gap-5 mb-8 flex-wrap">
                {["1 Ingredient", "0 Fillers", "Freeze-Dried Raw"].map((chip) => (
                  <span
                    key={chip}
                    className="font-ui text-xs font-bold tracking-[1px] uppercase text-blue-500 bg-white border border-blue-100 px-3 py-1.5 rounded-sm shadow-sm"
                  >
                    &#10003; {chip}
                  </span>
                ))}
              </div>

              <a href="#buy" className="btn btn-blue btn-lg">
                Grab a Bag &darr;
              </a>
            </div>

            <div className="max-md:order-first">
              <Image
                src="https://cdn.shopify.com/s/files/1/0534/2275/1922/files/Combo-Pack-Beef-Liver-_-Chicken-Hearts-Cali-K9r-Online-Store-101553793.jpg?v=1777312311"
                alt="Turbo Treats freeze-dried beef liver and chicken hearts combo pack"
                width={640}
                height={640}
                priority
                className="w-full h-auto rounded-xl shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Buy grid (right under the hero) ── */}
      <section id="buy" className="py-16 max-md:py-10 bg-white scroll-mt-[68px] border-b border-border">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {offers.length === 0 ? (
            <div className="text-center py-8">
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
                  className={`relative rounded-xl p-6 flex flex-col ${
                    offer.featured
                      ? "bg-blue-500/[0.04] border-2 border-blue-500"
                      : "bg-white border border-black/[0.08]"
                  }`}
                >
                  {offer.featured && (
                    <span className="absolute -top-3.5 left-6 bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                      Most Popular · Both Flavors
                    </span>
                  )}

                  <div className="flex items-center gap-4 mb-4">
                    {offer.image && (
                      <Link href={`/shop/${offer.handle}`} className="shrink-0">
                        <Image
                          src={offer.image.url}
                          alt={offer.image.altText ?? `Turbo Treats ${offer.displayName}`}
                          width={200}
                          height={200}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </Link>
                    )}
                    <div>
                      <h3 className="font-display text-xl text-ink leading-tight mb-1">
                        {offer.displayName.toUpperCase()}
                      </h3>
                      <div className="font-ui text-lg font-bold text-ink">
                        {formatMoney(offer.price.amount, offer.price.currencyCode)}
                        {offer.compareAt && (
                          <span className="ml-2 text-sm font-normal text-gray-muted line-through">
                            {formatMoney(offer.compareAt.amount, offer.compareAt.currencyCode)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-sm text-gray-muted leading-relaxed mb-5 flex-1">
                    {offer.blurb}
                  </p>

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

      {/* ── Comparison table ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Read the Label
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              TURBO TREATS VS. STORE TREATS
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted p-4 border-b border-border" />
                  <th className="text-left font-ui text-xs font-bold tracking-[2px] uppercase text-blue-500 p-4 border-b border-border bg-blue-500/[0.05]">
                    Turbo Treats&reg;
                  </th>
                  <th className="text-left font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted p-4 border-b border-border">
                    Typical Store Treats
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.label}>
                    <td
                      className={`font-ui text-[13px] font-bold text-ink p-4 ${
                        i < COMPARISON.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`font-body text-[15px] text-ink p-4 bg-blue-500/[0.05] ${
                        i < COMPARISON.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-green-600 font-bold mr-1.5">&#10003;</span>
                      {row.turbo}
                    </td>
                    <td
                      className={`font-body text-[15px] text-gray-muted p-4 ${
                        i < COMPARISON.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      {row.typical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── How trainers use them ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Put Them to Work
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              TRAIN THE CALI K9 WAY
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-[480px]:grid-cols-1">
            {TRAINING_MOMENTS.map((step) => (
              <div key={step.num} className="bg-cream border border-black/[0.05] rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-display text-lg flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h3 className="font-display text-lg text-ink mb-2">{step.title}</h3>
                <p className="font-body text-sm text-gray-muted leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jas band ── */}
      <section
        className="py-16 max-md:py-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 60%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="flex items-center gap-10 max-md:flex-col max-md:text-center">
            <Image
              src="/images/jas-headshot.jpg"
              alt="Jas Leverette, celebrity dog trainer and creator of Turbo Treats"
              width={220}
              height={220}
              className="w-40 h-40 rounded-full object-cover border-4 border-white/20 shrink-0"
            />
            <div>
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-300 block mb-2">
                Created by Jas Leverette
              </span>
              <p className="font-body text-lg text-white/85 leading-[1.7] mb-4 max-w-[640px]">
                Founder of Cali K9&reg;, host of Netflix&rsquo;s <em>Canine Intervention</em>,
                and the trainer behind 10,000+ dog transformations. Turbo Treats
                is the same reward used inside Cali K9 programs — now in your
                treat pouch at home.
              </p>
              <a href="#buy" className="btn btn-white">
                Shop Turbo Treats &uarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
