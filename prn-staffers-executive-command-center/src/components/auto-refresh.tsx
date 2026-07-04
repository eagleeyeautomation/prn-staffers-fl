"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function AutoRefresh({ intervalMs = 300000 }: { intervalMs?: number }) {
  const router = useRouter();

  useEffect(() => {
    const refresh = window.setInterval(() => {
      router.refresh();
    }, intervalMs);

    return () => window.clearInterval(refresh);
  }, [intervalMs, router]);

  return null;
}
