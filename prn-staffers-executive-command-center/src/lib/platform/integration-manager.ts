import { integrationDefinitions } from "@/lib/integrations/integration-definitions";
import { getIntegrationRegistry } from "@/lib/integrations/registry";
import type { IntegrationConnection, IntegrationDefinition, IntegrationStatus } from "@/lib/types";

export type PlatformProviderId =
  | "gohighlevel"
  | "wellsky"
  | "hhaexchange"
  | "microsoft_365"
  | "google"
  | "facebook"
  | "instagram"
  | "quickbooks"
  | "twilio";

export type ProviderAuthentication = {
  strategy: "environment_variables";
  configured: boolean;
  requiredEnvVars: string[];
  optionalEnvVars: string[];
};

export type ProviderDataSource = "mock" | "future_live";

export type PlatformProviderConnection = {
  id: PlatformProviderId;
  name: string;
  connectionStatus: IntegrationStatus;
  statusLabel: string;
  authentication: ProviderAuthentication;
  healthCheck: "passing" | "pending" | "error";
  lastSync: string | null;
  dataProvider: ProviderDataSource;
  serviceRegistry: string[];
};

const serviceRegistryByProvider: Record<PlatformProviderId, string[]> = {
  gohighlevel: ["contacts", "opportunities", "calendars", "conversations", "tasks", "aiCalls", "pipelines"],
  wellsky: ["clients", "caregivers", "assessments", "appointments"],
  hhaexchange: ["clients", "caregivers", "appointments", "revenue"],
  microsoft_365: ["appointments", "notifications"],
  google: ["marketing", "appointments", "notifications"],
  facebook: ["leads", "marketing", "notifications"],
  instagram: ["leads", "marketing"],
  quickbooks: ["revenue", "notifications"],
  twilio: ["aiCalls", "notifications"],
};

export class IntegrationManager {
  async getProviders(): Promise<PlatformProviderConnection[]> {
    const connections = await getIntegrationRegistry().getConnectionStatuses();

    return getPlatformProviderDefinitions().map((definition) => {
      const connection = connections.find((item) => item.id === definition.id);

      return mapProviderConnection(definition, connection);
    });
  }

  async getProvider(providerId: PlatformProviderId) {
    const providers = await this.getProviders();

    return providers.find((provider) => provider.id === providerId);
  }
}

function getPlatformProviderDefinitions(): IntegrationDefinition[] {
  return integrationDefinitions.filter((definition): definition is IntegrationDefinition & { id: PlatformProviderId } =>
    Object.hasOwn(serviceRegistryByProvider, definition.id),
  );
}

function mapProviderConnection(
  definition: IntegrationDefinition & { id: PlatformProviderId },
  connection?: IntegrationConnection,
): PlatformProviderConnection {
  const configured = connection?.configured ?? false;
  const status = connection?.status ?? "disabled";

  return {
    id: definition.id,
    name: definition.name,
    connectionStatus: status,
    statusLabel: connection?.statusLabel ?? "Disconnected",
    authentication: {
      strategy: "environment_variables",
      configured,
      requiredEnvVars: definition.requiredEnvVars,
      optionalEnvVars: definition.optionalEnvVars ?? [],
    },
    healthCheck: status === "error" ? "error" : configured ? "passing" : "pending",
    lastSync: configured ? (connection?.lastChecked ?? null) : null,
    dataProvider: "mock",
    serviceRegistry: serviceRegistryByProvider[definition.id],
  };
}

let integrationManager: IntegrationManager | null = null;

export function getIntegrationManager() {
  integrationManager ??= new IntegrationManager();

  return integrationManager;
}
