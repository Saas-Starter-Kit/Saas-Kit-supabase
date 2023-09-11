import { NextResponse } from 'next/server';
import stripe from '@/lib/config/stripe/stripeServer';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  // Create Checkout Sessions from body params.
  const { price, domain } = await request.json();

  console.log(request);

  const session = await stripe.checkout.sessions
    .create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price,
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `http://localhost:3000/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/subscription/cancel`,
      metadata: {
        user_id: 1234
      },
      customer_email: 'ddd'
      //  subscription_data: {
      //    trial_period_days: 7
      //  }
    })
    .catch((err) => console.log(err));

  return NextResponse.json({ session });
}
