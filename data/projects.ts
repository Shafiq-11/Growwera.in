export interface Project {
  id: string;
  title: string;
  category: string;
  tags?: string[];
  description: string;
  href?: string;
  accentColor?: string;
  featured?: boolean;
}

export const featuredProject: Project = {
  id: "nexora",
  title: "Nexora",
  category: "Web Development",
  tags: ["Website", "SEO", "Digital Strategy"],
  description:
    "Nexora needed a modern, professional website that could clearly communicate their services and improve their visibility on search engines. We designed and developed a clean, high-converting website and implemented an SEO strategy tailored to their industry.",
  href: "/work",
  accentColor: "#0F62FE",
  featured: true,
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project Name",
    category: "Web Development",
    description:
      "A complete website redesign and development project. Full case study details will be added as client projects are published.",
    href: "/work",
    accentColor: "#0F62FE",
  },
  {
    id: "project-2",
    title: "Project Name",
    category: "SEO",
    description:
      "An SEO audit and optimisation campaign. Full case study details will be added as client projects are published.",
    href: "/work",
    accentColor: "#059669",
  },
  {
    id: "project-3",
    title: "Project Name",
    category: "Digital Marketing",
    description:
      "A digital marketing campaign with paid advertising and content strategy. Details coming soon.",
    href: "/work",
    accentColor: "#D97706",
  },
  {
    id: "project-4",
    title: "Project Name",
    category: "AI & Automation",
    description:
      "A custom AI-powered workflow automation. Full case study details will be added soon.",
    href: "/work",
    accentColor: "#7C3AED",
  },
  {
    id: "project-5",
    title: "Project Name",
    category: "Web Development",
    description:
      "A landing page and e-commerce build. Full case study details will be added as client projects are published.",
    href: "/work",
    accentColor: "#0F62FE",
  },
  {
    id: "project-6",
    title: "Project Name",
    category: "AI & Automation",
    description:
      "An internal business tool with AI integrations. Full case study details will be added soon.",
    href: "/work",
    accentColor: "#7C3AED",
  },
];
