import * as XLSX from "xlsx";
import type { Enquiry } from "./enquiry-helpers";

/**
 * Formats date string into readable Indian Standard format
 * e.g., "17 Sep 2026, 04:30 PM"
 */
function formatDateTime(isoString: string): string {
  if (!isoString) return "—";
  try {
    const d = new Date(isoString);
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return isoString;
  }
}

/**
 * Exports enquiries into an Excel (.xlsx) file matching the exact column specifications:
 * 1. Enquiry ID
 * 2. Date & Time
 * 3. Name
 * 4. Mobile Number
 * 5. Email
 * 6. Company / Business
 * 7. Service
 * 8. Budget
 * 9. Timeline
 * 10. Message / Requirements
 * 11. Source
 * 12. Status
 * 13. Notes
 */
export function exportEnquiriesToExcel(enquiries: Enquiry[], customFilename?: string): void {
  const rows = enquiries.map((item) => ({
    "Enquiry ID": item.enquiry_id || "—",
    "Date & Time": formatDateTime(item.created_at),
    "Name": item.name || "—",
    "Mobile Number": item.mobile_number || "—",
    "Email": item.email || "—",
    "Company / Business": item.company || "—",
    "Service": item.service || "—",
    "Budget": item.budget || "—",
    "Timeline": item.timeline || "—",
    "Message / Requirements": item.message || "—",
    "Source": item.source || "Website",
    "Status": item.status || "New",
    "Notes": item.notes || "",
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  // Set explicit column widths so the sheet opens cleanly formatted
  worksheet["!cols"] = [
    { wch: 16 }, // Enquiry ID
    { wch: 22 }, // Date & Time
    { wch: 22 }, // Name
    { wch: 18 }, // Mobile Number
    { wch: 28 }, // Email
    { wch: 24 }, // Company / Business
    { wch: 30 }, // Service
    { wch: 20 }, // Budget
    { wch: 18 }, // Timeline
    { wch: 45 }, // Message / Requirements
    { wch: 14 }, // Source
    { wch: 16 }, // Status
    { wch: 35 }, // Notes
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Growwera Enquiries");

  const today = new Date().toISOString().split("T")[0];
  const filename = customFilename || `Growwera_Enquiries_${today}.xlsx`;

  XLSX.writeFile(workbook, filename);
}
