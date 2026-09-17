import fs from "fs/promises";
import path from "path";
import type { Enquiry, EnquiryStatus } from "./enquiry-helpers";

const DATA_DIR = path.join(process.cwd(), "data");
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");

/**
 * Ensures the data directory and enquiries.json file exist
 */
async function ensureFileExists(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(ENQUIRIES_FILE);
    } catch {
      await fs.writeFile(ENQUIRIES_FILE, "[]", "utf-8");
    }
  } catch (err) {
    console.error("Error ensuring enquiries.json exists:", err);
  }
}

/**
 * Loads all locally stored enquiries
 */
export async function getLocalEnquiries(): Promise<Enquiry[]> {
  try {
    await ensureFileExists();
    const content = await fs.readFile(ENQUIRIES_FILE, "utf-8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Failed to read local enquiries:", err);
    return [];
  }
}

/**
 * Saves or prepends an enquiry to local storage
 */
export async function saveLocalEnquiry(enquiry: Enquiry): Promise<void> {
  try {
    await ensureFileExists();
    const current = await getLocalEnquiries();
    // Prevent duplicates by id or enquiry_id
    const filtered = current.filter(
      (e) => e.id !== enquiry.id && e.enquiry_id !== enquiry.enquiry_id
    );
    const updated = [enquiry, ...filtered];
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(updated, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save enquiry locally:", err);
  }
}

/**
 * Updates status and/or notes of an enquiry locally
 */
export async function updateLocalEnquiry(
  idOrEnquiryId: string,
  updates: { status?: EnquiryStatus; notes?: string }
): Promise<Enquiry | null> {
  try {
    await ensureFileExists();
    const current = await getLocalEnquiries();
    const index = current.findIndex(
      (e) => e.id === idOrEnquiryId || e.enquiry_id === idOrEnquiryId
    );

    if (index === -1) return null;

    current[index] = {
      ...current[index],
      ...(updates.status ? { status: updates.status } : {}),
      ...(updates.notes !== undefined ? { notes: updates.notes } : {}),
    };

    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(current, null, 2), "utf-8");
    return current[index];
  } catch (err) {
    console.error("Failed to update local enquiry:", err);
    return null;
  }
}

/**
 * Deletes an enquiry locally
 */
export async function deleteLocalEnquiry(idOrEnquiryId: string): Promise<boolean> {
  try {
    await ensureFileExists();
    const current = await getLocalEnquiries();
    const filtered = current.filter(
      (e) => e.id !== idOrEnquiryId && e.enquiry_id !== idOrEnquiryId
    );
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to delete local enquiry:", err);
    return false;
  }
}
