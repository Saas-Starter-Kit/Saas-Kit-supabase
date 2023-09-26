'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { MainNavItem } from '@/lib/types';
import { cn } from '@/lib/utils/helpers';
import { Icons } from '@/components/Icons';
import MobileNav from './MobileNavMain';
import { MainLogoText } from '../../../components/ui/MainLogo';
import { useRouter } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/Button';

interface NavbarMainProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const NavbarMain = ({ items, children }: NavbarMainProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = () => {
    router.refresh();
    router.push('/auth/login');
  };

  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'
              )}
            >
              {item.title}
            </Link>
          ))}
          <Button
            onClick={handleClick}
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}
          >
            Login
          </Button>
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.Close /> : <Icons.Logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  );
};

export default NavbarMain;
