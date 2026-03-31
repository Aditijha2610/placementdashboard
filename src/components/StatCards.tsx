import React from 'react';
import { STAT_CARDS } from '../data';

export const StatCards: React.FC = () => (
  <div className="grid-3">
    {STAT_CARDS.map((card, i) => (
      <div className="panel stat-card" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
        <div className="stat-icon">{card.icon}</div>
        <div className="stat-val" style={{ color: card.color }}>{card.value}</div>
        <div className="stat-lbl">{card.label}</div>
        <div
          className="stat-trend"
          style={{
            color: card.trendColor ?? 'var(--green)',
            background: card.trendBg ?? 'rgba(34,211,165,0.10)',
          }}
        >
          {card.trend}
        </div>
      </div>
    ))}
  </div>
);
