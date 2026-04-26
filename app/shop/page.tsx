"use client";

import { useEffect, useMemo, useState } from "react";
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

type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A–Z" },
  { value: "name-desc", label: "Name: Z–A" },
];

function isPreorderProduct(p: ShopifyProduct) {
  const firstAvailable = p.variants.edges.find((e) => e.node.availableForSale)?.node;
  return p.availableForSale && firstAvailable != null && firstAvailable.quantityAvailable === 0;
}

function priceOf(p: ShopifyProduct) {
  return parseFloat(p.priceRange.minVariantPrice.amount);
}

export default function ShopPage() {
  const [productsByHandle, setProductsByHandle] = useState<Record<string, ShopifyProduct[]>>({});
  const [loadingHandles, setLoadingHandles] = useState<Set<string>>(new Set());
  const [activeLabel, setActiveLabel] = useState("All");

  // Filter state
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [hidePreorders, setHidePreorders] = useState(true);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

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

  // Price bounds across the unfiltered (but cleaned) set so the placeholders
  // hint at the realistic min/max for the active category.
  const cleaned = useMemo(
    () => (raw ? dedupeProductsByTitle(raw.filter((p) => !isServiceProduct(p))) : []),
    [raw],
  );
  const priceBounds = useMemo(() => {
    if (!cleaned.length) return null;
    const prices = cleaned.map(priceOf);
    return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
  }, [cleaned]);

  const products = useMemo(() => {
    if (!cleaned.length) return [];
    const min = priceMin === "" ? -Infinity : parseFloat(priceMin);
    const max = priceMax === "" ? Infinity : parseFloat(priceMax);
    const q = search.trim().toLowerCase();

    const filtered = cleaned
      .filter((p) => !hidePreorders || !isPreorderProduct(p))
      .filter((p) => !inStockOnly || p.availableForSale)
      .filter((p) => {
        const v = priceOf(p);
        return v >= min && v <= max;
      })
      .filter((p) => !q || p.title.toLowerCase().includes(q) || p.productType.toLowerCase().includes(q));

    const sorted = [...filtered];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => priceOf(a) - priceOf(b));
        break;
      case "price-desc":
        sorted.sort((a, b) => priceOf(b) - priceOf(a));
        break;
      case "name-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      // "featured" preserves Shopify collection order
    }
    return sorted;
  }, [cleaned, hidePreorders, inStockOnly, priceMin, priceMax, search, sort]);

  const activeFilterCount =
    (search.trim() ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (!hidePreorders ? 0 : 0) + // pre-order toggle on is the default; don't count
    (priceMin !== "" || priceMax !== "" ? 1 : 0);

  function clearFilters() {
    setSearch("");
    setInStockOnly(false);
    setPriceMin("");
    setPriceMax("");
    setSort("featured");
  }

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
      <div className="sticky top-[68px] z-30 bg-white border-b border-border">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {/* Row 1: category chips */}
          <div className="flex items-center py-3 overflow-x-auto">
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
          </div>

          {/* Row 2: search · sort · availability · price */}
          <div className="flex items-center gap-3 flex-wrap pb-3 border-t border-border pt-3 max-md:gap-2">
            {/* Search */}
            <div className="relative flex-1 min-w-[180px] max-w-[280px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-muted pointer-events-none"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products"
                className="w-full font-ui text-sm pl-9 pr-3 py-2 rounded-sm border border-border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
              />
            </div>

            {/* Sort */}
            <label className="flex items-center gap-2 font-ui text-xs font-bold tracking-[1px] uppercase text-gray-muted">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="font-ui text-xs font-bold tracking-[1px] uppercase text-ink px-3 py-2 rounded-sm border border-border bg-white cursor-pointer hover:border-blue-500 transition-colors"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            {/* Price range */}
            <div className="flex items-center gap-1.5 font-ui text-xs font-bold tracking-[1px] uppercase text-gray-muted">
              <span>Price</span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                placeholder={priceBounds ? `${priceBounds.min}` : "Min"}
                className="w-[70px] font-ui text-sm font-normal tracking-normal normal-case text-ink px-2 py-2 rounded-sm border border-border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                aria-label="Minimum price"
              />
              <span>–</span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                placeholder={priceBounds ? `${priceBounds.max}` : "Max"}
                className="w-[70px] font-ui text-sm font-normal tracking-normal normal-case text-ink px-2 py-2 rounded-sm border border-border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                aria-label="Maximum price"
              />
            </div>

            {/* In stock only */}
            <button
              onClick={() => setInStockOnly((v) => !v)}
              className={`font-ui text-xs font-bold tracking-[1px] uppercase whitespace-nowrap px-3 py-2 rounded-sm border transition-all ${
                inStockOnly
                  ? "border-blue-500 text-blue-500 bg-blue-50"
                  : "border-border text-gray-muted hover:text-ink"
              }`}
            >
              In Stock Only
            </button>

            {/* Pre-orders toggle */}
            <button
              onClick={() => setHidePreorders((v) => !v)}
              className={`font-ui text-xs font-bold tracking-[1px] uppercase whitespace-nowrap px-3 py-2 rounded-sm border transition-all ${
                hidePreorders
                  ? "border-blue-500 text-blue-500 bg-blue-50"
                  : "border-border text-gray-muted hover:text-ink"
              }`}
            >
              {hidePreorders ? "Pre-orders Hidden" : "Showing Pre-orders"}
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="font-ui text-xs font-bold tracking-[1px] uppercase text-blue-500 hover:text-blue-700 underline underline-offset-2"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {!loading && cleaned.length > 0 && (
            <div className="font-ui text-sm text-gray-muted mb-6">
              {products.length === cleaned.length
                ? `${products.length} ${products.length === 1 ? "product" : "products"}`
                : `${products.length} of ${cleaned.length} ${cleaned.length === 1 ? "product" : "products"}`}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="text-center font-ui text-sm tracking-[2px] uppercase text-gray-muted">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3 animate-spin" />
                Loading Products
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 font-ui text-base text-gray-muted">
              No products match your filters.{" "}
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-blue-500 hover:text-blue-700 underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
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
