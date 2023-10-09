import { NextResponse } from 'next/server';
import createPortalSession from '@/lib/API/Services/stripe/billing-portal/create-portal-session';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { customer } = await request.json();
  const origin: string = request.nextUrl.origin;

  const portalSession = await createPortalSession(customer, origin);

  return NextResponse.json(portalSession);
}
