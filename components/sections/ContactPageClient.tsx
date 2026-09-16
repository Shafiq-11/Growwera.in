"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
}

const services = [
  "Web Design & Development",
  "SEO",
  "Digital Marketing",
  "AI & Automation",
  "Not sure yet",
];

const discoveryGoals = [
  "I need a website",
  "I want more customers",
  "I want to rank on Google",
  "I want to improve my digital presence",
  "I want to automate repetitive work",
  "I have an idea for a software/product",
  "I'm not sure yet",
];

const budgets = [
  "Under £1,000",
  "£1,000 – £5,000",
  "£5,000 – £15,000",
  "£15,000+",
  "Prefer not to say",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Not sure yet",
];

function DiscoveryQuestionnaire({ onComplete }: { onComplete: (data: Partial<FormData>) => void }) {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState("");
  const [businessDesc, setBusinessDesc] = useState("");
  const [problem, setProblem] = useState("");

  const handleGoalSelect = (g: string) => {
    setGoal(g);
    setStep(1);
  };

  const handleSubmit = () => {
    onComplete({
      service: goal === "I'm not sure yet" ? "Not sure yet" : goal,
      description: `Goal: ${goal}\n\nBusiness: ${businessDesc}\n\nProblem: ${problem}`,
    });
  };

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 sm:p-8 shadow-[var(--shadow-paper)]">
      <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-6">
        Quick Discovery — Step {step + 1} of 3
      </p>

      {step === 0 && (
        <div>
          <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">What are you trying to achieve?</h3>
          <p className="text-[var(--color-foreground-secondary)] text-sm mb-6">Choose the option that best describes your situation.</p>
          <div className="flex flex-col gap-2">
            {discoveryGoals.map((g) => (
              <button
                key={g}
                onClick={() => handleGoalSelect(g)}
                className={cn(
                  "flex items-center justify-between w-full px-4 py-3.5 text-left text-sm font-medium rounded-xl border transition-colors cursor-pointer",
                  goal === g
                    ? "bg-[var(--color-accent)]/15 border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "bg-[var(--color-surface-elevated)] border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)]"
                )}
              >
                {g}
                <ChevronRight size={16} className="shrink-0 text-[var(--color-foreground-muted)]" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">Tell us a little about your business.</h3>
          <p className="text-[var(--color-foreground-secondary)] text-sm mb-6">What does your business do? Who are your customers?</p>
          <textarea
            value={businessDesc}
            onChange={(e) => setBusinessDesc(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-none bg-[var(--color-surface-elevated)]"
            placeholder="e.g. We run a local plumbing business serving residential customers in the London area..."
          />
          <div className="flex gap-3 mt-4">
            <button onClick={() => setStep(0)} className="px-4 py-2.5 text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors cursor-pointer">
              Back
            </button>
            <button
              onClick={() => setStep(2)}
              disabled={!businessDesc.trim()}
              className="px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">What problem are you trying to solve?</h3>
          <p className="text-[var(--color-foreground-secondary)] text-sm mb-6">Describe the challenge as plainly as possible. No technical language needed.</p>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-none bg-[var(--color-surface-elevated)]"
            placeholder="e.g. People can't find us online. When they do find our website, they don't call..."
          />
          <div className="flex gap-3 mt-4">
            <button onClick={() => setStep(1)} className="px-4 py-2.5 text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors cursor-pointer">
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!problem.trim()}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Talk to Growwera
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactForm({ prefillData }: { prefillData?: Partial<FormData> }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: prefillData?.service || "",
    description: prefillData?.description || "",
    budget: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  useEffect(() => {
    if (prefillData?.service) {
      setForm((prev) => ({ ...prev, service: prefillData.service || prev.service }));
    }
    if (prefillData?.description) {
      setForm((prev) => ({ ...prev, description: prefillData.description || prev.description }));
    }
  }, [prefillData]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email address";
    if (!form.description.trim()) newErrors.description = "Please describe your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    cn(
      "w-full px-4 py-3 border rounded-xl text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors",
      errors[field] ? "border-rose-500/70 bg-rose-500/10" : "border-[var(--color-border)] bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-strong)]"
    );

  if (formState === "success") {
    return (
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-10 text-center shadow-[var(--shadow-paper)]">
        <div className="w-16 h-16 bg-emerald-500/15 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/30">
          <CheckCircle2 size={32} className="text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">Enquiry received.</h3>
        <p className="text-[var(--color-foreground-secondary)] leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ll review your message and get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 sm:p-9 space-y-6 shadow-[var(--shadow-paper)]" noValidate>
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="name">
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass("name")}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="email">
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass("email")}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputClass("company")}
          placeholder="Your company name (optional)"
        />
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2">What do you need?</label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setForm({ ...form, service: s })}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full border transition-colors cursor-pointer",
                form.service === s
                  ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                  : "bg-[var(--color-surface-elevated)] text-[var(--color-foreground-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
              )}
            >
              {s}
            </button>
          ))}
        </div>
        {form.service === "Not sure yet" && (
          <p className="mt-3 text-xs text-[var(--color-foreground-secondary)] bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-xl p-3 flex items-start gap-2 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0 mt-1.5" />
            That&apos;s completely normal. Most clients don&apos;t know the exact technical solution when they start. Just describe your goals or challenges below, and we&apos;ll recommend the right direction.
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="description">
          Project description <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={inputClass("description")}
          placeholder="Tell us about your business, your project, or the problem you're trying to solve. No technical language required."
        />
        {errors.description && <p className="mt-1 text-xs text-rose-500">{errors.description}</p>}
      </div>

      {/* Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2">Budget (optional)</label>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] bg-[var(--color-surface-elevated)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
          >
            <option value="" className="bg-[var(--color-surface)]">Select a range</option>
            {budgets.map((b) => <option key={b} value={b} className="bg-[var(--color-surface)]">{b}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2">Timeline (optional)</label>
          <select
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] bg-[var(--color-surface-elevated)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
          >
            <option value="" className="bg-[var(--color-surface)]">Select a timeline</option>
            {timelines.map((t) => <option key={t} value={t} className="bg-[var(--color-surface)]">{t}</option>)}
          </select>
        </div>
      </div>

      {/* Error state */}
      {formState === "error" && (
        <div className="flex items-start gap-3 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
          <AlertCircle size={18} className="text-rose-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-rose-500">Something went wrong</p>
            <p className="text-sm text-rose-500/80 mt-0.5">
              Your enquiry couldn&apos;t be sent. Please email us directly at{" "}
              <a href="mailto:hello@growwera.com" className="underline text-rose-500 font-medium">hello@growwera.com</a>
            </p>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-[var(--color-accent)] text-white text-base font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_4px_16px_rgba(49,92,255,0.3)] cursor-pointer"
      >
        {formState === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Project Enquiry
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-xs text-[var(--color-foreground-muted)] text-center">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get("service");

  const serviceMap: Record<string, string> = {
    "web-development": "Web Design & Development",
    "web": "Web Design & Development",
    "seo": "SEO",
    "digital-marketing": "Digital Marketing",
    "marketing": "Digital Marketing",
    "ai-automation": "AI & Automation",
    "ai": "AI & Automation",
  };

  const initialService =
    serviceParam && serviceMap[serviceParam.toLowerCase()]
      ? serviceMap[serviceParam.toLowerCase()]
      : undefined;

  const [showForm, setShowForm] = useState(!!initialService);
  const [prefillData, setPrefillData] = useState<Partial<FormData> | undefined>(
    initialService ? { service: initialService } : undefined
  );
  const [activeMode, setActiveMode] = useState<"direct" | "discovery">("direct");

  useEffect(() => {
    if (serviceParam && serviceMap[serviceParam.toLowerCase()]) {
      const matched = serviceMap[serviceParam.toLowerCase()];
      setPrefillData((prev) => ({ ...prev, service: matched }));
      setActiveMode("direct");
      setShowForm(true);
    }
  }, [serviceParam]);

  const handleDiscoveryComplete = (data: Partial<FormData>) => {
    setPrefillData(data);
    setShowForm(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
      {/* Mode toggle */}
      <AnimatedSection>
        <div className="flex gap-3 mb-10">
          <button
            onClick={() => { setActiveMode("direct"); setShowForm(false); }}
            className={cn(
              "px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200 shadow-sm cursor-pointer",
              activeMode === "direct"
                ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                : "bg-[var(--color-surface)] text-[var(--color-foreground-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)]"
            )}
          >
            I know what I need
          </button>
          <button
            onClick={() => { setActiveMode("discovery"); setShowForm(false); }}
            className={cn(
              "px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200 shadow-sm cursor-pointer",
              activeMode === "discovery"
                ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                : "bg-[var(--color-surface)] text-[var(--color-foreground-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)]"
            )}
          >
            I&apos;m not sure what I need
          </button>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* Main form area */}
        <div className="lg:col-span-2">
          <AnimatedSection>
            {activeMode === "direct" || showForm ? (
              <ContactForm prefillData={prefillData} />
            ) : (
              <DiscoveryQuestionnaire onComplete={handleDiscoveryComplete} />
            )}
          </AnimatedSection>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              {/* Reassurance */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
                <h3 className="text-base font-bold text-[var(--color-foreground)] mb-3">You don&apos;t need to have everything figured out.</h3>
                <p className="text-[var(--color-foreground-secondary)] text-sm leading-relaxed">
                  Tell us what you know about your business and what you&apos;re trying to achieve. We&apos;ll ask the right questions and help define the right solution.
                </p>
              </div>

              {/* Direct contact */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
                <h3 className="text-sm font-bold text-[var(--color-foreground)] mb-1">Prefer email?</h3>
                <a href="mailto:hello@growwera.com" className="text-[var(--color-accent)] text-sm font-medium hover:underline">
                  hello@growwera.com
                </a>
              </div>

              {/* What happens next */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
                <h3 className="text-sm font-bold text-[var(--color-foreground)] mb-4">What happens next</h3>
                <ul className="space-y-3">
                  {[
                    "We review your enquiry",
                    "We may ask a few follow-up questions",
                    "We prepare a clear proposal",
                    "We schedule a call if needed",
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-foreground-secondary)]">
                      <span className="w-5 h-5 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-bold rounded-full flex items-center justify-center shrink-0 border border-[var(--color-accent)]/30">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
