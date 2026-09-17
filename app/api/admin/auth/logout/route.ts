import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-auth";

export async function POST() {
  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.delete(ADMIN_COOKIE_NAME);
  return response;
}
