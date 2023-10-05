import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';

export const GetSubscriptionById = async (id) => {
  const res = await supabase().from('subscriptions').select().eq('id', id);
  return res;
};
