import SideBar from './_PageSections/SideBar';
import { UserNav } from './_PageSections/UserNav';
import Image from 'next/image';
import TeamSwitcher from './_PageSections/TeamSwitcher';

export default async function DashboardLayout({ children }) {
  return (
    <main className="flex ">
      <SideBar />
      <div className="flex flex-col w-[85%]">
        <div className="md:hidden">
          <Image
            src="/examples/dashboard-light.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="block dark:hidden"
          />
          <Image
            src="/examples/dashboard-dark.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              <div>Dashboard</div>
              <div className="ml-auto flex items-center space-x-4">
                <UserNav />
              </div>
            </div>
          </div>
          <div className="flex">{children}</div>
        </div>
      </div>
    </main>
  );
}
