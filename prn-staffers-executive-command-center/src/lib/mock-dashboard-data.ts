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
  CeoSnapshotMetric,
  DashboardChart,
  ExecutiveAlert,
  ExecutiveRecommendation,
  ExecutiveTimelineItem,
  ExecutiveSnapshotMetric,
  Kpi,
  MonthlyGoal,
  PageSummary,
  PerformanceMetric,
  StateRanking,
  StatePerformance,
  StateSummary,
  TrendingKpi,
} from "@/lib/types";

type BusinessUnitMock = {
  state: "Delaware" | "South Carolina" | "Alabama" | "Florida";
  office: string;
  leads: number;
  assessments: number;
  activeClients: number;
  activeCaregivers: number;
  aiCalls: number;
  missedCalls: number;
  revenue: number;
  referralSources: { label: string; value: number }[];
  openTasks: number;
  clinicalAlerts: number;
  health: "Healthy" | "Needs Attention" | "Critical";
  score: number;
  aiPerformance: number;
  caregiverCapacity: number;
  responseTime: string;
  weeklyTrend: number[];
  goalProgress: {
    leads: number;
    assessments: number;
    revenue: number;
    caregivers: number;
  };
  note: string;
};

const businessUnits: BusinessUnitMock[] = [
  {
    state: "Delaware",
    office: "PRN Staffers Delaware",
    leads: 8,
    assessments: 3,
    activeClients: 126,
    activeCaregivers: 86,
    aiCalls: 52,
    missedCalls: 1,
    revenue: 58200,
    referralSources: [
      { label: "Physician", value: 3 },
      { label: "Website", value: 2 },
      { label: "Community", value: 2 },
      { label: "Google", value: 1 },
    ],
    openTasks: 14,
    clinicalAlerts: 2,
    health: "Needs Attention",
    score: 86,
    aiPerformance: 94,
    caregiverCapacity: 82,
    responseTime: "4m 08s",
    weeklyTrend: [5, 6, 7, 5, 8, 7, 8],
    goalProgress: { leads: 72, assessments: 68, revenue: 74, caregivers: 76 },
    note: "Two clinical follow-ups and assessment scheduling need leadership attention.",
  },
  {
    state: "South Carolina",
    office: "PRN Staffers South Carolina",
    leads: 11,
    assessments: 5,
    activeClients: 148,
    activeCaregivers: 104,
    aiCalls: 63,
    missedCalls: 0,
    revenue: 74300,
    referralSources: [
      { label: "VA", value: 3 },
      { label: "Hospital", value: 3 },
      { label: "Website", value: 3 },
      { label: "Facebook", value: 2 },
    ],
    openTasks: 9,
    clinicalAlerts: 1,
    health: "Healthy",
    score: 94,
    aiPerformance: 96,
    caregiverCapacity: 90,
    responseTime: "2m 11s",
    weeklyTrend: [8, 9, 9, 10, 10, 11, 11],
    goalProgress: { leads: 84, assessments: 82, revenue: 86, caregivers: 88 },
    note: "Fastest response time and no missed calls in the last 24 hours.",
  },
  {
    state: "Alabama",
    office: "PRN Staffers Alabama",
    leads: 13,
    assessments: 7,
    activeClients: 176,
    activeCaregivers: 118,
    aiCalls: 69,
    missedCalls: 2,
    revenue: 86400,
    referralSources: [
      { label: "SARCOA", value: 6 },
      { label: "Veterans", value: 4 },
      { label: "Website", value: 2 },
      { label: "Hospital", value: 1 },
    ],
    openTasks: 18,
    clinicalAlerts: 3,
    health: "Needs Attention",
    score: 89,
    aiPerformance: 91,
    caregiverCapacity: 79,
    responseTime: "3m 42s",
    weeklyTrend: [9, 10, 11, 10, 12, 12, 13],
    goalProgress: { leads: 88, assessments: 81, revenue: 83, caregivers: 72 },
    note: "SARCOA and veterans referrals are strong, but caregiver capacity is the constraint.",
  },
  {
    state: "Florida",
    office: "PRN Staffers Florida",
    leads: 24,
    assessments: 12,
    activeClients: 264,
    activeCaregivers: 197,
    aiCalls: 118,
    missedCalls: 3,
    revenue: 138500,
    referralSources: [
      { label: "Website", value: 9 },
      { label: "Google", value: 7 },
      { label: "Facebook", value: 5 },
      { label: "Referral", value: 3 },
    ],
    openTasks: 22,
    clinicalAlerts: 1,
    health: "Healthy",
    score: 97,
    aiPerformance: 98,
    caregiverCapacity: 92,
    responseTime: "2m 56s",
    weeklyTrend: [16, 17, 18, 20, 21, 22, 24],
    goalProgress: { leads: 94, assessments: 91, revenue: 92, caregivers: 89 },
    note: "Top revenue and lead office with a strong assessment pace.",
  },
];

