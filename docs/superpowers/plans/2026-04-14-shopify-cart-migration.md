# Cali K9 Next.js + Shopify Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Cali K9 static HTML/CSS site to Next.js with Tailwind CSS, adding a Shopify-powered shop with cart functionality.

**Architecture:** Next.js App Router with server components for shop data, client components for cart/interactivity. Existing `lib/shopify.ts` and `context/CartContext.tsx` are kept as-is (solid, complete). All UI rebuilt in Tailwind utility classes matching the current HTML site's visual design from `/Users/carlos/Cali k9 website/`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Shopify Storefront API

---

## File Structure

```
app/
  layout.tsx                    — global shell: fonts, CartProvider, Nav, Footer, CartDrawer, StickyBar, AnnouncementBanner
  globals.css                   — Tailwind import + CSS custom properties (design tokens only)
  page.tsx                      — homepage
  services/
    page.tsx                    — services hub
  online-training/
    page.tsx                    — service page (template for all others)
  shop/
    page.tsx                    — product grid (server component)
    [handle]/
      page.tsx                  — product detail (server component)
      AddToCartSection.tsx      — client component for variant selection + add to cart
components/
  Nav.tsx                       — site navigation with mobile drawer + cart icon
  Footer.tsx                    — 4-column footer matching HTML site
  AnnouncementBanner.tsx        — dismissible top banner
  StickyBar.tsx                 — fixed bottom evaluation CTA
  CartDrawer.tsx                — slide-out cart panel
  ProductCard.tsx               — shop product card
  ServiceHero.tsx               — dark two-column layout wrapper
  StarsRow.tsx                  — star rating display
  PackageHeading.tsx            — gradient text heading
  PackageList.tsx               — two-column checklist
  PriceBlock.tsx                — price display stack
  FormEmbed.tsx                 — LeadConnector iframe wrapper
  CelebGrid.tsx                 — 9-card celebrity testimonial grid
  CelebMiniGrid.tsx             — small celebrity thumbnail strip
  CtaBlock.tsx                  — dark full-width CTA section
context/
  CartContext.tsx                — KEEP AS-IS
lib/
  shopify.ts                    — KEEP AS-IS
  fonts.ts                      — next/font/google font definitions
tailwind.config.ts              — custom colors, fonts, spacing
```

## Reference Files

The HTML source of truth lives at `/Users/carlos/Cali k9 website/`. Key files to reference when porting:

- **Design tokens / brand CSS:** `/Users/carlos/Cali k9 website/css/brand.css`
- **Homepage:** `/Users/carlos/Cali k9 website/index.html`
- **Services hub:** `/Users/carlos/Cali k9 website/services.html`
- **Online Training (service page template):** `/Users/carlos/Cali k9 website/online-training.html`
- **Nav/Footer/Banner patterns:** Any HTML page (consistent across all)
- **Celebrity testimonials:** `/Users/carlos/Cali k9 website/testimonials.html` (lines 196-295 for celeb cards)

---

### Task 1: Project Reset + Tailwind Design System

**Files:**
- Rewrite: `app/globals.css`
- Create: `lib/fonts.ts`
- Create: `tailwind.config.ts`
- Modify: `app/layout.tsx`
- Modify: `next.config.ts`

- [ ] **Step 1: Create font definitions**

Create `lib/fonts.ts` using `next/font/google`:

```ts
import { Bebas_Neue, Barlow_Condensed, Barlow } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const barlow = Barlow({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
```

- [ ] **Step 2: Create Tailwind config**

Create `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F2937",
        off: "#F8F9FC",
        cream: "#FDF8F0",
        blue: {
          DEFAULT: "#1A3FAB",
          dark: "#122E85",
          light: "#2D54CC",
          pale: "#E8EEFF",
          muted: "#C5CEEF",
        },
        green: "#16A34A",
        red: { DEFAULT: "#DC2626", dark: "#B91C1C" },
        amber: "#F59E0B",
        "gray-muted": "#6B7280",
        border: "#E2E6F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        ui: ["var(--font-ui)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
      boxShadow: {
        sm: "0 2px 12px rgba(26,63,171,.08)",
        md: "0 8px 32px rgba(26,63,171,.1)",
        lg: "0 20px 60px rgba(26,63,171,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Rewrite globals.css**

Replace `app/globals.css` with minimal base styles only:

```css
@import "tailwindcss";

