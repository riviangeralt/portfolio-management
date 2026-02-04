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
