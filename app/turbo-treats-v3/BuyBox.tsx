"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/shopify";
import type { TreatOffer } from "@/lib/turbo-treats";

const QUANTITIES = [1, 2, 3];

export default function BuyBox({ offers }: { offers: TreatOffer[] }) {
  const { addToCart, isAddingToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedHandle, setSelectedHandle] = useState(
    () => offers.find((o) => o.featured)?.handle ?? offers[0]?.handle ?? "",
  );
  const [qty, setQty] = useState(1);

  if (offers.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="font-body text-base text-gray-muted mb-6">
          Turbo Treats are available in the Cali K9 shop.
        </p>
        <Link href="/shop?category=turbo-treats" className="btn btn-blue btn-lg">
          Shop Turbo Treats &rarr;
        </Link>
      </div>
    );
  }

  const selected = offers.find((o) => o.handle === selectedHandle) ?? offers[0];
  const unit = parseFloat(selected.price.amount);

  async function handleAdd() {
    if (!selected.variantId || !selected.available) return;
    await addToCart(selected.variantId, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div>
      {/* Select flavor */}
      <p className="font-ui text-lg font-bold text-[#46586B] mb-3">Select Flavor:</p>
      <div className="grid grid-cols-3 gap-3 mb-8 max-[480px]:grid-cols-1">
        {offers.map((offer) => {
          const isSelected = offer.handle === selected.handle;
          return (
            <button
              key={offer.handle}
              onClick={() => setSelectedHandle(offer.handle)}
              className={`rounded-lg border-2 px-4 py-4 text-center transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#46586B] border-[#46586B] text-white"
                  : "bg-white border-[#C6CFDA] text-[#46586B] hover:border-[#46586B]"
              }`}
            >
              <span className="block font-ui text-base font-bold leading-tight">
                {offer.displayName.toUpperCase()}
              </span>
              <span className={`block font-ui text-sm mt-1 ${isSelected ? "text-white/75" : "text-gray-muted"}`}>
                {formatMoney(offer.price.amount, offer.price.currencyCode)}
                {offer.handle.includes("combo") ? " · 2 bags" : " / bag"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Select quantity */}
      <p className="font-ui text-lg font-bold text-[#46586B] mb-3">Select Quantity:</p>
      <div className="border-2 border-[#C6CFDA] rounded-lg overflow-hidden mb-6">
        {QUANTITIES.map((q, i) => {
          const isSelected = qty === q;
          return (
            <button
              key={q}
              onClick={() => setQty(q)}
              className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors cursor-pointer ${
                i > 0 ? "border-t-2 border-[#C6CFDA]" : ""
              } ${isSelected ? "bg-[#EEF1F8]" : "bg-white hover:bg-[#F8F9FC]"}`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? "border-[#46586B]" : "border-[#C6CFDA]"
                  }`}
                >
                  {isSelected && <span className="w-3 h-3 rounded-full bg-[#46586B]" />}
                </span>
                <span className="font-ui text-lg font-bold text-[#46586B]">
                  {q} {q === 1 ? "Pack" : "Packs"}
                </span>
              </span>
              <span className="font-ui text-lg font-bold text-[#46586B]">
                {formatMoney((unit * q).toFixed(2), selected.price.currencyCode)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Trust line */}
      <p className="font-ui text-sm font-bold text-[#46586B] flex items-center justify-center gap-2 mb-5">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        SECURE CHECKOUT POWERED BY SHOPIFY · FAST U.S. SHIPPING
      </p>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        disabled={!selected.available || isAddingToCart}
        className={`w-full font-ui text-xl font-bold tracking-[1px] uppercase py-5 rounded-lg transition-all ${
          selected.available
            ? "bg-[#E9A13B] text-white hover:bg-[#D8912C] cursor-pointer shadow-[0_4px_16px_rgba(233,161,59,0.4)]"
            : "bg-gray-muted/20 text-gray-muted cursor-not-allowed"
        }`}
      >
        {!selected.available
          ? "Sold Out"
          : added
          ? "Added to Cart ✓"
          : isAddingToCart
          ? "Adding..."
          : `Add to Cart — ${formatMoney((unit * qty).toFixed(2), selected.price.currencyCode)}`}
      </button>

      {/* Selected preview */}
      {selected.image && (
        <div className="flex items-center gap-3 justify-center mt-5">
          <Image
            src={selected.image.url}
            alt={selected.image.altText ?? `Turbo Treats ${selected.displayName}`}
            width={96}
            height={96}
            className="w-14 h-14 rounded-lg object-cover border border-[#C6CFDA]"
          />
          <span className="font-body text-sm text-gray-muted">
            {qty}&times; Turbo Treats {selected.displayName} — {selected.blurb.split(".")[0]}.
          </span>
        </div>
      )}
    </div>
  );
}
