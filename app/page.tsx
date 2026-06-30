import Image from "next/image";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Clock3,
  MailCheck,
  Network,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";

const services = [
  {
    icon: MailCheck,
    title: "Lead response systems",
    text: "Route new inquiries, enrich contact details, trigger fast follow-up, and keep every opportunity visible."
  },
  {
    icon: ClipboardCheck,
    title: "Client onboarding",
    text: "Turn signed deals into clean intake, task creation, document collection, reminders, and handoff flows."
  },
  {
    icon: Workflow,
    title: "Operations automation",
    text: "Connect the tools your team already uses so repeatable work moves without manual copying and chasing."
  },
  {
    icon: Target,
    title: "Reporting workflows",
    text: "Pull the numbers that matter into dependable views for pipeline, delivery, follow-up, and team capacity."
  }
];

const outcomes = [
  "Respond to new leads within minutes",
  "Reduce manual admin across core workflows",
  "Create cleaner handoffs between sales and delivery",
  "Spot stalled work before it becomes a client issue"
];

const steps = [
  {
    eyebrow: "01",
    title: "Map the workflow",
    text: "We inspect the exact steps your team repeats every week and identify where automation will create the clearest lift."
  },
  {
    eyebrow: "02",
    title: "Build the system",
    text: "We connect your forms, CRM, inbox, calendars, spreadsheets, documents, and project tools into one dependable flow."
  },
  {
    eyebrow: "03",
    title: "Launch and refine",
    text: "We test edge cases, document the process, watch early usage, and tune the system around real operational behavior."
  }
];

const toolGroups = [
  "CRM",
  "Forms",
  "Email",
  "Calendars",
  "Sheets",
  "Documents",
  "Tasks",
  "Dashboards"
];

export default function Home() {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@eagleeyeautomation.com";
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const bookingHref =
    bookingUrl && bookingUrl.length > 0
      ? bookingUrl
      : `mailto:${contactEmail}?subject=Workflow%20audit%20request`;

  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Eagle Eye Automation home">
          <span className="brand-mark">E</span>
          <span>Eagle Eye Automation</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <Image
          src="/images/automation-command-center.png"
          alt="Modern automation command center showing connected workflows and dashboards"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Automation for service businesses
          </p>
          <h1>Make every lead, handoff, and follow-up easier to see.</h1>
          <p className="hero-copy">
            Eagle Eye Automation builds practical systems that remove manual
            admin, tighten client operations, and help growing teams act faster
            without adding more software chaos.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Book a workflow audit
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#services">
              See what we automate
            </a>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Automation outcomes">
        {outcomes.map((outcome) => (
          <div key={outcome} className="proof-item">
            <Check size={18} aria-hidden="true" />
            <span>{outcome}</span>
          </div>
        ))}
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Automation that matches how your business actually works.</h2>
          <p>
            The goal is not more tools. It is fewer missed details, less
            repetitive work, and a clearer path from inquiry to delivery.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="icon-box">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Built for operators</p>
          <h2>Connect the work happening between your tools.</h2>
        </div>
        <div className="system-panel">
          <div className="system-panel-header">
            <Network size={22} aria-hidden="true" />
            <span>Common workflow stack</span>
          </div>
          <div className="tool-grid">
            {toolGroups.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <div className="metric-row">
            <div>
              <strong>24/7</strong>
              <span>event-driven routing</span>
            </div>
            <div>
              <strong>0</strong>
              <span>duplicate data entry</span>
            </div>
            <div>
              <strong>1</strong>
              <span>source of truth</span>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Ship useful automation without disrupting the business.</h2>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.title}>
              <span>{step.eyebrow}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow">Ready for a clearer workflow?</p>
          <h2>Start with a workflow audit.</h2>
          <p>
            Bring the process that is slowing your team down. We will map it,
            find the automation opportunities, and recommend the fastest useful
            build.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button primary light" href={`mailto:${contactEmail}`}>
            <MailCheck size={18} aria-hidden="true" />
            {contactEmail}
          </a>
          <a className="button secondary light" href={bookingHref}>
            <PhoneCall size={18} aria-hidden="true" />
            Schedule a call
          </a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">E</span>
          <span>Eagle Eye Automation</span>
        </div>
        <div className="footer-note">
          <Clock3 size={16} aria-hidden="true" />
          <span>Practical automation for teams that want sharper operations.</span>
        </div>
        <div className="footer-note">
          <ShieldCheck size={16} aria-hidden="true" />
          <span>Built with privacy-aware, maintainable workflows.</span>
        </div>
      </footer>
    </main>
  );
}
