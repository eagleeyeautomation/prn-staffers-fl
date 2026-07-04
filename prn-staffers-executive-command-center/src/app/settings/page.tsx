import { AppShell } from "@/components/app-shell";
import { IntegrationSettings } from "@/components/integration-settings";
import { getGoHighLevelIntegration } from "@/lib/integrations/gohighlevel";
import { getIntegrationRegistry } from "@/lib/integrations/registry";
import { getDataProviderMode } from "@/lib/services/dashboard-data-provider";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export default async function SettingsPage() {
  const connections = await getIntegrationRegistry().getConnectionStatuses();
  const goHighLevelServiceStatuses = await getGoHighLevelIntegration().getServiceStatuses();

  return (
    <AppShell>
      <IntegrationSettings
        connections={connections}
        dataProviderMode={getDataProviderMode()}
        goHighLevelServiceStatuses={goHighLevelServiceStatuses}
      />
    </AppShell>
  );
}
