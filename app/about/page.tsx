import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  brandImages,
  getContactDetails,
  reasons,
  tagline
} from "../site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PRN Staffers Florida, a compassionate non-medical home care provider partnering with community partners to serve Florida communities."
};

export default function AboutPage() {
  const { consultationHref } = getContactDetails();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">{tagline}</p>
        <h1>Local home care built on trust, dignity, and family support.</h1>
        <p>
          PRN Staffers Florida helps seniors, veterans, and families feel
          supported at home through dependable non-medical care across Florida.
        </p>
      </section>

      <section className="section split-section">
        <div className="image-panel">
          <img
            src={brandImages.team}
            alt="Hands joined together representing PRN Staffers Florida teamwork"
          />
        </div>
        <div>
          <p className="eyebrow">Our approach</p>
          <h2>Care should feel personal, respectful, and reliable.</h2>
          <p>
            Families deserve a care partner who listens first. PRN Staffers
            Florida builds support around each person’s routine, preferences,
            family needs, and home environment while serving local communities
            with dependable non-medical care.
          </p>
          <ul className="check-list">
            {reasons.slice(0, 4).map((reason) => (
              <li key={reason}>
                <Check size={18} aria-hidden="true" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
          <a className="button primary" href={consultationHref}>
            Request a Free Consultation
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="eyebrow">Mission</p>
          <h2>Helping families protect independence, safety, and comfort at home.</h2>
        </div>
        <p>
          Whether care is needed for a few hours, ongoing support, respite, or a
          transition after a change in health or routine, the goal is the same:
          help people remain at home with dignity and peace of mind.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
