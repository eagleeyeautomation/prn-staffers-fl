import {
  Banknote,
  CalendarCheck,
  ClipboardCheck,
  HeartHandshake,
  LineChart,
  MessageCircle,
  Phone,
  ShieldAlert,
  Users,
} from "lucide-react";
import type {
  ActivityItem,
  BusinessHealthScore,
  CalendarItem,
  DashboardChart,
  ExecutiveAlert,
  ExecutiveSnapshotMetric,
  Kpi,
  MonthlyGoal,
  PageSummary,
  PerformanceMetric,
  StatePerformance,
  StateSummary,
} from "@/lib/types";

export const mockKpis: Kpi[] = [
  {
    label: "New Leads Today",
    value: "47",
    change: "+18%",
    comparison: "8 more than yesterday",
    weeklyTrend: "+22% this week",
    detail: "Intake momentum",
    icon: LineChart,
    status: "strong",
    direction: "up",
    sparkline: [22, 28, 25, 34, 39, 41, 47],
  },
  {
    label: "Active Clients",
    value: "1,048",
    change: "+6%",
    comparison: "64 above yesterday",
    weeklyTrend: "+4.8% weekly",
    detail: "Receiving care",
    icon: Users,
    status: "strong",
    direction: "up",
    sparkline: [982, 996, 1008, 1014, 1027, 1038, 1048],
  },
  {
    label: "Active Caregivers",
    value: "742",
    change: "+3%",
    comparison: "22 more available",
    weeklyTrend: "+2.9% weekly",
    detail: "Scheduled or ready",
    icon: HeartHandshake,
    status: "strong",
    direction: "up",
    sparkline: [708, 713, 721, 719, 728, 736, 742],
  },
  {
    label: "AI Calls Today",
    value: "612",
    change: "+24%",
    comparison: "119 more than yesterday",
    weeklyTrend: "+18% weekly",
    detail: "Voice AI handled",
    icon: Phone,
    status: "strong",
    direction: "up",
    sparkline: [412, 436, 489, 501, 557, 593, 612],
  },
  {
    label: "AI Chats Today",
    value: "284",
    change: "+12%",
    comparison: "31 more than yesterday",
    weeklyTrend: "+11% weekly",
    detail: "Website and SMS",
    icon: MessageCircle,
    status: "strong",
    direction: "up",
    sparkline: [198, 214, 228, 236, 251, 272, 284],
  },
  {
    label: "Assessments Scheduled",
    value: "36",
    change: "+9%",
    comparison: "3 more than yesterday",
    weeklyTrend: "+7% weekly",
    detail: "Booked today",
    icon: ClipboardCheck,
    status: "strong",
    direction: "up",
    sparkline: [24, 27, 29, 31, 32, 33, 36],
  },
  {
    label: "Missed Calls",
    value: "7",
    change: "-42%",
    comparison: "5 fewer than yesterday",
    weeklyTrend: "-31% weekly",
    detail: "Need follow-up",
    icon: ShieldAlert,
    status: "watch",
    direction: "down",
    sparkline: [18, 16, 14, 12, 11, 9, 7],
  },
  {
    label: "Revenue",
    value: "$184K",
    change: "+5%",
    comparison: "placeholder forecast",
    weeklyTrend: "+6% weekly",
    detail: "Daily run rate",
    icon: Banknote,
    status: "neutral",
    direction: "up",
    sparkline: [151, 156, 162, 171, 169, 177, 184],
  },
  {
    label: "Open Tasks",
    value: "119",
    change: "+3%",
    comparison: "4 more than yesterday",
    weeklyTrend: "+5 open weekly",
    detail: "Across teams",
    icon: CalendarCheck,
    status: "watch",
    direction: "up",
    sparkline: [101, 106, 112, 108, 115, 116, 119],
  },
];

export const mockStateSummaries: StateSummary[] = [
  {
    state: "Delaware",
    health: "Healthy",
    metrics: [
      { label: "Active Clients", value: "174" },
      { label: "Leads", value: "9" },
      { label: "AI Calls", value: "113" },
      { label: "Assessments", value: "6" },
    ],
  },
  {
    state: "South Carolina",
    health: "Critical",
    metrics: [
      { label: "Active Clients", value: "329" },
      { label: "Leads", value: "13" },
      { label: "AI Calls", value: "181" },
      { label: "Caregivers", value: "241" },
    ],
  },
  {
    state: "Alabama",
    health: "Needs Attention",
    metrics: [
      { label: "Active Clients", value: "203" },
      { label: "SARCOA Referrals", value: "4" },
      { label: "Veterans", value: "38" },
      { label: "Assessments", value: "8" },
      { label: "Caregiver Availability", value: "78%" },
    ],
  },
  {
    state: "Florida",
    health: "Healthy",
    metrics: [
      { label: "Active Clients", value: "342" },
      { label: "Today's Leads", value: "21" },
      { label: "AI Calls", value: "244" },
      { label: "Assessments", value: "14" },
      { label: "Caregiver Availability", value: "91%" },
    ],
  },
];