/* ── Animations ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .65s cubic-bezier(.22,.8,.4,1), transform .65s cubic-bezier(.22,.8,.4,1);
}
.reveal.in { opacity: 1; transform: none; }
```

- [ ] **Step 4: Update layout.tsx with fonts**

Rewrite `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { bebasNeue, barlowCondensed, barlow } from "@/lib/fonts";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import StickyBar from "@/components/StickyBar";

export const metadata: Metadata = {
  title: { default: "Cali K9® — Elite Dog Training", template: "%s | Cali K9®" },
  description: "Elite dog training by Jas Leverette. As seen on Netflix's Canine Intervention.",
  openGraph: { siteName: "Cali K9®", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="font-body bg-white text-ink leading-relaxed overflow-x-hidden">
        <CartProvider>
          <AnnouncementBanner />
          <Nav />
          <main>{children}</main>
          <Footer />
          <StickyBar />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Update next.config.ts to allow additional image domains**

Add `assets.cdn.filesafe.space` to `remotePatterns` in `next.config.ts` (used for video thumbnails):

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "images.leadconnectorhq.com" },
      { protocol: "https", hostname: "assets.cdn.filesafe.space" },
      { protocol: "https", hostname: "calik9.com" },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 6: Delete old files that will be rewritten**

Remove files that are being replaced:
- `app/about/page.tsx`
- `app/eval/page.tsx`, `app/eval/AddEvalToCart.tsx`
- `app/vip/page.tsx`, `app/vip/AddVIPToCart.tsx`
- `components/Animations.tsx`
- `components/CelebBadges.tsx`
- `cali-k9-logo.avif`
- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

Keep: `lib/shopify.ts`, `context/CartContext.tsx`, `public/logo.avif`, `public/logo.svg`

- [ ] **Step 7: Verify build**

Run: `cd /Users/carlos/Projects/calik9-next && npm run build`

Expected: Build succeeds (pages may be empty shells, but no TypeScript/Tailwind errors).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Reset project with Tailwind design system and next/font setup"
```

---

### Task 2: AnnouncementBanner + StickyBar Components

**Files:**
- Create: `components/AnnouncementBanner.tsx`
- Create: `components/StickyBar.tsx`

Reference: Any HTML page from `/Users/carlos/Cali k9 website/` — the `#site-banner` and `.sticky-bar` sections.

- [ ] **Step 1: Create AnnouncementBanner**

Create `components/AnnouncementBanner.tsx`. This is the top banner with "Don't know which program fits your dog? Schedule an Evaluation" + phone + email. Dismissible via sessionStorage.

Read `/Users/carlos/Cali k9 website/online-training.html` lines 347-353 for the HTML structure. Port to a `"use client"` component with Tailwind classes matching the existing brand.css `.site-banner` styles (read `/Users/carlos/Cali k9 website/css/brand.css` and search for `.site-banner`).

- [ ] **Step 2: Create StickyBar**

Create `components/StickyBar.tsx`. Fixed bottom bar: "Don't Know Which Program Fits Your Dog?" + "Book an Evaluation" button. Red gradient background.

Read `/Users/carlos/Cali k9 website/online-training.html` lines 636-639 for HTML. Port to Tailwind matching the `.sticky-bar` styles from brand.css.

- [ ] **Step 3: Commit**

```bash
git add components/AnnouncementBanner.tsx components/StickyBar.tsx
git commit -m "Add AnnouncementBanner and StickyBar components"
```

---

### Task 3: Nav Component

**Files:**
- Rewrite: `components/Nav.tsx`

Reference: `/Users/carlos/Cali k9 website/online-training.html` lines 356-391 for nav HTML structure. Read `/Users/carlos/Cali k9 website/css/brand.css` and search for `.site-nav` for all nav styles.

- [ ] **Step 1: Rewrite Nav.tsx**

Port the HTML site nav to a `"use client"` React component with Tailwind. Must include:

- Fixed top position with white/blur background
- Logo (use the `logo.webp` from the HTML site — copy to `public/`)
- Navigation links: Home, Services (with dropdown submenu), About, Team, Testimonials, Blog, Contact, Shop (external link to shop.calik9.com)
- Evaluation CTA button (right side)
- Cart icon with badge count (from `useCart()`)
- Mobile hamburger → full-screen drawer with all links
- Services dropdown: All Services, New Clients, Returning Clients, Starter Courses, Online Training, Coaching

Copy logo files: `cp "/Users/carlos/Cali k9 website/images/logo.webp" "/Users/carlos/Projects/calik9-next/public/"` and the `@2x` version too.

- [ ] **Step 2: Verify nav renders**

Run: `npm run dev` and check `localhost:3000` — nav should render at top.

- [ ] **Step 3: Commit**

```bash
git add components/Nav.tsx public/logo.webp
git commit -m "Rewrite Nav component with Tailwind matching HTML site"
```

---

### Task 4: Footer Component

**Files:**
- Rewrite: `components/Footer.tsx`

Reference: `/Users/carlos/Cali k9 website/online-training.html` lines 641-688 for footer HTML. Read brand.css `.site-footer` styles.

- [ ] **Step 1: Rewrite Footer.tsx**

Port the HTML footer to Tailwind. 4-column grid: brand (logo + tagline + Netflix line), Training links, Company links, Locations list. Bottom bar with copyright + policy links.

All links should use Next.js `<Link>`. Policy links: refund-policy, health-policy, company-policies, terms-of-service, privacy-policy.

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "Rewrite Footer component with Tailwind matching HTML site"
```

---

### Task 5: CartDrawer Component

**Files:**
- Rewrite: `components/CartDrawer.tsx`

Reference: The existing `components/CartDrawer.tsx` for logic/structure, but restyle with Tailwind classes instead of CSS classes from globals.css.

- [ ] **Step 1: Rewrite CartDrawer.tsx**

Keep the same logic and JSX structure from the existing CartDrawer, but replace all CSS class names (`.cart-overlay`, `.cart-drawer`, `.cart-header`, etc.) with Tailwind utility classes. The visual design should remain the same — slide-out right panel, overlay, line items, quantity controls, checkout button.

Key styles to reproduce in Tailwind:
- Overlay: fixed inset-0, bg-black/50, z-[1100], opacity transition
- Drawer: fixed top-0 right-0 bottom-0, w-[420px] max-w-full, bg-white, z-[1101], translate-x transition
- Header: flex justify-between, border-b, p-5
- Line items: flex with 80px image, product info, quantity controls
- Footer: border-t, total row, checkout button

- [ ] **Step 2: Commit**

```bash
git add components/CartDrawer.tsx
git commit -m "Rewrite CartDrawer with Tailwind utility classes"
```

---

### Task 6: Reusable Service Page Components

**Files:**
- Create: `components/ServiceHero.tsx`
- Create: `components/StarsRow.tsx`
- Create: `components/PackageHeading.tsx`
- Create: `components/PackageList.tsx`
- Create: `components/PriceBlock.tsx`
- Create: `components/FormEmbed.tsx`
- Create: `components/CelebGrid.tsx`
- Create: `components/CelebMiniGrid.tsx`
- Create: `components/CtaBlock.tsx`

Reference: `/Users/carlos/Cali k9 website/online-training.html` for all component patterns.

- [ ] **Step 1: Create ServiceHero**

The dark two-column layout wrapper. Read the inline `<style>` in online-training.html for `.ot-layout`, `.ot-content`, `.ot-sidebar`, and the `.hero.eval-hero.dark-grid.sec--dark` background. Also read brand.css for `.eval-hero`, `.dark-grid`, `.hero-orb`.

```tsx
// Wrapper: dark background with radial orb, two-column grid (content left, sticky sidebar right)
// Props: children (left content), sidebar (right content)
// Responsive: stacks at 900px breakpoint
```

- [ ] **Step 2: Create StarsRow**

Simple component: `★★★★★ 4.9/5 star reviews` with amber stars and white text.

- [ ] **Step 3: Create PackageHeading**

Gradient text heading: `background: linear-gradient(135deg, #fff, #93b4ff)` with `-webkit-background-clip: text`.

```tsx
// Props: children (text content), as?: "h1" | "h2" (default h2)
```

- [ ] **Step 4: Create PackageList**

Two-column checklist with green checkmarks. Read `.pkg-list` styles from online-training.html.

```tsx
// Props: title (string), items (string[]), twoColumn?: boolean (default true)
// Renders: title label + ul with check icons + item text
// Responsive: collapses to 1 column at 480px
```

- [ ] **Step 5: Create PriceBlock**

Price display: crossed-out value, "SPECIAL OFFER TODAY ONLY" label, large price, price note.

```tsx
// Props: value?: string, offerLabel?: string, price: string, note?: string
```

- [ ] **Step 6: Create FormEmbed**

LeadConnector iframe wrapper.

```tsx
// Props: formId: string, formName: string, title: string, height?: number (default 896)
// Renders: translucent dark card with title + iframe
```

- [ ] **Step 7: Create CelebGrid**

The 3x3 celebrity testimonial grid (white background section). Read `/Users/carlos/Cali k9 website/online-training.html` lines 516-615 for full HTML. Also read brand.css for `.celeb-card`, `.celeb-card-overlay`, `.celeb-card-quote`, `.celeb-card-name`, `.celeb-card-meta`, `.celeb-card-stars` styles.

Hardcode the 9 celebrity cards data (Steph Curry, Kevin Hart, Kendrick Lamar, Dr. Phil, Demi Moore, Jason Derulo, Coi Leray, San Jose Police, Turks & Caicos Military) as a constant array. Copy the celeb images from `/Users/carlos/Cali k9 website/images/celebs/` to `public/images/celebs/`.

- [ ] **Step 8: Create CelebMiniGrid**

Small 4-across thumbnail grid with name labels. Read online-training.html or group-class.html for the mini-grid pattern.

```tsx
// Props: celebs: { name: string, image: string }[]
// Renders: grid of small square images with name labels below
```

- [ ] **Step 9: Create CtaBlock**

Dark full-width CTA section. Read online-training.html lines 620-631.

```tsx
// Props: eyebrow: string, heading: string, description: string, primaryCta: { label, href }, secondaryCta?: { label, href }
```

- [ ] **Step 10: Commit**

```bash
git add components/ServiceHero.tsx components/StarsRow.tsx components/PackageHeading.tsx components/PackageList.tsx components/PriceBlock.tsx components/FormEmbed.tsx components/CelebGrid.tsx components/CelebMiniGrid.tsx components/CtaBlock.tsx
git commit -m "Add reusable service page components"
```

---

### Task 7: Homepage

**Files:**
- Rewrite: `app/page.tsx`

Reference: `/Users/carlos/Cali k9 website/index.html` — read the full file to understand all sections.

- [ ] **Step 1: Read and understand the homepage**

Read `/Users/carlos/Cali k9 website/index.html` to catalog all sections. Also read brand.css for any homepage-specific styles.

- [ ] **Step 2: Build homepage**

Port the homepage to `app/page.tsx` using Tailwind. Key sections to include (in order as they appear in the HTML):
- Dark hero with headline, subtitle, CTAs, stats
- Marquee/trust bar
- Proof strip (stats)
- "As Seen On" logos strip
- Programs/services cards grid
- Celebrity testimonials (use `CelebGrid` component)
- Testimonial cards
- CTA section (use `CtaBlock`)

Copy any needed images from `/Users/carlos/Cali k9 website/images/` to `public/images/`.

- [ ] **Step 3: Verify homepage renders**

Run: `npm run dev` and check `localhost:3000`.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx public/images/
git commit -m "Port homepage from HTML site to Next.js with Tailwind"
```

---

### Task 8: Services Hub Page

**Files:**
- Create: `app/services/page.tsx`

Reference: `/Users/carlos/Cali k9 website/services.html`

- [ ] **Step 1: Read services.html**

Read the full file to understand the service cards grid layout, section structure (New Clients, Returning Clients), and card content.

- [ ] **Step 2: Build services page**

Port to `app/services/page.tsx`. Each service card links to its local route (`/online-training`, `/in-person`, etc. — most will be 404 for now, that's fine). Include the hero section, card grid, and any section dividers.

Copy service card images to `public/images/`.

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx public/images/
git commit -m "Port services hub page from HTML site"
```

---

### Task 9: Online Training Service Page

**Files:**
- Create: `app/online-training/page.tsx`

Reference: `/Users/carlos/Cali k9 website/online-training.html`

- [ ] **Step 1: Build online-training page**

This is the template all other service pages will follow. Use the reusable components from Task 6:

```tsx
<ServiceHero sidebar={<FormEmbed formId="1nO3eSfLEZPyIAJuJlpW" formName="Online Training Cart" title="Fill out your information below to start" />}>
  <StarsRow />
  <video ... />
  <PackageHeading as="h1">Cali K9 Online Training + 6 Months Of Weekly Group Zoom Calls</PackageHeading>
  <p className="...">description</p>
  {/* checklist, includes list, price block */}
  <PackageList title="What You'll Get:" items={[...]} />
  <PackageList title="What is included..." items={[...]} />
  <PriceBlock value="Total Value: $9,491" offerLabel="SPECIAL OFFER TODAY ONLY" price="$497.00" note="one-time" />
  {/* divider, second package, etc. */}
