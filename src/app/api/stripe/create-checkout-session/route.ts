import { NextResponse } from 'next/server';
import createCheckoutSession from '@/lib/API/Services/stripe/checkout/create-session';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  //add type
  const { price, customer_email, user_id } = await request.json();
  const origin = request.nextUrl.origin;

  const session = await createCheckoutSession(price, customer_email, user_id, origin);

  return NextResponse.json(session);
}
