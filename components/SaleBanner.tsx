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
    <div id="sale-banner" className="fixed top-0 left-0 right-0 z-[1001] h-10 bg-[#F59E0B] text-[#122E85] flex items-center justify-center px-4">
      <p className="font-ui text-sm font-bold tracking-[1px] uppercase text-center leading-none">
        ☀️ Summer Sale &mdash; 20% off all dog training packages.{" "}
        Use code{" "}
        <span className="inline-block bg-[#122E85] text-white px-2.5 py-0.5 rounded-sm tracking-[2px] mx-1">
          SUMMER20
        </span>{" "}
        at checkout.
      </p>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#122E85] hover:opacity-60 transition-opacity text-lg font-bold leading-none"
      >
        ✕
      </button>
    </div>
  );
}
