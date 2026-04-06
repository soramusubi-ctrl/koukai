import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "koukai",
    message: "API is alive"
  });
}
