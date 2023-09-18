import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { buttonVariants } from '@/components/ui/Button';
import NavBarMain from '../../components/NavBarMain';
import config from '@/lib/config/app';

export default async function MarketingLayout({ children }) {
  const { routes } = config;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <NavBarMain items={routes} />
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
      <main className="flex-1">{children}</main>
    </div>
  );
}
