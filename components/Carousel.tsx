"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface CarouselProps {
  slides: ReactNode[];
  ariaLabel: string;
  /** How many slides are visible at once on desktop (>=768px). Mobile always shows 1. */
  desktopPerView?: number;
  /** Arrow/dot colors for dark backgrounds */
  dark?: boolean;
}

export default function Carousel({
  slides,
  ariaLabel,
  desktopPerView = 1,
  dark = false,
}: CarouselProps) {
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);
  const touchX = useRef<number | null>(null);
  const count = slides.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? desktopPerView : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [desktopPerView]);

  const pages = Math.max(1, Math.ceil(count / perView));

  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  const go = (delta: number) => setPage((p) => (p + delta + pages) % pages);

  // First visible slide, clamped so the last page never shows empty space.
  const first = Math.min(page * perView, Math.max(0, count - perView));
  const showControls = pages > 1;

  const arrowClass = `absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
    dark
      ? "bg-white/10 border-white/25 text-white hover:bg-white/20"
      : "bg-white border-black/10 text-ink shadow-sm hover:border-blue-500 hover:text-blue-500"
  }`;

  return (
    <div aria-roledescription="carousel" aria-label={ariaLabel} className="relative">
      <div
        className={`overflow-hidden ${showControls ? "mx-14 max-md:mx-12 max-[480px]:mx-10" : ""}`}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div
          className="flex items-stretch transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${first * (100 / perView)}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 px-2.5"
              style={{ width: `${100 / perView}%` }}
              aria-hidden={i < first || i >= first + perView}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button onClick={() => go(-1)} aria-label="Previous" className={`${arrowClass} left-0`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button onClick={() => go(1)} aria-label="Next" className={`${arrowClass} right-0`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                  i === page
                    ? "bg-blue-500"
                    : dark
                    ? "bg-white/25 hover:bg-white/45"
                    : "bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
