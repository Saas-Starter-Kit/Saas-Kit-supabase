import { revalidatePath } from 'next/cache';
import { GetAllTodos } from '@/lib/API/Database/todos/Server';
export const dynamic = 'force-dynamic';

export default async function ListTodos() {
  const res = await GetAllTodos();

  return (
    <div>
      {res.data.map((item) => (
        <div className="border-4 m-6">{item.title}</div>
      ))}
    </div>
  );
}
