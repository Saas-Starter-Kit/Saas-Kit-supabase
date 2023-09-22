'use client';
import { UserNav } from './UserNav';
import TeamSwitcher from './TeamSwitcher';

const Header = () => {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <div>Dashboard</div>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
