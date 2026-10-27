import type { Metadata } from "next";
import Masterclass from "../free-masterclass/Masterclass";
import LiveRegistration from "./LiveRegistration";
import { ALL_SESSIONS } from "@/lib/masterclass-sessions";

export const metadata: Metadata = {
  title: "Free Live Dog Training Masterclass",
  description:
    "Transform your dog in just 15 minutes a day. Join Jas Leverette of Netflix's Canine Intervention live on Zoom every Wednesday for a free masterclass on the Cali K9® training system.",
  // Funnel page. Keep out of search while in review.
  robots: { index: false, follow: false },
};

// Same page as /free-masterclass, with the on-site registration form + survey
// in place of the GHL form, and all three weekly sessions.
export default function FreeMasterclassLivePage() {
  return <Masterclass sessions={ALL_SESSIONS} registration={<LiveRegistration sessions={ALL_SESSIONS} />} />;
}
