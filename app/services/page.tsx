import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Search, BarChart2, Zap, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";
import ServicesEcosystem from "@/components/sections/ServicesEcosystem";
import ProcessSection from "@/components/sections/ProcessSection";
import {
  WebDesignVisual,
  SEOVisual,
  DigitalMarketingVisual,
  AIAutomationVisual,
} from "@/components/shared/ServiceVisualizations";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Growwera provides web design & development, SEO, digital marketing, and AI & automation services for growing businesses.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Growwera",
    title: "Services | Growwera",
    description:
      "Growwera provides web design & development, SEO, digital marketing, and AI & automation services for growing businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growwera Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Growwera",
    description:
      "Growwera provides web design & development, SEO, digital marketing, and AI & automation services for growing businesses.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    number: "01",
    icon: <Monitor size={26} />,
    title: "Web Design & Development",
    description:
      "Websites and digital products that make your business look credible, communicate clearly, and turn visitors into customers.",
    examples: ["Business websites", "Landing pages", "E-commerce", "Portfolios", "Web applications"],
    href: "/services/web-development",
    ctaLabel: "Explore Web Solutions",
    pastelBg: "rgba(245, 186, 39, 0.12)",
    accentColor: "#F5BA27",
  },
  {
    number: "02",
    icon: <Search size={26} />,
    title: "SEO",
    description:
      "Help your business get discovered when people are searching for what you offer.",
    examples: ["Technical SEO", "On-page SEO", "Local SEO", "Keyword strategy", "SEO monitoring"],
    href: "/services/seo",
    ctaLabel: "Explore SEO",
    pastelBg: "rgba(217, 119, 6, 0.12)",
    accentColor: "#F59E0B",
  },
  {
    number: "03",
    icon: <BarChart2 size={26} />,
    title: "Digital Marketing",
    description:
      "Reach the right people and turn attention into measurable business growth.",
    examples: ["Campaign strategy", "Paid advertising", "Content strategy", "Conversion optimisation", "Analytics"],
    href: "/services/digital-marketing",
    ctaLabel: "Explore Digital Marketing",
    pastelBg: "rgba(219, 39, 119, 0.12)",
    accentColor: "#F472B6",
  },
  {
    number: "04",
    icon: <Zap size={26} />,
    title: "AI & Automation",
    description:
      "Make repetitive work smarter with AI-powered workflows, automation, and custom business tools.",
    examples: ["AI assistants", "Workflow automation", "Business automation", "AI integrations", "Internal tools"],
    href: "/services/ai-automation",
    ctaLabel: "Explore AI & Automation",
    pastelBg: "rgba(124, 58, 237, 0.12)",
    accentColor: "#A78BFA",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-18 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Headline & Explanation */}
            <div className="lg:col-span-6">
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                    Services
                  </p>
                  <DoodleStar variant="sparkle" size={13} color="var(--color-accent)" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight mb-6">
                  Digital solutions built around your business.
                </h1>
                <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed mb-8 font-normal">
                  Every service Growwera provides is built around a single
                  principle: understand the business first, then build the right
                  solution.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(245,186,39,0.35)]"
                  >
                    Start a Project
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="#services-list"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] font-semibold rounded-xl hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] transition-colors"
                  >
                    Explore Offerings
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Interactive Floating Ecosystem */}
            <div className="lg:col-span-6">
              <AnimatedSection delay={0.15}>
                <ServicesEcosystem />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services list with Visual Demonstrations */}
      <section id="services-list" className="py-16 lg:py-20 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] mb-2">
                What we can build
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">
                Explore our core capabilities.
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.number} delay={i * 0.08}>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 lg:p-9 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[var(--shadow-paper-hover)] transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Info & Description (col-span-7) */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold tracking-wider text-[var(--color-foreground-muted)]">
                          {service.number}
                        </span>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border border-black/5 dark:border-white/5"
                          style={{ backgroundColor: service.pastelBg, color: service.accentColor }}
                        >
                          {service.icon}
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] tracking-tight mb-3">
                        {service.title}
                      </h2>

                      <p className="text-[var(--color-foreground-secondary)] leading-relaxed mb-6 text-sm sm:text-base">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.examples.map((ex) => (
                          <span
                            key={ex}
                            className="px-3 py-1 text-xs font-medium text-[var(--color-foreground-secondary)] bg-[var(--color-surface-elevated)] rounded-md border border-[var(--color-border)]"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={service.href}
                        className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/25 text-sm font-semibold rounded-xl hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>

                    {/* Right: Interactive Visual Demonstration (col-span-5) */}
                    <div className="lg:col-span-5">
                      <div className="p-3 bg-[var(--color-background)] rounded-2xl border border-[var(--color-border)]">
                        {service.number === "01" && <WebDesignVisual />}
                        {service.number === "02" && <SEOVisual />}
                        {service.number === "03" && <DigitalMarketingVisual />}
                        {service.number === "04" && <AIAutomationVisual />}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process: How We Work */}
      <ProcessSection />

      {/* Bottom CTA */}
      <section className="py-16 border-t border-[var(--color-border)] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4 tracking-tight">
              Not sure which service you need?
            </h2>
            <p className="text-[var(--color-foreground-secondary)] text-lg leading-relaxed mb-8">
              That&apos;s completely normal. Tell us about your business and what
              you&apos;re trying to achieve, and we&apos;ll help you figure out the right
              approach.
            </p>
            <Link
              href="/contact#discovery"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(245,186,39,0.35)]"
            >
              I&apos;m Not Sure What I Need
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
