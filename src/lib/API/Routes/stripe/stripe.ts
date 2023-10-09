'client only';

/* Funtions used on the client to make api requests to route handlers*/

import axios from 'axios';
import Stripe from 'stripe';
import {
  CheckoutSessionReqPropsT,
  CreatePortalSessionPropsT,
  PortalSessionT,
  CustomerPropsT
} from '@/lib/types/stripe';

export const CreateStripeCheckoutSession = async (price: string, id: string, email: string) => {
  const res = await axios.post<Stripe.Checkout.Session>('/api/stripe/create-checkout-session', {
    price,
    user_id: id,
    customer_email: email
  } as CheckoutSessionReqPropsT);

  return res;
};

export const CreateStripePortalSession = async (customer: string) => {
  const res = await axios.post<PortalSessionT>('/api/stripe/create-portal-session', {
    customer
  } as CreatePortalSessionPropsT);

  return res;
};

export const UpdateStripeCustomer = async (customer: string, email: string) => {
  const res = await axios.post<Stripe.Customer>('/api/stripe/customer', {
    customer,
    email
  } as CustomerPropsT);

  return res;
};
