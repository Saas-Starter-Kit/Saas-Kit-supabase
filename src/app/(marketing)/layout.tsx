import { buttonVariants } from '@/components/ui/Button';

import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import NavBar from './_PageSections/NavBar';
import config from '@/lib/config/marketing';
import { MainLogoText } from '@/components/ui/MainLogo';
import { ThemeDropDownMenu } from './_PageSections/DropdownMenu';

import React from 'react';

export default async function MarketingLayout({ children }) {
  const { routes } = config;

  return (
    <div className="">
      <header>
        <div className="flex items-center justify-between p-6">
          <MainLogoText />
          <NavBar items={routes} />
          <nav>
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}
            >
              Login
            </Link>
          </nav>
          <ThemeDropDownMenu />
        </div>
      </header>
      <main className="flex items-center justify-center gap-x-6 mt-6">{children}</main>
    </div>
  );
}
