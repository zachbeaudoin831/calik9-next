import type { Metadata } from "next";
import FunnelReport from "./FunnelReport";

export const metadata: Metadata = {
  title: "Quiz Funnel Report",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FunnelReport />;
}
