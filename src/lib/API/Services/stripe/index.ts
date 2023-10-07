import stripe from '@/lib/API/Services/init/stripe';
import Stripe from 'stripe';

export const RetrieveSubscription = async (
  subscription_id: string
): Promise<Stripe.Subscription> => {
  const subscription: Stripe.Subscription = await stripe.subscriptions.retrieve(
    subscription_id as string
  );
  return subscription;
};

export const UpdateStripeCustomerEmail = async (customer, email) => {
  const { error } = await stripe.customers.update(customer, {
    email
  });
  return { error };
};
