import { Separator } from '@/components/ui/Separator';
import { SettingsNav } from './_PageComponents/SettingsNav';
import SettingsHeader from './_PageComponents/SettingsHeader';
import configuration from '@/lib/config/dashboard';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const {
    subroutes: { settings }
  } = configuration;

  return (
    <div>
      <SettingsHeader />
      <Separator className="my-6" />
      <SettingsNav items={settings} />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
