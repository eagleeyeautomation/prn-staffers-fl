# Eagle Eye Command Center Integrations

## Integration Strategy

Eagle Eye Command Center is designed to become a multi-system executive command center. Version 1.0 should not connect live APIs. All integrations listed here are planned future work and should remain behind mock data until approved.

Every integration should follow these rules:

- Store credentials in environment variables.
- Use server-side service classes only.
- Normalize vendor data into internal Eagle Eye types.
- Preserve mock-data fallback mode.
- Add connection status indicators before live usage.
- Add clear error handling and loading states.
- Avoid changing dashboard components when adding a new integration.

## Planned Integrations

| Integration | Purpose | Planned Data |
| --- | --- | --- |
| GoHighLevel | CRM, lead management, calls, texts, appointments, tasks, campaigns. | Leads, opportunities, contacts, calls, missed calls, conversations, appointments, tasks, pipeline stages. |
| WellSky | Home care operations and care delivery system. | Clients, schedules, caregiver assignments, service records, care operations data. |
| HHAeXchange | Home care payer, authorization, and visit management workflows. | Authorizations, visits, EVV records, payer activity, claims-related status. |
| Microsoft 365 | Leadership productivity, email, calendar, and documents. | Outlook calendar, executive meetings, shared mailbox signals, document links. |
| Google Calendar | Scheduling visibility for assessments, interviews, meetings, and starts. | Events, attendees, appointment blocks, calendar availability. |
| Google Business Profile | Reputation and local search performance. | Reviews, ratings, business profile activity, local visibility signals. |
| Facebook | Lead generation and marketing performance. | Facebook leads, campaign performance, source attribution, CPL. |
| Instagram | Social campaign and brand engagement signals. | Engagement metrics, campaign performance, lead-source influence. |
| QuickBooks | Finance and revenue visibility. | Revenue, invoices, payments, aging, financial summaries. |
| Twilio | Voice, SMS, call tracking, and communication events. | Calls, missed calls, recordings, SMS activity, call outcomes, phone numbers. |

## GoHighLevel

Priority: High

Primary role: CRM and growth command source.

Future capabilities:

- Pull leads by state, source, and date.
- Track call outcomes and missed calls.
- Monitor appointment and assessment bookings.
- Surface tasks and overdue follow-ups.
- Attribute campaigns to revenue and client starts.

Sprint 3 foundation:

- Contacts service.
- Opportunities service.
- Calendars service.
- Conversations service.
- Tasks service.
- AI Calls service.
- Pipelines service.
- TypeScript models for all GoHighLevel service domains.
- Mock adapter that simulates GoHighLevel responses.
- Settings-page status indicators for Disconnected, Connected, and Error states.

Version 1.0 status: Mock data only. No live API requests are made.

Sprint 4 live-capable scope:

- GoHighLevel is the only provider connected through the live-capable adapter.
- Dashboard values can be sourced from GoHighLevel for new leads, opportunities, pipeline value, AI calls, missed calls, appointments, assessments, active conversations, open tasks, and calendars.
- If credentials are unavailable or requests fail, the dashboard falls back to mock data and logs the connection error.
- Dashboard data refreshes every 5 minutes.

## WellSky

Priority: High

Primary role: Care delivery and operational execution source.

Future capabilities:

- Track active clients.
- Monitor schedules and service delivery.
- Identify caregiver coverage gaps.
- Compare operational activity by state.

Version 1.0 status: Planned only.

## HHAeXchange

Priority: High

Primary role: Authorization, visit, and payer-related operations.

Future capabilities:

- Monitor authorizations.
- Track visit status.
- Identify EVV exceptions.
- Surface payer workflow risk.

Version 1.0 status: Planned only.

## Microsoft 365

Priority: Medium

Primary role: Executive productivity and calendar context.

Future capabilities:

- Pull leadership meetings.
- Show shared calendar commitments.
- Support executive daily briefing context.

Version 1.0 status: Planned only.

## Google Calendar

Priority: Medium

Primary role: Assessment, interview, meeting, and client-start scheduling.

Future capabilities:

- Show daily schedule.
- Track assessment availability.
- Identify schedule conflicts.

Version 1.0 status: Planned only.

## Google Business Profile

Priority: Medium

Primary role: Reputation and local marketing visibility.

Future capabilities:

- Track reviews and ratings.
- Monitor review velocity.
- Surface reputation alerts.

Version 1.0 status: Planned only.

## Facebook And Instagram

Priority: Medium

Primary role: Paid and organic marketing signal sources.

Future capabilities:

- Track social leads.
- Monitor campaign performance.
- Compare cost per lead.
- Attribute lead source by state.

Version 1.0 status: Planned only.

## QuickBooks

Priority: Medium

Primary role: Finance and revenue visibility.

Future capabilities:

- Show revenue snapshots.
- Track invoice aging.
- Monitor payment activity.
- Support executive finance reporting.

Version 1.0 status: Planned only.

## Twilio

Priority: Medium

Primary role: Communication activity and call intelligence.

Future capabilities:

- Track call volume.
- Identify missed calls.
- Monitor SMS activity.
- Support AI voice and call routing metrics.

Version 1.0 status: Planned only.

## Security Requirements

- Keep all credentials out of source control.
- Use environment variables for secrets.
- Keep integrations server-side.
- Add least-privilege scopes where providers support them.
- Log connection status without logging sensitive payloads.
- Add audit-friendly error handling before live use.
