'use client';

import { useRouter } from 'next/navigation';
import { SupabaseSignOut } from '@/lib/API/Services/supabase/auth';

export default function Logout() {
  const router = useRouter();

  const handleSignOut = async () => {
    SupabaseSignOut();
    router.push('/');
  };

  return (
    <div className=" flex flex-col p-6">
      <button className="border-4 m-5" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}
