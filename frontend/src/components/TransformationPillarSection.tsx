import React from 'react';
import { ModalId, PageRoute, ViewMode } from '../data/showcaseData';
import { useSequentialReveal } from '../hooks/useSequentialReveal';
import { PresentationControls } from './PresentationControls';

interface TransformationPillarSectionProps {
  viewMode: ViewMode;
  onOpenModal: (id: ModalId) => void;
  onNavigatePage: (page: PageRoute) => void;
}

export const TransformationPillarSection: React.FC<TransformationPillarSectionProps> = ({
  onOpenModal,
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
      id="pillar-transformation"
    >
      {/* Step 0: Section Header Bar with Presentation Controls */}
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-3.5 pb-2.5 border-b border-outline-variant/30 ${revealClass(
          0
        )}`}
      >
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
            Transformation Highlights
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-0.5 leading-relaxed">
            Establishing a structured transformation engine to accelerate AI-led modern
            architectures.
          </p>
        </div>
        <PresentationControls
          visibleStep={visibleStep}
          totalSteps={totalSteps}
          isComplete={isComplete}
          onReplay={replay}
          onShowAll={showAll}
          onNavigatePage={onNavigatePage}
          nextPillar={{ page: 'partnership', label: '02 Partnership' }}
        />
      </div>

      {/* 2-Column Main Showcase Grid Matching Stitch v3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left / Main Wide Column (~70% / 8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-3">
          {/* Step 1: Top Card — GOVERNANCE & CTO LEADERSHIP */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm google-animated-border ${revealClass(
              1
            )}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="font-mono text-[10px] text-google-blue font-bold uppercase tracking-wider block">
                  GOVERNANCE &amp; CTO LEADERSHIP
                </span>
                <h4 className="font-display text-base sm:text-lg text-on-surface font-bold">
                  Strengthening transformation governance
                </h4>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8F0FE] hover:bg-primary-container/60 text-google-blue font-mono text-[11px] font-semibold border border-primary/20 transition-colors shrink-0"
                onClick={() => onOpenModal('modal-prioritization-framework')}
              >
                <span>Priortization Framework</span>
                <span className="material-symbols-outlined text-[13px]">launch</span>
              </button>
            </div>

            {/* Info Pills Stacked One Below Another */}
            <div className="flex flex-col items-start gap-2 text-xs font-body">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 text-on-surface">
                <span className="w-2 h-2 rounded-full bg-google-blue shrink-0"></span>
                <span>
                  <strong className="font-semibold">Leadership:</strong> Reinforced under Lakshmi
                  Kumar Narayan (CTO Org)
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 text-on-surface">
                <span className="w-2 h-2 rounded-full bg-google-green shrink-0"></span>
                <span>
                  <strong className="font-semibold">Framework:</strong> 5-Vector Prioritization
                  Framework for AI Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Step 3: Row 2 Left — TRANSFORMATION TENET · CLOUD SCALE */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm google-animated-border ${revealClass(
              3
            )}`}
          >
            <div className="flex items-center gap-1.5 text-google-blue font-mono text-[11px] font-semibold uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[16px]">layers</span>
              <span>TRANSFORMATION TENET · CLOUD SCALE</span>
            </div>
            <h3 className="font-display text-base sm:text-lg text-on-surface font-bold tracking-tight leading-snug mb-3">
              Piloted scaling of AI solutions across different Cloud programs
            </h3>

            {/* 2 Lines Below One Another in Similar Format to Leadership & Framework */}
            <div className="flex flex-col items-start gap-2 text-xs font-body">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 text-on-surface">
                <span className="w-2 h-2 rounded-full bg-google-blue shrink-0"></span>
                <span>
                  <strong className="font-semibold">CORE:</strong> ISV, GCP tech, GWS Tech, Billing
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 text-on-surface">
                <span className="w-2 h-2 rounded-full bg-google-green shrink-0"></span>
                <span>
                  <strong className="font-semibold">Accelerate:</strong> ISV MP, GCP tech, GWS TEch,
                  Billing
                </span>
              </div>
            </div>
          </div>

          {/* Step 5: Row 3 Left — Transitioning to E2E architecture anchored in Digital lead as unified orchestrator */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm google-animated-border ${revealClass(
              5
            )}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-outline-variant/30 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-google-blue text-[16px]">hub</span>
                <span className="font-display text-xs sm:text-sm text-google-blue font-bold tracking-tight">
                  Transitioning to E2E architecture anchored in Digital lead as unified orchestrator
                </span>
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('modal-digital-lead')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8F0FE] hover:bg-primary-container/60 text-google-blue font-mono text-[11px] font-semibold border border-primary/20 transition-colors shrink-0 cursor-pointer"
              >
                <span>Digital Lead</span>
                <span className="material-symbols-outlined text-[13px]">launch</span>
              </button>
            </div>

            <h3 className="font-display text-base sm:text-lg text-on-surface font-bold tracking-tight leading-snug mb-3">
              Seamlessly connect all points solutions through Digital lead
            </h3>

            {/* Sub-agents 5-card horizontal row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center font-mono">
              <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-google-blue hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center group cursor-pointer relative overflow-hidden">
                <div className="absolute top-1.5 right-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse"></span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-google-blue/10 text-google-blue flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-google-blue group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[16px]">psychology</span>
                </div>
                <div className="font-display font-bold text-xs text-on-surface group-hover:text-google-blue transition-colors">
                  Digital SME
                </div>
                <div className="text-[10px] text-on-surface-variant font-body">Expert Agent</div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-google-green hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center group cursor-pointer relative overflow-hidden">
                <div className="absolute top-1.5 right-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-green animate-pulse"></span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-google-green/10 text-google-green flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-google-green group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                </div>
                <div className="font-display font-bold text-xs text-on-surface group-hover:text-google-green transition-colors">
                  CORE
                </div>
                <div className="text-[10px] text-on-surface-variant font-body">Simulator</div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-tertiary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center group cursor-pointer relative overflow-hidden">
                <div className="absolute top-1.5 right-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05] animate-pulse"></span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#FEF7E0] text-[#B06000] flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-[#B06000] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[16px]">account_tree</span>
                </div>
                <div className="font-display font-bold text-xs text-on-surface group-hover:text-tertiary transition-colors">
                  Crado
                </div>
                <div className="text-[10px] text-on-surface-variant font-body">Workflow</div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-[#EA4335] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center group cursor-pointer relative overflow-hidden">
                <div className="absolute top-1.5 right-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335] animate-pulse"></span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#FCE8E6] text-[#D93025] flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-[#EA4335] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                </div>
                <div className="font-display font-bold text-xs text-on-surface group-hover:text-[#D93025] transition-colors">
                  Mayfly
                </div>
                <div className="text-[10px] text-on-surface-variant font-body">Diagnosis</div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 col-span-2 sm:col-span-1 flex flex-col items-center group cursor-pointer relative overflow-hidden">
                <div className="absolute top-1.5 right-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-primary-container/40 text-primary flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[16px]">insights</span>
                </div>
                <div className="font-display font-bold text-xs text-on-surface group-hover:text-primary transition-colors">
                  Elevate 360
                </div>
                <div className="text-[10px] text-on-surface-variant font-body">Performance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Column (~30% / 4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3">
          {/* Step 2: Metric Card 1 — $10M+ */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm hover:shadow-md hover:border-google-blue transition-all duration-300 group flex-1 flex flex-col justify-center google-animated-border ${revealClass(
              2
            )}`}
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-google-blue">
                    $10M+
                  </div>
                  <span className="w-2 h-2 rounded-full bg-google-blue animate-pulse"></span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E6F4EA] flex items-center justify-center">
                  <span className="material-symbols-outlined text-google-green text-[18px]">
                    attach_money
                  </span>
                </div>
              </div>
              <h5 className="font-display text-sm font-bold text-on-surface mt-1.5">
                EPP ROI Delivered
              </h5>
              <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                Delivered across 15+ AI solutions deployed within Google Cloud ecosystem.
              </p>
            </div>
          </div>

          {/* Step 4: Row 2 Right — Metric Card 2 ($10B+) */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm hover:shadow-md hover:border-google-green transition-all duration-300 group flex-1 flex flex-col justify-center google-animated-border ${revealClass(
              4
            )}`}
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-google-blue">
                    $10B+
                  </div>
                  <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E6F4EA] flex items-center justify-center">
                  <span className="material-symbols-outlined text-google-green text-[18px]">
                    trending_up
                  </span>
                </div>
              </div>
              <h5 className="font-display text-sm font-bold text-on-surface mt-1.5">
                TCV Supported
              </h5>
              <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                Supported through RFP Accelerator &amp; PitchGen Enterprise Applications.
              </p>
            </div>
          </div>

          {/* Step 6: Row 3 Right — Metric Card 3 (40%) */}
          <div
            className={`bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 group flex-1 flex flex-col justify-center google-animated-border ${revealClass(
              6
            )}`}
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-google-blue">
                    40%
                  </div>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center">
                  <span className="material-symbols-outlined text-google-blue text-[18px]">
                    schedule
                  </span>
                </div>
              </div>
              <h5 className="font-display text-sm font-bold text-on-surface mt-1.5">
                Engineering Spend Reduction Targeted
              </h5>
              <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                Co-creating solutions for engineering excellence through Google stack AI SDLC &amp;
                Dev Intelligence models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
