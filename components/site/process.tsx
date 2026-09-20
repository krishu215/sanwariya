import { ArrowUpRight, Asterisk } from "lucide-react";
import { SectionLabel } from "@/components/site/brand";

const steps = [
  { title: "Idea", text: "We start with your goals and the story worth telling." },
  { title: "Strategy", text: "Offline and digital tactics mapped to your audience." },
  { title: "Execution", text: "Design, content and campaigns handled by one team." },
  { title: "Results", text: "Track meaningful outcomes and communicate them clearly." },
];

export function Process() {
  return (
    <section id="process" className="process-section section-space site-shell" aria-labelledby="process-heading">
      <div className="section-heading-row" data-reveal><div><SectionLabel number="03">HOW WE WORK</SectionLabel><h2 id="process-heading" className="section-heading">From idea to execution,<br />in four moves.</h2></div><span className="process-aside">LESS BACK-AND-FORTH.<br />MORE FORWARD.</span></div>
      <ol className="process-timeline">
        {steps.map((step, index) => <li key={step.title} data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}><div className="process-top"><span>0{index + 1}</span><ArrowUpRight aria-hidden="true" /></div><div className="process-rule" /><h3>{step.title}</h3><p>{step.text}</p></li>)}
      </ol>
    </section>
  );
}

export function BrandStatement() {
  return (
    <section className="brand-statement" aria-labelledby="statement-heading">
      <div className="site-shell">
        <div className="statement-top"><span>THE BIGGER PICTURE</span><Asterisk aria-hidden="true" /></div>
        <div data-reveal><h2 id="statement-heading">We don&apos;t just market.<br />We build <span>brand presence.</span></h2><div className="statement-bottom"><p>Innovation, practical execution, local expertise and cost-conscious marketing — brought together under one campaign.</p><a href="#contact" className="statement-arrow" aria-label="Plan your brand campaign"><ArrowUpRight aria-hidden="true" /></a></div></div>
        <ul className="statement-tags">{["Bottle Branding", "Influencer Tie-Ups", "Institute Promotions", "Digital Campaigns", "Local Visibility"].map((label) => <li key={label}>{label}</li>)}</ul>
      </div>
    </section>
  );
}
