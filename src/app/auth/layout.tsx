import MainLogo from '@/components/ui/MainLogo';

export default async function AuthLayout({ children }) {
  return (
    <div>
      <header className="flex items-center justify-center">
        <div className="flex items-center justify-between p-6">
          <MainLogo />
        </div>
      </header>
      <main className="flex items-center justify-center gap-x-6 mt-6">{children}</main>
    </div>
  );
}
