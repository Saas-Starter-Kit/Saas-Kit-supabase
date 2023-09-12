import { SupabaseRouteHandler as supabase } from '@/lib/config/supabase/SupabaseRouteHandler';

export const GetSession = async (code) => {
  await supabase.auth.exchangeCodeForSession(code);
};
