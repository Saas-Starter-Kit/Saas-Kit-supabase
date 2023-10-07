'use client';

import { useEffect, useState } from 'react';
import configuration from '@/lib/config/dashboard';
import { useRouter } from 'next/navigation';
import { CreateStripeCheckoutSession } from '@/lib/API/Routes/stripe/stripe';

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import { Switch } from '@/components/ui/Switch';

const PriceCard = ({ product, handleSubscription, timeInterval }) => {
  const [plan, setPlan] = useState({});
  const { name, description, features, plans, isPopular } = product;

  const setProductPlan = () => {
    if (timeInterval === 'Monthly') {
      setPlan(plans[0]);
    } else {
      setPlan(plans[1]);
    }
  };

  useEffect(() => {
    setProductPlan();
  }, [timeInterval]);

  return (
    <Card
      className={`flex flex-col items-center justify-center w-72 border ${
        isPopular && 'border-blue-500 relative'
      }`}
    >
      {isPopular && (
        <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-blue-400 to-blue-700 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Popular
        </div>
      )}
      <CardHeader className="flex flex-col items-center">
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="flex flex-col items-center mt-2 mb-6">
          <h4 className="text-5xl text-black font-bold">${plan?.price}</h4>
          <div className="text-sm font-medium text-muted-foreground">Billed {timeInterval}</div>
        </div>
        <ul className="flex flex-col space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Icons.Check className="mr-2" size={20} color="green" /> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full" onClick={() => handleSubscription(plan?.price_id)}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingDisplay = ({ user, customer }) => {
  const [timeInterval, setTimeInterval] = useState('Monthly');

  const { products } = configuration;

  const basic = products[0];
  const premium = products[1];

  const router = useRouter();
  const { id, email } = user;

  const handleSubscription = async (price) => {
    // handle types
    const res = await CreateStripeCheckoutSession(price, id, email);
    router.push(res.data.session.url);
  };

  const changeTimeInterval = () => {
    let intervalSwitch = timeInterval === 'Monthly' ? 'Yearly' : 'Monthly';
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

      <div className="flex justify-between">
        <PriceCard
          product={basic}
          handleSubscription={handleSubscription}
          timeInterval={timeInterval}
        />
        <PriceCard
          product={premium}
          handleSubscription={handleSubscription}
          timeInterval={timeInterval}
        />
      </div>
    </div>
  );
};

export default PricingDisplay;
