import { NextResponse } from 'next/server';
import { SupabaseRouteHandler as supabase } from '@/lib/API/Services/init/supabase/SupabaseRouteHandler';

import type { NextRequest } from 'next/server';
import config from '@/lib/config/auth';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    await supabase().auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(config.redirects.toDashboard);
}
