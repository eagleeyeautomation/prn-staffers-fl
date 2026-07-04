import { Activity, CheckCircle2, CircleOff, Flag, Network, ServerCog } from "lucide-react";
import type { getPlatformStatus } from "@/lib/platform/status";

type PlatformStatusData = Awaited<ReturnType<typeof getPlatformStatus>>;
type GoHighLevelStatus = PlatformStatusData["goHighLevel"];

export function PlatformStatus({ status }: { status: PlatformStatusData }) {
  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-[#071a33] p-6 text-white shadow-xl shadow-slate-200 sm:p-8 dark:shadow-black/30">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c85f]">Integration Hub</p>
        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">Core Platform Status</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
              Internal architecture for future integrations. Dashboard modules request data through the Service Registry,
              which routes to provider adapters while mock data remains active.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <HeroMetric label="Platform Health" value={status.platformHealth} />
            <HeroMetric label="Version" value={status.version} />
            <HeroMetric label="Mock Data" value={status.mockDataStatus} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Connected Services" value={String(status.connectedServices.length)} detail="Ready for future live routing" />
        <SummaryCard label="Pending Integrations" value={String(status.pendingIntegrations.length)} detail="Mock-only until credentials are approved" />
        <SummaryCard label="Build Status" value={status.buildStatus} detail="Verified through local build checks" />
        <SummaryCard label="Service Registry" value={String(status.services.length)} detail="Dashboard to registry to provider" />
      </section>

      <GoHighLevelConnectionCard status={status.goHighLevel} />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <SectionTitle icon={Network} eyebrow="Providers" title="Integration Manager" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {status.providers.map((provider) => (
              <div key={provider.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-950 dark:text-white">{provider.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{provider.serviceRegistry.length} registered services</p>
                  </div>
                  <StatusBadge status={provider.connectionStatus} label={provider.statusLabel} />
                </div>
                <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <p>Authentication: {provider.authentication.configured ? "Configured" : "Pending env vars"}</p>
                  <p>Health Check: {provider.healthCheck}</p>
                  <p>Data Provider: {provider.dataProvider}</p>
                  <p>Last Sync: {provider.lastSync ?? "Not synced"}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <SectionTitle icon={Flag} eyebrow="Feature Flags" title="Runtime Toggles" />
          <div className="mt-5 space-y-3">
            {status.featureFlags.map((flag) => (
              <div key={flag.key} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">{flag.label}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{flag.envVar}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${flag.enabled ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                  {flag.enabled ? "Enabled" : "Disabled"}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <SectionTitle icon={ServerCog} eyebrow="Service Registry" title="Dashboard to Registry to Provider" />
          <div className="mt-5 space-y-3">
            {status.services.map((service) => (
              <div key={service.key} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-950 dark:text-white">{service.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                  </div>
                  <span className="w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                    {service.dataProvider}
                  </span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  Provider order: {service.providerPriority.join(" -> ")}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <SectionTitle icon={Activity} eyebrow="Event Bus" title="Future Notification Events" />
          <div className="mt-5 space-y-3">
            {status.recentEvents.map((event) => (
              <div key={event.id} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-950 dark:text-white">{event.name}</p>
                  <span className="rounded-full bg-[#fff4d6] px-2.5 py-1 text-xs font-semibold text-[#8a5a00]">{event.source}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{event.occurredAt}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

function GoHighLevelConnectionCard({ status }: { status: GoHighLevelStatus }) {
  const connection = status.connection;
  const connected = connection.status === "connected";
  const error = connection.status === "error";
  const badgeClass = connected
    ? "bg-emerald-50 text-emerald-700"
    : error
      ? "bg-red-50 text-red-700"
      : "bg-slate-100 text-slate-600";
  const Icon = connected ? CheckCircle2 : error ? Activity : CircleOff;

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <SectionTitle icon={Network} eyebrow="Live Provider" title="GoHighLevel Connection" />
        <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {connection.statusLabel}
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <ConnectionMetric label="Contacts / Leads" value={String(status.newLeads)} />
        <ConnectionMetric label="Opportunities" value={String(status.opportunities)} />
        <ConnectionMetric label="Pipelines" value={String(status.pipelines)} />
        <ConnectionMetric label="Pipeline Value" value={`$${status.pipelineValue.toLocaleString()}`} />
        <ConnectionMetric label="Appointments" value={String(status.appointments)} />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <ConnectionMetric label="Open Tasks" value={String(status.openTasks)} />
        <ConnectionMetric label="AI Calls" value={String(status.aiCalls)} />
        <ConnectionMetric label="Missed Calls" value={String(status.missedCalls)} />
        <ConnectionMetric label="Assessments" value={String(status.assessments)} />
        <ConnectionMetric label="Conversations" value={String(status.activeConversations)} />
        <ConnectionMetric label="Calendars" value={String(status.calendars)} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
        Source: {connection.source === "live" ? "Live GoHighLevel data" : "Mock fallback data"}.
        {" "}Last checked: {new Date(connection.lastChecked).toLocaleString("en-US", { timeZone: "America/New_York" })}.
        {" "}Refreshes every 5 minutes.
      </p>
      {connection.errorMessage ? (
        <p className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-950/30 dark:text-red-200">
          {connection.errorMessage}
        </p>
      ) : null}
    </article>
  );
}

function ConnectionMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/10 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function SummaryCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{detail}</p>
    </article>
  );
}

function SectionTitle({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Network;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">{eyebrow}</p>
        <h2 className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      </div>
    </div>
  );
}

function StatusBadge({ status, label }: { status: string; label: string }) {
  const connected = status === "ready";
  const error = status === "error";
  const Icon = connected ? CheckCircle2 : error ? Activity : CircleOff;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        connected ? "bg-emerald-50 text-emerald-700" : error ? "bg-red-50 text-red-700" : "bg-slate-100 text-slate-600"
      }`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}
