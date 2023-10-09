'client-only';
import { SupabaseBrowser as supabase } from '@/lib/API/Services/init/supabase/SupabaseBrowser';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { ProfileT } from '@/lib/types/supabase';

export const SupabaseProfileUpdate = async (
  id: string,
  display_name: string
): Promise<PostgrestSingleResponse<null>> => {
  const res = await supabase.from('profiles').upsert({ id, display_name });
  return res;
};
