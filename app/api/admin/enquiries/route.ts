import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import type { Enquiry } from "@/lib/enquiry-helpers";

export async function GET(req: NextRequest) {
  const isAuth = await isAuthenticatedAdmin(req);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      enquiries: [],
      stats: {
        total: 0,
        newCount: 0,
        thisMonthCount: 0,
        convertedCount: 0,
      },
      warning: "Supabase credentials not configured in environment.",
    });
  }

  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: enquiries, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch enquiries error:", error);
      return NextResponse.json({
        enquiries: [],
        stats: { total: 0, newCount: 0, thisMonthCount: 0, convertedCount: 0 },
        error: error.message,
      });
    }

    const allEnquiries: Enquiry[] = (enquiries as Enquiry[]) || [];

    // Calculate database stats
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const total = allEnquiries.length;
    const newCount = allEnquiries.filter((e) => e.status === "New").length;
    const convertedCount = allEnquiries.filter((e) => e.status === "Converted").length;
    const thisMonthCount = allEnquiries.filter((e) => {
      const d = new Date(e.created_at);
      return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
    }).length;

    return NextResponse.json({
      enquiries: allEnquiries,
      stats: {
        total,
        newCount,
        thisMonthCount,
        convertedCount,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to fetch enquiries";
    console.error("Admin enquiries API error:", err);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
