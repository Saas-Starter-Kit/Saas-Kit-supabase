import SideBar from './_PageSections/SideBar';

export default async function MarketingLayout({ children }) {
  return (
    <main className="flex bg-slate-100">
      <SideBar />
      <div className="flex w-[85%] ">{children}</div>
    </main>
  );
}
