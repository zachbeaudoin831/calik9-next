"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const EVAL_VARIANT_ID = "gid://shopify/ProductVariant/45132968329461";

export default function AddEvalToCart({ style, className }: { style?: React.CSSProperties; className?: string }) {
  const { addToCart, openCart, lines, isLoading } = useCart();
  const [added, setAdded] = useState(false);

  const alreadyInCart = lines.some((l) => l.merchandise.id === EVAL_VARIANT_ID);

  async function handleAdd() {
    if (alreadyInCart) { openCart(); return; }
    await addToCart(EVAL_VARIANT_ID, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleAdd}
      disabled={isLoading}
      style={style}
      className={className ?? "btn btn-blue btn-blue-lg"}
    >
      {alreadyInCart ? "View Cart →" : added ? "Added to Cart ✓" : isLoading ? "Adding..." : "Book My Evaluation — $27"}
    </button>
  );
}
