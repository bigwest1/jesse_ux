import React from 'react';

export interface ThoughtBubbleProps {
  /** Text content to display inside the bubble */
  text: string;
  /** Desired width of the bubble in pixels */
  width?: number;
  /** Optional height override in pixels; defaults to aspect ratio of bubble */
  height?: number;
  /** Flip bubble horizontally (for left-side placement) */
  flipped?: boolean;
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
  flipped,
  className,
}) => {
  // Maintain 3:2 aspect ratio if height not provided
  const h = height ?? Math.round((width * 2) / 3);
  const vw = 120;
  const vh = 80;

  // Word-wrap: max chars per line based on width (approximate)
  const maxCharsPerLine = Math.max(10, Math.floor(width / 10));
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
      viewBox={`-10 -10 ${vw + 20} ${vh + 20}`}
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={text}
    >
      <defs>
        <filter id="bubble-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>
      {/* main cloud shape + tail, scaled to height and flipped if needed */}
      <g transform={flipped ? `translate(${vw},0) scale(-1,1)` : undefined} filter="url(#bubble-shadow)">
        <path
          d="M20,50
            c-12,0 -20,-8 -20,-20 0,-8 4,-14 10,-17
            c2,-10 12,-18 24,-18 14,0 26,10 26,24
            c12,1 22,12 22,24 0,14 -12,26 -26,26 h-40 z"
          fill="#0070f3"
          stroke="#fff"
          strokeWidth="4"
        />
        {/* tail circles (spaced sticker style) */}
        <circle cx="28" cy="60" r="4" fill="#0070f3" stroke="#fff" strokeWidth="3" />
        <circle cx="46" cy="68" r="5" fill="#0070f3" stroke="#fff" strokeWidth="3" />
        <circle cx="64" cy="74" r="6" fill="#0070f3" stroke="#fff" strokeWidth="3" />
      </g>
      {/* text lines, centered inside cloud */}
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
