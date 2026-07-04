import type { AskEagleContext, AskEagleResponse, AskEagleResponseCard, DashboardData } from "@/lib/types";

export const askEagleSuggestedQuestions = [
  "How is the business doing today?",
  "Which state needs attention?",
  "How many SARCOA referrals came in?",
  "Which office has the most leads?",
  "Summarize today's activity.",
];

export function createAskEagleContext(data: DashboardData): AskEagleContext {
  return {
    businessHealth: {
      score: data.businessHealth.score,
      status: data.businessHealth.status,
      explanation: data.businessHealth.explanation,
    },
    states: data.stateScorecards,
    alerts: data.alerts,
    recommendations: data.recommendations,
    priorities: data.priorities,
    executiveBrief: data.executiveBrief,
    activity: data.activities,
  };
}

export function answerAskEagle(question: string, context: AskEagleContext): AskEagleResponse {
  const normalized = question.trim().toLowerCase();

  if (!normalized) {
    throw new Error("Ask Eagle needs a question before it can respond.");
  }

  const topLeadOffice = getTopLeadOffice(context);
  const attentionOffice = getAttentionOffice(context);
  const sarcoaReferrals = getReferralCount(context, "SARCOA");

  if (normalized.includes("sarcoa")) {
    return buildResponse(
      `Alabama received ${sarcoaReferrals} SARCOA referrals in the current mock data set.`,
      context,
      [
        buildStateComparisonCard(context),
        buildRecommendedActionsCard(context, ["Review Alabama referral capacity.", "Confirm staffing coverage before accepting additional SARCOA referrals."]),
      ],
    );
  }

  if (normalized.includes("most leads") || normalized.includes("office has the most") || normalized.includes("leads")) {
    return buildResponse(
      `${topLeadOffice.office} has the most leads today with ${topLeadOffice.leads} new inquiries.`,
      context,
      [
        buildStateComparisonCard(context),
        buildRecommendedActionsCard(context, ["Prioritize same-day follow-up for Florida leads.", "Confirm assessment availability for high-intent inquiries."]),
      ],
    );
  }

  if (normalized.includes("needs attention") || normalized.includes("attention") || normalized.includes("weakest")) {
    return buildResponse(
      `${attentionOffice.office} needs the most attention. Its score is ${attentionOffice.score}, with ${attentionOffice.missedCalls} missed call and a staffing or task follow-up watchpoint.`,
      context,
      [
        buildStateComparisonCard(context),
        buildAlertsCard(context),
        buildRecommendedActionsCard(context, [`Focus leadership follow-up on ${attentionOffice.office}.`, "Clear critical and warning items before expanding demand."]),
      ],
    );
  }

  if (normalized.includes("activity") || normalized.includes("summarize")) {
    return buildResponse(
      context.executiveBrief,
      context,
      [
        buildBusinessSummaryCard(context),
        {
          title: "Business Summary",
          body: "Recent activity is moving through intake, referrals, clinical review, AI calls, and scheduling.",
          items: context.activity.slice(0, 5).map((item) => `${item.time}: ${item.title} - ${item.location}`),
          status: "strong",
        },
      ],
    );
  }

  if (normalized.includes("business") || normalized.includes("doing") || normalized.includes("today")) {
    return buildResponse(
      `The business is healthy today. Business Health is ${context.businessHealth.score}% and ${topLeadOffice.office} is leading demand while ${attentionOffice.office} needs attention.`,
      context,
      [buildBusinessSummaryCard(context), buildStateComparisonCard(context), buildAlertsCard(context), buildRecommendedActionsCard(context)],
    );
  }

  return buildResponse(
    "Ask Eagle can answer from the current executive mock data. Try asking about business health, state performance, SARCOA referrals, lead volume, alerts, or today's activity.",
    context,
    [buildBusinessSummaryCard(context), buildStateComparisonCard(context), buildAlertsCard(context), buildRecommendedActionsCard(context)],
  );
}

function buildResponse(summary: string, context: AskEagleContext, cards: AskEagleResponseCard[]): AskEagleResponse {
  return {
    summary,
    cards: dedupeCards(cards.length > 0 ? cards : [buildBusinessSummaryCard(context)]),
  };
}

function buildBusinessSummaryCard(context: AskEagleContext): AskEagleResponseCard {
  const totals = context.states.reduce(
    (acc, state) => ({
      leads: acc.leads + state.leads,
      clients: acc.clients + state.activeClients,
      aiCalls: acc.aiCalls + state.aiCalls,
      missedCalls: acc.missedCalls + state.missedCalls,
    }),
    { leads: 0, clients: 0, aiCalls: 0, missedCalls: 0 },
  );

  return {
    title: "Business Summary",
    body: `Business Health is ${context.businessHealth.score}% with ${totals.leads} leads, ${totals.clients} active clients, and ${totals.aiCalls} AI calls.`,
    items: [
      `${context.businessHealth.status} operating status`,
      `${totals.missedCalls} missed calls in the current mock queue`,
      `${context.priorities.length} executive priorities active today`,
    ],
    status: context.businessHealth.score >= 90 ? "strong" : "watch",
  };
}

function buildStateComparisonCard(context: AskEagleContext): AskEagleResponseCard {
  const topLeadOffice = getTopLeadOffice(context);
  const attentionOffice = getAttentionOffice(context);

  return {
    title: "State Comparison",
    body: `${topLeadOffice.office} leads demand. ${attentionOffice.office} is the office to watch.`,
    items: context.states.map((state) => `${state.office}: ${state.leads} leads, ${state.activeClients} clients, ${state.growth} growth`),
    status: attentionOffice.health === "Critical" ? "critical" : "watch",
  };
}

function buildAlertsCard(context: AskEagleContext): AskEagleResponseCard {
  const critical = context.alerts.filter((alert) => alert.priority === "Critical").length;
  const warnings = context.alerts.filter((alert) => alert.priority === "Warning").length;

  return {
    title: "Alerts",
    body: `${critical} critical alert and ${warnings} warnings are active in the current mock dashboard.`,
    items: context.alerts.map((alert) => `${alert.priority}: ${alert.title}`),
    status: critical > 0 ? "critical" : warnings > 0 ? "watch" : "strong",
  };
}

function buildRecommendedActionsCard(context: AskEagleContext, extraItems: string[] = []): AskEagleResponseCard {
  return {
    title: "Recommended Actions",
    body: "Ask Eagle recommends focusing on the items most likely to protect growth and care quality today.",
    items: [...extraItems, ...context.recommendations.map((recommendation) => recommendation.title)].slice(0, 5),
    status: "strong",
  };
}

function getTopLeadOffice(context: AskEagleContext) {
  return [...context.states].sort((a, b) => b.leads - a.leads)[0];
}

function getAttentionOffice(context: AskEagleContext) {
  return [...context.states].sort((a, b) => a.score - b.score)[0];
}

function getReferralCount(context: AskEagleContext, source: string) {
  const state = context.states.find((item) => item.referralSources.toLowerCase().includes(source.toLowerCase()));
  const match = state?.referralSources.match(new RegExp(`${source}\\s+(\\d+)`, "i"));

  return match ? Number(match[1]) : 0;
}

function dedupeCards(cards: AskEagleResponseCard[]) {
  const seen = new Set<string>();

  return cards.filter((card) => {
    if (seen.has(card.title)) {
      return false;
    }

    seen.add(card.title);
    return true;
  });
}
