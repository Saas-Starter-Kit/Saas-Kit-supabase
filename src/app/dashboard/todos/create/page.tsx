import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import TodosCreateForm from '../_PageSections/TodosCreateForm';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function NewTodo() {
  const user = await SupabaseUser();

  const { data } = await GetProfileByUserId(user.id);
  const display_name = data[0]?.display_name || '';

  return (
    <div>
      <TodosCreateForm user={user} author={display_name} />
    </div>
  );
}
