import type { Metadata } from "next";
import Link from "next/link";
import KitOffer from "./KitOffer";

export const metadata: Metadata = {
  title: "One More Thing — The Cali K9 Training Kit",
  description:
    "Add the exact hands-on gear Jas uses in every session — training box, treats, pouch, leash, long line and tug tools — to the order you just placed.",
  // Post-purchase upsell page. Keep out of search.
  robots: { index: false, follow: false },
};

const STEPS = [
  { label: "Checkout", state: "done" },
  { label: "Training Kit Offer", state: "active" },
  { label: "Turbo Treats Offer", state: "todo" },
  { label: "Book Your Call", state: "todo" },
];

export default function TrainingKitUpsellPage() {
  return (
    <main>
      {/* ── Progress strip ── */}
      <div className="pt-[68px]">
        <div className="bg-cream border-b border-border px-4 py-3">
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-2.5">
                {i > 0 && <span className="text-gray-muted/50 font-body text-xs">&rarr;</span>}
                <span
                  className={`flex items-center gap-1.5 font-ui text-[11px] font-bold tracking-[0.5px] uppercase ${
                    s.state === "active"
                      ? "text-blue-700"
                      : s.state === "done"
                        ? "text-green-500"
                        : "text-gray-muted/60"
                  }`}
                >
                  <span
                    className={`w-[18px] h-[18px] rounded-full text-[10px] flex items-center justify-center ${
                      s.state === "done"
                        ? "bg-green-500 text-white"
                        : s.state === "active"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-muted/20 text-gray-muted"
                    }`}
                  >
                    {s.state === "done" ? "✓" : i + 1}
                  </span>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Offer ── */}
      <section className="py-12 max-md:py-8 text-center">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4">
          <div className="inline-block bg-amber-400/15 border border-amber-400/50 text-[#8a5b00] font-ui text-[12px] font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full mb-5">
            &#9888; Wait &mdash; Your Order Isn&rsquo;t Finished Yet
          </div>
          <h1 className="font-display text-[clamp(28px,4.5vw,44px)] text-ink leading-[1.02] max-w-[720px] mx-auto mb-4">
            THE EQUIPMENT WE USE TO EXECUTE THE CALI K9 SYSTEM CORRECTLY
          </h1>
          <p className="font-body text-[15.5px] text-[#4b4f58] leading-relaxed max-w-[640px] mx-auto">
            The 50-Step Roadmap tells you exactly what to do next. This kit gives you the exact
            hands-on gear Jas uses in every session to execute it correctly &mdash; the same kit
            your Foundation Phase videos assume you already have on hand &mdash; so you&rsquo;re
            never left wondering what leash, treats, or tools Cali K9 actually uses.{" "}
            <strong className="text-ink">
              One click adds it to the order you just placed &mdash; no need to re-enter your card.
            </strong>
          </p>

          <blockquote className="max-w-[560px] mx-auto mt-6 border-l-[3px] border-blue-500 pl-4.5 font-ui text-base italic text-ink text-left">
            &ldquo;You can take a dog out of the pack, but not the pack out of the dog.&rdquo;
            <span className="block mt-1.5 font-ui text-[11.5px] not-italic tracking-[0.5px] uppercase text-gray-muted">
              &mdash; Jas Leverette
            </span>
          </blockquote>

          <KitOffer />
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-12 max-md:py-8 bg-cream text-center">
        <div className="max-w-[640px] mx-auto px-6 max-[480px]:px-4">
          <h3 className="font-display text-[24px] text-ink mb-3.5">
            SYSTEM + TOOLS + REPETITION = TRANSFORMATION
          </h3>
          <p className="font-body text-[14.5px] text-[#4b4f58] leading-[1.7]">
            The Cali K9 5 Pillar, 50-Step System&trade; tells you exactly what to do next &mdash;
            but several Foundation Phase steps are hands-on: leash pressure work, marker training
            with high-value food, and tug-based engagement. Owners who start with the right tools
            execute those steps correctly in one sitting instead of pausing mid-lesson to figure
            out what leash or treats Cali K9 actually uses.
          </p>
          <p className="font-ui text-xs text-gray-muted/70 mt-10">
            &copy; 2026 Cali K9&reg; &middot;{" "}
            <Link href="/privacy-policy" className="hover:text-ink">Privacy Policy</Link>
            {" · "}
            <Link href="/terms-of-service" className="hover:text-ink">Terms</Link>
            {" · "}
            <Link href="/refund-policy" className="hover:text-ink">Refund Policy</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
