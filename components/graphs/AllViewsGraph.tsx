"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AllViewsGraph({ data }: { data: {name:string; value:number}[] }) {
  return (
    <div className="w-full m-auto">
      <LineChart width={600} height={400} className="m-auto" data={data as any}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line
          fill="#40C0C0"
          stroke="#40C0C0"
          dot={true}
          type="monotone"
          dataKey="value"
        />
      </LineChart>
    </div>
  );
}
