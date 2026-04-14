import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";

export const metadata = {
  title: "Dog Training Blog",
  description:
    "Expert dog training tips, guides, and insights from Cali K9\u00ae \u2014 trusted by 3,500+ dog owners. Aggression, obedience, behavior modification, and more.",
};

const POSTS = [
  {
    slug: "aggressive-dog-training",
    tag: "Aggression",
    title: "How to Train an Aggressive Dog: A Professional Trainer\u2019s Guide",
    excerpt:
      "Aggression is the #1 reason dog owners seek professional help. Learn what causes it, why punishment makes it worse, and how behavior modification actually works.",
    image: "/images/trained-dogs1.jpeg",
    imageAlt:
      "Trained dogs demonstrating calm behavior after professional training",
    date: "April 2, 2026",
    readTime: "10 min read",
  },
  {
    slug: "board-and-train-worth-it",
    tag: "Board & Train",
    title: "Board and Train Programs: Are They Worth It?",
    excerpt:
      "An honest look at board and train dog training \u2014 what it costs, how it works, who it\u2019s best for, and what to look for in a program that actually delivers results.",
    image: "/images/dog-line-up.webp",
    imageAlt: "Dogs in formation at Cali K9 training facility",
    date: "April 2, 2026",
    readTime: "9 min read",
  },
  {
    slug: "when-to-hire-dog-trainer",
    tag: "Training Tips",
    title:
      "When Should You Hire a Professional Dog Trainer? 7 Signs It\u2019s Time",
    excerpt:
      "Tried YouTube videos and treat bribes? Here are seven clear signs that your dog needs more than DIY training \u2014 and what professional help actually looks like.",
    image: "/images/jas-eval.webp",
    imageAlt: "Professional dog trainer evaluating a dog\u2019s behavior",
    date: "April 2, 2026",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-[calc(var(--banner-h,0px)+96px)] pb-20 max-[900px]:min-h-0 max-[900px]:py-[calc(var(--banner-h,0px)+80px)] max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-9 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              Expert Insights
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            DOG TRAINING <span className="text-white/40">INSIGHTS</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[600px]">
            Professional dog training tips, guides, and real-world advice from
            the team behind Netflix&apos;s Canine Intervention.
          </p>
        </div>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-border no-underline hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="font-ui text-[11px] font-bold tracking-[2px] uppercase text-blue-500 block mb-2">
                    {post.tag}
                  </span>
                  <h3 className="font-display text-xl text-ink leading-tight mb-3">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-gray-muted leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between font-ui text-xs text-gray-muted/60 tracking-[1px] uppercase">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="15 Years. 3,500+ Dogs."
        heading="READY TO TRANSFORM YOUR DOG?"
        description="Reading is a great start. But real change happens when you work with a professional. Book a $27 evaluation and get a custom training plan for your dog."
        primaryCta={{ label: "Book Evaluation \u2014 $27 \u2192", href: "/evaluation" }}
        secondaryCta={{ label: "View Programs \u2192", href: "/services" }}
        dark
      />
    </>
  );
}
