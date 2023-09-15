import 'server-only';
import stripe from '@/lib/API/Services/init/stripeServer';

const createCheckoutSession = async (price, customer_email, user_id, origin) => {
  const session = await stripe.checkout.sessions
    .create({
      line_items: [
        {
          price,
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${origin}/subscription/success`,
      cancel_url: `${origin}/subscription/cancel`,
      payment_behavior: 'default_incomplete',
      metadata: {
        user_id
      },
      customer_email,
      subscription_data: {
        trial_period_days: 14
      }
    })
    .catch((err) => console.log(err));

  return session;
};

export default createCheckoutSession;
