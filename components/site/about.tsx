import { ArrowUpRight, Asterisk, HeartHandshake, Lightbulb, Target, Wallet, UsersRound } from "lucide-react";
import { SectionLabel } from "@/components/site/brand";

const qualities = [
  { title: "Creative Thinking", text: "We design campaigns built to stand out, not blend into the feed.", icon: Lightbulb },
  { title: "Client-First Approach", text: "Your growth sits at the centre of every decision we make.", icon: HeartHandshake },
  { title: "Proven Results", text: "Strategy backed by outcomes you can actually measure.", icon: Target },
  { title: "Affordable & Effective", text: "Maximum impact, engineered for a lean, sensible budget.", icon: Wallet },
  { title: "Experienced Team", text: "Hands-on marketers who've done the work, not just studied it.", icon: UsersRound },
];

const reasons = [
  { title: "Deep Local Insight", text: "We understand local markets, audiences and buying behaviour." },
  { title: "Innovative Strategy", text: "Offline and online tactics combined to create meaningful visibility." },
  { title: "Long-Term Brand Building", text: "We focus on building a recognizable presence rather than chasing short-lived attention." },
  { title: "Stress-Free Execution", text: "From idea to launch, one team handles the execution." },
];

export function About() {
  return (
    <section id="about" className="section-space site-shell about-section" aria-labelledby="about-heading">
      <div className="about-heading-block" data-reveal>
        <SectionLabel number="01">NOT JUST ANOTHER AGENCY</SectionLabel>
        <h2 id="about-heading" className="display-heading">Marketing that<br />understands<br />{" "}<span className="accent-text">Indore first.</span></h2>
        <a href="#contact" className="text-link">A local perspective. A bigger picture. <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="about-body" data-reveal>
        <Asterisk className="about-asterisk" strokeWidth={1.4} aria-hidden="true" />
        <p className="about-lead">We&apos;re not interested in running the same marketing playbook everywhere.</p>
        <p>SSM combines creative thinking, digital execution and real-world visibility to build campaigns around the audience you&apos;re actually trying to reach.</p>
        <p>From local businesses and brands to coaching institutes and growing companies, we develop ideas and take them from concept to execution.</p>
        <div className="about-signature"><span>LOCAL AT HEART.</span><span>AMBITIOUS BY NATURE.</span></div>
      </div>
    </section>
  );
}

export function Qualities() {
  return (
    <section className="qualities-section section-space" aria-labelledby="qualities-heading">
      <div className="site-shell">
        <div className="section-heading-row" data-reveal>
          <div><SectionLabel>OUR QUALITIES</SectionLabel><h2 id="qualities-heading" className="section-heading">What working with<br />SSM feels like.</h2></div>
          <p className="section-intro">Five traits our clients notice first —<br className="desktop-break" /> and keep coming back for.</p>
        </div>
        <div className="qualities-list">
          {qualities.map(({ title, text, icon: Icon }, index) => (
            <article className="quality" key={title} data-reveal style={{ "--reveal-delay": `${index * 45}ms` } as React.CSSProperties}>
              <div className="quality-top"><Icon strokeWidth={1.4} aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySSM() {
  return (
    <section className="why-section section-space site-shell" aria-labelledby="why-heading">
      <div className="why-heading" data-reveal><SectionLabel>THE LOCAL ADVANTAGE</SectionLabel><h2 id="why-heading" className="section-heading">Marketing that<br />understands<br />{" "}<span className="accent-text">Indore first.</span></h2><p>Not a borrowed playbook.<br />A strategy built for your world.</p><div className="why-monogram" aria-hidden="true">ssm<span>.</span></div></div>
      <div className="why-list">
        {reasons.map((reason, index) => <article className="why-item" key={reason.title} data-reveal><span className="item-number">0{index + 1}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div><ArrowUpRight aria-hidden="true" /></article>)}
      </div>
    </section>
  );
}
