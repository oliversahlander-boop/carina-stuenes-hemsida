"use client";

import { useEffect } from "react";

export function PageViewTracker() {
  useEffect(() => {
    if (window.location.pathname.startsWith("/statistik")) {
      return;
    }

    const payload = JSON.stringify({
      name: "page_view",
      source: "page_view",
      path: window.location.pathname,
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/analytics", new Blob([payload], { type: "application/json" }));
      return;
    }

    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => undefined);
  }, []);

  return null;
}
