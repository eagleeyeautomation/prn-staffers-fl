export type FeatureFlagKey =
  | "mockMode"
  | "goHighLevelEnabled"
  | "wellSkyEnabled"
  | "hhaExchangeEnabled"
  | "executiveAiEnabled";

export type FeatureFlag = {
  key: FeatureFlagKey;
  label: string;
  enabled: boolean;
  envVar: string;
};

function readBooleanEnv(key: string, fallback = false) {
  const value = process.env[key];

  if (!value) {
    return fallback;
  }

  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export function getFeatureFlags(): FeatureFlag[] {
  return [
    {
      key: "mockMode",
      label: "Mock Mode",
      envVar: "PRN_DATA_PROVIDER",
      enabled: process.env.PRN_DATA_PROVIDER !== "live",
    },
    {
      key: "goHighLevelEnabled",
      label: "GoHighLevel Enabled",
      envVar: "GHL_ENABLED",
      enabled: readBooleanEnv("GHL_ENABLED"),
    },
    {
      key: "wellSkyEnabled",
      label: "WellSky Enabled",
      envVar: "WELLSKY_ENABLED",
      enabled: readBooleanEnv("WELLSKY_ENABLED"),
    },
    {
      key: "hhaExchangeEnabled",
      label: "HHAeXchange Enabled",
      envVar: "HHAEXCHANGE_ENABLED",
      enabled: readBooleanEnv("HHAEXCHANGE_ENABLED"),
    },
    {
      key: "executiveAiEnabled",
      label: "Executive AI Enabled",
      envVar: "EXECUTIVE_AI_ENABLED",
      enabled: readBooleanEnv("EXECUTIVE_AI_ENABLED", true),
    },
  ];
}
