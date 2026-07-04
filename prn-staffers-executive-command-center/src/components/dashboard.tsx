import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Bell,
  Bot,
  Brain,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileBarChart,
  Info,
  Plus,
  Settings,
  Sparkles,
  Stethoscope,
  Trophy,
  TriangleAlert,
  UserRound,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  ActivityItem,
  BusinessHealthScore,
  BusinessHealthMetric,
  CalendarItem,
  CeoSnapshotMetric,
  DashboardChart,
  ExecutiveAlert,
  ExecutiveRecommendation,
  ExecutiveSnapshotMetric,
  ExecutiveTimelineItem,
  Kpi,
  MonthlyGoal,
  PerformanceMetric,
  StateRanking,
  StatePerformance,
  StateSummary,
  TrendingKpi,
} from "@/lib/types";

export function ExecutiveHeader({
  currentDate,
  currentTime,
}: {
  currentDate: string;
  currentTime: string;
}) {
  return (
    <section className="animate-rise overflow-hidden rounded-2xl bg-[#061a32] p-6 text-white shadow-2xl shadow-slate-300/60 sm:p-8 dark:shadow-black/30">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c85f]">
            Eagle Eye Command Center
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">Good Morning, George</h1>
            <p className="text-lg text-sky-100">Today is {currentDate}</p>
            <p className="max-w-2xl text-base leading-7 text-slate-200">
              Here&apos;s what&apos;s happening across PRN Staffers.
            </p>
          </div>
          <div className="mt-6">
            <p className="text-3xl font-black tracking-normal sm:text-4xl">🦅 Eagle Eye Command Center</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
              Powered by Eagle Eye Automation
            </p>
            <p className="mt-3 text-base font-medium text-slate-200">
              Managing PRN Staffers Operations Across Four States
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-4 xl:min-w-[460px]">
          <HeaderAction label="Current Time" value={currentTime} icon={CalendarDays} />
          <HeaderAction label="Notifications" value="4" icon={Bell} />
          <HeaderAction label="User Profile" value="George" icon={UserRound} />
          <HeaderAction label="Settings" value="Ready" icon={Settings} />
        </div>
      </div>
    </section>
  );
}

function HeaderAction({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur transition hover:bg-white/15">
      <div className="flex items-center justify-between gap-3">
        <Icon className="h-5 w-5 text-sky-200" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-[#f6c85f]" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

export function ExecutiveKpiRow({ kpis }: { kpis: Kpi[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        const TrendIcon = getTrendIcon(kpi.direction);

        return (
          <article
            key={kpi.label}
            className="animate-rise rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex items-start justify-between gap-4">
              <div className={`grid h-12 w-12 place-items-center rounded-lg ${getIconClass(kpi.status)}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(kpi.status)}`}>
                <TrendIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {kpi.change}
              </span>
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-normal text-slate-950 dark:text-white">{kpi.value}</p>
            <div className="mt-4">
              <MiniSparkline values={kpi.sparkline} status={kpi.status} />
            </div>
            <div className="mt-4 grid gap-1 text-sm">
              <p className="leading-5 text-slate-600 dark:text-slate-300">{kpi.comparison}</p>
              <p className="font-semibold text-slate-500 dark:text-slate-400">{kpi.weeklyTrend}</p>
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">{kpi.detail}</p>
          </article>
        );
      })}
    </section>
  );
}

export function BusinessHealthOverview({ health }: { health: BusinessHealthScore }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <div className="rounded-2xl bg-[#071a33] p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c85f]">Eagle Score</p>
              <h2 className="mt-2 text-2xl font-semibold">Company Health</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-semibold text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {health.status}
            </span>
          </div>
          <div className="mt-6 flex items-end gap-3">
            <p className="text-6xl font-semibold tracking-tight">{health.score}%</p>
            <p className="pb-2 text-sm text-slate-300">Eagle Score</p>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-200">{health.explanation}</p>
        </div>
        <div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading eyebrow="Score Breakdown" title="Operations, AI, Staffing, Marketing, Customer Care" compact />
            <span className="inline-flex w-fit rounded-full bg-[#fff4d6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5a00]">
              Mock data only
            </span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {health.factors.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{metric.label}</p>
                  <span className={`h-2.5 w-2.5 rounded-full ${getHealthDotClass(metric.status)}`} />
                </div>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-300">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExecutiveIntelligenceLayer({
  brief,
  alerts,
  ceoSnapshot,
  recommendations,
  trendingKpis,
  stateRankings,
  timeline,
}: {
  brief: string;
  alerts: ExecutiveAlert[];
  ceoSnapshot: CeoSnapshotMetric[];
  recommendations: ExecutiveRecommendation[];
  trendingKpis: TrendingKpi[];
  stateRankings: StateRanking[];
  timeline: ExecutiveTimelineItem[];
}) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow="Executive Intelligence" title="AI-Guided Operating Layer" />
        <p className="max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          Mock-data intelligence designed to become live once approved integrations are connected.
        </p>
      </div>
      <div className="grid gap-4 2xl:grid-cols-[1.15fr_0.85fr]">
        <ExecutiveBriefWidget brief={brief} />
        <CriticalAlertsWidget alerts={alerts} />
      </div>
      <CeoSnapshotWidget metrics={ceoSnapshot} />
      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <AiRecommendationsWidget recommendations={recommendations} />
        <TrendingKpisWidget trends={trendingKpis} />
      </div>
      <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <StateRankingsWidget rankings={stateRankings} />
        <ExecutiveTimelineWidget timeline={timeline} />
      </div>
    </section>
  );
}

