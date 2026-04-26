"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: { url: string; altText: string | null }[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  if (!active) {
    return (
      <div className="rounded-lg overflow-hidden bg-off">
        <div className="w-full aspect-square flex items-center justify-center">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-20" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="rounded-lg overflow-hidden bg-off">
        <Image
          key={active.url}
          src={active.url}
          alt={active.altText ?? title}
          width={800}
          height={800}
          className="w-full h-auto block"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {images.map((img, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={img.url + i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-pressed={isActive}
                className={`w-[72px] h-[72px] rounded-md overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-colors p-0 bg-transparent ${
                  isActive ? "border-blue-500" : "border-border hover:border-blue-500"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.altText ?? ""}
                  width={72}
                  height={72}
                  className="w-full h-full object-cover block"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
