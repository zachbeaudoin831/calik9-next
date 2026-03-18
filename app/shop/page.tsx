"use client";

import { useEffect, useState } from "react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

const FILTERS = ["All","Training Equipment","Treats","Apparel","Accessories"];

export default function ShopPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    getProducts(50).then((p) => { setProducts(p); setLoading(false); });
  }, []);

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) =>
        p.productType?.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.tags?.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <>
      {/* HERO */}
      <section className="shop-hero">
        <div className="shop-hero-inner">
          <span className="tag">Official Store</span>
          <h1 className="hdg-hero" style={{marginBottom:"16px"}}>
            CALI K9<em>GEAR</em>
          </h1>
          <p className="hero-sub" style={{margin:"0 auto",maxWidth:"560px"}}>
            Professional training equipment, premium treats, and Cali K9® apparel.
            Everything Jas uses with his dogs.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <div className="shop-filters">
        <div className="wrap">
          <div className="filter-tabs">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-tab${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="shop-main">
        <div className="wrap">
          {loading ? (
            <div style={{display:"flex",justifyContent:"center",padding:"80px 0"}}>
              <div style={{textAlign:"center",fontFamily:"var(--font-cond)",fontSize:"14px",letterSpacing:"2px",textTransform:"uppercase",color:"var(--gm)"}}>
                <div className="loading-spinner"/>
                Loading Products
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="shop-empty">No products found</div>
          ) : (
            <div className="product-grid">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
