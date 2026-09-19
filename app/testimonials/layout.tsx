import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what clients and businesses have to say about working with Growwera.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}