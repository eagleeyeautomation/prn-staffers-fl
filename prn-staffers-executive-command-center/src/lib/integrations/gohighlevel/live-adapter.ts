import type {
  GoHighLevelAdapter,
  GoHighLevelAiCall,
  GoHighLevelCalendarEvent,
  GoHighLevelConnectionResult,
  GoHighLevelContact,
  GoHighLevelConversation,
  GoHighLevelOpportunity,
  GoHighLevelPipeline,
  GoHighLevelServiceStatus,
  GoHighLevelTask,
} from "@/lib/integrations/gohighlevel/models";

type UnknownRecord = Record<string, unknown>;

export class LiveGoHighLevelAdapter implements GoHighLevelAdapter {
  private readonly baseUrl = process.env.GHL_BASE_URL || "https://services.leadconnectorhq.com";
  private readonly apiKey = process.env.GHL_API_KEY;
  private readonly locationId = process.env.GHL_LOCATION_ID;

  async getConnectionStatus(): Promise<GoHighLevelConnectionResult> {
    const lastChecked = new Date().toISOString();

    if (!this.apiKey || !this.locationId) {
      return {
        status: "disconnected",
        statusLabel: "Disconnected",
        source: "fallback",
        lastChecked,
        errorMessage: "GoHighLevel credentials are not configured.",
      };
    }

    try {
      await this.request(this.path("GHL_CONTACTS_PATH", `/contacts/?locationId=${this.locationId}&limit=1`));

      return {
        status: "connected",
        statusLabel: "Connected",
        source: "live",
        lastChecked,
      };
    } catch (error) {
      logGoHighLevelError("health check", error);

      return {
        status: "error",
        statusLabel: "Error",
        source: "fallback",
        lastChecked,
        errorMessage: getErrorMessage(error),
      };
    }
  }

  async getServiceStatuses(): Promise<GoHighLevelServiceStatus[]> {
    const connection = await this.getConnectionStatus();
    const status = connection.status;
    const source = connection.source === "live" ? "live" : "mock";
    const lastSynced = connection.lastChecked;

    return [
      { name: "Contacts", status, recordsAvailable: 0, lastSynced, source },
      { name: "Opportunities", status, recordsAvailable: 0, lastSynced, source },
      { name: "Calendars", status, recordsAvailable: 0, lastSynced, source },
      { name: "Conversations", status, recordsAvailable: 0, lastSynced, source },
      { name: "Tasks", status, recordsAvailable: 0, lastSynced, source },
      { name: "AI Calls", status, recordsAvailable: 0, lastSynced, source },
      { name: "Pipelines", status, recordsAvailable: 0, lastSynced, source },
    ];
  }

  async getContacts(): Promise<GoHighLevelContact[]> {
    const data = await this.safeRequest(this.path("GHL_CONTACTS_PATH", `/contacts/?locationId=${this.locationId}&limit=100`), "contacts");
    return extractArray(data, ["contacts"]).map(mapContact);
  }

  async getOpportunities(): Promise<GoHighLevelOpportunity[]> {
    const data = await this.safeRequest(this.path("GHL_OPPORTUNITIES_PATH", `/opportunities/search?location_id=${this.locationId}`), "opportunities");
    return extractArray(data, ["opportunities"]).map(mapOpportunity);
  }

  async getCalendarEvents(): Promise<GoHighLevelCalendarEvent[]> {
    const data = await this.safeRequest(this.path("GHL_APPOINTMENTS_PATH", `/calendars/events?locationId=${this.locationId}`), "calendar events");
    return extractArray(data, ["events", "appointments"]).map(mapCalendarEvent);
  }

  async getConversations(): Promise<GoHighLevelConversation[]> {
    const data = await this.safeRequest(this.path("GHL_CONVERSATIONS_PATH", `/conversations/search?locationId=${this.locationId}`), "conversations");
    return extractArray(data, ["conversations"]).map(mapConversation);
  }

  async getTasks(): Promise<GoHighLevelTask[]> {
    const data = await this.safeRequest(this.path("GHL_TASKS_PATH", `/contacts/tasks?locationId=${this.locationId}`), "tasks");
    return extractArray(data, ["tasks"]).map(mapTask);
  }

  async getAiCalls(): Promise<GoHighLevelAiCall[]> {
    const data = await this.safeRequest(this.path("GHL_AI_CALLS_PATH", `/conversations/search?locationId=${this.locationId}&type=call`), "AI calls");
    return extractArray(data, ["conversations", "calls"]).map(mapAiCall);
  }

  async getPipelines(): Promise<GoHighLevelPipeline[]> {
    const data = await this.safeRequest(this.path("GHL_PIPELINES_PATH", `/opportunities/pipelines?locationId=${this.locationId}`), "pipelines");
    return extractArray(data, ["pipelines"]).map(mapPipeline);
  }

