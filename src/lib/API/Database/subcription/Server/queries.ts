import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';
import { SubscriptionT } from '@/lib/types/supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export const GetSubscriptionById = async (
  id: string
): Promise<PostgrestSingleResponse<SubscriptionT[]>> => {
  const res = await supabase().from('subscriptions').select().eq('id', id);
  return res;
};
