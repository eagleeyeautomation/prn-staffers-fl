import { AppShell } from "@/components/app-shell";
import {
  AiInsightsPanel,
  BusinessHealthOverview,
  ChartGallery,
  CommandCenterGrid,
  ExecutiveHeader,
  ExecutiveIntelligenceLayer,
  ExecutiveKpiRow,
  ExecutiveSnapshot,
  ExecutiveSummary,
  MonthlyGoalsProgress,
  QuickActionsPanel,
  StateOperationsGrid,
  StatePerformanceTable,
} from "@/components/dashboard";
import { getDashboardDataProvider } from "@/lib/services/dashboard-data-provider";

export default async function ExecutiveDashboard() {
  const dashboardData = await getDashboardDataProvider().getDashboardData();
  const now = new Date();
  const currentDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  }).format(now);
  const currentTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone: "America/New_York",
  }).format(now);

  return (
    <AppShell>
      <div className="space-y-8">
        <ExecutiveHeader currentDate={currentDate} currentTime={currentTime} />
        <BusinessHealthOverview health={dashboardData.businessHealth} />
        <ExecutiveIntelligenceLayer
          brief={dashboardData.executiveBrief}
          alerts={dashboardData.alerts}
          ceoSnapshot={dashboardData.ceoSnapshot}
          recommendations={dashboardData.recommendations}
          trendingKpis={dashboardData.trendingKpis}
          stateRankings={dashboardData.stateRankings}
          timeline={dashboardData.executiveTimeline}
        />
        <ExecutiveSnapshot metrics={dashboardData.executiveSnapshot} />
        <ExecutiveKpiRow kpis={dashboardData.kpis} />
        <ChartGallery charts={dashboardData.charts} />
        <StateOperationsGrid stateSummaries={dashboardData.stateSummaries} />
        <StatePerformanceTable rows={dashboardData.statePerformance} />
        <CommandCenterGrid
          activities={dashboardData.activities}
          alerts={dashboardData.alerts}
          aiPerformance={dashboardData.aiPerformance}
          marketingSnapshot={dashboardData.marketingSnapshot}
          upcomingCalendar={dashboardData.upcomingCalendar}
        />
        <MonthlyGoalsProgress goals={dashboardData.monthlyGoals} />
        <QuickActionsPanel />
        <AiInsightsPanel insights={dashboardData.aiInsights} />
        <ExecutiveSummary summary={dashboardData.executiveSummary} />
      </div>
    </AppShell>
  );
}
