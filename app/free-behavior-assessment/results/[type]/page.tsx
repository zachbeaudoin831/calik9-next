import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DOG_TYPES, RESULTS, isDogType } from "../content";
import ResultPage from "./ResultPage";

// Three real result pages: /free-behavior-assessment/results/{pushy|fearful|untrained}
export const dynamicParams = false;

export function generateStaticParams() {
  return DOG_TYPES.map((type) => ({ type }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  if (!isDogType(type)) return {};
  const r = RESULTS[type];
  return {
    title: `${r.metaTitle} — Free Behavior Assessment Results`,
    description: r.tagline,
    // Personal result page. Keep out of search.
    robots: { index: false, follow: false },
  };
}

export default async function AssessmentResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!isDogType(type)) notFound();
  return <ResultPage type={type} />;
}
