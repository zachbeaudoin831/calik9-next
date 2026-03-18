"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { Cart, CartLine, cartCreate, cartLinesAdd, cartLinesRemove, cartLinesUpdate, getCart } from "@/lib/shopify";

interface CartContextType {
  cart: Cart | null;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  lines: CartLine[];
  totalQuantity: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cartId = localStorage.getItem("ck_cart_id");
    if (cartId) {
      getCart(cartId).then((c) => {
        if (c) setCart(c);
        else localStorage.removeItem("ck_cart_id");
      });
    }
  }, []);

  const addToCart = useCallback(async (variantId: string, quantity = 1) => {
    setIsLoading(true);
    try {
      let updatedCart: Cart;
      const cartId = localStorage.getItem("ck_cart_id");
      if (cartId) {
        updatedCart = await cartLinesAdd(cartId, variantId, quantity);
      } else {
        updatedCart = await cartCreate(variantId, quantity);
        localStorage.setItem("ck_cart_id", updatedCart.id);
      }
      setCart(updatedCart);
      setIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeFromCart = useCallback(async (lineId: string) => {
    const cartId = localStorage.getItem("ck_cart_id");
    if (!cartId) return;
    setIsLoading(true);
    try {
      const updatedCart = await cartLinesRemove(cartId, [lineId]);
      setCart(updatedCart);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    const cartId = localStorage.getItem("ck_cart_id");
    if (!cartId) return;
    if (quantity <= 0) { await removeFromCart(lineId); return; }
    setIsLoading(true);
    try {
      const updatedCart = await cartLinesUpdate(cartId, lineId, quantity);
      setCart(updatedCart);
    } finally {
      setIsLoading(false);
    }
  }, [removeFromCart]);

  const lines = cart?.lines.edges.map((e) => e.node) ?? [];
  const totalQuantity = cart?.totalQuantity ?? 0;

  return (
    <CartContext.Provider value={{
      cart, isOpen, isLoading,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addToCart, removeFromCart, updateQuantity,
      lines, totalQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
