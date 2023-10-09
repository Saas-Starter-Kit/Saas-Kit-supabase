import 'server-only';
import stripe from '@/lib/API/Services/init/stripe';
import config from '@/lib/config/auth';
import Stripe from 'stripe';

const createCheckoutSession = async (price, customer_email, user_id, origin) => {
  const { redirects } = config;
  const { toBilling, toSubscription } = redirects;

  const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price,
        quantity: 1
      }
    ],
    mode: 'subscription',
    success_url: `${origin}${toBilling}`,
    cancel_url: `${origin}${toSubscription}`,
    metadata: {
      user_id
    },
    customer_email,
    subscription_data: {
      trial_period_days: 14
    }
  });

  return session;
};

export default createCheckoutSession;
