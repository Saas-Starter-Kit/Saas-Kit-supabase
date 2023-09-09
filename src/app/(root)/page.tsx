import supabase from '@/lib/config/supabase/SupabaseServer';
import { redirect } from 'next/navigation';

const Home = async () => {
  const res = await supabase().auth.getSession();

  console.log(res);

  return <div>Home</div>;
};

export default Home;
