"use client";

import { useState, useEffect, useRef } from "react";

export default function SaleBanner() {
  const [dismissed, setDismissed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const h = ref.current.offsetHeight;
        document.documentElement.style.setProperty("--banner-h", `${h}px`);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    document.documentElement.style.setProperty("--banner-h", "0px");
    document.documentElement.classList.add("banner-dismissed");
  };

  if (dismissed) return null;

  return (
    <div
      ref={ref}
      id="sale-banner"
      className="fixed top-0 left-0 right-0 z-[1001] min-h-10 py-2 flex items-center justify-center px-10"
      style={{ background: "#F59E0B" }}
    >
      <p className="font-ui text-[16px] font-bold tracking-[1px] uppercase text-center leading-none text-[#122E85]">
        ☀️ Summer Sale &mdash; 20% off all dog training packages. Use code{" "}
        <span className="inline-block bg-[#122E85] text-white px-2.5 py-0.5 rounded-sm tracking-[2px] mx-1">
          SUMMER20
        </span>
        at checkout.
      </p>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#122E85]/70 hover:text-[#122E85] transition-colors text-lg font-bold leading-none"
      >
        ✕
      </button>
    </div>
  );
}
