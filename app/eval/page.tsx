import Image from "next/image";
import Link from "next/link";
import AddEvalToCart from "./AddEvalToCart";
import CelebBadges from "@/components/CelebBadges";

export const metadata = {
  title: "Dog Training Evaluation With Jas Leverette | Cali K9®",
  description: "Book a private dog training evaluation with Jas Leverette — host of Netflix's Canine Intervention. One session. Real answers. Custom roadmap. Only $27.",
};

const EVAL_IMAGE = "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/66a311486dce452f20d2ffcd.png";

export default function EvalPage() {
  return (
    <>
      {/* HERO */}
      <section style={{paddingTop:"72px",background:"var(--gi)",color:"#fff",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#0a1a5c 0%,#122E85 50%,#1A3FAB 100%)"}}/>
        <div className="wrap" style={{position:"relative",zIndex:1,paddingTop:"60px",paddingBottom:"80px"}}>
          <div className="grid-2col" style={{gap:"64px",alignItems:"center"}}>
            <div>
              <span className="tag" style={{background:"rgba(255,255,255,.15)",color:"#fff",border:"1px solid rgba(255,255,255,.3)"}}>
                Limited Spots · One-on-One With Jas
              </span>
              <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(40px,6vw,72px)",color:"#fff",lineHeight:1,margin:"20px 0 8px"}}>
                CALI K9<span className="reg">®</span> DOG<br/>
                <span style={{color:"rgba(255,255,255,.65)"}}>TRAINING</span><br/>
                EVALUATION
              </h1>
              <p style={{fontFamily:"var(--font-cond)",fontSize:"18px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:"24px"}}>
                1 Private Session · Custom Roadmap · Real Answers
              </p>
              <blockquote className="hero-quote" style={{borderLeft:"3px solid rgba(255,255,255,.4)",paddingLeft:"20px",margin:"0 0 32px",fontFamily:"var(--font-body)",fontSize:"17px",fontStyle:"italic",color:"rgba(255,255,255,.85)",lineHeight:1.7}}>
                &ldquo;I don&apos;t train dogs. I educate handlers. When you understand the behavior, everything changes.&rdquo;
                <cite style={{display:"block",marginTop:"8px",fontStyle:"normal",fontFamily:"var(--font-cond)",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.5)"}}>— Jas Leverette</cite>
              </blockquote>
              <div style={{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"}}>
                <AddEvalToCart style={{fontSize:"18px",padding:"18px 40px"}} />
              </div>
              <p style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"1px",color:"rgba(255,255,255,.4)",marginTop:"16px"}}>
                🔒 Secure checkout powered by Shopify
              </p>
            </div>
            <div style={{position:"relative"}}>
              <Image
                src={EVAL_IMAGE}
                alt="Evaluation With Jas Leverette — Cali K9"
                width={600}
                height={600}
                style={{width:"100%",height:"auto",borderRadius:"var(--radius)",display:"block",boxShadow:"0 32px 80px rgba(0,0,0,.4)"}}
                priority
              />
              <div style={{position:"absolute",bottom:"24px",left:"24px",right:"24px",background:"rgba(0,0,0,.7)",backdropFilter:"blur(12px)",borderRadius:"var(--radius-sm)",padding:"16px 20px",border:"1px solid rgba(255,255,255,.1)"}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"28px",color:"#fff"}}>$27</div>
                <div style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.6)"}}>Private Evaluation Session</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="sec" style={{background:"var(--w)"}}>
        <div className="wrap">
          <div className="sec-hd">
            <span className="tag">What&apos;s Included</span>
            <h2 className="hdg">Everything in Your <span className="b">Evaluation</span></h2>
            <div className="div div-c"/>
          </div>
          <div className="grid-2col" style={{gap:"16px",maxWidth:"800px",margin:"0 auto"}}>
            {[
              {icon:"🎯",item:"Private Session With Jas Leverette"},
              {icon:"🗺️",item:"Custom Training Roadmap for Your Dog"},
              {icon:"🔍",item:"Root Cause Behavior Analysis"},
              {icon:"⏱️",item:"Honest Timeline & Program Recommendation"},
              {icon:"💡",item:"3–5 Take-Home Tips You Can Use Today"},
              {icon:"🤝",item:"Zero Sales Pressure — Honest Advice Only"},
              {icon:"📍",item:"In-Person or Virtual (Zoom) Options"},
              {icon:"📋",item:"Personalized Next-Step Action Plan"},
            ].map((r) => (
              <div key={r.item} className="inc-item" style={{display:"flex",gap:"16px",alignItems:"flex-start",padding:"20px 24px",background:"var(--off)",borderRadius:"var(--radius-sm)",border:"1px solid var(--bo)"}}>
                <span style={{fontSize:"24px",lineHeight:1,flexShrink:0}}>{r.icon}</span>
                <span style={{fontFamily:"var(--font-cond)",fontSize:"16px",fontWeight:700,letterSpacing:"1px",color:"var(--gi)",lineHeight:1.4}}>{r.item}</span>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"48px"}}>
            <AddEvalToCart />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{background:"var(--gi)",padding:"80px 0"}}>
        <div className="wrap">
          <div className="grid-2col" style={{gap:"48px",alignItems:"center"}}>
            <div>
              <span className="tag" style={{background:"rgba(255,255,255,.15)",color:"#fff",border:"1px solid rgba(255,255,255,.3)"}}>Who This Is For</span>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(32px,4vw,56px)",color:"#fff",margin:"16px 0 24px",lineHeight:1}}>
                ANY DOG.<br/><span style={{color:"rgba(255,255,255,.6)"}}>ANY BEHAVIOR.</span>
              </h2>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[
                  "Reactivity, aggression, anxiety, or complete lack of control",
                  "Owners who want real answers — not guesses or online advice",
                  "Dogs that have been through other trainers without results",
                  "Families that are ready to commit to a real transformation",
                ].map((item) => (
                  <div key={item} className="who-item" style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                    <span className="who-check" style={{color:"#4ade80",fontWeight:800,fontSize:"18px",flexShrink:0}}>✓</span>
                    <span style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"rgba(255,255,255,.85)",lineHeight:1.6}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,.06)",borderRadius:"var(--radius)",padding:"40px",border:"1px solid rgba(255,255,255,.12)"}}>
              <div style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,.4)",marginBottom:"16px"}}>Session Includes</div>
              {[
                ["1","Private Session with Jas"],
                ["100%","Personalized to Your Dog"],
                ["24hr","Scheduling Turnaround"],
                ["0","Sales Pressure"],
              ].map(([n,l]) => (
                <div key={l} className="pricing-row" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 0",borderBottom:"1px solid rgba(255,255,255,.08)"}}>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"rgba(255,255,255,.7)"}}>{l}</span>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"28px",color:"#fff"}}>{n}</span>
                </div>
              ))}
              <div style={{marginTop:"32px",padding:"20px",background:"rgba(26,63,171,.4)",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,.15)",textAlign:"center"}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"36px",color:"#fff"}}>$27</div>
                <div style={{fontFamily:"var(--font-cond)",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:"20px"}}>Private Evaluation</div>
                <AddEvalToCart style={{width:"100%",justifyContent:"center"}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CELEBRITY CLIENTS */}
      <section className="sec" style={{background:"var(--off)"}}>
        <div className="wrap">
          <div className="sec-hd">
            <span className="tag">From Hollywood to the Front Lines</span>
            <h2 className="hdg">Celebrities, Athletes &amp; <span className="b">Law Enforcement</span></h2>
            <div className="div div-c"/>
            <p className="sub">The same Jas that trained for the biggest names in the world will evaluate your dog.</p>
          </div>
          <CelebBadges />

          {/* Stephen Curry Testimonial */}
          <div style={{maxWidth:"700px",margin:"0 auto",background:"var(--gi)",borderRadius:"var(--radius)",padding:"48px",textAlign:"center",color:"#fff"}}>
            <div style={{fontSize:"48px",marginBottom:"16px"}}>★★★★★</div>
            <blockquote style={{fontFamily:"var(--font-body)",fontSize:"20px",fontStyle:"italic",lineHeight:1.7,color:"rgba(255,255,255,.9)",marginBottom:"24px"}}>
              &ldquo;Jas took care of my boys. He got them straight. They listen to me now. They got the best dog trainer right here.&rdquo;
            </blockquote>
            <div style={{fontFamily:"var(--font-cond)",fontSize:"16px",fontWeight:800,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.5)"}}>
              — Stephen Curry
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT JAS */}
      <section className="sec" style={{background:"var(--w)"}}>
        <div className="wrap">
          <div className="grid-2col" style={{gap:"48px",alignItems:"center"}}>
            <div>
              <Image
                src={EVAL_IMAGE}
                alt="Jas Leverette - Cali K9"
                width={600}
                height={600}
                style={{width:"100%",height:"auto",borderRadius:"var(--radius)",display:"block"}}
              />
            </div>
            <div>
              <span className="tag">About Jas Leverette</span>
              <h2 className="hdg" style={{textAlign:"left",marginTop:"16px"}}>18+ Years.<br/>5,000+ Dogs.<br/><span className="b">One Standard.</span></h2>
              <div className="div" style={{margin:"24px 0"}}/>
              <p style={{fontFamily:"var(--font-body)",fontSize:"16px",lineHeight:1.8,color:"var(--gm)",marginBottom:"20px"}}>
                Jas Leverette is the founder of Cali K9® — one of the most recognized dog training operations in the country. Featured on Netflix, ESPN, and ABC7, Jas has built his reputation on results that other trainers said were impossible.
              </p>
              <p style={{fontFamily:"var(--font-body)",fontSize:"16px",lineHeight:1.8,color:"var(--gm)",marginBottom:"32px"}}>
                When you book an evaluation, you&apos;re getting Jas — not an assistant. He will assess your dog directly, identify the root cause of the behavior, and hand you a real plan to fix it.
              </p>
              <div style={{display:"flex",gap:"32px",flexWrap:"wrap"}}>
                {[["Netflix","Featured"],["5,000+","Dogs Trained"],["11","Celebrity Clients"],["18+","Years Exp"]].map(([n,l]) => (
                  <div key={l} className="about-stat">
                    <div className="about-stat-num" style={{fontFamily:"var(--font-display)",fontSize:"28px",color:"var(--blue)"}}>{n}</div>
                    <div style={{fontFamily:"var(--font-cond)",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:"var(--gm)"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{background:"var(--blue)",padding:"80px 0",textAlign:"center"}}>
        <div className="wrap">
          <span className="tag" style={{background:"rgba(255,255,255,.2)",color:"#fff",border:"1px solid rgba(255,255,255,.3)"}}>One Session Changes Everything</span>
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(36px,5vw,64px)",color:"#fff",margin:"20px 0 8px",lineHeight:1}}>
            STOP GUESSING.<br/>GET ANSWERS.
          </h2>
          <p style={{fontFamily:"var(--font-display)",fontSize:"48px",color:"rgba(255,255,255,.85)",margin:"0 0 12px"}}>$27</p>
          <p style={{fontFamily:"var(--font-cond)",fontSize:"16px",letterSpacing:"1px",color:"rgba(255,255,255,.7)",marginBottom:"40px"}}>
            Private Session · Custom Roadmap · In-Person or Virtual
          </p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
            <AddEvalToCart style={{background:"#fff",color:"var(--blue)",fontSize:"18px",padding:"18px 48px"}} />
            <Link href="/vip" className="btn btn-outline-white">See VIP Training</Link>
          </div>
          <p style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"1px",color:"rgba(255,255,255,.4)",marginTop:"20px"}}>
            🔒 Secure checkout powered by Shopify · training@calik9.com for questions
          </p>
        </div>
      </section>
    </>
  );
}
