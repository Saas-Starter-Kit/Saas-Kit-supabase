'use client';

import { useState } from 'react';
import configuration from '@/lib/config/dashboard';
import { useRouter } from 'next/navigation';
import { CreateStripeCheckoutSession } from '@/lib/API/Routes/stripe/stripe';

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import { Switch } from '@/components/ui/Switch';

const PriceCard = ({
  isDecoration,
  product,
  price,
  price_id,
  handleSubscription,
  interval,
  features
}) => {
  return (
    <Card
      className={`flex flex-col items-center justify-center w-72 border ${
        isDecoration && 'border-blue-500 relative'
      }`}
    >
      {isDecoration && (
        <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-blue-400 to-blue-700 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Popular
        </div>
      )}
      <CardHeader className="flex flex-col items-center">
        <CardTitle>{product}</CardTitle>
        <CardContent className="flex flex-col items-center">
          <div className="flex flex-col items-center mt-4 mb-6">
            <h4 className="text-5xl text-black font-bold">${price}</h4>
            <div className="text-sm font-medium text-muted-foreground">Billed {interval}</div>
          </div>
          <ul className="flex flex-col space-y-4">
            {features.map((feature) => (
              <li className="flex items-center">
                <Icons.Check className="mr-2" size={20} color="green" /> {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full" onClick={() => handleSubscription(price_id)}>
            Get Started
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

const PricingDisplay = ({ user, customer }) => {
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

  return (
    <div className=" flex flex-col">
      <h4 className="text-xl text-black font-bold">Add Subscription</h4>
      <p className="text-sm font-medium text-muted-foreground mt-2 mb-4">
        Add a Subscription by choosing a plan below
      </p>

      <div className="flex my-8">
          <div className="text-sm font-bold mr-2">Monthly</div>
          <Switch onClick={changeTimeInterval} />
          <div className="text-sm font-bold ml-3">Yearly</div>
      </div>
      
      {timeInterval === 'Monthly' && (
        <div className="flex justify-between">
          <PriceCard
            isDecoration={true}
            product={monthly.basic.product}
            price={monthly.basic.price}
            price_id={monthly.basic.price_id}
            interval={timeInterval}
            handleSubscription={handleSubscription}
            features={monthly.basic.features}
          />
          <PriceCard
            isDecoration={false}
            product={monthly.premium.product}
            price={monthly.premium.price}
            price_id={monthly.premium.price_id}
            interval={timeInterval}
            handleSubscription={handleSubscription}
            features={monthly.premium.features}
          />
        </div>
      )}

      {timeInterval === 'Yearly' && (
        <div className="flex justify-between">
          <PriceCard
            isDecoration={false}
            product={yearly.basic.product}
            price={yearly.basic.price}
            price_id={yearly.basic.price_id}
            interval={timeInterval}
            handleSubscription={handleSubscription}
            features={monthly.basic.features}
          />
          <PriceCard
            isDecoration={false}
            product={yearly.premium.product}
            price={yearly.premium.price}
            price_id={yearly.premium.price_id}
            interval={timeInterval}
            handleSubscription={handleSubscription}
            features={yearly.premium.features}
          />
        </div>
      )}
    </div>
  );
};

export default PricingDisplay;
