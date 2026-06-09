"use client";

import { useState } from "react";
import FormEmbed from "@/components/FormEmbed";

function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-xl w-full max-w-[520px] max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 text-xl font-bold leading-none z-10 transition-colors"
        >
          ✕
        </button>
        <div className="p-6 pt-10">
          <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-gray-500 mb-1">
            Book Your Evaluation &mdash; Takes 60 Seconds
          </div>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-[40px] text-ink leading-none">$27</span>
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

function CtaButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[540px] bg-[#F59E0B] hover:bg-[#D97706] text-[#111111] font-ui text-[15px] font-black tracking-[2px] uppercase py-5 px-8 rounded-sm transition-colors duration-150 shadow-md hover:shadow-lg active:scale-[0.98]"
    >
      YES &mdash; I WANT MY DOG TO ACTUALLY LISTEN
    </button>
  );
}

function TrustRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-500 font-body text-sm mt-4">
      <span>🔒 Secure Checkout</span>
      <span className="text-gray-300">&middot;</span>
      <span>⚡ Instant Access</span>
      <span className="text-gray-300">&middot;</span>
      <span>✅ 30-Day Guarantee</span>
    </div>
  );
}

export default function EvaluationV2Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      {/* ── Announcement bar ── */}
      <div className="bg-blue-500 text-white text-center py-3 px-4">
        <span className="font-ui text-[13px] font-bold tracking-[3px] uppercase">
          🐾 A Dog Training System &mdash; The 5-Pillar Dog Behavior System 🐾
        </span>
      </div>

      {/* ── Hero ── */}
      <section className="bg-white py-20 max-md:py-12 px-6">
        <div className="max-w-[780px] mx-auto text-center">

          {/* Pill badge */}
          <div className="inline-block border border-[#F59E0B] text-[#92400E] bg-[#FFFBEB] font-ui text-[11px] font-bold tracking-[2.5px] uppercase px-5 py-2.5 mb-10 max-md:mb-8">
            For Dog Owners Watching Their Dog Run The House
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(46px,7.5vw,82px)] font-black text-ink leading-[0.92] uppercase mb-8 max-md:mb-6">
            Use This Dog Training System In 2026 To{" "}
            <span className="text-blue-500">Stop The Chaos,</span>{" "}
            Get Real Obedience, And Make Your Dog Easy To Live With Again
          </h1>

          {/* Body */}
          <p className="font-body text-[17px] text-gray-600 leading-relaxed mb-10 max-md:mb-8 max-w-[620px] mx-auto">
            The <strong className="text-ink">5-Pillar System</strong> is a simple, proven framework &mdash; Obedience,
            Socialization, Agility, Behavior Management, Problem Solving &mdash; that
            removes the guesswork from your dog&rsquo;s training so you always know
            exactly what your dog needs and what to do next.
          </p>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="font-display text-[60px] text-blue-500 leading-none font-bold">$27</span>
            <span className="font-body text-2xl text-gray-400 line-through">$97</span>
            <span className="bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-sm">
              72% Off Today
            </span>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-4">
            <CtaButton onClick={() => setModalOpen(true)} />
          </div>

          <TrustRow />
        </div>
      </section>

      {/* ── Bottom CTA section ── */}
      <section className="bg-gray-100 py-20 max-md:py-12 px-6">
        <div className="max-w-[780px] mx-auto text-center">

          <h2 className="font-display text-[clamp(36px,5.5vw,60px)] font-black text-ink leading-[0.93] uppercase mb-6">
            Ready To Finally Understand Your Dog?
          </h2>

          <p className="font-body text-[17px] text-gray-600 leading-relaxed mb-8 max-w-[520px] mx-auto">
            Get the Behavior Breakthrough Assessment for just $27. Know exactly
            what your dog needs. Build the right plan. Stop guessing.
          </p>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="font-display text-[60px] text-blue-500 leading-none font-bold">$27</span>
            <span className="font-body text-2xl text-gray-400 line-through">$97</span>
            <span className="bg-blue-500 text-white font-ui text-[11px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-sm">
              Today Only
            </span>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-4">
            <CtaButton onClick={() => setModalOpen(true)} />
          </div>

          <TrustRow />

          <p className="text-gray-400 font-body text-sm mt-5">
            Visa &middot; Mastercard &middot; Amex &middot; PayPal &middot; Discover
          </p>
        </div>
      </section>

      {/* ── Booking modal ── */}
      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
