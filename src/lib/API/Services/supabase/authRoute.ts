import { SupabaseRouteHandler as supabase } from '@/lib/API/Services/init/supabase/SupabaseRouteHandler';

export const GetSession = async (code) => {
  await supabase().auth.exchangeCodeForSession(code);
};
