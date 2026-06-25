import { ReactNode } from "react";

interface ServiceHeroProps {
  children: ReactNode;
  sidebar: ReactNode;
  intro?: ReactNode;
}

export default function ServiceHero({ children, sidebar, intro }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #122E85 0%, #122E85 50%, #1A3FAB 100%)" }}>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 -top-[100px] left-[28%] max-md:w-[360px] max-md:h-[360px] max-sm:w-[220px] max-sm:h-[220px] max-[900px]:opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(106,159,255,0.16) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-[480px]:px-4 relative z-[1]">
        <div className="service-hero-grid gap-x-12 items-start pb-20 max-[900px]:gap-y-10 pt-[136px] max-[900px]:pt-[120px] max-[600px]:pt-[140px]">
          <div className="service-hero-left">
            {intro && <div className="service-hero-intro">{intro}</div>}
            <div className="service-hero-body">{children}</div>
          </div>
          <div className="service-hero-sidebar sticky top-[84px] max-[900px]:static">
            {sidebar}
          </div>
        </div>
      </div>
    </section>
  );
}
