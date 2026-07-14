import { getProduct, ShopifyProduct } from "./shopify";

export interface TreatOffer {
  handle: string;
  displayName: string;
  blurb: string;
  featured: boolean;
  variantId: string | null;
  available: boolean;
  price: { amount: string; currencyCode: string };
  compareAt: { amount: string; currencyCode: string } | null;
  image: { url: string; altText: string | null } | null;
}

const TREATS: { handle: string; displayName: string; blurb: string; featured: boolean }[] = [
  {
    handle: "turbo-treats-chicken-hearts",
    displayName: "Chicken Hearts",
    blurb:
      "Freeze-dried 100% real chicken hearts. The high-value reward for focus work, recall, and obedience sessions.",
    featured: false,
  },
  {
    handle: "combo-pack-beef-liver-chicken-hearts",
    displayName: "Combo Pack",
    blurb:
      "Beef Liver + Chicken Hearts together. Rotate flavors to keep your dog locked in, session after session.",
    featured: true,
  },
  {
    handle: "turbo-treats-beef-liver",
    displayName: "Beef Liver",
    blurb:
      "Freeze-dried 100% pure beef liver. Nutrient-dense, easy to break into training-size pieces, and dogs go crazy for it.",
    featured: false,
  },
];

export async function getTreatOffers(): Promise<TreatOffer[]> {
  let products: (ShopifyProduct | null)[];
  try {
    products = await Promise.all(TREATS.map((t) => getProduct(t.handle)));
  } catch {
    return [];
  }

  return products.flatMap((p, i) => {
    if (!p) return [];
    const meta = TREATS[i];
    const variant =
      p.variants.edges.find((e) => e.node.availableForSale)?.node ??
      p.variants.edges[0]?.node ??
      null;
    const price = p.priceRange.minVariantPrice;
    const compareAt = p.compareAtPriceRange.minVariantPrice;
    return [
      {
        handle: meta.handle,
        displayName: meta.displayName,
        blurb: meta.blurb,
        featured: meta.featured,
        variantId: variant?.id ?? null,
        available: p.availableForSale && (variant?.availableForSale ?? false),
        price,
        compareAt: parseFloat(compareAt.amount) > parseFloat(price.amount) ? compareAt : null,
        image: p.images.edges[0]?.node ?? null,
      },
    ];
  });
}
