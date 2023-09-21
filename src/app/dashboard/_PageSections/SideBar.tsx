'use client';

import { useState } from 'react';
import { Icons } from '@/components/Icons';
import { SideBarNav } from './SidebarNav';
import { MainLogoText, MainLogoIcon } from '@/components/ui/MainLogo';
import configuration from '@/lib/config/dashboard';

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);
  const { routes } = configuration;

  return (
    <div
      className={`${
        !isOpen ? 'grow-[0]' : 'grow-[1] w-40'
      } flex flex-col items-center transition-all duration-700 border-r border-slate-300 bg-white h-screen sticky top-0 p-2`}
    >
      <SideBarNav routes={routes} isOpen={isOpen} />
      <div className="mt-auto">
        <Icons.SidebarToggle className="cursor-pointer m-4" onClick={() => setOpen(!isOpen)} />
      </div>
    </div>
  );
};

export default Sidebar;
