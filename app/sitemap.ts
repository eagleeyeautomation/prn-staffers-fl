import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eagleeyeautomation.com/";
const canonicalSiteUrl = siteUrl.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/contact", priority: 0.9 }
  ];

  return routes.map(({ path, priority }) => ({
    url: `${canonicalSiteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority
  }));
}
