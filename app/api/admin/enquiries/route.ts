import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import type { Enquiry } from "@/lib/enquiry-helpers";
import { getLocalEnquiries } from "@/lib/enquiry-store";

export async function GET(req: NextRequest) {
  const isAuth = await isAuthenticatedAdmin(req);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  // 1. Fetch local enquiries first (guaranteed fallback)
  const localEnquiries = await getLocalEnquiries();

  // 2. Check Supabase credentials (supports service_role key or anon key)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_KEY;

  let allEnquiries: Enquiry[] = [...localEnquiries];

  if (supabaseUrl && supabaseKey) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data: dbEnquiries, error: dbError } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!dbError && dbEnquiries && Array.isArray(dbEnquiries)) {
        // Merge Supabase records with any local records not yet in Supabase
        const dbMap = new Map<string, Enquiry>();
        for (const item of dbEnquiries as Enquiry[]) {
          dbMap.set(item.enquiry_id || item.id, item);
        }

        // Add local enquiries if not present in Supabase
        for (const local of localEnquiries) {
          const key = local.enquiry_id || local.id;
          if (!dbMap.has(key)) {
            dbMap.set(key, local);
          }
        }

        allEnquiries = Array.from(dbMap.values()).sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (dbError) {
        console.warn("Supabase query warning (falling back to local store):", dbError.message);
      }
    } catch (err) {
      console.warn("Supabase connection error (falling back to local store):", err);
    }
  }

  // Calculate database stats
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const total = allEnquiries.length;
  const newCount = allEnquiries.filter((e) => e.status === "New").length;
  const convertedCount = allEnquiries.filter((e) => e.status === "Converted").length;
  const thisMonthCount = allEnquiries.filter((e) => {
    try {
      const d = new Date(e.created_at);
      return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
    } catch {
      return false;
    }
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
}
