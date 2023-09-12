'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SupabaseSignIn, SupabaseSignUp, SupabaseSignOut } from '@/lib/API/supabase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    SupabaseSignUp(email, password);
    router.push('/protected');
  };

  const handleSignIn = async () => {
    SupabaseSignIn(email, password);
    router.push('/protected');
  };

  const handleSignOut = async () => {
    SupabaseSignOut();
    router.push('/');
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
      <button className="border-4 m-5" onClick={handleSignIn}>
        Sign in
      </button>
      <button className="border-4 m-5" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}
