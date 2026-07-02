import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-content";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms information for PRN Staffers Alabama website visitors and prospective clients."
};

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Terms</p>
        <h1>Website information for families and caregivers.</h1>
        <p>
          This website provides general information about non-medical home care
          services and company information for PRN Staffers Alabama.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Care and company details</h2>
          <p>
            Specific care services, schedules, caregiver roles, and terms are
            confirmed through written agreements where applicable.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
