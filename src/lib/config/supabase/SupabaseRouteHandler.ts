import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const SupabaseRouteHandler = createRouteHandlerClient({ cookies });
