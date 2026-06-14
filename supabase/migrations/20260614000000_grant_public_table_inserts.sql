-- Grant table-level INSERT so RLS policies can be evaluated for anonymous visitors
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
