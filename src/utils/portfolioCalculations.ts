import type { NavData } from '../types/nav';

export function calculateDrawdown(data: NavData[]) {
let peak = -Infinity;
  return data.map(d => {
    peak = Math.max(peak, d.nav);
    return {
      date: d.date,
      drawdown: ((d.nav - peak) / peak) * 100
    };
  });
}

export function calculateMonthlyReturns(data: { date: string; nav: number }[]) {
  const map: Record<string, { start: number; end: number }> = {};

  data.forEach(d => {
    const [year, month] = d.date.split("-");
    const key = `${year}-${month}`;
    if (!map[key]) {
      map[key] = { start: d.nav, end: d.nav };
    } else {
      map[key].end = d.nav;
    }
  });

  return Object.entries(map).map(([key, v]) => ({
    month: key,
    return: ((v.end / v.start - 1) * 100).toFixed(2)
  }));
}
