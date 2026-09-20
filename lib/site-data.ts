export const business = {
  name: "Shree Sanwariya Marketing",
  shortName: "SSM",
  phone: "+91 92321 43198",
  phoneHref: "tel:+919232143198",
  email: "krishnanamdev382@gmail.com",
  location: "Indore, Madhya Pradesh, India",
  whatsapp: "https://wa.me/919232143198",
  campaignUrl:
    "https://wa.me/919232143198?text=Hi%20SSM%2C%20I'd%20like%20to%20discuss%20a%20marketing%20project.",
  description:
    "Shree Sanwariya Marketing is an Indore-based marketing agency offering digital marketing, offline promotions, influencer marketing, local SEO and coaching institute marketing.",
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    id: "offline",
    number: "01",
    title: "Creative Offline Marketing",
    shortTitle: "Out in the real world.",
    description: "Real-world visibility that people can't simply scroll past.",
    items: ["Bottle-label advertising", "Street promotions", "Event promotions", "Branded merchandise", "Local brand activations"],
    note: "ON THE STREETS. IN THEIR HANDS. ON THEIR MINDS.",
  },
  {
    id: "digital",
    number: "02",
    title: "Digital Marketing Solutions",
    shortTitle: "Make your presence felt.",
    description: "A consistent, professional digital presence designed around your audience.",
    items: ["Social media campaigns", "Graphic design", "Content creation", "Local SEO", "Google Business Profile optimisation"],
    note: "GOOD CONTENT. RIGHT AUDIENCE. REAL CONNECTION.",
  },
  {
    id: "influencer",
    number: "03",
    title: "Influencer Marketing",
    shortTitle: "The right voices. Your story.",
    description: "Connect brands with relevant local and niche creators.",
    items: ["Local creator partnerships", "Niche influencer collaborations", "Campaign coordination", "Brand endorsements"],
    note: "LOCAL VOICES. MEANINGFUL CONVERSATIONS.",
  },
  {
    id: "institute",
    number: "04",
    title: "Coaching Institute Marketing",
    shortTitle: "Reach the next generation.",
    description: "Marketing built around admission cycles and competitive-exam audiences.",
    items: ["Student acquisition campaigns", "Bottle branding", "Banner branding", "Digital campaigns", "JEE promotions", "NEET promotions", "Competitive-exam promotions"],
    note: "FROM FIRST IMPRESSION TO THE NEXT ADMISSION.",
  },
  {
    id: "custom",
    number: "05",
    title: "Customized Campaigns",
    shortTitle: "Your ambition. Our canvas.",
    description: "A campaign designed specifically around your objectives.",
    items: ["Campaign strategy", "Creative direction", "Digital execution", "Offline execution", "End-to-end coordination"],
    note: "NO ONE-SIZE-FITS-ALL. JUST THE RIGHT FIT.",
  },
] as const;

export const faqs = [
  {
    question: "What does Shree Sanwariya Marketing do?",
    answer: "Shree Sanwariya Marketing (SSM) is a marketing agency in Indore, Madhya Pradesh. We develop and execute creative campaigns across digital, offline and local marketing for businesses, brands, coaching institutes and growing companies.",
  },
  {
    question: "Is Shree Sanwariya Marketing based in Indore?",
    answer: "Yes. SSM is based in Indore, Madhya Pradesh, India, with a focus on local markets, audiences and brand visibility.",
  },
  {
    question: "What marketing services does SSM provide?",
    answer: "SSM provides creative offline marketing, digital marketing solutions, influencer marketing, coaching institute marketing and customized campaigns. Businesses can choose a single service or combine channels into one campaign.",
  },
  {
    question: "Does SSM provide offline marketing?",
    answer: "Yes. Our offline marketing services include bottle-label advertising, street promotions, event promotions, branded merchandise and local brand activations.",
  },
  {
    question: "Does SSM provide digital marketing?",
    answer: "Yes. SSM provides social media campaigns, graphic design, content creation, local SEO and Google Business Profile optimisation.",
  },
  {
    question: "Does SSM provide influencer marketing?",
    answer: "Yes. SSM connects brands with relevant local and niche creators through creator partnerships, influencer collaborations, campaign coordination and brand endorsements.",
  },
  {
    question: "Does SSM work with coaching institutes?",
    answer: "Yes. SSM offers coaching institute marketing, including student acquisition campaigns, bottle and banner branding, digital campaigns, and promotions for JEE, NEET and other competitive-exam audiences.",
  },
  {
    question: "How can I contact SSM?",
    answer: "Call or WhatsApp +91 92321 43198, or email krishnanamdev382@gmail.com. SSM is based in Indore, Madhya Pradesh, India.",
  },
] as const;

export function createEnquiryUrl(name: string, service: string, message: string) {
  const text = `Hi SSM, I'd like to discuss a marketing project.\n\nName: ${name.trim()}\nService: ${service}\nMessage: ${message.trim()}`;
  return `${business.whatsapp}?text=${encodeURIComponent(text)}`;
}
