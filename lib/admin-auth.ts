import { NextRequest } from "next/server";

export const ADMIN_COOKIE_NAME = "growwera_admin_session";

const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "growwera_secure_admin_session_secret_2026_key";

// Configurable admin password from environment or secure default
export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "Growwera@2026";
}

/**
 * Creates a signed token using Web Crypto HMAC-SHA256
 */
export async function createAdminSessionToken(): Promise<string> {
  const payload = {
    role: "admin",
    issuedAt: Date.now(),
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  };

  const payloadStr = JSON.stringify(payload);
  const encoder = new TextEncoder();
  const keyData = encoder.encode(SESSION_SECRET);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    cryptoKey,
    encoder.encode(payloadStr)
  );

  const b64Payload = Buffer.from(payloadStr).toString("base64url");
  const b64Signature = Buffer.from(signature).toString("base64url");

  return `${b64Payload}.${b64Signature}`;
}

/**
 * Verifies the signed session token
 */
export async function verifyAdminSessionToken(token: string): Promise<boolean> {
  if (!token || !token.includes(".")) return false;

  try {
    const [b64Payload, b64Signature] = token.split(".");
    const payloadStr = Buffer.from(b64Payload, "base64url").toString("utf-8");
    const payload = JSON.parse(payloadStr);

    if (!payload.expiresAt || payload.expiresAt < Date.now()) {
      return false;
    }

    const encoder = new TextEncoder();
    const keyData = encoder.encode(SESSION_SECRET);

    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const signature = Buffer.from(b64Signature, "base64url");
    const isValid = await crypto.subtle.verify(
      "HMAC",
      cryptoKey,
      signature,
      encoder.encode(payloadStr)
    );

    return isValid;
  } catch {
    return false;
  }
}

/**
 * Helper to check if an incoming NextRequest has a valid admin session cookie
 */
export async function isAuthenticatedAdmin(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) return false;
  return await verifyAdminSessionToken(token);
}
