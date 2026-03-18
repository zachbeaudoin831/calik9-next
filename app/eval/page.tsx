"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EvalPage() {
  const [form, setForm] = useState({ fn:"",ln:"",ph:"",em:"",dn:"",db:"",issue:"",location:"" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to GHL / CRM
    setSubmitted(true);
  }

  return (
    <>
      {/* URGENCY BAR */}
      <div className="urgency-bar" style={{marginTop:"72px"}}>
        <div className="urg-inner">
          <p>🔥 <strong>Limited Spots Available</strong> — Evaluations This Week Are Filling Fast</p>
          <a href="#book" style={{background:"rgba(0,0,0,.2)",color:"#fff",fontFamily:"var(--font-cond)",fontSize:"13px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",padding:"8px 18px",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,.3)"}}>
            Reserve My Spot
          </a>
        </div>
      </div>

      {/* HERO + FORM */}
      <section id="book" style={{background:"var(--bd)",minHeight:"100vh",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"stretch",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(45deg,rgba(255,255,255,.02) 0,rgba(255,255,255,.02) 1px,transparent 1px,transparent 40px)"}}/>
        <div className="hero-orb"/>

        {/* Left */}
        <div className="hero-left" style={{padding:"60px 48px 60px 60px"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.2)",borderRadius:"var(--radius-sm)",padding:"10px 16px",marginBottom:"24px"}}>
            <div style={{width:"8px",height:"8px",background:"#4ADE80",borderRadius:"50%",animation:"pulse 2s infinite"}}/>
            <span style={{fontFamily:"var(--font-cond)",fontSize:"12px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.85)"}}>
              Currently Accepting New Dogs — All Behaviors Welcome
            </span>
          </div>

          <h1 className="hdg-hero fu d1" style={{marginBottom:"24px"}}>
            GET YOUR DOG<br/>
            <em>FINALLY</em><br/>
            EVALUATED
          </h1>

          <p className="hero-sub fu d2">
            Stop guessing. In one evaluation, Jas pinpoints exactly what&apos;s driving your dog&apos;s behavior and gives you a clear, custom roadmap to fix it — <strong style={{color:"#fff"}}>completely free.</strong>
          </p>

          {/* FORM */}
          {submitted ? (
            <div className="fu" style={{background:"rgba(74,222,128,.12)",border:"1px solid rgba(74,222,128,.3)",borderRadius:"var(--radius)",padding:"40px",textAlign:"center"}}>
              <div style={{fontSize:"48px",marginBottom:"16px"}}>✅</div>
              <h3 style={{fontFamily:"var(--font-display)",fontSize:"32px",color:"#fff",marginBottom:"12px"}}>You&apos;re Booked!</h3>
              <p style={{color:"rgba(255,255,255,.75)",fontSize:"15px"}}>We&apos;ll contact you within 24 hours to confirm your evaluation time.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="fu d3" style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.15)",borderRadius:"var(--radius)",padding:"32px",backdropFilter:"blur(4px)"}}>
              <p style={{fontFamily:"var(--font-cond)",fontSize:"14px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.6)",marginBottom:"16px"}}>
                Book Your Free Evaluation — Takes 60 Seconds
              </p>

              <div className="form-row">
                <input className="form-input" name="fn" type="text" placeholder="Your First Name" value={form.fn} onChange={handleChange} required />
                <input className="form-input" name="ln" type="text" placeholder="Your Last Name" value={form.ln} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input className="form-input" name="ph" type="tel" placeholder="Phone Number" value={form.ph} onChange={handleChange} required />
                <input className="form-input" name="em" type="email" placeholder="Email Address" value={form.em} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input className="form-input" name="dn" type="text" placeholder="Dog's Name" value={form.dn} onChange={handleChange} required />
                <input className="form-input" name="db" type="text" placeholder="Dog's Breed" value={form.db} onChange={handleChange} required />
              </div>
              <select className="form-input" name="issue" value={form.issue} onChange={handleChange} required style={{marginBottom:"12px",width:"100%"}}>
                <option value="" disabled>What&apos;s your dog&apos;s biggest issue?</option>
                {["Aggression toward people","Aggression toward other dogs","Leash reactivity / pulling","Excessive barking","Separation anxiety","Jumping and biting","Not listening / ignoring commands","Fear and anxiety","Potty training issues","General obedience / new puppy","Multiple issues"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <select className="form-input" name="location" value={form.location} onChange={handleChange} required style={{marginBottom:"0",width:"100%"}}>
                <option value="" disabled>Preferred location / format</option>
                {["North Hollywood / Los Angeles, CA","Bay Area, CA","Miami, FL","Online / Zoom Evaluation","Not sure yet"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>

              <button type="submit" className="form-submit">
                Book My Free Evaluation
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <p className="form-disc">🔒 Your info is 100% private. No spam. We&apos;ll contact you within 24 hours.</p>
            </form>
          )}

          <div className="fu d4" style={{display:"flex",gap:"24px",flexWrap:"wrap",marginTop:"20px"}}>
            {["Completely Free","No Obligation","All Breeds Welcome","Results Guaranteed"].map((t) => (
              <div key={t} style={{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-cond)",fontSize:"13px",fontWeight:600,letterSpacing:"1px",color:"rgba(255,255,255,.55)"}}>
                <span style={{color:"#4ADE80"}}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Jas photo */}
        <div className="hero-right">
          <Image
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/66a311486dce452f20d2ffcd.png"
            alt="Jas Leverette"
            fill
            style={{objectFit:"cover",objectPosition:"center top",filter:"brightness(.7) saturate(.8)"}}
          />
        </div>
      </section>

      {/* STATS */}
      <div className="proof-strip">
        <div className="wrap">
          <div className="proof-inner">
            {[["3,500+","Dogs Evaluated"],["15+","Years Experience"],["4.9★","Avg Rating"],["11","Celebrity Clients"],["100%","Free — No Catch"]].map(([n,l],i,arr) => (
              <>
                <div key={l} className="pf-stat"><div className="pf-n">{n}</div><div className="pf-l">{l}</div></div>
                {i < arr.length - 1 && <div key={`d${i}`} className="pf-div"/>}
              </>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT YOU GET */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="tag">What&apos;s Included</span>
            <h2 className="hdg">What You Get in Your <span className="b">Free Evaluation</span></h2>
            <div className="div div-c"/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
            {[
              {icon:"🎯",title:"Root Cause Analysis",desc:"Jas identifies the exact trigger driving your dog's behavior — not just the symptom."},
              {icon:"🗺️",title:"Custom Training Roadmap",desc:"You leave with a clear, personalized plan tailored to your dog's breed, age, and specific issues."},
              {icon:"⏱️",title:"Timeline & Expectations",desc:"Honest answers on how long it takes, what's realistic, and what program fits your goals."},
              {icon:"💡",title:"Immediate Tips",desc:"Walk away with 3–5 things you can do today that will start changing your dog's behavior."},
              {icon:"🤝",title:"No Pressure Consultation",desc:"Zero sales pressure. If we're not the right fit, Jas will tell you — and point you in the right direction."},
              {icon:"📍",title:"In-Person or Virtual",desc:"Available in LA, Bay Area, Miami, or via Zoom for clients anywhere in the country."},
            ].map((item) => (
              <div key={item.title} style={{background:"var(--off)",border:"1px solid var(--bo)",borderRadius:"var(--radius)",padding:"32px",transition:"all .2s"}} className="card">
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
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px",position:"relative"}}>
            <div style={{position:"absolute",top:"36px",left:"12.5%",right:"12.5%",height:"2px",background:"var(--bo)",zIndex:0}}/>
            {[
              {n:"1",title:"Submit Form",desc:"Fill out the 60-second form above with your dog's info and biggest challenge."},
              {n:"2",title:"We Reach Out",desc:"Our team contacts you within 24 hours to confirm your evaluation slot."},
              {n:"3",title:"Meet Jas",desc:"Bring your dog (or hop on Zoom) for your private evaluation session."},
              {n:"4",title:"Get Your Plan",desc:"Leave with a custom roadmap and immediate steps to start seeing results."},
            ].map((step) => (
              <div key={step.n} style={{textAlign:"center",padding:"0 16px",position:"relative",zIndex:1}}>
                <div style={{width:"72px",height:"72px",background:"var(--w)",border:"2px solid var(--bm)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontSize:"28px",color:"var(--blue)",margin:"0 auto 20px",transition:"all .3s"}}>
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
          <div style={{display:"grid",gridTemplateColumns:"5fr 7fr",gap:"72px",alignItems:"center"}}>
            <div style={{background:"rgba(255,255,255,.05)",borderRadius:"var(--radius-lg)",aspectRatio:"3/4",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"72px",color:"rgba(255,255,255,.1)"}}>JAS</span>
            </div>
            <div>
              <div style={{background:"rgba(229,9,20,.15)",border:"1px solid rgba(229,9,20,.35)",borderRadius:"var(--radius-sm)",padding:"10px 16px",marginBottom:"20px",display:"inline-flex",alignItems:"center",gap:"10px"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"20px",color:"#E50914"}}>N</span>
                <span style={{fontFamily:"var(--font-cond)",fontSize:"13px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.7)"}}>As Seen on Netflix — Canine Intervention</span>
              </div>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"clamp(42px,4.5vw,72px)",lineHeight:.95,color:"#fff",marginBottom:"24px"}}>
                MEET <span style={{color:"#7DAAFF"}}>JAS LEVERETTE</span>
              </h2>
              <p style={{fontSize:"16px",fontWeight:300,color:"rgba(255,255,255,.75)",lineHeight:1.75,marginBottom:"20px"}}>
                With 18+ years of professional experience and over 5,000 dogs trained, Jas Leverette is one of the most trusted names in the industry. His approach combines structure, relationship, and real-world accountability.
              </p>
              <p style={{fontSize:"16px",fontWeight:300,color:"rgba(255,255,255,.75)",lineHeight:1.75,marginBottom:"24px"}}>
                Jas doesn&apos;t just train dogs — he transforms the dynamic between dogs and their families. Every evaluation is personal, every roadmap is custom.
              </p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginBottom:"24px"}}>
                {["18+ Years Experience","5,000+ Dogs Trained","Netflix Featured","All Breeds","All Behaviors"].map((c) => (
                  <span key={c} style={{fontFamily:"var(--font-cond)",fontSize:"12px",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"#7DAAFF",background:"rgba(125,170,255,.1)",border:"1px solid rgba(125,170,255,.25)",padding:"6px 12px",borderRadius:"var(--radius-sm)"}}>{c}</span>
                ))}
              </div>
              <Link href="/about" style={{fontFamily:"var(--font-cond)",fontSize:"13px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.5)",borderBottom:"1px solid rgba(255,255,255,.2)",paddingBottom:"2px",transition:"all .2s"}}>
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
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {[
              {stars:"★★★★★",text:"The evaluation alone changed everything. Jas figured out in 20 minutes what we couldn't figure out in 2 years. Our dog is unrecognizable.",author:"Marcus T.",dog:"Rocky — German Shepherd",result:"Reactivity Eliminated"},
              {stars:"★★★★★",text:"I was skeptical about a free evaluation — I thought there'd be a catch. There wasn't. Jas was honest, direct, and gave us a real plan on the spot.",author:"Sarah M.",dog:"Bella — Pit Bull Mix",result:"Aggression Fixed"},
              {stars:"★★★★★",text:"We flew in from Dallas for this evaluation. Worth every penny of the flight. Jas is the real deal — exactly who you see on Netflix.",author:"James K.",dog:"Duke — Rottweiler",result:"Family Safe Again"},
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

      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>READY TO GET <span>ANSWERS?</span></h2>
          <p>Book your free evaluation today. Jas will personally assess your dog and give you a real plan — no fluff, no upsell, no obligation.</p>
          <div className="cta-btns">
            <a href="#book" className="btn btn-white">Book My Free Evaluation</a>
          </div>
          <p className="cta-sub">Free · No Obligation · Results-Based · All Breeds Welcome</p>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.6;transform:scale(1.3);} }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
        .form-input { width: 100%; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2); border-radius: var(--radius-sm); padding: 13px 16px; font-family: var(--font-body); font-size: 15px; color: #fff; outline: none; transition: border-color .2s; }
        .form-input::placeholder { color: rgba(255,255,255,.4); }
        .form-input:focus { border-color: rgba(125,170,255,.7); background: rgba(255,255,255,.14); }
        select.form-input option { background: var(--bd); color: #fff; }
        .form-submit { width: 100%; background: #fff; color: var(--blue); font-family: var(--font-cond); font-size: 17px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; padding: 18px 24px; border-radius: var(--radius-sm); border: none; cursor: pointer; transition: all .2s; box-shadow: 0 6px 24px rgba(0,0,0,.2); display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 16px; }
        .form-submit:hover { background: var(--bp); transform: translateY(-2px); }
        .form-disc { font-size: 11px; color: rgba(255,255,255,.35); text-align: center; margin-top: 12px; line-height: 1.5; }
        @media (max-width: 768px) { .form-row { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
