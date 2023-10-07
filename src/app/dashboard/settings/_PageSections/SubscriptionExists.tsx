'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import configuration from '@/lib/config/dashboard';

const SubscriptionExists = ({ price_id, status, period_ends }) => {
  const { products } = configuration;
  // handle types
  const [currentPlan, setPlan] = useState({});

  const basic = products[0];
  const premium = products[1];

  const matchSubscription = () => {
    const basicMatch = basic.plans.find((x) => x.price_id === price_id);
    const premiumMatch = premium.plans.find((x) => x.price_id === price_id);

    if (!basicMatch && !premiumMatch) return 'no Subscription Found, Contact Support';
    setPlan(basicMatch || premiumMatch);
  };

  useEffect(() => {
    matchSubscription();
  }, []);

  const router = useRouter();

  const goToPortal = async () => {
    router.push('/dashboard/settings/billing');
  };

  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>
            Click button below to go to the billing page to manage your Subscription and Billing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h2 className="text-xl">
            Current Plan: <span className="font-bold">{currentPlan?.name}</span>
          </h2>
          <div>
            Status: <span className="font-bold">{status}</span>
          </div>
          <div>
            Billing:{' '}
            <span className="font-bold">
              ${currentPlan.price}/{currentPlan.interval}
            </span>
          </div>
          <div>
            Billing Period Ends:{' '}
            <span className="font-bold">{new Date(period_ends).toLocaleDateString()}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={goToPortal} className="mt-4">
            Go to Billing
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SubscriptionExists;
