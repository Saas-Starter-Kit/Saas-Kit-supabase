import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import stripe from '@/lib/API/Services/init/stripeServer';

export async function POST(request) {
  const { customer } = await request.json();
  const origin = request.nextUrl.origin;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer,
    return_url: `${origin}/protected`
  });

  return NextResponse.json({ portalSession });
}
