import React, { useState } from 'react';
import { SUBJECTS } from '../data';

export const SubjectFolders: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <div className="panel-title">Subject Folders</div>
          <div className="panel-sub">Click to open study chat</div>
        </div>
        <button className="see-all">+ New</button>
      </div>
      <div className="chips">
        {SUBJECTS.map((s, i) => (
          <button
            key={s.name}
            className={`chip ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="cdot" style={{ background: s.color }} />
            {s.name}
          </button>
        ))}
      </div>
      <div className="chip-info">
        <span style={{ color: SUBJECTS[active].color }}>●</span>{' '}
        {SUBJECTS[active].name} — {SUBJECTS[active].info}
      </div>
    </div>
  );
};
