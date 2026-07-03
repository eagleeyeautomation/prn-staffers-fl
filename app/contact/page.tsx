import type { Metadata } from "next";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  contactEmail,
  serviceAreas,
  tagline
} from "../site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PRN Staffers Alabama for non-medical home care questions across Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties."
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow">{tagline}</p>
        <h1>Start a home care conversation with PRN Staffers Alabama.</h1>
        <p>
          Families, veterans, referral partners, and caregivers can reach out
          for help understanding non-medical home care options across southeast
          Alabama.
        </p>
      </section>

      <section className="section grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-5">
          <article className="service-card">
            <Mail size={24} aria-hidden="true" />
            <h2>Email the care team</h2>
            <p>
              Send care questions, referral details, or caregiver interest to{" "}
              <a className="font-black text-[#003b73]" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              .
            </p>
          </article>
          <article className="service-card">
            <MapPin size={24} aria-hidden="true" />
            <h2>SARCOA service area</h2>
            <p>
              PRN Staffers Alabama supports families in Barbour, Coffee,
              Covington, Dale, Geneva, Henry, and Houston counties.
            </p>
          </article>
          <article className="service-card">
            <ShieldCheck size={24} aria-hidden="true" />
            <h2>What to include</h2>
            <p>
              Share the county, care needs, preferred schedule, and whether the
              request is for a senior, veteran, family caregiver, or career
              opportunity.
            </p>
          </article>
        </div>

        <div className="rounded-[8px] border border-[#d8e9f3] bg-white p-6 shadow-[0_22px_70px_rgba(0,59,115,0.14)] md:p-8">
          <p className="eyebrow">Inquiry details</p>
          <h2 className="!text-[clamp(30px,4vw,46px)]">Send a clear care request.</h2>
          <form
            action={`mailto:${contactEmail}`}
            className="grid gap-4"
            encType="text/plain"
            method="post"
          >
            <label className="grid gap-2 font-extrabold text-[#08233f]">
              Name
              <input
                className="min-h-12 rounded-[8px] border border-[#d8e9f3] px-4 font-semibold outline-none focus:border-[#003b73]"
                name="name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 font-extrabold text-[#08233f]">
              Email
              <input
                className="min-h-12 rounded-[8px] border border-[#d8e9f3] px-4 font-semibold outline-none focus:border-[#003b73]"
                name="email"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2 font-extrabold text-[#08233f]">
              County
              <select
                className="min-h-12 rounded-[8px] border border-[#d8e9f3] bg-white px-4 font-semibold outline-none focus:border-[#003b73]"
                name="county"
                required
              >
                <option value="">Select a county</option>
                {serviceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
                <option value="Other Alabama county">Other Alabama county</option>
              </select>
            </label>
            <label className="grid gap-2 font-extrabold text-[#08233f]">
              Message
              <textarea
                className="min-h-36 rounded-[8px] border border-[#d8e9f3] px-4 py-3 font-semibold outline-none focus:border-[#003b73]"
                name="message"
                required
              />
            </label>
            <button className="button primary w-fit" type="submit">
              Email PRN Staffers Alabama
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
