import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CelebGrid from "@/components/CelebGrid";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "About Jas Leverette",
  description:
    "Jas Leverette is the star of Canine Intervention on Netflix. He has appeared on the Ellen DeGeneres Show, TMZ, and news worldwide. Founder of Cali K9\u00ae, training dogs in Los Angeles, San Jose & online since 2009.",
  openGraph: {
    title: "About Jas Leverette | Cali K9\u00ae",
    description:
      "Jas Leverette is the star of Canine Intervention on Netflix. Founder of Cali K9\u00ae, training dogs in Los Angeles, San Jose & online since 2009.",
    url: "https://calik9.com/about",
    images: ["https://calik9.com/images/cdn/66a3147ce455c59ccdcdbe67.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jas Leverette | Cali K9\u00ae",
    description:
      "Meet Jas Leverette \u2014 dog trainer, animal communicator, and host of Netflix\u2019s Canine Intervention. Founder of Cali K9\u00ae since 2009.",
    images: ["https://calik9.com/images/cdn/66a3147ce455c59ccdcdbe67.webp"],
  },
};

const STATS = [
  { num: "15+", label: "Years Training", desc: "Over a decade and a half of continuous professional practice." },
  { num: "3,500+", label: "Dogs Transformed", desc: "From 8-week-old puppies to senior dogs with severe aggression histories." },
  { num: "1M+", label: "Social Following", desc: "A global community of dog owners and training enthusiasts." },
  { num: "11+", label: "Celebrity Clients", desc: "Trusted by athletes, entertainers, and public figures nationwide." },
];

