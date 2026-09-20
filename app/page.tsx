import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About, Qualities, WhySSM } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Process, BrandStatement } from "@/components/site/process";
import { Work, LocalSection } from "@/components/site/work";
import { FAQ } from "@/components/site/faq";
import { Contact, Footer } from "@/components/site/contact";
import { RevealMotion } from "@/components/site/motion";
import { getStructuredData } from "@/lib/site-seo";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Qualities />
        <WhySSM />
        <Services />
        <Process />
        <BrandStatement />
        <Work />
        <LocalSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <RevealMotion />
    </>
  );
}
