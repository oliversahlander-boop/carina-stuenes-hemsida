import type { MetadataRoute } from "next";
import { siteConfig } from "./site-data";

const pages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "",          priority: 1.0, changeFrequency: "weekly" },
  { path: "/tjanster", priority: 0.9, changeFrequency: "monthly" },
  { path: "/om-oss",   priority: 0.8, changeFrequency: "monthly" },
  { path: "/kontakt",  priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq",      priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
