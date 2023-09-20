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
      } transition-all duration-700 border-r border-slate-300 h-screen sticky top-0`}
    >
      <div>
        <div onClick={() => setOpen(!isOpen)}>Open</div>
        {isOpen && <SideBarNav />}
        {!isOpen && (
          <div className="flex flex-col w-8">
            <Icons.arrowRight />
            <Icons.billing />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
