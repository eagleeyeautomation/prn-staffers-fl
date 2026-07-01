import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import {
  SiteFooter,
  SiteHeader,
  industries,
  portfolioProjects
} from "../site-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Featured Eagle Eye Automation projects across AI voice receptionists, GoHighLevel automation, executive dashboards, business websites, and command centers."
};

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Business systems that make work easier to see and manage.</h1>
        <p>
          The portfolio highlights how Eagle Eye Automation turns operational
          pain points into useful systems across AI, CRM, web, reporting, and
          custom software.
        </p>
      </section>

      <section className="section portfolio-section">
        <div className="portfolio-detail-grid">
          {portfolioProjects.map((project) => (
            <article className="portfolio-detail-card" key={project.title}>
              <span>{project.type}</span>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              <ul className="clean-list">
                {project.details.map((detail) => (
                  <li key={detail}>
                    <Check size={16} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Industry fit</p>
          <h2>Experience where communication and follow-up drive outcomes.</h2>
          <p>
            Eagle Eye Automation is especially useful for teams that need
            cleaner intake, faster response, fewer dropped handoffs, and clearer
            reporting.
          </p>
          <a className="button package-button" href="/contact">
            Talk through a project
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
