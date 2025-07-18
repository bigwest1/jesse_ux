import React from 'react';

export interface ThoughtBubbleProps {
  /** Text content to display inside the bubble */
  text: string;
  /** Desired width of the bubble in pixels */
  width?: number;
  /** Optional height override in pixels; defaults to aspect ratio of bubble */
  height?: number;
  /** CSS class name for additional styling */
  className?: string;
}

/**
 * Lightweight thought bubble SVG with sticker-style white border and drop shadow.
 * Renders up to three circles tail and wraps text automatically.
 */
const ThoughtBubble: React.FC<ThoughtBubbleProps> = ({
  text,
  width = 200,
  height,
  className,
}) => {
  // Maintain 3:2 aspect ratio if height not provided
  const h = height ?? Math.round((width * 2) / 3);
  const vw = 120;
  const vh = 80;

  // Simple word-wrap based on character count
  const maxCharsPerLine = 20;
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  words.forEach((w) => {
    if ((current + ' ' + w).trim().length <= maxCharsPerLine) {
      current = (current + ' ' + w).trim();
    } else {
      lines.push(current);
      current = w;
    }
  });
  if (current) lines.push(current);

  return (
    <svg
      className={className}
      width={width}
      height={h}
      viewBox={`0 0 ${vw} ${vh}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={text}
    >
      <defs>
        <filter id="bubble-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>
      {/* main cloud shape */}
      <path
        d="M20,50
          c-12,0 -20,-8 -20,-20 0,-8 4,-14 10,-17
          c2,-10 12,-18 24,-18 14,0 26,10 26,24
          c12,1 22,12 22,24 0,14 -12,26 -26,26 h-40 z"
        fill="#0070f3"
        stroke="#fff"
        strokeWidth="4"
        filter="url(#bubble-shadow)"
      />
      {/* tail circles (spaced sticker style) */}
      <circle cx="28" cy="60" r="4" fill="#0070f3" stroke="#fff" strokeWidth="3" filter="url(#bubble-shadow)" />
      <circle cx="46" cy="68" r="5" fill="#0070f3" stroke="#fff" strokeWidth="3" filter="url(#bubble-shadow)" />
      <circle cx="64" cy="74" r="6" fill="#0070f3" stroke="#fff" strokeWidth="3" filter="url(#bubble-shadow)" />
      {/* text lines, centered */}
      <text
        x="50%"
        y="30"
        fontSize="8"
        fontFamily="Inter, sans-serif"
        fill="#fff"
        textAnchor="middle"
      >
        {lines.map((ln, i) => (
          <tspan key={i} x="50%" dy={i === 0 ? '0' : '1.2em'}>
            {ln}
          </tspan>
        ))}
      </text>
    </svg>
  );
};

export default ThoughtBubble;
