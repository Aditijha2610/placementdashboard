import { useMemo } from 'react';
import type { HeatCell } from '../types';

export function useHeatmap(weeks = 26) {
  return useMemo(() => {
    const DAYS = weeks * 7;
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - DAYS + 1);

    const cells: HeatCell[] = [];
    let activeDays = 0;

    for (let i = 0; i < DAYS; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      const isFuture = d > today;
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (!isFuture) {
        const r = Math.random();
        level = r < 0.20 ? 0 : r < 0.42 ? 1 : r < 0.62 ? 2 : r < 0.80 ? 3 : 4;
        if (level > 0) activeDays++;
      }
      cells.push({ date: d, level, isFuture });
    }

    const columns: HeatCell[][] = [];
    for (let w = 0; w < weeks; w++) {
      columns.push(cells.slice(w * 7, w * 7 + 7));
    }

    return { columns, activeDays, cells };
  }, [weeks]);
}
