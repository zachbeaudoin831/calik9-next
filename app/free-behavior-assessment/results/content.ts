// ── Free Behavior Assessment → personalized result pages ─────────────────────
//
// Three real result types. "A mix of several" (Q1 option 4) never gets its own
// vague page — resolveDogType() routes it to the dominant profile using the
// behavior problems (Q3), desired outcome (Q6), previous training (Q5) and the
// off-leash score (Q13).

export type DogType = "pushy" | "fearful" | "untrained";

export const DOG_TYPES: DogType[] = ["pushy", "fearful", "untrained"];

export function isDogType(v: string): v is DogType {
  return (DOG_TYPES as string[]).includes(v);
}

// Q1 option index (1-based) → dog type. Option 4 ("a mix") returns null so the
// caller falls through to the weighted score.
export function dogTypeFromPrimary(option: number | undefined): DogType | null {
  if (option === 1) return "pushy";
  if (option === 2) return "fearful";
  if (option === 3) return "untrained";
  return null;
}

export function resolveDogType(input: {
  primary?: number; // Q1 option, 1-based
  problems: string[]; // Q3 labels
  previousTraining?: number; // Q5 option, 1-based
  outcome?: number; // Q6 option, 1-based
  offLeash?: number; // Q13, 1–10
}): DogType {
  const direct = dogTypeFromPrimary(input.primary);
  if (direct) return direct;

  const score: Record<DogType, number> = { pushy: 0, fearful: 0, untrained: 0 };
  const has = (label: string) => input.problems.some((p) => p.toLowerCase().startsWith(label));

  // Q3 behavior problems — the strongest signal for a "mixed" dog.
  if (has("aggression")) score.fearful += 3;
  if (has("barking")) score.fearful += 2;
  if (has("separation")) score.fearful += 2;
  if (has("jumping")) score.pushy += 2;
  if (has("not listening")) score.pushy += 2;
  if (has("pulling")) score.pushy += 1;
  if (has("potty")) score.untrained += 1;

  // Q6 desired outcome.
  if (input.outcome === 3) score.fearful += 2; // calm, non-reactive dog
  if (input.outcome === 1) score.pushy += 1; // basic listening & manners
  if (input.outcome === 2 || input.outcome === 4) score.untrained += 1; // off-leash / anywhere

  // Q5 never trained + Q13 low off-leash score lean "untrained".
  if (input.previousTraining === 1) score.untrained += 1;
  if (input.offLeash !== undefined && input.offLeash <= 3) score.untrained += 1;

  // Ties break toward safety: fearful, then pushy, then untrained.
  const order: DogType[] = ["fearful", "pushy", "untrained"];
  return order.reduce((best, t) => (score[t] > score[best] ? t : best), order[0]);
}

// ── Roadmap (mirrors the Academy page) ──────────────────────────────────────
export const PILLARS = [
  "Obedience",
  "Socialization",
  "Agility",
  "Behavior Management",
  "Problem-Solving Technique",
];

export const MODULES = [
  { num: 1, title: "Household Foundation", steps: "1–4" },
  { num: 2, title: "Engagement & Training Structure", steps: "5–9" },
  { num: 3, title: "Markers, Luring & The Training Box", steps: "10–17" },
  { num: 4, title: "Core Positions", steps: "18–25" },
  { num: 5, title: "Heeling & Movement", steps: "26–31" },
  { num: 6, title: "Distance, Duration & Distraction", steps: "32–38" },
  { num: 7, title: "Engagement & Real-World Reliability", steps: "39–44" },
  { num: 8, title: "Off-Leash Mastery & Generalization", steps: "45–50" },
];

export type ResultContent = {
  slug: DogType;
  label: string; // "Pushy & Overconfident"
  metaTitle: string;
  tagline: string;
  seeing: string[];
  why: string[];
  wrong: string[];
  next: string[];
  actions: { title: string; body: string }[];
  roadmap: {
    startModules: [number, number]; // inclusive range highlighted "start here"
    goalModules: [number, number]; // where this type is heading
    pillars: string[]; // pillars that matter most for this type
    note: string;
  };
  proof: {
    before: string;
    after: string;
    quote: string;
    name: string;
    meta: string;
  };
  callNote: string; // why a call helps THIS type (secondary CTA)
};

