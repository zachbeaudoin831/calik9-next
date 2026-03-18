"use client";

import { useState, useEffect, useRef } from "react";

const CELEB_IMAGES: Record<string, string> = {
  "Kendrick Lamar": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6854768804d5bfc43d06b9bc.jpeg",
  "Steph Curry": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/ca21e46f-9700-4400-8295-1c9adfe69691.png",
  "Kevin Hart": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6a6b9da3-df39-4569-b578-091a6cd954e9.png",
  "Dr. Phil": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/f2c6b38a-3fc1-4118-a378-f89440decf1a.png",
  "Coi Leray": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/64fa8e7b-12fb-4c60-b4fb-b86c9c604038.png",
  "Demi Moore": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/ab72206e-2279-429b-ba30-594f091fd3da.png",
  "San Jose Police Dept": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/e3c3e57d-605c-49f6-8ec3-45f6b6068cb9.png",
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
