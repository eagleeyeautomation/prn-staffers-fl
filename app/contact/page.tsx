import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import {
  ContactForm,
  SiteFooter,
  SiteHeader,
  getContactDetails,
  serviceAreas
} from "../site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PRN Staffers Florida to request non-medical home care in Florida communities."
};

export default function ContactPage() {
  const { contactEmail, contactPhone, contactPhoneHref } = getContactDetails();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Request home care support for your family.</h1>
        <p>
          Tell us what kind of support is needed and where care is needed. PRN
          Staffers Florida serves seniors, veterans, adult children, and family
          caregivers across Florida communities.
        </p>
      </section>

      <section className="contact-section contact-page-section">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Start with a compassionate conversation.</h2>
          <p>
            Reach out for care questions, family support, veterans support, or
            caregiver job opportunities.
          </p>
          <div className="contact-options">
            <a href={contactPhoneHref}>
              <Phone size={18} aria-hidden="true" />
              {contactPhone}
            </a>
            <a href={`mailto:${contactEmail}`}>
              <Mail size={18} aria-hidden="true" />
              {contactEmail}
            </a>
          </div>
          <div className="area-pills compact">
            {serviceAreas.slice(0, 8).map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
