import React, { useCallback, useEffect, useRef, useState } from 'react';

interface ViewportFitStageProps {
  children: React.ReactNode;
}

/**
 * Full-bleed viewport-fit stage that uses 100% of the horizontal screen real estate
 * while scaling vertically if needed so the active section never overflows or clips.
 */
export const ViewportFitStage: React.FC<ViewportFitStageProps> = ({ children }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [canvasWidth, setCanvasWidth] = useState<number>(1440);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);

  const recomputeScale = useCallback(() => {
    const stageEl = stageRef.current;
    const canvasEl = canvasRef.current;
    if (!stageEl || !canvasEl) return;

    const availW = stageEl.clientWidth;
    const availH = stageEl.clientHeight;
    if (availW <= 0 || availH <= 0) return;

    // Measure natural height at the current full width
    const naturalH = canvasEl.offsetHeight || 1;
    const nextScale = Math.max(0.55, Math.min(1, (availH - 12) / naturalH));

    // Compensate width by 1/nextScale so after transform: scale(nextScale),
    // the rendered width always equals 100% of availW (zero side margins).
    const compensatedW = Math.floor(availW / nextScale);

    setScale(nextScale);
    setCanvasWidth(compensatedW);
    setScaledHeight(Math.ceil(naturalH * nextScale));
  }, []);

  useEffect(() => {
    recomputeScale();

    const stageEl = stageRef.current;
    const canvasEl = canvasRef.current;
    const observer = new ResizeObserver(() => {
      recomputeScale();
    });

    if (stageEl) observer.observe(stageEl);
    if (canvasEl) observer.observe(canvasEl);

    window.addEventListener('resize', recomputeScale);
    const t1 = window.setTimeout(recomputeScale, 50);
    const t2 = window.setTimeout(recomputeScale, 250);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', recomputeScale);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [recomputeScale]);

  return (
    <div
      ref={stageRef}
      className="flex-1 w-full overflow-hidden flex items-start justify-center relative"
    >
      <div
        style={{
          width: '100%',
          height: scaledHeight ? `${scaledHeight}px` : 'auto',
          position: 'relative',
        }}
        className="flex items-start justify-center"
      >
        <div
          ref={canvasRef}
          style={{
            width: `${canvasWidth}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
          className="shrink-0"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
