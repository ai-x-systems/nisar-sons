import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nisarsons.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products/dormer-a100-hss-drill-bit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
