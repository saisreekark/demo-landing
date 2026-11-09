import React from 'react';
import { PageRoute } from '../data/showcaseData';

export type BackgroundThemeVariant = 'minimal' | 'antigravity' | 'waves' | 'constellation';

interface LandingBackgroundPatternProps {
  activePage: PageRoute;
  variant?: BackgroundThemeVariant;
}

export function resolveBackgroundVariant(): BackgroundThemeVariant {
  return 'minimal';
}

/**
 * Minimal, static Google-color ambient background (non-interactive, no animation).
 */
export const LandingBackgroundPattern: React.FC<LandingBackgroundPatternProps> = ({
  activePage,
}) => {
  if (activePage !== 'landing') {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      data-bg-variant="minimal-static"
    >
      {/* Subtle static ambient pastel washes & dot grids on flanks */}
      <div className="absolute inset-y-0 left-0 w-[32vw] bg-google-dot-grid-left opacity-45" />
      <div className="absolute inset-y-0 right-0 w-[32vw] bg-google-dot-grid-right opacity-45" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[460px] glow-radial-blue opacity-60" />
      <div className="absolute top-[10%] -left-28 w-[460px] h-[460px] rounded-full bg-orb-green opacity-55" />
      <div className="absolute bottom-[6%] -left-24 w-[440px] h-[440px] rounded-full bg-orb-yellow opacity-50" />
      <div className="absolute top-[10%] -right-28 w-[460px] h-[460px] rounded-full bg-orb-blue opacity-55" />
      <div className="absolute bottom-[6%] -right-24 w-[440px] h-[440px] rounded-full bg-orb-red opacity-50" />
    </div>
  );
};
