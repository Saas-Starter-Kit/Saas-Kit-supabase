'use client';

import configuration from '@/lib/config/AppDefaults';
import { useRouter } from 'next/navigation';
import { CreateStripeCheckoutSession } from '@/lib/API/Requests/stripe/stripe';

const PricingDisplay = ({ user }) => {
  const { subscriptionPlans } = configuration;
  const router = useRouter();
  const { id, email } = user;

  const handleSubscription = async (price) => {
    const res = await CreateStripeCheckoutSession(price, id, email);
    router.push(res.data.session.url);
  };

  return (
    <div className=" flex flex-col p-6">
      <div>Premium Plan</div>
      <button
        className="border-4 m-5"
        onClick={() => handleSubscription(subscriptionPlans.premium)}
      >
        Purchase Premium Subscription
      </button>

      <div>Basic Plan</div>
      <button className="border-4 m-5" onClick={() => handleSubscription(subscriptionPlans.basic)}>
        Purchase Basic Subscription
      </button>
    </div>
  );
};

export default PricingDisplay;
