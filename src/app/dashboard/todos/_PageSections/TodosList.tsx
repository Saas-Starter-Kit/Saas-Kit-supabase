import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

const TodoCard = ({ title, description, author }) => {
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

const TodosList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard title={todo.title} author={todo.author} description={todo.description} />
      ))}
    </div>
  );
};

export default TodosList;
