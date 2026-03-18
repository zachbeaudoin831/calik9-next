"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    // ── Scroll Reveal ──
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

    // ── Count-Up Numbers ──
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseFloat(el.dataset.target ?? "0");
          const suffix = el.dataset.suffix ?? "";
          const prefix = el.dataset.prefix ?? "";
          const duration = 1500;
          const startTime = performance.now();
          function tick(now: number) {
            const p = Math.min((now - startTime) / duration, 1);
            const eased = 1 - (1 - p) ** 3;
            const val = Number.isInteger(target)
              ? Math.round(eased * target)
              : (eased * target).toFixed(1);
            el.textContent = prefix + val + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".count-up").forEach((el) => countObs.observe(el));

    return () => {
      revealObs.disconnect();
      countObs.disconnect();
    };
  }, []);

  return null;
}
