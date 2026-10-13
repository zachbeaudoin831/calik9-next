import type { Metadata } from "next";
import ThankYou from "./ThankYou";

export const metadata: Metadata = {
  title: "Your Seat Is Reserved",
  description:
    "You're registered for Jas Leverette's free live dog training masterclass. Modules 1 and 2 are on the way, and your Zoom link will arrive by email.",
  robots: { index: false, follow: false },
};

export default async function MasterclassLiveThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session?: string }>;
}) {
  const { session } = await searchParams;
  return <ThankYou sessionId={session} />;
}
