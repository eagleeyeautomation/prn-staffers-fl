import { IntegrationConnector } from "@/lib/integrations/base-connector";
import { integrationDefinitions } from "@/lib/integrations/integration-definitions";
import type { IntegrationDefinition, IntegrationId } from "@/lib/types";

class GoHighLevelConnector extends IntegrationConnector {}
class GoogleConnector extends IntegrationConnector {}
class FacebookConnector extends IntegrationConnector {}
class InstagramConnector extends IntegrationConnector {}
class QuickBooksConnector extends IntegrationConnector {}
class TwilioConnector extends IntegrationConnector {}
class Microsoft365Connector extends IntegrationConnector {}
class WellSkyConnector extends IntegrationConnector {}
class HhaExchangeConnector extends IntegrationConnector {}

const connectorClasses = {
  gohighlevel: GoHighLevelConnector,
  google: GoogleConnector,
  facebook: FacebookConnector,
  instagram: InstagramConnector,
  quickbooks: QuickBooksConnector,
  twilio: TwilioConnector,
  microsoft_365: Microsoft365Connector,
  wellsky: WellSkyConnector,
  hhaexchange: HhaExchangeConnector,
} satisfies Record<IntegrationId, new (definition: IntegrationDefinition) => IntegrationConnector>;

export function createConnector(definition: IntegrationDefinition) {
  const Connector = connectorClasses[definition.id];

  return new Connector(definition);
}

export function createAllConnectors() {
  return integrationDefinitions.map(createConnector);
}
