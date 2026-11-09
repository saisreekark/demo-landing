import React from 'react';
import { ModalId, PageRoute } from '../data/showcaseData';
import { useSequentialReveal } from '../hooks/useSequentialReveal';
import { PresentationControls } from './PresentationControls';

interface FuturePillarSectionProps {
  onOpenModal: (id: ModalId) => void;
  onNavigatePage: (page: PageRoute) => void;
}

const PRIORITIES_2027 = [
  {
    id: 1,
    title: 'Strategic Growth:',
    description:
      'Maintaining a sharp focus on cross-market applicability, scalability, and strong go-to-market (GTM) potential.',
    icon: 'trending_up',
    iconBgClass: 'bg-google-blue/10 text-google-blue',
    dotClass: 'bg-google-blue',
  },
  {
    id: 2,
    title: 'Cloud Support:',
    description:
      'Implementing end-to-end autonomous workflows to drive continuous efficiency and faster resolution times.',
    icon: 'support_agent',
    iconBgClass: 'bg-google-green/10 text-google-green',
    dotClass: 'bg-google-green',
  },
  {
    id: 3,
    title: 'Hub Services:',
    description:
      'Migrating and upgrading our existing AI solutions to next-generation environments, utilizing specialized capabilities to elevate content quality and coverage.',
    icon: 'hub',
    iconBgClass: 'bg-primary-container/50 text-primary',
    dotClass: 'bg-primary',
  },
  {
    id: 4,
    title: 'GTM Helpdesk:',
    description:
      'Accelerating case resolution and delivering immediate, tangible benefits through advanced agentic solutions.',
    icon: 'bolt',
    iconBgClass: 'bg-[#FEF7E0] text-[#B06000]',
    dotClass: 'bg-[#FBBC05]',
  },
  {
    id: 5,
    title: 'Partner programs:',
    description:
      'Scaling AaaS Marketplace solution adoption and accelerating Corporate growth by prioritizing key AI ISVs and strategic segment alliances.',
    icon: 'handshake',
    iconBgClass: 'bg-[#FCE8E6] text-[#D93025]',
    dotClass: 'bg-[#EA4335]',
  },
];

export const FuturePillarSection: React.FC<FuturePillarSectionProps> = ({
  onNavigatePage,
}) => {
  const totalSteps = 5;
  const { visibleStep, isComplete, replay, showAll, revealClass } = useSequentialReveal(
    totalSteps,
    1350
  );

  return (
    <section
      className="py-3 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full"
      id="pillar-future"
    >
      {/* Step 0: Section Header & Presentation Controls */}
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-4 pb-2.5 border-b border-outline-variant/30 ${revealClass(
          0
        )}`}
      >
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
            2027 Priority
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant font-medium max-w-3xl mt-0.5 leading-relaxed">
            2027 Priorities: Driving efficiency and amplifying customer experience
          </p>
        </div>
        <PresentationControls
          visibleStep={visibleStep}
          totalSteps={totalSteps}
          isComplete={isComplete}
          onReplay={replay}
          onShowAll={showAll}
          onNavigatePage={onNavigatePage}
          prevPillar={{ page: 'delivery', label: '03 Delivery Highlights' }}
        />
      </div>

      {/* 5 Components Arranged Horizontally One Below the Other */}
      <div className="flex flex-col gap-3">
        {PRIORITIES_2027.map((item, idx) => (
          <div
            key={item.id}
            className={`bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/40 shadow-sm hover:shadow-md transition-all flex items-center gap-4 google-animated-border ${revealClass(
              idx + 1
            )}`}
          >
            <div
              className={`w-10 h-10 rounded-xl ${item.iconBgClass} flex items-center justify-center shrink-0 font-display font-bold text-sm shadow-sm`}
            >
              {item.id}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-display text-base sm:text-lg font-bold text-on-surface">
                {item.title}
              </h4>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
