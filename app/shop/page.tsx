"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

const SHOP_HERO_IMG =
  "https://cdn.shopify.com/s/files/1/0534/2275/1922/files/VIP-Training-With-Jas-Leverette-Cali-K9_-63071466.jpg?v=1710190456";

const FILTERS = ["All", "Training Equipment", "Treats", "Apparel", "Accessories"];

function isPreorderProduct(p: ShopifyProduct) {
  const firstAvailable = p.variants.edges.find((e) => e.node.availableForSale)?.node;
  return p.availableForSale && firstAvailable != null && firstAvailable.quantityAvailable === 0;
}

export default function ShopPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hidePreorders, setHidePreorders] = useState(true);

  useEffect(() => {
    getProducts(50).then((p) => {
      setProducts(p);
      setLoading(false);
    });
  }, []);

  const filtered = (
    activeFilter === "All"
      ? products
      : products.filter(
          (p) =>
            p.productType?.toLowerCase().includes(activeFilter.toLowerCase()) ||
            p.tags?.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
        )
  ).filter((p) => !hidePreorders || !isPreorderProduct(p));

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ink py-24 text-center">
        <Image
          src={SHOP_HERO_IMG}
          alt="Cali K9 training"
          fill
          priority
          className="object-cover object-top opacity-[0.18] saturate-[.6]"
        />
        <div className="relative z-[1] max-w-[640px] mx-auto px-5">
          <span className="font-ui text-[11px] font-bold tracking-[4px] uppercase text-blue-200 block mb-4">
            Official Store
          </span>
          <h1 className="font-display text-[clamp(48px,7vw,72px)] text-white leading-none mb-4">
            CALI K9<em className="text-blue-200">GEAR</em>
          </h1>
          <p className="font-body text-base text-white/70 leading-relaxed">
            Professional training equipment, premium treats, and Cali K9&reg; apparel.
            Everything Jas uses with his dogs.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <div className="sticky top-[var(--banner-h,0px)] z-30 bg-white border-b border-border">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="flex items-center justify-between gap-4 py-3 overflow-x-auto">
            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`font-ui text-xs font-bold tracking-[2px] uppercase whitespace-nowrap px-4 py-2 rounded-sm transition-all ${
                    activeFilter === f
                      ? "bg-blue-500 text-white"
                      : "text-gray-muted hover:text-ink hover:bg-off"
                  }`}
                >
                  {f}
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
      <section className="py-12 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="text-center font-ui text-sm tracking-[2px] uppercase text-gray-muted">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3 animate-spin" />
                Loading Products
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 font-ui text-base text-gray-muted">
              No products found
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
