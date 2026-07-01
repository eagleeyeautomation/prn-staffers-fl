import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

const canonicalSiteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/careers", priority: 0.85 },
    { path: "/veterans", priority: 0.85 },
    { path: "/service-areas", priority: 0.85 },
    { path: "/contact", priority: 0.9 },
    { path: "/faq", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 }
  ];

  return routes.map(({ path, priority }) => ({
    url: `${canonicalSiteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority
  }));
}
