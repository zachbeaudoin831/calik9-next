import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

const JAS_HERO = "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/66a311486dce452f20d2ffcd.png";

export const metadata = {
  title: "Cali K9® — Professional Dog Training | As Seen on Netflix",
};

const MARQUEE_ITEMS = ["Board & Train","Private Sessions","Group Classes","Obedience","Protection Sport","Puppy Development","Behavior Modification","Real-World Training"];

export default async function HomePage() {
  const products = await getProducts(4);

  return (
    <>
      {/* HERO */}
      <section className="hero-dark">
        <div className="hero-orb" />
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="nfx-badge">
              <span className="nn">N</span>
              <span>Canine Intervention</span>
            </div>
            <span className="hero-tag-lt">Est. 2005 · Oakland, CA</span>
          </div>
          <h1 className="hdg-hero fu d1">
            REAL DOGS.<br />
            <em>REAL RESULTS.</em>
          </h1>
          <p className="hero-sub fu d2">
            Jas Leverette and Cali K9® deliver professional dog training rooted in
            relationship, structure, and results. Trusted by thousands of families across the country.
          </p>
          <div className="hero-ctas fu d3">
            <Link href="/eval" className="btn btn-blue btn-blue-lg">
              Book Evaluation
            </Link>
            <Link href="/shop" className="btn btn-outline-white">
              Shop Now
            </Link>
          </div>
          <div className="hero-stats fu d4">
            {[
              {n:"5000+", l:"Dogs Trained",   ct:5000, sf:"+"},
              {n:"18+",   l:"Years Experience", ct:18,  sf:"+"},
              {n:"Netflix",l:"Featured"},
              {n:"A+",    l:"Results"},
            ].map(({n,l,ct,sf}) => (
              <div key={l}>
                <div className={`hs-num${ct ? " count-up" : ""}`} data-target={ct} data-suffix={sf}>{n}</div>
                <div className="hs-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <Image
            src={JAS_HERO}
            alt="Jas Leverette — Cali K9 dog trainer"
            fill
            priority
            style={{objectFit:"cover",objectPosition:"center top"}}
          />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS,...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mq-item">
              {item}
              {i < MARQUEE_ITEMS.length * 2 - 1 && <span className="mq-dot">◆</span>}
            </span>
          ))}
        </div>
      </div>

      {/* PROOF STRIP */}
      <div className="proof-strip">
        <div className="wrap">
          <div className="proof-inner">
            {[
              {n:"5000+", l:"Dogs Trained",  ct:5000, sf:"+"},
              {n:"18+",   l:"Years",          ct:18,   sf:"+"},
              {n:"Netflix",l:"Featured"},
              {n:"Oakland",l:"HQ"},
              {n:"100%",  l:"Commitment",     ct:100,  sf:"%"},
            ].map(({n,l,ct,sf},i,arr) => (
              <Fragment key={l}>
                <div className="pf-stat">
                  <div className={`pf-n${ct ? " count-up" : ""}`} data-target={ct} data-suffix={sf}>{n}</div>
                  <div className="pf-l">{l}</div>
                </div>
                {i < arr.length - 1 && <div className="pf-div"/>}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* SEEN ON */}
      <div className="seen-on">
        <div className="wrap">
          <div className="so-inner">
            <span className="so-lbl">As Seen On</span>
            <div className="so-logos">
              <span className="so-logo nfx">NETFLIX</span>
              <span className="so-logo">ESPN</span>
              <span className="so-logo">ABC7</span>
              <span className="so-logo">SF Chronicle</span>
              <span className="so-logo">Bay Area News</span>
            </div>
          </div>
        </div>
      </div>

      {/* TRAINING PROGRAMS */}
      <section className="sec reveal" style={{background:"var(--off)"}}>
        <div className="wrap">
          <div className="sec-hd">
            <span className="tag">Training Programs</span>
            <h2 className="hdg">Transform Your Dog&apos;s <span className="b">Behavior</span></h2>
            <div className="div div-c"/>
            <p className="sub">Every program is built around your dog&apos;s individual needs and your family&apos;s goals.</p>
          </div>
          <div className="grid-3col" style={{gap:"24px"}}>
            {[
              {name:"VIP Training",  price:"From $4,997", desc:"Five private 2-hour sessions with Jas Leverette plus lifetime online course access and a year of group classes.", featured:false, href:"/vip",  delay:"reveal-d1"},
              {name:"Dog Evaluation",price:"Only $27",     desc:"One private session with Jas — he pinpoints the root cause of your dog's behavior and hands you a custom action plan.", featured:true,  href:"/eval", delay:"reveal-d2"},
              {name:"Shop Gear",     price:"Free Shipping",desc:"Professional training equipment, premium treats, and Cali K9® apparel used by Jas and the team.", featured:false, href:"/shop", delay:"reveal-d3"},
            ].map((p) => (
              <div key={p.name} className={`card reveal ${p.delay}${p.featured?" featured":""}`} style={{position:"relative",padding:"32px"}}>
                {p.featured && <span style={{position:"absolute",top:0,right:0,background:"var(--blue)",color:"#fff",fontFamily:"var(--font-cond)",fontSize:"10px",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",padding:"6px 16px",borderBottomLeftRadius:"7px"}}>Most Popular</span>}
                <div className="prog-name">{p.name}</div>
                <div className="prog-price">{p.price}</div>
                <p className="prog-desc">{p.desc}</p>
                <Link href={p.href} className="prog-btn">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {products.length > 0 && (
        <section className="sec reveal">
          <div className="wrap">
            <div className="sec-hd">
              <span className="tag">Shop</span>
              <h2 className="hdg">Cali K9<span className="reg">®</span> <span className="b">Gear</span></h2>
              <div className="div div-c"/>
              <p className="sub">Professional training equipment, apparel, and treats used by Jas and the Cali K9 team.</p>
            </div>
            <div className="product-grid" style={{marginBottom:"40px"}}>
              {products.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            <div style={{textAlign:"center"}}>
              <Link href="/shop" className="btn btn-outline">View All Products</Link>
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      <section className="sec" style={{background:"var(--off)"}}>
        <div className="wrap">
          <div className="sec-hd reveal">
            <span className="tag">Results</span>
            <h2 className="hdg">Real <span className="b">Transformations</span></h2>
            <div className="div div-c"/>
          </div>
          <div className="grid-3col" style={{gap:"24px"}}>
            {[
              {stars:"★★★★★",text:"Jas completely transformed our reactive German Shepherd in just 3 weeks. The results are beyond what we imagined possible.",author:"Marcus T.",dog:"Rocky — GSD",result:"Reactivity Resolved",delay:"reveal-d1"},
              {stars:"★★★★★",text:"After struggling for 2 years with our Pit Bull mix, Cali K9 gave us our life back. Best investment we ever made.",author:"Jennifer R.",dog:"Diesel — Pit Mix",result:"Aggression Fixed",delay:"reveal-d2"},
              {stars:"★★★★★",text:"We were about to rehome our dog. Jas saved our family. The board & train program is absolutely worth every penny.",author:"David K.",dog:"Luna — Rottweiler",result:"Family Safe",delay:"reveal-d3"},
            ].map((t) => (
              <div key={t.author} className={`testi-card reveal ${t.delay}`}>
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

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>READY TO <span>TRANSFORM</span> YOUR DOG?</h2>
          <p>Join thousands of families who&apos;ve trusted Cali K9® to unlock their dog&apos;s potential.</p>
          <div className="cta-btns">
            <Link href="/eval" className="btn btn-white">
              Book Evaluation
            </Link>
            <Link href="/shop" className="btn btn-outline-white">Shop Gear</Link>
          </div>
          <p className="cta-sub">No commitment · Results guaranteed · Trusted by thousands</p>
        </div>
      </section>
    </>
  );
}