const totals = businessUnits.reduce(
  (summary, unit) => ({
    leads: summary.leads + unit.leads,
    assessments: summary.assessments + unit.assessments,
    activeClients: summary.activeClients + unit.activeClients,
    activeCaregivers: summary.activeCaregivers + unit.activeCaregivers,
    aiCalls: summary.aiCalls + unit.aiCalls,
    missedCalls: summary.missedCalls + unit.missedCalls,
    revenue: summary.revenue + unit.revenue,
    openTasks: summary.openTasks + unit.openTasks,
    clinicalAlerts: summary.clinicalAlerts + unit.clinicalAlerts,
  }),
  {
    leads: 0,
    assessments: 0,
    activeClients: 0,
    activeCaregivers: 0,
    aiCalls: 0,
    missedCalls: 0,
    revenue: 0,
    openTasks: 0,
    clinicalAlerts: 0,
  },
);

const topOffice = [...businessUnits].sort((a, b) => b.score - a.score)[0];
const attentionOffice = [...businessUnits].sort((a, b) => a.score - b.score)[0];
const formatCurrency = (value: number) => `$${Math.round(value / 1000)}K`;
const referralSummary = (unit: BusinessUnitMock) => unit.referralSources.map((source) => `${source.label} ${source.value}`).join(", ");

