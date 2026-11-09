import React, { useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroConstellation } from './components/HeroConstellation';
import { DeliveryPillarSection } from './components/DeliveryPillarSection';
import { PartnershipPillarSection } from './components/PartnershipPillarSection';
import { TransformationPillarSection } from './components/TransformationPillarSection';
import { FuturePillarSection } from './components/FuturePillarSection';
import { ModalsContainer } from './components/ModalsContainer';
import { ViewportFitStage } from './components/ViewportFitStage';
import { FeedbackWidget } from './components/FeedbackWidget';
import { LandingBackgroundPattern } from './components/LandingBackgroundPattern';
import { MobileShowcaseView } from './components/mobile/MobileShowcaseView';
import { useDeviceType } from './hooks/useDeviceType';
import {
  ModalId,
  PAGE_PATHS,
  PageRoute,
  QuadrantKey,
  resolvePageFromPath,
  ViewMode,
} from './data/showcaseData';

const QUADRANT_SEQUENCE: QuadrantKey[] = [
  'hub',
  'transformation',
  'partnership',
  'delivery',
  'future',
];

const QUADRANT_TO_PAGE: Record<QuadrantKey, PageRoute> = {
  hub: 'landing',
  transformation: 'transformation',
  future: 'future',
  partnership: 'partnership',
  delivery: 'delivery',
};

const SECTION_ID_TO_PAGE: Record<string, PageRoute> = {
  overview: 'landing',
  'pillar-transformation': 'transformation',
  'pillar-future': 'future',
  'pillar-partnership': 'partnership',
  'pillar-delivery': 'delivery',
};

export function App() {
  const deviceType = useDeviceType();
  const [activePage, setActivePage] = useState<PageRoute>(() =>
    resolvePageFromPath(window.location.pathname)
  );
  const [viewMode] = useState<ViewMode>('newsletter');
  const [activeQuadrant, setActiveQuadrant] = useState<QuadrantKey>('transformation');
  const [activeModal, setActiveModal] = useState<ModalId>(null);

  const navigateToPage = useCallback((page: PageRoute) => {
    setActivePage(page);
    if (page !== 'landing') {
      setActiveQuadrant(page);
    }
    const targetPath = PAGE_PATHS[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const resolved = resolvePageFromPath(window.location.pathname);
      setActivePage(resolved);
      if (resolved !== 'landing') {
        setActiveQuadrant(resolved);
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const handleSelectQuadrant = (q: QuadrantKey) => {
    setActiveQuadrant(q);
    const targetPage = QUADRANT_TO_PAGE[q];
    if (q !== 'hub') {
      navigateToPage(targetPage);
    } else {
      navigateToPage('landing');
    }
  };

  const handleCycleQuadrant = (delta: number) => {
    const currentIdx = QUADRANT_SEQUENCE.indexOf(activeQuadrant);
    const nextIdx =
      (currentIdx + delta + QUADRANT_SEQUENCE.length) % QUADRANT_SEQUENCE.length;
    const nextQ = QUADRANT_SEQUENCE[nextIdx];
    setActiveQuadrant(nextQ);
  };

  const handleNavigatePillarFromModal = (sectionId: string) => {
    setActiveModal(null);
    const targetPage = SECTION_ID_TO_PAGE[sectionId] || 'landing';
    navigateToPage(targetPage);
  };

  if (deviceType === 'mobile') {
    return (
      <MobileShowcaseView
        activePage={activePage}
        activeQuadrant={activeQuadrant}
        activeModal={activeModal}
        onNavigatePage={navigateToPage}
        onSelectQuadrant={handleSelectQuadrant}
        onOpenModal={setActiveModal}
        onCloseModal={() => setActiveModal(null)}
        onNavigatePillarFromModal={handleNavigatePillarFromModal}
      />
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between relative bg-surface text-on-surface">
      {/* Subtle Google-Color Animated Background Pattern & Flanking Ribbons */}
      <LandingBackgroundPattern activePage={activePage} />

      {/* 1. Sticky Executive Header & Brand Lockup (Never overlaps page content) */}
      <Header activePage={activePage} onNavigatePage={navigateToPage} />

      {/* Main Content Stage — Auto-fitted to remaining viewport without scroll or clipping */}
      <main className="relative z-10 flex-1 overflow-hidden flex flex-col">
        <ViewportFitStage key={activePage}>
          {activePage === 'landing' && (
            <HeroConstellation
              viewMode={viewMode}
              activeQuadrant={activeQuadrant}
              onSelectQuadrant={handleSelectQuadrant}
              onCycleQuadrant={handleCycleQuadrant}
              onOpenModal={setActiveModal}
            />
          )}

          {activePage === 'transformation' && (
            <TransformationPillarSection
              key={`transformation-${viewMode}`}
              viewMode={viewMode}
              onOpenModal={setActiveModal}
              onNavigatePage={navigateToPage}
            />
          )}

          {activePage === 'future' && (
            <FuturePillarSection
              key={`future-${viewMode}`}
              onOpenModal={setActiveModal}
              onNavigatePage={navigateToPage}
            />
          )}

          {activePage === 'partnership' && (
            <PartnershipPillarSection
              key={`partnership-${viewMode}`}
              viewMode={viewMode}
              onNavigatePage={navigateToPage}
            />
          )}

          {activePage === 'delivery' && (
            <DeliveryPillarSection
              key={`delivery-${viewMode}`}
              viewMode={viewMode}
              onOpenModal={setActiveModal}
              onNavigatePage={navigateToPage}
            />
          )}
        </ViewportFitStage>
      </main>

      {/* Floating Collect Feedback Button & Popover Form (Bottom-Right Corner) */}
      <FeedbackWidget activePage={activePage} />

      {/* Modals (M3 Light) */}
      <ModalsContainer
        activeModal={activeModal}
        onCloseModal={() => setActiveModal(null)}
        onOpenModal={setActiveModal}
        onNavigatePillar={handleNavigatePillarFromModal}
      />
    </div>
  );
}

export default App;
