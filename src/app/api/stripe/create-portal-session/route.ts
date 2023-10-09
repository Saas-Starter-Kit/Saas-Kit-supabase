import { NextResponse } from 'next/server';
import createPortalSession from '@/lib/API/Services/stripe/billing-portal/create-portal-session';
import type { NextRequest } from 'next/server';
import { PortalSessionReqPropsT, CreatePortalSessionPropsT } from '@/lib/types/stripe';

export async function POST(request: NextRequest) {
  const req: PortalSessionReqPropsT = await request.json();
  const { customer } = req;
  const origin: string = request.nextUrl.origin;

  const props: CreatePortalSessionPropsT = { customer, origin };
  const portalSession = await createPortalSession(props);

  return NextResponse.json(portalSession);
}
