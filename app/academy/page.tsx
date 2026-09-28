import type { Metadata } from "next";
import AcademyPage, { type AcademyOffer } from "./AcademyPage";

export const metadata: Metadata = {
  title: "Cali K9 Online Academy",
  description:
    "Train live with Jas Leverette every week. The Cali K9® Online Academy: the complete 8-module, 50-step system plus weekly live coaching, taught by the trainer from Netflix's Canine Intervention. $97/month, cancel anytime.",
  // Draft membership sales page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// Academy checkout runs through the order-builder flow: kit offer (yes →
// checkout) → treats downsell → the combined payment link for the exact
// selection. The $97/mo payment links live in lib/package-checkout.ts.
const OFFER: AcademyOffer = {
  startUrl: "/training-kit-upsell?tier=academy",
  monthly: "$97/month",
  monthlyShort: "$97",
  monthlyLabel: "$97/Month",
  heroPrice: "$97/month. Instant access. Cancel anytime.",
};

export default function Page() {
  return <AcademyPage offer={OFFER} />;
}
