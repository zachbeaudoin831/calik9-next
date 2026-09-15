import { redirect } from "next/navigation";

// Business coaching is paused for now. The full page is preserved in git
// history (see the commit that introduced this redirect) — restore it from
// there if the program comes back.
export default function BusinessCoachingPage() {
  redirect("/newclientservices");
}
