'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { MainNavItem } from '@/lib/types';
import { cn } from '@/lib/utils/helpers';
import { Icons } from '@/components/Icons';
import MobileNav from './MobileNavMain';
import MainLogo from '../../../components/ui/MainLogo';

interface NavbarMainProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const NavbarMain = ({ items, children }: NavbarMainProps) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.link.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.title}
            </Link>
          ))}
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
