'use client';

import { useRouter } from 'next/navigation';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const SubscriptionRequired = () => {
  const router = useRouter();

  const redirectToSubscription = async () => {
    router.push('/dashboard/settings/subscription');
  };

  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>No Subscription Found</CardTitle>
          <CardDescription>
            Click below to redirect to the Subscription Page to add a Subscription to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={redirectToSubscription} className="mt-4">
            Go to Subscription
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionRequired;
