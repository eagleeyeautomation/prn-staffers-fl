export type GoHighLevelConnectionStatus = "disconnected" | "connected" | "error";

export type GoHighLevelServiceName =
  | "Contacts"
  | "Opportunities"
  | "Calendars"
  | "Conversations"
  | "Tasks"
  | "AI Calls"
  | "Pipelines";

export type GoHighLevelServiceStatus = {
  name: GoHighLevelServiceName;
  status: GoHighLevelConnectionStatus;
  recordsAvailable: number;
  lastSynced: string;
  source: "mock" | "live";
};

export type GoHighLevelContact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: "Delaware" | "South Carolina" | "Alabama" | "Florida";
  lifecycleStage: "Lead" | "Assessment Scheduled" | "Active Client" | "Caregiver Candidate";
  source: string;
  createdAt: string;
};

export type GoHighLevelOpportunity = {
  id: string;
  contactId: string;
  pipelineId: string;
  stageId: string;
  title: string;
  value: number;
  status: "open" | "won" | "lost";
  assignedTo: string;
  updatedAt: string;
};

export type GoHighLevelCalendarEvent = {
  id: string;
  calendarId: string;
  contactId: string;
  title: string;
  startTime: string;
  endTime: string;
  type: "Assessment" | "Interview" | "Meeting" | "Client Start";
  status: "scheduled" | "completed" | "cancelled";
};

export type GoHighLevelConversation = {
  id: string;
  contactId: string;
  channel: "sms" | "email" | "chat" | "call";
  direction: "inbound" | "outbound";
  summary: string;
  aiHandled: boolean;
  lastMessageAt: string;
};

export type GoHighLevelTask = {
  id: string;
  contactId: string;
  title: string;
  dueAt: string;
  priority: "low" | "medium" | "high";
  status: "open" | "completed" | "overdue";
  assignedTo: string;
};

export type GoHighLevelAiCall = {
  id: string;
  contactId: string;
  phoneNumber: string;
  startedAt: string;
  durationSeconds: number;
  outcome: "answered" | "transferred" | "missed" | "booked";
  transferSuccess: boolean;
  summary: string;
};

export type GoHighLevelPipeline = {
  id: string;
  name: string;
  stages: {
    id: string;
    name: string;
    order: number;
  }[];
};

export type GoHighLevelAdapter = {
  getServiceStatuses(): Promise<GoHighLevelServiceStatus[]>;
  getContacts(): Promise<GoHighLevelContact[]>;
  getOpportunities(): Promise<GoHighLevelOpportunity[]>;
  getCalendarEvents(): Promise<GoHighLevelCalendarEvent[]>;
  getConversations(): Promise<GoHighLevelConversation[]>;
  getTasks(): Promise<GoHighLevelTask[]>;
  getAiCalls(): Promise<GoHighLevelAiCall[]>;
  getPipelines(): Promise<GoHighLevelPipeline[]>;
};
