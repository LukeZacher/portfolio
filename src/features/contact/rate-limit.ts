import "server-only";

import { Ratelimit } from "@upstash/ratelimit";

import { redis } from "@/lib/redis";

const perVisitorLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  prefix: "ratelimit:contact:visitor",
});

const siteWideLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, "1 d"),
  prefix: "ratelimit:contact:site",
});

export async function isContactRateLimited(
  visitorId: string,
): Promise<boolean> {
  try {
    const visitor = await perVisitorLimit.limit(visitorId);
    if (!visitor.success) {
      return true;
    }

    const site = await siteWideLimit.limit("all");
    return !site.success;
  } catch (error) {
    console.error(
      "Contact rate limit check failed; allowing the message.",
      error,
    );
    return false;
  }
}
