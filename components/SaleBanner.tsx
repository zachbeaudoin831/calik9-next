"use client";

import { useState } from "react";

export default function SaleBanner() {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    document.documentElement.classList.add("banner-dismissed");
  };

  if (dismissed) return null;

  return (
    <div
      id="sale-banner"
      className="fixed top-0 left-0 right-0 z-[1001] h-10 flex items-center justify-center px-4"
      style={{ background: "#B22234" }}
    >
      <p className="font-ui text-[16px] font-bold tracking-[1px] uppercase text-center leading-none text-white">
        🎆 4th of July Sale &mdash; 20% off all dog training packages now through July 4th. Use code{" "}
        <span className="inline-block bg-white text-[#3C3B6E] px-2.5 py-0.5 rounded-sm tracking-[2px] mx-1">
          USA
        </span>
        at checkout. 🎇
      </p>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors text-lg font-bold leading-none"
      >
        ✕
      </button>
    </div>
  );
}
