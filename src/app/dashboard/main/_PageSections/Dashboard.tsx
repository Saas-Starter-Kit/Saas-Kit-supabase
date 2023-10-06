import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import SummaryCard from './SummaryCard';
import { Icons } from '@/components/Icons';
import ComposeChart from '../../_PageSections/charts/Compose';
import BarChart from '../../_PageSections/charts/Bar';
import PieChart from '../../_PageSections/charts/Pie';
import { RecentSales } from '../../_PageSections/RecentSales';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          card_title={'Revenue'}
          icon={<Icons.CircleDollarSign />}
          content_main={'+$45,596'}
          content_secondary={'+6.1% from last month'}
        />
        <SummaryCard
          card_title={'Subscriptions'}
          icon={<Icons.Users />}
          content_main={'+102'}
          content_secondary={'+18.1% from last month'}
        />
        <SummaryCard
          card_title={'Posts'}
          icon={<Icons.ScreenShare />}
          content_main={'+28,353'}
          content_secondary={'+10.1% from last month'}
        />
      </div>
      <ComposeChart />
      <BarChart />
      <PieChart />
      <RecentSales />
    </div>
  );
};

export default Dashboard;
