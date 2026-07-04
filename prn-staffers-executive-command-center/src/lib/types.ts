import type { LucideIcon } from "lucide-react";

export type DataProviderMode = "mock" | "live";

export type IntegrationStatus = "disabled" | "missing_credentials" | "ready" | "error";

export type IntegrationId =
  | "gohighlevel"
  | "google"
  | "facebook"
  | "instagram"
  | "quickbooks"
  | "twilio"
  | "microsoft_365"
  | "wellsky"
  | "hhaexchange";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type Kpi = {
  label: string;
  value: string;
  change: string;
  detail: string;
  icon: LucideIcon;
  comparison: string;
  weeklyTrend: string;
  status: "strong" | "watch" | "critical" | "neutral";
  direction: "up" | "down" | "flat";
  sparkline: number[];
};

export type StateSummary = {
  state: string;
  health: "Healthy" | "Needs Attention" | "Critical";
  metrics: {
    label: string;
    value: string;
  }[];
};

export type ActivityItem = {
  time: string;
  title: string;
  location: string;
  tone: string;
};

export type ExecutiveAlert = {
  title: string;
  body: string;
  priority: "Critical" | "Warning" | "Informational";
  color: "red" | "orange" | "yellow" | "green";
};

export type ExecutiveRecommendation = {
  title: string;
  rationale: string;
  priority: "High" | "Medium" | "Low";
};

export type TrendingKpi = {
  label: string;
  value: string;
  change: string;
  status: "strong" | "watch" | "critical" | "neutral";
  values: number[];
};

export type StateRanking = {
  rank: number;
  state: string;
  score: number;
  businessHealth: string;
  leads: number;
  aiPerformance: string;
  caregiverCapacity: string;
  summary: string;
  status: "strong" | "watch" | "critical" | "neutral";
};

export type CeoSnapshotMetric = {
  label: "Business Health" | "Top Performing State" | "Lowest Performing State" | "Today's Focus" | "Weekly Growth Projection";
  value: string;
  detail: string;
  status: "strong" | "watch" | "critical" | "neutral";
};

export type ExecutiveTimelineItem = {
  time: string;
  title: string;
  detail: string;
  category: "Lead" | "AI" | "Assessment" | "Referral" | "Staffing" | "Marketing" | "Operations";
};

export type PerformanceMetric = {
  label: string;
  value: string;
  detail: string;
};

export type BusinessHealthMetric = PerformanceMetric & {
  status: "strong" | "watch" | "critical" | "neutral";
};

export type BusinessHealthScore = {
  score: number;
  status: "Healthy" | "Needs Attention" | "Critical";
  explanation: string;
  factors: BusinessHealthMetric[];
};

export type ExecutiveSnapshotMetric = PerformanceMetric & {
  status: "strong" | "watch" | "critical" | "neutral";
};

export type MonthlyGoal = {
  label: string;
  current: number;
  target: number;
  unit: string;
  detail: string;
  status: "strong" | "watch" | "critical" | "neutral";
};

export type ChartSeries = {
  label: string;
  values: number[];
};

export type DashboardChart = {
  title: string;
  subtitle: string;
  type: "line" | "bar";
  series: ChartSeries[];
};

export type StatePerformance = {
  state: string;
  leads: number;
  clients: number;
  aiCalls: number;
  assessments: number;
  health: "Healthy" | "Needs Attention" | "Critical";
  rank: "strongest" | "weakest" | "standard";
};

export type CalendarItem = {
  time: string;
  title: string;
  type: "Assessment" | "Interview" | "Meeting" | "Client Start";
};

export type PageSummary = {
  title: string;
  eyebrow: string;
  description: string;
  metrics: string[];
};

export type DashboardData = {
  mode: DataProviderMode;
  sourceLabel: string;
  integrationStatus?: {
    provider: string;
    status: "disconnected" | "connected" | "error";
    label: string;
    source: "mock" | "live" | "fallback";
    lastChecked: string;
    refreshIntervalSeconds: number;
    message: string;
  };
  kpis: Kpi[];
  stateSummaries: StateSummary[];
  activities: ActivityItem[];
  alerts: ExecutiveAlert[];
  businessHealth: BusinessHealthScore;
  executiveSnapshot: ExecutiveSnapshotMetric[];
  monthlyGoals: MonthlyGoal[];
  charts: DashboardChart[];
  statePerformance: StatePerformance[];
  aiPerformance: PerformanceMetric[];
  marketingSnapshot: PerformanceMetric[];
  upcomingCalendar: CalendarItem[];
  executiveSummary: string[];
  aiInsights: string[];
  executiveBrief: string;
  recommendations: ExecutiveRecommendation[];
  trendingKpis: TrendingKpi[];
  stateRankings: StateRanking[];
  ceoSnapshot: CeoSnapshotMetric[];
  executiveTimeline: ExecutiveTimelineItem[];
};

export type IntegrationDefinition = {
  id: IntegrationId;
  name: string;
  description: string;
  enabledEnvVar: string;
  requiredEnvVars: string[];
  optionalEnvVars?: string[];
};

export type IntegrationConnection = IntegrationDefinition & {
  enabled: boolean;
  configured: boolean;
  status: IntegrationStatus;
  statusLabel: string;
  missingEnvVars: string[];
  lastChecked: string;
};

export interface DashboardDataProvider {
  getDashboardData(): Promise<DashboardData>;
}
