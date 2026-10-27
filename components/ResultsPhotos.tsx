import Image from "next/image";

// Extra results photos for the evaluation pages' "Real Transformations"
// section, under the videos and the original two photos. Mixed aspect ratios,
// so they flow in two masonry columns instead of a cropped grid.
const PHOTOS = [
  { src: "/images/funnel/results-jas-dutch-shepherd.jpg", w: 1600, h: 900, alt: "Jas Leverette kneeling beside a trained Dutch Shepherd" },
  { src: "/images/funnel/results-jas-street-class.jpg", w: 1067, h: 1600, alt: "Jas Leverette leading a group class with dogs holding a down-stay on the street" },
  { src: "/images/funnel/results-pack-lot.jpg", w: 1500, h: 1125, alt: "Ten trained dogs sitting calmly together in a parking lot" },
  { src: "/images/funnel/results-facility-dogs.jpg", w: 920, h: 915, alt: "Trained dogs holding positions on platforms inside the Cali K9 facility" },
  { src: "/images/funnel/results-group-class-park.jpg", w: 1600, h: 1200, alt: "Owners and their dogs practicing sits together at a Cali K9 group class in the park" },
  { src: "/images/funnel/results-yard-dogs.jpg", w: 924, h: 1227, alt: "Five trained dogs sitting side by side on the grass, focused on their handler" },
];

export default function ResultsPhotos() {
  return (
    <div className="columns-2 gap-6 max-w-[960px] mx-auto mt-6 max-[600px]:columns-1">
      {PHOTOS.map((p) => (
        <Image
          key={p.src}
          src={p.src}
          alt={p.alt}
          width={p.w}
          height={p.h}
          sizes="(max-width: 600px) 100vw, 468px"
          className="w-full h-auto rounded-lg block mb-6 break-inside-avoid"
        />
      ))}
    </div>
  );
}
