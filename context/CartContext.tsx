"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { Cart, CartLine, cartCreate, cartLinesAdd, cartLinesRemove, cartLinesUpdate, getCart } from "@/lib/shopify";

interface CartContextType {
  cart: Cart | null;
  isOpen: boolean;
  isAddingToCart: boolean;
  isUpdatingCart: boolean;
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
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isUpdatingCart, setIsUpdatingCart] = useState(false);

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
    setIsAddingToCart(true);
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
      setIsAddingToCart(false);
    }
  }, []);

  const removeFromCart = useCallback(async (lineId: string) => {
    const cartId = localStorage.getItem("ck_cart_id");
    if (!cartId) return;
    setIsUpdatingCart(true);
    try {
      const updatedCart = await cartLinesRemove(cartId, [lineId]);
      setCart(updatedCart);
    } finally {
      setIsUpdatingCart(false);
    }
  }, []);

  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    const cartId = localStorage.getItem("ck_cart_id");
    if (!cartId) return;
    if (quantity <= 0) { await removeFromCart(lineId); return; }
    setIsUpdatingCart(true);
    try {
      const updatedCart = await cartLinesUpdate(cartId, lineId, quantity);
      setCart(updatedCart);
    } finally {
      setIsUpdatingCart(false);
    }
  }, [removeFromCart]);

  const lines = cart?.lines.edges.map((e) => e.node) ?? [];
  const totalQuantity = cart?.totalQuantity ?? 0;

  return (
    <CartContext.Provider value={{
      cart, isOpen, isAddingToCart, isUpdatingCart,
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
