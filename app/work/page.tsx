import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProjectCard from "@/components/shared/ProjectCard";
import FinalCTA from "@/components/sections/FinalCTA";
import DoodleStar from "@/components/decorative/DoodleStar";
import { featuredProject, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse Growwera's project portfolio — websites, SEO campaigns, digital marketing, and AI automation solutions for growing businesses.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-18 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                Portfolio
              </p>
              <DoodleStar variant="sparkle" size={13} color="#F5BA27" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight tracking-tight max-w-3xl mb-6">
              Work we&apos;re proud of.
            </h1>
            <p className="text-xl text-[var(--color-foreground-secondary)] leading-relaxed max-w-2xl font-normal">
              Real projects, real business problems, real solutions. Case studies are published as projects are completed and clients give permission to share.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 sm:p-12 shadow-[var(--shadow-paper)] mb-14 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] mb-2">
                    Featured Case Study
                  </p>
                  <h2 className="font-serif italic font-normal text-3xl sm:text-4xl text-[var(--color-foreground)] mb-2 tracking-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="text-sm font-medium text-[var(--color-foreground-muted)] mb-6">
                    {featuredProject.tags?.join(" · ")}
                  </p>
                  <p className="text-[var(--color-foreground-secondary)] leading-relaxed text-sm sm:text-base mb-8">
                    {featuredProject.description}
                  </p>
                  <Link
                    href={featuredProject.href || "/work"}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-foreground)] text-[var(--color-background)] text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-200"
                  >
                    View Case Study
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-6 shadow-inner">
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                      </div>
                      <div className="px-3 py-0.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-[11px] text-[var(--color-foreground-secondary)] font-mono">
                        nexora.com
                      </div>
                      <div className="w-6" />
                    </div>
                    <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] shadow-xs">
                      <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)] mb-2">
                        Innovation for a brighter tomorrow.
                      </h4>
                      <div className="h-1.5 w-16 bg-[var(--color-accent)] rounded-full mb-3" />
                      <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed mb-6">
                        Custom digital architecture delivering speed, clarity, and predictable conversion.
                      </p>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="bg-[var(--color-surface-elevated)] p-3 rounded-lg border border-[var(--color-border)]">
                          <span className="text-xs font-bold text-[var(--color-foreground)] block">+140%</span>
                          <span className="text-[10px] text-[var(--color-foreground-muted)]">Traffic</span>
                        </div>
                        <div className="bg-[var(--color-surface-elevated)] p-3 rounded-lg border border-[var(--color-border)]">
                          <span className="text-xs font-bold text-[var(--color-foreground)] block">3.2x</span>
                          <span className="text-[10px] text-[var(--color-foreground-muted)]">Conversion</span>
                        </div>
                        <div className="bg-[var(--color-surface-elevated)] p-3 rounded-lg border border-[var(--color-border)]">
                          <span className="text-xs font-bold text-[var(--color-foreground)] block">99/100</span>
                          <span className="text-[10px] text-[var(--color-foreground-muted)]">Performance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          {/* Notice */}
          <AnimatedSection delay={0.3}>
            <div className="mt-14 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 sm:p-10 text-center shadow-xs">
              <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">More projects coming soon</h3>
              <p className="text-[var(--color-foreground-secondary)] leading-relaxed max-w-xl mx-auto mb-6 text-sm sm:text-base">
                We&apos;re in the process of documenting completed projects. In the meantime,
                the best way to understand what we can build is to tell us about your project.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-black text-sm font-bold rounded-full hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-[0_4px_16px_rgba(245,186,39,0.3)]"
              >
                Discuss your project
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
