import Button from '@/components/Button';
import supabase from '@/lib/config/supabase';

//import type { Database } from '@/lib/database.types'

export default function Signout() {
  const Signout = async () => {
    'use server';
    await supabase()
      .auth.signOut()
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button callback={Signout} />{' '}
    </div>
  );
}
