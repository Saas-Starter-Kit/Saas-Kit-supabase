import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import createCheckoutSession from '@/lib/API/Services/stripe/checkout/create-session';

export async function POST(request) {
  const { price, customer_email, user_id } = await request.json();
  const origin = request.nextUrl.origin;

  //check to see if user already has subscription
  const session = await createCheckoutSession(price, customer_email, user_id, origin);

  return NextResponse.json({ session });
}
