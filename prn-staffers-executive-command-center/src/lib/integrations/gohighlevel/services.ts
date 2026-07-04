import { LiveGoHighLevelAdapter } from "@/lib/integrations/gohighlevel/live-adapter";
import { MockGoHighLevelAdapter } from "@/lib/integrations/gohighlevel/mock-adapter";
import type { GoHighLevelAdapter, GoHighLevelDashboardMetrics } from "@/lib/integrations/gohighlevel/models";

abstract class GoHighLevelService {
  constructor(protected readonly adapter: GoHighLevelAdapter) {}
}

export class GoHighLevelContactsService extends GoHighLevelService {
  listContacts() {
    return this.adapter.getContacts();
  }
}

export class GoHighLevelOpportunitiesService extends GoHighLevelService {
  listOpportunities() {
    return this.adapter.getOpportunities();
  }
}

export class GoHighLevelCalendarsService extends GoHighLevelService {
  listCalendarEvents() {
    return this.adapter.getCalendarEvents();
  }
}

export class GoHighLevelConversationsService extends GoHighLevelService {
  listConversations() {
    return this.adapter.getConversations();
  }
}

export class GoHighLevelTasksService extends GoHighLevelService {
  listTasks() {
    return this.adapter.getTasks();
  }
}

export class GoHighLevelAiCallsService extends GoHighLevelService {
  listAiCalls() {
    return this.adapter.getAiCalls();
  }
}

export class GoHighLevelPipelinesService extends GoHighLevelService {
  listPipelines() {
    return this.adapter.getPipelines();
  }
}

export class GoHighLevelIntegration {
  readonly contacts: GoHighLevelContactsService;
  readonly opportunities: GoHighLevelOpportunitiesService;
  readonly calendars: GoHighLevelCalendarsService;
  readonly conversations: GoHighLevelConversationsService;
  readonly tasks: GoHighLevelTasksService;
  readonly aiCalls: GoHighLevelAiCallsService;
  readonly pipelines: GoHighLevelPipelinesService;

  constructor(private readonly adapter: GoHighLevelAdapter = new MockGoHighLevelAdapter()) {
    this.contacts = new GoHighLevelContactsService(adapter);
    this.opportunities = new GoHighLevelOpportunitiesService(adapter);
    this.calendars = new GoHighLevelCalendarsService(adapter);
    this.conversations = new GoHighLevelConversationsService(adapter);
    this.tasks = new GoHighLevelTasksService(adapter);
    this.aiCalls = new GoHighLevelAiCallsService(adapter);
    this.pipelines = new GoHighLevelPipelinesService(adapter);
  }

  getServiceStatuses() {
    return this.adapter.getServiceStatuses();
  }

  async getDashboardMetrics(): Promise<GoHighLevelDashboardMetrics> {
    const connection = await this.adapter.getConnectionStatus();

    if (connection.status !== "connected") {
      return {
        connection,
        newLeads: 0,
        opportunities: 0,
        pipelineValue: 0,
        aiCalls: 0,
        missedCalls: 0,
        appointments: 0,
        assessments: 0,
        activeConversations: 0,
        openTasks: 0,
        calendars: 0,
      };
    }

    const [contacts, opportunities, appointments, conversations, tasks, aiCalls] = await Promise.all([
      this.contacts.listContacts(),
      this.opportunities.listOpportunities(),
      this.calendars.listCalendarEvents(),
      this.conversations.listConversations(),
      this.tasks.listTasks(),
      this.aiCalls.listAiCalls(),
    ]);

    const newLeads = contacts.filter((contact) => contact.lifecycleStage === "Lead").length;
    const assessments = appointments.filter((appointment) => appointment.type === "Assessment").length;
    const missedCalls = aiCalls.filter((call) => call.outcome === "missed").length;
    const activeConversations = conversations.filter((conversation) => conversation.direction === "inbound").length;
    const openTasks = tasks.filter((task) => task.status === "open" || task.status === "overdue").length;
    const pipelineValue = opportunities.reduce((total, opportunity) => total + opportunity.value, 0);

    return {
      connection,
      newLeads,
      opportunities: opportunities.length,
      pipelineValue,
      aiCalls: aiCalls.length,
      missedCalls,
      appointments: appointments.length,
      assessments,
      activeConversations,
      openTasks,
      calendars: new Set(appointments.map((appointment) => appointment.calendarId).filter(Boolean)).size,
    };
  }
}

let goHighLevelIntegration: GoHighLevelIntegration | null = null;

export function getGoHighLevelIntegration() {
  goHighLevelIntegration ??= new GoHighLevelIntegration(createGoHighLevelAdapter());

  return goHighLevelIntegration;
}

function createGoHighLevelAdapter(): GoHighLevelAdapter {
  if (process.env.GHL_ENABLED === "true" || process.env.PRN_DATA_PROVIDER === "live") {
    return new LiveGoHighLevelAdapter();
  }

  return new MockGoHighLevelAdapter();
}
