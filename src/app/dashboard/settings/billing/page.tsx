import ManageSubscription from './_PageSections/manageSubscription';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';

export default async function Billing() {
  const {
    data: { user }
  } = await SupabaseUser();

  return (
    <div className="">
      <ManageSubscription user={user} />
    </div>
  );
}
