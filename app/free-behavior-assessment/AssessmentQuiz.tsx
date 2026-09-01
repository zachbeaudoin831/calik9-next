"use client";

import { useState } from "react";
import Link from "next/link";

// ── Result routing destinations ─────────────────────────────────────────────
// The original funnel design sends every result to a $7, 20-minute call page.
// That page doesn't exist on the site yet, so BOOK_CALL_URL points at the live
// $27 evaluation instead. Swap these as the Elite / VIP / call pages go live.
const BOOK_CALL_URL = "/evaluation-with-behavior-specialist";
const BOOK_CALL_LABEL = "Book Your $27 Evaluation →";

type TierKey = "academy" | "platinum" | "vip";

const RESULTS: Record<
  TierKey,
  {
    title: string;
    desc: string;
    price: string;
    priceNote: string;
    seeText: string;
    url: string | null; // null = tier page not on the site yet
    testi: string;
  }
> = {
  academy: {
    title: "START WITH THE ACADEMY",
    desc: "The complete Cali K9 5 Pillar, 50-Step System™ across all 8 modules, laid out as a clear roadmap you follow from home — meet your dog where they are today and work the steps, in order, toward the trained dog you want. Includes Saturday Live sessions with Jas, the 30-Day Progress Guarantee™, and a free bag of Turbo Treats.",
    price: "$97",
    priceNote: "/month · Cancel anytime",
    seeText: "See Academy details",
    url: "/academy",
    testi: "“My dog is off-leash reliable at 8 months old.” — Amanda K., Miami, FL",
  },
  platinum: {
    title: "ELITE IS YOUR FIT",
    desc: "Everything in the Academy plus 6 months of access, 4 Wednesday small-group coaching sessions with Jas, and personalized troubleshooting making sure each step is done correctly — moving your dog from chaos to control faster.",
    price: "$997",
    priceNote: " one-time",
    seeText: "See Elite details",
    url: null,
    testi: "“Worth every penny. Dog came back calm, focused, obedient.” — Jessica R., Oakland, CA",
  },
  vip: {
    title: "VIP IS YOUR FIT",
    desc: "The full 5 Pillar, 50-Step System with a full year of access, 8 Wednesday coaching sessions, priority booking, the Training Kit included, and a private WhatsApp line to the team for support within 24 hours — the highest level of support for owners working through fear, reactivity, or a dog that is testing every boundary.",
    price: "$2,497",
    priceNote: " one-time",
    seeText: "See VIP details",
    url: null,
    testi: "“The transformation in 30 days was something we never thought possible.” — Robert J., New York, NY",
  },
};

const TOTAL_STEPS = 13;

type Step = number | "contact" | "result";

const SINGLE_SELECT: Record<number, { eyebrow: string; q: string; sub?: string; options: string[] }> = {
  1: {
    eyebrow: "Primary Challenge",
    q: "Which dog do you have?",
    sub: "Pick the one that sounds most like your dog today.",
    options: [
      "Pushy & overconfident — jumps, pulls, ignores commands, tests boundaries",
      "Fearful, anxious, or reactive — nervous or on edge around people or dogs",
      "Good dog, just never properly trained — friendly but no recall, still pulls",
      "A mix of several of these, and I want it handled fast",
    ],
  },
  4: {
    eyebrow: "Severity & Urgency",
    q: "How urgent is this for you right now?",
    options: [
      "Manageable — I just want to improve things",
      "Frustrating — it's affecting daily life",
      "Serious safety concern",
      "Crisis — I need help now",
    ],
  },
  5: {
    eyebrow: "Previous Training Experience",
    q: "Have you tried training before?",
    options: [
      "Never trained formally",
      "Self-taught with videos or books",
      "Group classes before",
      "Private trainer before — it didn't stick",
      "Board and train before — dog reverted once home",
    ],
  },
  6: {
    eyebrow: "Desired Outcome",
    q: "What does success look like for you?",
    options: [
      "Basic listening & manners",
      "Reliable off-leash freedom",
      "A calm, non-reactive dog",
      "A dog I can confidently bring anywhere",
    ],
  },
  7: {
    eyebrow: "Owner Experience Level",
    q: "How would you describe your dog experience?",
    options: [
      "First-time dog owner",
      "Owned dogs before, no formal training",
      "Some training experience",
      "Very experienced",
    ],
  },
  8: {
    eyebrow: "Preferred Learning Format",
    q: "How do you like to learn?",
    options: [
      "Follow videos at my own pace",
      "Live group classes",
      "Structured coaching with accountability",
      "Whatever gets results fastest",
    ],
  },
  10: {
    eyebrow: "Availability",
    q: "How much time can you commit each week?",
    options: [
      "Under 30 minutes a day",
      "30–60 minutes a day",
      "1–2 hours a day",
      "As much as it takes",
    ],
  },
  11: {
    eyebrow: "Budget / Investment Readiness",
    q: "What's your budget range for solving this?",
    options: ["Under $200", "$500 – $1,500", "$1,500 – $5,000", "$5,000+"],
  },
  12: {
    eyebrow: "Training Format",
    q: "Which format interests you most?",
    options: [
      "Online, self-paced",
      "Live online group training",
      "Structured coaching & accountability calls",
      "Whatever gets results fastest",
    ],
  },
};

