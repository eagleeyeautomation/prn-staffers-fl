import { CheckCircle2, CircleOff, KeyRound, Loader2, ServerCog, ShieldCheck, TriangleAlert } from "lucide-react";
import type { GoHighLevelServiceStatus } from "@/lib/integrations/gohighlevel";
import type { IntegrationConnection } from "@/lib/types";

export function IntegrationSettings({
  connections,
  dataProviderMode,
  goHighLevelServiceStatuses,
}: {
  connections: IntegrationConnection[];
  dataProviderMode: string;
  goHighLevelServiceStatuses: GoHighLevelServiceStatus[];
}) {
  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-[#071a33] p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c85f]">Live Data Architecture</p>
        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">Integration Configuration</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Enable each connector with environment variables while the dashboard continues to run on mock fallback data.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-4">
            <p className="text-sm text-slate-300">Data provider</p>
            <p className="mt-1 text-2xl font-semibold capitalize">{dataProviderMode}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {connections.map((connection) => (
          <article key={connection.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <StatusIcon status={connection.status} />
                  <h3 className="text-lg font-semibold text-slate-950">{connection.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{connection.description}</p>
              </div>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${getBadgeClass(connection.status)}`}>
                {connection.statusLabel}
              </span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Field label="Enabled variable" value={connection.enabledEnvVar} active={connection.enabled} />
              <Field label="Credential status" value={connection.configured ? "Configured" : "Pending"} active={connection.configured} />
            </div>

            <div className="mt-5 rounded-lg bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                <KeyRound className="h-4 w-4 text-sky-700" aria-hidden="true" />
                Environment credentials
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {connection.requiredEnvVars.map((key) => {
                  const missing = connection.missingEnvVars.includes(key);

                  return (
                    <span
                      key={key}
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                        missing
                          ? "border-amber-200 bg-amber-50 text-amber-800"
                          : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {key}
                    </span>
                  );
                })}
              </div>
              {connection.optionalEnvVars && connection.optionalEnvVars.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {connection.optionalEnvVars.map((key) => (
                    <span key={key} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                      {key} optional
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {connection.id === "gohighlevel" ? (
              <GoHighLevelConfiguration connection={connection} serviceStatuses={goHighLevelServiceStatuses} />
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}

function GoHighLevelConfiguration({
  connection,
  serviceStatuses,
}: {
  connection: IntegrationConnection;
  serviceStatuses: GoHighLevelServiceStatus[];
}) {
  return (
    <div className="mt-5 space-y-4 rounded-lg border border-sky-100 bg-sky-50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
            <ShieldCheck className="h-4 w-4 text-sky-700" aria-hidden="true" />
            Secure GoHighLevel configuration
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Credentials are read from server-side environment variables. This foundation uses mock adapters only and does not
            make live GoHighLevel API requests.
          </p>
        </div>
        <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${getConnectionLabelClass(connection.status)}`}>
          {connection.statusLabel}
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <CredentialField label="Enable connector" envKey={connection.enabledEnvVar} configured={connection.enabled} />
        <CredentialField label="API key" envKey="GHL_API_KEY" configured={!connection.missingEnvVars.includes("GHL_API_KEY")} secret />
        <CredentialField label="Location ID" envKey="GHL_LOCATION_ID" configured={!connection.missingEnvVars.includes("GHL_LOCATION_ID")} />
      </div>

      <div className="rounded-lg bg-white p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <ServerCog className="h-4 w-4 text-sky-700" aria-hidden="true" />
          Service foundation
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {serviceStatuses.map((service) => (
            <div key={service.name} className="rounded-lg border border-slate-200 p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-950">{service.name}</p>
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${getGoHighLevelServiceBadgeClass(service.status)}`}>
                  {formatServiceStatus(service.status)}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{service.recordsAvailable} mock records available</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">{service.source} adapter</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CredentialField({
  label,
  envKey,
  configured,
  secret = false,
}: {
  label: string;
  envKey: string;
  configured: boolean;
  secret?: boolean;
}) {
  return (
    <div className="rounded-lg bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-slate-950">{envKey}</p>
      <p className={`mt-1 text-xs font-semibold ${configured ? "text-emerald-700" : "text-amber-700"}`}>
        {configured ? (secret ? "Configured securely" : "Configured") : "Not configured"}
      </p>
    </div>
  );
}

function Field({ label, value, active }: { label: string; value: string; active: boolean }) {
  return (
    <div className="rounded-lg border border-slate-200 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className={`mt-2 text-sm font-semibold ${active ? "text-emerald-700" : "text-slate-950"}`}>{value}</p>
    </div>
  );
}

function StatusIcon({ status }: { status: IntegrationConnection["status"] }) {
  if (status === "ready") {
    return <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />;
  }

  if (status === "missing_credentials" || status === "error") {
    return <TriangleAlert className="h-5 w-5 text-amber-600" aria-hidden="true" />;
  }

  if (status === "disabled") {
    return <CircleOff className="h-5 w-5 text-slate-400" aria-hidden="true" />;
  }

  return <Loader2 className="h-5 w-5 animate-spin text-sky-700" aria-hidden="true" />;
}

function getBadgeClass(status: IntegrationConnection["status"]) {
  switch (status) {
    case "ready":
      return "bg-emerald-50 text-emerald-700";
    case "missing_credentials":
      return "bg-amber-50 text-amber-800";
    case "error":
      return "bg-red-50 text-red-700";
    case "disabled":
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function getConnectionLabelClass(status: IntegrationConnection["status"]) {
  switch (status) {
    case "ready":
      return "bg-emerald-100 text-emerald-700";
    case "error":
      return "bg-red-100 text-red-700";
    case "missing_credentials":
    case "disabled":
    default:
      return "bg-slate-200 text-slate-700";
  }
}

function getGoHighLevelServiceBadgeClass(status: GoHighLevelServiceStatus["status"]) {
  switch (status) {
    case "connected":
      return "bg-emerald-50 text-emerald-700";
    case "error":
      return "bg-red-50 text-red-700";
    case "disconnected":
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function formatServiceStatus(status: GoHighLevelServiceStatus["status"]) {
  switch (status) {
    case "connected":
      return "Connected";
    case "error":
      return "Error";
    case "disconnected":
    default:
      return "Disconnected";
  }
}
