import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import createCheckoutSession from '@/lib/API/stripe/checkout/create-session';

export async function POST(request) {
  const { price, customer_email, user_id } = await request.json();
  const origin = request.nextUrl.origin;

  const session = await createCheckoutSession(price, customer_email, user_id, origin);

  return NextResponse.json({ session });
}
