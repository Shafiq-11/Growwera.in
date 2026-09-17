import { NextRequest, NextResponse } from "next/server";
import {
  validateAndNormalizeIndianMobile,
  generateUniqueEnquiryId,
} from "@/lib/enquiry-helpers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      mobile_number,
      mobile,
      email,
      company,
      service,
      services,
      budget,
      timeline,
      description,
      message,
    } = body;

    // 1. Mandatory Name Validation
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    // 2. Mandatory Mobile Number Validation (Indian standard)
    const rawMobile = mobile_number || mobile || "";
    const mobileResult = validateAndNormalizeIndianMobile(rawMobile);
    if (!mobileResult.isValid) {
      return NextResponse.json(
        { error: mobileResult.error || "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    // 3. Mandatory Email Validation
    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 4. Message / Requirements Validation
    const userMessage = (description || message || "").trim();
    if (!userMessage) {
      return NextResponse.json(
        { error: "Please describe your project or requirements." },
        { status: 400 }
      );
    }

    // Services formatting
    const serviceList: string[] = Array.isArray(services)
      ? services
      : typeof service === "string" && service
      ? [service]
      : [];
    const serviceFormatted = serviceList.length > 0 ? serviceList.join(", ") : null;

    // Prepare Supabase client (supports service_role key or anon key)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.SUPABASE_KEY;
    let supabase = null;

    if (supabaseUrl && supabaseKey) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        supabase = createClient(supabaseUrl, supabaseKey);
      } catch (err) {
        console.error("Failed to initialize Supabase client:", err);
      }
    }

    // 5. Generate Unique Enquiry ID (e.g. GW-2026-0001)
    const enquiryId = await generateUniqueEnquiryId(supabase);
    const submissionDate = new Date();
    const generatedUuid = crypto.randomUUID();

    const enquiryRecord = {
      id: generatedUuid,
      enquiry_id: enquiryId,
      created_at: submissionDate.toISOString(),
      name: name.trim(),
      mobile_number: mobileResult.normalized,
      email: email.trim().toLowerCase(),
      company: company?.trim() || null,
      service: serviceFormatted,
      budget: budget?.trim() || null,
      timeline: timeline?.trim() || null,
      message: userMessage,
      source: "Website",
      status: "New" as const,
      notes: null,
    };

    // 6. ALWAYS save to persistent local store so it immediately displays in Admin
    try {
      const { saveLocalEnquiry } = await import("@/lib/enquiry-store");
      await saveLocalEnquiry(enquiryRecord);
    } catch (saveErr) {
      console.error("Local enquiry save error:", saveErr);
    }

    // 7. Also save to Supabase if configured
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from("enquiries").insert([
          {
            id: enquiryRecord.id,
            enquiry_id: enquiryRecord.enquiry_id,
            name: enquiryRecord.name,
            mobile_number: enquiryRecord.mobile_number,
            email: enquiryRecord.email,
            company: enquiryRecord.company,
            service: enquiryRecord.service,
            budget: enquiryRecord.budget,
            timeline: enquiryRecord.timeline,
            message: enquiryRecord.message,
            source: enquiryRecord.source,
            status: enquiryRecord.status,
            notes: enquiryRecord.notes,
          },
        ]);

        if (dbError) {
          console.error("Supabase insert error (stored locally as fallback):", dbError);
        }
      } catch (supabaseErr) {
        console.error("Supabase request error (stored locally as fallback):", supabaseErr);
      }
    } else {
      console.log("Contact form submission stored locally (Supabase not configured):", enquiryRecord);
    }

    // 7. Send Email Notification via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "hello@growwera.com";

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      const formattedDateTime = submissionDate.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await resend.emails.send({
        from: "Growwera Contact Form <noreply@growwera.com>",
        to: notifyEmail,
        subject: `New Growwera Enquiry — ${enquiryId}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
            <div style="background-color: #f5ba27; padding: 18px 24px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; color: #000; font-size: 20px;">New Growwera Enquiry Received</h2>
              <p style="margin: 4px 0 0; color: #222; font-size: 14px; font-weight: bold;">Enquiry ID: ${enquiryId}</p>
            </div>
            
            <div style="padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px; background-color: #fff;">
              <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%;">Enquiry ID</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-family: monospace; font-weight: bold; color: #b8860b;">${enquiryId}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Date & Time</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee;">${formattedDateTime}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: bold;">${name}</td>
                </tr>
                <tr style="background-color: #fefce8;">
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee; color: #854d0e;">Mobile Number *</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #854d0e; font-size: 15px;">
                    <a href="tel:${mobileResult.normalized.replace(/\s+/g, '')}" style="color: #854d0e; text-decoration: none;">${mobileResult.normalized}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Company / Business</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee;">${company || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Service(s)</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee;">${serviceFormatted || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Budget</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee;">${budget || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Timeline</td>
                  <td style="padding: 10px 8px; border-bottom: 1px solid #eee;">${timeline || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 8px; font-weight: bold; vertical-align: top; border-bottom: 1px solid #eee;">Message / Requirements</td>
                  <td style="padding: 10px 8px; white-space: pre-wrap; border-bottom: 1px solid #eee; line-height: 1.5;">${userMessage}</td>
                </tr>
              </table>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json(
      {
        success: true,
        enquiryId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
