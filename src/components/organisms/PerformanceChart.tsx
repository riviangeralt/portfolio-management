import { Card } from "@/components/atoms";
import type { NavData } from "@/types/nav";
import { useState, useMemo } from "react";
import {
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow">
        <p className="text-sm">{new Date(data.date).toLocaleDateString()}</p>
        <p className="text-sm font-semibold text-green-600">NAV: ₹{data.nav.toFixed(2)}</p>
        <p className="text-sm font-semibold text-red-600">Drawdown: {data.drawdown.toFixed(2)}%</p>
      </div>
    );
  }
  return null;
};

const PerformanceChart = ({ data }: { data: Array<NavData>}) => {
  const { minDate, maxDate } = useMemo(() => {
    const dates = data.map(d => new Date(d.date).getTime());
    return {
      minDate: new Date(Math.min(...dates)).toISOString().split('T')[0],
      maxDate: new Date(Math.max(...dates)).toISOString().split('T')[0]
    };
  }, [data]);

  const [startDate, setStartDate] = useState(minDate);
  const [endDate, setEndDate] = useState(maxDate);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const itemDate = new Date(item.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return itemDate >= start && itemDate <= end;
    });
  }, [data, startDate, endDate]);

  return (
    <Card className="mb-6">
      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={minDate}
            max={maxDate}
            className="border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={minDate}
            max={maxDate}
            className="border rounded px-3 py-2"
          />
        </div>
        {(startDate !== minDate || endDate !== maxDate) && (
          <button
            onClick={() => { setStartDate(minDate); setEndDate(maxDate); }}
            className="self-end px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Reset
          </button>
        )}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={filteredData}>
          <XAxis dataKey="date" hide />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line yAxisId="left" dataKey="nav" stroke="#16a34a" dot={false} name="NAV" />
          <Line yAxisId="right" dataKey="drawdown" stroke="#dc2626" dot={false} name="Drawdown (%)" />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default PerformanceChart;
