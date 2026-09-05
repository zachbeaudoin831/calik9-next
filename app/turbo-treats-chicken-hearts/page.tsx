import type { Metadata } from "next";
import Image from "next/image";
import FormEmbed from "@/components/FormEmbed";

export const metadata: Metadata = {
  title: "Turbo Treats — Chicken Hearts",
  description:
    "Single-ingredient freeze-dried chicken heart training treats from Cali K9. High-value, low-crumb, made for the 50-Step System.",
  robots: { index: false, follow: false },
};

const POINTS = [
  "Single ingredient — freeze-dried chicken hearts, nothing else",
  "High-value reward for the food-motivated steps of the roadmap",
  "Breaks clean for rapid-fire reps without crumbs in your pocket",
  "Ships from Cali K9 within 1–2 business days",
];

export default function ChickenHeartsPage() {
  return (
    <main>
      <section className="pt-[108px] pb-16 max-md:pt-[96px] max-md:pb-10">
        <div className="max-w-[1040px] mx-auto px-6 max-[480px]:px-4">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-12 items-start max-md:grid-cols-1 max-md:gap-8">
            <div className="md:sticky md:top-[100px]">
              <span className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-blue-500 block mb-4">
                Cali K9&reg; Turbo Treats
              </span>
              <h1 className="font-display text-[clamp(34px,4.5vw,50px)] text-ink leading-[0.98] mb-4">
                CHICKEN HEARTS
              </h1>
              <p className="font-body text-base text-[#4b4f58] leading-relaxed mb-6">
                The same freeze-dried treats Jas uses on the training floor. High-value,
                single-ingredient, and sized for fast reps &mdash; built for the food-motivation
                steps of the Cali K9 5 Pillar, 50-Step System&trade;.
              </p>
              <Image
                src="/images/funnel/turbo-chicken.webp"
                alt="Cali K9 Turbo Treats — freeze-dried chicken hearts"
                width={800}
                height={800}
                priority
                className="w-full h-auto rounded-xl shadow-md mb-6"
              />
              <div className="flex flex-col gap-2.5">
                {POINTS.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 font-body text-[14.5px] text-ink/80">
                    <span className="text-blue-500 font-bold shrink-0">&#10003;</span> {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] bg-ink p-6 max-[480px]:p-3">
              <FormEmbed
                formId="UqUsLjNHR5ReWVB5n6Kj"
                formName="TT Chicken Hearts Cart - Website"
                title="Order Chicken Hearts"
                height={1137}
              />
              <p className="font-body text-[12.5px] text-white/50 text-center mt-4">
                Secure checkout &middot; Ships within 1&ndash;2 business days
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
