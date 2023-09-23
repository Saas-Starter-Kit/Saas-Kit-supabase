import ManageSubscription from '../_PageSections/ManageSubscription';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function Billing() {
  const {
    data: { user }
  } = await SupabaseUser();

  const { data } = await GetProfileByUserId(user.id);

  //if no subscription then redirect to subscription page

  return (
    <div>
      <ManageSubscription customer={data[0].stripe_customer_id} />
    </div>
  );
}
