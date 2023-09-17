import { revalidatePath } from 'next/cache';
import { SupabaseUser } from '@/lib/API/supabase/user';
import { CreateTodo } from '@/lib/API/Requests/todos/ServerActions';

export const dynamic = 'force-dynamic';

export default async function NewTodo() {
  const addTodo = async (formData) => {
    'use server';

    const title = formData.get('title');
    const description = formData.get('description');

    const {
      data: { user }
    } = await SupabaseUser();

    const user_id = user?.id;
    const user_email = user?.email;

    await CreateTodo(title, description, user_id, user_email);

    revalidatePath('/');
  };

  return (
    <div>
      <form className="flex flex-col p-6" action={addTodo}>
        <input className="border-4 border-indigo-500 m-5" name="title" />
        <input className="border-4 border-indigo-500 m-5" name="description" />
        <button className="border-4 m-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
