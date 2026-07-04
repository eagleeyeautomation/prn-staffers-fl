import type {
  GoHighLevelAdapter,
  GoHighLevelAiCall,
  GoHighLevelCalendarEvent,
  GoHighLevelContact,
  GoHighLevelConversation,
  GoHighLevelOpportunity,
  GoHighLevelPipeline,
  GoHighLevelServiceStatus,
  GoHighLevelTask,
} from "@/lib/integrations/gohighlevel/models";

const mockTimestamp = "2026-07-04T10:30:00-04:00";

export class MockGoHighLevelAdapter implements GoHighLevelAdapter {
  async getServiceStatuses(): Promise<GoHighLevelServiceStatus[]> {
    return [
      { name: "Contacts", status: "disconnected", recordsAvailable: mockContacts.length, lastSynced: mockTimestamp, source: "mock" },
      { name: "Opportunities", status: "disconnected", recordsAvailable: mockOpportunities.length, lastSynced: mockTimestamp, source: "mock" },
      { name: "Calendars", status: "disconnected", recordsAvailable: mockCalendarEvents.length, lastSynced: mockTimestamp, source: "mock" },
      { name: "Conversations", status: "disconnected", recordsAvailable: mockConversations.length, lastSynced: mockTimestamp, source: "mock" },
      { name: "Tasks", status: "disconnected", recordsAvailable: mockTasks.length, lastSynced: mockTimestamp, source: "mock" },
      { name: "AI Calls", status: "disconnected", recordsAvailable: mockAiCalls.length, lastSynced: mockTimestamp, source: "mock" },
      { name: "Pipelines", status: "disconnected", recordsAvailable: mockPipelines.length, lastSynced: mockTimestamp, source: "mock" },
    ];
  }

  async getContacts() {
    return mockContacts;
  }

  async getOpportunities() {
    return mockOpportunities;
  }

  async getCalendarEvents() {
    return mockCalendarEvents;
  }

  async getConversations() {
    return mockConversations;
  }

  async getTasks() {
    return mockTasks;
  }

  async getAiCalls() {
    return mockAiCalls;
  }

  async getPipelines() {
    return mockPipelines;
  }
}

const mockContacts: GoHighLevelContact[] = [
  {
    id: "ghl-contact-001",
    firstName: "Maria",
    lastName: "Santos",
    email: "maria.santos@example.com",
    phone: "555-0101",
    state: "Florida",
    lifecycleStage: "Lead",
    source: "Website",
    createdAt: "2026-07-03T09:12:00-04:00",
  },
  {
    id: "ghl-contact-002",
    firstName: "James",
    lastName: "Walker",
    email: "james.walker@example.com",
    phone: "555-0102",
    state: "Alabama",
    lifecycleStage: "Assessment Scheduled",
    source: "SARCOA",
    createdAt: "2026-07-03T11:40:00-05:00",
  },
  {
    id: "ghl-contact-003",
    firstName: "Elaine",
    lastName: "Brooks",
    email: "elaine.brooks@example.com",
    phone: "555-0103",
    state: "Delaware",
    lifecycleStage: "Active Client",
    source: "Referral",
    createdAt: "2026-07-02T14:20:00-04:00",
  },
];

const mockOpportunities: GoHighLevelOpportunity[] = [
  {
    id: "ghl-opp-001",
    contactId: "ghl-contact-001",
    pipelineId: "ghl-pipeline-client",
    stageId: "stage-new-lead",
    title: "Florida private pay inquiry",
    value: 4200,
    status: "open",
    assignedTo: "Intake Team",
    updatedAt: "2026-07-04T08:55:00-04:00",
  },
  {
    id: "ghl-opp-002",
    contactId: "ghl-contact-002",
    pipelineId: "ghl-pipeline-client",
    stageId: "stage-assessment",
    title: "Alabama SARCOA referral",
    value: 2800,
    status: "open",
    assignedTo: "Alabama Team",
    updatedAt: "2026-07-04T09:18:00-05:00",
  },
];

const mockCalendarEvents: GoHighLevelCalendarEvent[] = [
  {
    id: "ghl-cal-001",
    calendarId: "assessments",
    contactId: "ghl-contact-002",
    title: "Alabama assessment",
    startTime: "2026-07-04T13:00:00-05:00",
    endTime: "2026-07-04T14:00:00-05:00",
    type: "Assessment",
    status: "scheduled",
  },
  {
    id: "ghl-cal-002",
    calendarId: "caregiver-interviews",
    contactId: "ghl-contact-003",
    title: "Caregiver interview panel",
    startTime: "2026-07-04T11:15:00-04:00",
    endTime: "2026-07-04T11:45:00-04:00",
    type: "Interview",
    status: "scheduled",
  },
];

const mockConversations: GoHighLevelConversation[] = [
  {
    id: "ghl-convo-001",
    contactId: "ghl-contact-001",
    channel: "chat",
    direction: "inbound",
    summary: "Asked about overnight care availability in Tallahassee.",
    aiHandled: true,
    lastMessageAt: "2026-07-04T09:22:00-04:00",
  },
  {
    id: "ghl-convo-002",
    contactId: "ghl-contact-002",
    channel: "call",
    direction: "inbound",
    summary: "SARCOA referral intake routed to Alabama coordinator.",
    aiHandled: true,
    lastMessageAt: "2026-07-04T10:02:00-05:00",
  },
];

const mockTasks: GoHighLevelTask[] = [
  {
    id: "ghl-task-001",
    contactId: "ghl-contact-003",
    title: "Schedule Delaware assessment",
    dueAt: "2026-07-04T15:00:00-04:00",
    priority: "high",
    status: "open",
    assignedTo: "Delaware Scheduler",
  },
  {
    id: "ghl-task-002",
    contactId: "ghl-contact-001",
    title: "Follow up on Florida website lead",
    dueAt: "2026-07-04T12:00:00-04:00",
    priority: "medium",
    status: "open",
    assignedTo: "Florida Intake",
  },
];

const mockAiCalls: GoHighLevelAiCall[] = [
  {
    id: "ghl-ai-call-001",
    contactId: "ghl-contact-001",
    phoneNumber: "555-0101",
    startedAt: "2026-07-04T09:28:00-04:00",
    durationSeconds: 284,
    outcome: "transferred",
    transferSuccess: true,
    summary: "AI qualified care needs and transferred to intake.",
  },
  {
    id: "ghl-ai-call-002",
    contactId: "ghl-contact-002",
    phoneNumber: "555-0102",
    startedAt: "2026-07-04T10:02:00-05:00",
    durationSeconds: 198,
    outcome: "booked",
    transferSuccess: true,
    summary: "AI captured referral details and booked assessment follow-up.",
  },
];

const mockPipelines: GoHighLevelPipeline[] = [
  {
    id: "ghl-pipeline-client",
    name: "Client Intake",
    stages: [
      { id: "stage-new-lead", name: "New Lead", order: 1 },
      { id: "stage-qualified", name: "Qualified", order: 2 },
      { id: "stage-assessment", name: "Assessment Scheduled", order: 3 },
      { id: "stage-active-client", name: "Active Client", order: 4 },
    ],
  },
  {
    id: "ghl-pipeline-caregiver",
    name: "Caregiver Recruiting",
    stages: [
      { id: "stage-applied", name: "Applied", order: 1 },
      { id: "stage-interview", name: "Interview", order: 2 },
      { id: "stage-onboarding", name: "Onboarding", order: 3 },
      { id: "stage-active", name: "Active", order: 4 },
    ],
  },
];
