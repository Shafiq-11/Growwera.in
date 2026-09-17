"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  mobile_number: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
}

const services = [
  "Web Design & Development",
  "SEO",
  "Digital Marketing",
  "AI & Automation",
  "Not sure yet",
];

const budgets = [
  "Under ₹50,000 / < £500",
  "₹50,000 – ₹1,50,000 / £500 – £1,500",
  "₹1,50,000 – ₹5,00,000 / £1,500 – £5,000",
  "₹5,00,000+ / £5,000+",
  "Flexible / Prefer to discuss",
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

  const goalToServiceMap: Record<string, string> = {
    "I need a website": "Web Design & Development",
    "I want more customers": "Digital Marketing",
    "I want to rank on Google": "SEO",
    "I want to improve my digital presence": "Digital Marketing",
    "I want to automate repetitive work": "AI & Automation",
    "I have an idea for a software/product": "Web Design & Development",
    "I'm not sure yet": "Not sure yet",
  };

  const handleSubmit = () => {
    const matchedService = goalToServiceMap[goal] || (services.includes(goal) ? goal : "Not sure yet");
    onComplete({
      services: [matchedService],
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
              className="px-5 py-2.5 bg-[var(--color-accent)] text-black text-sm font-bold rounded-full hover:bg-[var(--color-accent-hover)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
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

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function ContactForm({ prefillData }: { prefillData?: Partial<FormData> }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string | null>(null);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [form, setForm] = useState<FormData>({
    name: "",
    mobile_number: "",
    email: "",
    company: "",
    services: prefillData?.services || [],
    budget: "",
    timeline: "",
    description: prefillData?.description || "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  useEffect(() => {
    if (prefillData?.services && prefillData.services.length > 0) {
      setForm((prev) => ({ ...prev, services: prefillData.services || prev.services }));
    }
    if (prefillData?.description) {
      setForm((prev) => ({ ...prev, description: prefillData.description || prev.description }));
    }
  }, [prefillData]);

  const toggleService = (s: string) => {
    setForm((prev) => {
      const current = prev.services || [];
      if (s === "Not sure yet") {
        return {
          ...prev,
          services: current.includes("Not sure yet") ? [] : ["Not sure yet"],
        };
      } else {
        const withoutNotSure = current.filter((item) => item !== "Not sure yet");
        const nextServices = withoutNotSure.includes(s)
          ? withoutNotSure.filter((item) => item !== s)
          : [...withoutNotSure, s];
        return {
          ...prev,
          services: nextServices,
        };
      }
    });
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // 1. Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // 2. Mobile Number validation (Indian mobile format: 10 digits starting with 6-9)
    if (!form.mobile_number.trim()) {
      newErrors.mobile_number = "Please enter your mobile number.";
    } else {
      const stripped = form.mobile_number.trim().replace(/[\s\-\(\)\.]/g, "");
      const indianMobileRegex = /^(?:\+91|91|0)?([6-9]\d{9})$/;
      if (!indianMobileRegex.test(stripped)) {
        newErrors.mobile_number = "Please enter a valid mobile number.";
      }
    }

    // 3. Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    // 4. Service validation
    if (!form.services || form.services.length === 0) {
      newErrors.services = "Please select at least one service.";
    }

    // 5. Message validation
    if (!form.description.trim()) {
      newErrors.description = "Please describe your project or requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");
    setErrorMessage("");
    setWhatsappRedirectUrl(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Format values for pre-filled WhatsApp message
        const rawMobile = form.mobile_number.trim();
        const strippedMatch = rawMobile
          .replace(/[\s\-\(\)\.]/g, "")
          .match(/(?:(?:\+91|91|0))?([6-9]\d{9})$/);
        const displayMobile = strippedMatch ? strippedMatch[1] : rawMobile;
        const serviceFormatted =
          form.services && form.services.length > 0
            ? form.services.join(", ")
            : "General Enquiry";

        // Required pre-filled WhatsApp message format
        const whatsAppText =
          `Hi Growwera 👋\n` +
          `New enquiry from your website:\n` +
          `Name: ${form.name.trim()}\n` +
          `Mobile: ${displayMobile}\n` +
          `Email: ${form.email.trim()}\n` +
          `Service: ${serviceFormatted}\n` +
          `Message:\n` +
          `${form.description.trim()}`;

        // Construct standard WhatsApp wa.me click-to-chat URL
        const rawNumber =
          process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919092198835";
        const whatsappNumber = rawNumber.replace(/[^0-9]/g, "");
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsAppText
        )}`;

        // Open WhatsApp in a new tab/window
        if (typeof window !== "undefined") {
          window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        }

        setWhatsappRedirectUrl(whatsappUrl);
        setSubmittedEnquiryId(data.enquiryId || null);
        setFormState("success");

        // Reset form ONLY after successful submission
        setForm({
          name: "",
          mobile_number: "",
          email: "",
          company: "",
          services: [],
          budget: "",
          timeline: "",
          description: "",
        });
        setErrors({});
      } else {
        // Supabase submission failed - do NOT open WhatsApp, keep form data intact
        setErrorMessage(
          data.error ||
            "Something went wrong while saving your enquiry to Supabase. Please try again."
        );
        setFormState("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage(
        "Could not connect to the server. Please check your connection and try again."
      );
      setFormState("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    cn(
      "w-full px-4 py-3 border rounded-xl text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors",
      errors[field]
        ? "border-rose-500/70 bg-rose-500/10"
        : "border-[var(--color-border)] bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-strong)]"
    );

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 sm:p-9 space-y-6 shadow-[var(--shadow-paper)]" noValidate>
      {/* Small Success Indication */}
      {formState === "success" && (
        <div className="p-4 sm:p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-left space-y-3 shadow-xs animate-in fade-in duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-bold text-[var(--color-foreground)]">
                Enquiry saved successfully!
              </p>
              <p className="text-xs sm:text-sm text-[var(--color-foreground-secondary)] mt-0.5 leading-relaxed">
                Your enquiry was saved to our database{submittedEnquiryId ? ` (Ref: ${submittedEnquiryId})` : ""}. WhatsApp is opening with your pre-filled message.
              </p>
            </div>
          </div>
          {whatsappRedirectUrl && (
            <div className="pt-2.5 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[var(--color-foreground-muted)]">
                Didn&apos;t open automatically?
              </span>
              <a
                href={whatsappRedirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-[#20bd5a] transition-all shadow-xs cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                Send via WhatsApp
                <ArrowRight size={13} />
              </a>
            </div>
          )}
        </div>
      )}
      {/* Name + Mobile */}
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
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="mobile_number">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="mobile_number"
            type="tel"
            autoComplete="tel"
            value={form.mobile_number}
            onChange={(e) => setForm({ ...form, mobile_number: e.target.value })}
            className={inputClass("mobile_number")}
            placeholder="+91 98765 43210"
          />
          {errors.mobile_number && <p className="mt-1 text-xs text-rose-500">{errors.mobile_number}</p>}
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div>
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="company">
            Company / Business (optional)
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputClass("company")}
            placeholder="Your company name"
          />
        </div>
      </div>

      {/* Services */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-[var(--color-foreground)]">
            What do you need? <span className="text-rose-500">*</span>
          </label>
          <span className="text-xs text-[var(--color-foreground-muted)]">
            Select all that apply
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const isSelected = form.services.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  toggleService(s);
                  if (errors.services) {
                    setErrors((prev) => ({ ...prev, services: undefined }));
                  }
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full border transition-all cursor-pointer flex items-center gap-1.5",
                  isSelected
                    ? "bg-[var(--color-accent)] text-black font-bold border-[var(--color-accent)] shadow-sm"
                    : "bg-[var(--color-surface-elevated)] text-[var(--color-foreground-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
                )}
              >
                {isSelected && <CheckCircle2 size={14} className="text-black shrink-0" />}
                {s}
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className="mt-2 text-xs text-rose-500">{errors.services}</p>
        )}
        {form.services.includes("Not sure yet") && (
          <p className="mt-3 text-xs text-[var(--color-foreground-secondary)] bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-xl p-3 flex items-start gap-2 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0 mt-1.5" />
            That&apos;s completely normal. Most clients don&apos;t know the exact technical solution when they start. Just describe your goals or challenges below, and we&apos;ll recommend the right direction.
          </p>
        )}
      </div>

      {/* Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="budget">
            Budget (optional)
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] bg-[var(--color-surface-elevated)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
          >
            <option value="" className="bg-[var(--color-surface)]">Select a budget range</option>
            {budgets.map((b) => <option key={b} value={b} className="bg-[var(--color-surface)]">{b}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="timeline">
            Timeline (optional)
          </label>
          <select
            id="timeline"
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] bg-[var(--color-surface-elevated)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
          >
            <option value="" className="bg-[var(--color-surface)]">Select a timeline</option>
            {timelines.map((t) => <option key={t} value={t} className="bg-[var(--color-surface)]">{t}</option>)}
          </select>
        </div>
      </div>

      {/* Message / Requirements */}
      <div>
        <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2" htmlFor="description">
          Message / Requirements <span className="text-rose-500">*</span>
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

      {/* Error state */}
      {formState === "error" && (
        <div className="flex items-start gap-3 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
          <AlertCircle size={18} className="text-rose-500 mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-rose-500">Submission failed</p>
            <p className="text-sm text-rose-500/90 mt-0.5">
              {errorMessage || "Please try again or email us directly at "}
              <a href="mailto:hello@growwera.com" className="underline text-rose-500 font-medium ml-1">hello@growwera.com</a>
            </p>
            <p className="text-xs text-[var(--color-foreground-muted)] mt-1.5">
              Your entered information has been kept intact above so you don&apos;t lose your inputs.
            </p>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-[var(--color-accent)] text-black text-base font-bold rounded-xl hover:bg-[var(--color-accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_4px_16px_rgba(245,186,39,0.3)] cursor-pointer"
      >
        {formState === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
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
    initialService ? { services: [initialService] } : undefined
  );
  const [activeMode, setActiveMode] = useState<"direct" | "discovery">("direct");

  useEffect(() => {
    if (serviceParam && serviceMap[serviceParam.toLowerCase()]) {
      const matched = serviceMap[serviceParam.toLowerCase()];
      setPrefillData((prev) => ({ ...prev, services: [matched] }));
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
