import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  brandImages,
  serviceAreas
} from "../site-content";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "PRN Staffers Alabama partners with SARCOA to serve Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties with non-medical home care."
};

export default function ServiceAreasPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">Service areas</p>
        <h1>Home care across southeast Alabama.</h1>
        <p>
          PRN Staffers Alabama partners with SARCOA to support seniors,
          veterans, adult children, and family caregivers across seven Alabama
          counties.
        </p>
      </section>

      <section className="section service-area-section">
        <div className="section-heading">
          <p className="eyebrow">Communities served</p>
          <h2>Care close to home.</h2>
        </div>
        <div className="image-panel location-image">
          <img
            src={brandImages.bridge}
            alt="Compassionate home care support for Alabama families"
          />
        </div>
        <div className="area-grid large">
          {serviceAreas.map((area) => (
            <span key={area}>
              <MapPin size={16} aria-hidden="true" />
              {area}
            </span>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
