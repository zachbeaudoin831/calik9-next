"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Budget, Lead, Report } from "@/lib/funnel-report";

const KEY_STORE = "ck9-report-key";
const TRACKING_START = "2026-09-01";

const BUDGETS: { key: Budget; label: string; qualified: boolean }[] = [
  { key: "under-200", label: "Under $200", qualified: false },
  { key: "200-500", label: "$200 – $500", qualified: false },
  { key: "500-1500", label: "$500 – $1,500", qualified: true },
  { key: "whatever", label: "Whatever it takes", qualified: true },
];

const SOURCES = [
  { key: "all", label: "All traffic" },
  { key: "organic", label: "Organic" },
  { key: "meta-ads", label: "Meta_Ads" },
  { key: "paid-other", label: "Other UTM" },
  { key: "untracked", label: "Untracked" },
];

function pacificToday(offsetDays = 0) {
  const d = new Date(Date.now() - offsetDays * 86400000);
  return d.toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
}

const PRESETS = [
  { label: "7 days", from: () => pacificToday(6) },
  { label: "30 days", from: () => pacificToday(29) },
  { label: "90 days", from: () => pacificToday(89) },
  { label: "All time", from: () => TRACKING_START },
];

const pct = (n: number, d: number) => (d ? `${Math.round((n / d) * 100)}%` : "—");
const money = (n: number) => `$${Math.round(n).toLocaleString()}`;
const fmtDate = (s: string) =>
  s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "America/Los_Angeles" }) : "—";

