import { useCallback } from 'react';

export interface SequentialRevealState {
  visibleStep: number;
  totalSteps: number;
  isComplete: boolean;
  replay: () => void;
  showAll: () => void;
  revealClass: (stepIndex: number) => string;
}

/**
 * Direct-render hook (all components render immediately with zero fade-in delay).
 */
export function useSequentialReveal(
  totalSteps: number,
  _stepGapMs: number = 0
): SequentialRevealState {
  const replay = useCallback(() => {}, []);
  const showAll = useCallback(() => {}, []);
  const revealClass = useCallback((_stepIndex: number) => '', []);

  return {
    visibleStep: totalSteps,
    totalSteps,
    isComplete: true,
    replay,
    showAll,
    revealClass,
  };
}
