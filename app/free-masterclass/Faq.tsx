"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is the masterclass really free?",
    a: "Yes. There is no charge to register or attend, and no credit card is required. The 50-Step Roadmap is included free when you register.",
  },
  {
    q: "My dog is reactive or aggressive. Is this for me?",
    a: "Yes. Reactivity is one of the most common reasons owners join, and Jas covers what's actually driving it. For serious aggression or safety concerns, the masterclass is still the right first step, and our team can point you to hands-on help afterward.",
  },
  {
    q: "I have a puppy. Is it too early?",
    a: "No. Puppies are the easiest dogs to get right, because you're building good habits from day one instead of undoing bad ones later.",
  },
  {
    q: "My dog is older. Is it too late?",
    a: "No. Older dogs can learn the system, and they're often calmer and more focused than puppies once they understand what you're asking.",
  },
  {
    q: "I've tried trainers, classes and YouTube. Why would this be different?",
    a: "Most training fails because it's random tips and isolated commands with no order. The masterclass shows you the system and the sequence, which is usually the piece that was missing.",
  },
  {
    q: "When is it, and how long does it take?",
    a: "It's live on Zoom every Saturday at 10:00 AM Pacific / 1:00 PM Eastern. Register and we'll send the link and a reminder.",
  },
  {
    q: "What if I can't make it live?",
    a: "Register anyway. Everyone who registers gets the 50-Step Roadmap, and we'll send you the replay details.",
  },
  {
    q: "Does my dog need to be with me?",
    a: "No. All you need is a phone, tablet or computer and something to take notes with. Your dog can relax.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {FAQS.map((faq, i) => (
        <div key={faq.q} className="border-b border-border">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left font-body text-[15px] font-bold text-ink py-4 cursor-pointer bg-transparent border-none"
            aria-expanded={open === i}
          >
            {faq.q}
            <span className="text-blue-500 text-xl leading-none shrink-0" aria-hidden="true">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="font-body text-[14px] text-[#4b4f58] leading-relaxed pb-4">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
