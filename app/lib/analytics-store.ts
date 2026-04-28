import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type AnalyticsEventName = "booking_click" | "contact_click" | "page_view";

export type AnalyticsEvent = {
  name: AnalyticsEventName;
  path: string;
  source?: string;
  createdAt: string;
};

export type AnalyticsStats = {
  totals: Record<AnalyticsEventName, number>;
  sources: Record<string, number>;
  events: AnalyticsEvent[];
  updatedAt: string | null;
};

const emptyStats: AnalyticsStats = {
  totals: {
    booking_click: 0,
    contact_click: 0,
    page_view: 0,
  },
  sources: {},
  events: [],
  updatedAt: null,
};

const dataDirectory = path.join(process.cwd(), ".data");
const statsFile = path.join(dataDirectory, "analytics.json");

function createEmptyStats(): AnalyticsStats {
  return {
    ...emptyStats,
    totals: { ...emptyStats.totals },
    sources: {},
    events: [],
  };
}

function normalizeStats(value: unknown): AnalyticsStats {
  if (!value || typeof value !== "object") {
    return createEmptyStats();
  }

  const stats = value as Partial<AnalyticsStats>;

  return {
    totals: {
      booking_click: Number(stats.totals?.booking_click || 0),
      contact_click: Number(stats.totals?.contact_click || 0),
      page_view: Number(stats.totals?.page_view || 0),
    },
    sources: stats.sources || {},
    events: Array.isArray(stats.events) ? stats.events.slice(-500) : [],
    updatedAt: stats.updatedAt || null,
  };
}

export async function readAnalyticsStats(): Promise<AnalyticsStats> {
  try {
    const content = await readFile(statsFile, "utf8");
    return normalizeStats(JSON.parse(content));
  } catch {
    return createEmptyStats();
  }
}

export async function recordAnalyticsEvent(event: AnalyticsEvent): Promise<AnalyticsStats> {
  const stats = await readAnalyticsStats();
  const source = event.source || event.name;

  stats.totals[event.name] += 1;
  stats.sources[source] = (stats.sources[source] || 0) + 1;
  stats.events = [...stats.events, event].slice(-500);
  stats.updatedAt = event.createdAt;

  await mkdir(dataDirectory, { recursive: true });
  await writeFile(statsFile, JSON.stringify(stats, null, 2), "utf8");

  return stats;
}
