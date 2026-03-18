"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/shopify";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, cart, removeFromCart, updateQuantity, isLoading } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? "open" : ""}`} aria-label="Shopping cart">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button onClick={closeCart} className="cart-close" aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="cart-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{margin:"0 auto 16px",display:"block",opacity:.3}}>
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <p>Your cart is empty</p>
            <button onClick={closeCart} className="btn btn-blue" style={{marginTop:"16px"}}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-lines">
              {lines.map((line) => {
                const img = line.merchandise.product.images.edges[0]?.node;
                return (
                  <div key={line.id} className="cart-line">
                    <div className="cart-line-img">
                      {img ? (
                        <Image src={img.url} alt={img.altText ?? line.merchandise.product.title} width={80} height={80} style={{objectFit:"cover",width:"100%",height:"100%"}} />
                      ) : (
                        <div style={{background:"var(--cr)",width:"100%",height:"100%"}}/>
                      )}
                    </div>
                    <div className="cart-line-info">
                      <p className="cart-line-name">{line.merchandise.product.title}</p>
                      {line.merchandise.title !== "Default Title" && (
                        <p className="cart-line-variant">{line.merchandise.title}</p>
                      )}
                      <p className="cart-line-price">{formatMoney(line.merchandise.price.amount, line.merchandise.price.currencyCode)}</p>
                      <div className="cart-qty">
                        {line.merchandise.requiresShipping ? (
                          <>
                            <button onClick={() => updateQuantity(line.id, line.quantity - 1)} disabled={isLoading}>−</button>
                            <span>{line.quantity}</span>
                            <button onClick={() => updateQuantity(line.id, line.quantity + 1)} disabled={isLoading}>+</button>
                          </>
                        ) : (
                          <span style={{fontFamily:"var(--font-cond)",fontSize:"13px",letterSpacing:"1px",color:"var(--gm)"}}>Qty: 1</span>
                        )}
                        <button onClick={() => removeFromCart(line.id)} disabled={isLoading} className="cart-remove" aria-label="Remove">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>{cart ? formatMoney(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode) : "—"}</span>
              </div>
              <a href={cart?.checkoutUrl} className="btn btn-blue" style={{display:"block",textAlign:"center",width:"100%"}}>
                Checkout
              </a>
              <p className="cart-secure">🔒 Secure checkout powered by Shopify</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
