import { redirect } from "next/navigation";

// /admin has no index of its own yet — send it to the funnel report.
export default function AdminIndex() {
  redirect("/admin/funnel-report");
}
