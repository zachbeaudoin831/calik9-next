"use client";

import { useState, useEffect, useRef } from "react";

const CELEB_IMAGES: Record<string, string> = {
  "Kendrick Lamar": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6854768804d5bfc43d06b9bc.jpeg",
  "Steph Curry": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/ca21e46f-9700-4400-8295-1c9adfe69691.png",
  "Kevin Hart": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a6b9da3-df39-4569-b578-091a6cd954e9.png",
  "Dr. Phil": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/f2c6b38a-3fc1-4118-a378-f89440decf1a.png",
  "Coi Leray": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/25b1c02e-df43-4652-8feb-1c70a4c6b475.png",
  "Turks & Caicos Military": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/e6099d33-e4f3-40c0-9728-47f7f1c0bf21.png",
};

const CELEBS = [
  "Kendrick Lamar",
  "Steph Curry",
  "Kevin Hart",
  "Dr. Phil",
  "Demi Moore",
  "Jason Derulo",
  "Coi Leray",
  "San Jose Police Dept",
  "Turks & Caicos Military",
];

export default function CelebBadges() {
  const [active, setActive] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close on outside tap (mobile)
  useEffect(() => {
    function onOutside(e: MouseEvent | TouchEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("touchstart", onOutside);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("touchstart", onOutside);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "48px" }}
    >
      {CELEBS.map((name) => {
        const img = CELEB_IMAGES[name];
        const isActive = active === name;
        return (
          <div
            key={name}
            className={`celeb-badge-wrap${isActive ? " active" : ""}`}
            onMouseEnter={() => img && setActive(name)}
            onMouseLeave={() => setActive(null)}
            onClick={() => img && setActive(isActive ? null : name)}
          >
            {img && (
              <div className="celeb-badge-img" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={name} />
                <div className="celeb-badge-img-name">{name}</div>
              </div>
            )}
            <span className="celeb-badge">
              {name}
              {img && <span className="celeb-badge-hint">▸</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}
