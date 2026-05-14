import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";

export const metadata = {
  title: "Returning Client Services | Cali K9®",
  description:
    "Cali K9® returning client programs — Zoom Group Class, In-Person Group Class, and Semi-Private Training for graduates ready to keep their dogs sharp.",
};

const RETURNING_CLIENT_CARDS = [
  {
    tag: "Virtual",
    name: "ZOOM\nGROUP CLASS",
    desc: "Live virtual group sessions with certified Cali K9 trainers. Reinforce training from anywhere in the world.",
    href: "/zoom-group-class",
    bg: "linear-gradient(145deg, #0A3278, #1550B0, #1A5FC0)",
    image: "https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/654a6b4092b857c45895e91d.webp",
    imageAlt: "Live Zoom group dog training session with a certified Cali K9 trainer",
    imagePosition: "center center",
  },
  {
    tag: "In-Person",
    name: "IN-PERSON\nGROUP CLASS",
    desc: "Real-world socialization and obedience reinforcement in a structured group setting at a Cali K9 facility.",
    href: "/group-class",
    bg: "linear-gradient(145deg, #052030, #083548, #0A4560)",
    image: "/images/trained-dogs1.jpeg",
    imageAlt: "Cali K9 in-person group class at the facility",
    imagePosition: "center 70%",
  },
  {
    tag: "Small Group",
    name: "SEMI-PRIVATE\nTRAINING",
    desc: "Personalized attention in a smaller group setting. Targeted behavior work with dedicated trainer oversight.",
    href: "/semi-private",
    bg: "linear-gradient(145deg, #180838, #251258, #301A70)",
    image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/66bd4d94e71424404825b221.jpeg",
    imageAlt: "Cali K9 semi-private dog training in a small group setting",
    imagePosition: "center center",
  },
];

const CARD_PLACEHOLDER_IMAGE = "/images/dog-line-up.webp";

type Card = (typeof RETURNING_CLIENT_CARDS)[number] & { disabled?: boolean };

function ServiceCard({ card }: { card: Card }) {
  const imageSrc = card.image ?? CARD_PLACEHOLDER_IMAGE;
  const imagePosition = card.imagePosition ?? "center";

  const inner = (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A1A40] via-[#0E2155] to-[#122E85] shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_18px_44px_rgba(26,63,171,0.35)] group h-full flex flex-col">
      {card.disabled && <div className="absolute inset-0 bg-black/35 pointer-events-none z-[3]" />}

      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={imageSrc}
          alt={card.imageAlt ?? `${card.name.replace(/\n/g, " ")} — Cali K9`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width: 768px) 100vw, 560px"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#0A1A40]/85 pointer-events-none" />
      </div>

      <div className="relative z-[1] flex-1 flex flex-col justify-between p-7 max-md:p-5">
        <div>
          <p className="font-ui text-[11px] font-bold tracking-[3px] uppercase text-blue-300/80 mb-3">
            {card.tag}
          </p>
          <h3 className="font-display text-[clamp(24px,2.8vw,34px)] text-white leading-[1.08] tracking-[1px] whitespace-pre-line mb-3">
            {card.name}
          </h3>
          <p className="font-body text-[15px] max-md:text-sm text-white/70 leading-relaxed mb-6">
            {card.desc}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 self-start bg-white/[0.06] border border-white/15 text-white font-ui text-xs font-bold tracking-[2px] uppercase px-4 py-2.5 rounded-sm transition-all group-hover:bg-blue-500/25 group-hover:border-blue-400/60 group-hover:text-white">
          Learn More
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </article>
  );

  if (card.disabled || !card.href) return inner;
  return (
    <Link href={card.href} className="no-underline block h-full">
      {inner}
    </Link>
  );
}

export default function ReturningClientServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-standard relative flex items-center overflow-hidden py-24 pb-20 max-[900px]:min-h-0 max-[900px]:py-20 max-[900px]:pb-12">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
        />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1] text-left w-full">
          <div className="flex items-center gap-[14px] mb-6 flex-wrap">
            <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
              Returning Clients
            </span>
            <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
              Stay sharp · keep progressing
            </span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-none tracking-[1px] text-white mb-5">
            RETURNING <span className="text-[#8A97C4]">CLIENTS</span>
          </h1>
          <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[640px] mb-9">
            Completed a Cali K9 program? Keep your dog&rsquo;s training sharp with
            our memberships and follow-up sessions &mdash; built for graduates who
            want to stay consistent and keep advancing.
          </p>
          <div className="flex gap-4 flex-wrap max-[768px]:flex-col max-[768px]:items-stretch">
            <a href="#returning-clients" className="btn btn-white btn-lg">
              See Programs &rarr;
            </a>
            <Link href="/newclientservices" className="btn btn-outline-white btn-lg">
              New to Cali K9? &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── RETURNING CLIENTS ── */}
      <section id="returning-clients" className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-2">
            RETURNING CLIENT PROGRAMS
          </h2>
          <p className="font-ui text-sm font-bold tracking-[2px] uppercase text-gray-muted mb-10">
            Choose your service
          </p>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {RETURNING_CLIENT_CARDS.map((card) => (
              <ServiceCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBlock
        eyebrow="Need Something New?"
        heading="STILL HAVE A PROBLEM TO SOLVE?"
        description="Book a private follow-up evaluation with our team and we'll recommend the right next step."
        primaryCta={{ label: "Book Evaluation →", href: "/evaluation-with-behavior-specialist" }}
        secondaryCta={{ label: "View All Services →", href: "/newclientservices" }}
      />
    </>
  );
}
