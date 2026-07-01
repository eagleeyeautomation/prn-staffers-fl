import type { Metadata } from "next";
import Script from "next/script";
import { getSiteUrl } from "./site-url";
import "./globals.css";

const canonicalSiteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(`${canonicalSiteUrl}/`),
  title: {
    default: "PRN Staffers Alabama | Home Care Across Alabama",
    template: "%s | PRN Staffers Alabama"
  },
  alternates: {
    canonical: `${canonicalSiteUrl}/`
  },
  description:
    "PRN Staffers Alabama provides trusted non-medical home care in Birmingham, Montgomery, Huntsville, Mobile, Tuscaloosa, and surrounding Alabama communities, including personal care, companionship, respite care, errands, transportation, and veterans support.",
  keywords: [
    "home care Alabama",
    "home care Birmingham AL",
    "home care Montgomery AL",
    "home care Huntsville AL",
    "senior care Alabama",
    "non-medical home care Alabama",
    "respite care Alabama",
    "caregiver jobs Alabama"
  ],
  openGraph: {
    title: "PRN Staffers Alabama",
    description:
      "Care You Can Trust. Non-medical home care for seniors, veterans, and families across Alabama.",
    url: `${canonicalSiteUrl}/`,
    siteName: "PRN Staffers Alabama",
    images: [
      {
        url: "/images/prn/alabama-caregiver-hero.png",
        width: 1200,
        height: 800,
        alt: "Compassionate home care support"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PRN Staffers Alabama",
    description:
      "Trusted non-medical home care in Birmingham, Montgomery, Huntsville, Mobile, Tuscaloosa, and surrounding Alabama communities.",
    images: [
      "/images/prn/alabama-caregiver-hero.png"
    ]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeHealthCareService",
  name: "PRN Staffers Alabama",
  url: canonicalSiteUrl,
  slogan: "Care You Can Trust",
  areaServed: [
    "Birmingham AL",
    "Montgomery AL",
    "Huntsville AL",
    "Mobile AL",
    "Tuscaloosa AL",
    "Hoover AL",
    "Auburn AL",
    "Alabama"
  ],
  description:
    "Non-medical home care provider serving seniors, veterans, and families across Alabama.",
  serviceType: [
    "Personal care",
    "Companionship",
    "Respite care",
    "Meal preparation",
    "Light housekeeping",
    "Medication reminders",
    "Transportation and errands",
    "Veterans support",
    "Family support",
    "Non-medical home care"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a452da652b633f8610a7e14"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
