import supabase from '@/lib/config/supabase/SupabaseServer';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

export default async function ListTodos() {
  const res = await supabase().from('todos').select();
  revalidatePath('/');

  return (
    <div>
      {res.data.map((item) => (
        <div className="border-4 m-6">{item.title}</div>
      ))}
    </div>
  );
}