export const mockKpis: Kpi[] = [
  {
    label: "New Leads Today",
    value: String(totals.leads),
    change: "+15%",
    comparison: "7 more than yesterday across four offices",
    weeklyTrend: "+18% weekly lead trend",
    detail: "Four-state intake momentum",
    icon: LineChart,
    status: "strong",
    direction: "up",
    sparkline: [38, 41, 39, 45, 49, 51, totals.leads],
  },
  {
    label: "Active Clients",
    value: String(totals.activeClients),
    change: "+4%",
    comparison: "28 more active clients than last week",
    weeklyTrend: "+3.9% weekly client growth",
    detail: "Receiving care across four offices",
    icon: Users,
    status: "strong",
    direction: "up",
    sparkline: [681, 687, 693, 699, 704, 709, totals.activeClients],
  },
  {
    label: "Active Caregivers",
    value: String(totals.activeCaregivers),
    change: "+2%",
    comparison: "11 more available caregivers than yesterday",
    weeklyTrend: "Alabama capacity remains below target",
    detail: "Scheduled or available today",
    icon: HeartHandshake,
    status: "watch",
    direction: "up",
    sparkline: [486, 491, 494, 498, 501, 503, totals.activeCaregivers],
  },
  {
    label: "AI Calls Today",
    value: String(totals.aiCalls),
    change: "+13%",
    comparison: "Florida and Alabama drove the highest call volume",
    weeklyTrend: "+16% weekly AI call trend",
    detail: "Voice AI handled",
    icon: Phone,
    status: "strong",
    direction: "up",
    sparkline: [244, 251, 263, 271, 286, 294, totals.aiCalls],
  },
  {
    label: "AI Chats Today",
    value: "196",
    change: "+9%",
    comparison: "Website chat demand is strongest in Florida",
    weeklyTrend: "+10% weekly chat trend",
    detail: "Website and SMS conversations",
    icon: MessageCircle,
    status: "strong",
    direction: "up",
    sparkline: [151, 158, 161, 169, 178, 187, 196],
  },
  {
    label: "Assessments Scheduled",
    value: String(totals.assessments),
    change: "+8%",
    comparison: "Florida booked 12 and Alabama booked 7",
    weeklyTrend: "+11% weekly assessment trend",
    detail: "Scheduled today",
    icon: ClipboardCheck,
    status: "strong",
    direction: "up",
    sparkline: [18, 20, 21, 23, 24, 25, totals.assessments],
  },
  {
    label: "Missed Calls",
    value: String(totals.missedCalls),
    change: "-25%",
    comparison: "2 fewer missed calls than yesterday",
    weeklyTrend: "South Carolina had zero missed calls",
    detail: "Recovery queue",
    icon: ShieldAlert,
    status: "watch",
    direction: "down",
    sparkline: [11, 10, 9, 8, 8, 7, totals.missedCalls],
  },
  {
    label: "Revenue",
    value: formatCurrency(totals.revenue),
    change: "+6%",
    comparison: `${topOffice.office} is the top revenue office`,
    weeklyTrend: "+7% weekly revenue trend",
    detail: "Projected monthly run rate",
    icon: Banknote,
    status: "strong",
    direction: "up",
    sparkline: [312, 326, 335, 341, 348, 352, Math.round(totals.revenue / 1000)],
  },
  {
    label: "Open Tasks",
    value: String(totals.openTasks),
    change: "+5%",
    comparison: "Florida and Alabama carry the largest task queues",
    weeklyTrend: "63 tasks across four offices",
    detail: "Leadership follow-up queue",
    icon: CalendarCheck,
    status: "watch",
    direction: "up",
    sparkline: [52, 55, 57, 58, 61, 60, totals.openTasks],
  },
];

export const mockStateSummaries: StateSummary[] = businessUnits.map((unit) => ({
  state: unit.office,
  health: unit.health,
  metrics: [
    { label: "Leads", value: String(unit.leads) },
    { label: "Assessments", value: String(unit.assessments) },
    { label: "Active Clients", value: String(unit.activeClients) },
    { label: "Active Caregivers", value: String(unit.activeCaregivers) },
    { label: "AI Calls", value: String(unit.aiCalls) },
    { label: "Missed Calls", value: String(unit.missedCalls) },
    { label: "Revenue", value: formatCurrency(unit.revenue) },
    { label: "Referral Sources", value: referralSummary(unit) },
    { label: "Open Tasks", value: String(unit.openTasks) },
    { label: "Clinical Alerts", value: String(unit.clinicalAlerts) },
  ],
}));

export const mockActivities: ActivityItem[] = [
  { time: "10:18 AM", title: "Clinical alert escalated for review", location: "PRN Staffers Alabama", tone: "Clinical" },
  { time: "10:02 AM", title: "SARCOA referral received", location: "PRN Staffers Alabama", tone: "Referral" },
  { time: "9:44 AM", title: "Florida assessment block filled", location: "PRN Staffers Florida", tone: "Scheduling" },
  { time: "9:31 AM", title: "South Carolina missed-call queue cleared", location: "PRN Staffers South Carolina", tone: "Customer Care" },
  { time: "9:18 AM", title: "Delaware clinical follow-up assigned", location: "PRN Staffers Delaware", tone: "Clinical" },
  { time: "9:04 AM", title: "New private-pay lead", location: "PRN Staffers Florida", tone: "Lead Intake" },
  { time: "8:51 AM", title: "Caregiver interview confirmed", location: "PRN Staffers Alabama", tone: "Caregivers" },
  { time: "8:33 AM", title: "Client start checklist completed", location: "PRN Staffers Delaware", tone: "Operations" },
];

