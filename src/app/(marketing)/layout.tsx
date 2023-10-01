'use client';
//convert to server comp

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';
import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { buttonVariants } from '@/components/ui/Button';
import NavBar from './_PageSections/NavBar';
import config from '@/lib/config/marketing';
import { MainLogoText } from '@/components/ui/MainLogo';
import { Icons } from '@/components/Icons';

export default async function MarketingLayout({ children }) {
  const { routes } = config;
  const { setTheme } = useTheme();

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Icons.Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icons.Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex items-center justify-center gap-x-6 mt-6">{children}</main>
    </div>
  );
}
