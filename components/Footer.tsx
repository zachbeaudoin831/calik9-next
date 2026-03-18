import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="ft-grid">
          <div>
            <div className="ft-brand">
              <Image src="/logo.svg" alt="Cali K9" width={44} height={44} />
              <span className="ft-brand-name">CALI K9</span>
            </div>
            <p className="ft-tagline">
              Professional dog training rooted in relationship, structure, and real-world results.
              As seen on Netflix&rsquo;s Canine Intervention.
            </p>
            <p className="ft-contact">
              Oakland, CA &amp; Nationwide<br />
              info@calik9.com
            </p>
            <div className="ft-social">
              {["IG","TT","YT","FB"].map((s) => (
                <a key={s} href="#" className="ft-s">{s}</a>
              ))}
            </div>
          </div>

          <div className="ft-col">
            <h4>Training</h4>
            <ul>
              <li>Board &amp; Train</li>
              <li>Private Sessions</li>
              <li>Group Classes</li>
              <li>Online Programs</li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Jas</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li>Netflix Feature</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>Connect</h4>
            <ul>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>YouTube</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        <div className="ft-bot">
          <p className="ft-copy">&copy; {new Date().getFullYear()} Cali K9&reg; &mdash; All rights reserved</p>
          <p className="ft-disc">
            Results vary based on dog, owner commitment, and consistency of training protocols.
          </p>
        </div>
      </div>
    </footer>
  );
}
