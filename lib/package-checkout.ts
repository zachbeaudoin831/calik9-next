// Package-funnel checkout: Elite/VIP → (kit upsell) → treats upsell → one
// combined payment link per selection combo. Create one GHL payment link per
// combination and drop the URLs in below — six in total. VIP skips the kit
// step because the Training Kit is already included in VIP.
//
// The kit's treats-flavor choice (beef/chicken) is appended to the checkout
// URL as ?flavor=... — capture it with a field on the GHL checkout, or from
// the order confirmation follow-up.

export type Tier = "elite" | "vip";

export const TIER_INFO: Record<Tier, { name: string; price: number }> = {
  elite: { name: "Cali K9 Elite", price: 997 },
  vip: { name: "Cali K9 VIP", price: 2497 },
};

export const KIT_PRICE = 197;
export const TREATS_PRICE = 27;

// Keys: `${tier}` | `${tier}-kit` | `${tier}-treats` | `${tier}-kit-treats`
export const PAYMENT_LINKS: Record<string, string | null> = {
  "elite": null, //           $997
  "elite-kit": null, //       $1,194
  "elite-treats": null, //    $1,024
  "elite-kit-treats": null, // $1,221
  "vip": null, //             $2,497
  "vip-treats": null, //      $2,524
};

export function comboKey(tier: Tier, kit: boolean, treats: boolean): string {
  return [tier, kit ? "kit" : null, treats ? "treats" : null].filter(Boolean).join("-");
}

export function checkoutUrl(
  tier: Tier,
  kit: boolean,
  treats: boolean,
  flavor?: string,
): string | null {
  const base = PAYMENT_LINKS[comboKey(tier, kit, treats)];
  if (!base) return null;
  if (kit && flavor) {
    return `${base}${base.includes("?") ? "&" : "?"}flavor=${encodeURIComponent(flavor)}`;
  }
  return base;
}

export function parseTier(value: string | null): Tier {
  return value === "vip" ? "vip" : "elite";
}
