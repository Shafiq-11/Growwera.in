import { createPageMetadata } from "@/lib/seo";
import SEOPageClient from "@/components/services/SEOPageClient";

export const metadata = createPageMetadata({
  title: "SEO Services",
  description:
    "Growwera provides SEO strategies designed to improve search visibility, attract relevant traffic, and grow your business online.",
  path: "/services/seo",
});

export default function SEOPage() {
  return <SEOPageClient />;
}
