export type PlatformEventName =
  | "client.created"
  | "assessment.scheduled"
  | "caregiver.assigned"
  | "ai_call.completed"
  | "lead.converted"
  | "marketing_campaign.started";

export type PlatformEvent<TPayload extends Record<string, unknown> = Record<string, unknown>> = {
  id: string;
  name: PlatformEventName;
  payload: TPayload;
  occurredAt: string;
  source: string;
};

type PlatformEventHandler = (event: PlatformEvent) => void | Promise<void>;

export class PlatformEventBus {
  private readonly handlers = new Map<PlatformEventName, Set<PlatformEventHandler>>();
  private readonly events: PlatformEvent[] = [];

  subscribe(eventName: PlatformEventName, handler: PlatformEventHandler) {
    const handlers = this.handlers.get(eventName) ?? new Set<PlatformEventHandler>();
    handlers.add(handler);
    this.handlers.set(eventName, handlers);

    return () => {
      handlers.delete(handler);
    };
  }

  async publish(event: PlatformEvent) {
    this.events.unshift(event);
    const handlers = this.handlers.get(event.name) ?? new Set<PlatformEventHandler>();

    await Promise.all(Array.from(handlers).map((handler) => handler(event)));
  }

  getRecentEvents(limit = 10) {
    return this.events.slice(0, limit);
  }
}

let platformEventBus: PlatformEventBus | null = null;

export function getPlatformEventBus() {
  platformEventBus ??= new PlatformEventBus();

  return platformEventBus;
}

export const mockPlatformEvents: PlatformEvent[] = [
  {
    id: "evt-client-created",
    name: "client.created",
    payload: { clientId: "client-fl-001", state: "Florida" },
    occurredAt: "2026-07-04T08:44:00-04:00",
    source: "mock",
  },
  {
    id: "evt-assessment-scheduled",
    name: "assessment.scheduled",
    payload: { assessmentId: "assessment-al-001", state: "Alabama" },
    occurredAt: "2026-07-04T09:11:00-04:00",
    source: "mock",
  },
  {
    id: "evt-ai-call-completed",
    name: "ai_call.completed",
    payload: { callId: "ai-call-001", outcome: "transferred" },
    occurredAt: "2026-07-04T09:28:00-04:00",
    source: "mock",
  },
];
