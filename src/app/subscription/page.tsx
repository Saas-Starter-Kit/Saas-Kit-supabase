'use client';

import axios from 'axios';
import configuration from '@/lib/config/AppDefaults';
import { useRouter } from 'next/navigation';
import PricingDisplay from './PageSections/PricingDisplay';
import supabase from '@/lib/config/supabase/SupabaseClientComp';

export default function Login() {
  const { domain } = configuration;
  const router = useRouter();

  //const {
  //  data: { user }
  //} = await supabase.auth.getUser();

  const handleSubscription = async (price) => {
    const res: any = await axios
      .post('/api/stripe', {
        price,
        domain
      })
      .catch(function (error) {
        console.log(error);
      });

    router.push(res.data.session.url);
  };

  return (
    <div>
      <PricingDisplay handleSubscription={handleSubscription} />
    </div>
  );
}
