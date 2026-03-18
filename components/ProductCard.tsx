"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShopifyProduct, formatMoney } from "@/lib/shopify";

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const { addToCart, isLoading } = useCart();
  const [added, setAdded] = useState(false);

  const image = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  const compareAt = product.compareAtPriceRange.minVariantPrice;
  const hasDiscount = parseFloat(compareAt.amount) > parseFloat(price.amount);
  const firstVariant = product.availableForSale
    ? product.variants.edges.find((e) => e.node.availableForSale)?.node ?? product.variants.edges[0]?.node
    : product.variants.edges[0]?.node;
  const variantAvailable = product.availableForSale && (firstVariant?.availableForSale ?? false);
  // Pre-order: product is "available" in Shopify but has 0 inventory (continue selling when out of stock)
  const isPreorder = variantAvailable && firstVariant?.quantityAvailable === 0;

  async function handleAdd() {
    if (!firstVariant || !variantAvailable) return;
    await addToCart(firstVariant.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="prod-card">
      <Link href={`/shop/${product.handle}`} className="prod-img-wrap" style={{display:"block"}}>
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            width={600}
            height={600}
            style={{ width: "100%", aspectRatio: "1", objectFit: "cover", transition: "transform .6s", display: "block" }}
          />
        ) : (
          <div className="prod-img-placeholder">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{opacity:.3}}>
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
        )}
        {hasDiscount && <span className="prod-badge">Sale</span>}
        {!variantAvailable && <span className="prod-badge" style={{background:"var(--gd)"}}>Sold Out</span>}
        {isPreorder && <span className="prod-badge" style={{background:"#7C3AED"}}>Pre-order</span>}
      </Link>

      <div className="prod-body">
        {product.productType && <p className="prod-eye">{product.productType}</p>}
        <Link href={`/shop/${product.handle}`}>
          <h3 className="prod-name">{product.title}</h3>
        </Link>
        <div className="prod-price">
          {formatMoney(price.amount, price.currencyCode)}
          {hasDiscount && <span className="was">{formatMoney(compareAt.amount, compareAt.currencyCode)}</span>}
        </div>
        <button
          onClick={handleAdd}
          disabled={!variantAvailable || isLoading}
          className="prod-add"
          style={{width:"100%",cursor: variantAvailable ? "pointer" : "not-allowed"}}
        >
          {!variantAvailable ? "Sold Out" : added ? "Added ✓" : isPreorder ? "Pre-order" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
