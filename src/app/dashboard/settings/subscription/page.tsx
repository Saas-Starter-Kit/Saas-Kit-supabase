import PricingDisplay from '../_PageSections/PricingDisplay';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

import { GetSubscriptionById } from '@/lib/API/Database/subcription/Server/queries';
import SubscriptionExists from '../_PageSections/SubscriptionExists';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { SubscriptionT } from '@/lib/types/supabase';

export default async function Subscription() {
  const user = await SupabaseUser();

  //error handling
  const { data, error } = await GetProfileByUserId(user.id);

  //error handling
  let subscription: PostgrestSingleResponse<SubscriptionT[]>;
  if (data[0]?.subscription_id) {
    subscription = await GetSubscriptionById(data[0]?.subscription_id);
  }

  return (
    <div className="">
      {!subscription && <PricingDisplay user={user} />}
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
