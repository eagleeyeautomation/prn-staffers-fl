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
import type { DashboardData, DashboardDataProvider, DataProviderMode } from "@/lib/types";

class MockDashboardDataProvider implements DashboardDataProvider {
  async getDashboardData(): Promise<DashboardData> {
    return {
      mode: "mock",
      sourceLabel: "Mock data",
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

    return {
      ...fallbackData,
      mode: "live",
      sourceLabel: "Live-ready mock fallback",
    };
  }
}

export function getDashboardDataProvider(): DashboardDataProvider {
  return getDataProviderMode() === "live" ? new LiveDashboardDataProvider() : new MockDashboardDataProvider();
}

export function getDataProviderMode(): DataProviderMode {
  return process.env.PRN_DATA_PROVIDER === "live" ? "live" : "mock";
}
