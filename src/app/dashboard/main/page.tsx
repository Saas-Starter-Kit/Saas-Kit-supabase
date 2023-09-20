import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { SupabaseSession } from '@/lib/API/Services/supabase/user';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
};

export default function DashboardPage() {
  //const { data } = await SupabaseSession();
  //if (!data?.session) {
  //  redirect('/');
  //}

  return <div className="h-[2000px]">Dashbaord</div>;
}
