import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";
import { CampaignLink, SectionLabel } from "@/components/site/brand";
import heroImage from "@/public/images/ssm-campaign.webp";

export function Hero() {
  return (
    <>
      <section id="home" className="hero site-shell" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <SectionLabel>MARKETING AGENCY · INDORE</SectionLabel>
          <h1 id="hero-heading">Ideas that<br />get noticed.<br />Marketing that<br /><span>gets remembered.</span></h1>
          <p className="hero-description">Creative campaigns across digital, offline and local marketing — built around your business, your audience and your goals.</p>
          <div className="hero-actions">
            <CampaignLink />
            <a href="#services" className="text-link">Explore Services <ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote"><span className="small-cross" aria-hidden="true">+</span> Big ideas. Local understanding. Real impact.</div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-top"><span>GOOD IDEAS DON&apos;T STAY ON PAPER.</span><ArrowDownRight aria-hidden="true" /></div>
          <figure className="campaign-figure">
            <div className="hero-image-wrap"><Image src={heroImage} alt="SSM brand concept: a vermilion Make Some Real Noise poster, branded bottle and printed campaign materials in a sunlit studio" fill preload placeholder="blur" sizes="(max-width: 899px) 100vw, 46vw" className="hero-image" /></div>
            <div className="hero-seal" aria-hidden="true"><span>A LITTLE LOCAL.</span><Asterisk /><span>A LOT OF IMPACT.</span></div>
            <figcaption><span>THE SSM WAY — A BRAND CONCEPT</span><span>IDEA <ArrowRight aria-hidden="true" /> IMPACT</span></figcaption>
          </figure>
        </div>
      </section>
      <div className="positioning-strip">
        <div className="site-shell positioning-inner">
          <div className="positioning-item"><span className="positioning-number">01 /</span><div><p>OFFLINE + ONLINE</p><span>Full-Spectrum Reach</span></div><ArrowUpRightMark /></div>
          <div className="positioning-item"><span className="positioning-number">02 /</span><div><p>IDEA → EXECUTION</p><span>Handled End to End</span></div><ArrowUpRightMark /></div>
          <div className="positioning-item"><span className="positioning-number">03 /</span><div><p>INDORE ROOTED</p><span>Local Market Expertise</span></div><ArrowUpRightMark /></div>
        </div>
      </div>
    </>
  );
}

function ArrowUpRightMark() {
  return <ArrowUpRight className="positioning-mark" aria-hidden="true" strokeWidth={1.2} />;
}
