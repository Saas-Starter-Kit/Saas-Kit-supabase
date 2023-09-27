import Dashboard from './_PageSections/Dashboard';
import { SupabaseSession } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/Server/queries';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { data, error } = await SupabaseSession();

  return (
    <div>
      <Dashboard />
    </div>
  );
}
