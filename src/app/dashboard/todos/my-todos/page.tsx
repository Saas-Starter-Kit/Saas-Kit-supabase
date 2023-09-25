import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetTodoByUserId } from '@/lib/API/Database/todos/Server/queries';
import MyTodos from '../_PageSections/MyTodos';

export const dynamic = 'force-dynamic';

export default async function ListTodos() {
  const user = await SupabaseUser();

  const user_id = user?.id;
  const { data } = await GetTodoByUserId(user_id);

  return (
    <div>
      <MyTodos todos={data} />
    </div>
  );
}
