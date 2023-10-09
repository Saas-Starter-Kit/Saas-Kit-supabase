/* Stripe Billing Portal Types */
export type PortalSessionT = {
  id: string;
  object: string;
  configuration: string;
  created: number;
  customer: string;
  flow: null;
  livemode: boolean;
  locale: null;
  on_behalf_of: null;
  return_url: string;
  url: string;
};

export type PortalSessionReqPropsT = {
  customer: string;
};

export type CreatePortalSessionPropsT = {
  customer: string;
  origin: string;
};

/* Stripe Checkout session types */

export type CreateCheckoutSessionPropsT = {
  price: string;
  customer_email: string;
  user_id: string;
  origin: string;
};

export type CheckoutSessionReqPropsT = {
  user_id: string;
  price: string;
  customer_email: string;
};