const PRESS = [
  {
    pub: "LA Times",
    headline: "\u201CTo this Bay Area trainer, there are no bad dogs. So his Netflix show trains humans\u201D",
    image: "/images/cdn/66f3591b6841e108980619b3.webp",
    href: "https://www.latimes.com/entertainment-arts/tv/story/2021-02-24/canine-intervention-netflix-jas-leverette-dog-trainer",
  },
  {
    pub: "SF Gate",
    headline: "\u201CNetflix\u2019s \u2018Canine Intervention\u2019 features Oakland dog trainer to the stars\u201D",
    image: "/images/cdn/66f359888b3b1883db5f1f02.webp",
    href: "https://www.sfgate.com/streaming/article/Jas-Leverette-Canine-Intervention-Oakland-Netflix-15983560.php",
  },
  {
    pub: "CBS News",
    headline: "\u201CCelebrity dog trainer Jas Leverette takes pride in his passion and his roots\u201D",
    image: "/images/cdn/66f358d1aaa9bfa69e92538e.webp",
    href: "https://www.cbsnews.com/amp/sanfrancisco/news/celebrity-dog-trainer-jas-leverette-takes-pride-in-his-passion-and-his-roots/",
  },
  {
    pub: "Variety",
    headline: "\u201C\u2018Canine Intervention\u2019 Trainer Jas Leverette on His Box Method and Working With Rescues\u201D",
    image: "/images/cdn/65cc916cfe137aaa640243f8.webp",
    href: "https://variety.com/2021/tv/features/canine-intervention-jas-leverette-box-method-1234903516/",
  },
  {
    pub: "Screen Rant",
    headline: "\u201CCanine Intervention: Everything To Know About Show Star Jas Leverette\u201D",
    image: "/images/cdn/66f356f93d87a5144f293201.webp",
    href: "https://screenrant.com/canine-intervention-everything-know-jas-leverette-celebrity-trainer/",
  },
  {
    pub: "NBC News",
    headline: "\u201CNetflix\u2019s \u2018Canine Intervention\u2019 is about humans training dogs \u2014 and dogs training humans\u201D",
    image: "/images/cdn/66f3574be550d972a87c4363.webp",
    href: "https://www.nbcnews.com/think/opinion/netflix-s-canine-intervention-about-humans-training-dogs-dogs-training-ncna1258892",
  },
  {
    pub: "Green Matters",
    headline: "\u201C\u2018Canine Intervention\u2019 Star, Jas Leverette, on Training Celebrity Pups\u201D",
    image: "/images/cdn/canine-intervention-netflix.webp",
    href: "https://www.greenmatters.com/p/canine-intervention-jas-leverette",
  },
  {
    pub: "Prime Timer",
    headline: "\u201CMove Over Dog Whisperer, Netflix Previews New Series Canine Intervention\u201D",
    image: "/images/cdn/66f3588e73ceaef222984570.webp",
    href: "https://www.primetimer.com/quickhits/problematic-pups-become-domesticated-dogs-in-netflixs-canine-intervention-trailer",
  },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/CaliK9/", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", href: "https://www.instagram.com/calik9/", icon: "" },
  { label: "Twitter / X", href: "https://x.com/calik9", icon: "M4 4l16 16M20 4L4 20" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/california-canine-solutions", icon: "" },
  { label: "YouTube", href: "https://www.youtube.com/c/calik9dogtraining", icon: "" },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* ── HERO ── */}
      <section className="hero-about relative flex items-center min-h-screen max-[900px]:min-h-0 overflow-hidden antialiased">
        <div
          className="absolute w-[600px] h-[600px] max-md:w-[360px] max-md:h-[360px] max-[480px]:w-[220px] max-[480px]:h-[220px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%]"
          style={{ background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-[3] flex flex-col justify-center pt-[calc(var(--banner-h,0px)+96px)] px-12 pb-20 max-w-[1200px] mx-auto w-full max-md:px-6 max-md:pt-[calc(var(--banner-h,0px)+80px)] max-md:pb-12">
          <div className="max-w-[680px] max-[900px]:mx-auto max-[900px]:text-center max-[768px]:text-left max-[768px]:mx-0">
            <div className="flex items-center gap-[14px] flex-wrap mb-6 max-[900px]:justify-center max-[768px]:justify-start">
              <span className="inline-flex items-center bg-white/15 border border-white/30 rounded-sm px-5 py-[9px] font-ui text-sm font-bold tracking-[2.5px] uppercase text-white">
                Schutzhund Certified &middot; Est. 2009
              </span>
              <span className="font-ui text-sm font-bold tracking-[2px] uppercase text-[#7B8CC4]">
                Founder &amp; Head Trainer
              </span>
            </div>
            <h1 className="font-display text-[clamp(64px,9vw,112px)] leading-[0.9] tracking-[1px] text-white mb-5">
              JAS<br />
              <span className="text-white/40">LEVERETTE</span>
            </h1>
            <p className="font-ui text-[18px] text-white/70 tracking-[0.5px] leading-[1.6] max-w-[560px] mb-9">
              Born in Yonkers. Raised in Oakland. Built worldwide. From the
              streets to Netflix, Jas Leverette is redefining what professional
              dog training looks like.
            </p>
            <div className="flex gap-4 flex-wrap max-[768px]:flex-col max-[768px]:items-stretch">
              <Link
                href="/evaluation"
                className="btn btn-white btn-lg min-w-[240px] max-[768px]:w-full max-[768px]:justify-center"
              >
                Train with Jas &rarr;
              </Link>
              <Link
                href="/services"
                className="btn btn-outline-white min-w-[240px] max-[768px]:w-full max-[768px]:justify-center"
              >
                View Programs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN BIO ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-center">
            <div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
                The Origin Story
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
                FROM YONKERS<br />TO NETFLIX
              </h2>
              <div className="w-12 h-[3px] bg-blue-500 mb-6" />
              <p className="font-body text-[15px] text-gray-muted leading-[1.8] mb-5">
                Jas Leverette is the star of <em>Canine Intervention</em>,
                streaming worldwide on Netflix. He has appeared on the Ellen
                DeGeneres Show, TMZ, and numerous news and lifestyle shows. He
                was born in New York and grew up in Oakland, California. During
                his youth, he owned and trained dogs and horses, played youth
                football with the Oakland Dynamites, and participated in
                equestrian sports, including jumping, dressage, vaulting, and
                trail riding. At Oakland High School, he played football and was
                an Oakland Athletic League wrestling champion for four years.
              </p>
              <p className="font-body text-[15px] text-gray-muted leading-[1.8]">
                A lifelong animal communicator and dog trainer, Jas got his start
                training equines with natural horse training techniques using
                body language to communicate.
              </p>
            </div>
            <div>
              <figure className="relative rounded-xl overflow-hidden m-0">
                <Image
                  src="/images/cdn/66bd4d94e71424404825b221.webp"
                  width={600}
                  height={329}
                  alt="Jas Leverette, founder of Cali K9\u00ae"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10">
                  <span className="font-ui text-[10px] font-bold tracking-[2px] uppercase text-white/60 block mb-0.5">
                    Founder
                  </span>
                  <span className="font-body text-[13px] text-white/90">
                    Jas Leverette &middot; Cali K9&reg; Founder
                  </span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="bg-off border-t border-b border-black/[0.07] py-10">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 flex items-center justify-between gap-8 flex-wrap max-md:flex-col max-md:items-start">
          <div>
            <h3 className="font-display text-[clamp(22px,3vw,32px)] text-ink leading-none mb-1.5">
              TRAIN WITH THE BEST.
            </h3>
            <p className="font-body text-[15px] text-gray-muted leading-relaxed">
              15+ years. 3,500+ dogs. The same method Jas uses with celebrities
              &mdash; available to you.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap max-md:w-full">
            <Link
              href="/services"
              className="btn btn-blue"
            >
              View Programs &rarr;
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ── EXTENDED BIO (DARK) ── */}
      <section className="relative py-20 max-md:py-12 max-[480px]:py-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.25] saturate-[0.6]"
          style={{ backgroundImage: "url('/images/cdn/66ba96f4672d6ff2d322f57a.webp')" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="max-w-[760px]">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-white/40 block mb-3">
              The Method
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-white mb-4">
              15 YEARS.<br />ZERO UNSOLVABLE DOGS.
            </h2>
            <div className="w-12 h-[3px] bg-white/30 mb-6" />
            <p className="font-body text-base text-white/80 leading-[1.85] mb-5">
              He has trained dogs and horses his entire life and has many years
              of animal training and pet wellness experience. This includes
              training dozens of dog trainers and hundreds of family pet dogs,
              sport dogs, service dogs, and working law enforcement K9s.
            </p>
            <p className="font-body text-base text-white/80 leading-[1.85] mb-5">
              Jas has a passion for his work and can recognize drive,
              temperament, and disposition in all breeds. He possesses the
              know-how to optimize a dog&apos;s true potential, and the skill to
              temper and train even the most difficult dog.
            </p>
            <p className="font-body text-base text-white/80 leading-[1.85]">
              Jas is married to Nouhaila Leverette, they have a son, Jasir and a
              daughter, Nailah. His personal dogs include Dutch shepherds,
              Belgian Malinois, and a bully.
            </p>
            <div className="mt-12 pt-10 border-t border-white/[0.12] text-center">
              <p className="font-body text-[clamp(20px,3vw,32px)] italic font-light text-white leading-[1.5] mb-4">
                &ldquo;There are no bad dogs...<br />Just uninformed
                owners.&rdquo;
              </p>
              <cite className="font-ui text-[13px] font-bold tracking-[3px] uppercase text-[#8A97C4] not-italic">
                &mdash; Jas Leverette
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY STATS ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              By The Numbers
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              WHAT 15 YEARS OF<br />REFUSING TO QUIT LOOKS LIKE
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl border border-black/[0.06] p-8 text-center"
              >
                <div className="font-display text-[48px] text-blue-500 leading-none mb-2">
                  {s.num}
                </div>
                <div className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-600 mb-2">
                  {s.label}
                </div>
                <p className="font-body text-[14px] text-gray-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS & RECOGNITION ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-gradient-to-br from-[#060D24] to-[#0D1640]">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-14">
            <span className="font-ui text-[18px] font-bold tracking-[4px] uppercase text-blue-400 block mb-3">
              Credentials &amp; Recognition
            </span>
            <div className="w-12 h-[3px] bg-white/20 mx-auto" />
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12">
            {/* Dog Sport */}
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7DA0FF" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-400 block mb-3">
                Competitive Dog Sports
              </span>
              <h2 className="font-display text-[clamp(36px,4vw,52px)] text-white leading-none mb-5">
                DOG SPORT<br />TRAINER
              </h2>
              <div className="w-10 h-[2px] bg-blue-500 mb-6" />
              <p className="font-body text-[15px] text-white/70 leading-[1.85] mb-8">
                Certified in Schutzhund (IPO) and PSA decoy work. Jas trains
                protection dogs at the highest level &mdash; stamina, agility,
                temperament, and handler loyalty. He competes at regional,
                national, and international events and collaborates directly with
                law enforcement K9 units.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Schutzhund / IPO", "PSA Decoy", "Law Enforcement K9", "International Competitor"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-white/[0.06] border border-white/10 rounded px-3 py-1.5 font-ui text-[11px] font-bold tracking-[1.5px] uppercase text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Awards */}
            <div>
              <div className="w-14 h-14 rounded-xl bg-[rgba(26,63,171,0.5)] border border-[rgba(106,159,255,0.4)] flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7DA0FF" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-400 block mb-3">
                Awards &amp; Recognition
              </span>
              <h2 className="font-display text-[clamp(36px,4vw,52px)] text-white leading-none mb-5">
                BEST OF<br />SILICON VALLEY
              </h2>
              <div className="w-10 h-[2px] bg-blue-400 mb-6" />
              <p className="font-body text-[15px] text-white/70 leading-[1.85] mb-8">
                Voted Best Dog Trainer by Metro Silicon Valley&apos;s readers
                &mdash; a title Jas has held since 2012. Serving the Bay Area,
                Los Angeles, Miami, New York, and online, the Cali K9&reg;
                5-Pillar Method is recognized as the standard for professional
                dog training in the region.
              </p>
              <div className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-lg p-5">
                <div className="font-display text-[48px] text-blue-400 leading-none flex-shrink-0">
                  &#9733;
                </div>
                <div>
                  <div className="font-ui text-xs font-bold tracking-[3px] uppercase text-white/50 mb-1">
                    Metro Silicon Valley
                  </div>
                  <div className="font-ui text-[15px] font-bold text-white">
                    Best Dog Trainer &mdash; Every Year Since 2012
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NETFLIX FEATURE ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-center">
            <div>
              <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-[#E50914] block mb-3">
                As Seen On Netflix
              </span>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
                CANINE<br />INTERVENTION
              </h2>
              <div className="w-12 h-[3px] bg-blue-500 mb-6" />
              <p className="font-body text-[15px] text-gray-muted leading-[1.8] mb-4">
                In 2021, Netflix released <em>Canine Intervention</em> &mdash; a
                Top 10 documentary series hosted and executive produced by Jas
                Leverette. The show brought Jas&apos;s unique training philosophy
                to a global audience, showcasing his ability to transform dogs
                with even the most severe behavioral challenges.
              </p>
              <p className="font-body text-[15px] text-gray-muted leading-[1.8] mb-6">
                The series gave viewers a front-row seat to the Cali K9&reg;
                method in action &mdash; real dogs, real families, real results.
                No gimmicks. No shortcuts.
              </p>
              <div className="inline-flex items-center gap-2.5 bg-[rgba(229,9,20,0.08)] border border-[rgba(229,9,20,0.3)] rounded px-[18px] py-2.5">
                <span className="font-display text-[22px] text-[#E50914] leading-none">
                  N
                </span>
                <span className="font-ui text-xs font-bold tracking-[2px] uppercase text-gray-600">
                  Canine Intervention &mdash; Top 10 Series
                </span>
              </div>
            </div>
            <div>
              <figure className="relative rounded-xl overflow-hidden m-0">
                <Image
                  src="/images/cdn/65cc916cfe137aaa640243f8.webp"
                  width={1200}
                  height={675}
                  alt="Canine Intervention \u2014 Netflix documentary series hosted by Jas Leverette"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10">
                  <span className="font-ui text-[10px] font-bold tracking-[2px] uppercase text-white/60 block mb-0.5">
                    Netflix Original
                  </span>
                  <span className="font-body text-[13px] text-white/90">
                    Canine Intervention &mdash; Now Streaming on Netflix
                  </span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRESS FEATURES ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-off">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-12">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              Media Coverage
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              AS FEATURED IN
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>
          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6">
            {PRESS.map((p) => (
              <article
                key={p.pub + p.headline}
                className="bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <Image
                  src={p.image}
                  width={640}
                  height={360}
                  alt={`${p.pub} article about Jas Leverette`}
                  className="w-full aspect-video object-cover block"
                />
                <div className="p-5 pb-6">
                  <p className="font-ui text-base font-bold tracking-[3px] uppercase text-blue-500 mb-2">
                    {p.pub}
                  </p>
                  <p className="font-body text-[14px] font-semibold text-ink leading-[1.5] mb-4">
                    {p.headline}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-blue btn-sm"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CELEBRITY CLIENTELE ── */}
      <section className="py-20 max-md:py-12 max-[480px]:py-8">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
              Trusted By The Best
            </span>
            <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
              HIS CLIENTELE INCLUDES
            </h2>
            <div className="w-12 h-[3px] bg-blue-500 mx-auto" />
          </div>
          <CelebGrid />
        </div>
      </section>

      {/* ── MID CTA ── */}
      <CtaBlock
        eyebrow="Trusted By The Best \u2014 Now Available To You"
        heading="STEPHEN CURRY\u2019S TRAINER. YOUR DOG\u2019S TRAINER."
        description="The same methodology trusted by NBA champions, Grammy winners, and Hollywood stars is available to everyday dog owners. Your transformation starts today."
        primaryCta={{ label: "Explore All Programs \u2192", href: "/services" }}
        secondaryCta={{ label: "Start Online", href: "/online-training" }}
        dark
      />

      {/* ── SOCIAL MEDIA ── */}
      <section className="bg-off border-t border-black/[0.06] py-16 text-center">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <span className="font-ui text-[15px] font-bold tracking-[4px] uppercase text-blue-500 block mb-3">
            Stay Connected
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-4">
            LET&apos;S CONNECT<br />ON SOCIAL MEDIA
          </h2>
          <div className="w-12 h-[3px] bg-blue-500 mx-auto mb-8" />
          <div className="flex gap-5 justify-center flex-wrap">
            <a
              href="https://facebook.com/CaliK9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded font-ui text-xs font-bold tracking-[2px] uppercase text-gray-600 no-underline hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/calik9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded font-ui text-xs font-bold tracking-[2px] uppercase text-gray-600 no-underline hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Instagram
            </a>
            <a
              href="https://x.com/calik9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded font-ui text-xs font-bold tracking-[2px] uppercase text-gray-600 no-underline hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l16 16M20 4L4 20"/></svg>
              Twitter / X
            </a>
            <a
              href="https://www.linkedin.com/company/california-canine-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded font-ui text-xs font-bold tracking-[2px] uppercase text-gray-600 no-underline hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/c/calik9dogtraining"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded font-ui text-xs font-bold tracking-[2px] uppercase text-gray-600 no-underline hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.29 29 29 0 0 0-.46-5.43z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48 9.75,15.02"/></svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
