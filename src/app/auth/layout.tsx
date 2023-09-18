import MainLogo from '@/components/ui/MainLogo';

export default async function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainLogo />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
