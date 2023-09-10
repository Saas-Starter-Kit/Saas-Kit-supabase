import supabase from '@/lib/config/supabase/SupabaseServer';
import { redirect } from 'next/navigation';

const Protected = async () => {
  const { data } = await supabase().auth.getSession();

  if (!data?.session) {
    redirect('/');
  }

  return <div>Protected</div>;
};

export default Protected;
