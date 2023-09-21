'use client';
import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';

export function SidebarNav({ items, className, ...props }) {
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      {items.map((item) => (
        <Link href={item.link} className="text-sm font-medium transition-colors hover:text-primary">
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
