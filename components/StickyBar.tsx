"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STICKY_BAR_PAGES: Record<string, { text: string; cta: string; href: string }> = {
  "/in-person": { text: "Don’t Know Which Program Fits Your Dog?", cta: "Book an Evaluation →", href: "/evaluation" },
  "/online-training": { text: "Don’t Know Which Program Fits Your Dog?", cta: "Book an Evaluation →", href: "/evaluation" },
  "/board-and-train": { text: "Don’t Know Which Program Fits Your Dog?", cta: "Book an Evaluation →", href: "/evaluation" },
  "/semi-private": { text: "Don’t Know Which Program Fits Your Dog?", cta: "Book an Evaluation →", href: "/evaluation" },
  "/zoom-group": { text: "Don’t Know Which Program Fits Your Dog?", cta: "Book an Evaluation →", href: "/evaluation" },
  "/group-class": { text: "In-Person Group Training — $197/month", cta: "Sign Up Now", href: "#main-content" },
};

const DISMISS_KEY = "calik9_sticky_bar_dismissed";

export default function StickyBar() {
  const pathname = usePathname();
  const config = STICKY_BAR_PAGES[pathname];
  const [dismissed, setDismissed] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Restore dismissal state for the session.
  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      // sessionStorage can throw in privacy modes; safe to ignore
    }
  }, []);

  // Hide the bar when the footer enters the viewport so it never overlaps it.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!config || dismissed || footerVisible) return null;

  function handleDismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  }

  return (
    <div
      role="complementary"
      aria-label="Quick action"
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-700 px-6 py-3.5 flex items-center justify-center gap-6 z-[999] shadow-[0_-4px_20px_rgba(0,0,0,0.2)] max-md:flex-col max-md:gap-2 max-md:px-4 max-md:py-3 max-md:pr-12"
    >
      <span className="font-ui text-base font-bold tracking-[1px] text-white max-md:text-[13px] max-md:text-center">
        {config.text}
      </span>
      <Link
        href={config.href}
        className="inline-block bg-white text-ink font-ui text-xs font-bold uppercase tracking-[2px] px-5 py-2.5 rounded-sm whitespace-nowrap hover:bg-off transition-colors"
      >
        {config.cta}
      </Link>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors max-md:right-2 max-md:top-2 max-md:translate-y-0"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