export const mockAlerts: ExecutiveAlert[] = [
  { title: "Alabama Clinical Alerts", body: "PRN Staffers Alabama has 3 clinical alerts requiring same-day review.", priority: "Critical", color: "red" },
  { title: "Delaware Needs Scheduling Attention", body: "PRN Staffers Delaware has 14 open tasks and 2 clinical follow-ups.", priority: "Warning", color: "orange" },
  { title: "Florida Missed Calls", body: "PRN Staffers Florida has 3 missed calls in the recovery queue.", priority: "Warning", color: "yellow" },
  { title: "South Carolina Clear Queue", body: "PRN Staffers South Carolina has zero missed calls and the fastest response time.", priority: "Informational", color: "green" },
];

export const mockExecutiveBrief =
  `Good Morning George. Today PRN Staffers is operating across four business units with ${totals.leads} new leads, ${totals.assessments} assessments scheduled, ${totals.activeClients} active clients, and ${totals.activeCaregivers} active caregivers. ${topOffice.office} is the top performing office with ${topOffice.leads} leads and ${formatCurrency(topOffice.revenue)} in projected revenue. ${attentionOffice.office} needs attention because its business health score is ${attentionOffice.score}% and it has ${attentionOffice.openTasks} open tasks. Alabama received 6 SARCOA referrals, South Carolina has the fastest response time at 2m 11s, and AI handled ${totals.aiCalls} calls. There are ${totals.clinicalAlerts} clinical alerts across the company, with Alabama requiring same-day review.`;

export const mockExecutiveRecommendations: ExecutiveRecommendation[] = [
  {
    title: "Review Alabama clinical alerts",
    rationale: "Alabama has 3 clinical alerts and the lowest caregiver capacity in the four-office view.",
    priority: "High",
  },
  {
    title: "Protect Florida lead momentum",
    rationale: "Florida generated 24 leads and should receive same-day follow-up on all high-intent inquiries.",
    priority: "High",
  },
  {
    title: "Reduce Delaware open tasks",
    rationale: "Delaware is the office needing attention with 14 open tasks and 2 clinical follow-ups.",
    priority: "Medium",
  },
  {
    title: "Clear missed-call recovery queue",
    rationale: "There are 6 missed calls across the company, with Florida and Alabama carrying most of the queue.",
    priority: "Medium",
  },
  {
    title: "Double down on referral sources",
    rationale: "SARCOA, veterans, website, Google, and physician referrals are producing measurable office-level demand.",
    priority: "Low",
  },
];

export const mockTrendingKpis: TrendingKpi[] = [
  { label: "Leads", value: String(totals.leads), change: "+18% four-state lead trend", status: "strong", values: [38, 41, 39, 45, 49, 51, totals.leads] },
  { label: "AI Calls", value: String(totals.aiCalls), change: "+16% 7-day AI call trend", status: "strong", values: [244, 251, 263, 271, 286, 294, totals.aiCalls] },
  { label: "Assessments", value: String(totals.assessments), change: "Florida and Alabama are pacing ahead", status: "strong", values: [18, 20, 21, 23, 24, 25, totals.assessments] },
  { label: "Caregiver Capacity", value: "87%", change: "Alabama is the staffing watchpoint", status: "watch", values: [84, 85, 86, 85, 86, 87, 87] },
  { label: "Revenue", value: formatCurrency(totals.revenue), change: "+7% projected monthly run rate", status: "strong", values: [312, 326, 335, 341, 348, 352, Math.round(totals.revenue / 1000)] },
  { label: "Clinical Alerts", value: String(totals.clinicalAlerts), change: "Alabama has 3 alerts requiring review", status: "critical", values: [5, 6, 5, 6, 7, 6, totals.clinicalAlerts] },
];

export const mockStateRankings: StateRanking[] = [...businessUnits]
  .sort((a, b) => b.score - a.score)
  .map((unit, index) => ({
    rank: index + 1,
    state: unit.office,
    score: unit.score,
    businessHealth: `${unit.score}%`,
    leads: unit.leads,
    aiPerformance: `${unit.aiPerformance}%`,
    caregiverCapacity: `${unit.caregiverCapacity}%`,
    summary: unit.note,
    status: unit.score >= 92 ? "strong" : unit.score >= 86 ? "watch" : "critical",
  }));

