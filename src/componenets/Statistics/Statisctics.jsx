import React from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { useLoaderData } from 'react-router-dom';

export default function Statistics() {
  const datum = useLoaderData();
  console.log(datum);

  return (
    <div className="mt-10 px-3 md:px-6 lg:px-10" style={{ width: '100%', height: 400 }}>
       <h2 className="mb-4 text-xl font-bold ">Statistics</h2>
        <ResponsiveContainer>
          <ComposedChart
            data={datum}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="rgba(149, 56, 226, 0.15)"
              stroke="none"
            />
            <Bar dataKey="price" barSize={20} fill="#9538E2" />
          </ComposedChart>
        </ResponsiveContainer>
    </div>
  );
}
