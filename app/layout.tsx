import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { company, seoKeywords, services, siteConfig } from "./site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Carina Stuenes | Holistisk hälsa och välmående",
    template: "%s | Carina Stuenes",
  },
  description:
    "Terapeutiska behandlingar, yoga och mindfulness med holistiskt fokus på kropp och sinne.",
  keywords: seoKeywords,
  category: "health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Carina Stuenes | Holistisk hälsa och välmående",
    description:
      "Terapeutiska behandlingar, yoga och mindfulness med fokus på balans i kropp och sinne.",
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Carina Stuenes - Holistisk hälsa och välmående",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carina Stuenes | Holistisk hälsa och välmående",
    description:
      "Terapeutiska behandlingar, yoga och mindfulness med fokus på balans i kropp och sinne.",
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: company.name,
  description:
    "Terapeutiska behandlingar, yoga och mindfulness med holistiskt fokus på kropp och sinne.",
  url: siteConfig.siteUrl,
  email: company.email,
  telephone: company.phone,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: company.phone,
      email: company.email,
      areaServed: "SE",
      availableLanguage: ["sv"],
    },
  ],
  areaServed: "SE",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjänster",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="site-shell min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
