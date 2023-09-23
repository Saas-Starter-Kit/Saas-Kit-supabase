import { GetTodoById } from '@/lib/API/Database/todos/Server/queries';
import TodosEditForm from '../../_PageSections/TodosEditForm';

export default async function EditTodo({ params }) {
  const { data } = await GetTodoById(params.id);

  return (
    <div>
      <TodosEditForm id={data[0].id} title={data[0].title} description={data[0].description} />
    </div>
  );
}
