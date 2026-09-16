"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cpu,
  Bot,
  GitBranch,
  FileCode2,
  Workflow,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import AIHeroVisual from "@/components/services/AIHeroVisual";
import AIValueChainDiagram from "@/components/services/AIValueChainDiagram";
import ServicePricingEnquiry from "@/components/services/ServicePricingEnquiry";
import HandDrawnArrow from "@/components/decorative/HandDrawnArrow";

/* ── 03: WHAT WE DO CARDS ── */
const whatWeDo = [
  {
    step: "01",
    title: "AI Assistants & Chatbots",
    description:
      "We design intelligent 24/7 customer and internal knowledge assistants trained on your specific business documentation, guidelines, and catalog.",
    icon: Bot,
  },
  {
    step: "02",
    title: "Workflow Automation",
    description:
      "We connect your CRMs, website forms, spreadsheets, and databases so information flows automatically without manual data entry.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Process Automation",
    description:
      "We automate multi-step operational routines including client onboarding, proposal generation, invoice reminders, and lead qualification.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "AI API Integrations",
    description:
      "We embed modern LLMs, reasoning models, and semantic search directly into your existing software tools to classify, summarize, and extract information.",
    icon: Cpu,
  },
  {
    step: "05",
    title: "Custom Internal Portals",
    description:
      "We create clean web-based tools and administrative interfaces that empower your non-technical team members to run complex automated tasks safely.",
    icon: FileCode2,
  },
  {
    step: "06",
    title: "Monitoring & Reliability",
    description:
      "We build resilient error-handling, payload validation, and automatic notifications so automations run reliably without breaking quietly.",
    icon: ShieldCheck,
  },
];

/* ── 04: WHAT'S INCLUDED (6 SERVICE BLOCKS) ── */
const whatsIncluded = [
  {
    num: "01",
    title: "Workflow Audit & Opportunity Analysis",
    description:
      "Comprehensive evaluation of your current team processes to identify bottlenecks where automation yields the highest time savings.",
  },
  {
    num: "02",
    title: "Custom AI Knowledge Assistants",
    description:
      "Tuned conversational agents that answer customer questions, schedule meetings, and retrieve company knowledge instantly.",
  },
  {
    num: "03",
    title: "Multi-App Integrations",
    description:
      "Seamless integrations across Zapier, Make, custom webhooks, REST APIs, Google Workspace, Slack, and your chosen CRM.",
  },
  {
    num: "04",
    title: "Lead Routing & CRM Auto-Sync",
    description:
      "Automated lead capture, instant qualification, notification routing, and automated email follow-up sequences.",
  },
  {
    num: "05",
    title: "Document Parsing & Data Extraction",
    description:
      "AI-driven extraction of structured data from incoming PDFs, invoices, emails, and forms into your central database.",
  },
  {
    num: "06",
    title: "System Maintenance & Health Checks",
    description:
      "Ongoing monitoring of API endpoints, authentication tokens, and workflow health with automated failure alerts.",
  },
];

/* ── 05: HOW WE WORK (TIMELINE) ── */
const workflow = [
  {
    step: "01",
    name: "FIND REPETITIVE TASK",
    desc: "We pinpoint the high-friction tasks consuming unnecessary hours across your team.",
  },
  {
    step: "02",
    name: "UNDERSTAND WORKFLOW",
    desc: "We document the step-by-step inputs, conditions, exceptions, and desired outputs.",
  },
  {
    step: "03",
    name: "DESIGN AUTOMATION",
    desc: "We architect the optimal pipeline combining modern AI logic with deterministic rules.",
  },
  {
    step: "04",
    name: "CONNECT TOOLS",
    desc: "We securely integrate your apps, webhooks, databases, and AI model APIs.",
  },
  {
    step: "05",
    name: "TEST & VERIFY",
    desc: "We run exhaustive edge-case simulations to guarantee data integrity and accuracy.",
  },
  {
    step: "06",
    name: "DEPLOY & IMPROVE",
    desc: "We launch live, train your team, and continuously monitor execution performance.",
  },
];

