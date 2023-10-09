import { Separator } from '@/components/ui/Separator';
import { TodosNav } from './_PageSections/TodosNav';
import TodosHeader from './_PageSections/TodosHeader';
import configuration from '@/lib/config/dashboard';
import { LayoutProps } from '@/lib/types/types';

export default function Layout({ children }: LayoutProps) {
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
