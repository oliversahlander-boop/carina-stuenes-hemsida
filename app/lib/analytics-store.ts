import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type AnalyticsEventName = "booking_click" | "contact_click" | "page_view";

export type AnalyticsEvent = {
  name: AnalyticsEventName;
  path: string;
  source?: string;
  visitorId?: string;
  sessionId?: string;
  referrer?: string;
  deviceType?: string;
  createdAt: string;
};

export type AnalyticsStats = {
  totals: Record<AnalyticsEventName, number>;
  sources: Record<string, number>;
  pages: Record<string, number>;
  referrers: Record<string, number>;
  devices: Record<string, number>;
  dailyVisitors: Record<string, number>;
  uniqueVisitors: number;
  uniqueBookingVisitors: number;
  uniqueContactVisitors: number;
  sessions: number;
  events: AnalyticsEvent[];
  updatedAt: string | null;
};

type SupabaseEventRow = {
  name: AnalyticsEventName;
  path: string;
  source: string | null;
  visitor_id: string | null;
  session_id: string | null;
  referrer: string | null;
  device_type: string | null;
  created_at: string;
};

const dataDirectory = path.join(process.cwd(), ".data");
const statsFile = path.join(dataDirectory, "analytics.json");

function createEmptyStats(): AnalyticsStats {
  return {
    totals: { booking_click: 0, contact_click: 0, page_view: 0 },
    sources: {},
    pages: {},
    referrers: {},
    devices: {},
    dailyVisitors: {},
    uniqueVisitors: 0,
    uniqueBookingVisitors: 0,
    uniqueContactVisitors: 0,
    sessions: 0,
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
    pages: stats.pages || {},
    referrers: stats.referrers || {},
    devices: stats.devices || {},
    dailyVisitors: stats.dailyVisitors || {},
    uniqueVisitors: Number(stats.uniqueVisitors || 0),
    uniqueBookingVisitors: Number(stats.uniqueBookingVisitors || 0),
    uniqueContactVisitors: Number(stats.uniqueContactVisitors || 0),
    sessions: Number(stats.sessions || 0),
    events: Array.isArray(stats.events) ? stats.events.slice(-500) : [],
    updatedAt: stats.updatedAt || null,
  };
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (process.env.NODE_ENV === "production" && (!url || !secretKey)) {
    throw new Error("SUPABASE_URL eller SUPABASE_SECRET_KEY saknas.");
  }

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
  const visitors = new Set<string>();
  const sessions = new Set<string>();
  const bookingVisitors = new Set<string>();
  const contactVisitors = new Set<string>();
  const attributedSessions = new Set<string>();
  const visitorsByDay = new Map<string, Set<string>>();

  for (const row of rows) {
    stats.totals[row.name] += 1;
    const source = row.source || row.name;
    stats.sources[source] = (stats.sources[source] || 0) + 1;
    if (row.name === "page_view") stats.pages[row.path] = (stats.pages[row.path] || 0) + 1;
    if (row.visitor_id) visitors.add(row.visitor_id);
    if (row.visitor_id && row.name === "booking_click") bookingVisitors.add(row.visitor_id);
    if (row.visitor_id && row.name === "contact_click") contactVisitors.add(row.visitor_id);
    if (row.session_id) sessions.add(row.session_id);
    if (row.session_id && !attributedSessions.has(row.session_id)) {
      attributedSessions.add(row.session_id);
      if (row.referrer) stats.referrers[row.referrer] = (stats.referrers[row.referrer] || 0) + 1;
      if (row.device_type) stats.devices[row.device_type] = (stats.devices[row.device_type] || 0) + 1;
    }

    if (row.visitor_id) {
      const day = row.created_at.slice(0, 10);
      const dayVisitors = visitorsByDay.get(day) || new Set<string>();
      dayVisitors.add(row.visitor_id);
      visitorsByDay.set(day, dayVisitors);
    }
  }

  stats.uniqueVisitors = visitors.size;
  stats.uniqueBookingVisitors = bookingVisitors.size;
  stats.uniqueContactVisitors = contactVisitors.size;
  stats.sessions = sessions.size;
  stats.dailyVisitors = Object.fromEntries(
    [...visitorsByDay.entries()].map(([day, dayVisitors]) => [day, dayVisitors.size]),
  );

  stats.events = rows.slice(0, 500).reverse().map((row) => ({
    name: row.name,
    path: row.path,
    source: row.source || undefined,
    visitorId: row.visitor_id || undefined,
    sessionId: row.session_id || undefined,
    referrer: row.referrer || undefined,
    deviceType: row.device_type || undefined,
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
    endpoint.searchParams.set(
      "select",
      "name,path,source,visitor_id,session_id,referrer,device_type,created_at",
    );
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
        visitor_id: event.visitorId || null,
        session_id: event.sessionId || null,
        referrer: event.referrer || null,
        device_type: event.deviceType || null,
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
