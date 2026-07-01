import {
  ArrowRight,
  Check,
  Globe2,
  MailCheck,
  PhoneCall,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import Image from "next/image";

export const tagline = "Sharper systems. Faster growth.";

export const outcomes = [
  "AI-powered front office coverage",
  "CRM pipelines that match real operations",
  "Custom dashboards for faster decisions",
  "Software built around the business"
];

export const founderExperience = [
  "Home care expertise",
  "Real estate experience",
  "AI automation",
  "Business consulting"
];

export const serviceGroups = [
  {
    title: "AI & Automation",
    icon: Sparkles,
    items: ["AI Receptionists", "AI Chatbots", "Workflow Automation"],
    text: "AI systems that handle first response, answer common questions, qualify leads, and trigger the next step."
  },
  {
    title: "CRM",
    icon: Workflow,
    items: ["GoHighLevel Setup", "Pipeline Design", "Lead Automation"],
    text: "GoHighLevel and CRM builds that organize leads, appointments, follow-up, and client movement."
  },
  {
    title: "Web",
    icon: Globe2,
    items: ["Business Websites", "Landing Pages", "Client Portals"],
    text: "Professional web experiences built to convert attention into action and support client workflows."
  },
  {
    title: "Dashboards",
    icon: Target,
    items: [
      "Executive Dashboards",
      "KPI Reporting",
      "Custom Business Software"
    ],
    text: "Reporting and software tools that make performance, operations, and priorities easier to see."
  }
];

export const portfolioProjects = [
  {
    title: "PRN Staffers Command Center",
    type: "Operations software",
    text: "A command center concept for staffing visibility, scheduling activity, team coordination, and executive oversight.",
    details: ["Staffing visibility", "Operational dashboards", "Team coordination"]
  },
  {
    title: "AI Voice Receptionist",
    type: "AI automation",
    text: "A front-office voice workflow designed to answer calls, qualify leads, capture details, and route follow-up.",
    details: ["Call handling", "Lead qualification", "Follow-up routing"]
  },
  {
    title: "Eagle Eye Automation Website",
    type: "Business website",
    text: "The public brand platform for presenting services, portfolio work, pricing, and consultation options.",
    details: ["Brand system", "Conversion structure", "Responsive pages"]
  },
  {
    title: "GoHighLevel Automation",
    type: "CRM workflow",
    text: "Pipeline automation for lead capture, follow-up, appointment reminders, and client journey management.",
    details: ["Pipeline design", "Lead automation", "Appointment reminders"]
  },
  {
    title: "Executive Dashboard",
    type: "Reporting",
    text: "A decision-ready dashboard model for KPIs, operational trends, and business performance reporting.",
    details: ["KPI reporting", "Executive visibility", "Trend monitoring"]
  }
];

export const industries = [
  {
    title: "Home Care",
    text: "Intake, staffing, caregiver communication, client follow-up, and operational reporting."
  },
  {
    title: "Healthcare",
    text: "Patient-facing workflows, appointment communication, internal handoffs, and admin reduction."
  },
  {
    title: "Real Estate",
    text: "Lead routing, pipeline management, listing workflows, follow-up, and client communication."
  },
  {
    title: "Small Business",
    text: "Simple systems that replace scattered spreadsheets, missed messages, and manual admin."
  },
  {
    title: "Professional Services",
    text: "Client onboarding, proposals, delivery tracking, reporting, and repeatable service operations."
  }
];

export const pricingPackages = [
  {
    title: "Starter",
    text: "A focused launch package for businesses that need a stronger digital foundation.",
    items: ["Website", "CRM", "AI Chat"]
  },
  {
    title: "Growth",
    text: "A practical automation package for teams ready to speed up response and reporting.",
    items: ["AI Voice", "Automations", "Dashboards"],
    featured: true
  },
  {
    title: "Enterprise",
    text: "A custom build path for advanced operations, integrations, and leadership visibility.",
    items: ["Custom Software", "Integrations", "Executive Reporting"]
  }
];

export const contactOptions = [
  "Discovery Call",
  "Contact Form",
  "Calendly or GoHighLevel Calendar",
  "Phone",
  "Email"
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/eagle-eye-automation",
    mark: "in"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eagleeyeautomation",
    mark: "ig"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/eagleeyeautomation",
    mark: "fb"
  }
];

export function getContactDetails() {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@eagleeyeautomation.com";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const contactPhoneHref = contactPhone
    ? `tel:${contactPhone.replace(/\D/g, "")}`
    : undefined;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eagleeyeautomation.com/";
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const bookingHref =
    bookingUrl && bookingUrl.length > 0
      ? bookingUrl
      : `mailto:${contactEmail}?subject=Discovery%20call%20request`;

  return {
    bookingHref,
    contactEmail,
    contactPhone,
    contactPhoneHref,
    formAction: `mailto:${contactEmail}`,
    siteUrl
  };
}

export function LogoMark() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <Image
        src="/images/eagle-eye-automation-logo.png"
        alt=""
        width={448}
        height={256}
        priority
      />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="/" aria-label="Eagle Eye Automation home">
        <LogoMark />
      </a>
      <nav aria-label="Primary">
        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
        <a className="nav-cta" href="/contact">
          Discovery call
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { contactEmail, contactPhone, contactPhoneHref, siteUrl } =
    getContactDetails();

  return (
    <footer>
      <div className="brand footer-brand">
        <LogoMark />
      </div>
      <div className="footer-contact" aria-label="Contact information">
        <a className="footer-note" href={`mailto:${contactEmail}`}>
          <MailCheck size={16} aria-hidden="true" />
          <span>{contactEmail}</span>
        </a>
        {contactPhone && contactPhoneHref ? (
          <a className="footer-note" href={contactPhoneHref}>
            <PhoneCall size={16} aria-hidden="true" />
            <span>{contactPhone}</span>
          </a>
        ) : null}
        <a className="footer-note" href={siteUrl}>
          <Globe2 size={16} aria-hidden="true" />
          <span>www.eagleeyeautomation.com</span>
        </a>
      </div>
      <div className="social-links" aria-label="Social media links">
        {socialLinks.map(({ href, label, mark }) => (
          <a key={label} href={href} aria-label={label}>
            <span aria-hidden="true">{mark}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

export function ContactForm() {
  const { formAction } = getContactDetails();

  return (
    <form className="contact-form" action={formAction} method="post">
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        What do you need help with?
        <select name="service" defaultValue="AI & Automation">
          <option>AI & Automation</option>
          <option>CRM</option>
          <option>Web</option>
          <option>Dashboards</option>
          <option>Custom Business Software</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Share the workflow, system, or bottleneck you want to improve."
          required
        />
      </label>
      <button className="button primary" type="submit">
        Send inquiry
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
