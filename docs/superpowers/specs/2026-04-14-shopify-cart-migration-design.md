# Cali K9 Next.js Migration with Shopify Cart

**Date:** 2026-04-14
**Status:** Approved

## Overview

Migrate the Cali K9 static HTML/CSS website to a Next.js (App Router) application with Tailwind CSS. Add a Shopify-powered shop with product pages and a cart drawer for `shop.calik9.com` products (merch/equipment). Service pages retain their LeadConnector form embeds for bookings.

## Architecture

- **Framework:** Next.js (App Router), React 19, TypeScript, Tailwind CSS 4
- **Deployment:** Vercel
- **Shopify:** Storefront API (GraphQL) via public storefront access token
- **Fonts:** Bebas Neue, Barlow Condensed, Barlow via `next/font/google`

### Routing

```
app/
  layout.tsx              — global shell (nav, footer, banner, cart provider)
  page.tsx                — homepage
  services/
    page.tsx              — services hub
  online-training/
    page.tsx              — service page (template for future service pages)
  shop/
    page.tsx              — product grid
    [handle]/
      page.tsx            — product detail page
```

### Data Fetching

- Shop pages: Shopify Storefront API via server components
- `generateStaticParams` for product detail pages at build time
- All other pages: fully static JSX + Tailwind, no external data

## Tailwind Design System

Port CSS custom properties from `brand.css` into Tailwind config.

### Colors

| CSS Variable | Tailwind Token | Usage |
|---|---|---|
| `--ink` | `ink` | Dark text |
| `--w` | `white` | White |
| `--off` | `off` | Off-white backgrounds |
| `--cream` | `cream` | Warm section backgrounds |
| `--blue` | `blue` | Primary brand blue |
| `--bll` | `blue-light` | Light blue accents |
| `--green` | `green` | Success/checkmarks |
| `--red` | `red` | Accent red |
| `--amber` | `amber` | Stars/ratings |
| `--g50` | `gray-muted` | Secondary text |

### Fonts

| CSS Variable | Tailwind Class | Font Family |
|---|---|---|
| `--font-display` | `font-display` | Bebas Neue |
| `--font-ui` | `font-ui` | Barlow Condensed |
| `--font-body` | `font-body` | Barlow |

### Reusable Patterns

- **Dark hero gradient:** `bg-dark-hero` custom gradient utility
- **Translucent card:** `bg-white/[0.07] border border-white/[0.15] rounded-xl`
- **Gradient text:** `bg-gradient-to-br from-white to-blue-300 bg-clip-text text-transparent`
- **Eyebrow label:** font-ui, uppercase, tracking-wide, small size
- **Section divider:** thin line utility

## Components

### Shared Layout

- **`Nav`** — logo, links, Services dropdown submenu, mobile hamburger/drawer, cart icon with badge count
- **`Footer`** — 4-column grid (brand, training, company, locations), policy links bar
- **`AnnouncementBanner`** — dismissible top banner, dismiss state in `sessionStorage`
- **`StickyBar`** — fixed bottom bar with evaluation CTA
- **`CartDrawer`** — slide-out right panel with line items, quantity controls, subtotal, checkout
- **`CartProvider`** — React context, manages Shopify cart state + mutations

### Shop

- **`ProductGrid`** — responsive grid of `ProductCard` components
- **`ProductCard`** — image, title, price, "Add to Cart" / "View Details" button
- **`ProductDetail`** — image gallery, variant selector, description, add to cart
- **`VariantSelector`** — option buttons/dropdowns for size, color, etc.
- **`AddToCartButton`** — handles loading state, quantity, calls cart context

### Service Pages (reusable)

- **`ServiceHero`** — dark two-column layout wrapper (content left, sticky sidebar right)
- **`StarsRow`** — 4.9/5 star rating display
- **`PackageHeading`** — gradient text heading
- **`PackageList`** — two-column checklist with green checkmarks
- **`PriceBlock`** — value / offer label / price / note stack
- **`FormEmbed`** — LeadConnector iframe wrapper
- **`CelebGrid`** — 3x3 celebrity testimonial cards with hover overlay
- **`CelebMiniGrid`** — 4-across celebrity thumbnails with name labels
- **`CtaBlock`** — dark full-width CTA section

## Shopify Integration

### API Layer (`lib/shopify.ts`)

**Server-side (server components):**
- `getProducts()` — fetch all products with images, prices, variants
- `getProduct(handle: string)` — fetch single product by handle
- `getCollections()` — fetch collections (future use)

**Client-side (cart context):**
- `createCart()` — create new Shopify cart, returns cart ID + checkout URL
- `addToCart(cartId, variantId, quantity)` — add line item
- `updateCart(cartId, lineId, quantity)` — update quantity (0 = remove)
- `getCart(cartId)` — fetch current cart state

### Cart Flow

1. User clicks "Add to Cart" on shop or product detail page
2. `CartProvider` checks `localStorage` for existing cart ID
3. If none exists, creates new cart via Storefront API, stores ID
4. Adds selected variant to cart
5. Cart drawer opens showing the added item
6. "Checkout" button redirects to `cart.checkoutUrl` (Shopify-hosted checkout)

### Cart Drawer UI

- Product thumbnail, title, variant name, unit price per line item
- Quantity +/- buttons per line item
- Remove button per line item
- Subtotal at bottom
- "Checkout" primary button + "Continue Shopping" secondary
- Empty state: "Your cart is empty" with link to `/shop`

## Initial Migration Scope

### Phase 1 (this spec)

1. **Project setup** — clean Next.js project, Tailwind config with design system, fonts, env vars
2. **Layout shell** — Nav, Footer, AnnouncementBanner, StickyBar
3. **Homepage** — full port from `index.html`
4. **Services hub** — full port from `services.html`
5. **Online Training** — full port from `online-training.html` (service page template)
6. **Shop page** — Shopify product grid at `/shop`
7. **Product detail** — individual product pages at `/shop/[handle]`
8. **Cart system** — CartProvider, CartDrawer, AddToCartButton

### Phase 2 (future)

- Remaining service pages (in-person, semi-private, group-class, zoom-group, board-and-train, vip-with-jas, coaching, board-train-1week)
- About, Team, Testimonials, Blog, Contact, Evaluation
- Starter Course, Policy pages, 404
- Search/filtering on shop page
- Collections support

## Environment Variables

```
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=<storefront access token>
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=<store>.myshopify.com
```

## Key Decisions

- LeadConnector forms stay as iframes on service pages — Shopify cart is only for shop.calik9.com products
- Shopify's hosted checkout (no custom checkout)
- Cart persisted via localStorage (cart ID), not cookies
- All existing HTML page designs preserved 1:1 in Tailwind
- `next/font/google` for font loading (no external stylesheet request)
