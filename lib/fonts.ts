import { Bebas_Neue, Barlow_Condensed, Barlow } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ck-display",
  display: "swap",
});

export const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-ck-ui",
  display: "swap",
});

export const barlow = Barlow({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ck-body",
  display: "swap",
});
