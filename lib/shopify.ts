const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const STOREFRONT_URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

async function storefrontFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  description: string;
  descriptionHtml: string;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  compareAtPriceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        quantityAvailable: number | null; // null = inventory not tracked
        requiresShipping: boolean; // false = service/digital → max qty 1
        price: { amount: string; currencyCode: string };
        compareAtPrice: { amount: string; currencyCode: string } | null;
        selectedOptions: { name: string; value: string }[];
      };
    }[];
  };
  options: { id: string; name: string; values: string[] }[];
}

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    requiresShipping: boolean;
    price: { amount: string; currencyCode: string };
    product: { title: string; handle: string; images: { edges: { node: { url: string; altText: string | null } }[] } };
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { totalAmount: { amount: string; currencyCode: string } };
  lines: { edges: { node: CartLine }[] };
}

// ── Queries ──────────────────────────────────────────────────────────────────

const PRODUCT_FIELDS = `
  id handle title productType tags availableForSale description descriptionHtml
  priceRange { minVariantPrice { amount currencyCode } }
  compareAtPriceRange { minVariantPrice { amount currencyCode } }
  images(first: 6) { edges { node { url altText } } }
  variants(first: 20) {
    edges { node {
      id title availableForSale quantityAvailable requiresShipping
      price { amount currencyCode }
      compareAtPrice { amount currencyCode }
      selectedOptions { name value }
    }}
  }
  options { id name values }
`;

const CART_FIELDS = `
  id checkoutUrl totalQuantity
  cost { totalAmount { amount currencyCode } }
  lines(first: 100) { edges { node {
    id quantity
    merchandise { ... on ProductVariant {
      id title requiresShipping
      price { amount currencyCode }
      product { title handle images(first:1) { edges { node { url altText } } } }
    }}
  }}}
`;

export async function getProducts(first = 24): Promise<ShopifyProduct[]> {
  const data = await storefrontFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(`
    query { products(first: ${first}, sortKey: CREATED_AT, reverse: true) {
      edges { node { ${PRODUCT_FIELDS} } }
    }}
  `);
  return data.products.edges.map((e) => e.node);
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const data = await storefrontFetch<{ product: ShopifyProduct | null }>(`
    query { product(handle: "${handle}") { ${PRODUCT_FIELDS} } }
  `);
  return data.product;
}

export async function cartCreate(variantId: string, quantity = 1): Promise<Cart> {
  const data = await storefrontFetch<{ cartCreate: { cart: Cart } }>(`
    mutation {
      cartCreate(input: { lines: [{ merchandiseId: "${variantId}", quantity: ${quantity} }] }) {
        cart { ${CART_FIELDS} }
      }
    }
  `);
  return data.cartCreate.cart;
}

export async function cartLinesAdd(cartId: string, variantId: string, quantity = 1): Promise<Cart> {
  const data = await storefrontFetch<{ cartLinesAdd: { cart: Cart } }>(`
    mutation {
      cartLinesAdd(cartId: "${cartId}", lines: [{ merchandiseId: "${variantId}", quantity: ${quantity} }]) {
        cart { ${CART_FIELDS} }
      }
    }
  `);
  return data.cartLinesAdd.cart;
}

export async function cartLinesRemove(cartId: string, lineIds: string[]): Promise<Cart> {
  const ids = lineIds.map((id) => `"${id}"`).join(",");
  const data = await storefrontFetch<{ cartLinesRemove: { cart: Cart } }>(`
    mutation {
      cartLinesRemove(cartId: "${cartId}", lineIds: [${ids}]) {
        cart { ${CART_FIELDS} }
      }
    }
  `);
  return data.cartLinesRemove.cart;
}

export async function cartLinesUpdate(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  const data = await storefrontFetch<{ cartLinesUpdate: { cart: Cart } }>(`
    mutation {
      cartLinesUpdate(cartId: "${cartId}", lines: [{ id: "${lineId}", quantity: ${quantity} }]) {
        cart { ${CART_FIELDS} }
      }
    }
  `);
  return data.cartLinesUpdate.cart;
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await storefrontFetch<{ cart: Cart | null }>(`
    query { cart(id: "${cartId}") { ${CART_FIELDS} } }
  `);
  return data.cart;
}

export function formatMoney(amount: string, currencyCode = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: currencyCode }).format(parseFloat(amount));
}
