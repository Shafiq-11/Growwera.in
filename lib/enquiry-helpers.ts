import type { SupabaseClient } from "@supabase/supabase-js";

export type EnquiryStatus =
  | "New"
  | "Contacted"
  | "Discussion"
  | "Proposal Sent"
  | "In Progress"
  | "Converted"
  | "Closed";

export interface Enquiry {
  id: string;
  enquiry_id: string;
  created_at: string;
  name: string;
  mobile_number: string;
  email: string;
  company?: string | null;
  service?: string | null;
  budget?: string | null;
  timeline?: string | null;
  message: string;
  source: string;
  status: EnquiryStatus;
  notes?: string | null;
}

export interface MobileValidationResult {
  isValid: boolean;
  normalized: string;
  error?: string;
}

/**
 * Validates and normalizes Indian mobile numbers.
 * Supports formats like:
 * - 9876543210
 * - +91 9876543210
 * - +91-98765-43210
 * - 09876543210
 * - 919876543210
 */
export function validateAndNormalizeIndianMobile(raw: string): MobileValidationResult {
  if (!raw || !raw.trim()) {
    return {
      isValid: false,
      normalized: "",
      error: "Please enter your mobile number.",
    };
  }

  // Remove spaces, hyphens, brackets, dots
  const stripped = raw.trim().replace(/[\s\-\(\)\.]/g, "");

  // Match optional prefix (+91, 91, 0) followed by 10 digits starting with 6, 7, 8, or 9
  const indianMobileRegex = /^(?:\+91|91|0)?([6-9]\d{9})$/;
  const match = stripped.match(indianMobileRegex);

  if (!match) {
    return {
      isValid: false,
      normalized: "",
      error: "Please enter a valid mobile number.",
    };
  }

  const tenDigits = match[1];
  const normalized = `+91 ${tenDigits.slice(0, 5)} ${tenDigits.slice(5)}`;

  return {
    isValid: true,
    normalized,
  };
}

/**
 * Generates a readable, sequential, unique Enquiry ID in the format:
 * GW-YYYY-0001
 */
export async function generateUniqueEnquiryId(
  supabase: SupabaseClient | null
): Promise<string> {
  const year = new Date().getFullYear();
  const prefix = `GW-${year}-`;

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("enquiry_id")
        .like("enquiry_id", `${prefix}%`)
        .order("created_at", { ascending: false })
        .limit(20);

      if (!error && data && data.length > 0) {
        let maxNum = 0;
        for (const row of data) {
          const numPart = (row.enquiry_id || "").replace(prefix, "");
          const parsed = parseInt(numPart, 10);
          if (!isNaN(parsed) && parsed > maxNum) {
            maxNum = parsed;
          }
        }
        return `${prefix}${String(maxNum + 1).padStart(4, "0")}`;
      }

      // If no enquiries for this year yet
      return `${prefix}0001`;
    } catch (err) {
      console.error("Error generating enquiry ID with Supabase:", err);
    }
  }

  // Check local store enquiries
  try {
    const { getLocalEnquiries } = await import("./enquiry-store");
    const local = await getLocalEnquiries();
    let maxNum = 0;
    for (const row of local) {
      if (row.enquiry_id && row.enquiry_id.startsWith(prefix)) {
        const numPart = row.enquiry_id.replace(prefix, "");
        const parsed = parseInt(numPart, 10);
        if (!isNaN(parsed) && parsed > maxNum) {
          maxNum = parsed;
        }
      }
    }
    return `${prefix}${String(maxNum + 1).padStart(4, "0")}`;
  } catch {
    return `${prefix}0001`;
  }
}
