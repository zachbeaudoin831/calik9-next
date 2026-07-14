import type { Metadata } from "next";
import Image from "next/image";
import CelebMiniGrid from "@/components/CelebMiniGrid";
import BuyBox from "./BuyBox";
import { getTreatOffers } from "@/lib/turbo-treats";

export const metadata: Metadata = {
  title: "Turbo Treats® — Premium Freeze-Dried Training Treats",
  description:
    "Turbo Treats® by Jas Leverette. 100% single-ingredient freeze-dried chicken hearts and beef liver — the training reward used inside Cali K9® programs.",
  // Draft variant page — keep out of search while A/B versions are both live.
  robots: { index: false, follow: false },
};

const MINI_CELEBS = [
  { name: "Steph Curry", image: "/images/celebs/steph-curry.png" },
  { name: "Kevin Hart", image: "/images/celebs/kevin-hart.png" },
  { name: "Demi Moore", image: "/images/celebs/demi-moore.png" },
  { name: "Dr. Phil", image: "/images/celebs/dr-phil.png" },
];

const HOW_TO_STEPS = [
  {
    num: 1,
    title: "BREAK IT DOWN",
    desc: "Freeze-dried pieces break easily into training-size rewards. Smaller pieces mean more reps per session — and more chances to mark the behavior you want.",
  },
  {
    num: 2,
    title: "PAY THE GOOD STUFF",
    desc: "The instant your dog gets it right — recall, heel, calm focus — reward. A high-value treat makes the lesson stick faster than praise alone.",
  },
  {
    num: 3,
    title: "ROTATE FLAVORS",
    desc: "Switch between Chicken Hearts and Beef Liver to keep motivation high. A dog that never knows which reward is coming stays locked in on you.",
  },
];

const FAQS = [
  {
    q: "What's in Turbo Treats?",
    a: "One ingredient per bag. The Chicken Hearts bag is 100% real chicken hearts. The Beef Liver bag is 100% pure beef liver. No fillers, no preservatives, no artificial anything — that's the entire label.",
  },
  {
    q: "Why freeze-dried?",
    a: "Cooking strips nutrients out. Freeze-drying preserves the raw protein and natural flavor dogs go crazy for, while making it shelf-stable and easy to carry in a treat pouch.",
  },
  {
    q: "Are these just for training?",
    a: "They shine as a high-value training reward — that's what they were built for — but they work just as well as an everyday healthy treat or a food topper.",
  },
  {
    q: "Who makes Turbo Treats?",
    a: "Turbo Treats is the treat brand from Jas Leverette — founder of Cali K9® and host of Netflix's Canine Intervention. It's the same reward his team uses inside Cali K9 training programs.",
  },
  {
    q: "How do I get them?",
    a: "Pick your flavor and quantity above and check out right on this site — secure checkout is powered by Shopify, shipped fast within the U.S.",
  },
];

