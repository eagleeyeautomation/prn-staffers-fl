import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for PRN Staffers Alabama website visitors, care inquiries, and caregiver applicants."
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Privacy</p>
        <h1>Your family’s information should be treated with respect.</h1>
        <p>
          PRN Staffers Alabama uses submitted information to respond to care
          inquiries, caregiver applications, and service questions.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>How information is used</h2>
          <p>
            Submitted details and care-request information are used for follow-up,
            consultation, hiring, and service communication. We do not sell
            visitor information.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
