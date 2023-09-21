import { revalidatePath } from 'next/cache';
import ButtonRow from './_PageSections/ButtonRow';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetTodoByUserId } from '@/lib/API/Database/todos/Server';

export const dynamic = 'force-dynamic';

export default async function ListTodos() {
  const {
    data: { user }
  } = await SupabaseUser();

  const user_id = user?.id;
  const res = await GetTodoByUserId(user_id);

  return (
    <div>
      {res?.data?.map((item) => (
        <div>
          <div className="border-4">{item.title}</div>
          <ButtonRow todo_id={item.id} todo_title={item.title} />
        </div>
      ))}
    </div>
  );
}
