import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { buttonVariants } from '@/components/ui/Button';
import NavBar from './_PageSections/NavBar';
import config from '@/lib/config/marketing';
import MainLogo from '@/components/ui/MainLogo';

export default async function MarketingLayout({ children }) {
  const { routes } = config;

  return (
    <div className="">
      <header>
        <div className="flex items-center justify-between p-6">
          <MainLogo />
          <NavBar items={routes} />
          <nav>
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex items-center justify-center gap-x-6 mt-6">{children}</main>
    </div>
  );
}
