// The three post-registration questions on /free-masterclass-live.
// The form sends option `key`s; the API maps each key to its label and to a
// GHL tag (<prefix><key>), so the two can never drift apart.

// sessionStorage key shared by the form and its thank-you page (first name,
// session id, struggle). Never put these in the URL.
export const LIVE_SESSION_KEY = "ck9-mc-live";

export type SurveyOption = { key: string; label: string };
export type SurveyQuestion = {
  id: "struggle" | "urgency" | "preference";
  eyebrow: string;
  q: string;
  sub?: string;
  tagPrefix: string;
  field: string; // GHL custom field name
  options: SurveyOption[];
};

export const SURVEY: SurveyQuestion[] = [
  {
    id: "struggle",
    eyebrow: "Your Dog",
    q: "What's your biggest struggle with your dog right now?",
    sub: "Pick the one you'd fix first.",
    tagPrefix: "mc-struggle-",
    field: "Masterclass: Biggest Struggle",
    options: [
      { key: "pulling", label: "Pulling on the leash" },
      { key: "jumping", label: "Jumping on people" },
      { key: "reactivity", label: "Barking or reactivity" },
      { key: "aggression", label: "Aggression toward people or dogs" },
      { key: "not-listening", label: "Not listening / ignoring commands" },
      { key: "anxiety", label: "Anxiety or fear" },
      { key: "other", label: "Something else" },
    ],
  },
  {
    id: "urgency",
    eyebrow: "Urgency",
    q: "How urgent is this for you right now?",
    tagPrefix: "mc-urgency-",
    field: "Masterclass: Urgency",
    options: [
      { key: "manageable", label: "Manageable — I just want to improve things" },
      { key: "frustrating", label: "Frustrating — it's affecting daily life" },
      { key: "safety", label: "Serious safety concern" },
      { key: "crisis", label: "Crisis — I need help now" },
    ],
  },
  {
    id: "preference",
    eyebrow: "The Right Fit",
    q: "What kind of help are you looking for?",
    sub: "No wrong answer. This just helps us point you in the right direction after class.",
    tagPrefix: "mc-pref-",
    field: "Masterclass: Training Preference",
    options: [
      { key: "in-person", label: "In-person training with a Cali K9 trainer" },
      { key: "online-support", label: "Online training with live support from our trainers" },
      { key: "videos-only", label: "Just access to training videos I can follow on my own" },
      { key: "unsure", label: "Not sure yet" },
    ],
  },
];

export function surveyLabel(id: SurveyQuestion["id"], key: string | undefined): string | undefined {
  return SURVEY.find((q) => q.id === id)?.options.find((o) => o.key === key)?.label;
}
