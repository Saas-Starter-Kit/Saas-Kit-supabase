import supabase from '@/lib/config/supabase/SupabaseServer';
import { revalidatePath } from 'next/cache';
import ButtonRow from './PageSections/ButtonRow';

export const dynamic = 'force-dynamic';

export default async function ListTodos() {
  const {
    data: { user }
  } = await supabase().auth.getUser();

  const user_id = user?.id;

  const res = await supabase().from('todos').select().eq('user_id', user_id);

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
