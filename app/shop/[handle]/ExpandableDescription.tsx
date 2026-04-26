"use client";

import { useEffect, useRef, useState } from "react";

const COLLAPSED_HEIGHT = 160; // px — keeps Add-to-Cart above the fold

export default function ExpandableDescription({ html }: { html: string }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    setOverflows(ref.current.scrollHeight > COLLAPSED_HEIGHT + 8);
  }, [html]);

  return (
    <div className="mb-6">
      <div className="relative">
        <div
          ref={ref}
          className="product-description font-body text-base text-gray-muted leading-relaxed overflow-hidden"
          style={{ maxHeight: expanded || !overflows ? "none" : `${COLLAPSED_HEIGHT}px` }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {overflows && !expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)" }}
            aria-hidden="true"
          />
        )}
      </div>
      {overflows && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 font-ui text-xs font-bold tracking-[2px] uppercase text-blue-500 hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0"
        >
          {expanded ? "See less" : "See more details"}
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}
    </div>
  );
}
