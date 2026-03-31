import React, { useEffect, useRef } from 'react';
import { BAR_DATA, NEXT_STEPS } from '../data';

const MAX_H = 5;

export const WeeklySessions: React.FC = () => {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timers = BAR_DATA.map((d, i) => {
      return setTimeout(() => {
        const el = barsRef.current[i];
        if (el) {
          el.style.height = `${Math.round((d.hours / MAX_H) * 100)}%`;
        }
      }, 200 + i * 60);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <div className="panel-title">Weekly Sessions</div>
          <div className="panel-sub">Hours studied per day</div>
        </div>
        <div className="up-badge">↑ 18%</div>
      </div>

      <div className="bars">
        {BAR_DATA.map((d, i) => (
          <div key={d.day} className="bar-wrap">
            <div
              ref={el => { barsRef.current[i] = el; }}
              className="bar"
              style={{
                height: '4px',
                background: d.isToday
                  ? 'linear-gradient(180deg,#f59e0b,#d97706)'
                  : d.isFuture
                  ? 'rgba(255,255,255,0.07)'
                  : 'rgba(245,158,11,0.35)',
                boxShadow: d.isToday ? '0 0 12px rgba(245,158,11,0.5)' : 'none',
              }}
            />
            <div className="bar-lbl" style={{ color: d.isToday ? '#f59e0b' : undefined }}>
              {d.day}
            </div>
          </div>
        ))}
      </div>

      <div className="steps-section">
        <div className="steps-title">✦ Recommended Next Steps</div>
        {NEXT_STEPS.map((s, i) => (
          <div key={i} className="step-item">
            <div className="step-no">{i + 1}</div>
            <span className="step-lbl">{s.label}</span>
            <span className="step-dur">{s.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
