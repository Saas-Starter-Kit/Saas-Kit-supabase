import { revalidatePath } from 'next/cache';
import { GetAllTodos } from '@/lib/API/Database/todos/Server/queries';
import TodosList from '../_PageComponents/TodosList';

export default async function ListTodos() {
  const { data } = await GetAllTodos();

  return (
    <div>
      <TodosList todos={data} />
    </div>
  );
}
