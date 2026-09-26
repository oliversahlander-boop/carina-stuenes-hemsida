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

type SupabaseEventRow = {
  name: AnalyticsEventName;
  path: string;
  source: string | null;
  created_at: string;
};

const dataDirectory = path.join(process.cwd(), ".data");
const statsFile = path.join(dataDirectory, "analytics.json");

function createEmptyStats(): AnalyticsStats {
  return {
    totals: { booking_click: 0, contact_click: 0, page_view: 0 },
    sources: {},
    events: [],
    updatedAt: null,
  };
}

function normalizeStats(value: unknown): AnalyticsStats {
  if (!value || typeof value !== "object") return createEmptyStats();
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

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  return url && secretKey ? { url, secretKey } : null;
}

function supabaseHeaders(secretKey: string) {
  return {
    apikey: secretKey,
    "Content-Type": "application/json",
  };
}

function summarizeRows(rows: SupabaseEventRow[]): AnalyticsStats {
  const stats = createEmptyStats();
  for (const row of rows) {
    stats.totals[row.name] += 1;
    const source = row.source || row.name;
    stats.sources[source] = (stats.sources[source] || 0) + 1;
  }

  stats.events = rows.slice(0, 500).reverse().map((row) => ({
    name: row.name,
    path: row.path,
    source: row.source || undefined,
    createdAt: row.created_at,
  }));
  stats.updatedAt = rows[0]?.created_at || null;
  return stats;
}

async function readSupabaseStats(url: string, secretKey: string) {
  const rows: SupabaseEventRow[] = [];
  const pageSize = 1000;

  for (let offset = 0; ; offset += pageSize) {
    const endpoint = new URL(`${url}/rest/v1/analytics_events`);
    endpoint.searchParams.set("select", "name,path,source,created_at");
    endpoint.searchParams.set("order", "created_at.desc");
    endpoint.searchParams.set("offset", String(offset));
    endpoint.searchParams.set("limit", String(pageSize));

    const response = await fetch(endpoint, {
      headers: supabaseHeaders(secretKey),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Supabase kunde inte läsa statistik (${response.status}).`);

    const page = (await response.json()) as SupabaseEventRow[];
    rows.push(...page);
    if (page.length < pageSize) break;
  }

  return summarizeRows(rows);
}

async function readLocalStats(): Promise<AnalyticsStats> {
  try {
    return normalizeStats(JSON.parse(await readFile(statsFile, "utf8")));
  } catch {
    return createEmptyStats();
  }
}

export async function readAnalyticsStats(): Promise<AnalyticsStats> {
  const config = getSupabaseConfig();
  return config ? readSupabaseStats(config.url, config.secretKey) : readLocalStats();
}

export async function recordAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
  const config = getSupabaseConfig();
  if (config) {
    const response = await fetch(`${config.url}/rest/v1/analytics_events`, {
      method: "POST",
      headers: { ...supabaseHeaders(config.secretKey), Prefer: "return=minimal" },
      body: JSON.stringify({
        name: event.name,
        path: event.path,
        source: event.source || event.name,
        created_at: event.createdAt,
      }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Supabase kunde inte spara statistik (${response.status}).`);
    return;
  }

  const stats = await readLocalStats();
  const source = event.source || event.name;
  stats.totals[event.name] += 1;
  stats.sources[source] = (stats.sources[source] || 0) + 1;
  stats.events = [...stats.events, event].slice(-500);
  stats.updatedAt = event.createdAt;
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(statsFile, JSON.stringify(stats, null, 2), "utf8");
}
