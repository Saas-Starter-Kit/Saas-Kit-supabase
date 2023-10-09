import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';
import { ProfileT } from '@/lib/types/supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export const GetProfileByUserId = async (
  id: string
): Promise<PostgrestSingleResponse<ProfileT[]>> => {
  const res = await supabase().from('profiles').select().eq('id', id);
  return res;
};
