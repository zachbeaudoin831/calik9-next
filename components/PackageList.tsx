interface PackageListProps {
  title: string;
  items: (string | { text: string; bold?: boolean })[];
  twoColumn?: boolean;
}

export default function PackageList({ title, items, twoColumn = true }: PackageListProps) {
  return (
    <div className="mb-7">
      <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-4">
        {title}
      </div>
      <ul
        className={`list-none p-0 m-0 grid gap-x-6 ${
          twoColumn ? "grid-cols-2 max-[480px]:grid-cols-1" : "grid-cols-1"
        }`}
      >
        {items.map((item, i) => {
          const text = typeof item === "string" ? item : item.text;
          const bold = typeof item === "object" && item.bold;
          return (
            <li
              key={i}
              className="font-body text-[15px] text-white/70 leading-normal py-1.5 pl-6 relative border-b border-white/[0.06] last:border-b-0"
            >
              <span className="absolute left-0 text-green-500 font-bold text-base">&#10003;</span>
              {bold ? <strong className="text-white">{text}</strong> : text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
