import Link from "next/link";
import Image from "next/image";
import AddEvalToCart from "./AddEvalToCart";

export const metadata = {
  title: "Dog Training Evaluation With Cali K9® | Jas Leverette",
  description: "Book a private dog training evaluation with Jas Leverette — host of Netflix's Canine Intervention. Get a custom roadmap for your dog's behavior. Only $27.",
};

const JAS_IMAGE = "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/66a311486dce452f20d2ffcd.png";

const ISSUES = [
  "Dog Aggression","Leash Reactivity & Pulling","Anxiety & Fear","Disobedience","Nipping & Biting",
  "Socialization Problems","Recall Failures","Excessive Barking","Separation Anxiety","Potty Training","Puppy Foundation","Multiple Issues",
];

export default function EvalPage() {
  return (
    <>
      {/* URGENCY BAR */}
      <div className="urgency-bar" style={{marginTop:"72px"}}>
        <div className="urg-inner">
          <p>🔥 <strong>Limited Spots Available</strong> — Evaluations This Week Are Filling Fast</p>
        </div>
      </div>

      {/* HERO */}
      <section style={{background:"var(--bd)",position:"relative",overflow:"hidden",paddingTop:"80px",paddingBottom:"0"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(45deg,rgba(255,255,255,.02) 0,rgba(255,255,255,.02) 1px,transparent 1px,transparent 40px)"}}/>
        <div className="hero-orb"/>
        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <div className="grid-2col" style={{gap:"56px",alignItems:"flex-end"}}>

            {/* Left */}
            <div style={{paddingBottom:"80px"}}>
              <div style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"rgba(229,9,20,.15)",border:"1px solid rgba(229,9,20,.4)",borderRadius:"var(--radius-sm)",padding:"10px 16px",marginBottom:"24px"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"18px",color:"#E50914"}}>N</span>
                <span style={{fontFamily:"var(--font-cond)",fontSize:"12px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.8)"}}>
                  As Seen on Netflix — Canine Intervention
                </span>
              </div>

              <h1 className="hdg-hero" style={{marginBottom:"20px",fontSize:"clamp(52px,7vw,96px)"}}>
                DOG TRAINING<br/>
                <em>EVALUATION</em><br/>
                WITH JAS
              </h1>

              <p style={{fontSize:"17px",fontWeight:300,color:"rgba(255,255,255,.78)",lineHeight:1.75,marginBottom:"32px",maxWidth:"480px"}}>
                One private session with Jas Leverette — owner of Cali K9<span className="reg">®</span> and host of Netflix&apos;s <em>Canine Intervention</em>. He&apos;ll pinpoint the root cause of your dog&apos;s behavior and hand you a clear, custom roadmap to fix it.
              </p>

              <div style={{display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap",marginBottom:"28px"}}>
                <AddEvalToCart />
                <div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"36px",color:"#fff",lineHeight:1}}>$27</div>
                  <div style={{fontFamily:"var(--font-cond)",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.4)"}}>One-Time Fee</div>
                </div>
              </div>

              <div style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
                {["4.9★ Avg Rating","All Breeds Welcome","In-Person or Virtual","Results Guaranteed"].map((t) => (
                  <div key={t} style={{display:"flex",alignItems:"center",gap:"7px",fontFamily:"var(--font-cond)",fontSize:"12px",fontWeight:600,letterSpacing:"1px",color:"rgba(255,255,255,.5)"}}>
                    <span style={{color:"#4ADE80"}}>✓</span> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Jas photo */}
            <div style={{position:"relative",alignSelf:"flex-end"}}>
              <Image
                src={JAS_IMAGE}
                alt="Jas Leverette — Cali K9"
                width={560}
                height={680}
                priority
                style={{width:"100%",height:"auto",objectFit:"cover",objectPosition:"center top",display:"block",filter:"brightness(.75) saturate(.85)"}}
              />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to left, transparent 40%, var(--bd) 100%)"}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, var(--bd) 0%, transparent 30%)"}}/>
            </div>
          </div>
        </div>
      </section>

      {/* ISSUES STRIP */}
      <div style={{background:"var(--gi)",borderTop:"3px solid var(--blue)",padding:"20px 0"}}>
        <div className="wrap">
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap",alignItems:"center"}}>
            <span style={{fontFamily:"var(--font-cond)",fontSize:"11px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginRight:"8px",flexShrink:0}}>
              We handle:
            </span>
            {ISSUES.map((issue) => (
              <span key={issue} style={{fontFamily:"var(--font-cond)",fontSize:"12px",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",color:"rgba(255,255,255,.6)",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.12)",padding:"5px 12px",borderRadius:"var(--radius-sm)"}}>
                {issue}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="proof-strip">
        <div className="wrap">
          <div className="proof-inner">
            {[["5,000+","Dogs Evaluated"],["18+","Years Experience"],["4.9★","Avg Rating"],["Netflix","Featured"],["$27","One Session"]].map(([n,l],i,arr) => (
              <div key={l} style={{display:"contents"}}>
                <div className="pf-stat"><div className="pf-n">{n}</div><div className="pf-l">{l}</div></div>
                {i < arr.length - 1 && <div className="pf-div"/>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT YOU GET */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="tag">What&apos;s Included</span>
            <h2 className="hdg">One Session. <span className="b">Real Answers.</span></h2>
            <div className="div div-c"/>
            <p className="sub">Jas doesn&apos;t guess. In one evaluation he identifies exactly what&apos;s driving your dog&apos;s behavior and gives you the plan to fix it.</p>
          </div>
          <div className="grid-3col" style={{gap:"24px"}}>
            {[
              {icon:"🎯",title:"Root Cause Analysis",desc:"Jas pinpoints the exact trigger behind your dog's behavior — not the symptom, the source."},
              {icon:"🗺️",title:"Custom Training Roadmap",desc:"You leave with a clear, personalized plan tailored to your dog's breed, age, and specific issues."},
              {icon:"⏱️",title:"Honest Timeline",desc:"Real answers on how long it takes, what's realistic, and which program fits your life."},
              {icon:"💡",title:"Take-Home Tips",desc:"Walk away with 3–5 actionable things you can do today that will start changing behavior immediately."},
              {icon:"🤝",title:"Zero Sales Pressure",desc:"If Cali K9 isn't the right fit, Jas will tell you — and point you toward the right solution."},
              {icon:"📍",title:"In-Person or Virtual",desc:"Available in LA, Bay Area, Miami, or via Zoom for clients anywhere in the country."},
            ].map((item) => (
              <div key={item.title} className="card" style={{background:"var(--off)",padding:"32px"}}>
                <div style={{width:"52px",height:"52px",background:"var(--bp)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px",fontSize:"22px"}}>{item.icon}</div>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"24px",color:"var(--gi)",marginBottom:"10px"}}>{item.title}</h3>
                <p style={{fontSize:"14px",color:"var(--gr)",lineHeight:1.7}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" style={{background:"var(--off)"}}>
        <div className="wrap">
          <div className="sec-hd">
            <span className="tag">Process</span>
            <h2 className="hdg">How It <span className="b">Works</span></h2>
            <div className="div div-c"/>
          </div>
          <div className="grid-4col" style={{gap:"24px",position:"relative"}}>
            <div className="step-connector"/>
            {[
              {n:"1",title:"Book Online",desc:"Pay $27 and secure your spot. Takes 60 seconds."},
              {n:"2",title:"We Reach Out",desc:"Our team contacts you within 24 hours to schedule your session."},
              {n:"3",title:"Meet Jas",desc:"Show up with your dog (or hop on Zoom) for your private evaluation."},
              {n:"4",title:"Get Your Plan",desc:"Leave with a custom roadmap and the exact steps to start seeing results."},
            ].map((step) => (
              <div key={step.n} style={{textAlign:"center",padding:"0 16px",position:"relative",zIndex:1}}>
                <div style={{width:"72px",height:"72px",background:"var(--w)",border:"2px solid var(--bm)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontSize:"28px",color:"var(--blue)",margin:"0 auto 20px"}}>
                  {step.n}
                </div>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"22px",color:"var(--gi)",marginBottom:"8px"}}>{step.title}</h3>
                <p style={{fontSize:"13px",color:"var(--gr)",lineHeight:1.6}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT JAS */}
      <section className="sec" style={{background:"var(--bd)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(45deg,rgba(255,255,255,.02) 0,rgba(255,255,255,.02) 1px,transparent 1px,transparent 40px)"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1}}>
          <div className="grid-2col" style={{gap:"56px",alignItems:"center"}}>
            <div style={{background:"rgba(255,255,255,.05)",borderRadius:"var(--radius-lg)",aspectRatio:"3/4",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative"}}>
              <Image
                src={JAS_IMAGE}
                alt="Jas Leverette"
                fill
                style={{objectFit:"cover",objectPosition:"center top",filter:"brightness(.65) saturate(.8)"}}
              />
            </div>
            <div>
              <div style={{background:"rgba(229,9,20,.15)",border:"1px solid rgba(229,9,20,.35)",borderRadius:"var(--radius-sm)",padding:"10px 16px",marginBottom:"20px",display:"inline-flex",alignItems:"center",gap:"10px"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"20px",color:"#E50914"}}>N</span>
                <span style={{fontFamily:"var(--font-cond)",fontSize:"13px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.7)"}}>As Seen on Netflix — Canine Intervention</span>
              </div>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(36px,4.5vw,64px)",lineHeight:.95,color:"#fff",marginBottom:"24px"}}>
                MEET <span style={{color:"#7DAAFF"}}>JAS LEVERETTE</span>
              </h2>
              <p style={{fontSize:"16px",fontWeight:300,color:"rgba(255,255,255,.75)",lineHeight:1.75,marginBottom:"20px"}}>
                With 18+ years of professional experience and over 5,000 dogs trained, Jas Leverette is one of the most trusted names in the industry. His evaluations are direct, honest, and built around your specific dog — not a script.
              </p>
              <p style={{fontSize:"16px",fontWeight:300,color:"rgba(255,255,255,.75)",lineHeight:1.75,marginBottom:"24px"}}>
                He has worked with celebrities, law enforcement, professional athletes, and everyday families. The evaluation is the same — personal, thorough, and built to give you real answers.
              </p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginBottom:"32px"}}>
                {["18+ Years","5,000+ Dogs","Netflix Featured","All Breeds","All Behaviors"].map((c) => (
                  <span key={c} style={{fontFamily:"var(--font-cond)",fontSize:"12px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"#7DAAFF",background:"rgba(125,170,255,.1)",border:"1px solid rgba(125,170,255,.25)",padding:"6px 12px",borderRadius:"var(--radius-sm)"}}>{c}</span>
                ))}
              </div>
              <Link href="/about" style={{fontFamily:"var(--font-cond)",fontSize:"13px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.45)",borderBottom:"1px solid rgba(255,255,255,.18)",paddingBottom:"2px"}}>
                Read Jas&apos;s Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="tag">Results</span>
            <h2 className="hdg">What Families <span className="b">Are Saying</span></h2>
            <div className="div div-c"/>
          </div>
          <div className="grid-3col" style={{gap:"20px"}}>
            {[
              {stars:"★★★★★",text:"The evaluation alone changed everything. Jas figured out in 20 minutes what we couldn't figure out in 2 years. Our dog is unrecognizable.",author:"Marcus T.",dog:"Rocky — German Shepherd",result:"Reactivity Eliminated"},
              {stars:"★★★★★",text:"I didn't know what I was expecting for $27 but I walked out with a complete game plan. Worth 10x that. The man is the real deal.",author:"Sarah M.",dog:"Bella — Pit Bull Mix",result:"Aggression Fixed"},
              {stars:"★★★★★",text:"We flew in from Dallas for this. Worth every penny of the flight. Jas is exactly who you see on Netflix — no filter, no fluff, just results.",author:"James K.",dog:"Duke — Rottweiler",result:"Family Safe Again"},
            ].map((t) => (
              <div key={t.author} className="testi-card">
                <div className="testi-stars">{t.stars}</div>
                <p className="testi-txt">{t.text}</p>
                <div style={{display:"flex",alignItems:"center",gap:"12px",marginTop:"20px"}}>
                  <div className="testi-av">{t.author[0]}</div>
                  <div>
                    <div className="testi-author">{t.author}</div>
                    <div className="testi-dog">{t.dog}</div>
                  </div>
                </div>
                <div className="testi-result">✓ {t.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CELEBRITY PROOF */}
      <section style={{background:"var(--off)",padding:"48px 0",borderTop:"1px solid var(--bo)"}}>
        <div className="wrap">
          <div style={{textAlign:"center",marginBottom:"28px"}}>
            <span style={{fontFamily:"var(--font-cond)",fontSize:"11px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--gm)"}}>Trusted By</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center"}}>
            {["Kendrick Lamar","Steph Curry","Kevin Hart","Dr. Phil","Demi Moore","Jason Derulo","Coi Leray","San Jose Police Dept"].map((name) => (
              <span key={name} style={{fontFamily:"var(--font-cond)",fontSize:"13px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",padding:"9px 18px",background:"var(--w)",border:"1px solid var(--bo)",borderRadius:"var(--radius-sm)",color:"var(--gi)"}}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>STOP GUESSING.<br/><span>GET ANSWERS.</span></h2>
          <p>Book your evaluation with Jas today. One session. One plan. Real results — no fluff, no upsell, no obligation.</p>
          <div style={{display:"flex",alignItems:"center",gap:"16px",justifyContent:"center",flexWrap:"wrap",marginBottom:"20px"}}>
            <AddEvalToCart style={{fontSize:"18px",padding:"18px 48px"}} />
            <div style={{textAlign:"left"}}>
              <div style={{fontFamily:"var(--font-display)",fontSize:"32px",color:"#fff",lineHeight:1}}>$27</div>
              <div style={{fontFamily:"var(--font-cond)",fontSize:"10px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.4)"}}>One-Time · Secure Checkout</div>
            </div>
          </div>
          <p className="cta-sub">4.9★ Average Rating · All Breeds · In-Person or Virtual · Results Guaranteed</p>
        </div>
      </section>
    </>
  );
}
