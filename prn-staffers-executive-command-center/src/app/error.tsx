"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-4">
      <section className="w-full max-w-xl rounded-lg border border-red-100 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-red-50 text-red-600">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-slate-950">Command Center could not load</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          The dashboard is built to fall back to mock data while integrations are being connected. Try reloading the page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#071a33] px-4 py-2 text-sm font-semibold text-white"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Reload
        </button>
      </section>
    </main>
  );
}
