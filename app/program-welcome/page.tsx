import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import WelcomeContent from "./WelcomeContent";

export const metadata: Metadata = {
  title: "Welcome To Cali K9",
  description: "You're in. Here's what happens next with your Cali K9 Elite or VIP program.",
  // Post-purchase page. Keep out of search.
  robots: { index: false, follow: false },
};

// Redirect target for the Elite / VIP GHL payment links. Append
// ?tier=elite or ?tier=vip (and optionally &total=1194) to each link's
// redirect URL so the page and the Purchase pixel know what was bought.
export default function ProgramWelcomePage() {
  return (
    <main>
      <Suspense fallback={null}>
        <WelcomeContent />
      </Suspense>
      <section className="py-10 text-center">
        <p className="font-ui text-xs text-gray-muted/70">
          &copy; 2026 Cali K9&reg; &middot;{" "}
          <Link href="/privacy-policy" className="hover:text-ink">Privacy Policy</Link>
          {" · "}
          <Link href="/terms-of-service" className="hover:text-ink">Terms</Link>
        </p>
      </section>
    </main>
  );
}
