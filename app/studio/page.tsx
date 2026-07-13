import StudioWorkbench from "@/components/studio/workbench";
import { Button } from "@/components/ui/button";
import { listUserGenerationSummaries } from "@/db/generations";
import {
  getGenerationQuotaSnapshot,
  MONTHLY_GENERATION_LIMITS,
} from "@/lib/generation-quota";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

async function StudioPage() {
  const { userId, has } = await auth();
  const initialHistory = userId
    ? await listUserGenerationSummaries(userId)
    : [];
  const initialQuota =
    userId != null
      ? await getGenerationQuotaSnapshot(has, userId)
      : {
          limit: MONTHLY_GENERATION_LIMITS.free,
          used: 0,
          remaining: MONTHLY_GENERATION_LIMITS.free,
        };

  return (
    <main className="studio-shell min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="relative mr-2 flex h-14 w-14 shrink-0 items-center justify-center overflow-visible rounded-2xl border border-cyan-400/25 bg-background/40 backdrop-blur-sm">
              <Image
                src="/logos.png"
                alt="AI Image Studio"
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(56,214,255,.5)]"
                priority
              />
            </span>

            <p className="text-3xl font-mono text-primary uppercase font-semibold tracking-wide sm:text-[2.15rem]">
              AI Image Studio
            </p>
          </Link>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Button
              variant="outline"
              type="button"
              tabIndex={-1}
              className="studio-pill-strong pointer-events-none rounded-full px-4 py-2 text-sm"
            >
              Studio
            </Button>

            <div className="studio-pill-strong flex items-center justify-center rounded-full border p-1">
              <UserButton />
            </div>
          </div>
        </header>

        <StudioWorkbench
          clerkUserId={userId ?? ""}
          initialHistory={initialHistory}
          initialQuota={initialQuota}
        />
      </div>
    </main>
  );
}

export default StudioPage;
