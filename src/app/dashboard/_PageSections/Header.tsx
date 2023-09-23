'use client';
import {useEffect, useState } from 'react'
import {  UserNav } from './UserNav';
import TeamSwitcher from './TeamSwitcher';
import { usePathname } from 'next/navigation'

const Header = () => {
  const [headerText, setHeaderText] = useState('')
  const pathname = usePathname().split('/')

  useEffect(() => {
    if(pathname.includes('main') ) {
      setHeaderText('Dashboard')
    } else if(pathname.includes('todos')) {
      setHeaderText('Todos')
    } else if(pathname.includes('settings')) {
      setHeaderText("Settings")
    } else {
      setHeaderText("Dashboard")
    }

  }, [pathname])


  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <div className="text-lg ml-3">{headerText}</div>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
