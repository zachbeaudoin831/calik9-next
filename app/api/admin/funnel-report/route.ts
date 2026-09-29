import { NextResponse } from "next/server";
import { buildReport } from "@/lib/funnel-report";

/**
 * Quiz funnel report data for /admin/funnel-report.
 * Auth: header x-report-key must equal REPORT_PASSWORD (or, until that's set,
 * GHL_SHOPIFY_WEBHOOK_SECRET). Query: from, to (YYYY-MM-DD, Pacific),
 * source (all | organic | meta-ads | paid-other | untracked | <utm_source>), refresh=1.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

function allowed(req: Request): boolean {
  const key = req.headers.get("x-report-key") || "";
  const secrets = [process.env.REPORT_PASSWORD, process.env.GHL_SHOPIFY_WEBHOOK_SECRET]
    .map((s) => (s || "").trim())
    .filter(Boolean);
  if (process.env.NODE_ENV !== "production" && !secrets.length) return true;
  return Boolean(key) && secrets.includes(key.trim());
}

const DATE = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(req: Request) {
  if (!allowed(req)) return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  const q = new URL(req.url).searchParams;
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
  const from = DATE.test(q.get("from") || "") ? q.get("from")! : "2026-09-01";
  const to = DATE.test(q.get("to") || "") ? q.get("to")! : today;
  try {
    const report = await buildReport({ from, to, source: q.get("source") || "all", refresh: q.get("refresh") === "1" });
    return NextResponse.json(report, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("funnel-report", e);
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }
}
