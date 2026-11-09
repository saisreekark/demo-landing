import React from 'react';
import {
  HERO_DATA,
  ModalId,
  PageRoute,
  QuadrantKey,
} from '../../data/showcaseData';
import { FeedbackWidget } from '../FeedbackWidget';
import { ModalsContainer } from '../ModalsContainer';

interface MobileShowcaseViewProps {
  activePage: PageRoute;
  activeQuadrant: QuadrantKey;
  activeModal: ModalId;
  onNavigatePage: (page: PageRoute) => void;
  onSelectQuadrant: (q: QuadrantKey) => void;
  onOpenModal: (id: ModalId) => void;
  onCloseModal: () => void;
  onNavigatePillarFromModal: (sectionId: string) => void;
}

const MOBILE_NAV_ITEMS: {
  page: PageRoute;
  label: string;
  shortLabel: string;
  icon: string;
}[] = [
  { page: 'landing', label: 'Overview', shortLabel: 'Overview', icon: 'hub' },
  {
    page: 'transformation',
    label: 'Transformation',
    shortLabel: 'Transform',
    icon: 'layers',
  },
  {
    page: 'partnership',
    label: 'Partnership',
    shortLabel: 'Partner',
    icon: 'handshake',
  },
  {
    page: 'delivery',
    label: 'Delivery Highlights',
    shortLabel: 'Delivery',
    icon: 'verified',
  },
  {
    page: 'future',
    label: '2027 Priority',
    shortLabel: '2027 Priority',
    icon: 'auto_awesome',
  },
];

