import { SupabaseServerAction as supabase } from '@/lib/API/Services/init/supabase/SupabaseServerAction';

export const CreateTodo = async (title, description, user_id, user_email) => {
  const res = await supabase.from('todos').insert({ title, description, user_id, user_email });
  return res;
};
