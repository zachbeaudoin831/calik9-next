interface PriceBlockProps {
  value?: string;
  offerLabel?: string;
  price: string;
  note?: string;
}

export default function PriceBlock({ value, offerLabel, price, note }: PriceBlockProps) {
  return (
    <div>
      {value && (
        <div className="font-ui text-base text-white/50 line-through mb-1">{value}</div>
      )}
      {offerLabel && (
        <div className="font-ui text-base font-bold tracking-[2px] uppercase text-green-500 mb-1">
          {offerLabel}
        </div>
      )}
      <div className="font-display text-[clamp(42px,5vw,56px)] text-white leading-none mb-1">
        {price}
      </div>
      {note && (
        <div className="font-ui text-base text-white/50 mb-6">{note}</div>
      )}
    </div>
  );
}
