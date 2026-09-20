import { business, faqs, services } from "@/lib/site-data";

export function getSiteUrl() {
  const hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  return hostname ? `https://${hostname}` : "http://localhost:3000";
}

export function getStructuredData() {
  const url = getSiteUrl();
  const businessId = `${url}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": businessId,
        name: business.name,
        alternateName: business.shortName,
        url,
        description: business.description,
        telephone: "+919232143198",
        email: business.email,
        logo: `${url}/icon.svg`,
        image: `${url}/opengraph-image`,
        address: { "@type": "PostalAddress", addressLocality: "Indore", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
        areaServed: [{ "@type": "City", name: "Indore" }, { "@type": "State", name: "Madhya Pradesh" }],
        contactPoint: { "@type": "ContactPoint", telephone: "+919232143198", email: business.email, contactType: "customer enquiries" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SSM Marketing Services",
          itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@id": `${url}/#service-${service.id}` } })),
        },
      },
      { "@type": "WebSite", "@id": `${url}/#website`, url, name: business.name, description: business.description, publisher: { "@id": businessId }, inLanguage: "en-IN" },
      {
        "@type": "WebPage", "@id": `${url}/#webpage`, url, name: "Shree Sanwariya Marketing | Digital & Offline Marketing Agency in Indore",
        isPartOf: { "@id": `${url}/#website` }, about: { "@id": businessId }, inLanguage: "en-IN",
      },
      ...services.map((service) => ({
        "@type": "Service", "@id": `${url}/#service-${service.id}`, name: service.title,
        serviceType: service.title, description: `${service.description} Services include ${service.items.join(", ")}.`,
        provider: { "@id": businessId }, areaServed: { "@type": "City", name: "Indore" }, url: `${url}/#services`,
      })),
      { "@type": "FAQPage", "@id": `${url}/#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };
}
