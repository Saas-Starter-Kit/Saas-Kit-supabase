import { SupabaseBrowser as supabase } from '@/lib/API/Services/init/supabase/SupabaseBrowser';

export const UpdateTodo = async (todo_id, title, description) => {
  const res = await supabase.from('todos').update({ title, description }).eq('id', todo_id);
  return res;
};

export const DeleteTodo = async (todo_id) => {
  const res = await supabase.from('todos').delete().eq('id', todo_id);
  return res;
};

export const CreateTodo = async (title, description, user_id, author) => {
  const res = await supabase.from('todos').insert({ title, description, user_id, author });
  return res;
};
