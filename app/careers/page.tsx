import type { Metadata } from "next";
import { Check } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  brandImages,
  careerRoles
} from "../site-content";

export const metadata: Metadata = {
  title: "Caregiver Careers",
  description:
    "Apply for caregiver, homemaker, companion, respite caregiver, and CNA opportunities with PRN Staffers Alabama in Alabama."
};

export default function CareersPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Careers</p>
        <h1>Meaningful caregiver jobs across Alabama.</h1>
        <p>
          PRN Staffers Alabama welcomes caregivers, homemakers, companions, and
          CNAs who want to help families feel supported at home.
        </p>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Join our team</p>
          <h2>Bring compassion, reliability, and respect to every visit.</h2>
          <p>
            Caregiving is personal work. We value people who communicate well,
            show up with kindness, and treat every client with dignity.
          </p>
          <ul className="check-list">
            {careerRoles.map((role) => (
              <li key={role}>
                <Check size={18} aria-hidden="true" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="image-panel">
          <img
            src={brandImages.team}
            alt="Care team joining hands together"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
