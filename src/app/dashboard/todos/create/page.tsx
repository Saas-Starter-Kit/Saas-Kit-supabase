import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import TodosCreateForm from '../_PageSections/TodosCreateForm';

export default async function NewTodo() {
  const {
    data: { user }
  } = await SupabaseUser();

  return (
    <div>
      <TodosCreateForm user={user} />
    </div>
  );
}
