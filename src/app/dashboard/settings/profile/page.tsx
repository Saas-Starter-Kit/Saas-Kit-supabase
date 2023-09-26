import UpdateProfileCard from '../_PageSections/UpdateProfileCard';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function ProfileForm() {
  const user = await SupabaseUser();

  const { data } = await GetProfileByUserId(user.id);
  const display_name = data[0]?.display_name || '';

  return (
    <div>
      <UpdateProfileCard user={user} email={user.email} display_name={display_name} />
    </div>
  );
}
