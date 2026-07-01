const productionSiteUrl = "https://prnstaffersfl.com";
const developmentSiteUrl = "http://localhost:3000";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/$/, "");
}

export function getSiteUrl() {
  if (process.env.NODE_ENV === "production") {
    return productionSiteUrl;
  }

  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? developmentSiteUrl
  );
}

export { productionSiteUrl };
