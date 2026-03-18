import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Animations from "@/components/Animations";

export const metadata: Metadata = {
  title: { default: "Cali K9® — Professional Dog Training", template: "%s | Cali K9®" },
  description: "Professional dog training rooted in relationship, structure, and real-world results. As seen on Netflix's Canine Intervention.",
  openGraph: {
    siteName: "Cali K9®",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;500;600;700;800&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <Nav />
          <Animations />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