</ServiceHero>
<CelebGrid />
<CtaBlock ... />
```

- [ ] **Step 2: Verify page renders**

Visit `localhost:3000/online-training`.

- [ ] **Step 3: Commit**

```bash
git add app/online-training/page.tsx
git commit -m "Port online-training service page using reusable components"
```

---

### Task 10: Shop Page + Product Detail (Tailwind Restyle)

**Files:**
- Rewrite: `app/shop/page.tsx`
- Rewrite: `app/shop/[handle]/page.tsx`
- Rewrite: `app/shop/[handle]/AddToCartSection.tsx`
- Rewrite: `components/ProductCard.tsx`

Reference: The existing files for logic/structure, but restyle everything with Tailwind.

- [ ] **Step 1: Read existing AddToCartSection**

Read `app/shop/[handle]/AddToCartSection.tsx` for the variant selection logic.

- [ ] **Step 2: Rewrite ProductCard with Tailwind**

Keep the same logic from existing `ProductCard.tsx` but replace all CSS class names with Tailwind utility classes. The card should have: image with hover scale, sale/sold-out badges, product type eyebrow, title, price, add-to-cart button.

- [ ] **Step 3: Rewrite Shop page as server component**

Convert `app/shop/page.tsx` from client component to server component. Fetch products server-side. Create a separate client component `ShopFilters.tsx` for the filter bar.

Key sections:
- Dark hero: "CALI K9 GEAR" headline
- Sticky filter bar with category tabs
- Product grid (4 columns desktop, 2 mobile)

- [ ] **Step 4: Rewrite Product Detail page**

Keep as server component. Restyle with Tailwind:
- Breadcrumb
- Two-column grid: images left, info right
- Image gallery with thumbnails
- Product title, price, description
- `AddToCartSection` client component

- [ ] **Step 5: Rewrite AddToCartSection with Tailwind**

Keep variant selection logic, restyle buttons and option selectors with Tailwind.

- [ ] **Step 6: Verify shop works**

Visit `localhost:3000/shop` and click into a product. Test add-to-cart + cart drawer opens.

- [ ] **Step 7: Commit**

```bash
git add app/shop/ components/ProductCard.tsx
git commit -m "Rewrite shop pages and ProductCard with Tailwind"
```

---

### Task 11: Copy Static Assets

**Files:**
- Copy image directories from HTML site to Next.js public folder

- [ ] **Step 1: Copy images**

```bash
cp -r "/Users/carlos/Cali k9 website/images/celebs" "/Users/carlos/Projects/calik9-next/public/images/celebs"
cp -r "/Users/carlos/Cali k9 website/images/logo.webp" "/Users/carlos/Projects/calik9-next/public/images/"
cp -r "/Users/carlos/Cali k9 website/images/logo@2x.webp" "/Users/carlos/Projects/calik9-next/public/images/"
cp -r "/Users/carlos/Cali k9 website/images/favicon.png" "/Users/carlos/Projects/calik9-next/public/"
```

Also copy any homepage hero images, service card images, and other assets referenced by the HTML pages being ported.

- [ ] **Step 2: Commit**

```bash
git add public/images/ public/favicon.png
git commit -m "Add static assets from HTML site"
```

---

### Task 12: Final Integration + Build Verification

**Files:**
- All files from previous tasks

- [ ] **Step 1: Run full build**

```bash
cd /Users/carlos/Projects/calik9-next && npm run build
```

Fix any TypeScript errors or build failures.

- [ ] **Step 2: Verify all pages**

Check each route manually:
- `/` — homepage
- `/services` — services hub
- `/online-training` — service page
- `/shop` — product grid
- `/shop/[any-product]` — product detail
- Cart: add item, open drawer, adjust quantity, checkout redirect

- [ ] **Step 3: Verify mobile responsiveness**

Check all pages at 375px and 768px widths:
- Nav collapses to hamburger
- Two-column layouts stack
- Product grid goes to 2 columns
- Cart drawer goes full width
- Footer stacks

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "Complete Next.js migration with Shopify cart integration"
```
