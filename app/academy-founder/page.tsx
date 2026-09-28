import type { Metadata } from "next";
import AcademyPage, { type AcademyOffer } from "../academy/AcademyPage";

export const metadata: Metadata = {
  title: "Cali K9 Academy — Past Client Founder Rate",
  description:
    "A thank-you for training with Cali K9: the complete Online Academy — 8 modules, 50 steps, weekly live coaching with Jas Leverette — at $47/month for your first 12 months, then $97/month.",
  // Private past-client offer sent by email. Keep out of search.
  robots: { index: false, follow: false },
  // Link preview (email / iMessage / social): the hero video's poster frame.
  openGraph: {
    title: "Cali K9 Academy — Past Client Founder Rate",
    description:
      "A thank-you for training with Cali K9: the complete Online Academy at $47/month for your first 12 months, then $97/month.",
    url: "https://calik9.com/academy-founder",
    images: [
      {
        url: "https://calik9.com/images/funnel/academy-jas-teaching.jpg",
        width: 1080,
        height: 839,
        alt: "Jas Leverette teaching inside the Cali K9 Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cali K9 Academy — Past Client Founder Rate",
    description:
      "A thank-you for training with Cali K9: the complete Online Academy at $47/month for your first 12 months, then $97/month.",
    images: ["https://calik9.com/images/funnel/academy-jas-teaching.jpg"],
  },
};

// Past-client founder offer: $47/mo for the first 12 months, then $97/mo.
// Same order-builder flow as /academy (kit offer → treats downsell → one
// combined payment link); the academy-founder links live in
// lib/package-checkout.ts.
const OFFER: AcademyOffer = {
  startUrl: "/training-kit-upsell?tier=academy-founder",
  monthly: "$47/month",
  monthlyShort: "$47",
  monthlyLabel: "$47/Month",
  heroPrice: "$47/month for 12 months, then $97/month. Instant access. Cancel anytime.",
  founder: {
    badge: "Past Client Founder Rate · Save $600",
    note:
      "You trained with Cali K9 in person, and that means something to us. As a thank-you, past clients get the Academy at $47/month for the first 12 months instead of $97 — the full system, every live session, nothing held back.",
    termLabel: "First 12 months · Then $97/mo",
    afterLabel: "then $97/mo · cancel anytime",
  },
  extraFaqs: [
    {
      q: "How does the Founder Rate work?",
      a: "Your membership is $47/month for your first 12 months — a $600 savings over the standard $97/month rate. After month 12 it renews at $97/month, and you can cancel anytime before then with no contract or penalty.",
    },
    {
      q: "Who qualifies for the Founder Rate?",
      a: "Past Cali K9 clients — anyone who has done an evaluation, private training, board & train or group class with our team. If you got this link from us by email, it's yours.",
    },
  ],
};

export default function Page() {
  return <AcademyPage offer={OFFER} />;
}