export default async function TurboTreatsV3Page() {
  const offers = await getTreatOffers();

  return (
    <main className="bg-white">
      {/* ── Hero: big product shot + badge ── */}
      <section className="pt-[140px] max-md:pt-[124px] bg-white">
        <div className="max-w-[880px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="relative pt-10">
            <Image
              src="https://cdn.shopify.com/s/files/1/0534/2275/1922/files/Combo-Pack-Beef-Liver-_-Chicken-Hearts-Cali-K9r-Online-Store-101553793.jpg?v=1777312311"
              alt="Turbo Treats freeze-dried chicken hearts and beef liver training treats"
              width={880}
              height={880}
              priority
              className="w-full h-auto rounded-xl"
            />
            {/* Circular trainer badge */}
            <div className="absolute top-2 left-2 w-32 h-32 max-md:w-24 max-md:h-24 rounded-full bg-[#B03A3A] border-4 border-white shadow-lg flex flex-col items-center justify-center text-center rotate-[-8deg]">
              <span className="font-ui text-[11px] max-md:text-[9px] font-bold tracking-[1px] text-white/85 uppercase leading-tight">
                Trainer
              </span>
              <span className="font-display text-2xl max-md:text-lg text-white leading-none my-0.5">
                APPROVED
              </span>
              <span className="font-ui text-[10px] max-md:text-[8px] font-bold tracking-[1px] text-white/85 uppercase leading-tight">
                Cali K9&reg;
              </span>
            </div>
          </div>

          {/* Title block */}
          <div className="pt-8 pb-4">
            <h1 className="font-display text-[clamp(40px,6vw,64px)] text-[#46586B] leading-none mb-2">
              TURBO TREATS&reg;
            </h1>
            <p className="font-body text-xl text-gray-muted mb-4">
              Premium Freeze-Dried Single-Ingredient Training Treats
            </p>
            <span className="inline-flex items-center gap-2 bg-[#1F3D2B] text-white font-ui text-[13px] font-bold tracking-[1.5px] uppercase px-5 py-2.5 mb-4"
              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%, 12px 50%)" }}
            >
              🏆 Over <span className="text-[#E9A13B]">10,000 dogs</span> trained by Cali K9&reg;
            </span>
            <p className="font-ui text-base text-[#46586B] flex items-center gap-2">
              <span className="text-[#E9A13B] text-xl tracking-tight">★★★★★</span>
              4.9 Average Client Rating
            </p>
          </div>

          {/* Buy box */}
          <div id="buy" className="pb-14 scroll-mt-[84px]">
            <BuyBox offers={offers} />
          </div>
        </div>
      </section>

      {/* ── What's inside ── */}
      <section className="py-16 max-md:py-10 bg-[#F1F3F6]">
        <div className="max-w-[880px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(30px,4vw,42px)] text-[#46586B] leading-none mb-6">
            WHAT&rsquo;S INSIDE:
          </h2>
          <p className="font-body text-lg text-gray-muted leading-[1.8] mb-4">
            Turbo Treats&reg; is nutrition the way your dog was built to eat it.
            Every bag holds exactly one ingredient — real chicken hearts or pure
            beef liver — gently freeze-dried to lock in the raw protein,
            nutrients, and natural flavor that make dogs lose their minds.
          </p>
          <p className="font-body text-lg text-gray-muted leading-[1.8]">
            Most dog treats are cooked to death and padded with fillers,
            by-products, and artificial flavor. Turbo Treats takes the opposite
            approach: pure flavor, raw energy, next-level nutrition — and
            nothing else. It&rsquo;s the reward Cali K9&reg; trainers reach for in
            real training sessions, because motivation is everything.
          </p>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section className="py-16 max-md:py-10 bg-[#FBF3E4]">
        <div className="max-w-[880px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(30px,4vw,42px)] text-[#46586B] leading-none mb-3">
            INGREDIENTS:
          </h2>
          <p className="font-body text-lg text-gray-muted mb-10">
            This is the complete list. Both of them.
          </p>

          <div className="grid grid-cols-2 gap-10 max-[480px]:grid-cols-1">
            {[
              {
                name: "Chicken Hearts",
                note: "100% real chicken hearts. That's the whole label.",
                image:
                  "https://cdn.shopify.com/s/files/1/0534/2275/1922/files/Turbo-Treats-Chicken-Hearts-Cali-K9r-100917931.png?v=1773427361",
              },
              {
                name: "Beef Liver",
                note: "100% pure beef liver. No fillers, no shortcuts.",
                image:
                  "https://cdn.shopify.com/s/files/1/0534/2275/1922/files/Turbo-Treats-Beef-Liver-Cali-K9r-100917578.png?v=1773427121",
              },
            ].map((ing) => (
              <div key={ing.name} className="text-center">
                <div className="w-56 h-56 max-md:w-44 max-md:h-44 mx-auto rounded-full bg-white border border-black/[0.08] shadow-sm overflow-hidden mb-5 flex items-center justify-center">
                  <Image
                    src={ing.image}
                    alt={`Turbo Treats ${ing.name}`}
                    width={340}
                    height={340}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-ui text-xl font-bold text-[#46586B] mb-1">{ing.name}</h3>
                <p className="font-body text-base text-gray-muted">{ing.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to use ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[880px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(30px,4vw,42px)] text-[#46586B] leading-none mb-10 text-center">
            HOW TO TRAIN WITH TURBO TREATS
          </h2>
          <div className="space-y-8">
            {HOW_TO_STEPS.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#46586B] text-white font-display text-2xl flex items-center justify-center shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-ui text-lg font-bold text-[#46586B] mb-1.5">{step.title}</h3>
                  <p className="font-body text-base text-gray-muted leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 max-md:py-10 bg-[#F1F3F6]">
        <div className="max-w-[880px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(30px,4vw,42px)] text-[#46586B] leading-none mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-ui text-lg font-bold text-[#46586B] mb-2">{faq.q}</h3>
                <p className="font-body text-base text-gray-muted leading-[1.8]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof band (dark slate) ── */}
      <section className="py-16 max-md:py-10 bg-[#46586B]">
        <div className="max-w-[880px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] text-white leading-tight mb-8">
            THE SAME TEAM THE BIGGEST NAMES TRUST WITH THEIR DOGS
          </h2>
          <CelebMiniGrid celebs={MINI_CELEBS} />
        </div>
      </section>

      {/* ── Letter from Jas ── */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-[720px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-[#EEF1F8] mb-8">
            <Image
              src="/images/jas-headshot.jpg"
              alt="Jas Leverette, founder of Cali K9 and creator of Turbo Treats"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-display text-[clamp(28px,3.5vw,40px)] text-[#46586B] leading-tight mb-6 text-center">
            A NOTE FROM JAS
          </h2>
          <div className="font-body text-lg text-gray-muted leading-[1.9] space-y-4">
            <p>
              After 15+ years and more than 10,000 dogs, I&rsquo;ll tell you the
              truth most treat companies won&rsquo;t: your training is only as
              strong as your reward. A dog that shrugs at the treat in your hand
              is a dog that&rsquo;s harder to teach.
            </p>
            <p>
              That&rsquo;s why I made Turbo Treats. One real ingredient,
              freeze-dried raw, nothing artificial — because your dog&rsquo;s not
              just a pet, they&rsquo;re family. This is the same reward my team
              and I use in Cali K9 sessions every day, and now it&rsquo;s yours.
            </p>
            <p className="font-ui font-bold text-[#46586B]">
              — Jas Leverette, Founder of Cali K9&reg; &middot; Host of
              Netflix&rsquo;s Canine Intervention
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="#buy"
              className="inline-block font-ui text-lg font-bold tracking-[1px] uppercase px-12 py-5 rounded-lg bg-[#E9A13B] text-white hover:bg-[#D8912C] transition-colors shadow-[0_4px_16px_rgba(233,161,59,0.4)]"
            >
              Get Turbo Treats &uarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
