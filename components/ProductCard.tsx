"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShopifyProduct, formatMoney } from "@/lib/shopify";

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const { addToCart, isAddingToCart } = useCart();
  const [added, setAdded] = useState(false);

  const image = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  const compareAt = product.compareAtPriceRange.minVariantPrice;
  const hasDiscount = parseFloat(compareAt.amount) > parseFloat(price.amount);
  const firstVariant = product.availableForSale
    ? product.variants.edges.find((e) => e.node.availableForSale)?.node ?? product.variants.edges[0]?.node
    : product.variants.edges[0]?.node;
  const variantAvailable = product.availableForSale && (firstVariant?.availableForSale ?? false);
  const isPreorder = variantAvailable && firstVariant?.currentlyNotInStock === true;

  async function handleAdd() {
    if (!firstVariant || !variantAvailable) return;
    await addToCart(firstVariant.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <Link href={`/shop/${product.handle}`} className="block relative overflow-hidden">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            width={600}
            height={600}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full aspect-square bg-off flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-30">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white font-ui text-xs font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-sm">
            Sale
          </span>
        )}
        {!variantAvailable && (
          <span className="absolute top-3 left-3 bg-ink text-white font-ui text-xs font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-sm">
            Sold Out
          </span>
        )}
        {isPreorder && (
          <span className="absolute top-3 left-3 bg-[#7C3AED] text-white font-ui text-xs font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-sm">
            Pre-order
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        {product.productType && (
          <p className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-gray-muted mb-1">
            {product.productType}
          </p>
        )}
        <Link href={`/shop/${product.handle}`}>
          <h3 className="font-ui text-sm font-bold tracking-[0.5px] text-ink leading-snug mb-2 hover:text-blue-500 transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="font-ui text-base font-bold text-ink mb-3 mt-auto">
          {formatMoney(price.amount, price.currencyCode)}
          {hasDiscount && (
            <span className="ml-2 text-sm font-normal text-gray-muted line-through">
              {formatMoney(compareAt.amount, compareAt.currencyCode)}
            </span>
          )}
        </div>
        <button
          onClick={handleAdd}
          disabled={!variantAvailable || isAddingToCart}
          className={`w-full font-ui text-xs font-bold tracking-[2px] uppercase py-3 rounded-sm transition-all ${
            variantAvailable
              ? "bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
              : "bg-gray-muted/20 text-gray-muted cursor-not-allowed"
          }`}
        >
          {!variantAvailable ? "Sold Out" : added ? "Added \u2713" : isPreorder ? "Pre-order" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
