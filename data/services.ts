export interface Service {
  number: string;
  title: string;
  description: string;
  examples: string[];
  ctaLabel: string;
  ctaHref: string;
  iconName: "Monitor" | "Search" | "BarChart2" | "Zap";
  accentColor?: string;
  pastelBg?: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Websites and digital products that make your business look credible, communicate clearly, and turn visitors into customers.",
    examples: [
      "Business websites",
      "Landing pages",
      "E-commerce",
      "Portfolios",
      "Web applications",
    ],
    ctaLabel: "Explore Web Solutions",
    ctaHref: "/services/web-development",
    iconName: "Monitor",
    accentColor: "#0F62FE",
    pastelBg: "#EFF6FF",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Help your business get discovered when people are searching for what you offer.",
    examples: [
      "Technical SEO",
      "On-page SEO",
      "Local SEO",
      "Keyword strategy",
      "SEO monitoring",
    ],
    ctaLabel: "Explore SEO",
    ctaHref: "/services/seo",
    iconName: "Search",
    accentColor: "#D97706",
    pastelBg: "#FFFBEB",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Reach the right people and turn attention into measurable business growth.",
    examples: [
      "Campaign strategy",
      "Paid advertising",
      "Content strategy",
      "Conversion optimization",
      "Analytics",
    ],
    ctaLabel: "Explore Marketing",
    ctaHref: "/services/digital-marketing",
    iconName: "BarChart2",
    accentColor: "#DB2777",
    pastelBg: "#FDF2F8",
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Make repetitive work smarter with AI-powered workflows, automation, and custom business tools.",
    examples: [
      "AI assistants",
      "Workflow automation",
      "Business automation",
      "AI integrations",
      "Internal tools",
    ],
    ctaLabel: "Explore AI & Automation",
    ctaHref: "/services/ai-automation",
    iconName: "Zap",
    accentColor: "#7C3AED",
    pastelBg: "#F5F3FF",
  },
];
