import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cache } from 'react';

//https://github.com/vercel/next.js/issues/45371

//import type { Database } from '@/lib/database.types'

const SupabaseServerClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient({ cookies: () => cookieStore });
});

export default SupabaseServerClient;