export const MobileShowcaseView: React.FC<MobileShowcaseViewProps> = ({
  activePage,
  activeQuadrant,
  activeModal,
  onNavigatePage,
  onSelectQuadrant,
  onOpenModal,
  onCloseModal,
  onNavigatePillarFromModal,
}) => {
  return (
    <div
      id="mobile-showcase-root"
      className="min-h-screen w-full overflow-x-hidden flex flex-col bg-surface text-on-surface relative pb-20"
    >
      {/* Subtle Mobile Atmospheric Glows */}
      <div className="fixed top-[-80px] left-1/2 -translate-x-1/2 w-[480px] h-[320px] glow-radial-blue pointer-events-none z-0"></div>
      <div className="fixed top-[45%] -left-24 w-[320px] h-[320px] glow-radial-green pointer-events-none z-0"></div>
      <div className="fixed top-[60%] -right-24 w-[320px] h-[320px] glow-radial-yellow pointer-events-none z-0"></div>

      {/* 1. Sticky Mobile Header */}
      <header
        id="mobile-header"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm px-3.5 pt-2.5 pb-2"
      >
        <div className="flex items-center justify-between gap-2">
          {/* Brand Lockup */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePage('landing');
            }}
            className="flex items-center gap-2 select-none"
          >
            <div className="w-7 h-7 rounded-full bg-google-blue/10 flex items-center justify-center border border-google-blue/20 text-google-blue shrink-0">
              <span className="material-symbols-outlined text-[16px]">cloud</span>
            </div>
            <div className="flex items-center gap-1 leading-none">
              <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-on-surface">
                Google Cloud
              </span>
              <span className="text-outline-variant text-[11px]">×</span>
              <span className="font-display font-medium text-xs sm:text-sm tracking-tight text-on-surface-variant">
                Cognizant
              </span>
            </div>
          </a>

          {/* Ecosystem Hub Quick Modal Trigger */}
          <button
            type="button"
            onClick={() => onOpenModal('modal-ecosystem')}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8F0FE] text-google-blue border border-google-blue/30 font-mono text-[10px] font-bold shrink-0 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[13px]">hub</span>
            <span>Ecosystem Hub</span>
          </button>
        </div>

        {/* Text-Only Full-Width Navigation Pills (Never clipped) */}
        <nav
          aria-label="Mobile Pillar Navigation"
          className="grid grid-cols-5 gap-1 pt-2 pb-0.5 bg-surface-container-low/60 p-1 rounded-full mt-2 border border-outline-variant/30"
        >
          {MOBILE_NAV_ITEMS.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigatePage(item.page)}
                className={
                  isActive
                    ? 'py-1 px-1 rounded-full font-mono text-[10px] font-semibold text-on-primary-container bg-primary-container shadow-sm text-center truncate transition-all'
                    : 'py-1 px-1 rounded-full text-[10px] font-medium text-on-surface-variant hover:text-primary text-center truncate transition-all'
                }
              >
                {item.shortLabel}
              </button>
            );
          })}
        </nav>
      </header>

      {/* 2. Mobile Main Content Stage */}
      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto px-3.5 pt-4 pb-6">
        {/* ==================== PAGE 0: LANDING OVERVIEW ==================== */}
        {activePage === 'landing' && (
          <section id="mobile-overview" className="flex flex-col items-center text-center space-y-4">
            {/* Headline & Subtitle */}
            <div className="space-y-1.5 px-1">
              <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-on-surface leading-snug">
                {HERO_DATA.headlinePrefix}
                <span className="bg-gradient-to-r from-google-blue via-primary to-google-green bg-clip-text text-transparent">
                  {HERO_DATA.headlineGradient}
                </span>
              </h1>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                {HERO_DATA.subtitle}
              </p>
            </div>

            {/* Mobile Interactive 4-Quadrant Constellation Circle */}
            <div
              id="mobile-constellation-dial"
              className="relative flex items-center justify-center my-2 select-none"
            >
              <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
                {/* Outer decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-outline-variant/60 pointer-events-none"></div>
                <div className="absolute -inset-2.5 rounded-full border border-outline-variant/40 border-dashed pointer-events-none"></div>
                <div className="absolute inset-2.5 rounded-full border border-outline-variant/40 pointer-events-none"></div>

                {/* Rotating Orbit Dots */}
                <div className="absolute inset-0 pointer-events-none animate-orbit-clockwise z-10">
                  <div className="absolute -top-2 left-1/3 w-2.5 h-2.5 rounded-full bg-[#FBBC05] shadow-[0_0_6px_#FBBC05]"></div>
                  <div className="absolute top-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-google-blue shadow-[0_0_6px_#1A73E8]"></div>
                  <div className="absolute bottom-1/4 -left-2 w-2.5 h-2.5 rounded-full bg-[#EA4335] shadow-[0_0_6px_#EA4335]"></div>
                  <div className="absolute -bottom-2 right-1/3 w-2.5 h-2.5 rounded-full bg-google-green shadow-[0_0_6px_#34A853]"></div>
                </div>

                {/* 4-Quadrant Mobile Circle */}
                <div className="relative w-full h-full rounded-full border-2 border-outline-variant/60 bg-white shadow-xl overflow-hidden grid grid-cols-2 grid-rows-2">
                  {/* Animated 4-Color Crosshair Dividers */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 z-10 pointer-events-none animated-axis-y"></div>
                  <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 z-10 pointer-events-none animated-axis-x"></div>

                  {/* Top-Left: 2027 Priority */}
                  <button
                    type="button"
                    onClick={() => onSelectQuadrant('future')}
                    className={`p-2 flex flex-col justify-center items-center text-center pt-5 pl-5 pr-3 pb-3 border-r border-b border-outline-variant/40 transition-colors active:bg-google-green/15 ${
                      activeQuadrant === 'future' ? 'bg-google-green/10' : ''
                    }`}
                  >
                    <span className="font-display text-xs font-bold text-on-surface leading-tight">
                      2027
                      <br />
                      Priority
                    </span>
                  </button>

                  {/* Top-Right: Transformation */}
                  <button
                    type="button"
                    onClick={() => onSelectQuadrant('transformation')}
                    className={`p-2 flex flex-col justify-center items-center text-center pt-5 pr-5 pl-3 pb-3 border-l border-b border-outline-variant/40 transition-colors active:bg-google-blue/15 ${
                      activeQuadrant === 'transformation' ? 'bg-google-blue/10' : ''
                    }`}
                  >
                    <span className="font-display text-xs font-bold text-on-surface leading-tight">
                      Transformation
                    </span>
                  </button>

                  {/* Bottom-Left: Delivery */}
                  <button
                    type="button"
                    onClick={() => onSelectQuadrant('delivery')}
                    className={`p-2 flex flex-col justify-center items-center text-center pb-5 pl-5 pr-3 pt-3 border-r border-t border-outline-variant/40 transition-colors active:bg-google-yellow/15 ${
                      activeQuadrant === 'delivery' ? 'bg-google-yellow/10' : ''
                    }`}
                  >
                    <span className="font-display text-xs font-bold text-on-surface leading-tight">
                      Delivery
                    </span>
                  </button>

                  {/* Bottom-Right: Partnership */}
                  <button
                    type="button"
                    onClick={() => onSelectQuadrant('partnership')}
                    className={`p-2 flex flex-col justify-center items-center text-center pb-5 pr-5 pl-3 pt-3 border-l border-t border-outline-variant/40 transition-colors active:bg-[#FCE8E6] ${
                      activeQuadrant === 'partnership' ? 'bg-[#FCE8E6]' : ''
                    }`}
                  >
                    <span className="font-display text-xs font-bold text-on-surface leading-tight">
                      Partnership
                    </span>
                  </button>
                </div>

                {/* Center Revolving Google Cloud Hub Disc (Static / No Click Popup) */}
                <div
                  id="mobile-hub-center-disc"
                  className="z-20 w-16 h-16 rounded-full flex flex-col items-center justify-center p-1.5 pointer-events-none select-none hub-revolving-border"
                >
                  <div className="relative flex flex-col items-center justify-center z-10">
                    <div className="flex items-center justify-center w-10 h-6">
                      <img
                        alt="Google Cloud"
                        className="max-w-full max-h-full object-contain select-none pointer-events-none"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw9N14J_XlY9MHzwdTFKRAAZuK4C9-FrdK6n39On4n5vwmmXXAle47gcqm51ocxQH09FpaKDk5iICMP5zI8nnJppnnPXhYeJl6lXcQMHGR9yttrB7nkh-Wc9U5EkCZLingNt28JBVFhu1fT_84MR4d4tdRvUVMAsvXxY8n7WdwviY_8CIe63gAkPUujZqHmJLN-bRuuzXIcc9IJOKvJPtcvNvYvnaLn5LkMs7d0tHQK-z99cxV-wCiSg"
                      />
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1 h-1 rounded-full bg-google-blue"></span>
                      <span className="w-1 h-1 rounded-full bg-[#EA4335]"></span>
                      <span className="w-1 h-1 rounded-full bg-[#FBBC05]"></span>
                      <span className="w-1 h-1 rounded-full bg-google-green"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
              Tap any quadrant above or card below to explore a pillar
            </p>

            {/* Full-Detail 2x2 Pillar Cards for Easy Reading & Touch Navigation */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
              {/* Transformation */}
              <button
                type="button"
                onClick={() => onNavigatePage('transformation')}
                className="p-3.5 rounded-2xl bg-white border border-outline-variant/50 shadow-sm flex items-start justify-between gap-2 text-left active:scale-[0.99] transition-all google-animated-border"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-on-surface">
                    Transformation
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant">
                    Scaling Agentic solutions across cloud
                  </p>
                </div>
                <span className="material-symbols-outlined text-google-blue text-[18px] shrink-0 mt-1">
                  arrow_forward
                </span>
              </button>

              {/* 2027 Priority */}
              <button
                type="button"
                onClick={() => onNavigatePage('future')}
                className="p-3.5 rounded-2xl bg-white border border-outline-variant/50 shadow-sm flex items-start justify-between gap-2 text-left active:scale-[0.99] transition-all google-animated-border"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-on-surface">
                    2027 Priority
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant">
                    Moving towards autonomous workflows
                  </p>
                </div>
                <span className="material-symbols-outlined text-google-green text-[18px] shrink-0 mt-1">
                  arrow_forward
                </span>
              </button>

              {/* Partnership */}
              <button
                type="button"
                onClick={() => onNavigatePage('partnership')}
                className="p-3.5 rounded-2xl bg-white border border-outline-variant/50 shadow-sm flex items-start justify-between gap-2 text-left active:scale-[0.99] transition-all google-animated-border"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-on-surface">Partnership</h3>
                  <p className="font-body text-xs text-on-surface-variant">
                    Combining strengths, scaling impact
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#D93025] text-[18px] shrink-0 mt-1">
                  arrow_forward
                </span>
              </button>

              {/* Delivery */}
              <button
                type="button"
                onClick={() => onNavigatePage('delivery')}
                className="p-3.5 rounded-2xl bg-white border border-outline-variant/50 shadow-sm flex items-start justify-between gap-2 text-left active:scale-[0.99] transition-all google-animated-border"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-on-surface">
                    Delivery
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant">
                    A quarter of exceptional delivery
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#B06000] text-[18px] shrink-0 mt-1">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 2 Elevated Modal CTAs (Slide 6 & Slide 7 Direct Popups) */}
            <div className="w-full grid grid-cols-1 gap-2.5 text-left pt-1">
              <button
                type="button"
                onClick={() => onOpenModal('modal-autonomous')}
                className="py-3 px-3.5 rounded-xl flex items-center justify-between bg-white border border-outline-variant/40 shadow-sm text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#E6F4EA] border border-secondary/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      route
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0"></span>
                      <span className="font-display text-xs font-bold text-on-surface">
                        Click here to know about our autonomous POV
                      </span>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 ml-1.5">
                  north_east
                </span>
              </button>

              <button
                type="button"
                onClick={() => onOpenModal('modal-prioritization-framework')}
                className="py-3 px-3.5 rounded-xl flex items-center justify-between bg-white border border-outline-variant/40 shadow-sm text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-primary-container/40 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      analytics
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0"></span>
                      <span className="font-display text-xs font-bold text-on-surface">
                        Want to know more prioritization framework for AI solutions
                      </span>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-primary shrink-0 ml-1.5">
                  north_east
                </span>
              </button>
            </div>
          </section>
        )}

        {/* ==================== PAGE 1: TRANSFORMATION HIGHLIGHTS ==================== */}
        {activePage === 'transformation' && (
          <section id="mobile-pillar-transformation" className="space-y-3.5">
            {/* Section Header */}
            <div className="pb-2.5 border-b border-outline-variant/30 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-display text-xl font-bold text-on-surface tracking-tight">
                    Transformation Highlights
                  </h2>
                  <p className="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    Establishing a structured transformation engine to accelerate AI-led modern
                    architectures.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage('landing')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-on-surface-variant border border-outline-variant/40 font-mono text-[10px] font-semibold shadow-sm shrink-0"
                >
                  <span className="material-symbols-outlined text-[13px]">arrow_upward</span>
                  <span>Overview</span>
                </button>
              </div>
            </div>

            {/* 3 Executive Metric Cards */}
            <div className="grid grid-cols-1 gap-2.5">
              <div className="bg-white rounded-2xl border border-outline-variant/40 p-3.5 shadow-sm google-animated-border">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-google-blue">$10M+</span>
                  <span className="w-2 h-2 rounded-full bg-google-blue animate-pulse"></span>
                  <span className="font-display text-xs font-bold text-on-surface">
                    EPP ROI Delivered
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Delivered across 15+ AI solutions deployed within Google Cloud ecosystem.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-outline-variant/40 p-3.5 shadow-sm google-animated-border">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-google-blue">$10B+</span>
                  <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
                  <span className="font-display text-xs font-bold text-on-surface">
                    TCV Supported
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Supported through RFP Accelerator &amp; PitchGen Enterprise Applications.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-outline-variant/40 p-3.5 shadow-sm google-animated-border">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-google-blue">40%</span>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-display text-xs font-bold text-on-surface">
                    Engineering Spend Reduction Targeted
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Co-creating solutions for engineering excellence through Google stack AI SDLC
                  &amp; Dev Intelligence models.
                </p>
              </div>
            </div>

            {/* Governance & CTO Leadership Card */}
            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-3 google-animated-border">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-mono text-[10px] text-google-blue font-bold uppercase tracking-wider block">
                    GOVERNANCE &amp; CTO LEADERSHIP
                  </span>
                  <h4 className="font-display text-sm sm:text-base text-on-surface font-bold">
                    Strengthening transformation governance
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenModal('modal-prioritization-framework')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E8F0FE] text-google-blue font-mono text-[10px] font-semibold border border-primary/20 shrink-0"
                >
                  <span>Priortization Framework</span>
                  <span className="material-symbols-outlined text-[12px]">launch</span>
                </button>
              </div>

              <div className="space-y-1.5 text-[11px] font-body">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue shrink-0"></span>
                  <span>
                    <strong className="font-semibold">Leadership:</strong> Reinforced under Lakshmi
                    Kumar Narayan (CTO Org)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-green shrink-0"></span>
                  <span>
                    <strong className="font-semibold">Framework:</strong> 5-Vector Prioritization
                    Framework for AI Solutions
                  </span>
                </div>
              </div>
            </div>

            {/* Transformation Tenet Card */}
            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2.5 google-animated-border">
              <div>
                <div className="flex items-center gap-1.5 text-google-blue font-mono text-[10px] font-semibold uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-[15px]">layers</span>
                  <span>TRANSFORMATION TENET · CLOUD SCALE</span>
                </div>
                <h3 className="font-display text-base font-bold text-on-surface leading-snug">
                  Piloted scaling of AI solutions across different Cloud programs
                </h3>
              </div>

              <div className="space-y-1.5 text-[11px] font-body">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue shrink-0"></span>
                  <span>
                    <strong className="font-semibold">CORE:</strong> ISV, GCP tech, GWS Tech,
                    Billing
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-green shrink-0"></span>
                  <span>
                    <strong className="font-semibold">Accelerate:</strong> ISV MP, GCP tech, GWS
                    TEch, Billing
                  </span>
                </div>
              </div>
            </div>

            {/* Transitioning to E2E architecture anchored in Digital lead as unified orchestrator */}
            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2.5 google-animated-border">
              <div className="flex items-start justify-between gap-2 pb-2 border-b border-outline-variant/30">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-google-blue text-[16px]">
                    hub
                  </span>
                  <span className="font-display text-xs text-google-blue font-bold">
                    Transitioning to E2E architecture anchored in Digital lead as unified
                    orchestrator
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenModal('modal-digital-lead')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E8F0FE] text-google-blue font-mono text-[10px] font-semibold border border-primary/20 shrink-0"
                >
                  <span>Digital Lead</span>
                  <span className="material-symbols-outlined text-[12px]">launch</span>
                </button>
              </div>

              <h3 className="font-display text-base font-bold text-on-surface leading-snug">
                Seamlessly connect all points solutions through Digital lead
              </h3>

              <div className="grid grid-cols-2 gap-2 text-center font-mono">
                <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col items-center">
                  <span className="material-symbols-outlined text-google-blue text-[16px] mb-0.5">
                    psychology
                  </span>
                  <div className="font-display font-bold text-xs text-on-surface">Digital SME</div>
                  <div className="text-[10px] text-on-surface-variant font-body">Expert Agent</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col items-center">
                  <span className="material-symbols-outlined text-google-green text-[16px] mb-0.5">
                    terminal
                  </span>
                  <div className="font-display font-bold text-xs text-on-surface">CORE</div>
                  <div className="text-[10px] text-on-surface-variant font-body">Simulator</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#B06000] text-[16px] mb-0.5">
                    account_tree
                  </span>
                  <div className="font-display font-bold text-xs text-on-surface">Crado</div>
                  <div className="text-[10px] text-on-surface-variant font-body">Workflow</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#D93025] text-[16px] mb-0.5">
                    rocket_launch
                  </span>
                  <div className="font-display font-bold text-xs text-on-surface">Mayfly</div>
                  <div className="text-[10px] text-on-surface-variant font-body">Diagnosis</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 col-span-2 flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[16px] mb-0.5">
                    insights
                  </span>
                  <div className="font-display font-bold text-xs text-on-surface">Elevate 360</div>
                  <div className="text-[10px] text-on-surface-variant font-body">Performance</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== PAGE 4: 2027 PRIORITY ==================== */}
        {activePage === 'future' && (
          <section id="mobile-pillar-future" className="space-y-3.5">
            {/* Section Header */}
            <div className="pb-2.5 border-b border-outline-variant/30 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-display text-xl font-bold text-on-surface tracking-tight">
                    2027 Priority
                  </h2>
                  <p className="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    2027 Priorities: Driving efficiency and amplifying customer experience
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage('landing')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-on-surface-variant border border-outline-variant/40 font-mono text-[10px] font-semibold shadow-sm shrink-0"
                >
                  <span className="material-symbols-outlined text-[13px]">arrow_upward</span>
                  <span>Overview</span>
                </button>
              </div>
            </div>

            {/* 5 Components Arranged Horizontally One Below the Other */}
            <div className="flex flex-col gap-3">
              {/* 1. Strategic Growth */}
              <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm flex items-start gap-3 google-animated-border">
                <div className="w-8 h-8 rounded-xl bg-google-blue/10 flex items-center justify-center text-google-blue font-display font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
                    <strong className="font-display font-bold text-on-surface">
                      Strategic Growth:
                    </strong>{' '}
                    Maintaining a sharp focus on cross-market applicability, scalability, and strong
                    go-to-market (GTM) potential.
                  </p>
                </div>
              </div>

              {/* 2. Cloud Support */}
              <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm flex items-start gap-3 google-animated-border">
                <div className="w-8 h-8 rounded-xl bg-google-green/10 flex items-center justify-center text-google-green font-display font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
                    <strong className="font-display font-bold text-on-surface">
                      Cloud Support:
                    </strong>{' '}
                    Implementing end-to-end autonomous workflows to drive continuous efficiency and
                    faster resolution times.
                  </p>
                </div>
              </div>

              {/* 3. Hub Services */}
              <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm flex items-start gap-3 google-animated-border">
                <div className="w-8 h-8 rounded-xl bg-[#FEF7E0] flex items-center justify-center text-[#B06000] font-display font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
                    <strong className="font-display font-bold text-on-surface">
                      Hub Services:
                    </strong>{' '}
                    Migrating and upgrading our existing AI solutions to next-generation
                    environments, utilizing specialized capabilities to elevate content quality and
                    coverage.
                  </p>
                </div>
              </div>

              {/* 4. GTM Helpdesk */}
              <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm flex items-start gap-3 google-animated-border">
                <div className="w-8 h-8 rounded-xl bg-[#FCE8E6] flex items-center justify-center text-[#D93025] font-display font-bold text-xs shrink-0 mt-0.5">
                  4
                </div>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
                    <strong className="font-display font-bold text-on-surface">
                      GTM Helpdesk:
                    </strong>{' '}
                    Accelerating case resolution and delivering immediate, tangible benefits through
                    advanced agentic solutions.
                  </p>
                </div>
              </div>

              {/* 5. Partner programs */}
              <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm flex items-start gap-3 google-animated-border">
                <div className="w-8 h-8 rounded-xl bg-primary-container/50 flex items-center justify-center text-primary font-display font-bold text-xs shrink-0 mt-0.5">
                  5
                </div>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed">
                    <strong className="font-display font-bold text-on-surface">
                      Partner programs:
                    </strong>{' '}
                    Scaling AaaS Marketplace solution adoption and accelerating Corporate growth by
                    prioritizing key AI ISVs and strategic segment alliances.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== PAGE 3: PARTNERSHIP HIGHLIGHTS ==================== */}
        {activePage === 'partnership' && (
          <section id="mobile-pillar-partnership" className="space-y-3.5">
            {/* Section Header */}
            <div className="pb-2.5 border-b border-outline-variant/30 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-display text-xl font-bold text-on-surface tracking-tight">
                    Partnership Highlights
                  </h2>
                  <p className="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    Strengthening the Google Cloud and Cognizant alliance through enterprise talent
                    engineering.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage('landing')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-on-surface-variant border border-outline-variant/40 font-mono text-[10px] font-semibold shadow-sm shrink-0"
                >
                  <span className="material-symbols-outlined text-[13px]">arrow_upward</span>
                  <span>Overview</span>
                </button>
              </div>
            </div>

            {/* Strategic Alliance Expansion Card */}
            <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm space-y-3 google-animated-border">
              <h3 className="font-display text-base font-bold text-on-surface leading-snug">
                Cognizant and Google Cloud Expand Alliance to Accelerate Agentic Enterprise
                Transformation
              </h3>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-google-blue font-bold uppercase">
                      Frontier Capability Group
                    </span>
                  </div>
                  <p className="font-body text-xs text-on-surface italic leading-relaxed">
                    Initiative establishes new Gemini Frontier Capability Group, dedicating more
                    than <strong className="text-google-blue font-bold">18,000 engineers</strong> to
                    help drive AI adoption for global enterprises.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-google-green font-bold uppercase">
                      Milestone Completed
                    </span>
                  </div>
                  <p className="font-body text-xs text-on-surface italic leading-relaxed">
                    More than{' '}
                    <strong className="text-google-green font-bold">55,000 associates</strong>{' '}
                    completed Build with Gemini, the largest Gemini partner workshop held to date.
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Endorsement */}
            <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm google-animated-border">
              <div className="flex items-center gap-1.5 mb-1.5 text-[#D93025]">
                <span className="material-symbols-outlined text-[16px]">format_quote</span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-outline">
                  Executive Endorsement
                </span>
              </div>
              <p className="font-body text-xs text-on-surface leading-relaxed font-medium pl-2.5 border-l-2 border-primary/40">
                “Establishing our dedicated Gemini Frontier Capability Group lets our best frontier
                engineering talent focus entirely on getting frontier AI into production for
                clients,” -{' '}
                <span className="font-semibold text-on-surface">
                  Ravi Kumar S, CEO of Cognizant
                </span>
              </p>
            </div>

            {/* Talent Accelerator */}
            <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm space-y-2 google-animated-border">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-google-blue uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">badge</span>
                  TALENT ACCELERATOR
                </span>
                <span className="font-mono text-[11px] font-bold text-google-green bg-[#E6F4EA] px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-green animate-pulse"></span>
                  100K → 200K
                </span>
              </div>
              <p className="font-body text-xs text-on-surface leading-relaxed font-medium">
                Cognizant is deploying Gemini to 100,000 associates this year—scaling to
                200,000—while increasing platform certifications.
              </p>
              <div className="space-y-1">
                <div className="flex items-center justify-between font-mono text-[10px] text-on-surface-variant">
                  <span>100K Enrolled (50%)</span>
                  <span className="font-bold text-google-green">Target: 200K Active</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-google-blue to-google-green rounded-full w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Field Validation */}
            <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm space-y-1.5 google-animated-border">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-google-green uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  FIELD VALIDATION
                </span>
                <span className="font-mono text-[11px] font-bold text-google-blue bg-[#E8F0FE] px-2 py-0.5 rounded">
                  -35% Costs
                </span>
              </div>
              <p className="font-body text-xs text-on-surface leading-relaxed">
                <strong className="text-on-surface font-semibold">Early Proof point :</strong>{' '}
                Cognizant’s integration of Gemini AI across the software development lifecycle
                helped a retailer boost developer productivity by 40%, cut time-to-market by 30%,
                and save 35% in costs.
              </p>
            </div>
          </section>
        )}

        {/* ==================== PAGE 3: DELIVERY HIGHLIGHTS ==================== */}
        {activePage === 'delivery' && (
          <section id="mobile-pillar-delivery" className="space-y-3.5">
            {/* Section Header */}
            <div className="pb-2.5 border-b border-outline-variant/30 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-display text-xl font-bold text-on-surface tracking-tight">
                    Delivery Highlights
                  </h2>
                  <p className="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    Driving measurable business outcomes through delivery excellence
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage('landing')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-on-surface-variant border border-outline-variant/40 font-mono text-[10px] font-semibold shadow-sm shrink-0"
                >
                  <span className="material-symbols-outlined text-[13px]">arrow_upward</span>
                  <span>Overview</span>
                </button>
              </div>
            </div>

            {/* 1. Support Card */}
            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2.5 google-animated-border">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-google-blue/10 flex items-center justify-center text-google-blue shrink-0">
                    <span className="material-symbols-outlined text-[16px]">support_agent</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-on-surface">Support:</h4>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-on-surface leading-relaxed">
                <li className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <strong className="font-semibold text-on-surface">GCP Tech Support:</strong>{' '}
                  Driven by AI integration and operational rigor, SLS reached{' '}
                  <strong className="font-bold text-on-surface">97.1 for Apigee</strong> and
                  increased to{' '}
                  <strong className="font-bold text-on-surface">85.0 for CCaaS</strong> (previously
                  76.9) as of October 2026.
                </li>
                <li className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <strong className="font-semibold text-on-surface">GCP Billing Support:</strong>{' '}
                  AI-driven solution boosted productivity by{' '}
                  <strong className="font-bold text-on-surface">16.7%</strong> and reduced CPC by{' '}
                  <strong className="font-bold text-google-green">14%</strong>.
                </li>
                <li className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <strong className="font-semibold text-on-surface">
                    GWS Tech &amp; Billing Support:
                  </strong>{' '}
                  Enhanced AI integration drove a{' '}
                  <strong className="font-bold text-on-surface">16.3%</strong> gain in productivity
                  alongside a <strong className="font-bold text-secondary">6.6%</strong> reduction
                  in CPC.
                </li>
              </ul>
            </div>

            {/* 2. Hub Services & CDE COE Card */}
            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2.5 google-animated-border">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-google-green/10 flex items-center justify-center text-google-green shrink-0">
                    <span className="material-symbols-outlined text-[16px]">hub</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-on-surface">
                    Hub Services &amp; CDE COE
                  </h4>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-on-surface leading-relaxed">
                <li className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <strong className="font-semibold text-on-surface">Hub Services :</strong>{' '}
                  Delivered <strong className="font-bold text-google-blue">$2M OpEx savings</strong>
                  , supported <strong className="font-bold text-on-surface">$26B+ win TCV</strong>,
                  and achieved <strong className="font-bold text-google-green">99.3% C-SAT</strong>.
                </li>
                <li className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <strong className="font-semibold text-on-surface">CDE COE :</strong> Achieved{' '}
                  <strong className="font-bold text-google-green">$1.8M in 2026 savings</strong>{' '}
                  (exceeding the $1.67M target), cutting YoY run-rate by 26.26%.
                </li>
              </ul>
            </div>

            {/* 3. Partner Programs Card */}
            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2.5 google-animated-border">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-[#FEF7E0] flex items-center justify-center text-[#B06000] shrink-0">
                    <span className="material-symbols-outlined text-[16px]">storefront</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-on-surface">
                    Partner Programs:
                  </h4>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-on-surface leading-relaxed">
                <li className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <strong className="font-semibold text-on-surface">
                    ISV Scaled Partner Advisory:
                  </strong>{' '}
                  YTD S1+ pipeline grew by{' '}
                  <strong className="font-bold text-on-surface">over 20%</strong>, though S4 stands
                  at <strong className="font-bold text-on-surface">-2%</strong>; focus is on
                  reviewing 681 contracts expiring soon to secure renewals.
                </li>
                <li className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                  <strong className="font-semibold text-on-surface">
                    Sell &amp; Service Partner Advisory:
                  </strong>{' '}
                  Outperforming expectations, S4 has surpassed target levels by{' '}
                  <strong className="font-bold text-google-green">more than 5%</strong>, while the
                  S1+ pipeline remains{' '}
                  <strong className="font-bold text-on-surface">over 16% ahead</strong> of YTD
                  benchmarks..
                </li>
              </ul>
            </div>

            {/* 4. Right Column Callouts */}
            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2 google-animated-border">
              <h4 className="font-display text-sm font-bold text-on-surface">
                Value Delivered
              </h4>
              <p className="font-body text-xs text-on-surface leading-relaxed">
                AI-driven productivity allowed passing on billing savings: 14% for GCP Billing and
                ~7% for Workspace Tech.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2 google-animated-border">
              <h4 className="font-display text-sm font-bold text-on-surface">
                Executive Keynote
              </h4>
              <p className="font-body text-xs text-on-surface leading-relaxed">
                Created{' '}
                <strong className="font-bold text-on-surface">
                  18+ custom AI UI/UX and video demos
                </strong>{' '}
                in support of Thomas Kurian’s Mumbai Leaders Connect
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-outline-variant/40 p-4 shadow-sm space-y-2 google-animated-border">
              <h4 className="font-display text-sm font-bold text-on-surface">
                Partner Advisory
              </h4>
              <p className="font-body text-xs text-on-surface leading-relaxed">
                <strong className="font-bold text-on-surface">Partner Advisory:</strong> ISV S1+
                pipeline is up <strong className="font-bold text-on-surface">20%+ YTD</strong> (S4
                at -2%), while Sell &amp; Service S1+ is{' '}
                <strong className="font-bold text-on-surface">16%+ above YTD</strong> and S4 beats
                expectations by <strong className="font-bold text-on-surface">5%+</strong>.
              </p>
            </div>
          </section>
        )}
      </main>

      {/* 3. Fixed Mobile Bottom Navigation Tab Bar */}
      <nav
        id="mobile-bottom-nav"
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-outline-variant/50 shadow-[0_-2px_12px_rgba(0,0,0,0.06)] px-2 py-1.5"
      >
        <div className="max-w-md mx-auto grid grid-cols-5 gap-1">
          {MOBILE_NAV_ITEMS.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigatePage(item.page)}
                className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'bg-primary-container/70 text-google-blue font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[19px] leading-none">
                  {item.icon}
                </span>
                <span className="font-mono text-[9px] mt-0.5 truncate max-w-full">
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. Floating Collect Feedback Button (Positioned above Mobile Bottom Nav) */}
      <FeedbackWidget activePage={activePage} isMobile />

      {/* 5. Shared M3 Light Modals */}
      <ModalsContainer
        activeModal={activeModal}
        onCloseModal={onCloseModal}
        onOpenModal={onOpenModal}
        onNavigatePillar={onNavigatePillarFromModal}
      />
    </div>
  );
};
