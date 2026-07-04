import { MockGoHighLevelAdapter } from "@/lib/integrations/gohighlevel/mock-adapter";
import type { GoHighLevelAdapter } from "@/lib/integrations/gohighlevel/models";

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
}

let goHighLevelIntegration: GoHighLevelIntegration | null = null;

export function getGoHighLevelIntegration() {
  goHighLevelIntegration ??= new GoHighLevelIntegration();

  return goHighLevelIntegration;
}
