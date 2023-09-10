import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

export default async function NewTodo() {
  const addTodo = async (formData) => {
    'use server';

    const title = formData.get('title');
    const description = formData.get('description');
    const supabase = createServerActionClient({ cookies });

    const {
      data: { user }
    } = await supabase.auth.getUser();

    const user_id = user?.id;
    const user_email = user?.email;

    await supabase.from('todos').insert({ title, description, user_id, user_email });

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
