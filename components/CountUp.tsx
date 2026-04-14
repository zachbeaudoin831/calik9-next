"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  className?: string;
}

function parseNumeric(value: string): { prefix: string; number: number; suffix: string } | null {
  const match = value.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    number: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

function formatNumber(n: number, hasCommas: boolean): string {
  const rounded = Math.round(n);
  if (hasCommas) return rounded.toLocaleString();
  return String(rounded);
}

export default function CountUp({ value, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parsed = parseNumeric(value);
    if (!parsed) return;

    const hasCommas = value.includes(",");
    const duration = 1800;
    const fps = 60;
    const totalFrames = Math.round(duration / (1000 / fps));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * parsed.number;

            setDisplay(`${parsed.prefix}${formatNumber(current, hasCommas)}${parsed.suffix}`);

            if (frame >= totalFrames) {
              clearInterval(counter);
              setDisplay(value);
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
