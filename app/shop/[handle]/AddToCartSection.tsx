"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShopifyProduct, formatMoney } from "@/lib/shopify";

export default function AddToCartSection({ product }: { product: ShopifyProduct }) {
  const { addToCart, isLoading } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    product.options.forEach((o) => { defaults[o.name] = o.values[0]; });
    return defaults;
  });

  const matchingVariant = product.variants.edges.find(({ node }) =>
    node.selectedOptions.every((o) => selectedOptions[o.name] === o.value)
  )?.node ?? product.variants.edges[0]?.node;

  const variantAvailable = matchingVariant?.availableForSale ?? false;
  const isPreorder = variantAvailable && matchingVariant?.quantityAvailable === 0;

  async function handleAdd() {
    if (!matchingVariant || !variantAvailable) return;
    await addToCart(matchingVariant.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const price = matchingVariant
    ? formatMoney(matchingVariant.price.amount, matchingVariant.price.currencyCode)
    : formatMoney(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode);

  return (
    <>
      <div className="pdp-price">{price}</div>

      {product.options.filter((o) => o.values.length > 1).map((option) => (
        <div key={option.id} className="pdp-options">
          <p className="pdp-opt-label">{option.name}</p>
          <div className="pdp-opt-btns">
            {option.values.map((val) => (
              <button
                key={val}
                className={`pdp-opt-btn${selectedOptions[option.name] === val ? " selected" : ""}`}
                onClick={() => setSelectedOptions((prev) => ({ ...prev, [option.name]: val }))}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleAdd}
        disabled={!variantAvailable || isLoading}
        className="pdp-add"
      >
        {!variantAvailable ? "Sold Out" : added ? "Added to Cart ✓" : isLoading ? "Adding..." : isPreorder ? "Pre-order" : "Add to Cart"}
      </button>

      <p className="pdp-trust">
        🔒 Secure checkout powered by Shopify · Free shipping on orders $75+
      </p>

      <div style={{marginTop:"28px",paddingTop:"28px",borderTop:"1px solid var(--bo)",display:"flex",gap:"16px",flexWrap:"wrap"}}>
        {["✓ Professional Grade","✓ Jas Approved","✓ Fast Shipping"].map((b) => (
          <span key={b} style={{fontFamily:"var(--font-cond)",fontSize:"12px",fontWeight:700,letterSpacing:"1px",color:"var(--blue)",background:"var(--bp)",border:"1px solid var(--bm)",padding:"6px 12px",borderRadius:"var(--radius-sm)"}}>{b}</span>
        ))}
      </div>
    </>
  );
}
