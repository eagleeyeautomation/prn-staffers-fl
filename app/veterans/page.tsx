import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  services
} from "../site-content";

export const metadata: Metadata = {
  title: "Veterans Support",
  description:
    "Veterans support and non-medical home care guidance for families in Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties."
};

export default function VeteransPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Veterans support</p>
        <h1>Respectful home care support for veterans and their families.</h1>
        <p>
          PRN Staffers Alabama can help veterans and families explore
          non-medical home care options, available resources, and practical
          support at home.
        </p>
      </section>

      <section className="section veterans-highlight page-highlight">
        <div>
          <p className="eyebrow">Guidance and care</p>
          <h2>Support for safer routines, family peace of mind, and dignity at home.</h2>
          <p>
            Veterans and their families may need help understanding care options,
            coordinating non-medical support, or creating a plan that helps a
            loved one remain comfortable at home.
          </p>
        </div>
        <ShieldCheck size={96} aria-hidden="true" />
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Common support</p>
          <h2>Non-medical care services veterans and families may use.</h2>
        </div>
        <div className="card-grid services-grid">
          {services.slice(0, 8).map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Start here</p>
          <h2>Explore care options with a team that listens.</h2>
          <ul className="check-list">
            {[
              "Non-medical home care planning",
              "Family support and communication",
              "Help understanding available resources"
            ].map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
