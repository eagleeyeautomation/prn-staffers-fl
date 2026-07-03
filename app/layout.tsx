import type { Metadata } from "next";
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
    "PRN Staffers Alabama partners with SARCOA to provide trusted non-medical home care in Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties in Alabama.",
  keywords: [
    "home care Alabama",
    "home care southeast Alabama",
    "home care Dothan AL",
    "SARCOA home care",
    "Houston County AL home care",
    "Coffee County AL home care",
    "senior care Alabama",
    "non-medical home care Alabama",
    "respite care Alabama"
  ],
  openGraph: {
    title: "PRN Staffers Alabama",
    description:
      "Care You Can Trust. Non-medical home care for seniors, veterans, and families in southeast Alabama through a SARCOA partnership.",
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
      "Trusted non-medical home care in Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties.",
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
    "Barbour County AL",
    "Coffee County AL",
    "Covington County AL",
    "Dale County AL",
    "Geneva County AL",
    "Henry County AL",
    "Houston County AL"
  ],
  description:
    "Non-medical home care provider partnering with SARCOA to serve seniors, veterans, and families in southeast Alabama.",
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
      </body>
    </html>
  );
}
