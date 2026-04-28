import { cookies } from "next/headers";

export const statisticsCookieName = "statistics_access";

const defaultPin = "770102";
const accessValue = "granted";

export function getStatisticsPin() {
  return process.env.STATISTICS_PIN || defaultPin;
}

export async function hasStatisticsAccess() {
  const cookieStore = await cookies();

  return cookieStore.get(statisticsCookieName)?.value === accessValue;
}

export async function grantStatisticsAccess() {
  const cookieStore = await cookies();

  cookieStore.set(statisticsCookieName, accessValue, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}
