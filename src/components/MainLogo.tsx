import siteConfig from '@/lib/config/site';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

export const MainLogoText = () => {
  return (
    <Link href="/" className="hidden items-center space-x-2 md:flex">
      <Icons.Command />
      <span className="font-bold">{siteConfig.alt_name}</span>
    </Link>
  );
};

export const MainLogoIcon = () => {
  return (
    <Link href="/" className="w-4 h-4">
      <Icons.Command />
    </Link>
  );
};
