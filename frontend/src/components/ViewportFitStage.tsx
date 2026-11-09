import React, { useCallback, useEffect, useRef, useState } from 'react';

interface ViewportFitStageProps {
  children: React.ReactNode;
}

/**
 * Presentation-style auto-scaling stage that guarantees the entire page content
 * fits within the remaining viewport height and width without any scrolling,
 * and without clipping or breaking any inner component proportions.
 */
export const ViewportFitStage: React.FC<ViewportFitStageProps> = ({ children }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);

  const recomputeScale = useCallback(() => {
    const stageEl = stageRef.current;
    const canvasEl = canvasRef.current;
    if (!stageEl || !canvasEl) return;

    const availW = stageEl.clientWidth;
    const availH = stageEl.clientHeight;
    const naturalW = canvasEl.offsetWidth || 1280;
    const naturalH = canvasEl.offsetHeight || 1;

    if (availW <= 0 || availH <= 0 || naturalH <= 0) return;

    const scaleX = (availW - 32) / naturalW;
    const scaleY = (availH - 20) / naturalH;
    const nextScale = Math.max(0.45, Math.min(1, scaleX, scaleY));

    setScale(nextScale);
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
    const t1 = window.setTimeout(recomputeScale, 60);
    const t2 = window.setTimeout(recomputeScale, 300);

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
      className="flex-1 w-full overflow-hidden flex items-center justify-center relative px-2"
    >
      <div
        style={{
          width: `${Math.ceil(1280 * scale)}px`,
          height: scaledHeight ? `${scaledHeight}px` : 'auto',
          position: 'relative',
        }}
        className="flex items-start justify-center"
      >
        <div
          ref={canvasRef}
          style={{
            width: '1280px',
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
