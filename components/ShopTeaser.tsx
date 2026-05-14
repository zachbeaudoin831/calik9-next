"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ShopifyProduct } from "@/lib/shopify";

interface ShopTeaserProps {
  products: ShopifyProduct[];
  apparelCard?: {
    title: string;
    href: string;
    image: string;
  };
}

export default function ShopTeaser({ products, apparelCard }: ShopTeaserProps) {
  return (
    <div className="grid grid-cols-4 gap-6 mb-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {apparelCard && (
        <Link
          href={apparelCard.href}
          className="group block bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full no-underline"
        >
          <div className="relative w-full aspect-square overflow-hidden bg-off">
            <Image
              src={apparelCard.image}
              alt={apparelCard.title}
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <p className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-gray-muted mb-1">
              Cali K9 Apparel
            </p>
            <h3 className="font-ui text-sm font-bold tracking-[0.5px] text-ink leading-snug mb-2 group-hover:text-blue-500 transition-colors">
              {apparelCard.title}
            </h3>
            <span className="mt-auto w-full text-center font-ui text-xs font-bold tracking-[2px] uppercase bg-blue-500 text-white py-3 rounded-sm group-hover:bg-blue-700 transition-colors">
              Shop Apparel
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
