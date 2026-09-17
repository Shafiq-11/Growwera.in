-- ==============================================================================
-- GROWWERA — ENQUIRIES TABLE SCHEMA & ROW LEVEL SECURITY
-- Run this in the Supabase SQL Editor (Dashboard -> SQL Editor)
-- ==============================================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  budget TEXT,
  timeline TEXT,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'Website' NOT NULL,
  status TEXT DEFAULT 'New' NOT NULL,
  notes TEXT
);

-- 2. Create useful indexes for fast search, filter, and sorting
CREATE INDEX IF NOT EXISTS idx_enquiries_enquiry_id ON public.enquiries(enquiry_id);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON public.enquiries(email);
CREATE INDEX IF NOT EXISTS idx_enquiries_mobile ON public.enquiries(mobile_number);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policy: Allow public anonymous insertion (website contact form)
DROP POLICY IF EXISTS "Allow public anonymous insert" ON public.enquiries;
CREATE POLICY "Allow public anonymous insert"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 5. RLS Policy: Prevent public users from reading enquiries
-- (Only service_role or authenticated admin should read)
DROP POLICY IF EXISTS "Deny public select" ON public.enquiries;
CREATE POLICY "Deny public select"
  ON public.enquiries
  FOR SELECT
  TO anon
  USING (false);

-- 6. RLS Policy: Service role has full access (used by server-side Next.js APIs)
-- Note: In Supabase, service_role bypasses RLS by default, but we declare explicit policy for clarity
DROP POLICY IF EXISTS "Service role full access" ON public.enquiries;
CREATE POLICY "Service role full access"
  ON public.enquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
