import {
  Bath,
  CalendarCheck,
  Car,
  Check,
  Clock3,
  HeartHandshake,
  MapPin,
  Pill,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Users
} from "lucide-react";

export const siteName = "PRN Staffers Alabama";
export const tagline = "Care You Can Trust";
export const serviceArea =
  "Partnering with SARCOA to serve Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties in Alabama.";

export const brandImages = {
  logo: "/images/prn/prn-staffers-logo-cropped.png",
  bridge: "/images/prn/alabama-care-plan.png",
  heart: "/images/prn/alabama-caregiver-hero.png",
  team: "/images/prn/alabama-care-team.png",
  caregiver: "/images/prn/alabama-caregiver-hero.png",
  companionship: "/images/prn/alabama-care-plan.png",
  family: "/images/prn/alabama-care-team.png",
  personalCare: "/images/prn/alabama-meal-prep.png"
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Veterans", href: "/veterans" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" }
];

export const trustItems = [
  {
    title: "Care You Can Trust",
    text: "Warm, dependable support designed around each client and family.",
    icon: ShieldCheck
  },
  {
    title: "Compassionate caregivers",
    text: "Respectful caregivers who help seniors feel safe and valued at home.",
    icon: HeartHandshake
  },
  {
    title: "Flexible support",
    text: "Care plans can be tailored around routines, schedules, and changing needs.",
    icon: CalendarCheck
  },
  {
    title: "SARCOA partner",
    text: "Partnering with SARCOA to support families across southeast Alabama.",
    icon: MapPin
  }
];

export const services = [
  {
    title: "Personal Care",
    text: "Respectful help with bathing, dressing, grooming, mobility, and daily routines.",
    icon: Bath
  },
  {
    title: "Companionship",
    text: "Conversation, activities, supervision, and meaningful connection at home.",
    icon: Users
  },
  {
    title: "Respite Care",
    text: "Reliable relief for family caregivers who need time to rest, work, or recharge.",
    icon: Clock3
  },
  {
    title: "Meal Preparation",
    text: "Simple meal support, hydration reminders, and help keeping routines steady.",
    icon: Utensils
  },
  {
    title: "Light Housekeeping",
    text: "Help with laundry, tidying, dishes, and maintaining a safer living space.",
    icon: Sparkles
  },
  {
    title: "Medication Reminders",
    text: "Non-medical reminders that help clients stay consistent with existing routines.",
    icon: Pill
  },
  {
    title: "Transportation & Errands",
    text: "Support with appointments, shopping, errands, and local transportation needs.",
    icon: Car
  },
  {
    title: "Veterans Support",
    text: "Guidance for veterans and families exploring home care options and resources.",
    icon: Star
  },
  {
    title: "Family Support",
    text: "Clear communication and practical support for adult children and family caregivers.",
    icon: HeartHandshake
  }
];

export const reasons = [
  "Dignity-first care that respects personal routines and preferences.",
  "Dependable caregivers focused on safety, comfort, and communication.",
  "Flexible non-medical support for short visits, ongoing care, or respite needs.",
  "Local knowledge of Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties.",
  "A family-focused approach for seniors, veterans, and adult children coordinating care.",
  "Clean, professional care planning from first conversation through ongoing support."
];

export const careSteps = [
  {
    title: "Talk with our care team",
    text: "Share your family’s needs, schedule, location, and immediate concerns."
  },
  {
    title: "Create a care plan",
    text: "We recommend non-medical support around routines, safety, and comfort."
  },
  {
    title: "Begin care at home",
    text: "A compassionate caregiver helps your loved one feel supported and respected."
  }
];

export const serviceAreas = [
  "Barbour County",
  "Coffee County",
  "Covington County",
  "Dale County",
  "Geneva County",
  "Henry County",
  "Houston County"
];

export const testimonials = [
  {
    quote:
      "PRN Staffers Alabama helped our family feel calm during a stressful transition. The care was kind, dependable, and respectful.",
    name: "Family member in Houston County"
  },
  {
    quote:
      "We needed help for my father at home, and the team made the process feel clear and compassionate from the beginning.",
    name: "Adult child in Coffee County"
  },
  {
    quote:
      "The caregiver support gave our family room to breathe while keeping Mom safe and comfortable at home.",
    name: "Respite care family"
  }
];

export const faqs = [
  {
    question: "What kind of care does PRN Staffers Alabama provide?",
    answer:
      "PRN Staffers Alabama focuses on non-medical home care, including personal care, companionship, respite care, meal preparation, light housekeeping, transportation, errands, medication reminders, veterans support, and family support."
  },
  {
    question: "Do you serve families in Alabama?",
    answer:
      "Yes. PRN Staffers Alabama partners with SARCOA and serves Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties in Alabama."
  },
  {
    question: "Is this skilled nursing care?",
    answer:
      "This website focuses on non-medical home care. If a family needs skilled nursing or medical services, the care team can discuss appropriate next steps and resources."
  },
  {
    question: "Can care be flexible?",
    answer:
      "Yes. Care can be planned around each family’s schedule, needs, and routines, whether support is short term, ongoing, or respite-focused."
  },
  {
    question: "Can veterans and families get help exploring care options?",
    answer:
      "Yes. PRN Staffers Alabama can support veterans and families as they explore care options, available resources, and non-medical home care support."
  },
  {
    question: "How do caregivers apply?",
    answer:
      "Caregivers, homemakers, and CNAs can apply through the careers page to learn about current opportunities."
  }
];

export const careerRoles = [
  "Caregivers",
  "Homemakers",
  "Companions",
  "CNAs",
  "Respite caregivers"
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/prnstaffersal" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/prn-staffers-alabama"
  },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "TikTok", href: "https://www.tiktok.com" }
];

export function LogoMark() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <img src={brandImages.logo} alt="" />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="/" aria-label="PRN Staffers Alabama home">
        <LogoMark />
      </a>
      <nav aria-label="Primary">
        <div className="nav-links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <div className="brand">
          <LogoMark />
        </div>
        <p>
          Trusted non-medical home care for seniors, veterans, and families in
          Barbour, Coffee, Covington, Dale, Geneva, Henry, and Houston counties in Alabama.
        </p>
      </div>
      <div className="footer-links" aria-label="Footer navigation">
        <div>
          <h3>Care</h3>
          <a href="/services">Services</a>
          <a href="/veterans">Veterans</a>
          <a href="/service-areas">Service Areas</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/careers">Careers</a>
          <a href="/faq">FAQ</a>
        </div>
        <div>
          <h3>Follow</h3>
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-bottom">
        © 2026 PRN Staffers Alabama. Non-medical home care information for
        families in Alabama.
      </p>
    </footer>
  );
}
