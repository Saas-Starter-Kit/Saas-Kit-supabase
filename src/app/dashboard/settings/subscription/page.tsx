import PricingDisplay from './_PageSections/pricingDisplay';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function Subscription() {
  const {
    data: { user }
  } = await SupabaseUser();

  //if existing subscription then redirect to manage billing

  const { data } = await GetProfileByUserId(user.id);

  return (
    <div className="">
      <PricingDisplay user={user} customer={data[0].stripe_customer_id} />
    </div>
  );
}
