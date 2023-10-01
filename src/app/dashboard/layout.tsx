import SideBar from './_PageSections/SideBar';
import Header from './_PageSections/Header';
import { SupabaseSession } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';
import { redirect } from 'next/navigation';
import config from '@/lib/config/auth';

export default async function DashboardLayout({ children }) {
  const { data, error } = await SupabaseSession();

  // Auth Guard
  if (error || !data?.session) {
    redirect(config.redirects.requireAuth);
  }

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
      <div className="flex flex-col grow-[18] w-40">
        <Header email={email} display_name={display_name} avatar_url={avatar_url} />
        <div className="ml-10 mr-6 mt-6 space-y-6 ">{children}</div>
      </div>
    </main>
  );
}
