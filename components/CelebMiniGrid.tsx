import Image from "next/image";

interface CelebMiniGridProps {
  celebs: { name: string; image: string }[];
}

export default function CelebMiniGrid({ celebs }: CelebMiniGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-[600px] max-[480px]:grid-cols-2 max-[480px]:gap-3">
      {celebs.map((celeb) => (
        <div key={celeb.name} className="text-center">
          <Image
            src={celeb.image}
            alt={celeb.name}
            width={150}
            height={150}
            className="w-full aspect-square object-cover object-top rounded-lg h-auto"
          />
          <span className="block font-ui text-xs font-bold tracking-[1px] uppercase text-white/50 mt-2">
            {celeb.name}
          </span>
        </div>
      ))}
    </div>
  );
}
