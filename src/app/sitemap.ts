import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://snacksnsips.com";

  return [
    { url: base, lastModified: "2026-02-24", changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: "2026-02-24", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/boards`, lastModified: "2026-02-24", changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/sips`, lastModified: "2026-02-24", changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/gallery`, lastModified: "2026-02-24", changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: "2026-02-24", changeFrequency: "monthly", priority: 0.8 },
  ];
}
