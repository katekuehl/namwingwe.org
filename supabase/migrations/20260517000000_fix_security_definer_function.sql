-- Move has_role to a private schema so it is not exposed via the PostgREST API
CREATE SCHEMA IF NOT EXISTS private;

CREATE OR REPLACE FUNCTION private.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS policies run as the querying role, so anon/authenticated still need EXECUTE
GRANT EXECUTE ON FUNCTION private.has_role(UUID, public.app_role) TO anon, authenticated;

-- Update all policies to reference private.has_role
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (private.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can view submissions" ON public.contact_submissions;
CREATE POLICY "Admins can view submissions"
ON public.contact_submissions FOR SELECT
TO authenticated
USING (private.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can view subscribers" ON public.newsletter_subscribers;
CREATE POLICY "Admins can view subscribers"
ON public.newsletter_subscribers FOR SELECT
TO authenticated
USING (private.has_role(auth.uid(), 'admin'));

-- Remove the publicly exposed version
DROP FUNCTION IF EXISTS public.has_role(UUID, public.app_role);
