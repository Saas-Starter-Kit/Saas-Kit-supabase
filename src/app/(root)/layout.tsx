import NavBarMain from './PageComponents/NavBarMain';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <NavBarMain />
      <div>{children}</div>
    </main>
  );
};

export default SiteLayout;
