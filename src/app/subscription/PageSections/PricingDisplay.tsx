'use client';
import configuration from '@/lib/config/AppDefaults';

const PricingDisplay = ({ handleSubscription }) => {
  const { subscriptionPlans } = configuration;

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
