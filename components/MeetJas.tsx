import Image from "next/image";

const PHOTOS = [
  { src: "/images/jas/family.webp", alt: "Jas Leverette with his wife, two kids and his dog", caption: "With his family", position: "center 62%" },
  { src: "/images/jas/kid-with-dog.webp", alt: "Jas Leverette as a kid with his dog", caption: "Jas as a kid", position: "center 40%" },
  { src: "/images/jas/with-his-dogs.webp", alt: "Jas Leverette with four of his own dogs", caption: "With his own dogs", position: "center 38%" },
  { src: "/images/jas/horses.webp", alt: "Young Jas Leverette with two horses sniffing his hair", caption: "Always an animal lover", position: "center 30%" },
];

export default function MeetJas() {
  return (
    <section className="py-20 max-md:py-12 max-[480px]:py-8 bg-cream">
      <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 grid grid-cols-[1fr_1fr] gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
        <div>
          <span className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 block mb-3">
            Meet Your Trainer
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] text-ink mb-5">
            MEET JAS LEVERETTE
          </h2>
          <div className="w-12 h-[3px] bg-blue-500 mb-6" />
          <p className="font-body text-[17px] text-gray-muted leading-relaxed mb-4">
            Jas is the founder of Cali K9&reg; and the trainer behind Netflix&rsquo;s
            Canine Intervention, where he helps families turn chaotic dogs into calm,
            confident companions.
          </p>
          <p className="font-body text-[17px] text-gray-muted leading-relaxed mb-7">
            Long before the show, he was the kid who couldn&rsquo;t stay away from
            animals. Today he&rsquo;s a family man with dogs of his own, and he brings
            that same patience and care to every dog and owner he works with.
          </p>
          <figure className="relative max-w-[560px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/jas/canine-intervention.webp"
              alt="Jas Leverette in Netflix's Canine Intervention"
              width={560}
              height={314}
              className="w-full h-auto block"
            />
            <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-black/80 rounded-md px-3 py-1.5">
              <Image src="/images/netflix-wordmark.png" alt="Netflix" width={547} height={153} className="h-[13px] w-auto" />
              <span className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-white">Canine Intervention</span>
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[480px]:gap-3">
          {PHOTOS.map((photo) => (
            <figure key={photo.src} className="relative rounded-xl overflow-hidden aspect-square bg-black/5 shadow-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 900px) 50vw, 280px"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 p-3 pt-10"
                style={{ background: "linear-gradient(0deg, rgba(13,29,48,0.85) 0%, transparent 100%)" }}
              >
                <span className="font-display text-[18px] max-[480px]:text-[15px] text-white tracking-[0.5px] leading-none">
                  {photo.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
