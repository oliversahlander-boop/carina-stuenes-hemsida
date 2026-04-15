import type { Metadata } from "next";
import { seoKeywords, siteConfig } from "./site-data";

type CreatePageMetadataArgs = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataArgs): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    keywords: seoKeywords,
    authors: [{ name: "Carina Stuenes", url: siteConfig.siteUrl }],
    creator: "Carina Stuenes",
    publisher: "Health Stuenes",
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      type: "website",
      locale: siteConfig.locale,
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Carina Stuenes – Holistisk hälsa och välmående",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.defaultOgImage],
    },
  };
}
