import { getIntegrationManager } from "@/lib/platform/integration-manager";
import { getFeatureFlags } from "@/lib/platform/feature-flags";
import { mockPlatformEvents } from "@/lib/platform/events";
import { getServiceRegistry } from "@/lib/platform/service-registry";
import { getEnvironmentConfigurationStatus } from "@/lib/platform/environment";
import { getGoHighLevelIntegration } from "@/lib/integrations/gohighlevel";

export async function getPlatformStatus() {
  const [providers, goHighLevel] = await Promise.all([
    getIntegrationManager().getProviders(),
    getGoHighLevelIntegration().getDashboardMetrics(),
  ]);
  const connectedServices = providers.filter((provider) => provider.connectionStatus === "ready");
  const pendingIntegrations = providers.filter((provider) => provider.connectionStatus !== "ready");
  const services = getServiceRegistry().listServices();
  const featureFlags = getFeatureFlags();
  const environment = getEnvironmentConfigurationStatus();

  return {
    platformHealth: "Healthy",
    version: "Sprint 4",
    buildStatus: "Passing",
    mockDataStatus: "Active",
    goHighLevel,
    connectedServices,
    pendingIntegrations,
    providers,
    services,
    featureFlags,
    environment,
    recentEvents: mockPlatformEvents,
  };
}
