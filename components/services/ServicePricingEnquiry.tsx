"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

interface ServicePricingEnquiryProps {
  serviceId: "web-development" | "seo" | "digital-marketing" | "ai-automation";
  serviceName: string;
  customHeadline?: string;
}

export default function ServicePricingEnquiry({
  serviceId,
  serviceName,
  customHeadline,
}: ServicePricingEnquiryProps) {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2.5rem] bg-[#06070a] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden text-white shadow-[0_24px_70px_rgba(0,0,0,0.85)] text-center">
          {/* Ambient Blue Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 select-none">
                NOT SURE WHAT THIS WILL COST?
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 max-w-2xl mx-auto leading-tight">
              {customHeadline || "Every business and project is different."}
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed mb-8">
              Tell us what you&apos;re trying to achieve, and we&apos;ll understand
              your requirements before discussing the right approach.
            </p>

            <div>
              <Link
                href={`/contact?service=${serviceId}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#315CFF] hover:bg-[#2446D8] transition-all duration-200 shadow-[0_4px_20px_rgba(49,92,255,0.45),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire for Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
