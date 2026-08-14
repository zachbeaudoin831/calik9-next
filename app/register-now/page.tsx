import type { Metadata } from "next";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { CELEBS } from "@/components/CelebGrid";

export const metadata: Metadata = {
  title: "Free Live Dog Training Class",
  description:
    "Free live training class with Jas Leverette, host of Netflix's Canine Intervention: take your dog from aggressive & reactive to calm & relaxed with the 15-minute training method.",
  // Draft ad-campaign registration lander — keep out of search while in review.
  robots: { index: false, follow: false },
};

const LEARN = [
  {
    icon: "⏱️",
    title: "EFFICIENT TRAINING",
    desc: "How to transform your dog's behavior with just 15 minutes of focused training a day — no marathon sessions required.",
  },
  {
    icon: "🧩",
    title: "REAL-TIME PROBLEM-SOLVING",
    desc: "Live answers to the everyday challenges you're actually facing — barking, lunging, pulling, door manners, and more.",
  },
  {
    icon: "🐕",
    title: "SOCIALIZATION SKILLS",
    desc: "How to build calm, confident interactions with other dogs and people — without the chaos.",
  },
  {
    icon: "🎯",
    title: "BEHAVIOR MANAGEMENT",
    desc: "The management techniques Cali K9 trainers use to stop bad habits from rehearsing while the real training takes hold.",
  },
  {
    icon: "📉",
    title: "REDUCE REACTIVITY",
    desc: "How to read your dog's body language and catch reactivity before it explodes — the skill that changes everything.",
  },
];

const TESTIMONIALS = [
  {
    initials: "MT",
    name: "Marcus T.",
    meta: "Zeus — German Shepherd · Aggression",
    quote:
      "“Before Cali K9, Zeus was lunging at every dog on the street. After board and train, he walks by my side like a completely different dog.”",
    result: "Now walks calmly past other dogs",
  },
  {
    initials: "JL",
    name: "Jennifer L.",
    meta: "Luna — Pit Bull Rescue · Fear Aggression",
    quote:
      "“We were considering rehoming our rescue. Two weeks in board and train and she came back calm, focused, and loving. I’m emotional typing this.”",
    result: "Calm, focused & thriving",
  },
  {
    initials: "PK",
    name: "Priya K.",
    meta: "Mochi — Shiba Inu · Reactivity",
    quote:
      "“I tried three trainers before Jas. The online course alone solved problems others couldn’t fix in person. The 5-Pillar system just makes sense.”",
    result: "Reactivity eliminated — fixed what 3 trainers couldn’t",
  },
];

const MEDIA_LOGOS = [
  { src: "/images/media-logos/netflix.webp", alt: "Netflix" },
  { src: "/images/media-logos/nbc.webp", alt: "NBC" },
  { src: "/images/media-logos/abc.webp", alt: "ABC" },
  { src: "/images/media-logos/ellen-show.webp", alt: "The Ellen Show" },
  { src: "/images/media-logos/dr-phil.webp", alt: "Dr. Phil" },
  { src: "/images/media-logos/people-magazine.webp", alt: "People Magazine" },
];

