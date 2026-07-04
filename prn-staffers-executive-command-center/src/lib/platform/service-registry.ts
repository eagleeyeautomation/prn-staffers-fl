import type { PlatformDataModelMap } from "@/lib/platform/models";

export type PlatformServiceKey = keyof PlatformDataModelMap;

export type ServiceRegistryEntry<TKey extends PlatformServiceKey = PlatformServiceKey> = {
  key: TKey;
  label: string;
  providerPriority: string[];
  dataProvider: "mock" | "future_live";
  description: string;
};

const serviceRegistryEntries: ServiceRegistryEntry[] = [
  {
    key: "clients",
    label: "Clients",
    providerPriority: ["wellsky", "hhaexchange", "gohighlevel"],
    dataProvider: "mock",
    description: "Client census and lifecycle records.",
  },
  {
    key: "caregivers",
    label: "Caregivers",
    providerPriority: ["wellsky", "hhaexchange", "gohighlevel"],
    dataProvider: "mock",
    description: "Caregiver workforce, availability, and assignment data.",
  },
  {
    key: "leads",
    label: "Leads",
    providerPriority: ["gohighlevel", "facebook", "instagram", "google"],
    dataProvider: "mock",
    description: "Lead intake records across CRM and marketing channels.",
  },
  {
    key: "assessments",
    label: "Assessments",
    providerPriority: ["gohighlevel", "wellsky"],
    dataProvider: "mock",
    description: "Assessment queue and scheduling state.",
  },
  {
    key: "opportunities",
    label: "Opportunities",
    providerPriority: ["gohighlevel"],
    dataProvider: "mock",
    description: "Pipeline opportunities and stages.",
  },
  {
    key: "aiCalls",
    label: "AI Calls",
    providerPriority: ["gohighlevel", "twilio"],
    dataProvider: "mock",
    description: "Voice AI call outcomes and transfer events.",
  },
  {
    key: "appointments",
    label: "Appointments",
    providerPriority: ["gohighlevel", "google", "microsoft_365"],
    dataProvider: "mock",
    description: "Assessments, interviews, meetings, and client starts.",
  },
  {
    key: "revenue",
    label: "Revenue",
    providerPriority: ["quickbooks", "hhaexchange"],
    dataProvider: "mock",
    description: "Revenue, invoices, payments, and projections.",
  },
  {
    key: "marketing",
    label: "Marketing",
    providerPriority: ["google", "facebook", "instagram", "gohighlevel"],
    dataProvider: "mock",
    description: "Campaign, reputation, SEO, and source attribution data.",
  },
  {
    key: "referrals",
    label: "Referrals",
    providerPriority: ["gohighlevel", "wellsky"],
    dataProvider: "mock",
    description: "Partner and payer referral records.",
  },
  {
    key: "notifications",
    label: "Notifications",
    providerPriority: ["twilio", "microsoft_365", "google"],
    dataProvider: "mock",
    description: "Internal alerts and future cross-system notifications.",
  },
];

export class ServiceRegistry {
  listServices() {
    return serviceRegistryEntries;
  }

  getService(serviceKey: PlatformServiceKey) {
    return serviceRegistryEntries.find((service) => service.key === serviceKey);
  }
}

let serviceRegistry: ServiceRegistry | null = null;

export function getServiceRegistry() {
  serviceRegistry ??= new ServiceRegistry();

  return serviceRegistry;
}
