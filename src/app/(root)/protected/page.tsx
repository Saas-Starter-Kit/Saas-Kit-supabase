import { SupabaseSession } from '@/lib/API/supabase/user';
import { redirect } from 'next/navigation';

const Protected = async () => {
  const { data } = await SupabaseSession();
  if (!data?.session) {
    redirect('/');
  }

  return <div>Protected</div>;
};

export default Protected;
