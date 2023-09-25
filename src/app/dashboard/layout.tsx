import SideBar from './_PageSections/SideBar';
import Header from './_PageSections/Header';
import { SupabaseUser } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';

export default async function DashboardLayout({ children }) {
  const user = await SupabaseUser();

  //let data;
  //if (user) {
  //  data = await GetProfileByUserId(user.id);
  //}

  //data[0]?.display_name

  return (
    <main className="flex">
      <SideBar />
      <div className="flex flex-col grow-[18] w-40 bg-slate-50">
        <Header email={'eee@yahoo.com'} display_name={'fffff'} />
        <div className="ml-10 mr-6 mt-6 space-y-6 ">{children}</div>
      </div>
    </main>
  );
}