export const mockCeoSnapshot: CeoSnapshotMetric[] = [
  {
    label: "Business Health",
    value: "93%",
    detail: "Healthy four-state operation with Alabama clinical alerts under review.",
    status: "strong",
  },
  {
    label: "Top Performing State",
    value: topOffice.office,
    detail: "Highest business health, revenue, lead flow, and assessment pace.",
    status: "strong",
  },
  {
    label: "Lowest Performing State",
    value: attentionOffice.office,
    detail: "Needs task reduction and clinical follow-up today.",
    status: "watch",
  },
  {
    label: "Today's Focus",
    value: "Clinical + Follow-up",
    detail: "Review Alabama alerts and clear Delaware open tasks.",
    status: "watch",
  },
  {
    label: "Weekly Growth Projection",
    value: "+11%",
    detail: "Lead flow, assessments, and revenue are all pacing above baseline.",
    status: "strong",
  },
];

export const mockExecutiveTimeline: ExecutiveTimelineItem[] = [
  { time: "8:12 AM", title: "Four-office operations check completed", detail: "PRN Staffers is serving 714 active clients with 505 active caregivers.", category: "Operations" },
  { time: "8:44 AM", title: "Florida ranked top office", detail: "PRN Staffers Florida leads with 24 leads, 12 assessments, and $139K revenue.", category: "Lead" },
  { time: "9:11 AM", title: "Delaware task queue flagged", detail: "PRN Staffers Delaware has 14 open tasks and 2 clinical alerts.", category: "Assessment" },
  { time: "9:28 AM", title: "AI call performance posted", detail: `AI handled ${totals.aiCalls} calls across all four business units.`, category: "AI" },
  { time: "10:02 AM", title: "SARCOA referral volume confirmed", detail: "PRN Staffers Alabama received 6 SARCOA referrals and 4 veterans referrals.", category: "Referral" },
  { time: "10:18 AM", title: "Clinical alert review opened", detail: "Alabama has 3 clinical alerts requiring same-day leadership review.", category: "Staffing" },
  { time: "10:42 AM", title: "Marketing sources reviewed", detail: "Website, Google, SARCOA, veterans, and physician sources are driving today's leads.", category: "Marketing" },
];

export const mockBusinessHealth: BusinessHealthScore = {
  score: 93,
  status: "Healthy",
  explanation:
    "Weighted from four-state operations, AI performance, staffing coverage, referral strength, response time, revenue, open tasks, and clinical alerts.",
  factors: [
    { label: "Operations", value: "92%", detail: "27 assessments and 63 open tasks across four offices", status: "strong" },
    { label: "AI", value: "96%", detail: `${totals.aiCalls} AI calls with strong containment`, status: "strong" },
    { label: "Staffing", value: "87%", detail: "Alabama caregiver capacity is the primary staffing watchpoint", status: "watch" },
    { label: "Marketing", value: "95%", detail: "Florida, SARCOA, Google, and website sources are pacing ahead", status: "strong" },
    { label: "Customer Care", value: "94%", detail: "South Carolina has zero missed calls and fastest response", status: "strong" },
  ],
};

export const mockExecutiveSnapshot: ExecutiveSnapshotMetric[] = [
  { label: "New Leads Today", value: String(totals.leads), detail: "Florida generated the most new leads", status: "strong" },
  { label: "Assessments Today", value: String(totals.assessments), detail: "12 scheduled in Florida and 7 in Alabama", status: "strong" },
  { label: "Active Clients", value: String(totals.activeClients), detail: "Four-state client census", status: "strong" },
  { label: "Caregiver Coverage", value: "87%", detail: "Alabama is below target at 79%", status: "watch" },
  { label: "Clinical Alerts", value: String(totals.clinicalAlerts), detail: "3 in Alabama require same-day review", status: "critical" },
  { label: "Open Tasks", value: String(totals.openTasks), detail: "Florida and Alabama have the largest queues", status: "watch" },
];

