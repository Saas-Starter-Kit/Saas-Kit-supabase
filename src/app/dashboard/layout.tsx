import SideBar from './_PageSections/SideBar';
import Header from './_PageSections/Header';

export default async function DashboardLayout({ children }) {
  return (
    <main className="flex">
      <SideBar />
      <div className="flex flex-col grow-[18] w-40">
        <Header />
        <div className="ml-10 space-y-6">{children}</div>
      </div>
    </main>
  );
}
