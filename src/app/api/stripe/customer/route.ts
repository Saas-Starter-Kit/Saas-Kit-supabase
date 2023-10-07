import { NextResponse } from 'next/server';
import { UpdateStripeCustomerEmail } from '@/lib/API/Services/stripe';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, customer } = await request.json();

  const res = await UpdateStripeCustomerEmail(customer, email);

  return NextResponse.json(res);
}
