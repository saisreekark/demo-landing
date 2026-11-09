import React from 'react';
import { ModalId, PageRoute, ViewMode } from '../data/showcaseData';
import { useSequentialReveal } from '../hooks/useSequentialReveal';
import { PresentationControls } from './PresentationControls';

interface DeliveryPillarSectionProps {
  viewMode: ViewMode;
  onOpenModal: (id: ModalId) => void;
  onNavigatePage: (page: PageRoute) => void;
}

export const DeliveryPillarSection: React.FC<DeliveryPillarSectionProps> = ({
  onNavigatePage,
}) => {
  const totalSteps = 6;
  const { visibleStep, isComplete, replay, showAll, revealClass } = useSequentialReveal(
    totalSteps,
    1350
  );

  return (
    <section
      className="py-3 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full"
      id="pillar-delivery"
    >
      {/* Step 0: Section Header & Presentation Controls */}
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-3.5 pb-2.5 border-b border-outline-variant/30 ${revealClass(
          0
        )}`}
      >
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
            Delivery Highlights
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-0.5 leading-relaxed">
            Driving measurable business outcomes through delivery excellence
          </p>
        </div>
        <PresentationControls
          visibleStep={visibleStep}
          totalSteps={totalSteps}
          isComplete={isComplete}
          onReplay={replay}
          onShowAll={showAll}
          onNavigatePage={onNavigatePage}
          prevPillar={{ page: 'partnership', label: '02 Partnership' }}
          nextPillar={{ page: 'future', label: '04 2027 Priority' }}
        />
      </div>

      {/* Main 12-Column Grid: Left 8 Cols (3 Stacked Horizontal Cards) + Right 4 Cols (3 Stacked Callout Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left / Main Column (8 cols): Support, Hub Services & CDE COE, Partner Programs Stacked Horizontally */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-3">
          {/* 1. Support Card */}
          <div
            id="delivery-card-1"
            className={`bg-white rounded-2xl border border-outline-variant/40 shadow-sm hover:shadow-md transition-all p-4 google-animated-border ${revealClass(
              1
            )}`}
          >
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-outline-variant/30 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-google-blue/10 flex items-center justify-center text-google-blue shrink-0">
                  <span className="material-symbols-outlined text-[17px]">support_agent</span>
                </div>
                <h4 className="font-display text-base font-bold text-on-surface">Support:</h4>
              </div>
            </div>

            <ul className="space-y-2 font-body text-xs sm:text-sm text-on-surface leading-relaxed">
              <li className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-google-blue shrink-0 mt-1.5"></span>
                <span>
                  <strong className="font-semibold text-on-surface">GCP Tech Support:</strong>{' '}
                  Driven by AI integration and operational rigor, SLS reached{' '}
                  <strong className="font-bold text-on-surface">97.1 for Apigee</strong> and
                  increased to{' '}
                  <strong className="font-bold text-on-surface">85.0 for CCaaS</strong> (previously
                  76.9) as of October 2026.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-google-green shrink-0 mt-1.5"></span>
                <span>
                  <strong className="font-semibold text-on-surface">GCP Billing Support:</strong>{' '}
                  AI-driven solution boosted productivity by{' '}
                  <strong className="font-bold text-on-surface">16.7%</strong> and reduced CPC by{' '}
                  <strong className="font-bold text-google-green">14%</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-1.5"></span>
                <span>
                  <strong className="font-semibold text-on-surface">
                    GWS Tech &amp; Billing Support:
                  </strong>{' '}
                  Enhanced AI integration drove a{' '}
                  <strong className="font-bold text-on-surface">16.3%</strong> gain in productivity
                  alongside a <strong className="font-bold text-secondary">6.6%</strong> reduction
                  in CPC.
                </span>
              </li>
            </ul>
          </div>

          {/* 2. Hub Services & CDE COE Card */}
          <div
            id="delivery-card-2"
            className={`bg-white rounded-2xl border border-outline-variant/40 shadow-sm hover:shadow-md transition-all p-4 google-animated-border ${revealClass(
              3
            )}`}
          >
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-outline-variant/30 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-google-green/10 flex items-center justify-center text-google-green shrink-0">
                  <span className="material-symbols-outlined text-[17px]">hub</span>
                </div>
                <h4 className="font-display text-base font-bold text-on-surface">
                  Hub Services &amp; CDE COE
                </h4>
              </div>
            </div>

            <ul className="space-y-2 font-body text-xs sm:text-sm text-on-surface leading-relaxed">
              <li className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-google-blue shrink-0 mt-1.5"></span>
                <span>
                  <strong className="font-semibold text-on-surface">Hub Services :</strong>{' '}
                  Delivered <strong className="font-bold text-google-blue">$2M OpEx savings</strong>
                  , supported <strong className="font-bold text-on-surface">$26B+ win TCV</strong>,
                  and achieved <strong className="font-bold text-google-green">99.3% C-SAT</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-google-green shrink-0 mt-1.5"></span>
                <span>
                  <strong className="font-semibold text-on-surface">CDE COE :</strong> Achieved{' '}
                  <strong className="font-bold text-google-green">$1.8M in 2026 savings</strong>{' '}
                  (exceeding the $1.67M target), cutting YoY run-rate by 26.26%.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Partner Programs Card */}
          <div
            id="delivery-card-3"
            className={`bg-white rounded-2xl border border-outline-variant/40 shadow-sm hover:shadow-md transition-all p-4 google-animated-border ${revealClass(
              5
            )}`}
          >
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-outline-variant/30 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-[#FEF7E0] flex items-center justify-center text-[#B06000] shrink-0">
                  <span className="material-symbols-outlined text-[17px]">storefront</span>
                </div>
                <h4 className="font-display text-base font-bold text-on-surface">
                  Partner Programs:
                </h4>
              </div>
            </div>

            <ul className="space-y-2 font-body text-xs sm:text-sm text-on-surface leading-relaxed">
              <li className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-[#B06000] shrink-0 mt-1.5"></span>
                <span>
                  <strong className="font-semibold text-on-surface">
                    ISV Scaled Partner Advisory:
                  </strong>{' '}
                  YTD S1+ pipeline grew by{' '}
                  <strong className="font-bold text-on-surface">over 20%</strong>, though S4 stands
                  at <strong className="font-bold text-on-surface">-2%</strong>; focus is on
                  reviewing 681 contracts expiring soon to secure renewals.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-google-green shrink-0 mt-1.5"></span>
                <span>
                  <strong className="font-semibold text-on-surface">
                    Sell &amp; Service Partner Advisory:
                  </strong>{' '}
                  Outperforming expectations, S4 has surpassed target levels by{' '}
                  <strong className="font-bold text-google-green">more than 5%</strong>, while the
                  S1+ pipeline remains{' '}
                  <strong className="font-bold text-on-surface">over 16% ahead</strong> of YTD
                  benchmarks..
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Column (4 cols): 3 Distinct Executive Callout Cards */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3">
          {/* Callout 1 (Top Right): AI-driven productivity billing savings */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm hover:shadow-md transition-all flex-1 flex flex-col justify-center google-animated-border ${revealClass(
              2
            )}`}
          >
            <div className="flex items-center gap-2.5 pb-2 mb-2.5 border-b border-outline-variant/30">
              <span className="w-7 h-7 rounded-xl bg-google-green/10 flex items-center justify-center text-google-green shrink-0">
                <span className="material-symbols-outlined text-[17px]">price_check</span>
              </span>
              <h4 className="font-display text-base font-bold text-on-surface">
                Value Delivered
              </h4>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
              AI-driven productivity allowed passing on billing savings: 14% for GCP Billing and ~7%
              for Workspace Tech.
            </p>
          </div>

          {/* Callout 2 (Middle Right): 18+ Custom AI UI/UX and Video Demos */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm hover:shadow-md transition-shadow flex-1 flex flex-col justify-center google-animated-border ${revealClass(
              4
            )}`}
          >
            <div className="flex items-center gap-2.5 pb-2 mb-2.5 border-b border-outline-variant/30">
              <span className="w-7 h-7 rounded-xl bg-google-blue/10 flex items-center justify-center text-google-blue shrink-0">
                <span className="material-symbols-outlined text-[17px]">play_circle</span>
              </span>
              <h4 className="font-display text-base font-bold text-on-surface">
                Executive Keynote
              </h4>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
              Created{' '}
              <strong className="font-bold text-on-surface">
                18+ custom AI UI/UX and video demos
              </strong>{' '}
              in support of Thomas Kurian’s Mumbai Leaders Connect
            </p>
          </div>

          {/* Callout 3 (Bottom Right on Slide 4): Partner Advisory */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm hover:shadow-md transition-shadow flex-1 flex flex-col justify-center google-animated-border ${revealClass(
              6
            )}`}
          >
            <div className="flex items-center gap-2.5 pb-2 mb-2.5 border-b border-outline-variant/30">
              <span className="w-7 h-7 rounded-xl bg-[#FEF7E0] flex items-center justify-center text-[#B06000] shrink-0">
                <span className="material-symbols-outlined text-[17px]">pie_chart</span>
              </span>
              <h4 className="font-display text-base font-bold text-on-surface">
                Partner Advisory
              </h4>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
              <strong className="text-on-surface font-bold">Partner Advisory:</strong> ISV S1+
              pipeline is up <strong className="text-on-surface font-bold">20%+ YTD</strong> (S4 at
              -2%), while Sell &amp; Service S1+ is{' '}
              <strong className="text-on-surface font-bold">16%+ above YTD</strong> and S4 beats
              expectations by <strong className="text-on-surface font-bold">5%+</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
