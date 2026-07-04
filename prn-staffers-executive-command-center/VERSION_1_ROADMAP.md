# Eagle Eye Command Center Version 1.0 Roadmap

## Version 1.0 Scope

Eagle Eye Command Center Version 1.0 is a mock-data executive operations platform for managing PRN Staffers across Delaware, South Carolina, Alabama, and Florida.

Version 1.0 includes only these modules:

- Executive Dashboard
- Operations
- AI Center
- Caregivers
- Marketing
- Reports
- Settings

No live APIs should be connected in Version 1.0.

## Development Rules

- Use mock data only for Version 1.0.
- Do not connect live APIs yet.
- Keep reusable components.
- Keep Eagle Eye branding.
- Run lint and build after changes.
- Commit after each completed feature.

## Executive Dashboard

### Purpose

Give leadership a 30-second view of company health, operational risk, AI performance, lead flow, staffing coverage, and state-level performance.

### Screens

- Main Executive Dashboard
- Mobile Executive Dashboard
- Loading state
- Error state

### Key Widgets

- Executive header
- Business Health score
- KPI cards with sparklines
- Operating trend charts
- State summary cards
- State performance comparison table
- Executive alerts
- Recent activity timeline
- AI Performance widget
- Marketing Snapshot widget
- Upcoming Schedule widget
- Quick Actions panel
- AI Insights panel
- Executive Summary

### Mock Data Needed

- Business health score and factor scores
- KPI values, comparisons, weekly trends, and sparklines
- 30-day chart series
- State metrics for Delaware, South Carolina, Alabama, and Florida
- Alert groups by severity
- Recent activity events
- AI performance metrics
- Marketing metrics
- Schedule items
- AI insight copy
- Executive summary copy

### Future GoHighLevel Data Needed

- Leads by date, source, and state
- Pipeline stages and opportunity values
- Calls, missed calls, and call outcomes
- Chat conversations and AI handoff events
- Appointment and assessment bookings
- Tasks and overdue follow-ups
- Contact records and client lifecycle stage
- Campaign attribution and conversion metrics

### Completion Checklist

- Dashboard renders with mock data only.
- All widgets are responsive on desktop, tablet, and mobile.
- Business Health score is visible near the top.
- Alerts are grouped by severity.
- State performance is easy to compare.
- AI Insights explain the numbers in plain language.
- Loading and error states are polished.
- `pnpm lint` passes.
- `pnpm build` passes.

## Operations

### Purpose

Help operations leaders monitor daily intake flow, task queues, missed calls, assessment scheduling, branch execution, and operational risk.

### Screens

- Operations overview
- Intake queue
- Missed calls
- Open tasks
- Assessment schedule
- State operations detail

### Key Widgets

- Service level summary
- Open task count
- Missed call recovery queue
- Assessment capacity
- Intake status by state
- Follow-up aging
- Operational alerts

### Mock Data Needed

- Intake records
- Missed call records
- Task records
- Assessment slots
- State-level operations metrics
- Service level trends
- Follow-up aging buckets

### Future GoHighLevel Data Needed

- Contact activity
- Opportunities and pipeline stages
- Tasks and assigned users
- Appointment bookings
- Call logs
- SMS and email conversations
- Lead status and follow-up status

### Completion Checklist

- Operations overview is clear and usable.
- Queues are sortable or visually prioritized.
- Missed calls are highlighted.
- Open tasks show ownership and age.
- State-level operations can be compared.
- Uses mock data only.
- `pnpm lint` passes.
- `pnpm build` passes.

## AI Center

### Purpose

Track AI voice, chat, transfer, appointment booking, containment, and knowledge base performance.

### Screens

- AI Center overview
- Voice AI performance
- Chat AI performance
- Human handoffs
- Knowledge base health
- Unanswered questions

### Key Widgets

- Voice AI calls
- Website chats
- Transfer success rate
- Appointments booked by AI
- Questions AI could not answer
- Knowledge base health
- Human handoff queue
- AI performance trend chart

### Mock Data Needed

- AI call counts
- Chat counts
- Transfer outcomes
- Booked appointments
- Unanswered questions
- Knowledge base score
- Handoff records
- AI trend series

### Future GoHighLevel Data Needed

- Call events
- Conversation transcripts
- SMS and chat messages
- Appointment bookings
- Contact records
- Pipeline updates caused by AI
- Task creation events
- Human handoff outcomes

### Completion Checklist

