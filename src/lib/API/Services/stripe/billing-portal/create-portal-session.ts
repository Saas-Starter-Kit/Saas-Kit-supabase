import 'server-only';
import stripe from '@/lib/API/Services/init/stripe';
import config from '@/lib/config/auth';

const createPortalSession = async (customer, origin) => {
  const portalSession = await stripe.billingPortal.sessions.create({
    customer,
    return_url: `${origin}${config.redirects.toSubscription}`
  });
  return portalSession;
};

export default createPortalSession;
