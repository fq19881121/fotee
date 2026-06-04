import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fotoee.publish",
      lastModified: new Date("2026-06-04"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
