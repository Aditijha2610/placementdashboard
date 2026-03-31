import React from 'react';
import { MOCK_TESTS } from '../data';

const DIFF_STYLES: Record<string, { color: string; bg: string }> = {
  Hard:   { color: '#f87171', bg: 'rgba(248,113,113,0.1)' },
  Medium: { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
  Easy:   { color: '#22d3a5', bg: 'rgba(34,211,165,0.1)' },
};

export const MockTests: React.FC = () => (
  <div className="panel">
    <div className="panel-head">
      <div>
        <div className="panel-title">Upcoming Mock Tests</div>
        <div className="panel-sub">Scheduled this week</div>
      </div>
      <button className="see-all">Schedule →</button>
    </div>
    {MOCK_TESTS.map((t, i) => {
      const d = DIFF_STYLES[t.diff];
      return (
        <div key={i} className="mock-item">
          <div className="mock-ico">📝</div>
          <div className="mock-meta">
            <div className="mock-name">{t.subject}</div>
            <div className="mock-sub">{t.date} · {t.duration}</div>
          </div>
          <span className="diff-badge" style={{ color: d.color, background: d.bg }}>
            {t.diff}
          </span>
        </div>
      );
    })}
  </div>
);
