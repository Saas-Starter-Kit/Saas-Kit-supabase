import { NextResponse } from 'next/server';
import createPortalSession from '@/lib/API/Services/stripe/billing-portal/create-portal-session';

export async function POST(request) {
  const { customer } = await request.json();
  const origin = request.nextUrl.origin;

  const portalSession = await createPortalSession(customer, origin);

  return NextResponse.json({ portalSession });
}
