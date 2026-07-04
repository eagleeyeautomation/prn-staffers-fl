import {
  mockActivities,
  mockAiPerformance,
  mockAlerts,
  mockBusinessHealth,
  mockCeoSnapshot,
  mockCharts,
  mockExecutiveBrief,
  mockExecutiveRecommendations,
  mockExecutiveSummary,
  mockAiInsights,
  mockExecutiveSnapshot,
  mockExecutiveTimeline,
  mockKpis,
  mockMarketingSnapshot,
  mockMonthlyGoals,
  mockStateRankings,
  mockStateSummaries,
  mockStatePerformance,
  mockTrendingKpis,
  mockUpcomingCalendar,
} from "@/lib/mock-dashboard-data";
import { applyGoHighLevelDashboardMetrics } from "@/lib/integrations/gohighlevel/dashboard-mapper";
import { getGoHighLevelIntegration, logGoHighLevelError } from "@/lib/integrations/gohighlevel";
import type { DashboardData, DashboardDataProvider, DataProviderMode } from "@/lib/types";

class MockDashboardDataProvider implements DashboardDataProvider {
  async getDashboardData(): Promise<DashboardData> {
    return {
      mode: "mock",
      sourceLabel: "Mock data",
      integrationStatus: {
        provider: "GoHighLevel",
        status: "disconnected",
        label: "Disconnected",
        source: "mock",
        lastChecked: new Date().toISOString(),
        refreshIntervalSeconds: 300,
        message: "GoHighLevel is not connected. Mock dashboard data is active.",
      },
      kpis: mockKpis,
      stateSummaries: mockStateSummaries,
      activities: mockActivities,
      alerts: mockAlerts,
      businessHealth: mockBusinessHealth,
      executiveSnapshot: mockExecutiveSnapshot,
      monthlyGoals: mockMonthlyGoals,
      charts: mockCharts,
      statePerformance: mockStatePerformance,
      aiPerformance: mockAiPerformance,
      marketingSnapshot: mockMarketingSnapshot,
      upcomingCalendar: mockUpcomingCalendar,
      executiveSummary: mockExecutiveSummary,
      aiInsights: mockAiInsights,
      executiveBrief: mockExecutiveBrief,
      recommendations: mockExecutiveRecommendations,
      trendingKpis: mockTrendingKpis,
      stateRankings: mockStateRankings,
      ceoSnapshot: mockCeoSnapshot,
      executiveTimeline: mockExecutiveTimeline,
    };
  }
}

class LiveDashboardDataProvider implements DashboardDataProvider {
  constructor(private readonly fallbackProvider = new MockDashboardDataProvider()) {}

  async getDashboardData(): Promise<DashboardData> {
    const fallbackData = await this.fallbackProvider.getDashboardData();

    try {
      const metrics = await getGoHighLevelIntegration().getDashboardMetrics();

      return applyGoHighLevelDashboardMetrics(fallbackData, metrics);
    } catch (error) {
      logGoHighLevelError("dashboard provider", error);

      return {
        ...fallbackData,
        mode: "mock",
        sourceLabel: "Mock fallback - GoHighLevel error",
        integrationStatus: {
          provider: "GoHighLevel",
          status: "error",
          label: "Error",
          source: "fallback",
          lastChecked: new Date().toISOString(),
          refreshIntervalSeconds: 300,
          message: "GoHighLevel could not be reached. Mock dashboard data is active.",
        },
      };
    }
  }
}

export function getDashboardDataProvider(): DashboardDataProvider {
  return getDataProviderMode() === "live" || process.env.GHL_ENABLED === "true"
    ? new LiveDashboardDataProvider()
    : new MockDashboardDataProvider();
}

export function getDataProviderMode(): DataProviderMode {
  return process.env.PRN_DATA_PROVIDER === "live" ? "live" : "mock";
}
