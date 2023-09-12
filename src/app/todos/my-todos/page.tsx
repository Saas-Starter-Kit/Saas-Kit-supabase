import { revalidatePath } from 'next/cache';
import ButtonRow from './PageSections/ButtonRow';
import { SupabaseUser } from '@/lib/API/supabase/user';
import { GetTodoByUserId } from '@/lib/API/Requests/todos/Server';

export const dynamic = 'force-dynamic';

export default async function ListTodos() {
  const {
    data: { user }
  } = await SupabaseUser();

  const user_id = user?.id;
  const res = await GetTodoByUserId(user_id);

  revalidatePath('/');

  return (
    <div>
      {res?.data?.map((item) => (
        <div>
          <div className="border-4 m-6">{item.title}</div>
          <ButtonRow todo_id={item.id} todo_title={item.title} />
        </div>
      ))}
    </div>
  );
}