export const mockMonthlyGoals: MonthlyGoal[] = [
  { label: "Four-State Leads", current: 812, target: 940, unit: "leads", detail: "Florida and Alabama are pacing ahead", status: "strong" },
  { label: "Assessments Scheduled", current: 286, target: 340, unit: "assessments", detail: "54 remaining this month", status: "strong" },
  { label: "Revenue Run Rate", current: 357, target: 420, unit: "K", detail: "Florida is the largest contributor", status: "strong" },
  { label: "Caregiver Capacity", current: 505, target: 575, unit: "caregivers", detail: "Alabama needs recruiting focus", status: "watch" },
  { label: "Clinical Alert Closure", current: 43, target: 52, unit: "closed", detail: "7 open alerts remain today", status: "watch" },
];

export const mockCharts: DashboardChart[] = [
  {
    title: "Leads",
    subtitle: "30 days",
    type: "line",
    series: [{ label: "Four-state leads", values: [35, 38, 36, 40, 42, 39, 44, 46, 43, 47, 45, 49, 50, 48, 52, 51, 54, 56, 53, 58, 57, 60, 59, 62, 61, 64, 63, 66, 68, 70] }],
  },
  {
    title: "AI Calls",
    subtitle: "Daily handled volume",
    type: "line",
    series: [{ label: "AI Calls", values: [244, 251, 263, 271, 286, 294, 302, 311, 318, 327, 334, 341, 348, 352, 361, 369, 374, 381] }],
  },
  {
    title: "Assessments",
    subtitle: "Scheduled trend",
    type: "bar",
    series: [{ label: "Assessments", values: [18, 20, 21, 23, 24, 25, 27, 26, 28, 29] }],
  },
  {
    title: "Client Growth",
    subtitle: "Active clients",
    type: "line",
    series: [{ label: "Clients", values: [681, 687, 693, 699, 704, 709, 714, 719, 724, 731, 736] }],
  },
  {
    title: "Caregiver Growth",
    subtitle: "Active caregivers",
    type: "line",
    series: [{ label: "Caregivers", values: [486, 491, 494, 498, 501, 503, 505, 508, 512, 516] }],
  },
  {
    title: "Marketing Sources",
    subtitle: "Lead mix",
    type: "bar",
    series: [{ label: "Sources", values: [16, 14, 10, 9, 7, 6] }],
  },
];

export const mockStatePerformance: StatePerformance[] = businessUnits.map((unit) => ({
  state: unit.office,
  leads: unit.leads,
  clients: unit.activeClients,
  aiCalls: unit.aiCalls,
  assessments: unit.assessments,
  health: unit.health,
  rank: unit.office === topOffice.office ? "strongest" : unit.office === attentionOffice.office ? "weakest" : "standard",
}));

export const mockAiPerformance: PerformanceMetric[] = [
  { label: "Voice AI Calls", value: String(totals.aiCalls), detail: "Across all four offices" },
  { label: "Website Chats", value: "196", detail: "Florida and South Carolina led chat volume" },
  { label: "Transfer Success %", value: "96%", detail: "Warm handoff rate" },
  { label: "Appointments Booked", value: String(totals.assessments), detail: "AI-assisted assessment scheduling" },
  { label: "Questions AI Couldn't Answer", value: "14", detail: "Clinical and payer questions queued" },
  { label: "Knowledge Base Health", value: "95%", detail: "Four-state service content is current" },
];

export const mockMarketingSnapshot: PerformanceMetric[] = [
  { label: "Website Visitors", value: "2,914", detail: "Florida and Delaware led web traffic" },
  { label: "Google Leads", value: "8", detail: "Florida produced 7 Google-sourced leads" },
  { label: "Facebook Leads", value: "7", detail: "Florida and South Carolina active" },
  { label: "SARCOA / Veterans", value: "10", detail: "Alabama referral strength" },
  { label: "Referral Sources", value: "16", detail: "Active four-state source count" },
  { label: "Conversion Rate", value: "19.4%", detail: "+1.8 pts vs weekly average" },
];

