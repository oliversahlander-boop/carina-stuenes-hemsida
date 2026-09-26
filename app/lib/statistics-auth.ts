import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const statisticsCookieName = "statistics_access";
const sessionLengthSeconds = 60 * 60 * 8;

function getSessionSecret() {
  return process.env.STATISTICS_SESSION_SECRET || "";
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

export function isStatisticsPinValid(pin: string) {
  const expectedPin = process.env.STATISTICS_PIN;
  if (!expectedPin || pin.length !== expectedPin.length) return false;
  return timingSafeEqual(Buffer.from(pin), Buffer.from(expectedPin));
}

export async function hasStatisticsAccess() {
  const secret = getSessionSecret();
  const value = (await cookies()).get(statisticsCookieName)?.value;
  if (!secret || !value) return false;

  const [expiresAt, signature] = value.split(".");
  if (!expiresAt || !signature || Number(expiresAt) <= Date.now()) return false;
  const expectedSignature = sign(expiresAt);
  if (signature.length !== expectedSignature.length) return false;
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
}

export async function grantStatisticsAccess() {
  if (!getSessionSecret()) throw new Error("STATISTICS_SESSION_SECRET saknas.");
  const expiresAt = String(Date.now() + sessionLengthSeconds * 1000);
  (await cookies()).set(statisticsCookieName, `${expiresAt}.${sign(expiresAt)}`, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionLengthSeconds,
  });
}
