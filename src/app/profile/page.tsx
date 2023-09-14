import ManageSubscription from './_PageComponents/manageSubscription';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';

export default async function Profile() {
  const {
    data: { user }
  } = await SupabaseUser();

  return (
    <div className="">
      <ManageSubscription user={user} />
    </div>
  );
}
