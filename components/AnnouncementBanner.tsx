"use client";

import { useState, useEffect } from "react";

const DISMISSED_KEY = "ck_banner_dismissed";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(DISMISSED_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }

  return (
    <div
      id="site-banner"
      role="region"
      aria-label="Announcement"
      className={`fixed top-0 left-0 right-0 min-h-[40px] z-[1001] flex items-center justify-center bg-blue-500 text-white px-4 pr-12 py-2 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <p className="font-ui text-[13px] font-semibold tracking-[0.5px] text-white text-center leading-tight max-sm:text-xs max-sm:tracking-normal max-sm:leading-normal">
        Don&apos;t know which program fits your dog?{" "}
        <a
          href="/evaluation"
          className="text-[#c2d9ff] font-bold no-underline hover:underline whitespace-nowrap max-sm:whitespace-normal"
        >
          Schedule an Evaluation &rarr;
        </a>{" "}
        &middot;{" "}
        <a
          href="tel:5108900298"
          className="text-[#c2d9ff] font-bold no-underline hover:underline whitespace-nowrap"
        >
          (510) 890-0298
        </a>{" "}
        &middot;{" "}
        <a
          href="mailto:Training@calik9.com"
          className="text-[#c2d9ff] font-bold no-underline hover:underline whitespace-nowrap"
        >
          Training@calik9.com
        </a>
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white/70 text-lg leading-none cursor-pointer p-[6px_8px] hover:text-white transition-colors"
      >
        &#x2715;
      </button>
    </div>
  );
}
