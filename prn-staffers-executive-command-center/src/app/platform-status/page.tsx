import { AppShell } from "@/components/app-shell";
import { PlatformStatus } from "@/components/platform-status";
import { getPlatformStatus } from "@/lib/platform/status";

export default async function PlatformStatusPage() {
  const status = await getPlatformStatus();

  return (
    <AppShell>
      <PlatformStatus status={status} />
    </AppShell>
  );
}
