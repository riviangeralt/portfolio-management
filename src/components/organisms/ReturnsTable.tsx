import { Card } from "@/components/atoms";
import type { NavData } from "@/types/nav";
import type { MonthlyReturn } from "@/types/returns";
import { calculateMonthlyReturns } from "@/utils";
import { useMemo } from "react";

const ReturnsTable = ({ data }: { data: NavData[] }) => {
  const monthlyReturns = useMemo(() => {
    const formatted = data.map(d => ({
      date: new Date(d.date).toISOString().split('T')[0],
      nav: d.nav
    }));
    
    const returns = calculateMonthlyReturns(formatted);
    const byYear: Record<number, MonthlyReturn> = {};
    
    returns.forEach(({ month, return: ret }) => {
      const [year, monthNum] = month.split('-').map(Number);
      if (!byYear[year]) byYear[year] = { year };
      
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'] as const;
      byYear[year][months[monthNum - 1]] = parseFloat(ret);
    });
    
    Object.values(byYear).forEach(row => {
      const values = [row.jan, row.feb, row.mar, row.apr, row.may, row.jun, row.jul, row.aug, row.sep, row.oct, row.nov, row.dec].filter(v => v !== undefined) as number[];
      if (values.length) row.ytd = values.reduce((acc, v) => acc * (1 + v / 100), 1) * 100 - 100;
    });
    
    return Object.values(byYear).sort((a, b) => b.year - a.year);
  }, [data]);

  const formatReturn = (value?: number) => {
    if (value === undefined) return "-";
    return value >= 0 ? `+${value.toFixed(2)}%` : `${value.toFixed(2)}%`;
  };

  const getCellColor = (value?: number) => {
    if (value === undefined) return "";
    if (value >= 5) return "bg-green-100 text-green-800";
    if (value >= 0) return "bg-green-50 text-green-700";
    if (value >= -5) return "bg-red-50 text-red-700";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Monthly Returns (%)</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2 font-semibold">Year</th>
            <th className="text-right p-2 font-semibold">Jan</th>
            <th className="text-right p-2 font-semibold">Feb</th>
            <th className="text-right p-2 font-semibold">Mar</th>
            <th className="text-right p-2 font-semibold">Apr</th>
            <th className="text-right p-2 font-semibold">May</th>
            <th className="text-right p-2 font-semibold">Jun</th>
            <th className="text-right p-2 font-semibold">Jul</th>
            <th className="text-right p-2 font-semibold">Aug</th>
            <th className="text-right p-2 font-semibold">Sep</th>
            <th className="text-right p-2 font-semibold">Oct</th>
            <th className="text-right p-2 font-semibold">Nov</th>
            <th className="text-right p-2 font-semibold">Dec</th>
            <th className="text-right p-2 font-semibold bg-gray-100">YTD</th>
          </tr>
        </thead>
        <tbody>
          {monthlyReturns.map((row) => (
            <tr key={row.year} className="border-b hover:bg-gray-50">
              <td className="p-2 font-medium">{row.year}</td>
              <td className={`text-right p-2 ${getCellColor(row.jan)}`}>{formatReturn(row.jan)}</td>
              <td className={`text-right p-2 ${getCellColor(row.feb)}`}>{formatReturn(row.feb)}</td>
              <td className={`text-right p-2 ${getCellColor(row.mar)}`}>{formatReturn(row.mar)}</td>
              <td className={`text-right p-2 ${getCellColor(row.apr)}`}>{formatReturn(row.apr)}</td>
              <td className={`text-right p-2 ${getCellColor(row.may)}`}>{formatReturn(row.may)}</td>
              <td className={`text-right p-2 ${getCellColor(row.jun)}`}>{formatReturn(row.jun)}</td>
              <td className={`text-right p-2 ${getCellColor(row.jul)}`}>{formatReturn(row.jul)}</td>
              <td className={`text-right p-2 ${getCellColor(row.aug)}`}>{formatReturn(row.aug)}</td>
              <td className={`text-right p-2 ${getCellColor(row.sep)}`}>{formatReturn(row.sep)}</td>
              <td className={`text-right p-2 ${getCellColor(row.oct)}`}>{formatReturn(row.oct)}</td>
              <td className={`text-right p-2 ${getCellColor(row.nov)}`}>{formatReturn(row.nov)}</td>
              <td className={`text-right p-2 ${getCellColor(row.dec)}`}>{formatReturn(row.dec)}</td>
              <td className={`text-right p-2 font-semibold bg-gray-100 ${getCellColor(row.ytd)}`}>{formatReturn(row.ytd)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default ReturnsTable;
