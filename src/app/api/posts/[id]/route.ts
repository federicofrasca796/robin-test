import { NextRequest, NextResponse } from "next/server";
import { generateRandomPost } from "../route";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const postId = (await params).id;

  if (!postId) {
    return NextResponse.json({ error: "Missing post id" }, { status: 400 });
  }

  const post = generateRandomPost(+postId);

  return NextResponse.json(post);
}
