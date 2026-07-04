export type EnvironmentVariableDefinition = {
  key: string;
  description: string;
  requiredForLive: boolean;
};

export const platformEnvironmentVariables: EnvironmentVariableDefinition[] = [
  { key: "PRN_DATA_PROVIDER", description: "Switches between mock and future live providers.", requiredForLive: false },
  { key: "EXECUTIVE_AI_ENABLED", description: "Enables executive AI insight surfaces.", requiredForLive: false },
  { key: "GHL_ENABLED", description: "Enables future GoHighLevel provider routing.", requiredForLive: false },
  { key: "GHL_API_KEY", description: "Server-side GoHighLevel API key.", requiredForLive: true },
  { key: "GHL_LOCATION_ID", description: "GoHighLevel location identifier.", requiredForLive: true },
  { key: "WELLSKY_ENABLED", description: "Enables future WellSky provider routing.", requiredForLive: false },
  { key: "HHAEXCHANGE_ENABLED", description: "Enables future HHAeXchange provider routing.", requiredForLive: false },
  { key: "M365_ENABLED", description: "Enables future Microsoft 365 provider routing.", requiredForLive: false },
  { key: "GOOGLE_ENABLED", description: "Enables future Google provider routing.", requiredForLive: false },
  { key: "FACEBOOK_ENABLED", description: "Enables future Facebook provider routing.", requiredForLive: false },
  { key: "INSTAGRAM_ENABLED", description: "Enables future Instagram provider routing.", requiredForLive: false },
  { key: "QUICKBOOKS_ENABLED", description: "Enables future QuickBooks provider routing.", requiredForLive: false },
  { key: "TWILIO_ENABLED", description: "Enables future Twilio provider routing.", requiredForLive: false },
];

export function getEnvironmentConfigurationStatus() {
  return platformEnvironmentVariables.map((definition) => ({
    ...definition,
    configured: Boolean(process.env[definition.key]),
  }));
}
