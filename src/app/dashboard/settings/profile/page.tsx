import UpdateProfileCard from '../_PageSections/UpdateProfileCard';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function ProfileForm() {
  const user = await SupabaseUser();

  //error handling
  const { data, error } = await GetProfileByUserId(user.id);
  const display_name = data[0]?.display_name || '';
  const customer = data[0]?.stripe_customer_id;

  return (
    <div>
      <UpdateProfileCard
        user={user}
        email={user.email}
        customer={customer}
        display_name={display_name}
      />
    </div>
  );
}
