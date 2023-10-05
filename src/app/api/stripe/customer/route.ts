import { NextResponse } from 'next/server';
import { UpdateStripeCustomerEmail } from '@/lib/API/Services/stripe';

export async function POST(request) {
  const { email, customer } = await request.json();

  const res = await UpdateStripeCustomerEmail(customer, email);

  return NextResponse.json(res);
}
