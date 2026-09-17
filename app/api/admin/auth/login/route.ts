import { NextRequest, NextResponse } from "next/server";
import {
  createAdminSessionToken,
  getAdminPassword,
  ADMIN_COOKIE_NAME,
} from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body;

    const expectedPassword = getAdminPassword();

    if (!password || password !== expectedPassword) {
      return NextResponse.json(
        { error: "Invalid admin password. Please try again." },
        { status: 401 }
      );
    }

    const token = await createAdminSessionToken();

    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (err) {
    console.error("Admin login error:", err);
    return NextResponse.json(
      { error: "Server error during login." },
      { status: 500 }
    );
  }
}