/* ── 06: WHAT YOU GET (DELIVERABLES) ── */
const deliverables = [
  "Complete automation blueprint mapping current vs automated workflows",
  "Fully tested and documented workflow integrations across your software stack",
  "Custom AI assistant tuned specifically to your proprietary company knowledge",
  "Resilient error-handling, fallback routing, and instant team alert systems",
  "Non-technical team training and step-by-step operating documentation",
  "Enterprise-grade security standards ensuring your data remains private",
  "Ongoing support, third-party API monitoring, and integration health checks",
  "Clear visibility into hours saved and operational efficiency gained",
];

/* ── 07: FAQS ── */
const faqs = [
  {
    q: "Do I need complex software or technical knowledge to use this?",
    a: "No. We design automations to run quietly and invisibly in the background. Your team continues using familiar tools like email, Slack, Google Sheets, or your CRM—the automation simply takes care of the repetitive steps behind the scenes.",
  },
  {
    q: "Will AI replace my employees?",
    a: "No. Our automations are designed to assist and empower your team, not replace them. By removing boring, repetitive administrative friction, your staff can focus on creative problem solving, client care, and high-value strategic work.",
  },
  {
    q: "Is our company data secure when using AI tools?",
    a: "Absolutely. We adhere to strict data privacy principles, using enterprise-grade API connections with strict zero-data-retention agreements that guarantee your proprietary business data is never used to train public AI models.",
  },
  {
    q: "What kind of tasks are best suited for automation?",
    a: "Any repeatable process: syncing website leads into your CRM, sending automated follow-up sequences, extracting structured data from invoices, triaging incoming support requests, or notifying team members of urgent events.",
  },
];

