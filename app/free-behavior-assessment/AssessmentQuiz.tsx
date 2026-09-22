"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DOG_TYPES, SESSION_KEY, resolveDogType, type SessionResult } from "./results/content";

// After the contact gate, the visitor is sent to one of three real result
// pages: /free-behavior-assessment/results/{pushy|fearful|untrained}.
// Nothing about paid programs or the call is shown inside the assessment.
const RESULT_BASE = "/free-behavior-assessment/results";

const TOTAL_STEPS = 13;

type Step = number | "contact";

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
    options: ["Under $200", "$500 – $1,500", "Whatever it takes"],
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
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [problems, setProblems] = useState<string[]>([]);
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactError, setContactError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [history, setHistory] = useState<Step[]>([]);

  // Warm the three result pages so the reveal is instant.
  useEffect(() => {
    if (step === "contact") {
      for (const t of DOG_TYPES) router.prefetch(`${RESULT_BASE}/${t}`);
    }
  }, [step, router]);

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

  // Internal only — never shown to the visitor. Sent to GHL so the team can
  // see which program the answers point to. Driven by primary challenge
  // (Q1), urgency (Q4) and budget (Q11).
  const tier = (): "academy" | "elite" | "vip" => {
    if (answers[11] === 1) return "academy";
    // "Whatever it takes" (option 3) scores like the old top bracket.
    const budgetScore = answers[11] === 3 ? 4 : answers[11] || 0;
    const total = (answers[1] || 0) + (answers[4] || 0) + budgetScore;
    if (total <= 4) return "academy";
    if (total <= 7) return "elite";
    return "vip";
  };

  const submitContact = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!firstName.trim() || !emailOk) {
      setContactError(true);
      return;
    }
    setContactError(false);
    setSubmitting(true);

    // Base pixel (init + PageView) loads globally in the root layout.
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === "function") w.fbq("track", "Lead");

    const opt = (q: number) => (answers[q] ? SINGLE_SELECT[q]?.options[answers[q] - 1] : undefined);
    const type = resolveDogType({
      primary: answers[1],
      problems,
      previousTraining: answers[5],
      outcome: answers[6],
      offLeash: answers[13],
    });

    // Personalization for the result page — first name + qualification
    // signals. Session-only, never in the URL.
    const session: SessionResult = {
      firstName: firstName.trim(),
      type,
      urgency: opt(4),
      budget: opt(11),
      problems,
      at: Date.now(),
    };
    try {
      window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch {
      // private mode etc. — result page still renders, just not personalized
    }

    // Send the assessment to GHL (contact + tags + note + custom fields).
    // Fire-and-forget so the result page never waits on the network.
    const payload = {
      name: firstName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      tier: tier(),
      resultType: type,
      answers: {
        dogType: opt(1),
        age,
        breed,
        problems,
        urgency: opt(4),
        previousTraining: opt(5),
        outcome: opt(6),
        ownerExperience: opt(7),
        learningFormat: opt(8),
        location,
        timePerWeek: opt(10),
        budget: opt(11),
        trainingFormat: opt(12),
        offLeash: answers[13],
      },
    };
    try {
      fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // never block the result page
    }

    router.push(`${RESULT_BASE}/${type}`);
  };

  const progressN = typeof step === "number" ? step : TOTAL_STEPS;
  const pct = Math.round((progressN / TOTAL_STEPS) * 100);
  const stepLabel = step === "contact" ? "Results Ready" : `Question ${step} of ${TOTAL_STEPS}`;

  const single = typeof step === "number" ? SINGLE_SELECT[step] : undefined;

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

      {/* Contact gate — the only thing between Q13 and the result */}
      {step === "contact" && (
        <div>
          <div className="font-ui text-[12px] font-bold tracking-[2px] uppercase text-blue-500 mb-2.5">
            Assessment Complete
          </div>
          <h3 className="font-display text-[26px] max-md:text-[22px] text-ink leading-tight mb-1.5">
            Your Personalized Results Are Ready.
          </h3>
          <p className="font-body text-[13px] text-gray-muted mb-5">
            Tell us where to send a copy and we&rsquo;ll show you your dog type right now.
          </p>
          <label className={labelClass} htmlFor="quiz-name">
            First name
          </label>
          <input
            id="quiz-name"
            className={`${fieldClass} mb-4`}
            type="text"
            autoComplete="given-name"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            Mobile (for a text copy of your results)
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
          <button
            type="button"
            onClick={submitContact}
            disabled={submitting}
            className="btn btn-blue w-full disabled:opacity-70"
          >
            {submitting ? "Loading your results…" : "Show Me My Results →"}
          </button>
          {contactError && (
            <p className="font-body text-[12.5px] text-red-500 mt-2.5 text-center" role="alert">
              Please enter your first name and a valid email.
            </p>
          )}
        </div>
      )}

      {step !== 1 && (
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
