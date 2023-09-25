import SideBar from './_PageSections/SideBar';
import Header from './_PageSections/Header';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function DashboardLayout({ children }) {
  const {
    data: { user }
  } = await SupabaseUser();

  const { data } = await GetProfileByUserId(user.id);

  return (
    <main className="flex">
      <SideBar />
      <div className="flex flex-col grow-[18] w-40 bg-slate-50">
        <Header email={user.email} display_name={data[0]?.display_name} />
        <div className="ml-10 mr-6 mt-6 space-y-6 ">{children}</div>
      </div>
    </main>
  );
}
