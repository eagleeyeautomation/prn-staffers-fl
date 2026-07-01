import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  brandImages,
  getContactDetails,
  services
} from "../site-content";

export const metadata: Metadata = {
  title: "Home Care Services",
  description:
    "Non-medical home care services in Alabama, including personal care, companionship, respite care, meal preparation, errands, transportation, and medication reminders."
};

export default function ServicesPage() {
  const { consultationHref } = getContactDetails();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Non-medical home care services for safer, calmer days at home.</h1>
        <p>
          Flexible care for seniors, veterans, and families in Birmingham,
          Montgomery, Huntsville, Mobile, Tuscaloosa, and surrounding Alabama communities.
        </p>
      </section>

      <section className="section services-section">
        <div className="card-grid services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Care plans</p>
          <h2>Support can be built around daily routines and family priorities.</h2>
          <p>
            PRN Staffers Alabama focuses on non-medical care that helps with
            comfort, safety, companionship, and household routines.
          </p>
          <ul className="check-list">
            {[
              "Personalized support for each client",
              "Communication with families",
              "Flexible scheduling and respite support",
              "Care focused on dignity and independence"
            ].map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a className="button primary" href={consultationHref}>
            Request Care
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="image-panel">
          <img src={brandImages.personalCare} alt="Caregiver helping with meal preparation at home" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
