import 'server-only';
import stripe from '@/lib/API/Services/init/stripeServer';
import config from '@/lib/config/auth';

const createCheckoutSession = async (price, customer_email, user_id, origin) => {
  const { redirects } = config;
  const { purchaseCancel, purchaseSuccess } = redirects;

  const session = await stripe.checkout.sessions
    .create({
      line_items: [
        {
          price,
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${origin}${purchaseSuccess}`,
      cancel_url: `${origin}${purchaseCancel}`,
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
