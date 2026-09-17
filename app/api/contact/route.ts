import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, services, description, timeline } = body;

    // Support both services array and single service string for backwards compatibility
    const serviceList: string[] = Array.isArray(services)
      ? services
      : typeof service === "string" && service
      ? [service]
      : [];
    const serviceFormatted = serviceList.length > 0 ? serviceList.join(", ") : null;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and description are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Attempt Supabase insert if credentials are available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: dbError } = await supabase.from("enquiries").insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          company: company?.trim() || null,
          service: serviceFormatted,
          description: description.trim(),
          budget: null,
          timeline: timeline || null,
        },
      ]);

      if (dbError) {
        console.error("Supabase insert error:", dbError);
        return NextResponse.json(
          { error: "Database error. Please try again." },
          { status: 500 }
        );
      }
    } else {
      // Log to console in development when Supabase isn't configured
      console.log("Contact form submission (Supabase not configured):", {
        name,
        email,
        company,
        services: serviceList,
        description,
        timeline,
      });
    }

    // Attempt email notification via Resend if configured
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "hello@growwera.com";

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Growwera Contact Form <noreply@growwera.com>",
        to: notifyEmail,
        subject: `New project enquiry from ${name}`,
        html: `
          <h2>New enquiry from Growwera website</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Company</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company || "—"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Services Requested</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${serviceFormatted || "—"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Timeline</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${timeline || "—"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Description</td><td style="padding: 8px; white-space: pre-wrap;">${description}</td></tr>
          </table>
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
