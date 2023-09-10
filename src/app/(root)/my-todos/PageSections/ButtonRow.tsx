'use client';

import supabase from '@/lib/config/supabase/SupabaseClientComp';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ButtonRow({ todo_id, todo_title }) {
  const [title, setTitle] = useState(todo_title);

  const handleUpdate = async () => {
    await supabase.from('todos').update({ title }).eq('id', todo_id);
  };

  const handleDelete = async () => {
    const res = await supabase.from('todos').delete().eq('id', todo_id);
    console.log(res);
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
