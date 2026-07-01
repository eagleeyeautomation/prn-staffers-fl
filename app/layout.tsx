import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eagleeyeautomation.com/";
const canonicalSiteUrl = siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(`${canonicalSiteUrl}/`),
  title: {
    default: "Eagle Eye Automation | AI, CRM, Websites, and Dashboards",
    template: "%s | Eagle Eye Automation"
  },
  description:
    "Eagle Eye Automation builds AI receptionists, workflow automations, GoHighLevel CRM systems, business websites, dashboards, and custom software.",
  icons: {
    icon: "/images/eagle-eye-automation-icon.png",
    apple: "/images/eagle-eye-automation-icon.png"
  },
  openGraph: {
    title: "Eagle Eye Automation",
    description:
      "AI, automation, CRM, web, dashboard, and custom software systems for businesses that want sharper operations.",
    url: `${canonicalSiteUrl}/`,
    siteName: "Eagle Eye Automation",
    images: [
      {
        url: "/images/eagle-eye-automation-logo.png",
        width: 1748,
        height: 899,
        alt: "Eagle Eye Automation logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Eye Automation",
    description:
      "AI receptionists, workflow automation, GoHighLevel CRM, websites, dashboards, and custom business software.",
    images: ["/images/eagle-eye-automation-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