function RegisterCta({ className = "" }: { className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <a
        href="https://go.calik9.com/register-now"
        className="btn btn-white btn-lg text-center max-md:w-full"
      >
        Register For Free &rarr;
      </a>
      <p className="font-ui text-xs tracking-[1.5px] uppercase text-white/40 mt-4">
        Free &middot; Live on Zoom &middot; Only 100 Spots Per Time Slot
      </p>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex justify-center gap-[3px] mb-3" role="img" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#F59E0B] text-base leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function RegisterNowPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[108px] pb-14 max-md:pt-[96px] max-md:pb-10"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center relative z-[1]">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 font-ui text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6">
            Free Live Training Class
          </span>

          <h1 className="font-display text-[clamp(40px,5.5vw,68px)] text-white leading-[0.95] mb-5">
            TAKE YOUR DOG FROM{" "}
            <span className="text-red-500">AGGRESSIVE &amp; REACTIVE</span> TO{" "}
            <span className="text-[#6A9FFF]">CALM &amp; RELAXED</span>
          </h1>

          <p className="font-body text-xl text-white/75 leading-relaxed mb-7 max-w-[560px] mx-auto">
            With the <strong className="text-white">15-minute training
            method</strong> from Jas Leverette — celebrity trainer and host of
            Netflix&rsquo;s <em>Canine Intervention</em>.
          </p>

          {/* Host row */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <Image
              src="/images/jas-headshot.jpg"
              alt="Jas Leverette"
              width={120}
              height={120}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
            />
            <div className="text-left">
              <div className="font-ui text-sm font-bold tracking-[1px] uppercase text-white">
                Hosted Live by Jas Leverette
              </div>
              <div className="font-ui text-xs tracking-[1px] uppercase text-white/50">
                Founder of Cali K9&reg; &middot; 10,000+ Dogs Trained
              </div>
            </div>
          </div>

          {/* When */}
          <div className="inline-flex items-center gap-3 bg-white/[0.08] border border-white/[0.18] rounded-xl px-6 py-3.5 mb-8">
            <span className="text-2xl">🗓️</span>
            <span className="font-ui text-base font-bold tracking-[1px] uppercase text-white">
              Wednesday &middot; 6PM PST / 9PM EST
            </span>
          </div>

          <RegisterCta />
        </div>
      </section>

      {/* ── What you'll learn ── */}
      <section className="py-16 max-md:py-10 bg-cream">
        <div className="max-w-[860px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-10">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              In This Free Class
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink">
              WHAT YOU&rsquo;LL LEARN
            </h2>
          </div>

          <div className="space-y-4">
            {LEARN.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 items-start bg-white border border-black/[0.06] rounded-xl p-6 max-[480px]:p-5"
              >
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-display text-xl text-ink mb-1.5">{item.title}</h3>
                  <p className="font-body text-[15px] text-gray-muted leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-base text-gray-muted text-center mt-8 italic">
            Not sure if this is for you? Come along — you&rsquo;ll find out in
            the first 7 minutes.
          </p>
        </div>
      </section>

      {/* ── As seen on ── */}
      <section className="bg-ink py-12">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 text-center">
          <p className="font-ui text-[13px] font-semibold tracking-[3px] uppercase text-white/50 mb-8">
            As Seen On
          </p>
          <div className="flex items-center justify-center gap-x-12 gap-y-6 flex-wrap">
            {MEDIA_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={64}
                className="h-12 max-md:h-9 w-auto opacity-80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Client reviews carousel ── */}
      <section className="py-14 max-md:py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Real Transformations
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink">
              THEIR DOGS WERE REACTIVE TOO
            </h2>
          </div>

          <Carousel
            ariaLabel="Client reviews"
            desktopPerView={3}
            slides={TESTIMONIALS.map((t) => (
              <div
                key={t.initials}
                className="bg-cream border border-black/[0.05] rounded-xl p-8 max-[480px]:p-6 text-center h-full"
              >
                <Stars />
                <p className="font-body text-base text-ink/80 italic leading-relaxed mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-display text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <cite className="font-ui text-sm font-bold not-italic block text-ink">
                      {t.name}
                    </cite>
                    <span className="font-ui text-xs text-gray-muted">{t.meta}</span>
                  </div>
                </div>
                <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block">
                  &#10003; {t.result}
                </div>
              </div>
            ))}
          />
        </div>
      </section>

      {/* ── Celebrity carousel ── */}
      <section className="py-14 max-md:py-10 bg-cream">
        <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4">
          <div className="text-center mb-8">
            <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
              Trusted By The Best
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,44px)] leading-[0.93] text-ink max-w-[800px] mx-auto">
              THE TRAINER CELEBRITIES &amp; LAW ENFORCEMENT RELY ON
            </h2>
          </div>

          <Carousel
            ariaLabel="Celebrity testimonials"
            desktopPerView={3}
            slides={CELEBS.map((celeb) => (
              <article
                key={celeb.name}
                className="relative rounded-xl overflow-hidden aspect-square max-w-[440px] mx-auto"
                aria-label={`${celeb.name} testimonial`}
              >
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: celeb.objectPosition || "center top" }}
                  sizes="(max-width: 540px) 90vw, 370px"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end text-center p-[22px_20px]"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,10,30,0.96) 0%, rgba(5,10,30,0.75) 35%, rgba(5,10,30,0.15) 65%, transparent 100%)",
                  }}
                >
                  <div className="flex justify-center gap-0.5 mb-2" role="img" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#F59E0B] text-xs leading-none">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-[13px] italic font-light text-white/85 leading-normal mb-3.5">
                    {celeb.quote}
                  </p>
                  <div className="font-display text-xl text-white leading-none tracking-[0.5px] mb-1">
                    {celeb.name}
                  </div>
                  <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/50">
                    {celeb.meta}
                  </div>
                </div>
              </article>
            ))}
          />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-16 max-md:py-10 text-center"
        style={{ background: "linear-gradient(135deg, #0A1F3C 0%, #122E85 55%, #1A3FAB 100%)" }}
      >
        <div className="max-w-[640px] mx-auto px-6">
          <h2 className="font-display text-[clamp(34px,4.5vw,48px)] leading-[0.93] text-white mb-4">
            YOUR DOG CAN CHANGE. IT STARTS WEDNESDAY.
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-8">
            One free class. 15 minutes a day. The same method behind 10,000+
            transformed dogs — live with Jas Leverette.
          </p>
          <RegisterCta />
        </div>
      </section>
    </main>
  );
}
