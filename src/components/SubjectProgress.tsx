import React, { useEffect, useRef } from 'react';
import { SUBJECTS } from '../data';

export const SubjectProgress: React.FC = () => {
  const fillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timers = SUBJECTS.map((s, i) =>
      setTimeout(() => {
        const el = fillRefs.current[i];
        if (el) el.style.width = s.progress + '%';
      }, 400 + i * 80)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <div className="panel-title">Subject Progress</div>
          <div className="panel-sub">Topics covered per subject</div>
        </div>
      </div>
      {SUBJECTS.map((s, i) => (
        <div key={s.name} className="prog-row">
          <div className="prog-meta">
            <span className="prog-name">
              <span className="prog-dot" style={{ background: s.color }} />
              {s.name}
            </span>
            <span className="prog-pct">{s.progress}%</span>
          </div>
          <div className="prog-track">
            <div
              ref={el => { fillRefs.current[i] = el; }}
              className="prog-fill"
              style={{ width: '0%', background: s.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
