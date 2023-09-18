import 'server-only';
import stripe from '@/lib/API/Services/init/stripeServer';

const createPortalSession = async (customer, origin) => {
  const portalSession = await stripe.billingPortal.sessions.create({
    customer,
    return_url: `${origin}/dashboard`
  });
  return portalSession;
};

export default createPortalSession;
