"use client";

import { useState } from "react";
import FormEmbed from "@/components/FormEmbed";

/* ── Booking Modal ── */
function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="rounded-xl w-full max-w-[520px] max-h-[90vh] overflow-y-auto relative shadow-2xl"
        style={{ background: "linear-gradient(135deg, #122E85 0%, #122E85 50%, #1A3FAB 100%)" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white text-xl font-bold leading-none z-10 transition-colors"
        >
          ✕
        </button>
        <div className="p-6 pt-10">
          <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/60 mb-1">
            Book Your Evaluation &mdash; Takes 60 Seconds
          </div>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-[40px] text-white leading-none">$27</span>
          </div>
          <FormEmbed
            formId="GtiGDcoxe0fG5ufwj7Km"
            formName="Evaluation Cart"
            title="Book Your Evaluation"
            height={804}
          />
        </div>
      </div>
    </div>
  );
}

export default function CheckoutExamplePage() {
  const [orderBump, setOrderBump] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const basePrice = 27;
  const bumpPrice = 47;
  const total = basePrice + (orderBump ? bumpPrice : 0);

  return (
    <main className="min-h-screen bg-[#F5F0EB] text-[#0D0D0D]">
      <style>{`
        #site-nav, #sale-banner, #site-footer, #sticky-bar,
        #chat-widget-container, .chat-widget-container, #lc-chat-widget,
        iframe[src*="leadconnectorhq.com"]:not([title]),
        iframe[src*="msgsndr.com"]:not([title]),
        div[data-widget-id], #LeadConnector, .lc-chat-bubble,
        .lc-chat-wrapper, [id*="chat-widget"], [class*="chat-widget"] {
          display: none !important;
        }
      `}</style>

      {/* ── Trust Bar ── */}
      <div className="bg-[#122E85] text-white py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap font-ui text-[12px] font-bold tracking-[1px] uppercase max-md:text-[11px] max-md:gap-2">
          <span className="flex items-center gap-1.5">✅ 30-Day Money Back Guarantee</span>
          <span className="text-white/30 max-md:hidden">|</span>
          <span className="flex items-center gap-1.5">🔒 Secure Order</span>
          <span className="text-white/30 max-md:hidden">|</span>
          <span className="flex items-center gap-1.5">⚡ Get Instant Confirmation</span>
        </div>
      </div>

      {/* ── Headline ── */}
      <div className="text-center py-8 px-4">
        <h1 className="font-display text-[clamp(26px,4vw,44px)] leading-tight text-[#0D0D0D] uppercase">
          Book Your{" "}
          <span className="text-[#D4820A]">Cali K9 Evaluation</span>{" "}
          Now
        </h1>
      </div>

      {/* ── Two-column layout ── */}
      <div className="max-w-[1060px] mx-auto px-4 pb-16 grid lg:grid-cols-[1fr_400px] gap-5 items-start">

        {/* ════════════════════ LEFT COLUMN ════════════════════ */}
        <div className="flex flex-col gap-4">

          {/* Step 1 — Contact Information */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-ui text-base font-bold">Contact Information</h2>
              </div>
              <button className="text-[#D4820A] font-ui text-sm font-semibold underline underline-offset-2">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3 max-[480px]:grid-cols-1">
              <div>
                <label className="block font-ui text-[10px] font-bold uppercase tracking-[2px] text-gray-400 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#122E85] transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[10px] font-bold uppercase tracking-[2px] text-gray-400 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#122E85] transition-colors"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block font-ui text-[10px] font-bold uppercase tracking-[2px] text-gray-400 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#122E85] transition-colors"
              />
            </div>
            <div>
              <label className="block font-ui text-[10px] font-bold uppercase tracking-[2px] text-gray-400 mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#122E85] transition-colors"
              />
            </div>
          </div>

          {/* Step 2 — About Your Dog */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#122E85] flex items-center justify-center shrink-0">
                <span className="text-white font-ui font-bold text-sm">2</span>
              </div>
              <h2 className="font-ui text-base font-bold">Tell Us About Your Dog</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3 max-[480px]:grid-cols-1">
              <div>
                <label className="block font-ui text-[10px] font-bold uppercase tracking-[2px] text-gray-400 mb-1.5">
                  Dog&rsquo;s Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Buddy"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#122E85] transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[10px] font-bold uppercase tracking-[2px] text-gray-400 mb-1.5">
                  Breed
                </label>
                <input
                  type="text"
                  placeholder="e.g. Golden Retriever"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#122E85] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-ui text-[10px] font-bold uppercase tracking-[2px] text-gray-400 mb-1.5">
                Main Behavior Issue
              </label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#122E85] transition-colors bg-white text-gray-600 appearance-none">
                <option value="">Select one…</option>
                <option>Aggression toward people</option>
                <option>Aggression toward other dogs</option>
                <option>Reactivity / lunging on leash</option>
                <option>Anxiety / fearfulness</option>
                <option>Jumping / pulling on leash</option>
                <option>Not listening / ignoring commands</option>
                <option>Destructive behavior (chewing, digging)</option>
                <option>Separation anxiety</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* ── Order Bump ── */}
          <div className="rounded-xl border-2 border-dashed border-[#D4820A] bg-white p-5">
            <label htmlFor="order-bump" className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="order-bump"
                checked={orderBump}
                onChange={(e) => setOrderBump(e.target.checked)}
                className="mt-0.5 w-5 h-5 shrink-0 accent-[#D4820A] cursor-pointer"
              />
              <div>
                <div className="inline-block bg-[#D4820A] text-white font-ui text-[10px] font-bold uppercase tracking-[2px] px-2.5 py-1 rounded mb-2.5">
                  ⚡ 84% Off — One-Time Add-On
                </div>
                <p className="font-ui text-[#D4820A] font-bold text-sm uppercase tracking-[0.5px] mb-1.5 leading-snug">
                  YES! Add The Cali K9 Starter Course Bundle For 84% Off
                </p>
                <h3 className="font-bold text-[#0D0D0D] text-[15px] mb-3 underline underline-offset-2 leading-snug">
                  Start Training Your Dog Before Your Evaluation Even Happens:
                </h3>
                <ul className="space-y-1.5 mb-3">
                  {[
                    "Online Training 2.0 Mini Course ($197 value)",
                    "Dog Psychology 101 ($47 value)",
                    "10 Rules To Stop Destructive Behavior ($47 value)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Walk into your evaluation already knowing your dog&rsquo;s psychology and core training principles. Get faster results from day one. Normally $291. Yours for just $47.
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-[#0D0D0D]">$47.00</span>
                  <span className="text-gray-400 line-through text-sm">$291.00</span>
                </div>
              </div>
            </label>
          </div>

          {/* ── Order Total + CTA ── */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between py-3 text-sm">
                <span className="text-gray-600">Cali K9 Behavior Evaluation</span>
                <span className="font-semibold">$27.00</span>
              </div>
              {orderBump && (
                <div className="flex justify-between py-3 text-sm">
                  <span className="text-gray-600">Cali K9 Starter Course Bundle</span>
                  <span className="font-semibold">$47.00</span>
                </div>
              )}
              <div className="flex justify-between py-3">
                <span className="font-bold text-base">Total Today</span>
                <span className="font-display text-xl font-bold text-[#122E85]">${total}.00</span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-ui text-sm font-bold uppercase tracking-[2px] py-4 rounded-lg mt-4 transition-colors shadow-[0_4px_20px_rgba(22,163,74,0.35)]"
            >
              COMPLETE MY BOOKING →
            </button>

            <div className="flex justify-center gap-5 mt-3 font-ui text-[11px] text-gray-400 flex-wrap">
              <span>🔒 256-bit SSL</span>
              <span>⚡ Instant Confirmation</span>
              <span>✅ 30-Day Guarantee</span>
            </div>
          </div>

          {/* ── Guarantee ── */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 bg-[#122E85]/[0.08] rounded-full flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <p className="font-ui text-[11px] font-bold uppercase tracking-[1.5px] text-[#122E85] mb-2 leading-relaxed">
                  Your Booking Is Backed By Our Unconditional 30-Day Money-Back Guarantee
                </p>
                <p className="font-body text-sm text-gray-600 italic leading-relaxed">
                  Book your evaluation with complete confidence. If for any reason you&rsquo;re not satisfied with your evaluation session, contact us within 30 days and we&rsquo;ll refund your purchase in full &mdash; no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════ RIGHT COLUMN ════════════════════ */}
        <div className="flex flex-col gap-4">

          {/* Product Hero Image */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67cf3c0717e9d95dac991999.png"
              alt="Cali K9 — Behavior Evaluation with Jas Leverette"
              className="w-full h-auto block"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <p className="font-ui text-[10px] font-bold uppercase tracking-[3px] text-[#D4820A] mb-2">
              Order Summary
            </p>
            <h3 className="font-display text-xl font-bold text-[#0D0D0D] mb-4 leading-tight uppercase">
              Cali K9 Behavior Evaluation &mdash; 1-on-1 Session
            </h3>
            <ul className="space-y-3">
              {[
                {
                  bold: "60-minute 1-on-1 session",
                  rest: " with a certified Cali K9 behavior specialist",
                },
                {
                  bold: "Full behavioral assessment",
                  rest: " of your dog&rsquo;s specific triggers, tendencies &amp; root causes",
                },
                {
                  bold: "Custom training roadmap",
                  rest: " — a step-by-step plan built for your exact dog and situation",
                },
                {
                  bold: "Program recommendation",
                  rest: " — we tell you exactly what fits your dog and your budget, no pressure",
                },
                {
                  bold: "Priority scheduling",
                  rest: " — confirmed session within 48 hours of booking",
                },
              ].map((item) => (
                <li key={item.bold} className="flex gap-2.5 text-sm leading-relaxed">
                  <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
                  <span>
                    <strong>{item.bold}</strong>
                    <span dangerouslySetInnerHTML={{ __html: item.rest }} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
              <span className="font-display text-3xl font-bold text-[#122E85]">$27</span>
              <span className="text-gray-400 line-through text-lg">$97</span>
              <span className="bg-[#122E85] text-white font-ui text-[10px] font-bold uppercase tracking-[2px] px-2.5 py-1 rounded">
                72% OFF
              </span>
            </div>
          </div>

          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <p className="font-body text-sm italic text-gray-700 leading-relaxed mb-3">
              &ldquo;Jas changed our lives. Our reactive German Shepherd is now calm, focused, and listens perfectly &mdash; off leash. The evaluation alone showed us exactly what we were doing wrong. Worth every single penny.&rdquo;
            </p>
            <p className="font-ui text-sm font-bold text-[#122E85]">— Sarah M.</p>
            <p className="font-ui text-[11px] text-gray-400 mt-0.5">Board &amp; Train Client &middot; Bay Area, CA</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <p className="font-body text-sm italic text-gray-700 leading-relaxed mb-3">
              &ldquo;I was skeptical because we&rsquo;d tried two other trainers before. The Cali K9 evaluation gave me more clarity on my dog&rsquo;s behavior than two years of other training combined. Booked the board &amp; train on the spot.&rdquo;
            </p>
            <p className="font-ui text-sm font-bold text-[#122E85]">— Marcus T.</p>
            <p className="font-ui text-[11px] text-gray-400 mt-0.5">Board &amp; Train Client &middot; Los Angeles, CA</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-black/[0.06]">
            <p className="font-body text-sm italic text-gray-700 leading-relaxed mb-3">
              &ldquo;I&rsquo;ve watched Jas on Netflix and was blown away. Getting the evaluation and then going through the in-person program was the best decision I&rsquo;ve made for my dog. The results speak for themselves.&rdquo;
            </p>
            <p className="font-ui text-sm font-bold text-[#122E85]">— Jennifer K.</p>
            <p className="font-ui text-[11px] text-gray-400 mt-0.5">In-Person Training Client &middot; Miami, FL</p>
          </div>
        </div>
      </div>

      {/* ── Page Footer ── */}
      <div className="text-center py-6 border-t border-black/[0.06] px-4">
        <p className="font-ui text-[11px] uppercase tracking-[1px] text-gray-400">
          &copy; {new Date().getFullYear()} Cali K9&reg;. All rights reserved.&nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <a href="/privacy-policy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
          &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <a href="/refund-policy" className="hover:text-gray-600 transition-colors">Refund Policy</a>
          &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <a href="/terms-of-service" className="hover:text-gray-600 transition-colors">Terms of Service</a>
        </p>
        <p className="font-ui text-[10px] uppercase tracking-[1px] text-gray-300 mt-1.5">
          256-Bit SSL Encrypted &middot; Secure Checkout
        </p>
      </div>

      {/* ── Booking Modal ── */}
      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
