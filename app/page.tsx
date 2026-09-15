import type { Metadata } from "next";
import WelcomeToGrowth from "@/components/sections/WelcomeToGrowth";
import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import WhyGrowwera from "@/components/sections/WhyGrowwera";
import ProcessSection from "@/components/sections/ProcessSection";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Growwera — Digital Solutions for Growing Businesses",
  description:
    "Growwera builds websites, SEO strategies, digital marketing campaigns, and AI & automation solutions tailored to what your business actually needs.",
};

export default function HomePage() {
  return (
    <>
      <WelcomeToGrowth />
      <Hero />
      <ClientMarquee />
      <ServicesSection />
      <WorkSection />
      <WhyGrowwera />
      <ProcessSection />
      <WhoWeWorkWith />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
