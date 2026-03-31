import React from 'react';
import { RESOURCES } from '../data';

export const QuickResources: React.FC = () => (
  <div className="panel">
    <div className="panel-head">
      <div>
        <div className="panel-title">Quick Resources</div>
        <div className="panel-sub">Curated prep links</div>
      </div>
    </div>
    <div className="resources-list">
      {RESOURCES.map(r => (
        <a
          key={r.name}
          className="res-item"
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="res-ico" style={{ background: r.bg }}>{r.icon}</div>
          <div>
            <div className="res-name">{r.name}</div>
            <div className="res-tag">{r.tag}</div>
          </div>
          <span className="res-arr">↗</span>
        </a>
      ))}
    </div>
  </div>
);
