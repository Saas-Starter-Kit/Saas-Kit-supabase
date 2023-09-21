import SideBar from './_PageSections/SideBar';
import Header from './_PageSections/Header';

export default async function DashboardLayout({ children }) {
  return (
    <main className="flex ">
      <SideBar />
      <div className="flex flex-col w-[85%]">
        <div className="hidden flex-col md:flex">
          <Header />
          <div className="flex">{children}</div>
        </div>
      </div>
    </main>
  );
}
