import React from 'react';
import { HERO_DATA, ModalId, QuadrantKey, ViewMode } from '../data/showcaseData';

interface HeroConstellationProps {
  viewMode: ViewMode;
  activeQuadrant: QuadrantKey;
  onSelectQuadrant: (q: QuadrantKey) => void;
  onCycleQuadrant: (delta: number) => void;
  onOpenModal: (id: ModalId) => void;
}

const PILLAR_DISPATCHES: {
  quadrant: QuadrantKey;
  code: string;
  title: string;
  kicker: string;
  summary: string;
  accentBorder: string;
  badgeClass: string;
}[] = [
  {
    quadrant: 'transformation',
    code: 'SECTION 01',
    title: 'Transformation',
    kicker: 'Scaling Agentic solutions across cloud',
    summary:
      'CTO-led governance, 5-Vector AI prioritization, Digital Lead E2E orchestration, $10M+ EPP ROI & $10B+ TCV supported.',
    accentBorder: 'border-l-[#1A73E8]',
    badgeClass: 'bg-[#E8F0FE] text-[#1A73E8]',
  },
  {
    quadrant: 'partnership',
    code: 'SECTION 02',
    title: 'Partnership',
    kicker: 'Combining strengths, scaling impact',
    summary:
      '18,000+ engineers in the Gemini Frontier Capability Group, 55,000+ Build with Gemini associates & 100K→200K rollout.',
    accentBorder: 'border-l-[#D93025]',
    badgeClass: 'bg-[#FCE8E6] text-[#D93025]',
  },
  {
    quadrant: 'delivery',
    code: 'SECTION 03',
    title: 'Delivery Highlights',
    kicker: 'A quarter of exceptional delivery',
    summary:
      '97.1 Apigee SLS, 14% GCP Billing CPC reduction, $2M Hub OpEx savings, $26B+ win TCV & $1.8M CDE COE savings.',
    accentBorder: 'border-l-[#B06000]',
    badgeClass: 'bg-[#FEF7E0] text-[#B06000]',
  },
  {
    quadrant: 'future',
    code: 'SECTION 04',
    title: '2027 Priority',
    kicker: 'Moving towards autonomous workflows',
    summary:
      'Five 2027 priorities driving efficiency & customer experience across Growth, Support, Hub Services, GTM & Partners.',
    accentBorder: 'border-l-[#188038]',
    badgeClass: 'bg-[#E6F4EA] text-[#188038]',
  },
];

