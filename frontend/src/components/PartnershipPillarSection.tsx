import React from 'react';
import { PageRoute, ViewMode } from '../data/showcaseData';

interface PartnershipPillarSectionProps {
  viewMode: ViewMode;
  onNavigatePage: (page: PageRoute) => void;
}

export const PartnershipPillarSection: React.FC<PartnershipPillarSectionProps> = ({
  onNavigatePage,
}) => {
  return (
    <section
      className="w-full px-5 sm:px-8 lg:px-12 py-4"
      id="pillar-partnership"
    >
      {/* Editorial Section Masthead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3.5 mb-5 border-b-2 border-slate-900">
        <div>
          <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] uppercase tracking-widest">
            <span className="px-2 py-0.5 bg-[#FCE8E6] text-[#D93025] font-bold rounded">
              SECTION 02
            </span>
            <span className="text-slate-400">//</span>
            <span className="text-slate-600 font-semibold">
              GLOBAL SCALE ALLIANCE &amp; TALENT ENABLEMENT
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold tracking-tight">
            Partnership Highlights
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5 leading-relaxed">
            Strengthening the Google Cloud and Cognizant alliance through enterprise talent
            engineering.
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
            onClick={() => onNavigatePage('delivery')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#0F2942] hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>03. Delivery</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* 2-Column Editorial Feature Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left 7 Cols: Lead Feature Article & Executive Pull Quote */}
        <div className="lg:col-span-7 lg:border-r lg:border-slate-300 lg:pr-8 flex flex-col justify-between gap-5">
          <article className="bg-white border border-slate-200 border-t-4 border-t-[#0F2942] rounded-b p-6 shadow-[0_1px_3px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8] font-mono text-[10px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">handshake</span>
                  <span>STRATEGIC ALLIANCE EXPANSION</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#E6F4EA] text-[#188038] font-mono text-[10px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span>JOINT CAPABILITY RELEASE</span>
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
                Cognizant and Google Cloud Expand Alliance to Accelerate Agentic Enterprise
                Transformation
              </h3>
            </div>

            <div className="mt-5 space-y-4">
              {/* Highlight 1 */}
              <div className="p-4 rounded bg-slate-50 border border-slate-200 border-l-4 border-l-[#1A73E8] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] text-[#1A73E8] font-bold uppercase tracking-widest mb-1">
                    Frontier Capability Group
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                    Initiative establishes new Gemini Frontier Capability Group, dedicating more
                    than <strong className="text-[#1A73E8] font-bold">18,000 engineers</strong> to
                    help drive AI adoption for global enterprises.
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="p-4 rounded bg-slate-50 border border-slate-200 border-l-4 border-l-[#188038] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-[#E6F4EA] text-[#188038] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] text-[#188038] font-bold uppercase tracking-widest mb-1">
                    Milestone Completed
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                    More than{' '}
                    <strong className="text-[#188038] font-bold">55,000 associates</strong>{' '}
                    completed Build with Gemini, the largest Gemini partner workshop held to date.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Editorial Pull-Quote Block */}
          <blockquote className="p-5 sm:p-6 bg-white border border-slate-200 border-l-4 border-l-[#D93025] rounded-r shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-2 mb-1.5 text-[#D93025]">
              <span className="material-symbols-outlined text-[20px]">format_quote</span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Executive Endorsement
              </span>
            </div>
            <p className="font-serif italic text-base sm:text-lg text-slate-900 leading-relaxed">
              “Establishing our dedicated Gemini Frontier Capability Group lets our best frontier
              engineering talent focus entirely on getting frontier AI into production for clients,”
            </p>
            <footer className="mt-2 font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
              — Ravi Kumar S, CEO of Cognizant
            </footer>
          </blockquote>
        </div>

        {/* Right 5 Cols: Talent Accelerator & Field Validation Dispatches */}
        <aside className="lg:col-span-5 flex flex-col justify-between gap-5">
          {/* Card 1: Talent Accelerator */}
          <div className="bg-white p-6 rounded border border-slate-200 border-t-4 border-t-[#1A73E8] shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                <span className="font-mono text-[10px] font-bold text-[#1A73E8] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">badge</span>
                  <span>TALENT ACCELERATOR</span>
                </span>
                <span className="font-mono text-xs font-bold text-[#188038] bg-[#E6F4EA] px-2.5 py-0.5 rounded">
                  100K → 200K
                </span>
              </div>
              <p className="font-sans text-sm text-slate-800 leading-relaxed font-medium mb-4">
                Cognizant is deploying Gemini to 100,000 associates this year—scaling to
                200,000—while increasing platform certifications.
              </p>
            </div>
            <div className="p-3.5 rounded bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-600">
                <span>100K Enrolled (50%)</span>
                <span className="font-bold text-[#188038]">Target: 200K Active</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#1A73E8] to-[#188038] rounded-full w-1/2" />
              </div>
            </div>
          </div>

          {/* Card 2: Field Validation */}
          <div className="bg-white p-6 rounded border border-slate-200 border-t-4 border-t-[#188038] shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                <span className="font-mono text-[10px] font-bold text-[#188038] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  <span>FIELD VALIDATION</span>
                </span>
                <span className="font-mono text-xs font-bold text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-0.5 rounded">
                  -35% Costs
                </span>
              </div>
              <p className="font-sans text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Early Proof point :</strong>{' '}
                Cognizant’s integration of Gemini AI across the software development lifecycle
                helped a retailer boost developer productivity by 40%, cut time-to-market by 30%,
                and save 35% in costs.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mt-4 pt-3 border-t border-slate-100 text-center">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200/60">
                <div className="font-serif text-xl font-bold text-[#1A73E8]">+40%</div>
                <div className="font-mono text-[9px] uppercase text-slate-500 mt-0.5">
                  Productivity
                </div>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200/60">
                <div className="font-serif text-xl font-bold text-[#188038]">-30%</div>
                <div className="font-mono text-[9px] uppercase text-slate-500 mt-0.5">
                  Time-to-Market
                </div>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200/60">
                <div className="font-serif text-xl font-bold text-[#0F2942]">-35%</div>
                <div className="font-mono text-[9px] uppercase text-slate-500 mt-0.5">
                  SDLC Costs
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
