import React from 'react';
import { ModalId, PageRoute, ViewMode } from '../data/showcaseData';

interface TransformationPillarSectionProps {
  viewMode: ViewMode;
  onOpenModal: (id: ModalId) => void;
  onNavigatePage: (page: PageRoute) => void;
}

const SUB_AGENTS = [
  {
    name: 'Digital SME',
    role: 'Expert Agent',
    icon: 'psychology',
    accent: 'text-[#1A73E8] border-t-[#1A73E8]',
  },
  {
    name: 'CORE',
    role: 'Simulator',
    icon: 'terminal',
    accent: 'text-[#188038] border-t-[#188038]',
  },
  {
    name: 'Crado',
    role: 'Workflow',
    icon: 'account_tree',
    accent: 'text-[#B06000] border-t-[#B06000]',
  },
  {
    name: 'Mayfly',
    role: 'Diagnosis',
    icon: 'rocket_launch',
    accent: 'text-[#D93025] border-t-[#D93025]',
  },
  {
    name: 'Elevate 360',
    role: 'Performance',
    icon: 'insights',
    accent: 'text-[#0B57D0] border-t-[#0B57D0]',
  },
];

export const TransformationPillarSection: React.FC<TransformationPillarSectionProps> = ({
  onOpenModal,
  onNavigatePage,
}) => {
  return (
    <section
      className="w-full px-5 sm:px-8 lg:px-12 py-4"
      id="pillar-transformation"
    >
      {/* Editorial Section Masthead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3.5 mb-5 border-b-2 border-slate-900">
        <div>
          <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] uppercase tracking-widest">
            <span className="px-2 py-0.5 bg-[#E8F0FE] text-[#1A73E8] font-bold rounded">
              SECTION 01
            </span>
            <span className="text-slate-400">//</span>
            <span className="text-slate-600 font-semibold">
              ARCHITECTURE MODERNIZATION &amp; GOVERNANCE
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold tracking-tight">
            Transformation Highlights
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5 leading-relaxed">
            Establishing a structured transformation engine to accelerate AI-led modern
            architectures.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigatePage('landing')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_back</span>
            <span>Back to Overview</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('partnership')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#0F2942] hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>02. Partnership</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* 2-Column Newspaper Grid: 8 Cols Main Articles + 4 Cols Financial & Impact Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left / Main Editorial Column (8 cols) */}
        <div className="lg:col-span-8 lg:border-r lg:border-slate-300 lg:pr-8 flex flex-col justify-between gap-4">
          {/* Article 1: GOVERNANCE & CTO LEADERSHIP */}
          <article className="bg-white border border-slate-200 border-l-4 border-l-[#1A73E8] rounded-r p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-100">
              <div>
                <span className="font-mono text-[10px] text-[#1A73E8] font-bold uppercase tracking-widest block">
                  GOVERNANCE &amp; CTO LEADERSHIP
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-slate-900 font-bold mt-0.5">
                  Strengthening transformation governance
                </h3>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#E8F0FE] hover:bg-[#1A73E8] text-[#1A73E8] hover:text-white font-mono text-[11px] font-semibold border border-[#1A73E8]/30 transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
                onClick={() => onOpenModal('modal-prioritization-framework')}
              >
                <span>Priortization Framework</span>
                <span className="material-symbols-outlined text-[14px]">launch</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans">
              <div className="p-3 rounded bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#1A73E8] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">Leadership:</strong> Reinforced
                  under Lakshmi Kumar Narayan (CTO Org)
                </span>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#188038] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">Framework:</strong> 5-Vector
                  Prioritization Framework for AI Solutions
                </span>
              </div>
            </div>
          </article>

          {/* Article 2: TRANSFORMATION TENET · CLOUD SCALE */}
          <article className="bg-white border border-slate-200 border-l-4 border-l-[#0B57D0] rounded-r p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="pb-2.5 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-[#0B57D0] font-mono text-[10px] font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-[15px]">layers</span>
                <span>TRANSFORMATION TENET · CLOUD SCALE</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-slate-900 font-bold mt-0.5 leading-snug">
                Piloted scaling of AI solutions across different Cloud programs
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans">
              <div className="p-3 rounded bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#1A73E8] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">CORE:</strong> ISV, GCP tech, GWS
                  Tech, Billing
                </span>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#188038] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">Accelerate:</strong> ISV MP, GCP
                  tech, GWS TEch, Billing
                </span>
              </div>
            </div>
          </article>

          {/* Article 3: E2E ARCHITECTURE & DIGITAL LEAD ORCHESTRATOR */}
          <article className="bg-white border border-slate-200 border-l-4 border-l-[#188038] rounded-r p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#188038]">
                  <span className="material-symbols-outlined text-[15px]">hub</span>
                  <span>
                    Transitioning to E2E architecture anchored in Digital lead as unified
                    orchestrator
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-slate-900 font-bold mt-0.5 leading-snug">
                  Seamlessly connect all points solutions through Digital lead
                </h3>
              </div>

              <button
                type="button"
                onClick={() => onOpenModal('modal-digital-lead')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#E8F0FE] hover:bg-[#1A73E8] text-[#1A73E8] hover:text-white font-mono text-[11px] font-semibold border border-[#1A73E8]/30 transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <span>Digital Lead</span>
                <span className="material-symbols-outlined text-[14px]">launch</span>
              </button>
            </div>

            {/* Connected Sub-Agents 5-Column Editorial Ledger */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center">
              {SUB_AGENTS.map((agent) => (
                <div
                  key={agent.name}
                  onClick={() => onOpenModal('modal-digital-lead')}
                  className={`p-3 rounded bg-slate-50 hover:bg-white border border-slate-200 border-t-2 ${agent.accent} flex flex-col items-center cursor-pointer hover:shadow-sm transition-all`}
                >
                  <span
                    className={`material-symbols-outlined text-[18px] mb-1 ${
                      agent.accent.split(' ')[0]
                    }`}
                  >
                    {agent.icon}
                  </span>
                  <div className="font-display font-bold text-xs text-slate-900">{agent.name}</div>
                  <div className="font-mono text-[10px] text-slate-500 mt-0.5">{agent.role}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Right Sidebar Column (4 cols): Verified Portfolio Outcomes */}
        <aside className="lg:col-span-4 flex flex-col justify-between gap-4">
          {/* Metric 1: $10M+ */}
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#1A73E8] p-5 rounded-b shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-center">
            <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-2.5">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A73E8]">$10M+</div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#188038] bg-[#E6F4EA] px-2.5 py-0.5 rounded">
                Verified ROI
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900">EPP ROI Delivered</h4>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Delivered across 15+ AI solutions deployed within Google Cloud ecosystem.
            </p>
          </div>

          {/* Metric 2: $10B+ */}
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#188038] p-5 rounded-b shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-center">
            <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-2.5">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A73E8]">$10B+</div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-0.5 rounded">
                Commercial Scale
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900">TCV Supported</h4>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Supported through RFP Accelerator &amp; PitchGen Enterprise Applications.
            </p>
          </div>

          {/* Metric 3: 40% */}
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#0F2942] p-5 rounded-b shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-center">
            <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-2.5">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A73E8]">40%</div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                AI SDLC Target
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900">
              Engineering Spend Reduction Targeted
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Co-creating solutions for engineering excellence through Google stack AI SDLC &amp;
              Dev Intelligence models.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};
