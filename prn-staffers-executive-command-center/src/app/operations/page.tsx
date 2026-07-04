import { AppShell } from "@/components/app-shell";
import { SectionPage } from "@/components/dashboard";
import { pageSummaries } from "@/lib/mock-dashboard-data";

export default function OperationsPage() {
  return (
    <AppShell>
      <SectionPage {...pageSummaries.operations} />
    </AppShell>
  );
}
