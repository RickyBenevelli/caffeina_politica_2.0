"use client";
import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { ViewsComputedData } from "@/app/dashboard/graphs/page";

// export type SingleArticleViews = {
//   day: string;
//   number: number;
// };

export default function ArticleViewsGraph({
  data,
}: {
  data: ViewsComputedData[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
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
        <Area
          fill="#fb923c"
          stroke="#ea580c"
          type="monotone"
          dataKey="number"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
