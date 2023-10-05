import PricingDisplay from '../_PageSections/PricingDisplay';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';
import { RetrieveSubscription } from '@/lib/API/Services/stripe';

import SubscriptionExists from '../_PageSections/SubscriptionExists';

export default async function Subscription() {
  const user = await SupabaseUser();

  const { data } = await GetProfileByUserId(user.id);

  // get subscription data from supbase subscription table
  // remove retrieve subscription call.

  let subscription;
  if (data[0]?.subscription_id) {
    subscription = await RetrieveSubscription(data[0].subscription_id);
  }

  return (
    <div className="">
      {!subscription && <PricingDisplay user={user} customer={data[0]?.stripe_customer_id} />}
      {subscription && <SubscriptionExists price_id={subscription?.items?.data[0]?.price.id} />}
    </div>
  );
}
