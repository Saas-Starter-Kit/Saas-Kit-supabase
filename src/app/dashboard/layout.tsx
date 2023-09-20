import config from '@/lib/config/dashboard';
import SideBar from './_PageSections/SideBar';

export default async function MarketingLayout({ children }) {
  const { routes } = config;

  return (
    <main className="flex">
      <SideBar />
      <div className="flex w-[85%]">{children}</div>
    </main>
  );
}
