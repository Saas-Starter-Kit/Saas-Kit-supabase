'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: 'Feb',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: 'Mar',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: 'April',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: 'May',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: 'June',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }
];

const Compose = () => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white pb-6">
        <CardTitle className="text-2xl font-bold tracking-tight">Current Sales Growth</CardTitle>
        <CardDescription className="text-blue-100 mt-1">Monthly performance metrics</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                scale="band" 
                tick={{ fill: '#888', fontSize: 12 }}
                axisLine={{ stroke: '#e0e0e0' }}
              />
              <YAxis 
                tick={{ fill: '#888', fontSize: 12 }}
                axisLine={{ stroke: '#e0e0e0' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }} 
              />
              <Legend 
                iconType="circle"
                wrapperStyle={{
                  paddingTop: '16px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="amt" 
                fill="url(#colorAmt)" 
                stroke="#8884d8" 
                fillOpacity={0.3} 
              />
              <Bar 
                dataKey="pv" 
                barSize={20} 
                fill="url(#colorPv)" 
                radius={[4, 4, 0, 0]}
              />
              <Line 
                type="monotone" 
                dataKey="uv" 
                stroke="#ff7300" 
                strokeWidth={2}
                dot={{ stroke: '#ff7300', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#ff7300', strokeWidth: 2 }}
              />
              <Scatter 
                dataKey="cnt" 
                fill="#ff5252"
                shape={(props) => {
                  const { cx, cy } = props;
                  return (
                    <svg>
                      <circle cx={cx} cy={cy} r={6} fill="#ff5252" fillOpacity={0.8} />
                    </svg>
                  );
                }}
              />
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#818CF8" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default Compose;
