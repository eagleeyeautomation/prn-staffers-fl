import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import {
  ContactForm,
  SiteFooter,
  SiteHeader,
  brandImages,
  careerRoles,
  getContactDetails
} from "../site-content";

export const metadata: Metadata = {
  title: "Caregiver Careers",
  description:
    "Apply for caregiver, homemaker, companion, respite caregiver, and CNA opportunities with PRN Staffers Florida in Florida."
};

export default function CareersPage() {
  const { careersHref } = getContactDetails();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Careers</p>
        <h1>Meaningful caregiver jobs across Florida.</h1>
        <p>
          PRN Staffers Florida welcomes caregivers, homemakers, companions, and
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
          <a className="button primary" href={careersHref}>
            Apply as a Caregiver
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="image-panel">
          <img
            src={brandImages.team}
            alt="Care team joining hands together"
          />
        </div>
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Apply today</p>
          <h2>Tell us about your caregiving experience.</h2>
          <p>
            Share your availability, experience, and the communities where you
            are able to work.
          </p>
        </div>
        <ContactForm context="career" />
      </section>
      <SiteFooter />
    </main>
  );
}
