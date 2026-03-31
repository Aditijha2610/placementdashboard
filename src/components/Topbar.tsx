import React, { useState } from 'react';
import { useClock } from '../hooks/useClock';

export const Topbar: React.FC = () => {
  const time = useClock();
  const [bellGlow, setBellGlow] = useState(false);

  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  const handleBell = () => {
    setBellGlow(true);
    setTimeout(() => setBellGlow(false), 700);
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="avatar">SK</div>
        <div className="user-meta">
          <h2>Welcome back, Student 👋</h2>
          <span className="date-str">{dateStr}</span>
        </div>
      </div>
      <div className="topbar-right">
        <div className="readiness-badge">
          <span className="dot-pulse" />
          Readiness: Intermediate
          <div className="readiness-dots">
            {[1,2,3,4,5].map(i => (
              <span key={i} className={`rdot ${i <= 3 ? 'on' : ''}`} />
            ))}
          </div>
        </div>
        <button
          className={`topbar-btn ${bellGlow ? 'glow' : ''}`}
          onClick={handleBell}
          title="Notifications"
        >
          <svg viewBox="0 0 24 24" fill="none" width="15" height="15">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="datetime">{time}</div>
      </div>
    </header>
  );
};
