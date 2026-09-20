import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/brand";

export function Work() {
  return (
    <section id="work" className="work-section section-space site-shell" aria-labelledby="work-heading">
      <div className="section-heading-row" data-reveal><div><SectionLabel number="04">IDEAS OUT IN THE WORLD</SectionLabel><h2 id="work-heading" className="section-heading">Work that deserves<br />to be seen.</h2></div><p className="section-intro">The thinking. The making.<br />The story behind the campaign.</p></div>
      <div className="work-preview" data-reveal>
        <div className="work-preview-top"><span>THE SSM CAMPAIGN JOURNAL</span><span>VOL. 01</span></div>
        <div className="work-preview-main"><span className="work-next" aria-hidden="true">Next up<span>.</span></span><MoveUpRight aria-hidden="true" /></div>
        <div className="work-preview-bottom"><div><p className="micro">CASE STUDY COMING SOON</p><p>Real campaigns. The full story.<br />Shared here when they&apos;re ready.</p></div><a href="#contact" className="text-link">Let&apos;s create what&apos;s next <ArrowUpRight aria-hidden="true" /></a></div>
      </div>
      <p className="work-note">No borrowed results. No made-up success stories. Just our work, documented honestly.</p>
    </section>
  );
}

export function LocalSection() {
  return (
    <section className="local-section" aria-labelledby="local-heading">
      <div className="site-shell local-layout">
        <div className="local-heading" data-reveal><SectionLabel>OUR CITY. YOUR NEXT CHAPTER.</SectionLabel><h2 id="local-heading" className="section-heading">Built in Indore.<br />Designed for<br /><span className="accent-text">ambitious brands.</span></h2><span className="local-location">INDORE <span aria-hidden="true">/</span> MADHYA PRADESH <span aria-hidden="true">/</span> INDIA</span></div>
        <div className="local-copy" data-reveal><p>Every city has its own rhythm. We build marketing around ours.</p><p>For Indore businesses, visibility means showing up where local audiences actually spend their time — on their phones, in their neighbourhoods and around their everyday routines.</p><p>As a digital and offline marketing agency in Indore, SSM brings social media marketing, local SEO, on-ground promotions and influencer marketing together. For coaching institutes, we shape campaigns around admissions and competitive-exam audiences.</p><p>Whether you&apos;re growing a local brand or reaching further into the Madhya Pradesh market, we start with understanding your audience. Then we make the right kind of noise.</p></div>
      </div>
    </section>
  );
}