  private path(envKey: string, fallback: string) {
    return process.env[envKey] || fallback;
  }

  private async safeRequest(path: string, label: string): Promise<unknown> {
    try {
      return await this.request(path);
    } catch (error) {
      logGoHighLevelError(label, error);
      return {};
    }
  }

  private async request(path: string): Promise<unknown> {
    if (!this.apiKey || !this.locationId) {
      throw new Error("GoHighLevel credentials are not configured.");
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        Version: process.env.GHL_API_VERSION || "2021-07-28",
        Accept: "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`GoHighLevel request failed with ${response.status}`);
    }

    return response.json();
  }
}

export function logGoHighLevelError(context: string, error: unknown) {
  console.error(`[GoHighLevel] ${context}: ${getErrorMessage(error)}`);
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown GoHighLevel error";
}

function extractArray(data: unknown, keys: string[]): UnknownRecord[] {
  if (Array.isArray(data)) {
    return data.filter(isRecord);
  }

  if (!isRecord(data)) {
    return [];
  }

  for (const key of keys) {
    const value = data[key];

    if (Array.isArray(value)) {
      return value.filter(isRecord);
    }
  }

  return [];
}

function isRecord(value: unknown): value is UnknownRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function stringValue(record: UnknownRecord, keys: string[], fallback = "") {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "string" && value.length > 0) {
      return value;
    }
  }

  return fallback;
}

function numberValue(record: UnknownRecord, keys: string[], fallback = 0) {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "number") {
      return value;
    }

    if (typeof value === "string") {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
  }

  return fallback;
}

function boolValue(record: UnknownRecord, keys: string[], fallback = false) {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "boolean") {
      return value;
    }
  }

  return fallback;
}

function mapContact(record: UnknownRecord): GoHighLevelContact {
  return {
    id: stringValue(record, ["id", "contactId"], "unknown-contact"),
    firstName: stringValue(record, ["firstName", "first_name"]),
    lastName: stringValue(record, ["lastName", "last_name"]),
    email: stringValue(record, ["email"]),
    phone: stringValue(record, ["phone"]),
    state: normalizeState(stringValue(record, ["state", "addressState"], "Florida")),
    lifecycleStage: normalizeLifecycle(stringValue(record, ["type", "stage", "lifecycleStage"], "Lead")),
    source: stringValue(record, ["source", "attributionSource"], "GoHighLevel"),
    createdAt: stringValue(record, ["dateAdded", "createdAt"], new Date().toISOString()),
  };
}

function mapOpportunity(record: UnknownRecord): GoHighLevelOpportunity {
  return {
    id: stringValue(record, ["id", "opportunityId"], "unknown-opportunity"),
    contactId: stringValue(record, ["contactId"]),
    pipelineId: stringValue(record, ["pipelineId"]),
    stageId: stringValue(record, ["pipelineStageId", "stageId"]),
    title: stringValue(record, ["name", "title"], "GoHighLevel opportunity"),
    value: numberValue(record, ["monetaryValue", "value"]),
    status: normalizeOpportunityStatus(stringValue(record, ["status"], "open")),
    assignedTo: stringValue(record, ["assignedTo", "assignedUserName"], "Unassigned"),
    updatedAt: stringValue(record, ["updatedAt", "lastStatusChangeAt"], new Date().toISOString()),
  };
}

function mapCalendarEvent(record: UnknownRecord): GoHighLevelCalendarEvent {
  return {
    id: stringValue(record, ["id", "appointmentId"], "unknown-event"),
    calendarId: stringValue(record, ["calendarId"]),
    contactId: stringValue(record, ["contactId"]),
    title: stringValue(record, ["title", "appointmentTitle"], "GoHighLevel appointment"),
    startTime: stringValue(record, ["startTime", "startDate"], new Date().toISOString()),
    endTime: stringValue(record, ["endTime", "endDate"], new Date().toISOString()),
    type: normalizeAppointmentType(stringValue(record, ["type", "title"], "Meeting")),
    status: normalizeEventStatus(stringValue(record, ["status"], "scheduled")),
  };
}

function mapConversation(record: UnknownRecord): GoHighLevelConversation {
  return {
    id: stringValue(record, ["id", "conversationId"], "unknown-conversation"),
    contactId: stringValue(record, ["contactId"]),
    channel: normalizeConversationChannel(stringValue(record, ["type", "channel"], "chat")),
    direction: normalizeDirection(stringValue(record, ["direction"], "inbound")),
    summary: stringValue(record, ["summary", "lastMessageBody", "body"], "GoHighLevel conversation"),
    aiHandled: boolValue(record, ["aiHandled", "botHandled"]),
    lastMessageAt: stringValue(record, ["lastMessageDate", "updatedAt"], new Date().toISOString()),
  };
}

