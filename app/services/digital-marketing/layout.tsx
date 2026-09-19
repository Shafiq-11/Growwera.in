import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Growwera helps businesses reach the right audience through campaign strategy, paid advertising, content strategy, conversion optimisation, and analytics.",
  alternates: {
    canonical: "/services/digital-marketing",
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}