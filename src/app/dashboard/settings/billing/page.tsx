import ManageSubscription from '../_PageSections/ManageSubscription';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';
import { RetrieveSubscription } from '@/lib/API/Services/stripe';
import SubscriptionRequired from '../_PageSections/SubscriptionRequired';
import Stripe from 'stripe';

export default async function Billing() {
  const user = await SupabaseUser();

  // handle error toast
  const { data, error } = await GetProfileByUserId(user.id);

  let subscription: Stripe.Subscription;
  if (data[0]?.subscription_id) {
    subscription = await RetrieveSubscription(data[0].subscription_id);
  }

  return (
    <div>
      {subscription && <ManageSubscription customer={data[0].stripe_customer_id} />}
      {!subscription && <SubscriptionRequired />}
    </div>
  );
}
