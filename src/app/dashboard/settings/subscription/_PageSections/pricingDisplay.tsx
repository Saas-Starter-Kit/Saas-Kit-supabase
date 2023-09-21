'use client';

import { useState } from 'react';
import configuration from '@/lib/config/dashboard';
import { useRouter } from 'next/navigation';
import { CreateStripeCheckoutSession } from '@/lib/API/Routes/stripe/stripe';

const PricingDisplay = ({ user }) => {
  const [timeInterval, setTimeInterval] = useState('Monthly');
  const {
    subscriptionPlans: { yearly, monthly }
  } = configuration;

  const router = useRouter();
  const { id, email } = user;

  const handleSubscription = async (price) => {
    const res = await CreateStripeCheckoutSession(price, id, email);
    router.push(res.data.session.url);
  };

  const intervalSwitch = timeInterval === 'Monthly' ? 'Yearly' : 'Monthly';

  const changeTimeInterval = () => {
    setTimeInterval(intervalSwitch);
  };

  const Plan = ({ product, price, price_id }) => {
    return (
      <div>
        <div>{product}</div>
        <div>{price} </div>
        <button className="border-4 m-5" onClick={() => handleSubscription(price_id)}>
          Purchase {product}
        </button>
      </div>
    );
  };

  return (
    <div className=" flex flex-col">
      <div>Viewing {timeInterval} Billing</div>
      <button className="border-4 m-5" onClick={changeTimeInterval}>
        Switch to {intervalSwitch}
      </button>
      {timeInterval === 'Monthly' && (
        <div>
          <Plan
            product={monthly.basic.product}
            price={monthly.basic.price}
            price_id={monthly.basic.price_id}
          />
          <Plan
            product={monthly.premium.product}
            price={monthly.premium.price}
            price_id={monthly.premium.price_id}
          />
        </div>
      )}
      {timeInterval === 'Yearly' && (
        <div>
          <Plan
            product={yearly.basic.product}
            price={yearly.basic.price}
            price_id={yearly.basic.price_id}
          />
          <Plan
            product={yearly.premium.product}
            price={yearly.premium.price}
            price_id={yearly.premium.price_id}
          />
        </div>
      )}
    </div>
  );
};

export default PricingDisplay;
