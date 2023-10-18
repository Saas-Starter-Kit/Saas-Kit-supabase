'use client';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/Navigation';

import Link from 'next/link';

import { NavItem } from '@/lib/types/types';

import { Icons } from '@/components/Icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';

interface NavProps {
  items?: NavItem[];
}

const MobileNavItem = ({ title, link }: NavItem) => (
  <DropdownMenuItem className="flex justify-center">
    <Link className="p-4 text-xl font-semi-bold text-center" href={link}>
      {title}
    </Link>
  </DropdownMenuItem>
);

const MobileNav = ({ items }: NavProps) => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icons.Menu size={34} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {items.map((item) => (
            <MobileNavItem title={item.title} link={item.link} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const Nav = ({ items }: NavProps) => {
  return (
    <div>
      <NavigationMenu className="hidden md:inline-block">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNav items={items} />
    </div>
  );
};
