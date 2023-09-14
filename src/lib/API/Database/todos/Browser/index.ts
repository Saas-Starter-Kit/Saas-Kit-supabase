import { SupabaseBrowser as supabase } from '@/lib/API/Services/init/supabase/SupabaseBrowser';

export const UpdateTodo = async (todo_id, title) => {
  const res = await supabase.from('todos').update({ title }).eq('id', todo_id);
  return res;
};

export const DeleteTodo = async (todo_id) => {
  const res = await supabase.from('todos').delete().eq('id', todo_id);
  return res;
};
