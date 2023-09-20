import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { PiIcon } from 'lucide-react';

const SidebarNavItem = ({ item, isOpen }) => (
  <Link key={item.title} href={item.link}>
    <span className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
      <item.icon className="mr-2 h-4 w-4" />
      {isOpen && <span className="transition-all duration-700">{item.title}</span>}
    </span>
  </Link>
);

export function SideBarNav({ isOpen, routes }) {
  return (
    <nav className={`flex flex-col items-center ${!isOpen && 'w-8'} `}>
      <div>
        {routes.map((item) => (
          <SidebarNavItem item={item} isOpen={isOpen} />
        ))}
      </div>
    </nav>
  );
}
