import Image from "next/image";
import AddVIPToCart from "./AddVIPToCart";
import CelebBadges from "@/components/CelebBadges";

export const metadata = {
  title: "VIP Dog Training With Jas Leverette | Cali K9®",
  description: "5 private 2-hour sessions with Cali K9 founder Jas Leverette. Direct one-on-one coaching. Limited spots available.",
};

const VIP_IMAGE = "https://cdn.shopify.com/s/files/1/0534/2275/1922/files/VIP-Training-With-Jas-Leverette-Cali-K9_-63071466.jpg?v=1710190456";

export default function VIPPage() {
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
                CALI K9<span className="reg">®</span> VIP<br/>
                <span style={{color:"rgba(255,255,255,.65)"}}>DOG TRAINING</span><br/>
                WITH JAS LEVERETTE
              </h1>
              <p style={{fontFamily:"var(--font-cond)",fontSize:"18px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.7)",marginBottom:"24px"}}>
                5 Private 2-Hour Sessions · Exclusive Access · Real Education
              </p>
              <blockquote className="hero-quote" style={{borderLeft:"3px solid rgba(255,255,255,.4)",paddingLeft:"20px",margin:"0 0 32px",fontFamily:"var(--font-body)",fontSize:"17px",fontStyle:"italic",color:"rgba(255,255,255,.85)",lineHeight:1.7}}>
                &ldquo;I don&apos;t train dogs. I educate handlers. When you understand the behavior, everything changes.&rdquo;
                <cite style={{display:"block",marginTop:"8px",fontStyle:"normal",fontFamily:"var(--font-cond)",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.5)"}}>— Jas Leverette</cite>
              </blockquote>
              <div style={{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"}}>
                <AddVIPToCart style={{fontSize:"18px",padding:"18px 40px"}} />
              </div>
              <p style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"1px",color:"rgba(255,255,255,.4)",marginTop:"16px"}}>
                🔒 Secure checkout powered by Shopify
              </p>
            </div>
            <div style={{position:"relative"}}>
              <Image
                src={VIP_IMAGE}
                alt="VIP Training With Jas Leverette"
                width={600}
                height={600}
                style={{width:"100%",height:"auto",borderRadius:"var(--radius)",display:"block",boxShadow:"0 32px 80px rgba(0,0,0,.4)"}}
                priority
              />
              <div style={{position:"absolute",bottom:"24px",left:"24px",right:"24px",background:"rgba(0,0,0,.7)",backdropFilter:"blur(12px)",borderRadius:"var(--radius-sm)",padding:"16px 20px",border:"1px solid rgba(255,255,255,.1)"}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"28px",color:"#fff"}}>$4,997</div>
                <div style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.6)"}}>5-Session VIP Package</div>
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
            <h2 className="hdg">Everything in Your <span className="b">VIP Package</span></h2>
            <div className="div div-c"/>
          </div>
          <div className="grid-2col" style={{gap:"16px",maxWidth:"800px",margin:"0 auto"}}>
            {[
              {icon:"📞",item:"Live Kickstarter Call with Senior Trainer"},
              {icon:"🐕",item:"Five 2-Hour Private Sessions With Jas Leverette"},
              {icon:"👥",item:"1-Year Unlimited Group Classes"},
              {icon:"💻",item:"1-Year Unlimited Zoom Classes"},
              {icon:"🎯",item:"90 Days of Q&A Calls with Jas"},
              {icon:"📋",item:"Personalized Behavior Breakdown"},
              {icon:"🧠",item:"Clear Structure and Handling Strategy"},
              {icon:"♾️",item:"Lifetime Access to Cali K9 Online Courses"},
            ].map((r) => (
              <div key={r.item} className="inc-item" style={{display:"flex",gap:"16px",alignItems:"flex-start",padding:"20px 24px",background:"var(--off)",borderRadius:"var(--radius-sm)",border:"1px solid var(--bo)"}}>
                <span style={{fontSize:"24px",lineHeight:1,flexShrink:0}}>{r.icon}</span>
                <span style={{fontFamily:"var(--font-cond)",fontSize:"16px",fontWeight:700,letterSpacing:"1px",color:"var(--gi)",lineHeight:1.4}}>{r.item}</span>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"48px"}}>
            <AddVIPToCart />
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
                DOGS WITH<br/><span style={{color:"rgba(255,255,255,.6)"}}>REAL PROBLEMS.</span>
              </h2>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[
                  "Reactivity, aggression, anxiety, or complete lack of control",
                  "Owners who want clarity and real answers — not guesses",
                  "Families serious about a permanent transformation",
                  "Dogs that other trainers have given up on",
                ].map((item) => (
                  <div key={item} className="who-item" style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                    <span className="who-check" style={{color:"#4ade80",fontWeight:800,fontSize:"18px",flexShrink:0}}>✓</span>
                    <span style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"rgba(255,255,255,.85)",lineHeight:1.6}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,.06)",borderRadius:"var(--radius)",padding:"40px",border:"1px solid rgba(255,255,255,.12)"}}>
              <div style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,.4)",marginBottom:"16px"}}>Package Includes</div>
              {[
                ["5","Private 2-Hour Sessions with Jas"],
                ["12","Months of Group + Zoom Classes"],
                ["90","Days of Direct Q&A with Jas"],
                ["∞","Lifetime Online Course Access"],
              ].map(([n,l]) => (
                <div key={l} className="pricing-row" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 0",borderBottom:"1px solid rgba(255,255,255,.08)"}}>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"rgba(255,255,255,.7)"}}>{l}</span>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"28px",color:"#fff"}}>{n}</span>
                </div>
              ))}
              <div style={{marginTop:"32px",padding:"20px",background:"rgba(26,63,171,.4)",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,.15)",textAlign:"center"}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"36px",color:"#fff"}}>$4,997</div>
                <div style={{fontFamily:"var(--font-cond)",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:"20px"}}>Full VIP Package</div>
                <AddVIPToCart style={{width:"100%",justifyContent:"center"}} />
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
            <p className="sub">See why some of the most recognized names in the world trust Jas Leverette with their dogs.</p>
          </div>
          <CelebBadges />

          {/* Stephen Curry Testimonial */}
          <div style={{maxWidth:"700px",margin:"0 auto",background:"var(--gi)",borderRadius:"var(--radius)",padding:"48px",textAlign:"center",color:"#fff"}}>
            <div style={{width:"96px",height:"96px",borderRadius:"50%",overflow:"hidden",margin:"0 auto 20px",border:"3px solid rgba(255,255,255,.2)"}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/6626412b8381f2fea60f81a6.jpeg" alt="Stephen Curry" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
            <div style={{fontSize:"32px",marginBottom:"16px"}}>★★★★★</div>
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
                src={VIP_IMAGE}
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
                When you book VIP, you&apos;re not working with an assistant or a junior trainer. You&apos;re working with Jas. Every session is built around your dog&apos;s specific behavior, your household, and your goals.
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
          <span className="tag" style={{background:"rgba(255,255,255,.2)",color:"#fff",border:"1px solid rgba(255,255,255,.3)"}}>Limited Spots Available</span>
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(36px,5vw,64px)",color:"#fff",margin:"20px 0 8px",lineHeight:1}}>
            READY TO TRANSFORM<br/>YOUR DOG?
          </h2>
          <p style={{fontFamily:"var(--font-display)",fontSize:"48px",color:"rgba(255,255,255,.85)",margin:"0 0 12px"}}>$4,997</p>
          <p style={{fontFamily:"var(--font-cond)",fontSize:"16px",letterSpacing:"1px",color:"rgba(255,255,255,.7)",marginBottom:"40px"}}>
            5 Private Sessions · 12 Months Group + Zoom · Lifetime Course Access
          </p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
            <AddVIPToCart style={{background:"#fff",color:"var(--blue)",fontSize:"18px",padding:"18px 48px"}} />
          </div>
          <p style={{fontFamily:"var(--font-cond)",fontSize:"12px",letterSpacing:"1px",color:"rgba(255,255,255,.4)",marginTop:"20px"}}>
            🔒 Secure checkout powered by Shopify · training@calik9.com for questions
          </p>
        </div>
      </section>
    </>
  );
}
