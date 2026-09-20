import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { Brand, CampaignLink, SectionLabel } from "@/components/site/brand";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { business, navigation } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="contact-section section-space" aria-labelledby="contact-heading">
      <div className="site-shell contact-layout">
        <div className="contact-copy" data-reveal><SectionLabel number="05">LET&apos;S MAKE SOMETHING MATTER</SectionLabel><h2 id="contact-heading" className="display-heading">Let&apos;s plan<br />your next<br />{" "}<span className="accent-text">campaign.</span></h2><p>Tell us what you&apos;re trying to achieve. We&apos;ll start with the idea, map the strategy and figure out what execution makes sense.</p><address className="contact-details"><span><MapPin aria-hidden="true" />Indore, Madhya Pradesh</span><a href={business.phoneHref}>{business.phone}<ArrowUpRight aria-hidden="true" /></a><a href={`mailto:${business.email}`}>{business.email}<ArrowUpRight aria-hidden="true" /></a></address><CampaignLink variant="outline">Start a Conversation on WhatsApp</CampaignLink></div>
        <EnquiryForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-shell">
          <div className="footer-main"><div className="footer-brand-block"><Brand footer /><p>Innovative ideas, impactful marketing and practical execution — built from Indore for brands ready to grow.</p></div><div className="footer-navigation"><p className="micro">TAKE A LOOK AROUND</p><nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div className="footer-contact"><p className="micro">LET&apos;S TALK</p><a href={business.phoneHref}>{business.phone}</a><a href={`mailto:${business.email}`}>{business.email}</a><span>{business.location}</span></div></div>
          <div className="footer-tagline">Innovative Ideas. Impactful Marketing. Guaranteed Results.</div>
          <div className="footer-bottom"><p>© 2026 Shree Sanwariya Marketing. All rights reserved.</p><a href="#home">BACK TO TOP <ArrowUpRight aria-hidden="true" /></a><span>MADE OF IDEAS. ROOTED IN INDORE.</span></div>
        </div>
      </footer>
      <a href={business.campaignUrl} className="mobile-whatsapp" target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /><span>Let&apos;s talk about your brand</span><ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens WhatsApp in a new tab)</span></a>
    </>
  );
}
