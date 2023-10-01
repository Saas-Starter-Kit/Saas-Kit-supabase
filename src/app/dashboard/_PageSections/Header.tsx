'use client';
import { useEffect, useState } from 'react';
import { UserNav } from './UserNav';
import TeamSwitcher from './TeamSwitcher';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Header = ({ display_name, email, avatar_url }) => {
  const [headerText, setHeaderText] = useState('');
  const pathname = usePathname().split('/');

  useEffect(() => {
    if (pathname.includes('main')) {
      setHeaderText('Dashboard');
    } else if (pathname.includes('todos')) {
      setHeaderText('Todos');
    } else if (pathname.includes('settings')) {
      setHeaderText('Settings');
    } else {
      setHeaderText('Dashboard');
    }
  }, [pathname]);

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <div className="text-lg ml-3">{headerText}</div>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav avatar_url={avatar_url} display_name={display_name} email={email} />
        </div>
      </div>
    </div>
  );
};

export default Header;
