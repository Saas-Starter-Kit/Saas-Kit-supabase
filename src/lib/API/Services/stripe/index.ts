import stripe from '@/lib/API/Services/init/stripe';
import Stripe from 'stripe';
import { CustomerPropsT } from '@/lib/types/stripe';

export const RetrieveSubscription = async (
  subscription_id: string
): Promise<Stripe.Subscription> => {
  const subscription: Stripe.Subscription = await stripe.subscriptions.retrieve(
    subscription_id as string
  );
  return subscription;
};

export const UpdateStripeCustomerEmail = async ({
  customer,
  email
}: CustomerPropsT): Promise<Stripe.Customer> => {
  const res: Stripe.Customer = await stripe.customers.update(customer, {
    email
  });
  return res;
};
