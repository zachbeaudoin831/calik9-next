import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { bebasNeue, barlowCondensed, barlow } from "@/lib/fonts";
import { CartProvider } from "@/context/CartContext";
import SaleBanner from "@/components/SaleBanner";
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
          <SaleBanner />
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyBar />
          <CartDrawer />
        </CartProvider>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','3260974804196034');
          fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3260974804196034&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* LeadConnector Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="66c2826fd1bc9e0c6ef3ace2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
