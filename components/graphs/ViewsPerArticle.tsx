"use client";
import {
  LineChart,
  Rectangle,
  Line,
  Legend,
  LabelList,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { ViewsPerArticle } from "@/types/index";

export default function AllViewsGraph({ data }: { data: ViewsPerArticle[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      {/* Porre height=100% per scalare al meglio*/}
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="slug" tick={false} />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar
          dataKey="numberOfViews"
          fill="#fb923c"
          activeBar={<Rectangle fill="#fb923c" stroke="#ea580c" />}
        >
          <LabelList dataKey="slug" position="center" angle={45} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