function ExecutiveBriefWidget({ brief }: { brief: string }) {
  return (
    <article className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Executive Morning Brief</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Yesterday&apos;s Business Activity</h2>
        </div>
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#071a33] text-[#f6c85f]">
          <Brain className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-5 rounded-2xl bg-sky-50 p-5 text-base leading-8 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
        {brief}
      </p>
    </article>
  );
}

function CeoSnapshotWidget({ metrics }: { metrics: CeoSnapshotMetric[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow="CEO Snapshot" title="Decision Priorities" compact />
        <p className="max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          A concise leadership readout built from Business Health, state performance, operational focus, and weekly growth signals.
        </p>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{metric.label}</p>
              <span className={`h-2.5 w-2.5 rounded-full ${getHealthDotClass(metric.status)}`} />
            </div>
            <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{metric.value}</p>
            <p className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-300">{metric.detail}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function CriticalAlertsWidget({ alerts }: { alerts: ExecutiveAlert[] }) {
  const groups: ExecutiveAlert["priority"][] = ["Critical", "Warning", "Informational"];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Critical Alerts" title="Color-Coded Severity" compact />
      <div className="mt-5 grid gap-3">
        {groups.map((group) => {
          const groupedAlerts = alerts.filter((alert) => alert.priority === group);
          const Icon = getAlertIcon(group);

          return (
            <div key={group} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${getSeverityIconClass(group)}`} aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{group}</h3>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getSeverityBadgeClass(group)}`}>
                  {groupedAlerts.length}
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {groupedAlerts.length > 0 ? (
                  groupedAlerts.map((alert) => (
                    <p key={alert.title} className={`rounded-xl border px-3 py-2 text-sm leading-5 text-slate-700 dark:text-slate-200 ${getAlertClass(alert.color)}`}>
                      <span className="font-semibold">{alert.title}:</span> {alert.body}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">No {group.toLowerCase()} alerts.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function AiRecommendationsWidget({ recommendations }: { recommendations: ExecutiveRecommendation[] }) {
  return (
    <article className="rounded-2xl border border-[#f6c85f]/50 bg-white p-6 shadow-sm dark:border-[#f6c85f]/30 dark:bg-slate-950">
      <SectionHeading eyebrow="AI Recommendations" title="Suggested Executive Actions" compact />
      <div className="mt-5 space-y-3">
        {recommendations.map((recommendation, index) => (
          <div key={recommendation.title} className="flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#fff4d6] text-sm font-semibold text-[#8a5a00]">
              {index + 1}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-slate-950 dark:text-white">{recommendation.title}</h3>
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${getRecommendationClass(recommendation.priority)}`}>
                  {recommendation.priority}
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{recommendation.rationale}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function TrendingKpisWidget({ trends }: { trends: TrendingKpi[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Trending KPIs" title="7-Day Executive Trends" compact />
      <div className="mt-5 grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
        {trends.map((trend) => (
          <div key={trend.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{trend.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{trend.value}</p>
              </div>
              <span className={`h-2.5 w-2.5 rounded-full ${getHealthDotClass(trend.status)}`} />
            </div>
            <div className="mt-3 h-12">
              <LineChart values={trend.values} />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700 dark:text-sky-300">{trend.change}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function StateRankingsWidget({ rankings }: { rankings: StateRanking[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-[#071a33] p-6 text-white shadow-sm dark:border-slate-800">
      <SectionHeading eyebrow="State Performance" title="Ranked by Business Health, Leads, AI, and Capacity" compact inverse />
      <div className="mt-5 space-y-3">
        {rankings.map((ranking) => (
          <div key={ranking.state} className="rounded-2xl bg-white/10 p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#f6c85f] font-semibold text-[#071a33]">
                  {ranking.rank}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{ranking.state}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-300">{ranking.summary}</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-4 lg:min-w-[460px]">
                <RankingMetric label="Health" value={ranking.businessHealth} />
                <RankingMetric label="Leads" value={String(ranking.leads)} />
                <RankingMetric label="AI" value={ranking.aiPerformance} />
                <RankingMetric label="Capacity" value={ranking.caregiverCapacity} />
              </div>
              <span className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${getRankingClass(ranking.status)}`}>
                Score {ranking.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function RankingMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-2">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-sky-200">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function ExecutiveTimelineWidget({ timeline }: { timeline: ExecutiveTimelineItem[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Executive Timeline" title="Chronological Activity Feed" compact />
      <div className="mt-5 max-h-[520px] space-y-1 overflow-y-auto pr-2">
        {timeline.map((item, index) => (
          <div key={`${item.time}-${item.title}`} className="grid grid-cols-[76px_1fr] gap-4 py-3 sm:grid-cols-[92px_1fr]">
            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.time}</div>
            <div className="relative border-l border-slate-200 pl-5 dark:border-slate-800">
              <span className={`absolute -left-4 top-0 grid h-8 w-8 place-items-center rounded-full border border-white shadow-sm dark:border-slate-950 ${index === timeline.length - 1 ? "bg-[#f6c85f] text-[#071a33]" : "bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-200"}`}>
                <TimelineIcon category={item.category} />
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-slate-950 dark:text-white">{item.title}</p>
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                  {item.category}
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function ExecutiveSnapshot({ metrics }: { metrics: ExecutiveSnapshotMetric[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow="Executive Snapshot" title="Today's Key Business Metrics" compact />
        <p className="max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          The fastest read on intake, assessments, staffing, AI containment, and customer sentiment.
        </p>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{metric.label}</p>
              <span className={`h-2.5 w-2.5 rounded-full ${getHealthDotClass(metric.status)}`} />
            </div>
            <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{metric.value}</p>
            <p className="mt-2 text-sm leading-5 text-slate-500 dark:text-slate-400">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MonthlyGoalsProgress({ goals }: { goals: MonthlyGoal[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Monthly Goals" title="Progress Against Plan" compact />
      <div className="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
        {goals.map((goal) => {
          const progress = Math.min(Math.round((goal.current / goal.target) * 100), 100);

          return (
            <article key={goal.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{goal.label}</h3>
                <span className={`h-2.5 w-2.5 rounded-full ${getHealthDotClass(goal.status)}`} />
              </div>
              <div className="mt-4 flex items-end gap-2">
                <p className="text-3xl font-semibold text-slate-950 dark:text-white">{progress}%</p>
                <p className="pb-1 text-xs text-slate-500 dark:text-slate-400">{goal.current}/{goal.target} {goal.unit}</p>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white dark:bg-slate-950">
                <div className={`h-full rounded-full ${getGoalBarClass(goal.status)}`} style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-3 text-sm leading-5 text-slate-500 dark:text-slate-400">{goal.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ChartGallery({ charts }: { charts: DashboardChart[] }) {
  return (
    <section>
      <SectionHeading eyebrow="Charts" title="Operating Trends" />
      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {charts.map((chart) => (
          <article key={chart.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{chart.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{chart.subtitle}</p>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                {chart.series[0].label}
              </span>
            </div>
            <div className="mt-5 h-40">
              {chart.type === "line" ? <LineChart values={chart.series[0].values} /> : <BarChart values={chart.series[0].values} />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StateOperationsGrid({ stateSummaries }: { stateSummaries: StateSummary[] }) {
  return (
    <section>
      <SectionHeading eyebrow="State Summary Cards" title="Four-State Operations" />
      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
        {stateSummaries.map((state) => (
          <article
            key={state.state}
            className="animate-rise rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{state.state}</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Today&apos;s operating picture</p>
              </div>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${getHealthClass(state.health)}`}>
                <span className="h-2 w-2 rounded-full bg-current" />
                {state.health}
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {state.metrics.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  <span className="text-sm text-slate-600 dark:text-slate-300">{metric.label}</span>
                  <span className="text-base font-semibold text-slate-950 dark:text-white">{metric.value}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StatePerformanceTable({ rows }: { rows: StatePerformance[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="State Performance" title="Four-State Comparison" compact />
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Leads</th>
              <th className="px-4 py-2">Clients</th>
              <th className="px-4 py-2">AI Calls</th>
              <th className="px-4 py-2">Assessments</th>
              <th className="px-4 py-2">Health</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.state}
                className={`rounded-2xl ${row.rank === "strongest" ? "bg-emerald-50 dark:bg-emerald-950/30" : row.rank === "weakest" ? "bg-red-50 dark:bg-red-950/30" : "bg-slate-50 dark:bg-slate-900"}`}
              >
                <td className="rounded-l-2xl px-4 py-4 font-semibold text-slate-950 dark:text-white">
                  {row.state}
                  {row.rank !== "standard" ? (
                    <span className="ml-2 rounded-full bg-white/80 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                      {row.rank === "strongest" ? "Strongest" : "Weakest"}
                    </span>
                  ) : null}
                </td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-200">{row.leads}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-200">{row.clients}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-200">{row.aiCalls}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-200">{row.assessments}</td>
                <td className="rounded-r-2xl px-4 py-4">
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${getHealthClass(row.health)}`}>
                    <span className="h-2 w-2 rounded-full bg-current" />
                    {row.health}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CommandCenterGrid({
  activities,
  alerts,
  aiPerformance,
  marketingSnapshot,
  upcomingCalendar,
}: {
  activities: ActivityItem[];
  alerts: ExecutiveAlert[];
  aiPerformance: PerformanceMetric[];
  marketingSnapshot: PerformanceMetric[];
  upcomingCalendar: CalendarItem[];
}) {
  return (
    <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
      <LiveActivityFeed activities={activities} />
      <div className="grid gap-4">
        <ExecutiveAlerts alerts={alerts} />
        <UpcomingSchedule items={upcomingCalendar} />
      </div>
      <AiPerformanceWidget metrics={aiPerformance} />
      <MarketingSnapshot metrics={marketingSnapshot} />
    </section>
  );
}

function LiveActivityFeed({ activities }: { activities: ActivityItem[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:row-span-2 dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Live Activity" title="Newest First" compact />
      <div className="mt-5 max-h-[460px] space-y-1 overflow-y-auto pr-2">
        {activities.map((activity, index) => (
          <div key={`${activity.time}-${activity.title}`} className="grid grid-cols-[76px_1fr] gap-4 py-3 sm:grid-cols-[88px_1fr]">
            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">{activity.time}</div>
            <div className="relative border-l border-slate-200 pl-5 dark:border-slate-800">
              <span className={`absolute -left-4 top-0 grid h-8 w-8 place-items-center rounded-full border border-white shadow-sm dark:border-slate-950 ${index === 0 ? "bg-[#f6c85f] text-[#071a33]" : "bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-200"}`}>
                <ActivityIcon tone={activity.tone} />
              </span>
              <p className="font-semibold text-slate-950 dark:text-white">{activity.title}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{activity.location}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">{activity.tone}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function ExecutiveAlerts({ alerts }: { alerts: ExecutiveAlert[] }) {
  const groups: ExecutiveAlert["priority"][] = ["Critical", "Warning", "Informational"];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Executive Alerts" title="Grouped by Severity" compact />
      <div className="mt-5 space-y-5">
        {groups.map((group) => {
          const groupedAlerts = alerts.filter((alert) => alert.priority === group);
          const Icon = getAlertIcon(group);

          return (
            <div key={group}>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{group}</h3>
              </div>
              <div className="mt-2 space-y-2">
                {groupedAlerts.length > 0 ? (
                  groupedAlerts.map((alert) => (
                    <div key={alert.title} className={`rounded-2xl border p-4 ${getAlertClass(alert.color)}`}>
                      <h4 className="font-semibold text-slate-950 dark:text-white">{alert.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{alert.body}</p>
                    </div>
                  ))
                ) : (
                  <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                    No {group.toLowerCase()} alerts.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function AiPerformanceWidget({ metrics }: { metrics: PerformanceMetric[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-[#071a33] p-5 text-white shadow-sm dark:border-slate-800">
      <SectionHeading eyebrow="AI Performance" title="Automation Control" compact inverse />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <WidgetMetric key={metric.label} metric={metric} inverse />
        ))}
      </div>
    </article>
  );
}

function MarketingSnapshot({ metrics }: { metrics: PerformanceMetric[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Marketing Snapshot" title="Growth Signals" compact />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <WidgetMetric key={metric.label} metric={metric} />
        ))}
      </div>
    </article>
  );
}

function UpcomingSchedule({ items }: { items: CalendarItem[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Upcoming Schedule" title="Today's Calendar" compact />
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={`${item.time}-${item.title}`} className="flex gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-900">
            <div className="w-20 shrink-0 text-sm font-semibold text-sky-700">{item.time}</div>
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">{item.title}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function QuickActionsPanel() {
  const actions = [
    { label: "New Client", icon: Plus, detail: "Create intake record" },
    { label: "Add Caregiver", icon: Stethoscope, detail: "Start onboarding" },
    { label: "Schedule Assessment", icon: CalendarDays, detail: "Book next slot" },
    { label: "Launch AI", icon: Bot, detail: "Open AI center" },
    { label: "Reports", icon: FileBarChart, detail: "Executive reporting" },
    { label: "Open GoHighLevel", icon: ExternalLink, detail: "CRM workspace" },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <SectionHeading eyebrow="Executive Action Center" title="Most Common Tasks" compact />
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              className="group flex min-h-32 flex-col items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-950"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-sky-700 shadow-sm transition group-hover:text-[#071a33] dark:bg-slate-950 dark:text-sky-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-950 dark:text-white">{action.label}</span>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{action.detail}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function ExecutiveSummary({ summary }: { summary: string[] }) {
  return (
    <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm dark:border-sky-900 dark:bg-sky-950/30">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">AI Executive Summary</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Executive Brief - Saturday, July 4</h2>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#071a33] text-[#f6c85f]">
          <Zap className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        {summary.map((line) => (
          <p key={line} className="rounded-2xl bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

export function AiInsightsPanel({ insights }: { insights: string[] }) {
  return (
    <section className="rounded-2xl border border-[#f6c85f]/50 bg-white p-6 shadow-sm dark:border-[#f6c85f]/30 dark:bg-slate-950">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#fff4d6] text-[#8a5a00]">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a5a00] dark:text-[#f6c85f]">AI Insight</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">What the Numbers Mean</h2>
          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            {insights.map((insight) => (
              <p key={insight} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {insight}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WidgetMetric({ metric, inverse = false }: { metric: PerformanceMetric; inverse?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${inverse ? "bg-white/10" : "bg-slate-50 dark:bg-slate-900"}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${inverse ? "text-sky-200" : "text-slate-500"}`}>
        {metric.label}
      </p>
      <p className={`mt-2 text-2xl font-semibold ${inverse ? "text-white" : "text-slate-950 dark:text-white"}`}>{metric.value}</p>
      <p className={`mt-1 text-sm ${inverse ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>{metric.detail}</p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  compact = false,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  compact?: boolean;
  inverse?: boolean;
}) {
  return (
    <div>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${inverse ? "text-[#f6c85f]" : "text-sky-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`${compact ? "mt-1 text-xl" : "mt-2 text-2xl"} font-semibold ${inverse ? "text-white" : "text-slate-950 dark:text-white"}`}>
        {title}
      </h2>
    </div>
  );
}

function MiniSparkline({ values, status }: { values: number[]; status: Kpi["status"] }) {
  const points = buildPoints(values, 150, 42);
  const color = status === "watch" ? "#f6c85f" : status === "critical" ? "#ef4444" : "#0284c7";

  return (
    <svg viewBox="0 0 150 42" className="h-12 w-full overflow-visible" role="img" aria-label="Weekly trend sparkline">
      <path d={points.area} fill={color} opacity="0.12" />
      <path d={points.line} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineChart({ values }: { values: number[] }) {
  const points = buildPoints(values, 520, 150);

  return (
    <svg viewBox="0 0 520 150" className="h-full w-full overflow-visible" role="img" aria-label="Line chart">
      {[0, 1, 2].map((line) => (
        <line key={line} x1="0" x2="520" y1={line * 60 + 18} y2={line * 60 + 18} stroke="currentColor" className="text-slate-100 dark:text-slate-800" />
      ))}
      <path d={points.area} fill="#38bdf8" opacity="0.16" />
      <path d={points.line} fill="none" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BarChart({ values }: { values: number[] }) {
  const max = Math.max(...values);
  const gap = 10;
  const width = 520;
  const height = 150;
  const barWidth = (width - gap * (values.length - 1)) / values.length;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="Bar chart">
      {values.map((value, index) => {
        const barHeight = (value / max) * 120 + 12;
        const x = index * (barWidth + gap);
        const y = height - barHeight;

        return <rect key={`${value}-${index}`} x={x} y={y} width={barWidth} height={barHeight} rx="10" fill={index % 2 === 0 ? "#0284c7" : "#f6c85f"} opacity="0.9" />;
      })}
    </svg>
  );
}

function buildPoints(values: number[], width: number, height: number) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = width / (values.length - 1 || 1);
  const coords = values.map((value, index) => {
    const x = index * step;
    const y = height - ((value - min) / range) * (height - 8) - 4;

    return [x, y] as const;
  });
  const line = coords.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
  const area = `${line} L ${width} ${height} L 0 ${height} Z`;

  return { line, area };
}

function ActivityIcon({ tone }: { tone: string }) {
  if (tone.includes("AI")) {
    return <Bot className="h-4 w-4" aria-hidden="true" />;
  }

  if (tone.includes("Marketing")) {
    return <Sparkles className="h-4 w-4" aria-hidden="true" />;
  }

  if (tone.includes("Scheduling")) {
    return <CalendarDays className="h-4 w-4" aria-hidden="true" />;
  }

  if (tone.includes("Caregivers")) {
    return <Stethoscope className="h-4 w-4" aria-hidden="true" />;
  }

  return <Info className="h-4 w-4" aria-hidden="true" />;
}

function TimelineIcon({ category }: { category: ExecutiveTimelineItem["category"] }) {
  switch (category) {
    case "AI":
      return <Bot className="h-4 w-4" aria-hidden="true" />;
    case "Assessment":
      return <ClipboardList className="h-4 w-4" aria-hidden="true" />;
    case "Referral":
      return <UserRound className="h-4 w-4" aria-hidden="true" />;
    case "Staffing":
      return <Stethoscope className="h-4 w-4" aria-hidden="true" />;
    case "Marketing":
      return <Sparkles className="h-4 w-4" aria-hidden="true" />;
    case "Operations":
      return <Settings className="h-4 w-4" aria-hidden="true" />;
    case "Lead":
    default:
      return <Trophy className="h-4 w-4" aria-hidden="true" />;
  }
}

function getAlertIcon(priority: ExecutiveAlert["priority"]) {
  if (priority === "Critical") {
    return AlertCircle;
  }

  if (priority === "Warning") {
    return TriangleAlert;
  }

  return CheckCircle2;
}

function getSeverityIconClass(priority: ExecutiveAlert["priority"]) {
  switch (priority) {
    case "Critical":
      return "text-red-600";
    case "Warning":
      return "text-[#8a5a00]";
    case "Informational":
      return "text-emerald-600";
  }
}

function getSeverityBadgeClass(priority: ExecutiveAlert["priority"]) {
  switch (priority) {
    case "Critical":
      return "bg-red-100 text-red-700";
    case "Warning":
      return "bg-[#fff4d6] text-[#8a5a00]";
    case "Informational":
      return "bg-emerald-100 text-emerald-700";
  }
}

function getRecommendationClass(priority: ExecutiveRecommendation["priority"]) {
  switch (priority) {
    case "High":
      return "bg-red-50 text-red-700";
    case "Medium":
      return "bg-[#fff4d6] text-[#8a5a00]";
    case "Low":
      return "bg-emerald-50 text-emerald-700";
  }
}

function getRankingClass(status: StateRanking["status"]) {
  switch (status) {
    case "strong":
      return "bg-emerald-400/15 text-emerald-200";
    case "watch":
      return "bg-[#f6c85f]/20 text-[#f6c85f]";
    case "critical":
      return "bg-red-400/15 text-red-200";
    case "neutral":
    default:
      return "bg-white/10 text-slate-200";
  }
}

function getTrendIcon(direction: Kpi["direction"]) {
  if (direction === "up") {
    return ArrowUp;
  }

  if (direction === "down") {
    return ArrowDown;
  }

  return ArrowRight;
}

function getIconClass(status: Kpi["status"]) {
  switch (status) {
    case "strong":
      return "bg-sky-50 text-sky-700";
    case "watch":
      return "bg-[#fff4d6] text-[#8a5a00]";
    case "critical":
      return "bg-red-50 text-red-700";
    case "neutral":
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getStatusClass(status: Kpi["status"]) {
  switch (status) {
    case "strong":
      return "bg-emerald-50 text-emerald-700";
    case "watch":
      return "bg-[#fff4d6] text-[#8a5a00]";
    case "critical":
      return "bg-red-50 text-red-700";
    case "neutral":
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getHealthDotClass(status: BusinessHealthMetric["status"]) {
  switch (status) {
    case "strong":
      return "bg-emerald-500";
    case "watch":
      return "bg-[#f6c85f]";
    case "critical":
      return "bg-red-500";
    case "neutral":
    default:
      return "bg-slate-400";
  }
}

function getGoalBarClass(status: MonthlyGoal["status"]) {
  switch (status) {
    case "strong":
      return "bg-emerald-500";
    case "watch":
      return "bg-[#f6c85f]";
    case "critical":
      return "bg-red-500";
    case "neutral":
    default:
      return "bg-sky-600";
  }
}

function getHealthClass(health: StateSummary["health"]) {
  switch (health) {
    case "Healthy":
      return "bg-emerald-50 text-emerald-700";
    case "Needs Attention":
      return "bg-[#fff4d6] text-[#8a5a00]";
    case "Critical":
      return "bg-red-50 text-red-700";
  }
}

function getAlertClass(color: ExecutiveAlert["color"]) {
  switch (color) {
    case "red":
      return "border-red-200 bg-red-50";
    case "orange":
      return "border-orange-200 bg-orange-50";
    case "yellow":
      return "border-yellow-200 bg-yellow-50";
    case "green":
      return "border-emerald-200 bg-emerald-50";
  }
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="overflow-hidden rounded-lg bg-[#071a33] p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c85f]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">{description}</p>
    </section>
  );
}

export function SectionPage({
  title,
  eyebrow,
  description,
  metrics,
}: {
  title: string;
  eyebrow: string;
  description: string;
  metrics: string[];
}) {
  return (
    <div className="space-y-6">
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Current snapshot</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">{metric}</p>
          </article>
        ))}
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Coming next</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950">Integration-ready workspace</h3>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          This page is structured with mock data now, ready for GoHighLevel, phone, chat, assessment, scheduling,
          reporting, and workforce systems when those API connections are approved.
        </p>
      </section>
    </div>
  );
}
