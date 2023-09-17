import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { buttonVariants } from '@/components/ui/Button';
import NavBarMain from '../../components/NavBarMain';
import config from '@/lib/config/marketing';
import MainLogo from '@/components/ui/MainLogo';

export default async function AuthLayout({ children }) {
  const { routes } = config;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainLogo />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
