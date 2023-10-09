import 'server-only';
import stripe from '@/lib/API/Services/init/stripe';
import config from '@/lib/config/auth';
import { StripePortalSessionT } from '@/lib/types/stripe';

const createPortalSession = async (
  customer: string,
  origin: string
): Promise<StripePortalSessionT> => {
  const portalSession: StripePortalSessionT = await stripe.billingPortal.sessions.create({
    customer,
    return_url: `${origin}${config.redirects.toSubscription}`
  });

  return portalSession;
};

export default createPortalSession;
