// Distraction-free funnel pages: no nav menu, no promo banner, no footer.
const LANDER_ROUTES = new Set([
  "/free-behavioral-assessment",
  "/free-behavior-assessment",
  "/dog-behavior-assessment",
  "/register-now",
  "/webinar-offer",
  "/webinar-offer/thank-you",
  "/academy",
  "/academy/thank-you",
  "/starter-bundle",
  "/starter-bundle-downsell",
  "/book-your-call",
  "/book-your-call/thank-you",
  "/elite",
  "/vip",
  "/training-kit-upsell",
  "/turbo-treats-upsell",
  "/turbo-treats-chicken-hearts",
  "/free-masterclass",
  "/free-masterclass/thank-you",
]);

export function isLanderPath(pathname: string): boolean {
  return LANDER_ROUTES.has(pathname);
}
