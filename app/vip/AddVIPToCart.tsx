"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const VIP_VARIANT_ID = "gid://shopify/ProductVariant/43692777406709";

export default function AddVIPToCart({ style }: { style?: React.CSSProperties }) {
  const { addToCart, openCart, lines, isLoading } = useCart();
  const [added, setAdded] = useState(false);

  const alreadyInCart = lines.some((l) => l.merchandise.id === VIP_VARIANT_ID);

  async function handleAdd() {
    if (alreadyInCart) { openCart(); return; }
    await addToCart(VIP_VARIANT_ID, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button onClick={handleAdd} disabled={isLoading} style={style} className="btn btn-blue btn-blue-lg">
      {alreadyInCart ? "View Cart →" : added ? "Added to Cart ✓" : isLoading ? "Adding..." : "Enroll Now — $4,997"}
    </button>
  );
}
