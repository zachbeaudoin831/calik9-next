import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getProduct, formatMoney } from "@/lib/shopify";
import AddToCartSection from "./AddToCartSection";

const CUSTOM_PAGES: Record<string, string> = {
  "vip-training-with-jas-leverette": "/vip-with-jas",
};

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  if (CUSTOM_PAGES[handle]) redirect(CUSTOM_PAGES[handle]);
  const product = await getProduct(handle);
  if (!product) notFound();

  const images = product.images.edges.map((e) => e.node);
  const compareAt = product.compareAtPriceRange.minVariantPrice;
  const price = product.priceRange.minVariantPrice;
  const hasDiscount = parseFloat(compareAt.amount) > parseFloat(price.amount);

  return (
    <>
      <div className="pt-[72px] bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          {/* Breadcrumb */}
          <nav className="py-6 font-ui text-xs tracking-[2px] uppercase text-gray-muted flex gap-2 items-center">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-ink">{product.title}</span>
          </nav>

          {/* Product grid */}
          <div className="grid grid-cols-2 gap-12 pb-16 max-md:grid-cols-1 max-md:gap-8">
            {/* Images */}
            <div>
              <div className="rounded-lg overflow-hidden bg-off">
                {images[0] ? (
                  <Image
                    src={images[0].url}
                    alt={images[0].altText ?? product.title}
                    width={800}
                    height={800}
                    className="w-full h-auto block"
                    priority
                  />
                ) : (
                  <div className="w-full aspect-square flex items-center justify-center">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-20">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="w-[72px] h-[72px] rounded-md overflow-hidden border border-border flex-shrink-0 cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <Image
                        src={img.url}
                        alt={img.altText ?? ""}
                        width={72}
                        height={72}
                        className="w-[72px] h-[72px] object-cover block"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {product.productType && (
                <p className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-gray-muted mb-2">
                  {product.productType}
                </p>
              )}
              <h1 className="font-display text-[clamp(28px,3vw,40px)] text-ink leading-[1.1] mb-4">
                {product.title}
              </h1>
              {hasDiscount && (
                <p className="font-ui text-[13px] tracking-[1px] text-gray-muted line-through mb-1">
                  {formatMoney(compareAt.amount, compareAt.currencyCode)}
                </p>
              )}
              {product.descriptionHtml && (
                <div
                  className="product-description font-body text-base text-gray-muted leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              )}

              <AddToCartSection product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Back to shop */}
      <div className="py-10 bg-off border-t border-border text-center">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <Link
            href="/shop"
            className="inline-block font-ui text-sm font-bold tracking-[2px] uppercase px-8 py-3.5 rounded-sm border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-all no-underline"
          >
            &larr; Back to Shop
          </Link>
        </div>
      </div>
    </>
  );
}
