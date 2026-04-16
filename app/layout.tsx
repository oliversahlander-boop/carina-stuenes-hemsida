import type { Metadata, Viewport } from "next";
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
  applicationName: siteConfig.siteName,
  title: {
    default: "Carina Stuenes | Holistisk hälsa och välmående",
    template: "%s | Carina Stuenes",
  },
  icons: {
    icon: [
      {
        url: "/favicon-health-v3.png?v=4",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon-health-v3.png?v=4",
    apple: "/apple-touch-icon-health-v3.png?v=4",
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
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A120D",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${siteConfig.siteUrl}/#business`,
  name: "Health Stuenes",
  alternateName: company.name,
  description:
    "Holistiska behandlingar i Stockholm och Östersund. Massage, koppning, biomagnetism, yoga och mindfulness anpassat efter dig.",
  url: siteConfig.siteUrl,
  email: company.email,
  telephone: `+46${company.phone.replace(/^0/, "")}`,
  priceRange: "$$",
  image: `${siteConfig.siteUrl}/carina-1.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Olof Dalins väg 6",
    postalCode: "112 52",
    addressLocality: "Stockholm",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.3251,
    longitude: 18.0425,
  },
  location: [
    {
      "@type": "Place",
      name: "Health Stuenes Stockholm",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Olof Dalins väg 6",
        postalCode: "112 52",
        addressLocality: "Stockholm",
        addressCountry: "SE",
      },
    },
    {
      "@type": "Place",
      name: "Health Stuenes Östersund",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pastorsgatan 3",
        postalCode: "831 35",
        addressLocality: "Östersund",
        addressCountry: "SE",
      },
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+46${company.phone.replace(/^0/, "")}`,
      email: company.email,
      areaServed: "SE",
      availableLanguage: ["sv"],
    },
  ],
  areaServed: ["Stockholm", "Östersund", "Sverige"],
  founder: {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#carina`,
    name: "Carina Stuenes",
    jobTitle: "Holistisk terapeut",
    description:
      "Certifierad massageterapeut och holistisk terapeut med erfarenhet av massage, biomagnetism, koppning och yoga.",
    url: `${siteConfig.siteUrl}/om-oss`,
    image: `${siteConfig.siteUrl}/carina-1.jpeg`,
    worksFor: {
      "@id": `${siteConfig.siteUrl}/#business`,
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Behandlingar & tjänster",
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service,
        provider: { "@id": `${siteConfig.siteUrl}/#business` },
      },
    })),
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  url: siteConfig.siteUrl,
  name: "Health Stuenes",
  description:
    "Holistiska behandlingar, yoga och mindfulness för dig som söker balans och återhämtning.",
  inLanguage: "sv-SE",
  publisher: { "@id": `${siteConfig.siteUrl}/#business` },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1 min-h-screen bg-[#1A120D] text-[#F5F1EB]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
