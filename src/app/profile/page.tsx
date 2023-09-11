'use client';

import getStripe from '@/lib/config/stripe/stripeBrowser';
import supabase from '@/lib/config/supabase/SupabaseClientComp';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Profile() {
  return <div className=" flex flex-col p-6">Profile</div>;
}
