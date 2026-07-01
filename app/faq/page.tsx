import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  faqs,
  getContactDetails
} from "../site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about non-medical home care, respite care, veterans support, service areas, and caregiver jobs with PRN Staffers Florida."
};

export default function FAQPage() {
  const { consultationHref } = getContactDetails();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">FAQ</p>
        <h1>Home care questions, answered clearly.</h1>
        <p>
          Learn more about non-medical home care, service areas, veterans
          support, respite care, and caregiver jobs.
        </p>
      </section>

      <section className="section faq-section">
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Still have questions?</p>
          <h2>We can help you think through the next step.</h2>
        </div>
        <a className="button primary" href={consultationHref}>
          Request a Free Consultation
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
