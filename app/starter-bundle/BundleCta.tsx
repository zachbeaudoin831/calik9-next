"use client";

// $27 Starter Bundle checkout. Drop the GHL payment link in here; until then
// the buttons do nothing.
const CHECKOUT_URL: string | null = null;
const PRICE = 27;

export default function BundleCta() {
  const goToCheckout = () => {
    if (!CHECKOUT_URL) return; // placeholder until the payment link is wired
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") {
      w.fbq("track", "InitiateCheckout", { value: PRICE, currency: "USD" });
    }
    window.location.href = CHECKOUT_URL;
  };

  return (
    <>
      {/* Main CTA */}
      <div className="max-w-[640px] mx-auto mt-6 text-center">
        <button
          type="button"
          onClick={goToCheckout}
          className="btn btn-blue btn-lg w-full !py-5 !text-[15px]"
        >
          Yes! Give Me The Starter Bundle &mdash; ${PRICE}
        </button>
        <p className="font-body text-[12.5px] text-gray-muted mt-3">
          Instant digital access &middot; Secure checkout &middot; One-time payment, not a
          subscription
        </p>
      </div>

      {/* Trust row */}
      <ul className="flex justify-center gap-6 flex-wrap mt-6 font-body text-[12.5px] text-ink/70">
        {["Instant access", "Secure checkout", "One-time payment"].map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="text-green-500 font-bold">&#10003;</span> {item}
          </li>
        ))}
      </ul>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] hidden max-md:block">
        <button type="button" onClick={goToCheckout} className="btn btn-blue w-full">
          Get The Starter Bundle &mdash; ${PRICE} &rarr;
        </button>
      </div>
    </>
  );
}
