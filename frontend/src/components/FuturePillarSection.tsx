import React from 'react';
import { ModalId, PageRoute } from '../data/showcaseData';

interface FuturePillarSectionProps {
  onOpenModal: (id: ModalId) => void;
  onNavigatePage: (page: PageRoute) => void;
}

const PRIORITIES_2027 = [
  {
    id: 1,
    code: 'PRIORITY 01',
    title: 'Strategic Growth:',
    description:
      'Maintaining a sharp focus on cross-market applicability, scalability, and strong go-to-market (GTM) potential.',
    icon: 'trending_up',
    badgeClass: 'bg-[#E8F0FE] text-[#1A73E8]',
    borderClass: 'border-l-[#1A73E8]',
  },
  {
    id: 2,
    code: 'PRIORITY 02',
    title: 'Cloud Support:',
    description:
      'Implementing end-to-end autonomous workflows to drive continuous efficiency and faster resolution times.',
    icon: 'support_agent',
    badgeClass: 'bg-[#E6F4EA] text-[#188038]',
    borderClass: 'border-l-[#188038]',
  },
  {
    id: 3,
    code: 'PRIORITY 03',
    title: 'Hub Services:',
    description:
      'Migrating and upgrading our existing AI solutions to next-generation environments, utilizing specialized capabilities to elevate content quality and coverage.',
    icon: 'hub',
    badgeClass: 'bg-[#D3E3FD] text-[#0B57D0]',
    borderClass: 'border-l-[#0B57D0]',
  },
  {
    id: 4,
    code: 'PRIORITY 04',
    title: 'GTM Helpdesk:',
    description:
      'Accelerating case resolution and delivering immediate, tangible benefits through advanced agentic solutions.',
    icon: 'bolt',
    badgeClass: 'bg-[#FEF7E0] text-[#B06000]',
    borderClass: 'border-l-[#B06000]',
  },
  {
    id: 5,
    code: 'PRIORITY 05',
    title: 'Partner programs:',
    description:
      'Scaling AaaS Marketplace solution adoption and accelerating Corporate growth by prioritizing key AI ISVs and strategic segment alliances.',
    icon: 'handshake',
    badgeClass: 'bg-[#FCE8E6] text-[#D93025]',
    borderClass: 'border-l-[#D93025]',
  },
];

export const FuturePillarSection: React.FC<FuturePillarSectionProps> = ({
  onOpenModal,
  onNavigatePage,
}) => {
  return (
    <section
      className="w-full px-5 sm:px-8 lg:px-12 py-4"
      id="pillar-future"
    >
      {/* Editorial Section Masthead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3.5 mb-5 border-b-2 border-slate-900">
        <div>
          <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] uppercase tracking-widest">
            <span className="px-2 py-0.5 bg-[#E6F4EA] text-[#188038] font-bold rounded">
              SECTION 04
            </span>
            <span className="text-slate-400">//</span>
            <span className="text-slate-600 font-semibold">
              STRATEGIC OUTLOOK &amp; AUTONOMOUS WORKFLOWS
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold tracking-tight">
            2027 Priority
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-3xl mt-0.5 leading-relaxed">
            2027 Priorities: Driving efficiency and amplifying customer experience
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => onOpenModal('modal-autonomous')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#E6F4EA] hover:bg-[#188038] text-[#188038] hover:text-white border border-[#188038]/30 font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>2027 Autonomous POV</span>
            <span className="material-symbols-outlined text-[15px]">open_in_new</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('landing')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_back</span>
            <span>Back to Overview</span>
          </button>
        </div>
      </div>

      {/* 5 Strategic Priorities — Formal Numbered Newsletter Ledger */}
      <div className="bg-white border border-slate-200 rounded divide-y divide-slate-200 shadow-[0_1px_3px_rgba(15,23,42,0.03)]">
        {PRIORITIES_2027.map((item) => (
          <article
            key={item.id}
            className={`p-4 sm:p-5 border-l-4 ${item.borderClass} flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50/70 transition-colors`}
          >
            <div className="flex items-center gap-3.5 sm:w-64 shrink-0">
              <div
                className={`w-10 h-10 rounded ${item.badgeClass} flex items-center justify-center font-mono font-bold text-sm shrink-0`}
              >
                0{item.id}
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                  {item.code}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="flex-1 sm:border-l sm:border-slate-200 sm:pl-6">
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
