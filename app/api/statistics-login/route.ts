import { grantStatisticsAccess, isStatisticsPinValid } from "../../lib/statistics-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as { pin?: unknown } | null;
  const pin = typeof payload?.pin === "string" ? payload.pin : "";

  if (!process.env.STATISTICS_PIN || !process.env.STATISTICS_SESSION_SECRET) {
    return Response.json(
      { ok: false, error: "Statistikinloggningen är inte konfigurerad." },
      { status: 503 },
    );
  }

  if (!isStatisticsPinValid(pin)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  await grantStatisticsAccess();

  return Response.json({ ok: true });
}
