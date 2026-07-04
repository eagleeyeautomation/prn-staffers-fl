"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Bot, Brain, Loader2, Send, Sparkles } from "lucide-react";
import { answerAskEagle, askEagleSuggestedQuestions } from "@/lib/ask-eagle";
import type { AskEagleContext, AskEagleResponse, AskEagleResponseCard } from "@/lib/types";

type AskEagleMessage = {
  id: string;
  question: string;
  response: AskEagleResponse;
};

export function AskEagleAssistant({ context }: { context: AskEagleContext }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<AskEagleMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const latestMessage = messages[0];
  const defaultResponse = useMemo(() => answerAskEagle("How is the business doing today?", context), [context]);

  function submitQuestion(nextQuestion = question) {
    const trimmed = nextQuestion.trim();

    setError(null);

    if (!trimmed) {
      setError("Ask Eagle needs an executive question before it can respond.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      try {
        const response = answerAskEagle(trimmed, context);
        setMessages((current) => [
          {
            id: `${Date.now()}-${trimmed}`,
            question: trimmed,
            response,
          },
          ...current,
        ]);
        setQuestion("");
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : "Ask Eagle could not answer that question.");
      } finally {
        setLoading(false);
      }
    }, 450);
  }

  return (
    <section className="rounded-2xl border border-[#f6c85f]/50 bg-white p-5 shadow-sm dark:border-[#f6c85f]/30 dark:bg-slate-950">
      <div className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-2xl bg-[#071a33] p-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c85f]">Ask Eagle</p>
              <h2 className="mt-2 text-2xl font-semibold">AI Executive Assistant</h2>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Ask executive questions against the current mock dashboard data. No live APIs or external AI calls are used.
              </p>
            </div>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#f6c85f]">
              <Brain className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>

          <form
            className="mt-5 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              submitQuestion();
            }}
          >
            <label className="sr-only" htmlFor="ask-eagle-question">
              Ask Eagle question
            </label>
            <div className="flex gap-2 rounded-2xl border border-white/10 bg-white/10 p-2">
              <input
                id="ask-eagle-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask about leads, alerts, referrals, or state performance..."
                className="min-h-11 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-400"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f6c85f] text-[#071a33] transition hover:bg-[#ffd978] disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send question"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
              </button>
            </div>
          </form>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">Suggested Questions</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {askEagleSuggestedQuestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submitQuestion(suggestion)}
                  disabled={loading}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-left text-xs font-semibold text-slate-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {error ? (
            <div className="mt-5 flex gap-3 rounded-2xl border border-red-300/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {error}
            </div>
          ) : null}
        </div>

        <div className="min-h-[420px] rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          {loading ? (
            <AskEagleLoading />
          ) : latestMessage ? (
            <AskEagleResult message={latestMessage} />
          ) : (
            <AskEagleEmpty response={defaultResponse} />
          )}
        </div>
      </div>
    </section>
  );
}

function AskEagleEmpty({ response }: { response: AskEagleResponse }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">Ready</p>
          <h3 className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">Ask Eagle is standing by</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Start with a suggested question or type your own executive question.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <ResponseCards cards={response.cards} />
      </div>
    </div>
  );
}

function AskEagleLoading() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm font-semibold text-sky-700 dark:text-sky-300">
        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        Ask Eagle is reviewing the executive mock data...
      </div>
      {[0, 1, 2].map((item) => (
        <div key={item} className="animate-pulse rounded-2xl bg-white p-4 dark:bg-slate-950">
          <div className="h-4 w-40 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-4 h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-2 h-3 w-4/5 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
      ))}
    </div>
  );
}

function AskEagleResult({ message }: { message: AskEagleMessage }) {
  return (
    <div>
      <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">Question</p>
        <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">{message.question}</p>
      </div>
      <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-950/30">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-1 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden="true" />
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{message.response.summary}</p>
        </div>
      </div>
      <div className="mt-4">
        <ResponseCards cards={message.response.cards} />
      </div>
    </div>
  );
}

function ResponseCards({ cards }: { cards: AskEagleResponseCard[] }) {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {cards.map((card) => (
        <article key={card.title} className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">{card.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.body}</p>
            </div>
            <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${getCardDotClass(card.status)}`} />
          </div>
          <ul className="mt-3 space-y-2">
            {card.items.map((item) => (
              <li key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm leading-5 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function getCardDotClass(status: AskEagleResponseCard["status"]) {
  switch (status) {
    case "critical":
      return "bg-red-500";
    case "watch":
      return "bg-[#f6c85f]";
    case "neutral":
      return "bg-slate-400";
    case "strong":
    default:
      return "bg-emerald-500";
  }
}
