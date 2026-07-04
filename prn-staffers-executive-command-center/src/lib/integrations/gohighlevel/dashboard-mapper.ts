import type { GoHighLevelDashboardMetrics } from "@/lib/integrations/gohighlevel/models";
import type { CalendarItem, DashboardData, ExecutiveSnapshotMetric, Kpi, PerformanceMetric } from "@/lib/types";

export function applyGoHighLevelDashboardMetrics(
  dashboardData: DashboardData,
  metrics: GoHighLevelDashboardMetrics,
): DashboardData {
  const liveLabel = metrics.connection.status === "connected" ? "GoHighLevel live data" : "Mock fallback - GoHighLevel disconnected";
  const integrationStatus: DashboardData["integrationStatus"] = {
    provider: "GoHighLevel",
    status: metrics.connection.status,
    label: metrics.connection.statusLabel,
    source: metrics.connection.source,
    lastChecked: metrics.connection.lastChecked,
    refreshIntervalSeconds: 300,
    message:
      metrics.connection.status === "connected"
        ? "Live GoHighLevel data is active for selected dashboard widgets."
        : metrics.connection.errorMessage ?? "GoHighLevel is not connected. Mock dashboard data is active.",
  };

  if (metrics.connection.status !== "connected") {
    return {
      ...dashboardData,
      mode: "mock",
      sourceLabel: liveLabel,
      integrationStatus,
    };
  }

  return {
    ...dashboardData,
    mode: metrics.connection.status === "connected" ? "live" : "mock",
    sourceLabel: liveLabel,
    integrationStatus,
    kpis: dashboardData.kpis.map((kpi) => mapKpi(kpi, metrics)),
    executiveSnapshot: dashboardData.executiveSnapshot.map((metric) => mapSnapshot(metric, metrics)),
    aiPerformance: dashboardData.aiPerformance.map((metric) => mapAiPerformance(metric, metrics)),
    upcomingCalendar: mapUpcomingCalendar(dashboardData.upcomingCalendar, metrics),
  };
}

function mapKpi(kpi: Kpi, metrics: GoHighLevelDashboardMetrics): Kpi {
  switch (kpi.label) {
    case "New Leads Today":
      return {
        ...kpi,
        value: String(metrics.newLeads),
        comparison: "From GoHighLevel contacts",
        weeklyTrend: "Refreshes every 5 minutes",
        detail: "GoHighLevel leads",
      };
    case "AI Calls Today":
      return {
        ...kpi,
        value: String(metrics.aiCalls),
        comparison: "From GoHighLevel AI call activity",
        weeklyTrend: "Refreshes every 5 minutes",
        detail: "GoHighLevel AI calls",
      };
    case "Assessments Scheduled":
      return {
        ...kpi,
        value: String(metrics.assessments),
        comparison: "From GoHighLevel appointments",
        weeklyTrend: "Refreshes every 5 minutes",
        detail: "GoHighLevel assessments",
      };
    case "Missed Calls":
      return {
        ...kpi,
        value: String(metrics.missedCalls),
        comparison: "From GoHighLevel call outcomes",
        weeklyTrend: "Refreshes every 5 minutes",
        detail: "GoHighLevel missed calls",
      };
    case "Revenue":
      return {
        ...kpi,
        value: formatCurrency(metrics.pipelineValue),
        comparison: `${metrics.opportunities} open opportunities`,
        weeklyTrend: "Pipeline value from GoHighLevel",
        detail: "Pipeline value",
      };
    case "Open Tasks":
      return {
        ...kpi,
        value: String(metrics.openTasks),
        comparison: "From GoHighLevel tasks",
        weeklyTrend: "Refreshes every 5 minutes",
        detail: "GoHighLevel tasks",
      };
    default:
      return kpi;
  }
}

function mapSnapshot(metric: ExecutiveSnapshotMetric, metrics: GoHighLevelDashboardMetrics): ExecutiveSnapshotMetric {
  switch (metric.label) {
    case "New Leads Today":
      return { ...metric, value: String(metrics.newLeads), detail: "From GoHighLevel contacts" };
    case "Assessments Today":
      return { ...metric, value: String(metrics.assessments), detail: "From GoHighLevel appointments" };
    case "AI Success Rate":
      return { ...metric, value: metrics.aiCalls > 0 ? "Live" : "0", detail: `${metrics.aiCalls} GoHighLevel AI calls` };
    default:
      return metric;
  }
}

function mapAiPerformance(metric: PerformanceMetric, metrics: GoHighLevelDashboardMetrics): PerformanceMetric {
  switch (metric.label) {
    case "Voice AI Calls":
      return { ...metric, value: String(metrics.aiCalls), detail: "From GoHighLevel AI calls" };
    case "Transfer Success %":
      return { ...metric, detail: "From GoHighLevel transfer outcomes" };
    case "Appointments Booked":
      return { ...metric, value: String(metrics.appointments), detail: "From GoHighLevel calendars" };
    default:
      return metric;
  }
}

function mapUpcomingCalendar(items: CalendarItem[], metrics: GoHighLevelDashboardMetrics): CalendarItem[] {
  if (metrics.appointments === 0) {
    return items;
  }

  return [
    {
      time: "Live",
      title: `${metrics.appointments} GoHighLevel appointments`,
      type: "Meeting",
    },
    {
      time: "Live",
      title: `${metrics.assessments} assessments scheduled`,
      type: "Assessment",
    },
    ...items.slice(0, 3),
  ];
}

function formatCurrency(value: number) {
  if (value >= 1000) {
    return `$${Math.round(value / 1000)}K`;
  }

  return `$${Math.round(value)}`;
}
