import Link from "next/link";

export interface Testimonial {
  initials: string;
  name: string;
  meta: string;
  quote: string;
  result: string;
}

interface Props {
  eyebrow?: string;
  heading?: string;
  testimonials: Testimonial[];
  theme?: "light" | "dark";
  ctaHref?: string;
  ctaLabel?: string;
}

function Stars({ dark }: { dark?: boolean }) {
  return (
    <div
      className="flex gap-[3px]"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#F59E0B] text-sm leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function TestimonialSection({
  eyebrow = "Real Transformations",
  heading = "WHAT 10,000+ DOG OWNERS ARE SAYING",
  testimonials,
  theme = "light",
  ctaHref,
  ctaLabel,
}: Props) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 max-md:py-12 max-[480px]:py-8 relative overflow-hidden ${
        isDark ? "" : "bg-cream"
      }`}
      style={
        isDark
          ? {
              background:
                "linear-gradient(135deg, #0A1A5C 0%, #122E85 50%, #1A3FAB 100%)",
            }
          : undefined
      }
    >
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      )}
      <div className="max-w-[1140px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
        <div className="text-center mb-12">
          <span
            className={`font-ui text-[15px] font-semibold tracking-[4px] uppercase block mb-3 ${
              isDark ? "text-blue-400 opacity-60" : "text-blue-500"
            }`}
          >
            {eyebrow}
          </span>
          <h2
            className={`font-display text-[clamp(36px,4.5vw,52px)] leading-[0.93] mb-4 ${
              isDark ? "text-white" : "text-ink"
            }`}
          >
            {heading}
          </h2>
          <div
            className={`w-12 h-[3px] mx-auto ${
              isDark ? "bg-blue-400" : "bg-blue-500"
            }`}
          />
        </div>

        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className={`rounded-xl p-8 card-hover flex flex-col ${
                isDark
                  ? "bg-white/[0.06] border border-white/[0.12]"
                  : "bg-white border border-border"
              }`}
            >
              <Stars dark={isDark} />
              <p
                className={`font-body text-[15px] leading-relaxed mb-5 mt-3 italic flex-1 ${
                  isDark ? "text-white/70" : "text-ink/80"
                }`}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-sm shrink-0 ${
                    isDark
                      ? "bg-white/[0.12] text-white"
                      : "bg-blue-50 text-blue-500"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <cite
                    className={`font-ui text-sm font-bold not-italic block ${
                      isDark ? "text-white" : "text-ink"
                    }`}
                  >
                    {t.name}
                  </cite>
                  <span
                    className={`font-ui text-xs ${
                      isDark ? "text-blue-400" : "text-gray-muted"
                    }`}
                  >
                    {t.meta}
                  </span>
                </div>
              </div>
              <div className="font-ui text-xs font-bold tracking-[1px] uppercase text-green-500 bg-green-500/10 rounded-sm px-3 py-1.5 inline-block">
                &#10003; {t.result}
              </div>
            </div>
          ))}
        </div>

        {ctaHref && ctaLabel && (
          <div className="text-center mt-9">
            <Link
              href={ctaHref}
              className={`btn ${isDark ? "btn-outline-white" : "btn-outline"}`}
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
