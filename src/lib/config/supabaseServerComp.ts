import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

//import type { Database } from '@/lib/database.types'

const supabaseServerCompClient = createServerComponentClient({ cookies });

export default supabaseServerCompClient;
