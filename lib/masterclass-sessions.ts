// Live masterclass schedule. Shared by the date blocks (EventDate), the
// on-site registration form (/free-masterclass-live) and its API route.
//
// /free-masterclass still registers through the GHL form, which only offers
// Wednesday and Saturday, so it keeps CLASSIC_SESSIONS. The on-site form
// offers every session.

export type SessionId = "monday" | "wednesday" | "saturday";

export type Session = {
  id: SessionId;
  day: string;
  weekday: number; // 0 = Sunday
  hourPacific: number;
  label: string;
};

export const SESSIONS: readonly Session[] = [
  { id: "monday", day: "Monday", weekday: 1, hourPacific: 16, label: "4:00 PM Pacific / 7:00 PM Eastern" },
  { id: "wednesday", day: "Wednesday", weekday: 3, hourPacific: 16, label: "4:00 PM Pacific / 7:00 PM Eastern" },
  { id: "saturday", day: "Saturday", weekday: 6, hourPacific: 10, label: "10:00 AM Pacific / 1:00 PM Eastern" },
];

export const CLASSIC_SESSIONS: SessionId[] = ["wednesday", "saturday"];
export const ALL_SESSIONS: SessionId[] = SESSIONS.map((s) => s.id);

const TZ = "America/Los_Angeles";

export function sessionById(id: string | null | undefined): Session | undefined {
  return SESSIONS.find((s) => s.id === id);
}

export function sessionsFor(ids: readonly SessionId[]): Session[] {
  return SESSIONS.filter((s) => ids.includes(s.id));
}

// UTC instant of `hourPacific` on a Los Angeles calendar date, correct across
// daylight-saving changes.
function slotInstant(y: number, m: number, d: number, hourPacific: number): Date {
  const guess = new Date(Date.UTC(y, m, d, hourPacific + 7, 0, 0)); // assume PDT (UTC-7)
  try {
    const laHour = Number(
      new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", hour12: false }).format(guess),
    );
    return new Date(guess.getTime() - (laHour - hourPacific) * 3600 * 1000);
  } catch {
    return guess;
  }
}

// Today's calendar date in Los Angeles, independent of the runtime's timezone
// (browsers anywhere, Vercel in UTC).
function laToday(now: Date): { y: number; m: number; d: number } {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).formatToParts(now);
    const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
    return { y: get("year"), m: get("month") - 1, d: get("day") };
  } catch {
    return { y: now.getFullYear(), m: now.getMonth(), d: now.getDate() };
  }
}

export type Occurrence = {
  session: Session;
  instant: Date;
  dateLabel: string; // "Monday, October 19"
  isoDate: string; // "2026-10-19" (Los Angeles calendar date)
  full: string; // "Monday, October 19 · 4:00 PM Pacific / 7:00 PM Eastern"
};

// The next time this session starts (today's slot counts until it begins).
export function nextOccurrence(session: Session, now: Date = new Date()): Occurrence {
  const { y, m, d } = laToday(now);
  for (let i = 0; i <= 7; i++) {
    const day = new Date(Date.UTC(y, m, d + i));
    if (day.getUTCDay() !== session.weekday) continue;
    const instant = slotInstant(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), session.hourPacific);
    if (instant.getTime() < now.getTime()) continue;
    const dateLabel = instant.toLocaleDateString("en-US", { timeZone: TZ, weekday: "long", month: "long", day: "numeric" });
    const isoDate = `${day.getUTCFullYear()}-${String(day.getUTCMonth() + 1).padStart(2, "0")}-${String(day.getUTCDate()).padStart(2, "0")}`;
    return { session, instant, dateLabel, isoDate, full: `${dateLabel} · ${session.label}` };
  }
  // Unreachable: some day in the next 8 always matches.
  throw new Error("no occurrence");
}

// "Monday, Wednesday or Saturday" / "Mondays, Wednesdays & Saturdays"
export function dayPhrase(ids: readonly SessionId[], { plural = false, joiner = "or" } = {}): string {
  const names = sessionsFor(ids).map((s) => (plural ? `${s.day}s` : s.day));
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} ${joiner} ${names[names.length - 1]}`;
}

export function timesAWeek(n: number): string {
  return n === 1 ? "Once A Week" : n === 2 ? "Twice A Week" : n === 3 ? "Three Times A Week" : `${n}x A Week`;
}
