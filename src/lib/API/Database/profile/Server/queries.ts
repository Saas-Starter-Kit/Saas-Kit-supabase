import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';

export const GetProfileByUserId = async (id) => {
  const res = await supabase().from('profiles').select().eq('id', id);
  return res;
};
