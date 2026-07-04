import { AppShell } from "@/components/app-shell";
import { SectionPage } from "@/components/dashboard";
import { pageSummaries } from "@/lib/mock-dashboard-data";

export default function ReportsPage() {
  return (
    <AppShell>
      <SectionPage {...pageSummaries.reports} />
    </AppShell>
  );
}
