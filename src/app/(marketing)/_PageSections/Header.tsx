import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { Nav } from './NavBar';
import config from '@/lib/config/marketing';
import { MainLogoText } from '@/components/MainLogo';
import { ThemeDropDownMenu } from '../../../components/ThemeDropdown';
import { SupabaseSession } from '@/lib/API/Services/supabase/user';

export const Header = async () => {
  const { routes } = config;
  const { data } = await SupabaseSession();

  return (
    <header>
      <div className="flex items-center justify-between p-6">
        <MainLogoText />
        <Nav items={routes}/>
        <div className="flex justify-center items-center">
          <ThemeDropDownMenu />
          <nav>
            {data?.session && (
              <Link
              href="/dashboard/main"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-6')}
              >
              Dashboard
              </Link>)}
            
            {!data?.session && (
              <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-6')}
              >
              Login
              </Link>)}
          </nav>
        </div>
      </div>
    </header>
  );
};
