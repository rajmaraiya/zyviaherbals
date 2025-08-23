import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.text();
  // In Step 10 we’ll send to Resend and store in DB.
  console.log("Newsletter subscribe:", body);
  return NextResponse.json({ ok: true });
}
