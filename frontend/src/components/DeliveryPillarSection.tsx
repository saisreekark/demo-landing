import React from 'react';
import { ModalId, PageRoute, ViewMode } from '../data/showcaseData';

interface DeliveryPillarSectionProps {
  viewMode: ViewMode;
  onOpenModal: (id: ModalId) => void;
  onNavigatePage: (page: PageRoute) => void;
}

export const DeliveryPillarSection: React.FC<DeliveryPillarSectionProps> = ({
  onNavigatePage,
}) => {
  return (
    <section
      className="w-full px-5 sm:px-8 lg:px-12 py-4"
      id="pillar-delivery"
    >
      {/* Editorial Section Masthead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3.5 mb-5 border-b-2 border-slate-900">
        <div>
          <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] uppercase tracking-widest">
            <span className="px-2 py-0.5 bg-[#FEF7E0] text-[#B06000] font-bold rounded">
              SECTION 03
            </span>
            <span className="text-slate-400">//</span>
            <span className="text-slate-600 font-semibold">
              OPERATIONAL RIGOR &amp; CLIENT VALUE CREATION
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold tracking-tight">
            Delivery Highlights
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5 leading-relaxed">
            Driving measurable business outcomes through delivery excellence
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
            onClick={() => onNavigatePage('future')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#0F2942] hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>04. 2027 Priority</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Main 12-Column Newspaper Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left / Main Editorial Dispatches (8 cols) */}
        <div className="lg:col-span-8 lg:border-r lg:border-slate-300 lg:pr-8 flex flex-col justify-between gap-4">
          {/* 1. Support Dispatch */}
          <article
            id="delivery-card-1"
            className="bg-white border border-slate-200 border-l-4 border-l-[#1A73E8] rounded-r p-4 sm:p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8] shrink-0">
                  <span className="material-symbols-outlined text-[17px]">support_agent</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Support:</h3>
              </div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                SLS &amp; PRODUCTIVITY LEDGER
              </span>
            </div>

            <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
              <li className="flex items-start gap-2.5 px-3 py-2 rounded bg-slate-50 border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-[#1A73E8] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">GCP Tech Support:</strong> Driven
                  by AI integration and operational rigor, SLS reached{' '}
                  <strong className="font-bold text-slate-900">97.1 for Apigee</strong> and
                  increased to{' '}
                  <strong className="font-bold text-slate-900">85.0 for CCaaS</strong> (previously
                  76.9) as of October 2026.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded bg-slate-50 border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-[#188038] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">GCP Billing Support:</strong>{' '}
                  AI-driven solution boosted productivity by{' '}
                  <strong className="font-bold text-slate-900">16.7%</strong> and reduced CPC by{' '}
                  <strong className="font-bold text-[#188038]">14%</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded bg-slate-50 border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-[#0B57D0] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">
                    GWS Tech &amp; Billing Support:
                  </strong>{' '}
                  Enhanced AI integration drove a{' '}
                  <strong className="font-bold text-slate-900">16.3%</strong> gain in productivity
                  alongside a <strong className="font-bold text-[#188038]">6.6%</strong> reduction
                  in CPC.
                </span>
              </li>
            </ul>
          </article>

          {/* 2. Hub Services & CDE COE Dispatch */}
          <article
            id="delivery-card-2"
            className="bg-white border border-slate-200 border-l-4 border-l-[#188038] rounded-r p-4 sm:p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#E6F4EA] flex items-center justify-center text-[#188038] shrink-0">
                  <span className="material-symbols-outlined text-[17px]">hub</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Hub Services &amp; CDE COE
                </h3>
              </div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                CENTER OF EXCELLENCE
              </span>
            </div>

            <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
              <li className="flex items-start gap-2.5 px-3 py-2 rounded bg-slate-50 border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-[#1A73E8] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">Hub Services :</strong> Delivered{' '}
                  <strong className="font-bold text-[#1A73E8]">$2M OpEx savings</strong>, supported{' '}
                  <strong className="font-bold text-slate-900">$26B+ win TCV</strong>, and achieved{' '}
                  <strong className="font-bold text-[#188038]">99.3% C-SAT</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded bg-slate-50 border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-[#188038] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">CDE COE :</strong> Achieved{' '}
                  <strong className="font-bold text-[#188038]">$1.8M in 2026 savings</strong>{' '}
                  (exceeding the $1.67M target), cutting YoY run-rate by 26.26%.
                </span>
              </li>
            </ul>
          </article>

          {/* 3. Partner Programs Dispatch */}
          <article
            id="delivery-card-3"
            className="bg-white border border-slate-200 border-l-4 border-l-[#B06000] rounded-r p-4 sm:p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#FEF7E0] flex items-center justify-center text-[#B06000] shrink-0">
                  <span className="material-symbols-outlined text-[17px]">storefront</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Partner Programs:</h3>
              </div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                ADVISORY &amp; PIPELINE
              </span>
            </div>

            <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
              <li className="flex items-start gap-2.5 px-3 py-2 rounded bg-slate-50 border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-[#B06000] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">
                    ISV Scaled Partner Advisory:
                  </strong>{' '}
                  YTD S1+ pipeline grew by{' '}
                  <strong className="font-bold text-slate-900">over 20%</strong>, though S4 stands
                  at <strong className="font-bold text-slate-900">-2%</strong>; focus is on
                  reviewing 681 contracts expiring soon to secure renewals.
                </span>
              </li>
              <li className="flex items-start gap-2.5 px-3 py-2 rounded bg-slate-50 border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-[#188038] shrink-0 mt-1.5" />
                <span>
                  <strong className="font-semibold text-slate-900">
                    Sell &amp; Service Partner Advisory:
                  </strong>{' '}
                  Outperforming expectations, S4 has surpassed target levels by{' '}
                  <strong className="font-bold text-[#188038]">more than 5%</strong>, while the S1+
                  pipeline remains{' '}
                  <strong className="font-bold text-slate-900">over 16% ahead</strong> of YTD
                  benchmarks..
                </span>
              </li>
            </ul>
          </article>
        </div>

        {/* Right Side Column (4 cols): 3 Executive Callout Briefs */}
        <aside className="lg:col-span-4 flex flex-col justify-between gap-4">
          {/* Callout 1: Value Delivered */}
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#188038] p-5 rounded-b shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-slate-100">
                <span className="w-7 h-7 rounded bg-[#E6F4EA] flex items-center justify-center text-[#188038] shrink-0">
                  <span className="material-symbols-outlined text-[16px]">price_check</span>
                </span>
                <h4 className="font-serif text-base font-bold text-slate-900">Value Delivered</h4>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                AI-driven productivity allowed passing on billing savings: 14% for GCP Billing and
                ~7% for Workspace Tech.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mt-3 pt-2.5 border-t border-slate-100 text-center">
              <div className="p-2 rounded bg-slate-50 border border-slate-200/60">
                <div className="font-serif text-xl font-bold text-[#1A73E8]">14%</div>
                <div className="font-mono text-[9px] uppercase text-slate-500">GCP Billing</div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-200/60">
                <div className="font-serif text-xl font-bold text-[#188038]">~7%</div>
                <div className="font-mono text-[9px] uppercase text-slate-500">Workspace Tech</div>
              </div>
            </div>
          </div>

          {/* Callout 2: Executive Keynote */}
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#1A73E8] p-5 rounded-b shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-slate-100">
              <span className="w-7 h-7 rounded bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8] shrink-0">
                <span className="material-symbols-outlined text-[16px]">play_circle</span>
              </span>
              <h4 className="font-serif text-base font-bold text-slate-900">Executive Keynote</h4>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
              Created{' '}
              <strong className="font-bold text-slate-900">
                18+ custom AI UI/UX and video demos
              </strong>{' '}
              in support of Thomas Kurian’s Mumbai Leaders Connect
            </p>
          </div>

          {/* Callout 3: Partner Advisory */}
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#B06000] p-5 rounded-b shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-slate-100">
              <span className="w-7 h-7 rounded bg-[#FEF7E0] flex items-center justify-center text-[#B06000] shrink-0">
                <span className="material-symbols-outlined text-[16px]">pie_chart</span>
              </span>
              <h4 className="font-serif text-base font-bold text-slate-900">Partner Advisory</h4>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-bold">Partner Advisory:</strong> ISV S1+
              pipeline is up <strong className="text-slate-900 font-bold">20%+ YTD</strong> (S4 at
              -2%), while Sell &amp; Service S1+ is{' '}
              <strong className="text-slate-900 font-bold">16%+ above YTD</strong> and S4 beats
              expectations by <strong className="text-slate-900 font-bold">5%+</strong>.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};
