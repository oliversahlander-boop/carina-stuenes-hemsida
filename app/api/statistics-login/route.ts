import { getStatisticsPin, grantStatisticsAccess } from "../../lib/statistics-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as { pin?: unknown } | null;
  const pin = typeof payload?.pin === "string" ? payload.pin : "";

  if (pin !== getStatisticsPin()) {
    return Response.json({ ok: false }, { status: 401 });
  }

  await grantStatisticsAccess();

  return Response.json({ ok: true });
}
