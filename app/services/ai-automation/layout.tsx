import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation Services",
  description:
    "Growwera builds AI assistants, workflow automation, business automation, AI integrations, and custom internal tools to make repetitive business work smarter.",
  alternates: {
    canonical: "/services/ai-automation",
  },
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}