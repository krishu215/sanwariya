"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionLabel } from "@/components/site/brand";
import { services, business } from "@/lib/site-data";
import printImage from "@/public/images/ssm-print.webp";

export function Services() {
  const [selected, setSelected] = useState<string[]>([services[0].id]);
  const service = services.find((item) => selected.includes(item.id)) ?? services[0];

  return (
    <section id="services" className="services-section section-space" aria-labelledby="services-heading">
      <div className="site-shell">
        <div className="section-heading-row" data-reveal><div><SectionLabel number="02">WHAT WE DO</SectionLabel><h2 id="services-heading" className="display-heading">Five ways we<br /><span className="accent-text">grow your brand.</span></h2></div><p className="section-intro">Pick one service, or combine multiple<br className="desktop-break" /> channels into a single campaign.</p></div>
        <div className="services-layout" data-reveal>
          <div className="service-visual">
            <div className="service-image"><Image src={printImage} alt="SSM print concept featuring vermilion campaign artwork and cream branded stationery" fill placeholder="blur" sizes="(max-width: 899px) 90vw, 35vw" /></div>
            <div className="service-visual-caption" key={service.id}><span className="micro">CREATIVE THINKING. TANGIBLE IMPACT.</span><p>{service.shortTitle}</p><span className="micro">{service.note}</span></div>
            <span className="concept-note">SSM brand exploration. Not client work.</span>
          </div>
          <Accordion value={selected} onValueChange={(value) => setSelected(value as string[])} className="service-accordion">
            {services.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="service-item">
                <AccordionTrigger className="service-trigger">
                  <span className="service-number">{item.number}</span><span className="service-title">{item.title}</span><span className="service-toggle" aria-hidden="true"><Plus className="service-plus" /><Minus className="service-minus" /></span>
                </AccordionTrigger>
                <AccordionContent keepMounted className="service-content">
                  <p>{item.description}</p>
                  <ul>{item.items.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <a className="text-link" href={`${business.whatsapp}?text=${encodeURIComponent(`Hi SSM, I'm interested in ${item.title}. Let's discuss a campaign.`)}`} target="_blank" rel="noopener noreferrer">Let&apos;s make it happen <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens WhatsApp in a new tab)</span></a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