function srcKey(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// ---------- hover tooltip ----------

type Tip = { x: number; y: number; lines: string[] } | null;

function useTip() {
  const [tip, setTip] = useState<Tip>(null);
  const bind = (lines: string[]) => ({
    onMouseMove: (e: React.MouseEvent) => setTip({ x: e.clientX, y: e.clientY, lines }),
    onMouseLeave: () => setTip(null),
    onFocus: (e: React.FocusEvent) => {
      const r = (e.target as HTMLElement).getBoundingClientRect();
      setTip({ x: r.left + r.width / 2, y: r.top, lines });
    },
    onBlur: () => setTip(null),
    tabIndex: 0,
  });
  const node = tip ? (
    <div
      role="tooltip"
      className="fixed z-50 pointer-events-none bg-ink text-white text-[13px] leading-snug rounded-md px-3 py-2 shadow-lg"
      style={{ left: tip.x + 12, top: tip.y + 12, maxWidth: 260 }}
    >
      <div className="font-semibold">{tip.lines[0]}</div>
      {tip.lines.slice(1).map((l) => (
        <div key={l} className="text-white/80">{l}</div>
      ))}
    </div>
  ) : null;
  return { bind, node };
}

// ---------- page ----------

export default function FunnelReport() {
  const [key, setKey] = useState<string | null>(null);
  const [keyInput, setKeyInput] = useState("");
  const [from, setFrom] = useState(pacificToday(29));
  const [to, setTo] = useState(pacificToday());
  const [source, setSource] = useState("all");
  const [data, setData] = useState<Report | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [needKey, setNeedKey] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const { bind, node: tip } = useTip();

  // Restore key + filters (filters live in the URL so a view can be bookmarked).
  useEffect(() => {
    try { setKey(localStorage.getItem(KEY_STORE) || ""); } catch { setKey(""); }
    const q = new URLSearchParams(window.location.search);
    if (q.get("from")) setFrom(q.get("from")!);
    if (q.get("to")) setTo(q.get("to")!);
    if (q.get("source")) setSource(q.get("source")!);
  }, []);

  const load = useCallback(
    async (refresh = false) => {
      if (key === null) return;
      setLoading(true);
      setError("");
      const qs = new URLSearchParams({ from, to, source, ...(refresh ? { refresh: "1" } : {}) });
      window.history.replaceState(null, "", `?${new URLSearchParams({ from, to, source })}`);
      try {
        const r = await fetch(`/api/admin/funnel-report?${qs}`, { headers: { "x-report-key": key } });
        const j = await r.json();
        if (r.status === 401) {
          setNeedKey(true);
          setData(null);
        } else if (!r.ok) {
          setError(j.error || `HTTP ${r.status}`);
        } else {
          setNeedKey(false);
          setData(j);
        }
      } catch (e) {
        setError(String(e));
      } finally {
        setLoading(false);
      }
    },
    [key, from, to, source],
  );

  useEffect(() => { load(); }, [load]);

  const submitKey = (e: React.FormEvent) => {
    e.preventDefault();
    try { localStorage.setItem(KEY_STORE, keyInput); } catch {}
    setKey(keyInput);
  };

  const srcCount = useMemo(() => {
    const m: Record<string, number> = { all: 0, organic: 0, "meta-ads": 0, "paid-other": 0, untracked: 0 };
    for (const s of data?.sources || []) {
      const k = srcKey(s.key);
      m.all += s.count;
      if (k === "organic" || k === "untracked" || k === "meta-ads") m[k] += s.count;
      else m["paid-other"] += s.count;
    }
    return m;
  }, [data]);

  if (needKey) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-off">
        <form onSubmit={submitKey} className="w-full max-w-[380px] bg-white border border-border rounded-xl p-8 shadow-sm">
          <h1 className="font-display text-3xl tracking-wide mb-1">Quiz Funnel Report</h1>
          <p className="text-sm text-gray-muted mb-5">Enter the report password.</p>
          <input
            type="password"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            className="w-full border border-black/15 rounded-md px-3 py-2.5 mb-3"
            autoFocus
            aria-label="Report password"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-ui font-bold uppercase tracking-[1.5px] text-sm rounded-md py-3">
            Open report
          </button>
        </form>
      </div>
    );
  }

  const t = data?.totals;
  const closed = t ? t.closedAcademy + t.closedPremium : 0;
  const maxBudget = t ? Math.max(1, ...BUDGETS.map((b) => t.budget[b.key])) : 1;
  const leadRows: Lead[] = (data?.leads || []).filter((l) => showAll || l.budget === "500-1500" || l.budget === "whatever");

  return (
    <div className="bg-off min-h-screen pb-20">
      {tip}
      <div className="max-w-[1100px] mx-auto px-4 pt-[100px]">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
          <div>
            <h1 className="font-display text-[40px] leading-none tracking-wide">Quiz Funnel Report</h1>
            <p className="text-sm text-gray-muted mt-1">
              Free Behavior Assessment → budget → booked call → closed
              {data && <> · updated {new Date(data.generatedAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</>}
            </p>
          </div>
          <button
            onClick={() => load(true)}
            disabled={loading}
            className="font-ui text-xs font-bold uppercase tracking-[1.5px] border border-black/15 bg-white rounded-md px-4 py-2 hover:border-blue-500 disabled:opacity-50"
          >
            {loading ? "Loading…" : "Refresh from GHL"}
          </button>
        </div>

        {/* Filters — one row */}
        <div className="bg-white border border-border rounded-xl p-4 mb-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-ui text-[11px] font-bold uppercase tracking-[1px] text-gray-muted mr-1">Quiz date</span>
            {PRESETS.map((p) => {
              const active = from === p.from() && to === pacificToday();
              return (
                <button
                  key={p.label}
                  onClick={() => { setFrom(p.from()); setTo(pacificToday()); }}
                  className={`text-[13px] rounded-full px-3 py-1 border ${active ? "bg-blue-500 border-blue-500 text-white" : "border-black/15 hover:border-blue-500"}`}
                >
                  {p.label}
                </button>
              );
            })}
            <input type="date" value={from} max={to} onChange={(e) => setFrom(e.target.value)} className="text-[13px] border border-black/15 rounded-md px-2 py-1" aria-label="From" />
            <span className="text-gray-muted text-sm">to</span>
            <input type="date" value={to} min={from} onChange={(e) => setTo(e.target.value)} className="text-[13px] border border-black/15 rounded-md px-2 py-1" aria-label="To" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-ui text-[11px] font-bold uppercase tracking-[1px] text-gray-muted mr-1">Source</span>
            {SOURCES.map((s) => (
              <button
                key={s.key}
                onClick={() => setSource(s.key)}
                className={`text-[13px] rounded-full px-3 py-1 border ${source === s.key ? "bg-blue-500 border-blue-500 text-white" : "border-black/15 hover:border-blue-500"}`}
              >
                {s.label}
                {data && <span className={source === s.key ? "text-white/75" : "text-gray-muted"}> {srcCount[s.key] ?? 0}</span>}
              </button>
            ))}
          </div>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/30 text-red-700 rounded-lg p-4 mb-5 text-sm">{error}</div>}
        {data?.warnings.map((w) => (
          <div key={w} className="bg-amber-400/10 border border-amber-400/40 text-ink rounded-lg px-4 py-3 mb-3 text-sm">⚠ {w}</div>
        ))}

        {!data && !error && <div className="text-gray-muted py-20 text-center">Loading from GHL…</div>}

        {t && (
          <div className={loading ? "opacity-60 transition-opacity" : "transition-opacity"}>
            {/* KPI tiles */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
              {[
                { label: "Completed quiz", value: t.completed.toLocaleString(), sub: `${data!.from} → ${data!.to}` },
                { label: "$500+ budget", value: t.qualified.toLocaleString(), sub: `${pct(t.qualified, t.completed)} of completions` },
                { label: "Booked a call", value: t.booked.toLocaleString(), sub: `${pct(t.booked, t.qualified)} of $500+` },
                { label: "Closed", value: closed.toLocaleString(), sub: `${t.closedAcademy} Academy · ${t.closedPremium} Premium` },
                { label: "Closed revenue", value: money(t.revenue), sub: `${pct(closed, t.booked)} of booked closed` },
              ].map((k) => (
                <div key={k.label} className="bg-white border border-border rounded-xl p-4">
                  <div className="font-ui text-[11px] font-bold uppercase tracking-[1px] text-gray-muted">{k.label}</div>
                  <div className="font-display text-[40px] leading-none mt-2 text-ink">{k.value}</div>
                  <div className="text-[12px] text-gray-muted mt-1.5">{k.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {/* Budget breakdown */}
              <section className="bg-white border border-border rounded-xl p-5">
                <h2 className="font-ui font-bold uppercase tracking-[1px] text-sm">Budget answer</h2>
                <p className="text-[13px] text-gray-muted mb-4">All quiz completions. Dark bars = followed to booking &amp; close.</p>
                <div className="space-y-3">
                  {BUDGETS.map((b) => {
                    const n = t.budget[b.key];
                    return (
                      <div key={b.key} {...bind([b.label, `${n} leads · ${pct(n, t.completed)} of completions`])} className="outline-none rounded focus-visible:ring-2 ring-blue-500">
                        <div className="flex justify-between text-[13px] mb-1">
                          <span className="text-ink">{b.label}</span>
                          <span className="text-gray-muted tabular-nums">{n} <span className="text-[12px]">({pct(n, t.completed)})</span></span>
                        </div>
                        <div className="h-6 rounded bg-cream/60">
                          <div
                            className="h-full rounded-r"
                            style={{ width: `${(n / maxBudget) * 100}%`, minWidth: n ? 4 : 0, background: b.qualified ? "var(--color-blue-500)" : "var(--color-blue-200)" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  {t.budget.unknown > 0 && <p className="text-[12px] text-gray-muted">{t.budget.unknown} completion(s) with no budget answer.</p>}
                </div>
              </section>

              {/* $500+ funnel */}
              <section className="bg-white border border-border rounded-xl p-5">
                <h2 className="font-ui font-bold uppercase tracking-[1px] text-sm">$500+ leads → booked → closed</h2>
                <p className="text-[13px] text-gray-muted mb-4">$500 – $1,500 and Whatever it takes, combined.</p>
                <div className="space-y-4">
                  {[
                    { label: "$500+ budget", n: t.qualified, step: pct(t.qualified, t.completed) + " of completions" },
                    { label: "Booked a call", n: t.booked, step: pct(t.booked, t.qualified) + " of $500+" },
                  ].map((s) => (
                    <div key={s.label} {...bind([s.label, `${s.n} leads`, s.step])} className="outline-none rounded focus-visible:ring-2 ring-blue-500">
                      <div className="flex justify-between text-[13px] mb-1">
                        <span>{s.label}</span>
                        <span className="text-gray-muted tabular-nums">{s.n} <span className="text-[12px]">· {s.step}</span></span>
                      </div>
                      <div className="h-6 rounded bg-cream/60">
                        <div className="h-full rounded-r" style={{ width: `${t.qualified ? (s.n / t.qualified) * 100 : 0}%`, minWidth: s.n ? 4 : 0, background: "var(--color-blue-500)" }} />
                      </div>
                    </div>
                  ))}
                  <div>
                    <div className="flex justify-between text-[13px] mb-1">
                      <span>Closed</span>
                      <span className="text-gray-muted tabular-nums">{closed} <span className="text-[12px]">· {pct(closed, t.booked)} of booked</span></span>
                    </div>
                    <div className="h-6 rounded bg-cream/60 flex gap-[2px]">
                      {t.closedAcademy > 0 && (
                        <div {...bind(["Academy", `${t.closedAcademy} closed`, `${pct(t.closedAcademy, t.qualified)} of $500+`])} className="h-full outline-none" style={{ width: `${(t.closedAcademy / Math.max(1, t.qualified)) * 100}%`, minWidth: 4, background: "var(--color-blue-500)" }} />
                      )}
                      {t.closedPremium > 0 && (
                        <div {...bind(["Premium (Elite / VIP / All Access)", `${t.closedPremium} closed`, `${pct(t.closedPremium, t.qualified)} of $500+`])} className="h-full rounded-r outline-none" style={{ width: `${(t.closedPremium / Math.max(1, t.qualified)) * 100}%`, minWidth: 4, background: "#eb6834" }} />
                      )}
                    </div>
                    <div className="flex gap-4 mt-2 text-[12px] text-gray-muted">
                      <span className="flex items-center gap-1.5"><i className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: "var(--color-blue-500)" }} />Academy {t.closedAcademy}</span>
                      <span className="flex items-center gap-1.5"><i className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: "#eb6834" }} />Premium {t.closedPremium}</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* By budget table */}
            <section className="bg-white border border-border rounded-xl p-5 mb-5 overflow-x-auto">
              <h2 className="font-ui font-bold uppercase tracking-[1px] text-sm mb-3">By budget</h2>
              <table className="w-full text-[14px] tabular-nums">
                <thead>
                  <tr className="text-left text-[11px] font-ui uppercase tracking-[1px] text-gray-muted border-b border-border">
                    <th className="py-2 pr-4 font-bold">Budget</th>
                    <th className="py-2 px-3 font-bold text-right">Leads</th>
                    <th className="py-2 px-3 font-bold text-right">Booked</th>
                    <th className="py-2 px-3 font-bold text-right">Book rate</th>
                    <th className="py-2 px-3 font-bold text-right">Academy</th>
                    <th className="py-2 px-3 font-bold text-right">Premium</th>
                    <th className="py-2 pl-3 font-bold text-right">Close rate</th>
                  </tr>
                </thead>
                <tbody>
                  {data!.byBudget.map((r) => {
                    const tracked = r.budget === "500-1500" || r.budget === "whatever";
                    return (
                      <tr key={r.budget} className="border-b border-border last:border-0">
                        <td className="py-2.5 pr-4">{BUDGETS.find((b) => b.key === r.budget)?.label}</td>
                        <td className="py-2.5 px-3 text-right">{r.leads}</td>
                        <td className="py-2.5 px-3 text-right">{tracked ? r.booked : "—"}</td>
                        <td className="py-2.5 px-3 text-right">{tracked ? pct(r.booked, r.leads) : "—"}</td>
                        <td className="py-2.5 px-3 text-right">{tracked ? r.academy : "—"}</td>
                        <td className="py-2.5 px-3 text-right">{tracked ? r.premium : "—"}</td>
                        <td className="py-2.5 pl-3 text-right">{tracked ? pct(r.academy + r.premium, r.leads) : "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>

            {/* Leads */}
            <section className="bg-white border border-border rounded-xl p-5 overflow-x-auto">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <h2 className="font-ui font-bold uppercase tracking-[1px] text-sm">{showAll ? "All quiz leads" : "$500+ leads"} ({leadRows.length})</h2>
                <label className="text-[13px] text-gray-muted flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} />
                  Show all budgets
                </label>
              </div>
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="text-left text-[11px] font-ui uppercase tracking-[1px] text-gray-muted border-b border-border">
                    <th className="py-2 pr-3 font-bold">Lead</th>
                    <th className="py-2 px-3 font-bold">Quiz</th>
                    <th className="py-2 px-3 font-bold">Budget</th>
                    <th className="py-2 px-3 font-bold">Source</th>
                    <th className="py-2 px-3 font-bold">Booked</th>
                    <th className="py-2 pl-3 font-bold">Closed</th>
                  </tr>
                </thead>
                <tbody>
                  {leadRows.slice(0, 500).map((l) => (
                    <tr key={l.id} className="border-b border-border last:border-0 align-top">
                      <td className="py-2 pr-3">
                        <a
                          href={`https://app.gohighlevel.com/v2/location/9RVPGbjB6dCgPVsRbKEE/contacts/detail/${l.id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500 hover:underline font-medium"
                        >
                          {l.name}
                        </a>
                        <div className="text-gray-muted text-[12px]">{l.email}</div>
                      </td>
                      <td className="py-2 px-3 whitespace-nowrap">{fmtDate(l.quizAt)}</td>
                      <td className="py-2 px-3 whitespace-nowrap">{l.budgetLabel}</td>
                      <td className="py-2 px-3">
                        {l.source}
                        {l.campaign && <div className="text-gray-muted text-[12px]">{l.campaign}</div>}
                      </td>
                      <td className="py-2 px-3">
                        {l.booked ? (
                          <>
                            ✓ {fmtDate(l.booked.at)}
                            <div className="text-gray-muted text-[12px]">{l.booked.title}</div>
                          </>
                        ) : l.budget === "500-1500" || l.budget === "whatever" ? (
                          <span className="text-gray-muted">—</span>
                        ) : (
                          <span className="text-gray-muted text-[12px]">not tracked</span>
                        )}
                      </td>
                      <td className="py-2 pl-3">
                        {l.closed ? (
                          <>
                            <b>{l.closed.label}</b> {money(l.closed.amount)}
                            <div className="text-gray-muted text-[12px]">{fmtDate(l.closed.at)}</div>
                          </>
                        ) : (
                          <span className="text-gray-muted">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {leadRows.length > 500 && <p className="text-[12px] text-gray-muted mt-2">Showing the 500 most recent.</p>}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
