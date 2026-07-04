import { AppShell } from "@/components/app-shell";
import { AutoRefresh } from "@/components/auto-refresh";
import { PlatformStatus } from "@/components/platform-status";
import { getPlatformStatus } from "@/lib/platform/status";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export default async function PlatformStatusPage() {
  const status = await getPlatformStatus();

  return (
    <AppShell>
      <AutoRefresh intervalMs={300000} />
      <PlatformStatus status={status} />
    </AppShell>
  );
}
