'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PortalSessionT, PortalSessionReqPropsT } from '@/lib/types/stripe';
interface ManageSubProps {
  customer: string;
}

const ManageSubscription = ({ customer }: ManageSubProps) => {
  const router = useRouter();

  const handleSubscription = async () => {
    const res = await axios.post<PortalSessionT>('/api/stripe/create-portal-session', {
      customer
    } as PortalSessionReqPropsT);

    router.push(res.data.url);
  };

  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Subscription & Billing</CardTitle>
          <CardDescription>
            Click below to Manage Subscription and Billing, You will be redirected to the Stripe
            Customer Portal, where you will be able to update or cancel subsciptions, update payment
            methods and view past invoices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSubscription} className="mt-4">
            Go to Portal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageSubscription;
