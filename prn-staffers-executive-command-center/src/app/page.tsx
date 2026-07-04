import { AppShell } from "@/components/app-shell";
import { AutoRefresh } from "@/components/auto-refresh";
import {
  AiInsightsPanel,
  BusinessHealthOverview,
  ChartGallery,
  CommandCenterGrid,
  DashboardConnectionStatus,
  ExecutiveHeader,
  ExecutiveIntelligenceLayer,
  ExecutiveKpiRow,
  ExecutiveSnapshot,
  ExecutiveSummary,
  MonthlyGoalsProgress,
  QuickActionsPanel,
  StateScorecards,
  StateOperationsGrid,
  StatePerformanceTable,
  TodaysPriorities,
} from "@/components/dashboard";
import { getDashboardDataProvider } from "@/lib/services/dashboard-data-provider";

export const dynamic = "force-dynamic";
export const revalidate = 300;

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
      <AutoRefresh intervalMs={300000} />
      <div className="space-y-6">
        <ExecutiveHeader currentDate={currentDate} currentTime={currentTime} />
        <DashboardConnectionStatus status={dashboardData.integrationStatus} />
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
        <StateScorecards scorecards={dashboardData.stateScorecards} />
        <TodaysPriorities priorities={dashboardData.priorities} />
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
