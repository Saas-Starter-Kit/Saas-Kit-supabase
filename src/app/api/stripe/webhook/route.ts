import Stripe from 'stripe';
import stripe from '@/lib/API/Services/init/stripeServer';
import { NextResponse, NextRequest } from 'next/server';
import { buffer, text } from 'micro';
import { headers } from 'next/headers';
import { WebhookEventHandler } from '@/lib/API/Services/stripe/webhook';

const relevantEvents = [
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'invoice.paid'
];

export async function POST(req: Request) {
  //console.log(req);
  const body = await req.text();
  const sig = req.headers.get('Stripe-Signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  console.log(typeof body);
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.log(`❌ Error message: ${err}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
