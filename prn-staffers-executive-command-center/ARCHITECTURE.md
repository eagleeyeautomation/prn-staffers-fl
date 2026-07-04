# Eagle Eye Command Center Architecture

## Overview

Eagle Eye Command Center is a Next.js App Router application built as an executive operations dashboard for PRN Staffers. Version 1.0 is intentionally mock-data driven while the system is prepared for future live integrations.

The current architecture prioritizes:

- A clear application shell.
- Reusable dashboard components.
- Centralized mock data.
- A provider pattern that can switch between mock and live sources.
- Integration boundaries that avoid coupling UI components directly to external APIs.

## Application Structure

```text
src/
  app/
    page.tsx
    operations/
    ai-center/
    caregivers/
    marketing/
    reports/
    settings/
    layout.tsx
    globals.css
  components/
    app-shell.tsx
    dashboard.tsx
    theme-toggle.tsx
  lib/
    mock-dashboard-data.ts
    types.ts
    services/
      dashboard-data-provider.ts
```

## Pages

The application currently includes the Version 1.0 modules:

- Executive Dashboard
- Operations
- AI Center
- Caregivers
- Marketing
- Reports
- Settings

The Executive Dashboard is the primary home screen. Other module pages are intentionally lightweight until their dedicated feature sprints begin.

## Centralized Data Provider

Dashboard data flows through `src/lib/services/dashboard-data-provider.ts`.

Current modes:

- `mock`: Uses local mock dashboard data.
- `live`: Returns live-ready mock fallback data until approved API connections are implemented.

The dashboard page calls the provider and receives a single `DashboardData` object. UI components consume typed props and do not know whether the data came from mock files or future APIs.

This keeps dashboard components reusable and protects the UI from integration-specific logic.

## Mock Data

Mock data is centralized in `src/lib/mock-dashboard-data.ts`.

Mock data currently includes:

- Executive KPIs.
- Business Health and Eagle Score.
- State summaries.
- State performance comparison.
- Charts and trend series.
- Alerts.
- Activity feeds.
- AI performance.
- Marketing snapshot.
- Upcoming schedule.
- Monthly goals.
- Executive brief.
- AI recommendations.
- Trending KPIs.
- State rankings.
- Executive timeline.

Version 1.0 must continue using mock data only.

## Reusable Components

Dashboard components live in `src/components/dashboard.tsx`.

The file currently includes reusable sections for:

- Executive header.
- Business Health overview.
- Executive Intelligence Layer.
- KPI cards.
- Chart gallery.
- State operations cards.
- State performance table.
- Alerts.
- Activity feed.
- AI performance.
- Marketing snapshot.
- Upcoming schedule.
- Quick actions.
- AI insights.
- Executive summary.

Future work may split these into smaller component files as the product grows, but current organization keeps the first version easy to navigate.

## Types

Shared product types live in `src/lib/types.ts`.

These types define the contract between data providers and UI components. New integrations should map external data into these internal types instead of forcing dashboard components to understand vendor-specific shapes.

## Future API Strategy

Live integrations should be added behind service classes and provider interfaces.

Recommended pattern:

1. Create an integration connector class for the external system.
2. Read credentials from environment variables.
3. Validate configuration before making requests.
4. Map vendor data into internal Eagle Eye types.
5. Return normalized data through the central provider.
6. Keep dashboard components unchanged.

Rules:

- Do not initialize API clients at module scope.
- Do not expose credentials to client components.
- Do not call live APIs in Version 1.0.
- Keep mock fallback behavior available.
- Add loading, error, and connection status states before enabling live data.

## Core Platform Architecture

Sprint 3 introduces the internal platform layer that future integrations will use.

Core files:

- `src/lib/platform/integration-manager.ts`
- `src/lib/platform/service-registry.ts`
- `src/lib/platform/models.ts`
- `src/lib/platform/events.ts`
- `src/lib/platform/feature-flags.ts`
- `src/lib/platform/environment.ts`
- `src/lib/platform/status.ts`

The intended data flow is:

```text
Dashboard module -> Service Registry -> Provider Adapter -> Normalized Model
```

Dashboard modules should not call vendor connectors directly. They should request data from the Service Registry so providers can be swapped from mock to live without changing UI components.

Supported provider foundations:

- GoHighLevel
- WellSky
- HHAeXchange
- Microsoft 365
- Google
- Facebook
- Instagram
- QuickBooks
- Twilio

The platform also includes an internal event bus for future notifications such as client creation, assessment scheduling, caregiver assignment, AI call completion, lead conversion, and marketing campaign starts.

## Environment Variables

Integration credentials should be stored in environment variables only.

Future variables should follow predictable names such as:

- `GOHIGHLEVEL_API_KEY`
- `WELLSKY_CLIENT_ID`
- `HHAEXCHANGE_CLIENT_SECRET`
- `MICROSOFT_365_TENANT_ID`
- `GOOGLE_BUSINESS_PROFILE_CLIENT_ID`
- `TWILIO_ACCOUNT_SID`

No credentials should be committed to the repository.

## Testing And Validation

For every completed feature:

- Run `pnpm lint`.
- Run `pnpm build`.
- Verify the dashboard still renders locally when UI changes are made.
- Commit only the intended files.

## Version 1.0 Rule

Version 1.0 is a mock-data product foundation. Live APIs should not be connected until the product architecture, data contracts, and integration settings are stable.
