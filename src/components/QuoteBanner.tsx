import React, { useState, useRef } from 'react';
import { QUOTES } from '../data';

export const QuoteBanner: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const next = () => {
    setFading(true);
    setTimeout(() => {
      setIdx(i => (i + 1) % QUOTES.length);
      setFading(false);
    }, 200);
  };

  return (
    <div className="quote-banner">
      <span className="q-mark">"</span>
      <p ref={textRef} className={`q-text ${fading ? 'fade-out' : 'fade-in'}`}>
        {QUOTES[idx]}
      </p>
      <button className="q-btn" onClick={next}>↻ New</button>
    </div>
  );
};
