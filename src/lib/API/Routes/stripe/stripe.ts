'client only';

/* Funtions used on the client to make api request to route handlers*/

import axios from 'axios';
import Stripe from 'stripe';
import { CheckoutSessionReqPropsT } from '@/lib/types/stripe';

export const CreateStripeCheckoutSession = async (price: string, id: string, email: string) => {
  const res = await axios.post<Stripe.Checkout.Session>('/api/stripe/create-checkout-session', {
    price,
    user_id: id,
    customer_email: email
  } as CheckoutSessionReqPropsT);

  return res;
};
