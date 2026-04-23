import type { Metadata } from "next";
import "./globals.css";
import { bebasNeue, barlowCondensed, barlow } from "@/lib/fonts";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import StickyBar from "@/components/StickyBar";

export const metadata: Metadata = {
  title: { default: "Cali K9\u00ae \u2014 Elite Dog Training", template: "%s | Cali K9\u00ae" },
  description:
    "Elite dog training by Jas Leverette. As seen on Netflix\u2019s Canine Intervention.",
  openGraph: { siteName: "Cali K9\u00ae", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <body className="font-body bg-white text-ink leading-relaxed overflow-x-hidden">
        <CartProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-2 focus:left-2 focus:bg-blue-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-sm focus:font-ui focus:text-sm focus:font-bold focus:uppercase focus:tracking-[2px]">
            Skip to main content
          </a>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyBar />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
