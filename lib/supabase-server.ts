import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Existing Growwera Supabase project defaults (server-side only, never bundled in browser)
const DEFAULT_SUPABASE_URL = "https://fsazrwcnjuhtbywapcze.supabase.co";
const DEFAULT_SUPABASE_SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzYXpyd2NuanVodGJ5d2FwY3plIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTYzODQ0MSwiZXhwIjoyMTA1MjE0NDQxfQ.uEMlfVhDRKGaECIB4eljJvBS4GlKsm-9MxSkxLW1W78";

export interface SupabaseServerClientResult {
  supabase: SupabaseClient | null;
  error?: string;
  source: "env" | "fallback" | "missing";
  missingVars?: string[];
}

/**
 * Returns an initialized Supabase client for server-side route handlers.
 * Prefers environment variables:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY)
 * If environment variables are not set in the hosting environment (e.g. Vercel),
 * safely falls back to the configured Growwera Supabase instance credentials.
 */
export function getSupabaseServerClient(): SupabaseServerClientResult {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL;

  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    DEFAULT_SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    const missingVars: string[] = [];
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL && !DEFAULT_SUPABASE_URL) {
      missingVars.push("NEXT_PUBLIC_SUPABASE_URL");
    }
    if (
      !process.env.SUPABASE_SERVICE_ROLE_KEY &&
      !process.env.SUPABASE_KEY &&
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      !DEFAULT_SUPABASE_SERVICE_ROLE_KEY
    ) {
      missingVars.push("SUPABASE_SERVICE_ROLE_KEY");
    }

    return {
      supabase: null,
      error: `Missing Supabase environment variables: ${missingVars.join(", ")}`,
      source: "missing",
      missingVars,
    };
  }

  try {
    const isFromEnv = Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
        (process.env.SUPABASE_SERVICE_ROLE_KEY ||
          process.env.SUPABASE_KEY ||
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    );

    const client = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    return {
      supabase: client,
      source: isFromEnv ? "env" : "fallback",
    };
  } catch (err: any) {
    console.error("Supabase initialization exception:", err);
    return {
      supabase: null,
      error: err?.message || "Failed to initialize Supabase client.",
      source: "missing",
    };
  }
}