- AI activity is separated from human activity.
- Voice and chat performance are visible.
- Transfer success is easy to understand.
- Knowledge base gaps are visible.
- Uses mock data only.
- `pnpm lint` passes.
- `pnpm build` passes.

## Caregivers

### Purpose

Give leadership visibility into caregiver availability, onboarding, credentialing, utilization, interviews, and staffing risk.

### Screens

- Caregivers overview
- Availability
- Onboarding
- Credentialing
- Interviews
- Staffing risk

### Key Widgets

- Active caregivers
- Caregiver availability
- Credential compliance
- Onboarding pipeline
- Interview schedule
- Utilization rate
- No-show alerts
- Coverage risk by state

### Mock Data Needed

- Caregiver profiles
- Availability by state
- Credential status
- Onboarding stages
- Interview appointments
- Utilization metrics
- No-show events
- Coverage risk scores

### Future GoHighLevel Data Needed

- Caregiver candidate contacts
- Recruiting pipeline stages
- Interview appointments
- Follow-up tasks
- Conversation history
- Forms and onboarding status
- Campaign attribution for caregiver leads

### Completion Checklist

- Active caregiver count is visible.
- Availability is shown by state.
- Credentialing gaps are easy to identify.
- Onboarding pipeline is visible.
- Staffing risks are highlighted.
- Uses mock data only.
- `pnpm lint` passes.
- `pnpm build` passes.

## Marketing

### Purpose

Track growth performance, lead sources, reviews, SEO visibility, referral sources, campaign activity, and conversion rates.

### Screens

- Marketing overview
- Lead sources
- Reviews
- Campaign performance
- SEO snapshot
- Referral sources

### Key Widgets

- Website visitors
- Google reviews
- Facebook leads
- SEO ranking
- Referral sources
- Conversion rate
- Cost per lead placeholder
- Lead source chart

### Mock Data Needed

- Website visitor counts
- Review counts and average rating
- Facebook lead counts
- SEO rank snapshots
- Referral source records
- Conversion rates
- Campaign summaries
- Lead source chart data

### Future GoHighLevel Data Needed

- Lead source attribution
- Campaign membership
- Forms and funnel submissions
- Contact creation dates
- Opportunity conversion status
- Appointment conversion status
- Campaign conversation history

### Completion Checklist

- Marketing performance is visible at a glance.
- Lead sources are clearly compared.
- Reviews and reputation are visible.
- Conversion rate is included.
- Uses mock data only.
- `pnpm lint` passes.
- `pnpm build` passes.

## Reports

### Purpose

Provide executive-ready reporting views for operations, growth, AI performance, staffing, and state-level comparisons.

### Screens

- Reports overview
- Executive summary reports
- State performance reports
- AI performance reports
- Marketing reports
- Caregiver reports

### Key Widgets

- Saved report list
- Report category cards
- State comparison table
- Export-ready summary
- KPI group selector
- Date range placeholder

### Mock Data Needed

- Saved report definitions
- Report categories
- Mock KPI rollups
- State comparison data
- Export status
- Date range presets

### Future GoHighLevel Data Needed

- Contacts
- Opportunities
- Tasks
- Appointments
- Conversation activity
- Source attribution
- Pipeline values
- Conversion rates

### Completion Checklist

- Reports are grouped by business area.
- Executive summaries are easy to scan.
- State comparisons are included.
- Export-ready placeholders are present.
- Uses mock data only.
- `pnpm lint` passes.
- `pnpm build` passes.

## Settings

### Purpose

Manage dashboard configuration, integration readiness, environment variable requirements, user roles, alert rules, and system preferences.

### Screens

- Settings overview
- Integration configuration
- Environment variable checklist
- User roles placeholder
- Alert rules placeholder
- Dashboard preferences

### Key Widgets

- Integration status cards
- Environment variable checklist
- Mock/live data provider status
- User role summary
- Alert rule summary
- Theme preference

### Mock Data Needed

- Integration definitions
- Required environment variables
- Mock connection status
- User role placeholders
- Alert rule placeholders
- Dashboard preference placeholders

### Future GoHighLevel Data Needed

- API key configuration
- Location ID
- User mapping
- Pipeline mapping
- Calendar mapping
- Custom field mapping
- Webhook configuration

### Completion Checklist

- Integration readiness is clear.
- Required environment variables are listed.
- No credentials are exposed in the UI.
- Mock data mode remains the default.
- Settings are organized for future integrations.
- Uses mock data only.
- `pnpm lint` passes.
- `pnpm build` passes.
