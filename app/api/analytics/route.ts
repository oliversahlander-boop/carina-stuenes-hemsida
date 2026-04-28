import { NextRequest } from "next/server";
import { recordAnalyticsEvent, readAnalyticsStats, type AnalyticsEventName } from "../../lib/analytics-store";
import { hasStatisticsAccess } from "../../lib/statistics-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedEvents: AnalyticsEventName[] = ["booking_click", "contact_click", "page_view"];

function isAnalyticsEventName(value: unknown): value is AnalyticsEventName {
  return typeof value === "string" && allowedEvents.includes(value as AnalyticsEventName);
}

function cleanText(value: unknown, fallback = "") {
  if (typeof value !== "string") {
    return fallback;
  }

  return value.trim().slice(0, 140) || fallback;
}

export async function GET() {
  if (!(await hasStatisticsAccess())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stats = await readAnalyticsStats();

  return Response.json(stats, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => null)) as {
    name?: unknown;
    path?: unknown;
    source?: unknown;
  } | null;

  if (!isAnalyticsEventName(payload?.name)) {
    return Response.json({ error: "Ogiltig statistik-händelse." }, { status: 400 });
  }

  const stats = await recordAnalyticsEvent({
    name: payload.name,
    path: cleanText(payload.path, request.nextUrl.pathname),
    source: cleanText(payload.source, payload.name),
    createdAt: new Date().toISOString(),
  });

  return Response.json({ ok: true, totals: stats.totals });
}
