"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/shopify";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, cart, removeFromCart, updateQuantity, isLoading } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1100] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[420px] max-w-full bg-white z-[1101] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="font-ui text-sm font-bold uppercase tracking-[3px] text-ink">Your Cart</h2>
          <button
            onClick={closeCart}
            className="bg-transparent border-none cursor-pointer p-1 text-gray-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center px-5 text-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mb-4 opacity-30"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <p className="font-body text-gray-muted mb-4">Your cart is empty</p>
            <Link
              href="/shop"
              onClick={closeCart}
              className="font-ui text-xs font-bold uppercase tracking-[2px] bg-blue-500 text-white px-6 py-3 rounded-sm no-underline hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Line items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.map((line) => {
                const img = line.merchandise.product.images.edges[0]?.node;
                return (
                  <div
                    key={line.id}
                    className="flex gap-4 py-4 border-b border-border last:border-b-0"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 rounded overflow-hidden shrink-0 bg-off">
                      {img ? (
                        <Image
                          src={img.url}
                          alt={img.altText ?? line.merchandise.product.title}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-off" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-ui text-sm font-bold text-ink leading-tight truncate">
                        {line.merchandise.product.title}
                      </p>
                      {line.merchandise.title !== "Default Title" && (
                        <p className="font-ui text-xs text-gray-muted mt-0.5">
                          {line.merchandise.title}
                        </p>
                      )}
                      <p className="font-body text-sm font-semibold text-ink mt-1">
                        {formatMoney(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        {line.merchandise.requiresShipping ? (
                          <>
                            <button
                              onClick={() => updateQuantity(line.id, line.quantity - 1)}
                              disabled={isLoading}
                              className="w-7 h-7 border border-border rounded-sm bg-transparent text-ink font-bold cursor-pointer disabled:opacity-50 hover:bg-off transition-colors"
                            >
                              &minus;
                            </button>
                            <span className="font-ui text-sm font-bold text-ink w-6 text-center">
                              {line.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(line.id, line.quantity + 1)}
                              disabled={isLoading}
                              className="w-7 h-7 border border-border rounded-sm bg-transparent text-ink font-bold cursor-pointer disabled:opacity-50 hover:bg-off transition-colors"
                            >
                              +
                            </button>
                          </>
                        ) : (
                          <span className="font-ui text-[13px] tracking-[1px] text-gray-muted">
                            Qty: 1
                          </span>
                        )}
                        <button
                          onClick={() => removeFromCart(line.id)}
                          disabled={isLoading}
                          className="ml-auto bg-transparent border-none cursor-pointer p-1 text-gray-muted hover:text-red-500 transition-colors disabled:opacity-50"
                          aria-label="Remove"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-5 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-ui text-sm font-bold uppercase tracking-[2px] text-ink">
                  Total
                </span>
                <span className="font-body text-lg font-semibold text-ink">
                  {cart
                    ? formatMoney(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode)
                    : "\u2014"}
                </span>
              </div>
              <a
                href={cart?.checkoutUrl}
                className="block w-full text-center font-ui text-sm font-bold uppercase tracking-[2px] bg-blue-500 text-white py-3.5 rounded-sm no-underline hover:bg-blue-700 transition-colors"
              >
                Checkout
              </a>
              <p className="font-body text-xs text-gray-muted text-center mt-3">
                Secure checkout powered by Shopify
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
