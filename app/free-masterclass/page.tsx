import type { Metadata } from "next";
import Masterclass from "./Masterclass";

export const metadata: Metadata = {
  title: "Learn How To Train Your Dog With Jas Leverette",
  description:
    "Learn How To Train Your Dog With Jas Leverette: a free live masterclass with the host of Netflix's Canine Intervention. Transform your dog in just 15 minutes a day with the Cali K9® training system.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

export default function FreeMasterclassPage() {
  return <Masterclass />;
}
