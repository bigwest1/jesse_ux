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
const ThoughtBubble: React.FC<ThoughtBubbleProps> = ({ text, width = 200, className }) => {
  const tailCircles = [
    { offset: 16, bottom: -6, size: 8 },
    { offset: 36, bottom: -10, size: 10 },
    { offset: 58, bottom: -14, size: 12 },
  ];
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
        borderRadius: '16px',
        padding: '12px 16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
      }}
    >
      {tailCircles.map((tc, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...(flipped ? { right: tc.offset } : { left: tc.offset }),
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
