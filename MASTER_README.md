# Eagle Eye Automation Ecosystem

Eagle Eye Automation is organized as a small set of focused repositories that separate public marketing, internal operations, workflow documentation, and reusable automation assets.

## Repositories

### `agency-website`

The public Eagle Eye Automation website. It explains the agency offer, presents automation services, and routes prospects into the contact or booking flow.

Deployment target: Vercel production site for `eagleeyeautomation.com`.

### `prn-command-center`

Internal PRN staffing operations dashboard. It gives operators a command-center view of open shifts, clinician readiness, compliance alerts, and recent automation activity.

Deployment target: private/internal Vercel project.

### `ghl-workflows`

GoHighLevel workflow documentation and deployment registry. It tracks workflow purpose, ownership, required variables, testing steps, and release readiness.

Deployment target: Vercel documentation portal.

### `automation-library`

Reusable automation library for common client and internal patterns. It stores implementation guidance for lead routing, onboarding, reporting, reminders, and operational handoffs.

Deployment target: Vercel documentation portal.

## How They Work Together

The website creates demand and explains the offer. The workflow and automation repositories provide the repeatable delivery system behind that offer. The PRN command center demonstrates how a specialized operational dashboard can bring those automations into a clear daily workspace.

## Deployment Standard

Each deployable repository follows the same baseline:

- Next.js application
- `pnpm` package manager
- Node.js `>=20.9.0`
- `.env.example` for public configuration
- `DEPLOYMENT.md` with Vercel setup notes
- `pnpm check` for TypeScript and production build validation

## Recommended Release Flow

1. Update the repository-specific app or documentation.
2. Run `pnpm install --frozen-lockfile`.
3. Run `pnpm check`.
4. Commit to `main`.
5. Push to GitHub.
6. Let Vercel build from the connected repository.
