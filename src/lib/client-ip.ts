import "server-only";

import { headers } from "next/headers";

export async function getClientIp(): Promise<string> {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const firstIp = forwardedFor?.split(",")[0]?.trim();

  return firstIp || headerList.get("x-real-ip") || "unknown";
}
