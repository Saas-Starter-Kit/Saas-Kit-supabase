import Link from 'next/link';
import { MainLogoText, MainLogoIcon } from '@/components/ui/MainLogo';

const SidebarNavItem = ({ item, isOpen }) => (
  <div className="my-8">
    <Link key={item.title} href={item.link}>
      <span className="flex items-center rounded-md text-sm space-x-2 font-medium hover:bg-accent hover:text-accent-foreground">
        <item.icon className="h-4 w-4" />
        {isOpen && <span className="">{item.title}</span>}
      </span>
    </Link>
  </div>
);

export function SideBarNav({ isOpen, routes }) {
  return (
    <nav className="flex flex-col items-center">
      <div className="mb-4 my-4 self-center">{isOpen ? <MainLogoText /> : <MainLogoIcon />}</div>
      <div>
        {routes.map((item) => (
          <SidebarNavItem key={item.title} item={item} isOpen={isOpen} />
        ))}
      </div>
    </nav>
  );
}
