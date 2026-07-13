import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { deleteGeneration } from "@/db/generations";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const deleted = await deleteGeneration(userId, id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Generation not found." },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true, id: deleted.id });
}