export const mockActivities: ActivityItem[] = [
  { time: "10:02 AM", title: "SARCOA Referral", location: "Alabama", tone: "Referral" },
  { time: "9:41 AM", title: "Google Review received", location: "Florida", tone: "Marketing" },
  { time: "9:22 AM", title: "AI transferred caller", location: "South Carolina", tone: "AI Center" },
  { time: "9:11 AM", title: "Assessment Scheduled", location: "Delaware", tone: "Scheduling" },
  { time: "9:04 AM", title: "New Lead", location: "Tallahassee", tone: "Lead Intake" },
  { time: "8:51 AM", title: "Caregiver interview confirmed", location: "Mobile", tone: "Caregivers" },
  { time: "8:33 AM", title: "Client start checklist completed", location: "Wilmington", tone: "Operations" },
];

export const mockAlerts: ExecutiveAlert[] = [
  { title: "Missed Call", body: "7 missed calls need same-day follow-up.", priority: "Critical", color: "red" },
  { title: "Caregiver No Show", body: "South Carolina has one uncovered afternoon shift.", priority: "Critical", color: "orange" },
  { title: "Assessment Waiting", body: "4 assessment-ready leads are waiting on scheduler confirmation.", priority: "Warning", color: "yellow" },
  { title: "15 Google Reviews this week", body: "Reputation velocity is ahead of weekly target.", priority: "Informational", color: "green" },
];

export const mockBusinessHealth: BusinessHealthScore = {
  score: 94,
  status: "Healthy",
  explanation:
    "Weighted from Operations, AI, Staffing, Marketing, and Customer Care. Critical alerts subtract from the final score.",
  factors: [
    { label: "Operations", value: "92%", detail: "Tasks, intake flow, and assessment pace", status: "strong" },
    { label: "AI", value: "96%", detail: "Containment, transfers, and booked appointments", status: "strong" },
    { label: "Staffing", value: "88%", detail: "Coverage is strong with one market to watch", status: "watch" },
    { label: "Marketing", value: "95%", detail: "Lead flow and reputation are ahead of target", status: "strong" },
    { label: "Customer Care", value: "97%", detail: "Response time and reviews remain healthy", status: "strong" },
  ],
};

export const mockExecutiveSnapshot: ExecutiveSnapshotMetric[] = [
  { label: "New Leads Today", value: "47", detail: "21 from Florida, 12 from Alabama", status: "strong" },
  { label: "Assessments Today", value: "36", detail: "14 scheduled in Florida", status: "strong" },
  { label: "Missed Calls", value: "7", detail: "Same-day recovery queue", status: "watch" },
  { label: "Caregiver Coverage", value: "89%", detail: "South Carolina needs attention", status: "watch" },
  { label: "AI Containment", value: "92%", detail: "Incoming conversations handled by AI", status: "strong" },
  { label: "Reviews This Week", value: "15", detail: "4.8 average Google rating", status: "strong" },
];

export const mockMonthlyGoals: MonthlyGoal[] = [
  { label: "Qualified Leads", current: 842, target: 1000, unit: "leads", detail: "84% of monthly target", status: "strong" },
  { label: "Assessments Scheduled", current: 268, target: 320, unit: "assessments", detail: "52 remaining this month", status: "strong" },
  { label: "New Client Starts", current: 74, target: 96, unit: "starts", detail: "Florida is pacing ahead", status: "watch" },
  { label: "Caregiver Hires", current: 38, target: 54, unit: "hires", detail: "Interview pipeline is active", status: "watch" },
  { label: "Google Reviews", current: 46, target: 60, unit: "reviews", detail: "15 added this week", status: "strong" },
];

export const mockCharts: DashboardChart[] = [
  {
    title: "Leads",
    subtitle: "30 days",
    type: "line",
    series: [{ label: "Leads", values: [24, 28, 25, 31, 34, 29, 37, 41, 36, 44, 39, 46, 48, 43, 52, 49, 55, 58, 54, 62, 59, 64, 61, 69, 67, 72, 70, 75, 78, 82] }],
  },
  {
    title: "AI Calls",
    subtitle: "Daily handled volume",
    type: "line",
    series: [{ label: "AI Calls", values: [320, 344, 339, 371, 390, 412, 436, 451, 468, 489, 501, 516, 529, 548, 557, 569, 593, 612] }],
  },
  {
    title: "Assessments",
    subtitle: "Scheduled trend",
    type: "bar",
    series: [{ label: "Assessments", values: [18, 22, 19, 24, 27, 29, 31, 28, 33, 36] }],
  },
  {
    title: "Client Growth",
    subtitle: "Active clients",
    type: "line",
    series: [{ label: "Clients", values: [928, 941, 956, 971, 982, 996, 1008, 1014, 1027, 1038, 1048] }],
  },
  {
    title: "Caregiver Growth",
    subtitle: "Active caregivers",
    type: "line",
    series: [{ label: "Caregivers", values: [688, 696, 701, 708, 713, 721, 719, 728, 736, 742] }],
  },
  {
    title: "Marketing Sources",
    subtitle: "Lead mix",
    type: "bar",
    series: [{ label: "Sources", values: [38, 27, 19, 12, 9, 7] }],
  },
];

