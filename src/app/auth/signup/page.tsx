'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SupabaseSignUp } from '@/lib/API/Services/supabase/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    SupabaseSignUp(email, password);
    router.push('/protected');
  };

  return (
    <div className=" flex flex-col p-6">
      <input
        className="border-4 m-5"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="border-4 border-indigo-500 m-5"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="border-4 m-5" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
}
