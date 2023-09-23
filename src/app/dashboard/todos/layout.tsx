import { Separator } from '@/components/ui/Separator';
import { TodosNav } from './_PageSections/TodosNav';
import TodosHeader from './_PageSections/TodosHeader';
import configuration from '@/lib/config/dashboard';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const {
    subroutes: { todos }
  } = configuration;

  return (
    <div>
      <div className="">
        <TodosHeader />
        <Separator className="my-6" />
        <TodosNav items={todos} />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
