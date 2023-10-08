'use client';
import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/lib/types';

interface SettingsNavProps {
  items: NavItem[];
}

export function SettingsNav({ items }: SettingsNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center lg:space-x-6 mb-8">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className={`text-sm font-medium transition-colors ${
            item.link !== pathname
              ? 'hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-blue-500'
              : 'text-primary underline underline-offset-8 decoration-2 decoration-blue-500'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
