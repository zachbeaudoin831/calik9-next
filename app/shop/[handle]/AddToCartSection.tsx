"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShopifyProduct, formatMoney } from "@/lib/shopify";

export default function AddToCartSection({ product }: { product: ShopifyProduct }) {
  const { addToCart, isAddingToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    product.options.forEach((o) => {
      defaults[o.name] = o.values[0];
    });
    return defaults;
  });

  const matchingVariant =
    product.variants.edges.find(({ node }) =>
      node.selectedOptions.every((o) => selectedOptions[o.name] === o.value)
    )?.node ?? product.variants.edges[0]?.node;

  const variantAvailable = matchingVariant?.availableForSale ?? false;
  const isPreorder = variantAvailable && matchingVariant?.currentlyNotInStock === true;

  async function handleAdd() {
    if (!matchingVariant || !variantAvailable) return;
    await addToCart(matchingVariant.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const price = matchingVariant
    ? formatMoney(matchingVariant.price.amount, matchingVariant.price.currencyCode)
    : formatMoney(
        product.priceRange.minVariantPrice.amount,
        product.priceRange.minVariantPrice.currencyCode
      );

  return (
    <>
      <div className="font-display text-[clamp(28px,3vw,36px)] text-ink leading-none mb-6">
        {price}
      </div>

      {product.options
        .filter((o) => o.values.length > 1)
        .map((option) => (
          <div key={option.id} className="mb-5">
            <p className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-muted mb-2">
              {option.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {option.values.map((val) => (
                <button
                  key={val}
                  onClick={() =>
                    setSelectedOptions((prev) => ({ ...prev, [option.name]: val }))
                  }
                  className={`font-ui text-xs font-bold tracking-[1px] uppercase px-4 py-2.5 rounded-sm border-2 transition-all ${
                    selectedOptions[option.name] === val
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-border text-ink hover:border-blue-500"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        ))}

      <button
        onClick={handleAdd}
        disabled={!variantAvailable || isAddingToCart}
        className={`w-full font-ui text-sm font-bold tracking-[2px] uppercase py-4 rounded-sm transition-all mb-4 ${
          variantAvailable
            ? "bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
            : "bg-gray-muted/20 text-gray-muted cursor-not-allowed"
        }`}
      >
        {!variantAvailable
          ? "Sold Out"
          : added
          ? "Added to Cart \u2713"
          : isAddingToCart
          ? "Adding..."
          : isPreorder
          ? "Pre-order"
          : "Add to Cart"}
      </button>

      <p className="font-ui text-xs text-gray-muted flex items-center justify-center gap-1.5 mb-6">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Secure checkout powered by Shopify
      </p>

      <div className="pt-6 border-t border-border flex gap-3 flex-wrap">
        {["\u2713 Professional Grade", "\u2713 Jas Approved", "\u2713 Fast Shipping"].map((b) => (
          <span
            key={b}
            className="font-ui text-xs font-bold tracking-[1px] text-blue-500 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-sm"
          >
            {b}
          </span>
        ))}
      </div>
    </>
  );
}
