import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getProduct, formatMoney } from "@/lib/shopify";
import AddToCartSection from "./AddToCartSection";

// Handles with dedicated custom pages
const CUSTOM_PAGES: Record<string, string> = {
  "vip-training-with-jas-leverette": "/vip",
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
      <div style={{paddingTop:"72px",background:"var(--w)"}}>
        <div className="wrap">
          {/* Breadcrumb */}
          <div style={{padding:"24px 0",fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"2px",textTransform:"uppercase",color:"var(--gm)",display:"flex",gap:"8px",alignItems:"center"}}>
            <Link href="/" style={{transition:"color .2s"}} className="ft-col">Home</Link>
            <span>/</span>
            <Link href="/shop" style={{transition:"color .2s"}} className="ft-col">Shop</Link>
            <span>/</span>
            <span style={{color:"var(--gd)"}}>{product.title}</span>
          </div>

          <div className="pdp-grid">
            {/* Images */}
            <div>
              <div className="pdp-main-img">
                {images[0] ? (
                  <Image
                    src={images[0].url}
                    alt={images[0].altText ?? product.title}
                    width={800}
                    height={800}
                    style={{width:"100%",height:"auto",display:"block"}}
                    priority
                  />
                ) : (
                  <div className="prod-img-placeholder" style={{aspectRatio:"1",height:"auto"}}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{opacity:.2}}>
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="pdp-thumb-row">
                  {images.map((img, i) => (
                    <div key={i} className="pdp-thumb">
                      <Image src={img.url} alt={img.altText ?? ""} width={72} height={72} style={{width:"72px",height:"72px",objectFit:"cover",display:"block"}} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="pdp-info">
              {product.productType && <p className="pdp-type">{product.productType}</p>}
              <h1 className="pdp-title">{product.title}</h1>
              {hasDiscount && (
                <p style={{fontFamily:"var(--font-cond)",fontSize:"13px",letterSpacing:"1px",color:"var(--gm)",textDecoration:"line-through",marginBottom:"4px"}}>
                  {formatMoney(compareAt.amount, compareAt.currencyCode)}
                </p>
              )}

              {product.description && (
                <p className="pdp-desc">{product.description}</p>
              )}

              <AddToCartSection product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Back to shop */}
      <div style={{padding:"40px 0",background:"var(--off)",borderTop:"1px solid var(--bo)"}}>
        <div className="wrap" style={{textAlign:"center"}}>
          <Link href="/shop" className="btn btn-outline">← Back to Shop</Link>
        </div>
      </div>
    </>
  );
}
