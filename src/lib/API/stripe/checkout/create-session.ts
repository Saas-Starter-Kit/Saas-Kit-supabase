import stripe from '@/lib/config/stripe/stripeServer';

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
      metadata: {
        user_id
      },
      customer_email
    })
    .catch((err) => console.log(err));

  return session;
};

export default createCheckoutSession;
