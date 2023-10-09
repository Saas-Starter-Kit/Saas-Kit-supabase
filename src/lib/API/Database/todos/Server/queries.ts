import { SupabaseServerClient as supabase } from '@/lib/API/Services/init/supabase/SupabaseServer';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { TodosT } from '@/lib/types/supabase';

export const GetAllTodos = async (): Promise<PostgrestSingleResponse<TodosT[]>> => {
  const res = await supabase().from('todos').select();
  return res;
};

export const GetTodoByUserId = async (
  user_id: string
): Promise<PostgrestSingleResponse<TodosT[]>> => {
  const res = await supabase().from('todos').select().eq('user_id', user_id);
  return res;
};

export const GetTodoById = async (todo_id: string): Promise<PostgrestSingleResponse<TodosT[]>> => {
  const res = await supabase().from('todos').select().eq('id', todo_id);
  return res;
};
