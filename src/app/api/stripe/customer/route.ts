import { NextResponse } from 'next/server';
import { UpdateStripeCustomerEmail } from '@/lib/API/Services/stripe';
import type { NextRequest } from 'next/server';
import { CustomerPropsT, CustomerReqPropsT } from '@/lib/types/stripe';

export async function POST(request: NextRequest) {
  const req: CustomerReqPropsT = await request.json();
  const { email, customer } = req;

  const props: CustomerPropsT = { customer, email };
  const res = await UpdateStripeCustomerEmail(props);

  return NextResponse.json(res);
}
