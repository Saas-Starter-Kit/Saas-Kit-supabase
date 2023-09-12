import PricingDisplay from './_PageComponents/PricingDisplay';
import { SupabaseUser } from '@/lib/API/supabase/user';

export default async function Subscription() {
  const {
    data: { user }
  } = await SupabaseUser();

  return (
    <div className="">
      <PricingDisplay user={user} />
    </div>
  );
}
