import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import BundleThanks from "./BundleThanks";

export const metadata: Metadata = {
  title: "You're In — Starter Bundle",
  description: "Your Cali K9 Starter Bundle is confirmed. Here's how to get into Modules 1 and 2.",
  // Post-purchase page. Keep out of search.
  robots: { index: false, follow: false },
};

// Redirect target for the Starter Bundle payment links:
//   $27 link → /starter-bundle/thank-you
//   $44 link → /starter-bundle/thank-you?bump=1
export default function StarterBundleThankYouPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <BundleThanks />
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
