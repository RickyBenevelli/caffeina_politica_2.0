"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { ViewsComputedData } from "@/app/dashboard/graphs/page";

export default function AllViewsGraph({ data }: { data: ViewsComputedData[]}) {
  return (
    <div className="w-full m-auto">
      <LineChart width={600} height={400} className="m-auto" data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis
          tick={{ fill: "#334155" }}
          // type="number"
          // tickCount={}
          axisLine={false}
          tickLine={false}
          dataKey="day"
        />
        <YAxis
          tickCount={7}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#334155" }}
          type="number"
          // label={{ value: 'number of views', angle: -90, position: 'left' }}
        />
        {/* <Tooltip /> */}
        <Line
          fill="#fb923c"
          stroke="#ea580c"
          dot={true}
          type="monotone"
          dataKey="number"
        />
      </LineChart>
    </div>
  );
}
