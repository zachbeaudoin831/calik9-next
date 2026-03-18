import Link from "next/link";

export const metadata = {
  title: "About Jas Leverette — Founder of Cali K9",
  description: "Born in Yonkers, raised in Oakland, built worldwide. The origin story of Jas Leverette — host of Netflix's Canine Intervention and founder of Cali K9.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-dark" style={{gridTemplateColumns:"1fr 1fr"}}>
        <div className="hero-orb" />
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="nfx-badge">
              <span className="nn">N</span>
              <span>Canine Intervention</span>
            </div>
            <span className="hero-tag-lt">Founder & Head Trainer</span>
          </div>
          <h1 className="hdg-hero fu d1">
            JAS<br />
            <em>LEVERETTE</em>
          </h1>
          <p className="hero-sub fu d2">
            Born in Yonkers. Raised in Oakland. Built worldwide.
            From the streets to Netflix, Jas Leverette is redefining what professional
            dog training looks like.
          </p>
          <div className="hero-ctas fu d3">
            <a href="https://calendly.com/calik9" target="_blank" rel="noopener noreferrer" className="btn btn-blue btn-blue-lg">
              Train with Jas
            </a>
            <Link href="/shop" className="btn btn-outline-white">Shop Gear</Link>
          </div>
        </div>
        <div className="hero-right" style={{position:"relative"}}>
          <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#0f2460,#1A3FAB)"}}/>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="sec">
        <div className="wrap-md">
          <div className="grid-2col" style={{gap:"48px",alignItems:"center"}}>
            <div>
              <span className="tag">The Origin Story</span>
              <h2 className="hdg" style={{marginBottom:"24px"}}>From Oakland to <span className="b">Netflix</span></h2>
              <div className="div"/>
              <p style={{fontSize:"16px",lineHeight:"1.8",color:"var(--gd)",marginBottom:"20px"}}>
                Jas Leverette grew up navigating the streets of Oakland, California — a city that taught him discipline, loyalty, and the value of trust. It was there he discovered his gift: an innate ability to communicate with dogs in a language they understood.
              </p>
              <p style={{fontSize:"16px",lineHeight:"1.8",color:"var(--gd)",marginBottom:"20px"}}>
                What began as a passion became a profession, and what became a profession became a movement. Jas founded Cali K9® in 2005 with one mission: to build real relationships between dogs and their owners, grounded in structure, love, and accountability.
              </p>
              <p style={{fontSize:"16px",lineHeight:"1.8",color:"var(--gd)"}}>
                Today, Cali K9® has trained over 5,000 dogs, earned a Netflix feature on <em>Canine Intervention</em>, and built a reputation as one of the most trusted names in professional dog training.
              </p>
            </div>
            <div style={{background:"var(--cr)",borderRadius:"var(--radius-lg)",aspectRatio:"3/4",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"48px",color:"var(--bm)"}}>JAS</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="sec" style={{background:"var(--bd)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(45deg,rgba(255,255,255,.025) 0,rgba(255,255,255,.025) 1px,transparent 1px,transparent 40px)"}}/>
        <div className="wrap-md" style={{position:"relative",zIndex:2}}>
          <div className="sec-hd" style={{maxWidth:"800px"}}>
            <span className="tag" style={{background:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.2)",color:"rgba(255,255,255,.7)"}}>Philosophy</span>
            <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(40px,5.5vw,72px)",lineHeight:.95,color:"#fff",marginBottom:"24px"}}>
              Training Built on <span style={{color:"#7DAAFF"}}>Trust</span>
            </h2>
            <div style={{width:"48px",height:"3px",background:"var(--blue)",borderRadius:"2px",margin:"18px auto"}}/>
            <p style={{fontSize:"17px",fontWeight:300,color:"rgba(255,255,255,.75)",lineHeight:1.75}}>
              Jas believes that every behavior problem is a communication problem.
              The dog isn&apos;t bad — the relationship is broken. Our job is to fix the relationship.
            </p>
          </div>

          <div className="grid-3col" style={{gap:"24px",marginTop:"48px"}}>
            {[
              {icon:"🎯",title:"Structure",desc:"Dogs thrive with clear boundaries and consistent rules. Structure is love expressed in a language dogs understand."},
              {icon:"❤️",title:"Relationship",desc:"Every command, every correction, every reward builds or breaks the bond. We build bonds that last a lifetime."},
              {icon:"📈",title:"Results",desc:"We don't train for the session — we train for your life together. Real results that stick in the real world."},
            ].map((p) => (
              <div key={p.title} style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.15)",borderRadius:"var(--radius)",padding:"32px",backdropFilter:"blur(4px)"}}>
                <div style={{fontSize:"36px",marginBottom:"16px"}}>{p.icon}</div>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"28px",color:"#fff",marginBottom:"12px"}}>{p.title}</h3>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.6)",lineHeight:1.7}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="sec">
        <div className="wrap">
          <div className="grid-2col" style={{gap:"48px",alignItems:"center"}}>
            <div>
              <span className="tag">Credentials</span>
              <h2 className="hdg" style={{marginBottom:"24px"}}>Why Families <span className="b">Trust Us</span></h2>
              <div className="div"/>
              <div style={{display:"flex",flexDirection:"column",gap:"16px",marginTop:"24px"}}>
                {[
                  "18+ years of professional dog training experience",
                  "Featured on Netflix's Canine Intervention",
                  "Over 5,000 dogs trained across all breeds",
                  "Specializes in aggression, reactivity, and obedience",
                  "Trusted by law enforcement, athletes, and families",
                  "Oakland-based with clients nationwide",
                ].map((c) => (
                  <div key={c} style={{display:"flex",alignItems:"flex-start",gap:"12px",padding:"14px 0",borderBottom:"1px solid var(--bo)"}}>
                    <span style={{color:"var(--blue)",fontWeight:700,flexShrink:0}}>→</span>
                    <span style={{fontSize:"15px",color:"var(--gd)"}}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              {[["5000+","Dogs Trained"],["18+","Years Experience"],["Netflix","Featured Show"],["100%","Dedication"]].map(([n,l]) => (
                <div key={l} className="card" style={{padding:"28px",display:"flex",alignItems:"center",gap:"24px"}}>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"52px",color:"var(--blue)",lineHeight:1,flexShrink:0}}>{n}</div>
                  <div style={{fontFamily:"var(--font-cond)",fontSize:"14px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"var(--gd)"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>START YOUR <span>JOURNEY</span></h2>
          <p>Book a consultation with Jas and discover what&apos;s possible when training meets trust.</p>
          <div className="cta-btns">
            <a href="https://calendly.com/calik9" target="_blank" rel="noopener noreferrer" className="btn btn-white">
              Book with Jas
            </a>
            <Link href="/shop" className="btn btn-outline-white">Shop Gear</Link>
          </div>
        </div>
      </section>
    </>
  );
}
