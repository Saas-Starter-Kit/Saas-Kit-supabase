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
      <Card className=" relative flex flex-col items-center justify-center w-72 border border-blue-500">
        <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-blue-400 to-blue-700 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Popular
        </div>
        <CardHeader className="flex flex-col items-center">
          <CardTitle>Basic</CardTitle>
          <CardContent className="flex flex-col items-center">
            <div className="mt-4 mb-6">
              <h4 className="text-5xl text-black font-bold">$19</h4>
              <div className="text-sm font-medium text-muted-foreground">Billed Monthly</div>
            </div>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-center">
                <Icons.Check className="mr-2" size={20} color="green" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.Check className="mr-2" size={20} color="green" /> Unlimited Users
              </li>

              <li className="flex items-center">
                <Icons.Check className="mr-2" size={20} color="green" /> Custom domain
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full">
              Get Started
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PricingDisplay;
