"use client";

import { useEffect, useState } from "react";
import {
  dedupeProductsByTitle,
  getProductsByCollection,
  isServiceProduct,
  ShopifyProduct,
} from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

const CATEGORIES: { label: string; handle: string }[] = [
  { label: "All", handle: "cali-k9-shop" },
  { label: "Training Equipment", handle: "training-equipment" },
  { label: "Treats", handle: "turbo-treats" },
  { label: "Kits & Boxes", handle: "kits-boxes" },
  { label: "Collars & Leashes", handle: "collars-leashes" },
  { label: "Apparel", handle: "apparel" },
];

function isPreorderProduct(p: ShopifyProduct) {
  const firstAvailable = p.variants.edges.find((e) => e.node.availableForSale)?.node;
  return p.availableForSale && firstAvailable != null && firstAvailable.quantityAvailable === 0;
}

export default function ShopPage() {
  const [productsByHandle, setProductsByHandle] = useState<Record<string, ShopifyProduct[]>>({});
  const [loadingHandles, setLoadingHandles] = useState<Set<string>>(new Set());
  const [activeLabel, setActiveLabel] = useState("All");
  const [hidePreorders, setHidePreorders] = useState(true);

  const active = CATEGORIES.find((c) => c.label === activeLabel) ?? CATEGORIES[0];

  useEffect(() => {
    if (productsByHandle[active.handle] || loadingHandles.has(active.handle)) return;
    setLoadingHandles((prev) => new Set(prev).add(active.handle));
    getProductsByCollection(active.handle, 100)
      .then((p) => {
        setProductsByHandle((prev) => ({ ...prev, [active.handle]: p }));
      })
      .finally(() => {
        setLoadingHandles((prev) => {
          const next = new Set(prev);
          next.delete(active.handle);
          return next;
        });
      });
  }, [active.handle, productsByHandle, loadingHandles]);

  const raw = productsByHandle[active.handle];
  const loading = !raw && loadingHandles.has(active.handle);
  const products = raw
    ? dedupeProductsByTitle(raw.filter((p) => !isServiceProduct(p))).filter(
        (p) => !hidePreorders || !isPreorderProduct(p),
      )
    : [];

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:min-h-0 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              Official Store
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            CALI K9 <span className="text-[#8A97C4]">GEAR</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px] mb-9">
            Professional training equipment, premium treats, and Cali K9&reg; apparel.
            Everything Jas uses with his dogs.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <div className="sticky top-0 z-30 bg-white border-b border-border">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="flex items-center justify-between gap-4 py-3 overflow-x-auto">
            <div className="flex gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.label}
                  onClick={() => setActiveLabel(c.label)}
                  className={`font-ui text-xs font-bold tracking-[2px] uppercase whitespace-nowrap px-4 py-2 rounded-sm transition-all ${
                    activeLabel === c.label
                      ? "bg-blue-500 text-white"
                      : "text-gray-muted hover:text-ink hover:bg-off"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setHidePreorders((v) => !v)}
              className={`font-ui text-xs font-bold tracking-[1px] uppercase whitespace-nowrap px-3 py-2 rounded-sm border transition-all ${
                hidePreorders
                  ? "border-blue-500 text-blue-500 bg-blue-50"
                  : "border-border text-gray-muted hover:text-ink"
              }`}
            >
              {hidePreorders ? "Pre-orders Hidden" : "Show Pre-orders"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="text-center font-ui text-sm tracking-[2px] uppercase text-gray-muted">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3 animate-spin" />
                Loading Products
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 font-ui text-base text-gray-muted">
              No products found
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
