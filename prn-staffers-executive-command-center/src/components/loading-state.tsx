export function LoadingState({ title = "Loading command center" }: { title?: string }) {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-[#071a33] p-6 text-white shadow-xl shadow-slate-200 sm:p-8 dark:shadow-black/30">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c85f]">{title}</p>
        <div className="skeleton mt-4 h-10 max-w-xl rounded-xl bg-white/20" />
        <div className="skeleton mt-4 h-5 max-w-2xl rounded-xl bg-white/10" />
      </section>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="skeleton h-44 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950" />
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <div className="skeleton h-72 rounded-2xl bg-[#071a33]" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="skeleton h-32 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950" />
          ))}
        </div>
      </section>
      <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="skeleton h-56 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950" />
        ))}
      </section>
    </div>
  );
}