const BEHAVIOR_PROBLEMS = [
  "Pulling on leash",
  "Jumping on people",
  "Barking / reactivity",
  "Aggression",
  "Separation anxiety",
  "Not listening / ignoring commands",
  "Potty training",
  "Other",
];

const AGES = [
  "Puppy (0–6 months)",
  "Young (6 months – 2 years)",
  "Adult (2–7 years)",
  "Senior (7+ years)",
];

const CITIES = [
  "Miami",
  "Los Angeles",
  "New York",
  "San Francisco",
  "Atlanta",
  "Dallas",
  "Scottsdale",
  "Seattle",
  "Nashville",
  "Chicago",
  "Not near any of these",
  "I'm open to traveling",
];

const fieldClass =
  "w-full font-body text-[15px] text-ink bg-white border-[1.5px] border-border rounded-lg px-4 py-3.5 outline-none focus:border-blue-500 transition-colors";

const labelClass =
  "block font-ui text-[11.5px] font-bold tracking-[1px] uppercase text-gray-muted mb-2";

function OptionButton({
  selected,
  square,
  onClick,
  children,
}: {
  selected?: boolean;
  square?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3.5 text-left px-4.5 py-4 border-[1.5px] rounded-xl font-body text-[15px] font-medium transition-colors cursor-pointer ${
        selected
          ? "border-blue-500 bg-blue-50 text-ink"
          : "border-border bg-white text-ink/80 hover:border-blue-500 hover:bg-blue-50"
      }`}
    >
      <span
        className={`w-[18px] h-[18px] shrink-0 border-[1.5px] ${square ? "rounded-[5px]" : "rounded-full"} ${
          selected ? "bg-blue-500 border-blue-500" : "border-gray-muted"
        }`}
        aria-hidden="true"
      />
      {children}
    </button>
  );
}

function ContinueButton({ onClick, className = "" }: { onClick: () => void; className?: string }) {
  return (
    <button type="button" onClick={onClick} className={`btn btn-blue w-full ${className}`}>
      Continue &rarr;
    </button>
  );
}

export default function AssessmentQuiz() {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [problems, setProblems] = useState<string[]>([]);
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactError, setContactError] = useState(false);
  const [history, setHistory] = useState<Step[]>([]);

  const goNext = (from: Step) => {
    setHistory((h) => [...h, from]);
    if (typeof from === "number") {
      setStep(from < TOTAL_STEPS ? from + 1 : "contact");
    }
  };

  const goBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setStep(prev);
  };

  const pick = (q: number, v: number) => {
    setAnswers((a) => ({ ...a, [q]: v }));
    goNext(q);
  };

  const toggleProblem = (p: string) => {
    setProblems((list) => (list.includes(p) ? list.filter((x) => x !== p) : [...list, p]));
  };

  const submitContact = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!name.trim() || !emailOk) {
      setContactError(true);
      return;
    }
    setContactError(false);
    // Base pixel (init + PageView) loads globally in the root layout.
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") w.fbq("track", "Lead");
    setHistory((h) => [...h, "contact"]);
    setStep("result");
  };

  const retake = () => {
    setAnswers({});
    setProblems([]);
    setAge("");
    setBreed("");
    setLocation("");
    setName("");
    setEmail("");
    setPhone("");
    setContactError(false);
    setHistory([]);
    setStep(1);
  };

  // Recommendation is directional only — driven by primary challenge (Q1),
  // severity/urgency (Q4), and budget (Q11). Every other answer is collected
  // for the team to review, not scored.
  const score = (): TierKey => {
    const total = (answers[1] || 0) + (answers[4] || 0) + (answers[11] || 0);
    if (total <= 4) return "academy";
    if (total <= 7) return "platinum";
    return "vip";
  };

  const progressN = typeof step === "number" ? step : TOTAL_STEPS;
  const pct = Math.round((progressN / TOTAL_STEPS) * 100);
  const stepLabel =
    step === "result"
      ? "Your Results"
      : step === "contact"
        ? "Almost Done"
        : `Question ${step} of ${TOTAL_STEPS}`;

  const single = typeof step === "number" ? SINGLE_SELECT[step] : undefined;
  const result = step === "result" ? RESULTS[score()] : undefined;

  return (
    <div className="max-w-[680px] mx-auto bg-white border border-border rounded-[18px] shadow-lg p-10 max-md:p-6">
      {/* Progress */}
      <div className="flex justify-between font-ui text-[11px] font-bold tracking-[1px] uppercase text-gray-muted mb-2">
        <span>{stepLabel}</span>
        <span>{pct}%</span>
      </div>
      <div
        className="h-[5px] rounded-full bg-cream overflow-hidden mb-7"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full bg-blue-500 transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>

      {/* Single-select questions — auto-advance on click */}
      {single && typeof step === "number" && (
        <div>
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
            {single.eyebrow}
          </div>
          <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">
            {single.q}
          </h3>
          {single.sub && <p className="font-body text-[13px] text-gray-muted mb-5">{single.sub}</p>}
          <div className={`flex flex-col gap-2.5 ${single.sub ? "" : "mt-5"}`}>
            {single.options.map((opt, i) => (
              <OptionButton key={opt} onClick={() => pick(step, i + 1)}>
                {opt}
              </OptionButton>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: age + breed */}
      {step === 2 && (
        <div>
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
            Dog Age &amp; Breed
          </div>
          <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">
            Tell us about your dog
          </h3>
          <p className="font-body text-[13px] text-gray-muted mb-5">
            This helps us match you with the right approach.
          </p>
          <label className={labelClass} htmlFor="quiz-age">
            Dog&rsquo;s age
          </label>
          <select
            id="quiz-age"
            className={`${fieldClass} mb-4`}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">Select age range</option>
            {AGES.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <label className={labelClass} htmlFor="quiz-breed">
            Breed (or closest match)
          </label>
          <input
            id="quiz-breed"
            className={`${fieldClass} mb-4`}
            type="text"
            placeholder="e.g. German Shepherd, mixed breed, not sure"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <ContinueButton onClick={() => goNext(2)} />
        </div>
      )}

      {/* Step 3: multi-select behavior problems */}
      {step === 3 && (
        <div>
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
            Current Behavior Problems
          </div>
          <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-5">
            Which of these are you seeing? (select all that apply)
          </h3>
          <div className="flex flex-col gap-2.5">
            {BEHAVIOR_PROBLEMS.map((p) => (
              <OptionButton key={p} square selected={problems.includes(p)} onClick={() => toggleProblem(p)}>
                {p}
              </OptionButton>
            ))}
          </div>
          <ContinueButton onClick={() => goNext(3)} className="mt-4" />
        </div>
      )}

      {/* Step 9: location */}
      {step === 9 && (
        <div>
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
            Location
          </div>
          <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-5">
            Are you near one of our in-person cities?
          </h3>
          <select
            className={`${fieldClass} mb-4`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Closest city"
          >
            <option value="">Select the closest option</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ContinueButton onClick={() => goNext(9)} />
        </div>
      )}

      {/* Step 13: off-leash scale */}
      {step === 13 && (
        <div>
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
            Off-Leash Engagement
          </div>
          <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">
            Rate your dog&rsquo;s off-leash obedience today, in a busy park or highly stimulating
            environment
          </h3>
          <p className="font-body text-[13px] text-gray-muted mb-5">
            1 = fully distracted, disengaged, and out of control &middot; 10 = fully obedient and
            engaged
          </p>
          <div className="flex gap-1.5 max-md:gap-1">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => pick(13, n)}
                className="flex-1 aspect-square flex items-center justify-center border-[1.5px] border-border rounded-lg bg-white font-ui text-[15px] max-md:text-[12px] font-bold text-ink/80 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                {n}
              </button>
            ))}
          </div>
          <div className="flex justify-between font-ui text-[10.5px] font-semibold tracking-[0.5px] uppercase text-gray-muted mt-2.5">
            <span>Out Of Control</span>
            <span>Fully Engaged</span>
          </div>
        </div>
      )}

      {/* Contact gate */}
      {step === "contact" && (
        <div>
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
            Almost Done
          </div>
          <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">
            Where should we send your results?
          </h3>
          <p className="font-body text-[13px] text-gray-muted mb-5">
            Your personalized recommendation is next &mdash; we&rsquo;ll also send a copy to your
            email.
          </p>
          <label className={labelClass} htmlFor="quiz-name">
            Name
          </label>
          <input
            id="quiz-name"
            className={`${fieldClass} mb-4`}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className={labelClass} htmlFor="quiz-email">
            Email
          </label>
          <input
            id="quiz-email"
            className={`${fieldClass} mb-4`}
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={labelClass} htmlFor="quiz-phone">
            Phone (optional)
          </label>
          <input
            id="quiz-phone"
            className={`${fieldClass} mb-4`}
            type="tel"
            autoComplete="tel"
            placeholder="(555) 555-5555"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="button" onClick={submitContact} className="btn btn-blue w-full">
            See My Results &rarr;
          </button>
          {contactError && (
            <p className="font-body text-[12.5px] text-red-500 mt-2.5 text-center" role="alert">
              Please enter your name and a valid email.
            </p>
          )}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="text-center">
          <div className="inline-block bg-amber-400 text-[#2b1d05] font-ui text-[11px] font-bold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-4">
            Recommended For You
          </div>
          <h3 className="font-display text-[32px] max-md:text-[26px] text-ink leading-tight mb-3.5">
            {result.title}
          </h3>
          <p className="font-body text-[14.5px] text-gray-muted leading-relaxed max-w-[520px] mx-auto mb-6">
            {result.desc}
          </p>
          <div className="font-display text-[34px] text-ink mb-5">
            {result.price}
            <span className="font-body text-[13px] text-gray-muted">{result.priceNote}</span>
          </div>
          <div className="bg-cream rounded-xl px-5 py-4 mb-5 font-body text-[13.5px] italic text-ink/80 text-left">
            {result.testi}
          </div>
          <Link href={BOOK_CALL_URL} className="btn btn-blue w-full">
            {BOOK_CALL_LABEL}
          </Link>
          {result.url && (
            <p className="font-body text-[13px] text-gray-muted mt-6 pt-6 border-t border-border">
              <Link href={result.url} className="text-blue-500 underline">
                {result.seeText} &rarr;
              </Link>{" "}
              without booking a call first.
            </p>
          )}
          <button
            type="button"
            onClick={retake}
            className="font-body text-[12.5px] text-gray-muted underline mt-4 cursor-pointer bg-transparent border-none"
          >
            &#8635; Retake the quiz
          </button>
        </div>
      )}

      {step !== 1 && step !== "result" && (
        <button
          type="button"
          onClick={goBack}
          className="block mx-auto font-body text-[12.5px] text-gray-muted underline mt-5 cursor-pointer bg-transparent border-none"
        >
          &larr; Back
        </button>
      )}
    </div>
  );
}
