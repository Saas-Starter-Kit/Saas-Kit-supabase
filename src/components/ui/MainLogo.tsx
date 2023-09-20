import siteConfig from '@/lib/config/site';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

const MainLogo = () => {
  return (
    <Link href="/" className="hidden items-center space-x-2 md:flex">
      <Icons.Logo/>
      <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
    </Link>
  );
};

export default MainLogo;
