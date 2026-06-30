import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://eagleeyeautomation.com";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eagle Eye Automation | Business Automation Agency",
    template: "%s | Eagle Eye Automation"
  },
  description:
    "Eagle Eye Automation designs practical automations for lead follow-up, client onboarding, operations, reporting, and revenue workflows.",
  openGraph: {
    title: "Eagle Eye Automation",
    description:
      "Automation systems that help service businesses respond faster, reduce manual work, and operate with more clarity.",
    url: "https://eagleeyeautomation.com",
    siteName: "Eagle Eye Automation",
    images: [
      {
        url: "/images/automation-command-center.png",
        width: 1536,
        height: 1024,
        alt: "A modern automation command center with workflow dashboards"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Eye Automation",
    description:
      "Production-ready automation systems for service businesses that want fewer manual handoffs and faster follow-up.",
    images: ["/images/automation-command-center.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
