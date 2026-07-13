import { countGenerationsSince, utcMonthStart } from "@/db/generations";

import type { SessionAuthObject } from "@clerk/backend";

export type GenerationQuotaSnapshot = {
  limit: number;
  used: number;
  remaining: number;
};

export const BILLING_PLAN_KEYS = {
  free: "free",
  pro: "pro",
  studio: "studio",
} as const;

export const MONTHLY_GENERATION_LIMITS = {
  free: 10,
  pro: 75,
  studio: 175,
} as const;

export function getMonthlyGenerationLimit(
  has: SessionAuthObject["has"],
): number {
  return MONTHLY_GENERATION_LIMITS.free;
}

export async function getGenerationQuotaSnapshot(
  has: SessionAuthObject["has"],
  clerkUserId: string,
) {
  const limit = getMonthlyGenerationLimit(has);
  const used = await countGenerationsSince(clerkUserId, utcMonthStart());
  return {
    limit,
    used,
    remaining: Math.max(0, limit - used),
  };
}