export const mockStatePerformance: StatePerformance[] = [
  { state: "Delaware", leads: 9, clients: 174, aiCalls: 113, assessments: 6, health: "Healthy", rank: "standard" },
  { state: "South Carolina", leads: 13, clients: 329, aiCalls: 181, assessments: 9, health: "Critical", rank: "weakest" },
  { state: "Alabama", leads: 12, clients: 203, aiCalls: 74, assessments: 8, health: "Needs Attention", rank: "standard" },
  { state: "Florida", leads: 21, clients: 342, aiCalls: 244, assessments: 14, health: "Healthy", rank: "strongest" },
];

export const mockAiPerformance: PerformanceMetric[] = [
  { label: "Voice AI Calls", value: "612", detail: "92% contained" },
  { label: "Website Chats", value: "284", detail: "31 booked consults" },
  { label: "Transfer Success %", value: "96%", detail: "Warm handoff rate" },
  { label: "Appointments Booked", value: "39", detail: "AI assisted" },
  { label: "Questions AI Couldn't Answer", value: "18", detail: "Queued for review" },
  { label: "Knowledge Base Health", value: "94%", detail: "Fresh content score" },
];

export const mockMarketingSnapshot: PerformanceMetric[] = [
  { label: "Website Visitors", value: "3,842", detail: "+14% vs yesterday" },
  { label: "Google Reviews", value: "15", detail: "4.8 average rating" },
  { label: "Facebook Leads", value: "27", detail: "$38 CPL" },
  { label: "SEO Ranking", value: "#3", detail: "Home care near me" },
  { label: "Referral Sources", value: "9", detail: "Active partners" },
  { label: "Conversion Rate", value: "18.6%", detail: "+2.1 pts" },
];

export const mockUpcomingCalendar: CalendarItem[] = [
  { time: "10:30 AM", title: "Florida assessment block", type: "Assessment" },
  { time: "11:15 AM", title: "Caregiver interview panel", type: "Interview" },
  { time: "1:00 PM", title: "Leadership revenue review", type: "Meeting" },
  { time: "2:30 PM", title: "Delaware client start", type: "Client Start" },
  { time: "4:00 PM", title: "Alabama veterans intake review", type: "Assessment" },
];

export const mockExecutiveSummary = [
  "Florida generated the highest number of leads yesterday.",
  "Alabama received 4 SARCOA referrals.",
  "Overall AI handled 92% of incoming conversations without human intervention.",
  "No critical operational issues detected.",
];

export const mockAiInsights = [
  "Florida generated 14 new leads yesterday, 32% more than its weekly average.",
  "Alabama received 5 SARCOA referrals this week.",
  "Delaware had no missed calls in the last 24 hours.",
  "South Carolina has 3 assessments awaiting scheduling.",
];

export const pageSummaries: Record<string, PageSummary> = {
  operations: {
    title: "Operations",
    eyebrow: "Branch performance",
    description: "Monitor daily service delivery, intake queues, scheduling coverage, and branch-level execution.",
    metrics: ["94.7% service level", "119 open tasks", "37 missed calls", "268 assessments"],
  },
  aiCenter: {
    title: "AI Center",
    eyebrow: "Automation command",
    description: "Track AI voice, chat, routing, recovery, and handoff performance before live system connections are added.",
    metrics: ["7,912 AI calls", "3,406 AI chats", "82% auto-resolution", "51 human handoffs"],
  },
  caregivers: {
    title: "Caregivers",
    eyebrow: "Workforce readiness",
    description: "Keep caregiver availability, credentialing, utilization, and retention signals visible for leadership.",
    metrics: ["742 active caregivers", "91% credential compliance", "86% utilization", "38 onboarding"],
  },
  marketing: {
    title: "Marketing",
    eyebrow: "Growth engine",
    description: "Review lead flow, channel efficiency, campaign momentum, and market-level opportunity trends.",
    metrics: ["1,284 leads", "$42 blended CPL", "18.4% lead growth", "31% referral mix"],
  },
  reports: {
    title: "Reports",
    eyebrow: "Executive intelligence",
    description: "Prepare leadership reporting views for revenue, operations, growth, AI performance, and workforce health.",
    metrics: ["12 saved reports", "4 state rollups", "7 KPI groups", "Monday export ready"],
  },
  settings: {
    title: "Settings",
    eyebrow: "Command configuration",
    description: "Manage integrations, user roles, notification rules, KPI definitions, and dashboard preferences.",
    metrics: ["API status mocked", "6 leadership roles", "14 alert rules", "4 markets active"],
  },
};
