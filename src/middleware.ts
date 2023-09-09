import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
//import type { Database } from '@/lib/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  //  const supabase = createMiddlewareClient<Database>({ req, res })
  const supabase = createMiddlewareClient({ req, res });
  const result = await supabase.auth.getSession();

  return res;
}
