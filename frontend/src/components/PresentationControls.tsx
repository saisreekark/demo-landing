import React from 'react';
import { PageRoute } from '../data/showcaseData';

interface PresentationControlsProps {
  visibleStep?: number;
  totalSteps?: number;
  isComplete?: boolean;
  onReplay?: () => void;
  onShowAll?: () => void;
  onNavigatePage: (page: PageRoute) => void;
  prevPillar?: { page: PageRoute; label: string };
  nextPillar?: { page: PageRoute; label: string };
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  onNavigatePage,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onNavigatePage('landing')}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-white text-on-surface border border-outline-variant/40 font-mono text-xs font-semibold shadow-sm transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
        <span>Back to Landing Page</span>
      </button>
    </div>
  );
};
