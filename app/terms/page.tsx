import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-content";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms information for PRN Staffers Florida website visitors and prospective clients."
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
          services and caregiver opportunities with PRN Staffers Florida.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Care and employment details</h2>
          <p>
            Specific care services, schedules, caregiver roles, and terms are
            confirmed through direct communication and written agreements where
            applicable.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