export const RESULTS: Record<DogType, ResultContent> = {
  pushy: {
    slug: "pushy",
    label: "Pushy & Overconfident",
    metaTitle: "Your Dog Type: Pushy & Overconfident",
    tagline:
      "Confident, smart, and running the show. Your dog isn't a bad dog — they've simply never been given a clear reason to believe you're the one in charge.",
    seeing: [
      "Jumping on you and on guests, no matter how many times you say “off”.",
      "Pulling on the leash like the walk belongs to them.",
      "Hearing a command, looking right at you — and choosing not to do it.",
      "Pushing through doors first, stealing food or objects, demanding attention on their schedule.",
      "Knows “sit” perfectly at home, acts like they've never heard the word once there's a distraction.",
    ],
    why: [
      "Dogs read structure constantly. A confident dog who's never had clear, consistent boundaries fills the vacuum themselves — and a dog who thinks they're in charge behaves like it.",
      "Every time pulling gets them to the tree, jumping gets a hand on them, and ignoring a command has no follow-through, the behavior is getting paid. Your dog isn't being defiant. They're doing exactly what has worked.",
    ],
    wrong: [
      "Repeating the command louder — which teaches the dog the first one doesn't count.",
      "Negotiating with treats after the dog ignores you, which rewards the ignoring.",
      "Handing out unlimited freedom — couches, free-feeding, open doors — before any of it has been earned.",
      "Getting frustrated or physical. A confident dog reads that as a game or a challenge, not leadership.",
      "Trying to train obedience at the park before it exists in the kitchen.",
    ],
    next: [
      "Reset the structure at home first: food, space, and freedom become things your dog earns through engagement with you.",
      "Then install a clean marker system so every command means one thing, every time — and only after that do you add distractions.",
      "Here's the good news: pushy dogs usually progress the fastest once structure is in place, because they're motivated, confident, and love to work.",
    ],
    actions: [
      {
        title: "Take back the resources.",
        body: "For the next 7 days, hand-feed every meal in short training moments. No free-feeding, no furniture during this phase. Your dog learns that everything good comes through you.",
      },
      {
        title: "One command, one time.",
        body: "Say it once. If your dog doesn't respond, calmly guide them into position — never repeat it, never bribe. The command has to mean something before it can work anywhere.",
      },
      {
        title: "Own every threshold.",
        body: "Doors, crate, car, stairs: your dog waits and moves on your release word. Start inside the house where you can win every rep, then take it outside.",
      },
    ],
    roadmap: {
      startModules: [1, 2],
      goalModules: [6, 8],
      pillars: ["Obedience", "Behavior Management"],
      note: "Your dog skipped the foundation. Modules 1–2 (Steps 1–9) rebuild the household structure and engagement a pushy dog is missing — and once that's in, the rest of the roadmap moves fast.",
    },
    proof: {
      before: "Couldn't control him around distractions — lunging toward every dog on the street.",
      after: "Walks calmly by his owner's side, past other dogs, like a different animal.",
      quote:
        "“Before Cali K9, Zeus was lunging at every dog on the street. Now he walks by my side like a completely different dog.”",
      name: "Marcus T.",
      meta: "Zeus · German Shepherd",
    },
    callNote:
      "If your dog is bigger than you can physically manage, or the pushiness has tipped into guarding food, objects, or space, a 20-minute call with the team gets you a specific plan before the habits harden further.",
  },

  fearful: {
    slug: "fearful",
    label: "Fearful, Anxious & Reactive",
    metaTitle: "Your Dog Type: Fearful, Anxious & Reactive",
    tagline:
      "Your dog isn't trying to be difficult. They're overwhelmed — and barking, lunging, freezing, or hiding is the only coping strategy they have right now.",
    seeing: [
      "Barking and lunging at dogs or strangers on leash — then perfectly sweet at home.",
      "Startling at noises, hiding, pacing, or panting when anything changes.",
      "Growling or snapping when cornered, handled, or approached too fast.",
      "Falling apart when you leave the house.",
      "A dog who seems fine one moment and “explodes” the next, with no obvious warning.",
    ],
    why: [
      "Fear and reactivity come from a dog who doesn't trust the situation — and doesn't yet trust that you'll handle it for them. When a dog doesn't know what's expected, they fall back on their own survival plan: make the scary thing go away (reactivity) or get away from it (avoidance).",
      "Every time that plan works — the other dog passes, the stranger backs off — it gets stronger. Genetics, a missed socialization window, or one bad experience may have started it. The fix is the same either way: clarity, trust, and controlled exposure.",
    ],
    wrong: [
      "Flooding — dragging the dog into the scary situation so they'll “get used to it”. They don't. They shut down or escalate.",
      "Coddling in the moment. Soothing a panicking dog confirms there was something to worry about.",
      "Avoiding everything, so the dog never gets a chance to learn a different outcome.",
      "Correcting the growl. That removes the warning, not the fear.",
      "Socializing at the dog park before the dog has any engagement with you at all.",
    ],
    next: [
      "Build engagement and trust in low-distraction settings first, so your dog learns to look to you when they're unsure.",
      "Install a communication system — markers your dog understands — so they know exactly what earns a reward and when they're released.",
      "Then structured exposure at a distance your dog can handle, closing the gap gradually. Confidence is built through clarity and small wins, never by force.",
    ],
    actions: [
      {
        title: "Become the source of everything good.",
        body: "Hand-feed meals for the next 7 days and pay every voluntary check-in — every time your dog chooses to look at you, mark it and reward it. You're teaching them that you are the safe place.",
      },
      {
        title: "Find the threshold — and respect it.",
        body: "Work at a distance from triggers where your dog can still take food and respond to you. If they can't eat, you're too close. Back up and win the rep, then close the distance over days, not minutes.",
      },
      {
        title: "Give your dog a job.",
        body: "A rock-solid “place” and a structured sit give an anxious dog something to do instead of panicking. Build it at home until it's automatic, then bring it to the front yard, then the street.",
      },
    ],
    roadmap: {
      startModules: [1, 3],
      goalModules: [6, 7],
      pillars: ["Behavior Management", "Socialization"],
      note: "Your dog needs the foundation and communication modules (Steps 1–17) before any exposure work — that's where trust and a shared language get built. Distraction and real-world work in Modules 6–7 comes after, at your dog's pace.",
    },
    proof: {
      before: "A fearful rescue the family was seriously considering returning.",
      after: "Calm, focused, and loving — thriving at home.",
      quote:
        "“We were considering rehoming our rescue. She came back calm, focused, and loving. I'm emotional typing this.”",
      name: "Jennifer L.",
      meta: "Luna · Pit Bull Rescue",
    },
    callNote:
      "If your dog has bitten, or you're worried about the safety of people or other dogs, don't wait for the masterclass — talk to the team first. A 20-minute call gives you a plan for right now, and tells you honestly whether hands-on help is needed.",
  },

  untrained: {
    slug: "untrained",
    label: "Good Dog, Just Untrained",
    metaTitle: "Your Dog Type: Good Dog, Just Untrained",
    tagline:
      "Friendly, stable, easygoing — and running on luck. Your dog already has the temperament. What's missing is the system.",
    seeing: [
      "Loves everyone, great personality — and zero reliable recall.",
      "Still pulls on leash, no matter which harness you've tried.",
      "Listens at home, forgets everything the moment you step outside.",
      "“Sit” works when there's a treat in your hand, and only then.",
      "You'd love to take them off-leash, but you don't trust them yet.",
    ],
    why: [
      "Most good dogs were never actually trained — they were managed. They picked up a few commands in ideal conditions, and nobody generalized them to the real world.",
      "Obedience that only works in the kitchen isn't obedience yet. It's a trick. Without a progression through distance, duration, and distraction, your dog has no way of knowing the rules apply everywhere.",
    ],
    wrong: [
      "Assuming a good temperament means training is optional. It's exactly what makes training easy.",
      "Going off-leash before the recall has been proofed on a long line.",
      "Luring with a treat in the hand forever, so the dog only works when they can see the payment.",
      "Random practice — “we work on it sometimes” — instead of a progression with a next step.",
      "Blaming the breed for what is really a missing foundation.",
    ],
    next: [
      "You're in the best position of any dog type: the temperament work is already done.",
      "Follow a real progression — engagement, clean markers, core positions, heeling, then distance, duration, and distraction — and finally off-leash reliability.",
      "Most untrained dogs move through the early modules quickly. The goal for your dog isn't manners. It's freedom.",
    ],
    actions: [
      {
        title: "Start marker training today.",
        body: "Pick a sustainment marker (“good”) and a release word (“break”). Mark the exact moment your dog does the right thing and pay it. In a week your dog understands the language every other step is built on.",
      },
      {
        title: "Two 10-minute sessions beat one Sunday hour.",
        body: "Short, daily, and consistent. End every session on a win. This is the 15-minutes-a-day habit that separates trained dogs from “pretty good” dogs.",
      },
      {
        title: "Put the recall on a long line.",
        body: "15–30 feet of line, every time you're outside. Never call your dog when you can't make it happen, and pay big every single time they come. Off-leash freedom is earned here.",
      },
    ],
    roadmap: {
      startModules: [1, 3],
      goalModules: [6, 8],
      pillars: ["Obedience", "Agility"],
      note: "Your dog can move through the foundation and communication modules quickly — the real target is Modules 6–8: distance, distraction, and true off-leash reliability. That's where a good dog becomes a fully trained one.",
    },
    proof: {
      before: "Friendly, no recall, and her owner was afraid to ever let her off-leash.",
      after: "Off-leash reliable at 8 months old.",
      quote:
        "“The online program is incredible value. Nothing comes close to the depth of Jas's system. My dog is off-leash reliable at 8 months old.”",
      name: "Amanda K.",
      meta: "Miami, FL",
    },
    callNote:
      "If you've got a specific goal — off-leash hiking, therapy work, a dog you can bring anywhere — and you'd rather have the team map the fastest route for your dog, a 20-minute call does exactly that.",
  },
};

// Key used to hand personalization (first name, qualification) from the quiz
// to the result page. Kept in sessionStorage, never in the URL.
export const SESSION_KEY = "ck9-assessment";

export type SessionResult = {
  firstName: string;
  dogName?: string;
  type: DogType;
  urgency?: string;
  budget?: string;
  problems?: string[];
  at: number;
};
