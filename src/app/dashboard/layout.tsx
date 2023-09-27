import SideBar from './_PageSections/SideBar';
import Header from './_PageSections/Header';
import { SupabaseGetUser, SupabaseSession, SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function DashboardLayout({ children }) {
  const { data, error } = await SupabaseSession();

  let profile;
  if (data?.session?.user) {
    profile = await GetProfileByUserId(data.session.user.id);
  }

  const display_name = data[0]?.display_name;
  const email = data?.session?.user?.email;
  const avatar_url = data?.session?.user?.user_metadata?.avatar_url;

  return (
    <main className="flex">
      <SideBar />
      <div className="flex flex-col grow-[18] w-40 bg-slate-50">
        <Header error={error} email={email} display_name={display_name} avatar_url={avatar_url} />
        <div className="ml-10 mr-6 mt-6 space-y-6 ">{children}</div>
      </div>
    </main>
  );
}
