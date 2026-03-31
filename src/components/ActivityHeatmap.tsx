import React, { useState } from 'react';
import { useHeatmap } from '../hooks/useHeatmap';

const COLORS = [
  'rgba(255,255,255,0.07)',
  'rgba(245,158,11,0.28)',
  'rgba(245,158,11,0.50)',
  'rgba(245,158,11,0.78)',
  'rgba(245,158,11,1)',
];

export const ActivityHeatmap: React.FC = () => {
  const { columns, activeDays } = useHeatmap(26);
  const [tip, setTip] = useState('Hover a cell to see details');

  const monthLabels: string[] = columns.map(col => {
    return col[0].date.toLocaleDateString([], { month: 'short' });
  });

  // Deduplicate month labels (show only first occurrence)
  const seenMonths: Record<string, boolean> = {};
  const labels = monthLabels.map(m => {
    if (!seenMonths[m]) { seenMonths[m] = true; return m; }
    return '';
  });

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <div className="panel-title">Activity Heatmap</div>
          <div className="panel-sub">Daily study sessions · 6 months</div>
        </div>
        <span className="active-days-label">{activeDays} active days</span>
      </div>

      <div className="hm-months">
        {labels.map((lbl, i) => (
          <span key={i} className="hm-month-lbl">{lbl}</span>
        ))}
      </div>

      <div className="heatmap">
        {columns.map((col, wi) => (
          <div key={wi} className="hm-col">
            {col.map((cell, di) => {
              const ds = cell.date.toLocaleDateString([], { month: 'short', day: 'numeric' });
              const hrs = [0, 1, 1.5, 3, 5][cell.level];
              const label = cell.isFuture
                ? `${ds}: —`
                : cell.level === 0 ? `${ds}: No session` : `${ds}: ${hrs}h studied`;
              return (
                <div
                  key={di}
                  className="hm-cell"
                  style={{
                    background: cell.isFuture ? 'transparent' : COLORS[cell.level],
                    opacity: cell.isFuture ? 0 : 1,
                  }}
                  onMouseEnter={() => setTip('📅 ' + label)}
                  onMouseLeave={() => setTip('Hover a cell to see details')}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="hm-tip">{tip}</div>
      <div className="hm-legend">
        <span>Less</span>
        {COLORS.map((c, i) => (
          <div key={i} className="hm-legend-cell" style={{ background: c === 'rgba(255,255,255,0.07)' ? 'rgba(255,255,255,0.07)' : c }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};
