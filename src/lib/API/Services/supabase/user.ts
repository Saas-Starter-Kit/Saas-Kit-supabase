'server only';
import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';

export const SupabaseSession = async () => {
  const session = await supabase().auth.getSession();
  return session;
};