export const mockUpcomingCalendar: CalendarItem[] = [
  { time: "10:30 AM", title: "PRN Staffers Florida assessment block", type: "Assessment" },
  { time: "11:15 AM", title: "PRN Staffers Alabama caregiver interview panel", type: "Interview" },
  { time: "1:00 PM", title: "Four-state revenue review", type: "Meeting" },
  { time: "2:30 PM", title: "PRN Staffers Delaware client start", type: "Client Start" },
  { time: "4:00 PM", title: "Alabama SARCOA and veterans intake review", type: "Assessment" },
];

export const mockExecutiveSummary = [
  "Today's CEO Brief: Business Health is 93% across four PRN Staffers offices.",
  "PRN Staffers Florida is the top performing office with 24 leads, 12 assessments, and $139K projected revenue.",
  "PRN Staffers Delaware is the office needing attention with 14 open tasks and 2 clinical follow-ups.",
  "PRN Staffers Alabama received 6 SARCOA referrals and 4 veterans referrals.",
  "PRN Staffers South Carolina had zero missed calls and the fastest response time.",
  `AI answered ${totals.aiCalls} calls across Delaware, South Carolina, Alabama, and Florida.`,
  "Seven clinical alerts are open company-wide, with Alabama requiring same-day review.",
  "Weekly trends show lead flow, assessments, and revenue pacing above target.",
];

export const mockAiInsights = [
  "PRN Staffers Florida generated 24 leads, 12 assessments, and the highest projected revenue in the company.",
  "PRN Staffers Alabama is referral-rich, with 6 SARCOA referrals and 4 veterans referrals, but caregiver capacity needs attention.",
  "PRN Staffers South Carolina is the customer-care leader with zero missed calls and the fastest response time.",
  "PRN Staffers Delaware should be the morning operations focus because it has the lowest health score and 14 open tasks.",
  `AI handled ${totals.aiCalls} calls today, reducing manual intake pressure across all four offices.`,
  "The most important leadership action today is to review clinical alerts before growing the task queue further.",
];

export const pageSummaries: Record<string, PageSummary> = {
  operations: {
    title: "Operations",
    eyebrow: "Branch performance",
    description: "Monitor daily service delivery, intake queues, scheduling coverage, and branch-level execution.",
    metrics: ["93% business health", "63 open tasks", "6 missed calls", "27 assessments"],
  },
  aiCenter: {
    title: "AI Center",
    eyebrow: "Automation command",
    description: "Track AI voice, chat, routing, recovery, and handoff performance before live system connections are added.",
    metrics: ["302 AI calls today", "196 AI chats", "96% transfer success", "14 queued questions"],
  },
  caregivers: {
    title: "Caregivers",
    eyebrow: "Workforce readiness",
    description: "Keep caregiver availability, credentialing, utilization, and retention signals visible for leadership.",
    metrics: ["505 active caregivers", "87% coverage", "Alabama at 79%", "70 hires to goal"],
  },
  marketing: {
    title: "Marketing",
    eyebrow: "Growth engine",
    description: "Review lead flow, channel efficiency, campaign momentum, and market-level opportunity trends.",
    metrics: ["56 leads today", "16 active sources", "10 SARCOA/Veterans leads", "19.4% conversion"],
  },
  reports: {
    title: "Reports",
    eyebrow: "Executive intelligence",
    description: "Prepare leadership reporting views for revenue, operations, growth, AI performance, and workforce health.",
    metrics: ["12 saved reports", "4 office rollups", "7 KPI groups", "Monday export ready"],
  },
  settings: {
    title: "Settings",
    eyebrow: "Command configuration",
    description: "Manage integrations, user roles, notification rules, KPI definitions, and dashboard preferences.",
    metrics: ["API status mocked", "6 leadership roles", "14 alert rules", "4 markets active"],
  },
};
