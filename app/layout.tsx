import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrowweraLoader from "@/components/loading/GrowweraLoader";
import PaperBackground from "@/components/decorative/PaperBackground";
import ScrollProgress from "@/components/shared/ScrollProgress";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://growwera-in.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Growwera — Digital Solutions for Growing Businesses",
    template: "%s | Growwera",
  },
  description:
    "Growwera builds websites, SEO strategies, digital marketing campaigns, and AI & automation solutions — tailored to what your business actually needs.",
  keywords: [
    "web design",
    "web development",
    "SEO",
    "digital marketing",
    "AI automation",
    "business website",
    "Growwera",
  ],
  authors: [{ name: "Growwera" }],
  creator: "Growwera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Growwera",
    title: "Growwera — Digital Solutions for Growing Businesses",
    description:
      "Websites, SEO, digital marketing, AI and automation — built around what your business actually needs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growwera — Digital Solutions for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growwera — Digital Solutions for Growing Businesses",
    description:
      "Websites, SEO, digital marketing, AI and automation — built around what your business actually needs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${caveat.variable} dark scroll-smooth`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("growwera_theme");var t=s==="light"?"light":"dark";var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(t);d.setAttribute("data-theme",t);d.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-plus-jakarta)] antialiased bg-[var(--color-background)] text-[var(--color-foreground)] relative selection:bg-[var(--color-accent)]/25 selection:text-[var(--color-foreground)] min-h-screen flex flex-col">
        <ThemeProvider>
          <ScrollProgress />
          <GrowweraLoader />
          <PaperBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
