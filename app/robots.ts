import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

const canonicalSiteUrl = getSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${canonicalSiteUrl}/sitemap.xml`
  };
}
