import type { Metadata } from "next";
import {
  SiteFooter,
  SiteHeader,
  faqs
} from "../site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about non-medical home care, respite care, veterans support, service areas, and caregiver jobs with PRN Staffers Alabama."
};

export default function FAQPage() {
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

      <SiteFooter />
    </main>
  );
}
