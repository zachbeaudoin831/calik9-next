import Image from "next/image";

const CELEBS = [
  {
    name: "STEPHEN CURRY",
    meta: "NBA Champion \u00b7 Golden State Warriors",
    quote: "\u201CJas took care of my boys. He got them straight. They listen to me now. They got the best dog trainer right here.\u201D",
    image: "/images/celebs/steph-curry.png",
  },
  {
    name: "KEVIN HART",
    meta: "Actor & Comedian",
    quote: "\u201CJas is the real deal. He doesn\u2019t just train dogs \u2014 he transforms them. My dog is a completely different animal now.\u201D",
    image: "/images/celebs/kevin-hart.png",
  },
  {
    name: "KENDRICK LAMAR",
    meta: "Grammy Winner \u00b7 Recording Artist",
    quote: "\u201CWorld-class training. Cali K9 is the standard.\u201D",
    image: "/images/celebs/kendrick-lamar.jpeg",
  },
  {
    name: "DR. PHIL",
    meta: "Television Host & Author",
    quote: "\u201CThe results were immediate and lasting. Jas has a true gift.\u201D",
    image: "/images/celebs/dr-phil.png",
  },
  {
    name: "DEMI MOORE",
    meta: "Actress & Producer",
    quote: "\u201CJas brought peace back to our home. Incredible trainer and person.\u201D",
    image: "/images/celebs/demi-moore.png",
  },
  {
    name: "JASON DERULO",
    meta: "Singer & Performer",
    quote: "\u201CTop tier. Jas knows dogs on a level I\u2019ve never seen.\u201D",
    image: "/images/celebs/jason-derulo.png",
  },
  {
    name: "COI LERAY",
    meta: "Singer & Rapper",
    quote: "\u201CMy dog is so well behaved now. Cali K9 is the best.\u201D",
    image: "/images/celebs/coi-leray.png",
  },
  {
    name: "SAN JOSE POLICE",
    meta: "Law Enforcement \u00b7 San Jose, CA",
    quote: "\u201CProfessional, thorough, and effective. We trust Cali K9 with our working dogs.\u201D",
    image: "/images/celebs/san-jose-pd.png",
    objectPosition: "center center",
  },
  {
    name: "TURKS & CAICOS MILITARY",
    meta: "Military \u00b7 International",
    quote: "\u201CCali K9\u2019s system works at the highest levels of working dog training worldwide.\u201D",
    image: "/images/celebs/turks-caicos-military.png",
    objectPosition: "center center",
  },
];

export default function CelebGrid() {
  return (
    <section className="py-20 max-md:py-12 max-[480px]:py-8 px-10 max-md:px-6 max-[480px]:px-4">
      <div className="max-w-[1140px] mx-auto">
        <p className="font-ui text-[15px] font-semibold tracking-[4px] uppercase text-blue-500 text-center mb-3">
          Trusted By The Best
        </p>
        <h2 className="font-display text-[clamp(28px,4vw,44px)] text-ink text-center max-w-[800px] mx-auto mb-12 leading-[1.1]">
          FROM HOLLYWOOD TO THE FRONT LINES — SEE WHY CELEBRITIES, MILITARY UNITS, LAW ENFORCEMENT AND EVERYDAY PEOPLE RELY ON OUR PROGRAM.
        </h2>

        <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-2 max-[480px]:gap-3">
          {CELEBS.map((celeb) => (
            <article
              key={celeb.name}
              className="group relative rounded-xl overflow-hidden aspect-square cursor-default card-hover"
              aria-label={`${celeb.name} testimonial`}
            >
              <Image
                src={celeb.image}
                alt={celeb.name}
                fill
                className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                style={{ objectPosition: celeb.objectPosition || "center top" }}
                sizes="(max-width: 540px) 50vw, (max-width: 900px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end text-center p-[22px_20px]" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.96) 0%, rgba(5,10,30,0.75) 35%, rgba(5,10,30,0.15) 65%, transparent 100%)" }}>
                <div className="flex justify-center gap-0.5 mb-2" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xs leading-none">&#9733;</span>
                  ))}
                </div>
                <p className="font-body text-[13px] italic font-light text-white/85 leading-normal mb-3.5 line-clamp-3 max-[480px]:line-clamp-2 max-[480px]:text-xs">
                  {celeb.quote}
                </p>
                <div className="font-display text-xl text-white leading-none tracking-[0.5px] mb-1 max-[480px]:text-lg">
                  {celeb.name}
                </div>
                <div className="font-ui text-[13px] font-bold tracking-[2px] uppercase text-white/50">
                  {celeb.meta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
