'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { TodoT } from '@/lib/types/todos';
import { GetAllTodos } from '@/lib/API/Database/todos/queries';

const TodoCard = ({ title, description, author }: TodoT) => {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>By: {author ? author : 'anonymous'}</div>
      </CardContent>
    </Card>
  );
};

const TodosList = () => {
  const [todos, setTodos] = useState<TodoT[]>([]);

  const GetTodos = async () => {
    const res = await GetAllTodos();
    setTodos(res?.data);
  };

  useEffect(() => {
    GetTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.title}
          title={todo.title}
          author={todo.author}
          description={todo.description}
        />
      ))}
    </div>
  );
};

export default TodosList;
