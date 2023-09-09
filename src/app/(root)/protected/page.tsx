import supabase from '@/lib/config/supabase/SupabaseServer';
import { redirect } from 'next/navigation';

const Protected = async () => {
  const {
    data: { session }
  } = await supabase().auth.getSession();

  if (!session) {
    redirect('/');
  }

  console.log(session);

  return <div>Protected</div>;
};

export default Protected;
