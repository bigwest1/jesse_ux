import React from 'react';

export interface ThoughtBubbleProps {
  /** Text content to display inside the bubble */
  text: string;
  /** Desired width of the bubble in pixels */
  width?: number;
  /** Optional height override in pixels; defaults to aspect ratio of bubble */
  height?: number;
  /** Placement relative to avatar: left, center, or right slot */
  orientation?: 'left' | 'center' | 'right';
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
  orientation = 'center',
  className,
}) => {
  const tailConfigs: Record<string, { offsetPct: number; bottom: number; size: number }[]> = {
    left: [
      { offsetPct: 80, bottom: -6, size: 8 },
      { offsetPct: 70, bottom: -20, size: 12 },
      { offsetPct: 60, bottom: -36, size: 16 },
    ],
    center: [
      { offsetPct: 50, bottom: -6, size: 8 },
      { offsetPct: 50, bottom: -20, size: 12 },
      { offsetPct: 50, bottom: -36, size: 16 },
    ],
    right: [
      { offsetPct: 20, bottom: -6, size: 8 },
      { offsetPct: 30, bottom: -20, size: 12 },
      { offsetPct: 40, bottom: -36, size: 16 },
    ],
  };
  const tails = tailConfigs[orientation] || tailConfigs.center;
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        maxWidth: width,
        background: '#0070f3',
        color: '#fff',
        border: '4px solid #fff',
        borderRadius: '32px 48px 32px 48px',
        padding: '16px 20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        lineHeight: 1.3,
      }}
    >
      {tails.map((tc, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${tc.offsetPct}%`,
            bottom: tc.bottom,
            width: tc.size,
            height: tc.size,
            background: '#0070f3',
            border: '4px solid #fff',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        />
      ))}
      {text}
    </div>
  );
};

export default ThoughtBubble;
