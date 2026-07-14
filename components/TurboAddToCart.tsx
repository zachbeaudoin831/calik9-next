"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface TurboAddToCartProps {
  variantId: string | null;
  available: boolean;
  label?: string;
  className?: string;
}

export default function TurboAddToCart({
  variantId,
  available,
  label = "Add to Cart",
  className = "",
}: TurboAddToCartProps) {
  const { addToCart, isAddingToCart } = useCart();
  const [added, setAdded] = useState(false);

  async function handleAdd() {
    if (!variantId || !available) return;
    await addToCart(variantId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleAdd}
      disabled={!available || isAddingToCart}
      className={`font-ui text-xs font-bold tracking-[2px] uppercase py-3.5 px-6 rounded-sm transition-all ${
        available
          ? "bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
          : "bg-gray-muted/20 text-gray-muted cursor-not-allowed"
      } ${className}`}
    >
      {!available ? "Sold Out" : added ? "Added ✓" : isAddingToCart ? "Adding..." : label}
    </button>
  );
}