function mapTask(record: UnknownRecord): GoHighLevelTask {
  return {
    id: stringValue(record, ["id", "taskId"], "unknown-task"),
    contactId: stringValue(record, ["contactId"]),
    title: stringValue(record, ["title", "body"], "GoHighLevel task"),
    dueAt: stringValue(record, ["dueDate", "dueAt"], new Date().toISOString()),
    priority: normalizePriority(stringValue(record, ["priority"], "medium")),
    status: normalizeTaskStatus(stringValue(record, ["status"], "open")),
    assignedTo: stringValue(record, ["assignedTo", "assignedUserName"], "Unassigned"),
  };
}

function mapAiCall(record: UnknownRecord): GoHighLevelAiCall {
  const outcome = normalizeAiCallOutcome(stringValue(record, ["outcome", "status"], "answered"));

  return {
    id: stringValue(record, ["id", "conversationId", "callId"], "unknown-ai-call"),
    contactId: stringValue(record, ["contactId"]),
    phoneNumber: stringValue(record, ["phone", "phoneNumber"]),
    startedAt: stringValue(record, ["startedAt", "lastMessageDate", "createdAt"], new Date().toISOString()),
    durationSeconds: numberValue(record, ["duration", "durationSeconds"]),
    outcome,
    transferSuccess: boolValue(record, ["transferSuccess"], outcome === "transferred" || outcome === "booked"),
    summary: stringValue(record, ["summary", "lastMessageBody"], "GoHighLevel AI call"),
  };
}

function mapPipeline(record: UnknownRecord): GoHighLevelPipeline {
  return {
    id: stringValue(record, ["id", "pipelineId"], "unknown-pipeline"),
    name: stringValue(record, ["name"], "GoHighLevel pipeline"),
    stages: extractArray(record["stages"], []).map((stage, index) => ({
      id: stringValue(stage, ["id"], `stage-${index}`),
      name: stringValue(stage, ["name"], `Stage ${index + 1}`),
      order: numberValue(stage, ["order"], index + 1),
    })),
  };
}

function normalizeState(value: string): GoHighLevelContact["state"] {
  if (value.toLowerCase().includes("delaware")) return "Delaware";
  if (value.toLowerCase().includes("south")) return "South Carolina";
  if (value.toLowerCase().includes("alabama")) return "Alabama";
  return "Florida";
}

function normalizeLifecycle(value: string): GoHighLevelContact["lifecycleStage"] {
  const lower = value.toLowerCase();
  if (lower.includes("assessment")) return "Assessment Scheduled";
  if (lower.includes("client")) return "Active Client";
  if (lower.includes("caregiver")) return "Caregiver Candidate";
  return "Lead";
}

function normalizeOpportunityStatus(value: string): GoHighLevelOpportunity["status"] {
  const lower = value.toLowerCase();
  if (lower.includes("won")) return "won";
  if (lower.includes("lost")) return "lost";
  return "open";
}

function normalizeAppointmentType(value: string): GoHighLevelCalendarEvent["type"] {
  const lower = value.toLowerCase();
  if (lower.includes("assessment")) return "Assessment";
  if (lower.includes("interview")) return "Interview";
  if (lower.includes("start")) return "Client Start";
  return "Meeting";
}

function normalizeEventStatus(value: string): GoHighLevelCalendarEvent["status"] {
  const lower = value.toLowerCase();
  if (lower.includes("complete")) return "completed";
  if (lower.includes("cancel")) return "cancelled";
  return "scheduled";
}

function normalizeConversationChannel(value: string): GoHighLevelConversation["channel"] {
  const lower = value.toLowerCase();
  if (lower.includes("sms")) return "sms";
  if (lower.includes("email")) return "email";
  if (lower.includes("call")) return "call";
  return "chat";
}

function normalizeDirection(value: string): GoHighLevelConversation["direction"] {
  return value.toLowerCase().includes("out") ? "outbound" : "inbound";
}

function normalizePriority(value: string): GoHighLevelTask["priority"] {
  const lower = value.toLowerCase();
  if (lower.includes("high")) return "high";
  if (lower.includes("low")) return "low";
  return "medium";
}

function normalizeTaskStatus(value: string): GoHighLevelTask["status"] {
  const lower = value.toLowerCase();
  if (lower.includes("complete")) return "completed";
  if (lower.includes("overdue")) return "overdue";
  return "open";
}

function normalizeAiCallOutcome(value: string): GoHighLevelAiCall["outcome"] {
  const lower = value.toLowerCase();
  if (lower.includes("transfer")) return "transferred";
  if (lower.includes("miss")) return "missed";
  if (lower.includes("book")) return "booked";
  return "answered";
}
