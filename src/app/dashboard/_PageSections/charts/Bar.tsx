'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';

const data = [
  { date: '2000-01', uv: 4000, pv: 2400, amt: 2400 },
  { date: '2000-02', uv: 3000, pv: 1398, amt: 2210 },
  { date: '2000-03', uv: 2000, pv: 9800, amt: 2290 },
  { date: '2000-04', uv: 2780, pv: 3908, amt: 2000 },
  { date: '2000-05', uv: 1890, pv: 4800, amt: 2181 },
  { date: '2000-06', uv: 2390, pv: 3800, amt: 2500 },
  { date: '2000-07', uv: 3490, pv: 4300, amt: 2100 },
  { date: '2000-08', uv: 4000, pv: 2400, amt: 2400 },
  { date: '2000-09', uv: 3000, pv: 1398, amt: 2210 },
  { date: '2000-10', uv: 2000, pv: 9800, amt: 2290 },
  { date: '2000-11', uv: 2780, pv: 3908, amt: 2000 },
  { date: '2000-12', uv: 1890, pv: 4800, amt: 2181 }
];

// Enhanced data with quarter information
const enhancedData = data.map(item => {
  const date = new Date(item.date);
  const month = date.getMonth();
  const quarter = Math.floor(month / 3) + 1;
  return {
    ...item,
    quarter: `Q${quarter}`,
    formattedMonth: new Date(item.date).toLocaleString('default', { month: 'short' })
  };
});

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const date = new Date(label);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    
    return (
      <div className="bg-black/90 p-4 rounded-lg shadow-lg border border-gray-700">
        <p className="text-white font-bold mb-2">{`${monthName} ${year}`}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.fill }}></div>
            <p className="text-white">{`${entry.name}: ${entry.value.toLocaleString()}`}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom legend component
const CustomLegend = ({ payload }) => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
          <span className="text-sm font-medium">{entry.value === 'pv' ? 'Page Views' : 'Unique Visitors'}</span>
        </div>
      ))}
    </div>
  );
};

const monthTickFormatter = (tick) => {
  const date = new Date(tick);
  return date.toLocaleString('default', { month: 'short' });
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  
  if (month % 3 === 1) {
    return (
      <g>
        <text 
          x={x} 
          y={y - 4} 
          textAnchor="middle" 
          fill="#6366F1" 
          fontWeight="bold"
        >{`Q${quarterNo}`}</text>
      </g>
    );
  }
  return null;
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  const date = new Date(payload.value);
  const month = date.getMonth() + 1;
  
  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        x={0} 
        y={0} 
        dy={16} 
        textAnchor="middle" 
        fill="#666"
        fontSize="12"
      >
        {month}
      </text>
    </g>
  );
};

const ModernBarChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 shadow-xl rounded-xl border-0">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Quarterly Revenue Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={enhancedData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60
            }}
            barGap={0}
            barCategoryGap="20%"
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#34D399" stopOpacity={0.8}/>
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.2" />
              </filter>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#E5E7EB"
              opacity={0.5}
            />
            <XAxis 
              dataKey="date" 
              tick={CustomizedAxisTick} 
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={renderQuarterTick}
              height={1}
              scale="band"
              xAxisId="quarter"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tickCount={6}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Legend content={<CustomLegend />} />
            <Bar 
              dataKey="pv" 
              name="Page Views"
              fill="url(#colorPv)" 
              radius={[4, 4, 0, 0]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animationDuration={1500}
              filter="url(#shadow)"
            />
            <Bar 
              dataKey="uv" 
              name="Unique Visitors"
              fill="url(#colorUv)" 
              radius={[4, 4, 0, 0]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animationDuration={1500}
              filter="url(#shadow)"
            />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="text-center text-sm text-gray-500 mt-4">
          Monthly revenue data for year 2000
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernBarChart;
