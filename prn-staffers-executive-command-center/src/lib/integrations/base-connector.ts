import type { IntegrationConnection, IntegrationDefinition } from "@/lib/types";

export abstract class IntegrationConnector {
  constructor(protected readonly definition: IntegrationDefinition) {}

  getDefinition() {
    return this.definition;
  }

  getConnectionStatus(): IntegrationConnection {
    const enabled = readBooleanEnv(this.definition.enabledEnvVar);
    const missingEnvVars = this.definition.requiredEnvVars.filter((key) => !process.env[key]);
    const configured = missingEnvVars.length === 0;
    const status = enabled ? (configured ? "ready" : "missing_credentials") : "disabled";

    return {
      ...this.definition,
      enabled,
      configured,
      missingEnvVars,
      status,
      statusLabel: getStatusLabel(status),
      lastChecked: new Date().toISOString(),
    };
  }

  async healthCheck(): Promise<IntegrationConnection> {
    return this.getConnectionStatus();
  }
}

function readBooleanEnv(key: string) {
  return ["1", "true", "yes", "on"].includes((process.env[key] ?? "").toLowerCase());
}

function getStatusLabel(status: IntegrationConnection["status"]) {
  switch (status) {
    case "ready":
      return "Ready";
    case "missing_credentials":
      return "Missing credentials";
    case "error":
      return "Connection error";
    case "disabled":
    default:
      return "Disabled";
  }
}
