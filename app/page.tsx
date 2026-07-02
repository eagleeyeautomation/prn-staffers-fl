import { Check, HeartHandshake, MapPin } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  brandImages,
  careSteps,
  faqs,
  reasons,
  serviceAreas,
  services,
  serviceArea,
  testimonials,
  trustItems
} from "./site-content";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src={brandImages.caregiver} alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Care You Can Trust</p>
          <h1>Compassionate Home Care in Alabama</h1>
          <p>
            PRN Staffers Alabama provides trusted non-medical home care,
            personal care, companion care, respite care, and support for
            families across Alabama.
          </p>
          <p className="location-line">{serviceArea}</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why families trust PRN Staffers Alabama">
        {trustItems.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={22} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section intro-section">
        <div>
          <p className="eyebrow">Local home care</p>
          <h2>Warm support for seniors, veterans, and families across southeast Alabama.</h2>
        </div>
        <p>
          Through our partnership with SARCOA, families often reach out when daily routines become harder, when a
          loved one needs companionship, or when family caregivers need relief.
          PRN Staffers Alabama helps create a safer, calmer home environment
          through compassionate non-medical support.
        </p>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Non-medical home care services shaped around real family needs.</h2>
          <p>
            Choose flexible support for daily routines, companionship, respite,
            errands, meal preparation, and family peace of mind.
          </p>
        </div>
        <div className="card-grid services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="image-panel">
          <img
            src={brandImages.bridge}
            alt="Compassionate home care support in Alabama"
          />
        </div>
        <div>
          <p className="eyebrow">Why families choose us</p>
          <h2>Trust, dignity, safety, reliability, compassion, and communication.</h2>
          <ul className="check-list">
            {reasons.map((reason) => (
              <li key={reason}>
                <Check size={18} aria-hidden="true" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">How care begins</p>
          <h2>A simple, respectful path from planning to care at home.</h2>
        </div>
        <div className="card-grid three-grid">
          {careSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section veterans-highlight">
        <div>
          <p className="eyebrow">Veterans support</p>
          <h2>Helping veterans and families explore care options with confidence.</h2>
          <p>
            PRN Staffers Alabama can support veterans and families as they
            explore non-medical home care options, available resources, and the
            practical help needed to remain safe and comfortable at home.
          </p>
        </div>
        <HeartHandshake size={92} aria-hidden="true" />
      </section>

      <section className="section split-section compassion-section">
        <div>
          <p className="eyebrow">Compassionate mission</p>
          <h2>Care built around heart, dignity, and Alabama family values.</h2>
          <p>
            From across Alabama, our work begins with listening. We help
            seniors, veterans, and adults receive the non-medical support they
            need while remaining connected to the homes and communities they
            love.
          </p>
        </div>
        <div className="image-panel portrait-image">
          <img
            src={brandImages.family}
            alt="Care team and family representing compassionate Alabama home care"
          />
        </div>
      </section>

      <section className="section careers-band">
        <div>
          <p className="eyebrow">Careers</p>
          <h2>Caregivers, homemakers, and CNAs are invited to apply.</h2>
          <p>
            If you believe care should be personal, respectful, and dependable,
            PRN Staffers Alabama would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section service-area-section">
        <div className="section-heading">
          <p className="eyebrow">Service areas</p>
          <h2>Partnering with SARCOA to serve seven southeast Alabama counties.</h2>
        </div>
        <div className="area-grid">
          {serviceAreas.map((area) => (
            <span key={area}>
              <MapPin size={16} aria-hidden="true" />
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Placeholder family stories until real reviews are added.</h2>
        </div>
        <div className="card-grid three-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p>“{testimonial.quote}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common home care questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 5).map((faq) => (
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
