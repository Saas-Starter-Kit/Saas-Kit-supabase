import { GetSession } from '@/lib/API/Services/supabase/authRoute';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
//import type { Database } from '@/lib/database.types';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    //const supabase = createRouteHandlerClient<Database>({ cookies });
    await GetSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
