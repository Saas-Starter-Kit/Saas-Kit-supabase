'client-only';
import { SupabaseBrowser as supabase } from '@/lib/API/Services/init/supabase/SupabaseBrowser';

export const SupabaseProfileUpdate = async (id, display_name) => {
  const res = await supabase.from('profiles').upsert({ id, display_name });
  return res;
};
