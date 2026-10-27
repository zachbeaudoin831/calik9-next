// Distraction-free funnel pages: no nav menu, no promo banner, no footer.
const LANDER_ROUTES = new Set([
  "/free-behavioral-assessment",
  "/free-behavior-assessment",
  "/free-behavior-assessment/results/pushy",
  "/free-behavior-assessment/results/fearful",
  "/free-behavior-assessment/results/untrained",
  "/dog-behavior-assessment",
  "/register-now",
  "/webinar-offer",
  "/webinar-offer/thank-you",
  "/academy",
  "/academy/thank-you",
  "/academy-founder",
  "/starter-bundle",
  "/starter-bundle/thank-you",
  "/book-your-call",
  "/book-your-call/thank-you",
  "/elite",
  "/vip",
  "/training-kit-upsell",
  "/turbo-treats-upsell",
  "/turbo-treats-chicken-hearts",
  "/program-welcome",
  "/all-access",
  "/free-masterclass",
  "/free-masterclass/thank-you",
  "/free-masterclass/invite",
  "/free-masterclass-live",
  "/free-masterclass-live/thank-you",
  "/admin/funnel-report",
]);

export function isLanderPath(pathname: string): boolean {
  return LANDER_ROUTES.has(pathname);
}

// Header shows only the centered logo (no menu, no cart), but the page keeps
// its footer and banner. Used by the evaluation landing pages.
const LOGO_ONLY_HEADER_ROUTES = new Set([
  "/evaluation-with-behavior-specialist",
  "/evaluation-with-behavior-specialist-v2",
  "/evaluation-with-behavior-specialist-los-angeles",
  "/evaluation-with-behavior-specialist-miami",
  "/evaluation-with-behavior-specialist-san-jose",
]);

export function isLogoOnlyHeaderPath(pathname: string): boolean {
  return LOGO_ONLY_HEADER_ROUTES.has(pathname);
}
