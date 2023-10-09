import { MainLogoText } from '@/components/ui/MainLogo';
import { Separator } from '@/components/ui/separator';
import { LayoutProps } from '@/lib/types/types';

export default async function AuthLayout({ children }: LayoutProps) {
  return (
    <div>
      <header className="flex flex-col items-center justify-center p-6">
        <span className="mb-4">
          <MainLogoText />
        </span>

        <Separator />
      </header>

      <main className="grid justify-center items-center">{children}</main>
    </div>
  );
}
