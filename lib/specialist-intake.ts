import { SURVEY } from "./masterclass-survey";

// Pre-booking questions for a behavior-specialist call (components/SpecialistBooking.tsx).
// The pop-up sends option `key`s; /api/specialist/intake maps each key to its
// label (for the contact note) and to a GHL tag (<tagPrefix><key>).

export type IntakeQuestion = {
  id: "struggle" | "urgency" | "training" | "preference" | "budget";
  eyebrow: string;
  q: string;
  sub?: string;
  tagPrefix: string;
  options: { key: string; label: string }[];
};

const fromSurvey = (id: "struggle" | "urgency" | "preference") => SURVEY.find((q) => q.id === id)!.options;

export const INTAKE: IntakeQuestion[] = [
  {
    id: "struggle",
    eyebrow: "Your Dog",
    q: "What's the biggest issue you want help with?",
    sub: "Pick the one you'd fix first.",
    tagPrefix: "bs-struggle-",
    options: fromSurvey("struggle"),
  },
  {
    id: "urgency",
    eyebrow: "Urgency",
    q: "How urgent is this for you right now?",
    tagPrefix: "bs-urgency-",
    options: fromSurvey("urgency"),
  },
  {
    id: "training",
    eyebrow: "Training So Far",
    q: "Have you tried training before?",
    tagPrefix: "bs-training-",
    options: [
      { key: "none", label: "Never trained formally" },
      { key: "self-taught", label: "Self-taught with videos or books" },
      { key: "group-classes", label: "Group classes before" },
      { key: "private-trainer", label: "Private trainer before — it didn't stick" },
      { key: "board-and-train", label: "Board and train before — dog reverted once home" },
    ],
  },
  {
    id: "preference",
    eyebrow: "The Right Fit",
    q: "What kind of help are you looking for?",
    tagPrefix: "bs-pref-",
    options: fromSurvey("preference"),
  },
  {
    id: "budget",
    eyebrow: "Investment",
    q: "What's your budget range for solving this?",
    sub: "So the specialist recommends options that fit.",
    tagPrefix: "bs-budget-",
    options: [
      { key: "under-200", label: "Under $200" },
      { key: "200-500", label: "$200 – $500" },
      { key: "500-1500", label: "$500 – $1,500" },
      { key: "whatever-it-takes", label: "Whatever it takes" },
    ],
  },
];

export const DOG_AGES = ["Puppy (0–6 months)", "Young (6 months – 2 years)", "Adult (2–7 years)", "Senior (7+ years)"];

export function intakeLabel(id: IntakeQuestion["id"], key: string | undefined): string | undefined {
  return INTAKE.find((q) => q.id === id)?.options.find((o) => o.key === key)?.label;
}
