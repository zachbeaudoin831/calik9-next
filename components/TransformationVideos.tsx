import { posterFor } from "@/lib/video-poster";
import { MEMBER_VIDEOS, TRANSFORMATION_VIDEOS } from "@/lib/member-videos";

// Two rows of member videos for the evaluation pages' "Real Transformations"
// section: the three before → after clips (labelled), then three owner
// testimonials. Same videos and styling as /academy.
function Video({ src }: { src: string }) {
  return (
    <video poster={posterFor(src)} className="w-full rounded-xl bg-black shadow-md" controls playsInline preload="metadata">
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function TransformationVideos() {
  return (
    <div className="mb-12 max-md:mb-10">
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 mb-10">
        {TRANSFORMATION_VIDEOS.map((v) => (
          <div key={v.name} className="flex flex-col">
            <Video src={v.src} />
            <div className="font-ui text-[12px] font-bold tracking-[1.5px] uppercase text-blue-500 mt-4">{v.label}</div>
            <div className="font-ui text-sm font-bold text-ink mt-1">{v.name}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {MEMBER_VIDEOS.map((v) => (
          <div key={v.name}>
            <Video src={v.src} />
            <div className="font-ui text-sm font-bold tracking-[1px] uppercase text-ink mt-3 text-center">{v.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
