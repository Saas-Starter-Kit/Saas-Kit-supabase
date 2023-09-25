import stripe from '@/lib/API/Services/init/stripe';

export const RetrieveSubscription = async (subscription_id) => {
  const subscription = await stripe.subscriptions
    .retrieve(subscription_id as string)
    .catch((err) => console.log(err));
  return subscription;
};
