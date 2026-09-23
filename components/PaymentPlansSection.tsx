// Payment-plans band shown on sales pages. Self-contained dark section so it
// drops into both dark funnel pages and light pages without restyling.
export default function PaymentPlansSection() {
  return (
    <section
      className="py-12 max-md:py-10 border-y border-white/10"
      style={{
        background:
          "linear-gradient(90deg, #0A1F3C 0%, #122E85 50%, #1A3FAB 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-10 max-md:px-6 text-center">
        <span className="font-ui text-[13px] font-semibold tracking-[4px] uppercase text-blue-200/80 block mb-3">
          Flexible Payment Options
        </span>
        <h2 className="font-display text-[clamp(26px,3.2vw,38px)] leading-[1.08] text-white mb-3">
          AFFIRM, KLARNA &amp; IN-HOUSE PAYMENT PLANS AVAILABLE!
        </h2>
        <p className="font-body text-base text-white/70 leading-relaxed mb-6 max-w-[560px] mx-auto">
          Split your dog&rsquo;s training into easy monthly payments. Choose
          your plan at checkout.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {["Affirm", "Klarna", "In-House Plans"].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.18] rounded-full px-5 py-2.5 font-ui text-[14px] font-bold tracking-[1.5px] uppercase text-white"
            >
              <span aria-hidden="true">💳</span> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
