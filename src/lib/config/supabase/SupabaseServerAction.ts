import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';

export const SupabaseServerAction = createServerActionClient({ cookies });
