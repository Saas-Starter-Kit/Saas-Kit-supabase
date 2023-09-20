'use client';

import { useState } from 'react';
import { Icons } from '@/components/Icons';
import { SideBarNav } from './SidebarNav';
import configuration from '@/lib/config/dashboard';

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);
  const { routes } = configuration;

  return (
    <div
      className={`${
        !isOpen ? 'grow-[0]' : 'grow-[1]'
      } transition-all duration-700 border-r border-slate-300 bg-white h-screen sticky top-0`}
    >
      <SideBarNav routes={routes} isOpen={isOpen} />
      <div className="flex justify-center">
        <Icons.SidebarToggle className="cursor-pointer" onClick={() => setOpen(!isOpen)} />
      </div>
    </div>
  );
};

export default Sidebar;
