import 'server-only';
import stripe from '@/lib/API/Services/init/stripe';
import config from '@/lib/config/auth';
import { PortalSessionT, CreatePortalSessionPropsT } from '@/lib/types/stripe';

const createPortalSession = async ({
  customer,
  origin
}: CreatePortalSessionPropsT): Promise<PortalSessionT> => {
  const portalSession: PortalSessionT = await stripe.billingPortal.sessions.create({
    customer,
    return_url: `${origin}${config.redirects.toSubscription}`
  });

  return portalSession;
};

export default createPortalSession;
