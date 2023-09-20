import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { PiIcon } from 'lucide-react';

const SidebarNavItem = ({ text, icon, link }) => (
  <Link href="/">
    <span
      className={cn(
        'flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
      )}
    >
      <PiIcon className="mr-2 h-4 w-4" />
      <span className="transition-all duration-700">Overview</span>
    </span>
  </Link>
);

export function SideBarNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn('flex flex-col items-center ', className)} {...props}></nav>;
}
