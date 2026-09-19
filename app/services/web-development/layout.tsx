import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Growwera builds modern, responsive business websites, landing pages, e-commerce websites, portfolios, and web applications designed to convert visitors into customers.",
  alternates: {
    canonical: "/services/web-development",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}