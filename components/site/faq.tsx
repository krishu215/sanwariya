import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionLabel } from "@/components/site/brand";
import { faqs } from "@/lib/site-data";

export function FAQ() {
  return (
    <section className="faq-section section-space site-shell" aria-labelledby="faq-heading">
      <div data-reveal><SectionLabel>A LITTLE MORE CLARITY</SectionLabel><h2 id="faq-heading" className="section-heading">Good questions.<br />Straight answers.</h2><p className="faq-intro">Getting to know SSM?<br />Start here.</p></div>
      <Accordion className="faq-accordion" defaultValue={["faq-0"]}>
        {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent keepMounted><p>{faq.answer}</p></AccordionContent></AccordionItem>)}
      </Accordion>
    </section>
  );
}
