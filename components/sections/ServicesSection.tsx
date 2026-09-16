"use client";

import Link from "next/link";
import { Monitor, Search, BarChart2, Cpu, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";
import DoodleStar from "@/components/decorative/DoodleStar";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import FadeUp from "@/components/motion/FadeUp";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Websites and digital products that make your business look credible, communicate clearly, and turn visitors into customers.",
    examples: ["Business websites", "Landing pages", "E-commerce", "Portfolios", "Web apps"],
    ctaLabel: "Explore Web Solutions",
    ctaHref: "/services/web-development",
    icon: <Monitor size={20} />,
    pastelBg: "rgba(245, 186, 39, 0.14)",
    accentColor: "#F5BA27",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Help your business get discovered when people are searching for what you offer.",
    examples: ["Technical SEO", "On-page SEO", "Local SEO", "Keyword strategy", "SEO monitoring"],
    ctaLabel: "Explore SEO",
    ctaHref: "/services/seo",
    icon: <Search size={20} />,
    pastelBg: "rgba(217, 119, 6, 0.12)",
    accentColor: "#F59E0B",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Reach the right people and turn attention into measurable business growth.",
    examples: ["Campaign strategy", "Paid advertising", "Content strategy", "Conversion", "Analytics"],
    ctaLabel: "Explore Marketing",
    ctaHref: "/services/digital-marketing",
    icon: <BarChart2 size={20} />,
    pastelBg: "rgba(219, 39, 119, 0.12)",
    accentColor: "#F472B6",
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Make repetitive work smarter with AI-powered workflows, automation, and custom business tools.",
    examples: ["AI assistants", "Workflow automation", "Business automation", "AI integrations", "Internal tools"],
    ctaLabel: "Explore AI & Automation",
    ctaHref: "/services/ai-automation",
    icon: <Cpu size={20} />,
    pastelBg: "rgba(124, 58, 237, 0.12)",
    accentColor: "#A78BFA",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  What we build
                </p>
                <DoodleStar variant="sparkle" size={13} color="#F5BA27" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[var(--color-foreground)] tracking-tight leading-tight">
                Complete digital solutions for real business{" "}
                <span className="font-serif italic font-normal text-[var(--color-accent)] text-[1.12em] tracking-normal inline-block relative -top-0.5">
                  growth.
                </span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-3">
                From modern websites to AI-powered automation, we build what your
                business needs to look better, get found, and work smarter.
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                Explore All Services
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* 4 Cards with Staggered Entrance */}
        <Stagger staggerDelay={0.09} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.number} className="h-full">
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
