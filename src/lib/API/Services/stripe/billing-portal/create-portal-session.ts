import 'server-only';
import stripe from '@/lib/API/Services/init/stripeServer';
import config from '@/lib/config/auth';

const createPortalSession = async (customer, origin) => {
  const portalSession = await stripe.billingPortal.sessions.create({
    customer,
    return_url: `${origin}${config.redirects.purchaseSuccess}`
  });
  return portalSession;
};

export default createPortalSession;
