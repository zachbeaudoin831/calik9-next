"use client";

import ProductCard from "@/components/ProductCard";
import { ShopifyProduct } from "@/lib/shopify";

export default function ShopTeaser({ products }: { products: ShopifyProduct[] }) {
  return (
    <div className="grid grid-cols-4 gap-6 mb-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
