import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services",
  description:
    "Growwera provides technical SEO, on-page SEO, local SEO, keyword strategy, and SEO monitoring to improve your business's search visibility.",
  alternates: {
    canonical: "/services/seo",
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}