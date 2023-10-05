import PricingDisplay from '../_PageSections/PricingDisplay';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

import { GetSubscriptionById } from '@/lib/API/Database/subcription/Server/queries';
import SubscriptionExists from '../_PageSections/SubscriptionExists';

export default async function Subscription() {
  const user = await SupabaseUser();

  const { data } = await GetProfileByUserId(user.id);

  let subscription;
  if (data[0]?.subscription_id) {
    subscription = await GetSubscriptionById(data[0]?.subscription_id);
  }

  return (
    <div className="">
      {!subscription && <PricingDisplay user={user} customer={data[0]?.stripe_customer_id} />}
      {subscription && (
        <SubscriptionExists
          price_id={subscription?.data[0]?.price_id}
          status={subscription?.data[0]?.status}
          period_ends={subscription?.data[0]?.period_ends_at}
        />
      )}
    </div>
  );
}
