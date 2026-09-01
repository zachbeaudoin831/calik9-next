"use client";

import { useEffect, useState } from "react";

// Mobile sticky CTA that appears once the visitor scrolls past the
// registration card in the hero.
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const regCard = document.getElementById("register");
    if (!regCard) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    observer.observe(regCard);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] hidden max-md:block">
      <a href="#register" className="btn btn-blue w-full">
        Reserve My Free Seat &rarr;
      </a>
    </div>
  );
}
