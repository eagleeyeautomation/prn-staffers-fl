export type PlatformState = "Delaware" | "South Carolina" | "Alabama" | "Florida";

export type Client = {
  id: string;
  fullName: string;
  state: PlatformState;
  status: "lead" | "assessment_scheduled" | "active" | "paused" | "inactive";
  source: string;
  createdAt: string;
};

export type Caregiver = {
  id: string;
  fullName: string;
  state: PlatformState;
  status: "candidate" | "interviewing" | "onboarding" | "active" | "inactive";
  availability: "low" | "medium" | "high";
  assignedClients: number;
};

export type Lead = {
  id: string;
  fullName: string;
  state: PlatformState;
  source: string;
  priority: "low" | "medium" | "high";
  receivedAt: string;
};

export type Assessment = {
  id: string;
  clientId: string;
  state: PlatformState;
  scheduledAt: string;
  status: "waiting" | "scheduled" | "completed" | "cancelled";
};

export type Opportunity = {
  id: string;
  clientId: string;
  pipeline: string;
  stage: string;
  value: number;
  status: "open" | "won" | "lost";
};

export type AiCall = {
  id: string;
  contactId: string;
  startedAt: string;
  outcome: "answered" | "transferred" | "booked" | "missed";
  successRate: number;
};

export type Appointment = {
  id: string;
  contactId: string;
  title: string;
  startsAt: string;
  type: "assessment" | "interview" | "meeting" | "client_start";
};

export type Revenue = {
  id: string;
  state: PlatformState;
  amount: number;
  period: string;
  category: "projected" | "booked" | "collected";
};

export type Marketing = {
  id: string;
  channel: "website" | "google" | "facebook" | "instagram" | "referral" | "seo";
  leads: number;
  conversionRate: number;
  spend: number;
};

export type Referral = {
  id: string;
  partner: string;
  state: PlatformState;
  clientName: string;
  receivedAt: string;
  status: "new" | "contacted" | "assessment_scheduled" | "converted";
};

export type Notification = {
  id: string;
  title: string;
  body: string;
  severity: "critical" | "warning" | "information";
  createdAt: string;
  read: boolean;
};

export type PlatformDataModelMap = {
  clients: Client;
  caregivers: Caregiver;
  leads: Lead;
  assessments: Assessment;
  opportunities: Opportunity;
  aiCalls: AiCall;
  appointments: Appointment;
  revenue: Revenue;
  marketing: Marketing;
  referrals: Referral;
  notifications: Notification;
};
