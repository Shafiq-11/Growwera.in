export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  service: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "nexora",
    quote:
      "Growwera understood what we were trying to achieve and turned the idea into something that actually works for our business.",
    author: "Aarav Menon",
    role: "Founder",
    company: "Nexora",
    service: "Website Development",
    featured: true,
  },
  {
    id: "solvia",
    quote:
      "Professional, responsive and truly invested in our growth. Our website and SEO have brought in real business opportunities.",
    author: "Priya Sharma",
    role: "CEO",
    company: "Solvia",
    service: "SEO & Digital Marketing",
    featured: true,
  },
  {
    id: "orbis",
    quote:
      "The automation system they built has saved us hours of manual work. The team is knowledgeable and easy to work with.",
    author: "Rohit Verma",
    role: "Operations Head",
    company: "Orbis",
    service: "AI & Automation",
    featured: false,
  },
];
