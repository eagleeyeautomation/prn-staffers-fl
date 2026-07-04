import { AppShell } from "@/components/app-shell";
import { IntegrationSettings } from "@/components/integration-settings";
import { getIntegrationRegistry } from "@/lib/integrations/registry";
import { getDataProviderMode } from "@/lib/services/dashboard-data-provider";

export default async function SettingsPage() {
  const connections = await getIntegrationRegistry().getConnectionStatuses();

  return (
    <AppShell>
      <IntegrationSettings connections={connections} dataProviderMode={getDataProviderMode()} />
    </AppShell>
  );
}
