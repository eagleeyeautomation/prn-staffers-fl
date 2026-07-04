import { createAllConnectors } from "@/lib/integrations/connectors";
import type { IntegrationConnection } from "@/lib/types";

export class IntegrationRegistry {
  private readonly connectors = createAllConnectors();

  async getConnectionStatuses(): Promise<IntegrationConnection[]> {
    const settled = await Promise.allSettled(this.connectors.map((connector) => connector.healthCheck()));

    return settled.map((result, index) => {
      if (result.status === "fulfilled") {
        return result.value;
      }

      const definition = this.connectors[index].getDefinition();

      return {
        ...definition,
        enabled: false,
        configured: false,
        missingEnvVars: definition.requiredEnvVars,
        status: "error",
        statusLabel: "Connection error",
        lastChecked: new Date().toISOString(),
      };
    });
  }
}

let registry: IntegrationRegistry | null = null;

export function getIntegrationRegistry() {
  registry ??= new IntegrationRegistry();

  return registry;
}