export const HeroConstellation: React.FC<HeroConstellationProps> = ({
  activeQuadrant,
  onSelectQuadrant,
  onOpenModal,
}) => {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-12 py-4" id="overview">
      {/* 1. FULL-WIDTH NEWSLETTER MASTHEAD & LEAD HEADLINE BANNER */}
      <div className="pb-3.5 border-b border-slate-300">
        {/* Single-Line Lead Headline & Stacked Subtitle */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#0F2942] text-white font-mono text-[9px] font-bold uppercase tracking-widest mb-1.5">
            <span>EXECUTIVE BRIEFING</span>
            <span>•</span>
            <span>FRONT PAGE OVERVIEW</span>
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[26px] xl:text-[31px] font-bold tracking-tight text-slate-900 leading-tight lg:whitespace-nowrap">
            {HERO_DATA.headlinePrefix}
            <span className="text-[#0B57D0]">{HERO_DATA.headlineGradient}</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed max-w-5xl">
            {HERO_DATA.subtitle}
          </p>
        </div>

        {/* Classic Newspaper Double-Rule Divider */}
        <div className="newsletter-double-rule mt-3" />
      </div>

      {/* 2. MAIN FRONT-PAGE 12-COLUMN SPREAD: LEFT = INTERACTIVE CIRCLE | RIGHT = EDITORIAL CONTENT */}
      <div className="pt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT COLUMN (5 Cols): Interactive 4-Quadrant Constellation Circle */}
        <div
          className="lg:col-span-5 flex flex-col items-center justify-center select-none"
          id="radar-dial-section"
        >
          <div className="w-full flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-800 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B57D0]" />
              <span>Interactive Edition Compass</span>
            </span>
            <span className="font-mono text-[10px] text-slate-500 uppercase">
              Click Quadrant to Open
            </span>
          </div>

          <div className="relative z-10 w-[430px] h-[430px] xl:w-[460px] xl:h-[460px] flex items-center justify-center my-2">
            {/* Outer decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] pointer-events-none" />
            <div className="absolute -inset-4 rounded-full border border-slate-300/80 border-dashed pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-slate-200 pointer-events-none" />

            {/* Rotating Orbit Dots */}
            <div className="absolute inset-0 pointer-events-none animate-orbit-clockwise z-10">
              <div className="absolute -top-2.5 left-1/3 w-5 h-5 rounded-full bg-[#FBBC05]/35 blur-md animate-pulse-dot-1" />
              <div className="absolute -top-2.5 left-1/3 w-2.5 h-2.5 rounded-full bg-[#FBBC05] shadow-[0_0_6px_#FBBC05]" />
              <div className="absolute top-1/4 -right-2.5 w-5 h-5 rounded-full bg-google-blue/35 blur-md animate-pulse-dot-2" />
              <div className="absolute top-1/4 -right-2.5 w-2.5 h-2.5 rounded-full bg-google-blue shadow-[0_0_6px_#1A73E8]" />
              <div className="absolute bottom-1/4 -left-2.5 w-5 h-5 rounded-full bg-[#EA4335]/35 blur-md animate-pulse-dot-3" />
              <div className="absolute bottom-1/4 -left-2.5 w-2.5 h-2.5 rounded-full bg-[#EA4335] shadow-[0_0_6px_#EA4335]" />
              <div className="absolute -bottom-2.5 right-1/3 w-5 h-5 rounded-full bg-google-green/35 blur-md animate-pulse-dot-4" />
              <div className="absolute -bottom-2.5 right-1/3 w-2.5 h-2.5 rounded-full bg-google-green shadow-[0_0_6px_#34A853]" />
            </div>

            {/* 4-Quadrant Dial Circle */}
            <div className="relative w-full h-full rounded-full border-2 border-slate-300 bg-white shadow-xl overflow-hidden grid grid-cols-2 grid-rows-2">
              {/* Animated 4-Color Crosshair Dividers */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 z-10 pointer-events-none animated-axis-y" />
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 z-10 pointer-events-none animated-axis-x" />

              {/* Top-Left Quadrant: 2027 Priority */}
              <div
                className={`p-4 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-google-green/5 border-r border-b border-slate-200 dial-quadrant-card group ${
                  activeQuadrant === 'future' ? 'bg-google-green/10' : ''
                }`}
                id="quadrant-future"
                onClick={() => onSelectQuadrant('future')}
              >
                <div className="w-full h-full flex flex-col justify-center items-center text-center pt-7 pl-7 pr-5 pb-5 relative z-10">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#188038] mb-0.5">
                    SECTION 04
                  </span>
                  <h3 className="font-serif text-base xl:text-lg font-bold text-slate-900 group-hover:text-google-green transition-colors leading-tight mb-1">
                    2027 Priority
                  </h3>
                  <p className="font-sans text-[11px] text-slate-600 font-medium max-w-[140px] leading-snug">
                    Moving towards autonomous workflows
                  </p>
                </div>
              </div>

              {/* Top-Right Quadrant: Transformation */}
              <div
                className={`p-4 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-google-blue/5 border-l border-b border-slate-200 dial-quadrant-card group ${
                  activeQuadrant === 'transformation' ? 'bg-google-blue/10' : ''
                }`}
                id="quadrant-transformation"
                onClick={() => onSelectQuadrant('transformation')}
              >
                <div className="w-full h-full flex flex-col justify-center items-center text-center pt-7 pr-7 pl-5 pb-5 relative z-10">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#1A73E8] mb-0.5">
                    SECTION 01
                  </span>
                  <h3 className="font-serif text-base xl:text-lg font-bold text-slate-900 group-hover:text-google-blue transition-colors leading-tight mb-1">
                    Transformation
                  </h3>
                  <p className="font-sans text-[11px] text-slate-600 font-medium max-w-[140px] leading-snug">
                    Scaling Agentic solutions across cloud
                  </p>
                </div>
              </div>

              {/* Bottom-Left Quadrant: Delivery */}
              <div
                className={`p-4 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-google-yellow/5 border-r border-t border-slate-200 dial-quadrant-card group ${
                  activeQuadrant === 'delivery' ? 'bg-google-yellow/10' : ''
                }`}
                id="quadrant-delivery"
                onClick={() => onSelectQuadrant('delivery')}
              >
                <div className="w-full h-full flex flex-col justify-center items-center text-center pb-7 pl-7 pr-5 pt-5 relative z-10">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#B06000] mb-0.5">
                    SECTION 03
                  </span>
                  <h3 className="font-serif text-base xl:text-lg font-bold text-slate-900 group-hover:text-[#B06000] transition-colors leading-tight mb-1">
                    Delivery
                  </h3>
                  <p className="font-sans text-[11px] text-slate-600 font-medium max-w-[140px] leading-snug">
                    A quarter of exceptional delivery
                  </p>
                </div>
              </div>

              {/* Bottom-Right Quadrant: Partnership */}
              <div
                className={`p-4 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-[#FCE8E6] border-l border-t border-slate-200 dial-quadrant-card group ${
                  activeQuadrant === 'partnership' ? 'bg-[#FCE8E6]' : ''
                }`}
                id="quadrant-partnership"
                onClick={() => onSelectQuadrant('partnership')}
              >
                <div className="w-full h-full flex flex-col justify-center items-center text-center pb-7 pr-7 pl-5 pt-5 relative z-10">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#D93025] mb-0.5">
                    SECTION 02
                  </span>
                  <h3 className="font-serif text-base xl:text-lg font-bold text-slate-900 group-hover:text-[#D93025] transition-colors leading-tight mb-1">
                    Partnership
                  </h3>
                  <p className="font-sans text-[11px] text-slate-600 font-medium max-w-[140px] leading-snug">
                    Combining strengths, scaling impact
                  </p>
                </div>
              </div>
            </div>

            {/* Center Revolving Google Cloud Hub Disc */}
            <div
              className="z-20 w-24 h-24 rounded-full flex flex-col items-center justify-center p-2 pointer-events-none select-none hub-revolving-border"
              id="hub-center-disc"
            >
              <div className="relative flex flex-col items-center justify-center z-10">
                <div className="flex items-center justify-center w-14 h-10 mb-0.5">
                  <img
                    alt="Google Cloud"
                    className="max-w-full max-h-full object-contain select-none pointer-events-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw9N14J_XlY9MHzwdTFKRAAZuK4C9-FrdK6n39On4n5vwmmXXAle47gcqm51ocxQH09FpaKDk5iICMP5zI8nnJppnnPXhYeJl6lXcQMHGR9yttrB7nkh-Wc9U5EkCZLingNt28JBVFhu1fT_84MR4d4tdRvUVMAsvXxY8n7WdwviY_8CIe63gAkPUujZqHmJLN-bRuuzXIcc9IJOKvJPtcvNvYvnaLn5LkMs7d0tHQK-z99cxV-wCiSg"
                  />
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse-dot-1" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335] animate-pulse-dot-2" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05] animate-pulse-dot-3" />
                  <span className="w-1.5 h-1.5 rounded-full bg-google-green animate-pulse-dot-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (7 Cols): Executive Newsletter Scorecard, Section Dispatches & Featured Dossiers */}
        <div className="lg:col-span-7 lg:border-l lg:border-slate-300 lg:pl-8 space-y-5">
          {/* 1. At-a-Glance Alliance Scorecard (4 KPIs) */}
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b-2 border-slate-900">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900">
                Key Alliance Metrics • Portfolio Scorecard
              </span>
              <span className="font-mono text-[10px] text-slate-500 uppercase">
                Verified Telemetry
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-white border border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
              {HERO_DATA.kpis.map((kpi) => (
                <div key={kpi.id} className="p-3 sm:p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      {kpi.label}
                    </span>
                    <span className={`material-symbols-outlined text-[16px] ${kpi.iconTextClass}`}>
                      {kpi.icon}
                    </span>
                  </div>
                  <div className="font-serif text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight">
                    {kpi.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Inside This Issue — 4 Strategic Section Dispatches (2x2 Editorial Grid) */}
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2.5 border-b-2 border-slate-900">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900">
                Inside This Issue — Section Briefings
              </span>
              <span className="font-mono text-[10px] text-slate-500 uppercase">
                Click Any Dispatch to Read Section
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLAR_DISPATCHES.map((item) => {
                const isSelected = activeQuadrant === item.quadrant;
                return (
                  <div
                    key={item.quadrant}
                    onClick={() => onSelectQuadrant(item.quadrant)}
                    className={`p-3.5 bg-white border border-slate-200 border-l-4 ${
                      item.accentBorder
                    } rounded-r flex flex-col justify-between cursor-pointer hover:shadow-md hover:border-slate-300 transition-all group ${
                      isSelected ? 'bg-slate-50/80 ring-1 ring-slate-300' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase tracking-wider ${item.badgeClass}`}
                        >
                          {item.code}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#0B57D0] flex items-center gap-0.5 font-semibold">
                          <span>Open Section</span>
                          <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">
                            arrow_forward
                          </span>
                        </span>
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0B57D0] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[11px] font-semibold text-slate-700 italic">
                        “{item.kicker}”
                      </p>
                      <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Featured Interactive Dossiers (Slide 6 & Slide 7 Direct Modal Popups) */}
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2.5 border-b-2 border-slate-900">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900">
                Featured Executive Supplements
              </span>
              <span className="font-mono text-[10px] text-slate-500 uppercase">
                Deep-Dive Dossiers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* CTA 1: Autonomous POV (Slide 6 Popup) */}
              <button
                type="button"
                onClick={() => onOpenModal('modal-autonomous')}
                className="p-3.5 rounded bg-white hover:bg-slate-50 border border-slate-200 border-t-2 border-t-[#188038] shadow-[0_1px_2px_rgba(15,23,42,0.03)] hover:shadow-md flex items-center justify-between gap-3 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-9 h-9 rounded bg-[#E6F4EA] border border-[#188038]/30 flex items-center justify-center shrink-0 group-hover:bg-[#188038] group-hover:text-white text-[#188038] transition-colors mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">route</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#188038] block">
                      SUPPLEMENT 01 • AUTONOMOUS ROADMAP
                    </span>
                    <span className="font-serif text-sm font-bold text-slate-900 group-hover:text-[#188038] transition-colors leading-snug block mt-0.5">
                      Click here to know about our autonomous POV
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-[#188038] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                  north_east
                </span>
              </button>

              {/* CTA 2: Prioritization Framework (Slide 7 Popup) */}
              <button
                type="button"
                onClick={() => onOpenModal('modal-prioritization-framework')}
                className="p-3.5 rounded bg-white hover:bg-slate-50 border border-slate-200 border-t-2 border-t-[#0B57D0] shadow-[0_1px_2px_rgba(15,23,42,0.03)] hover:shadow-md flex items-center justify-between gap-3 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-9 h-9 rounded bg-[#E8F0FE] border border-[#0B57D0]/30 flex items-center justify-center shrink-0 group-hover:bg-[#0B57D0] group-hover:text-white text-[#0B57D0] transition-colors mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">analytics</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#0B57D0] block">
                      SUPPLEMENT 02 • GOVERNANCE MATRIX
                    </span>
                    <span className="font-serif text-sm font-bold text-slate-900 group-hover:text-[#0B57D0] transition-colors leading-snug block mt-0.5">
                      Want to know more prioritization framework for AI solutions
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-[#0B57D0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                  north_east
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
