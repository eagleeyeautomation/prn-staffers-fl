import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for PRN Staffers Alabama website visitors."
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Privacy</p>
        <h1>Your family’s information should be treated with respect.</h1>
        <p>
          PRN Staffers Alabama respects visitor privacy and keeps this website
          focused on general company, service, and service-area information.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>How information is used</h2>
          <p>
            This temporary website version is informational only and does not
            collect visitor submissions. We do not sell visitor information.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
