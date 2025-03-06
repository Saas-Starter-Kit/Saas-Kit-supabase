'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 }
];

const COLORS01 = ['#6366F1', '#8B5CF6', '#EC4899', '#F43F5E'];
const COLORS02 = ['#818CF8', '#A78BFA', '#F472B6', '#FB7185', '#34D399', '#38BDF8', '#FBBF24', '#FB923C', '#A3E635', '#60A5FA', '#E879F9'];

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-20} textAnchor="middle" fill="#888" fontSize={14}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#333" fontSize={16} fontWeight="bold">
        {value}
      </text>
      <text x={cx} y={cy} dy={30} textAnchor="middle" fill="#888" fontSize={12}>
        {`(${(percent * 100).toFixed(1)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.3}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const PieChartComp = () => {
  const [activeIndex01, setActiveIndex01] = useState(null);
  const [activeIndex02, setActiveIndex02] = useState(null);

  const onPie1MouseEnter = (_, index) => {
    setActiveIndex01(index);
  };

  const onPie2MouseEnter = (_, index) => {
    setActiveIndex02(index);
  };

  const onMouseLeave = () => {
    setActiveIndex01(null);
    setActiveIndex02(null);
  };

  return (
    <Card className="overflow-hidden border-0 shadow-xl rounded-xl">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <CardTitle className="text-2xl font-bold tracking-tight">Current Usage</CardTitle>
        <CardDescription className="text-indigo-100 mt-2">Distribution by group and sub-categories</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-inner">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <defs>
                {COLORS01.map((color, index) => (
                  <linearGradient key={`gradient01-${index}`} id={`gradient01-${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={1} />
                    <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                  </linearGradient>
                ))}
                {COLORS02.map((color, index) => (
                  <linearGradient key={`gradient02-${index}`} id={`gradient02-${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.9} />
                    <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                  </linearGradient>
                ))}
              </defs>
              
              <Pie
                activeIndex={activeIndex01}
                activeShape={renderActiveShape}
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                onMouseEnter={onPie1MouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {data01.map((entry, index) => (
                  <Cell key={`cell-01-${index}`} fill={`url(#gradient01-${index})`} strokeWidth={activeIndex01 === index ? 2 : 1} stroke="#fff" />
                ))}
              </Pie>
              
              <Pie
                activeIndex={activeIndex02}
                activeShape={renderActiveShape}
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                onMouseEnter={onPie2MouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {data02.map((entry, index) => (
                  <Cell key={`cell-02-${index}`} fill={`url(#gradient02-${index % COLORS02.length})`} strokeWidth={activeIndex02 === index ? 2 : 1} stroke="#fff" />
                ))}
              </Pie>
              
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                iconType="circle"
                wrapperStyle={{
                  paddingTop: 20,
                  fontSize: 12
                }}
              />
              
              <Tooltip 
                formatter={(value) => [`${value} units`, 'Value']}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartComp;
