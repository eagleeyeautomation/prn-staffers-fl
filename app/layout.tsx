import type { Metadata } from "next";
import Script from "next/script";
import { getSiteUrl } from "./site-url";
import "./globals.css";

const canonicalSiteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(`${canonicalSiteUrl}/`),
  title: {
    default: "PRN Staffers Florida | Home Care Across Florida",
    template: "%s | PRN Staffers Florida"
  },
  alternates: {
    canonical: `${canonicalSiteUrl}/`
  },
  description:
    "PRN Staffers Florida provides trusted non-medical home care, personal care, companion care, respite care, and family support across Florida.",
  keywords: [
    "home care Florida",
    "Florida home care",
    "personal care Florida",
    "companion care Florida",
    "respite care Florida",
    "senior care Florida",
    "non-medical home care Florida",
    "veterans home care Florida"
  ],
  openGraph: {
    title: "PRN Staffers Florida",
    description:
      "Care You Can Trust. Non-medical home care for seniors, veterans, and families across Florida.",
    url: `${canonicalSiteUrl}/`,
    siteName: "PRN Staffers Florida",
    images: [
      {
        url: "/images/prn/florida-caregiver-hero.png",
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
    title: "PRN Staffers Florida",
    description:
      "Trusted non-medical home care, personal care, companion care, respite care, and family support across Florida.",
    images: [
      "/images/prn/florida-caregiver-hero.png"
    ]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeHealthCareService",
  name: "PRN Staffers Florida",
  url: canonicalSiteUrl,
  slogan: "Care You Can Trust",
  areaServed: [
    "Florida",
    "North Florida",
    "Central Florida",
    "South Florida",
    "Florida Gulf Coast",
    "Atlantic Coast communities"
  ],
  description:
    "Non-medical home care provider serving seniors, veterans, and families across Florida.",
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
          data-widget-id="6a4542d78acf50dff38c7f13"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
