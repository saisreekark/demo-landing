import React from 'react';
import { PageRoute, ViewMode } from '../data/showcaseData';
import { useSequentialReveal } from '../hooks/useSequentialReveal';
import { PresentationControls } from './PresentationControls';

interface PartnershipPillarSectionProps {
  viewMode: ViewMode;
  onNavigatePage: (page: PageRoute) => void;
}

export const PartnershipPillarSection: React.FC<PartnershipPillarSectionProps> = ({
  onNavigatePage,
}) => {
  const totalSteps = 4;
  const { visibleStep, isComplete, replay, showAll, revealClass } = useSequentialReveal(
    totalSteps,
    1350
  );

  return (
    <section
      className="py-3 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full"
      id="pillar-partnership"
    >
      {/* Step 0: Section Header & Presentation Controls */}
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-4 pb-2.5 border-b border-outline-variant/30 ${revealClass(
          0
        )}`}
      >
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
            Partnership Highlights
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-0.5 leading-relaxed">
            Strengthening the Google Cloud and Cognizant alliance through enterprise talent
            engineering.
          </p>
        </div>
        <PresentationControls
          visibleStep={visibleStep}
          totalSteps={totalSteps}
          isComplete={isComplete}
          onReplay={replay}
          onShowAll={showAll}
          onNavigatePage={onNavigatePage}
          prevPillar={{ page: 'transformation', label: '01 Transformation' }}
          nextPillar={{ page: 'delivery', label: '03 Delivery Highlights' }}
        />
      </div>

      {/* Feature Card: Alliance Expansion & Proof Points */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Step 1: Left 7 cols — Strategic Alliance Expansion */}
        <div
          className={`lg:col-span-7 bg-white p-5 sm:p-6 rounded-3xl border border-outline-variant/50 shadow-sm flex flex-col justify-between relative google-animated-border ${revealClass(
            1
          )}`}
        >
          <div className="space-y-4">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface leading-snug">
              Cognizant and Google Cloud Expand Alliance to Accelerate Agentic Enterprise
              Transformation
            </h3>
            <ul className="space-y-3.5 font-body text-sm text-on-surface-variant leading-relaxed">
              <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-google-blue hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-google-blue/10 text-google-blue flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-google-blue group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">groups</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-google-blue font-bold uppercase tracking-wider">
                      Frontier Capability Group
                    </span>
                  </div>
                  <span className="italic font-medium text-on-surface text-xs sm:text-sm leading-relaxed">
                    Initiative establishes new Gemini Frontier Capability Group, dedicating more
                    than <strong className="text-google-blue font-bold">18,000 engineers</strong> to
                    help drive AI adoption for global enterprises.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-google-green hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-google-green/10 text-google-green flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-google-green group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-google-green font-bold uppercase tracking-wider">
                      Milestone Completed
                    </span>
                  </div>
                  <span className="italic font-medium text-on-surface text-xs sm:text-sm leading-relaxed">
                    More than{' '}
                    <strong className="text-google-green font-bold">55,000 associates</strong>{' '}
                    completed Build with Gemini, the largest Gemini partner workshop held to date.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right 5 cols */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
          {/* Step 2: Card 1 — Executive Endorsement */}
          <div
            className={`bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col justify-center relative google-animated-border ${revealClass(
              2
            )}`}
          >
            <div className="flex items-center gap-2 mb-1.5 text-[#D93025]">
              <span className="material-symbols-outlined text-[18px]">format_quote</span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-outline">
                Executive Endorsement
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed text-left font-medium pl-2 border-l-2 border-primary/40">
              “Establishing our dedicated Gemini Frontier Capability Group lets our best frontier
              engineering talent focus entirely on getting frontier AI into production for clients,”
              - <span className="font-semibold text-on-surface">Ravi Kumar S, CEO of Cognizant</span>
            </p>
          </div>

          {/* Step 3: Card 2 — Talent Accelerator with Progress Bar */}
          <div
            className={`bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col justify-center flex-1 google-animated-border ${revealClass(
              3
            )}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] font-bold text-google-blue uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">badge</span>
                TALENT ACCELERATOR
              </span>
              <span className="font-mono text-xs font-bold text-google-green bg-[#E6F4EA] px-2 py-0.5 rounded flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
                100K → 200K
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed text-left font-medium mb-2.5">
              Cognizant is deploying Gemini to 100,000 associates this year—scaling to
              200,000—while increasing platform certifications.
            </p>
            <div className="space-y-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-on-surface-variant">
                <span>100K Enrolled (50%)</span>
                <span className="font-bold text-google-green">Target: 200K Active</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-google-blue to-google-green rounded-full relative w-1/2 shadow-[0_0_8px_#34A853]">
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/90 animate-pulse rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Card 3 — Field Validation */}
          <div
            className={`bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col justify-center flex-1 google-animated-border ${revealClass(
              4
            )}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] font-bold text-google-green uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                FIELD VALIDATION
              </span>
              <span className="font-mono text-xs font-bold text-google-blue bg-[#E8F0FE] px-2 py-0.5 rounded">
                -35% Costs
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed text-left">
              <strong className="text-on-surface font-semibold">Early Proof point :</strong>{' '}
              Cognizant’s integration of Gemini AI across the software development lifecycle helped
              a retailer boost developer productivity by 40%, cut time-to-market by 30%, and save
              35% in costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
