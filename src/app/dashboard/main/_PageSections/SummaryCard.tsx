import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const SummaryCard = ({ card_title, icon, content_main, content_secondary }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{card_title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content_main}</div>
        <p className="text-xs text-muted-foreground">{content_secondary}</p>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
