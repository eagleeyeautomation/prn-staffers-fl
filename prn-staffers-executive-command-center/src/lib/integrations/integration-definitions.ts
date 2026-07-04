import type { IntegrationDefinition } from "@/lib/types";

export const integrationDefinitions: IntegrationDefinition[] = [
  {
    id: "gohighlevel",
    name: "GoHighLevel",
    description: "Leads, calls, chats, pipeline stages, campaigns, and tasks.",
    enabledEnvVar: "GHL_ENABLED",
    requiredEnvVars: ["GHL_API_KEY", "GHL_LOCATION_ID"],
    optionalEnvVars: ["GHL_BASE_URL"],
  },
  {
    id: "google_business_profile",
    name: "Google Business Profile",
    description: "Local profile visibility, reviews, calls, website actions, and market search signals.",
    enabledEnvVar: "GBP_ENABLED",
    requiredEnvVars: ["GBP_CLIENT_ID", "GBP_CLIENT_SECRET", "GBP_REFRESH_TOKEN", "GBP_ACCOUNT_ID"],
    optionalEnvVars: ["GBP_LOCATION_GROUP_ID"],
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Paid social lead forms, campaign performance, page messages, and audience reporting.",
    enabledEnvVar: "FACEBOOK_ENABLED",
    requiredEnvVars: ["FACEBOOK_APP_ID", "FACEBOOK_APP_SECRET", "FACEBOOK_ACCESS_TOKEN", "FACEBOOK_AD_ACCOUNT_ID"],
    optionalEnvVars: ["FACEBOOK_PAGE_ID"],
  },
  {
    id: "microsoft_365",
    name: "Microsoft 365",
    description: "Shared mailboxes, calendars, Teams activity, executive notifications, and documents.",
    enabledEnvVar: "M365_ENABLED",
    requiredEnvVars: ["M365_TENANT_ID", "M365_CLIENT_ID", "M365_CLIENT_SECRET"],
    optionalEnvVars: ["M365_SHARED_MAILBOX"],
  },
  {
    id: "wellsky",
    name: "WellSky",
    description: "Client census, assessments, care plans, authorizations, and operational care metrics.",
    enabledEnvVar: "WELLSKY_ENABLED",
    requiredEnvVars: ["WELLSKY_API_KEY", "WELLSKY_BASE_URL"],
    optionalEnvVars: ["WELLSKY_AGENCY_ID"],
  },
  {
    id: "hhaexchange",
    name: "HHAeXchange",
    description: "EVV, caregiver schedules, visit verification, authorizations, and payer workflows.",
    enabledEnvVar: "HHAEXCHANGE_ENABLED",
    requiredEnvVars: ["HHAEXCHANGE_API_KEY", "HHAEXCHANGE_BASE_URL"],
    optionalEnvVars: ["HHAEXCHANGE_PROVIDER_ID"],
  },
];

