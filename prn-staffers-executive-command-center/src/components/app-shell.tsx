"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-950">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-white/10 bg-[#071a33] px-5 py-6 text-white lg:flex lg:flex-col">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-sky-400 text-base font-black text-[#071a33]">
            EE
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Eagle Eye</p>
            <h1 className="text-lg font-semibold leading-5">Command Center</h1>
          </div>
        </Link>

        <nav className="mt-10 flex flex-1 flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-400 text-[#071a33] shadow-lg shadow-sky-950/20"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="rounded-lg border border-sky-300/25 bg-white/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c85f]">Integration-ready</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            Built for GoHighLevel and future systems with mock data active by default.
          </p>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
          <div className="flex min-h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
                Powered by Eagle Eye Automation
              </p>
              <p className="truncate text-xl font-semibold text-slate-950 dark:text-white">Eagle Eye Command Center</p>
            </div>

            <div className="hidden min-w-72 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 md:flex dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm">Search leads, clients, markets</span>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                aria-label="Open notifications"
              >
                <Bell className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto px-4 pb-4 sm:px-6 lg:hidden">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-[#071a33] text-white" : "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
