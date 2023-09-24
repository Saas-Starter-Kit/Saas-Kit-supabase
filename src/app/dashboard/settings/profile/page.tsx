import UpdateProfileCard from '../_PageSections/UpdateProfileCard';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function ProfileForm() {
  const {
    data: { user }
  } = await SupabaseUser();

  const { data } = await GetProfileByUserId(user.id);

  return (
    <div>
      <UpdateProfileCard user={user} email={user.email} display_name={data[0]?.display_name} />
    </div>
  );
}
