// Package-funnel checkout: Elite / VIP / Academy → Training Kit offer →
// (if declined) Turbo Treats downsell → one combined payment link per
// selection. Create one GHL payment link per combination and drop the URLs
// in below. The kit now ships with BOTH bags of Turbo Treats, so saying yes
// to the kit goes straight to checkout — the treats step only runs when the
// kit was declined. That makes three links per tier: tier, tier-kit,
// tier-treats. VIP already includes the kit, so it skips the kit step and
// has no vip-kit link.

export type Tier = "elite" | "vip" | "academy";

export const TIER_INFO: Record<Tier, { name: string; price: number; priceLabel: string }> = {
  elite: { name: "Cali K9 Elite", price: 997, priceLabel: "$997" },
  vip: { name: "Cali K9 VIP", price: 2497, priceLabel: "$2,497" },
  academy: { name: "Cali K9 Academy", price: 97, priceLabel: "$97/month" },
};

export const KIT_PRICE = 147;
export const TREATS_PRICE = 27;

// Keys: `${tier}` | `${tier}-kit` | `${tier}-treats`
// A null entry leaves that button inert until the payment link is pasted in.
export const PAYMENT_LINKS: Record<string, string | null> = {
  "elite": "https://link.fastpaydirect.com/payment-link/6aa88de332f95ae35594aa11", // $997
  "elite-kit": "https://link.fastpaydirect.com/payment-link/6aa891f332f95ae35594aa1c", // $997 + $147 kit = $1,144 — GHL link still charges the old $197 kit ($1,194) until updated
  "elite-treats": "https://link.fastpaydirect.com/payment-link/6aa8922fceb12d9fc1a8ce53", // $1,024
  "vip": "https://link.fastpaydirect.com/payment-link/6aa8929fceb12d9fc1a8ce54", // $2,497
  "vip-treats": "https://link.fastpaydirect.com/payment-link/6aa892c932f95ae35594aa1e", // $2,524
  "academy": "https://link.fastpaydirect.com/payment-link/6a9617c6d6768df054449011", // $97/mo
  "academy-kit": "https://link.fastpaydirect.com/payment-link/6abae8c1c0e70c7fefb711c8", // $97/mo + $147 kit → /program-welcome?tier=academy&total=244
  "academy-treats": "https://link.fastpaydirect.com/payment-link/6abae9b8c0e70c7fefb711ce", // $97/mo + $27 treats → /program-welcome?tier=academy&total=124
};

export function comboKey(tier: Tier, kit: boolean, treats: boolean): string {
  return [tier, kit ? "kit" : null, treats ? "treats" : null].filter(Boolean).join("-");
}

export function checkoutUrl(tier: Tier, kit: boolean, treats: boolean): string | null {
  return PAYMENT_LINKS[comboKey(tier, kit, treats)] ?? null;
}

export function parseTier(value: string | null): Tier {
  if (value === "vip" || value === "academy") return value;
  return "elite";
}
