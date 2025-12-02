import { ReactNode } from 'react';

interface DoorFrameProps {
  children: ReactNode;
  width: number;
  height: number;
}

/**
 * DoorFrame component - renders the exact structure from Figma
 * Based on door 14 CSS structure:
 * - Outer border (main frame)
 * - Inner border (window pane)
 * - Bottom decorative band (thick)
 * - Bottom trim (thin)
 */
export default function DoorFrame({ children, width, height }: DoorFrameProps) {
  // Calculate proportions based on door 14 (328x172)
  const baseWidth = 328;
  const baseHeight = 172;
  const scale = width / baseWidth;

  return (
    <div
      className="relative"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Outer Frame - Vector 1 (main door border) */}
      <div
        className="absolute"
        style={{
          width: `${315 * scale}px`,
          height: `${139 * scale}px`,
          left: `${6.5 * scale}px`,
          top: `${3 * scale}px`,
          backgroundColor: '#F9FFF1',
          border: '3px solid #458352',
        }}
      />

      {/* Inner Frame - Vector 2 (window pane border) */}
      <div
        className="absolute"
        style={{
          width: `${295 * scale}px`,
          height: `${119 * scale}px`,
          left: `${16.5 * scale}px`,
          top: `${13 * scale}px`,
          border: '3px solid #458352',
        }}
      />

      {/* Bottom Decorative Band - Vector 3 */}
      <div
        className="absolute"
        style={{
          width: `${315 * scale}px`,
          height: `${19 * scale}px`,
          left: `${6.5 * scale}px`,
          top: `${142 * scale}px`,
          backgroundColor: '#F9FFF1',
          border: '3px solid #458352',
        }}
      />

      {/* Bottom Trim - Vector 4 */}
      <div
        className="absolute"
        style={{
          width: `${323 * scale}px`,
          height: `${8 * scale}px`,
          left: `${2.5 * scale}px`,
          top: `${161 * scale}px`,
          backgroundColor: '#F9FFF1',
          border: '3px solid #458352',
        }}
      />

      {/* Content (number or illustration) */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: `${16.5 * scale}px`,
          top: `${13 * scale}px`,
          width: `${295 * scale}px`,
          height: `${119 * scale}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
