import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/admin-auth";
import { updateLocalEnquiry, deleteLocalEnquiry } from "@/lib/enquiry-store";
import type { EnquiryStatus } from "@/lib/enquiry-helpers";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAuthenticatedAdmin(req);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const { status, notes } = body;

  // 1. Always update local store
  const updatedLocal = await updateLocalEnquiry(id, {
    status: status as EnquiryStatus,
    notes,
  });

  // 2. Also update Supabase if configured
  const { supabase } = getSupabaseServerClient();

  if (supabase) {
    try {
      const updatePayload: Record<string, unknown> = {};
      if (status !== undefined) updatePayload.status = status;
      if (notes !== undefined) updatePayload.notes = notes;

      await supabase
        .from("enquiries")
        .update(updatePayload)
        .or(`id.eq.${id},enquiry_id.eq.${id}`);
    } catch (err) {
      console.warn("Supabase update error (updated locally):", err);
    }
  }

  return NextResponse.json({ success: true, enquiry: updatedLocal }, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAuthenticatedAdmin(req);
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const { id } = await params;

  // 1. Delete from local store
  await deleteLocalEnquiry(id);

  // 2. Delete from Supabase if configured
  const { supabase } = getSupabaseServerClient();

  if (supabase) {
    try {
      await supabase.from("enquiries").delete().or(`id.eq.${id},enquiry_id.eq.${id}`);
    } catch (err) {
      console.warn("Supabase delete error (deleted locally):", err);
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
