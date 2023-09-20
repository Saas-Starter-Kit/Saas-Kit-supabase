'use client';

import { useState } from 'react';

import { UpdateTodo, DeleteTodo } from '@/lib/API/Database/todos/Browser';

export default function ButtonRow({ todo_id, todo_title }) {
  const [title, setTitle] = useState(todo_title);

  const handleUpdate = async () => {
    UpdateTodo(todo_id, title);
  };

  const handleDelete = async () => {
    DeleteTodo(todo_id);
  };

  return (
    <div className=" flex flex-col p-6">
      <button className="border-4 m-5" onClick={handleDelete}>
        Delete
      </button>
      <input
        className="border-4 border-indigo-500 m-5"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="border-4 m-5" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}
