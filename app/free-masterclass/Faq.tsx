"use client";

import { useState } from "react";

const FAQS = [
  { q: "Is the masterclass really free?", a: "Yes. There is no charge to register." },
  {
    q: "Is this for beginners?",
    a: "Yes. The training is designed to be understandable for everyday dog owners.",
  },
  {
    q: "What dog problems will you cover?",
    a: "The concepts can apply to obedience, pulling, jumping, lack of focus, recall, reactivity, anxiety, aggression and other common training problems.",
  },
  {
    q: "Is this only for puppies?",
    a: "No. The principles can apply to dogs of different ages depending on the individual dog and behavior.",
  },
  { q: "Is the masterclass live?", a: "Yes, this is a live online session." },
  {
    q: "What do I need?",
    a: "A phone, tablet or computer, internet connection and something to take notes with.",
  },
  {
    q: "How do I get the 50-Step Roadmap?",
    a: "It will be delivered after successful registration.",
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
