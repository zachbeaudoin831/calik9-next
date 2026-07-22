// Distraction-free funnel pages: no nav menu, no promo banner, no footer.
const LANDER_ROUTES = new Set([
  "/free-behavioral-assessment",
  "/dog-behavior-assessment",
]);

export function isLanderPath(pathname: string): boolean {
  return LANDER_ROUTES.has(pathname);
}
