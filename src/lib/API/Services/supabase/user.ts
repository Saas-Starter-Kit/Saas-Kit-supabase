'server only';
import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';

export const SupabaseSession = async () => {
  const session = await supabase().auth.getSession();
  return session;
};

export const SupabaseUser = async () => {
  const user = await supabase().auth.getUser();
  return user;
};
