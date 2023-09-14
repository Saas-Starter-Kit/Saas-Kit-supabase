'use client';

import { useRouter } from 'next/navigation';
//import CreateStripeCheckoutSession from '@/lib/API/Routes/stripe';
import axios from 'axios';

const ManageSubscription = ({ user }) => {
  const router = useRouter();
  const customer = 'cus_Ocwl7YD5fWsKxB';

  const handleSubscription = async () => {
    const res = await axios.post('/api//stripe/create-portal-session', {
      customer
    });

    router.push(res.data.portalSession.url);
  };

  return (
    <div className="flex flex-col p-6">
      <div>Hello {user.email}</div>
      <button className="border-4" onClick={handleSubscription}>
        Manage Subscription
      </button>
    </div>
  );
};

export default ManageSubscription;
