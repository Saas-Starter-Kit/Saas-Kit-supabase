import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';

export const GetAllTodos = async () => {
  const res = await supabase().from('todos').select();
  return res;
};

export const GetTodoByUserId = async (user_id) => {
  const res = await supabase().from('todos').select().eq('user_id', user_id);
  return res;
};
