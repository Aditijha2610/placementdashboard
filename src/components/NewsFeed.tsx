import React from 'react';
import { NEWS_ITEMS } from '../data';

const TAG_STYLES: Record<string, { color: string; bg: string }> = {
  New:       { color: '#22d3a5', bg: 'rgba(34,211,165,0.1)' },
  Trending:  { color: '#c084fc', bg: 'rgba(192,132,252,0.1)' },
  Important: { color: '#f87171', bg: 'rgba(248,113,113,0.1)' },
};

export const NewsFeed: React.FC = () => (
  <div className="panel">
    <div className="panel-head">
      <div>
        <div className="panel-title">📰 Latest Placement News</div>
        <div className="panel-sub">Campus drives, exams & updates</div>
      </div>
      <button className="see-all">View all →</button>
    </div>
    <div className="news-grid">
      {NEWS_ITEMS.map((item, i) => {
        const t = TAG_STYLES[item.tag];
        return (
          <div key={i} className="news-card">
            <div className="news-top">
              <div className="news-logo" style={{ background: item.bgColor }}>{item.abbr}</div>
              <span className="news-co">{item.company}</span>
              <span className="news-badge" style={{ color: t.color, background: t.bg }}>{item.tag}</span>
            </div>
            <div className="news-title">{item.title}</div>
            <div className="news-desc">{item.desc}</div>
            <div className="news-footer">
              <span className="news-time">⏱ {item.time}</span>
              <span className="news-read">Read more ↗</span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