export default function AIAutomationPage() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-background)]">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 01 — HERO                                                 */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#315CFF] shadow-[0_0_8px_#315CFF]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                    AI & AUTOMATION
                  </p>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-[1.12] mb-6">
                  Make repetitive work{" "}
                  <span className="font-serif italic font-normal text-[#315CFF]">
                    smarter.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[var(--color-foreground-secondary)] leading-relaxed max-w-xl mb-8">
                  We design and build custom AI assistants, automated pipelines, and intelligent
                  workflows that remove repetitive admin and help your team focus on high-value
                  business work.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact?service=ai-automation"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#315CFF] hover:bg-[#2446D8] transition-all duration-200 shadow-[0_4px_20px_rgba(49,92,255,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Enquire for Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#how-we-work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--color-foreground)] hover:text-[#315CFF] glass-pill transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Our Automation Process</span>
                    <ChevronRight className="w-4 h-4 text-[var(--color-foreground-muted)]" />
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: 4-Stage Connected Node Pipeline Visual */}
            <div className="lg:col-span-6 relative">
              <FadeUp delay={0.15}>
                <AIHeroVisual />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 02 — WHY AI & AUTOMATION?                                  */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                    WHY AI & AUTOMATION?
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-5 leading-tight">
                  Not everything needs to be done manually.
                </h2>
                <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed mb-6">
                  Growing businesses often get bogged down in repetitive admin: copying lead info
                  across spreadsheets, answering repetitive customer questions, generating standard
                  reports, or routing emails. Practical AI and automation eliminate tedious manual
                  tasks so your team can focus on high-value client work.
                </p>
                <p className="text-sm font-semibold text-[#315CFF] mb-2">
                  What thoughtful automation delivers for your business:
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-6">
              <FadeUp delay={0.15}>
                <div className="glass-glossy rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-4">
                  {[
                    "Eliminating manual data entry and human error across software tools",
                    "Responding instantly to customer inquiries 24/7 with smart assistants",
                    "Connecting disjointed apps into seamless, automated business workflows",
                    "Freeing up valuable team hours for strategic thinking and client relationships",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#315CFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-[var(--color-foreground)]">
                        {point}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-[var(--color-border)] mt-4">
                    <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                      We focus on practical, dependable business utility—not speculative hype. Every automation solves a tangible operational bottleneck.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 03 — WHAT WE DO                                            */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  WHAT WE DO
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-4">
                What does Growwera build for automation?
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)] leading-relaxed">
                From intelligent conversational assistants to automated background pipelines, we engineer seamless workflows.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {whatWeDo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.step} delay={idx * 0.08}>
                  <div className="glass-glossy rounded-3xl p-6 sm:p-7 border border-[var(--color-border)] hover:border-[#315CFF]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xs h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#315CFF] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#315CFF]">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--color-foreground)] tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Embedded Automation Node System Diagram */}
          <FadeUp delay={0.2}>
            <div className="pt-10 border-t border-[var(--color-border)]">
              <div className="text-center mb-4">
                <span className="text-xs font-mono font-bold text-[#315CFF] uppercase tracking-wider">
                  The End-to-End Automation Pipeline
                </span>
              </div>
              <AIValueChainDiagram />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 04 — WHAT'S INCLUDED (6 SERVICE BLOCKS)                    */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-4">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  WHAT&apos;S INCLUDED
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight">
                Practical automation systems that scale.
              </h2>
            </FadeUp>
            <div className="hidden sm:flex items-center gap-2 select-none pointer-events-none">
              <span className="font-handwriting text-xl text-[var(--color-foreground-secondary)] rotate-3">
                No complex coding needed
              </span>
              <HandDrawnArrow
                variant="curved-down-right"
                className="w-7 h-6 text-[var(--color-foreground-muted)] opacity-75"
                color="currentColor"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item, idx) => (
              <FadeUp key={item.num} delay={idx * 0.06}>
                <div className="glass-glossy rounded-3xl p-6 sm:p-7 border border-[var(--color-border)] shadow-xs h-full flex flex-col justify-between group hover:border-[#315CFF]/30 transition-colors">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#315CFF] mb-2">
                      {item.num}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 05 — HOW WE WORK (TIMELINE)                                */}
      {/* ────────────────────────────────────────────────────────── */}
      <section id="how-we-work" className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  HOW WE WORK
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-4">
                Our automation deployment process.
              </h2>
              <p className="text-base text-[var(--color-foreground-secondary)]">
                A thorough, tested workflow that ensures reliable background operations.
              </p>
            </FadeUp>
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workflow.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.06}>
                <div className="glass-glossy rounded-3xl p-6 border border-[var(--color-border)] shadow-xs flex flex-col justify-between h-full hover:border-[#315CFF]/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#315CFF]">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-foreground-muted)]">
                        STAGE
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-foreground)] tracking-tight mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-foreground-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 06 — WHAT YOU GET (DELIVERABLES)                           */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-14">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  WHAT YOU GET
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-3">
                Tangible deliverables on every automation project.
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)]">
                Dependable code, documented workflows, and peace of mind.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="glass-glossy rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-[var(--color-border)]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#315CFF] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 07 — FAQ                                                   */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-[var(--color-border)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#315CFF] select-none">
                  FAQ
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight">
                Frequently asked questions.
              </h2>
            </FadeUp>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.05}>
                <div className="glass-glossy rounded-2xl p-6 border border-[var(--color-border)] shadow-xs">
                  <h3 className="text-base font-bold text-[var(--color-foreground)] tracking-tight mb-2 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#315CFF] shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-[var(--color-foreground-secondary)] leading-relaxed pl-6.5">
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 08 — ENQUIRE FOR PRICING (SHARED CONVERSION COMPONENT)     */}
      {/* ────────────────────────────────────────────────────────── */}
      <ServicePricingEnquiry
        serviceId="ai-automation"
        serviceName="AI & Automation"
        customHeadline="Ready to automate repetitive work and scale your operations?"
      />
    </div>
  );
}
