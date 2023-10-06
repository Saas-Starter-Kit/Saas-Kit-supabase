'use client';
import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { usePathname } from 'next/navigation';

export function TodosNav({ items, ...props }) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6 mb-6')} {...props}>
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
