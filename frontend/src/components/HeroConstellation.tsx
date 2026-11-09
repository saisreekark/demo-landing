import React from 'react';
import { HERO_DATA, ModalId, QuadrantKey, ViewMode } from '../data/showcaseData';
import { resolveBackgroundVariant } from './LandingBackgroundPattern';

interface HeroConstellationProps {
  viewMode: ViewMode;
  activeQuadrant: QuadrantKey;
  onSelectQuadrant: (q: QuadrantKey) => void;
  onCycleQuadrant: (delta: number) => void;
  onOpenModal: (id: ModalId) => void;
}

export const HeroConstellation: React.FC<HeroConstellationProps> = ({
  activeQuadrant,
  onSelectQuadrant,
  onOpenModal,
}) => {
  const bgVariant = resolveBackgroundVariant();

  return (
    <section
      className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center text-center w-full py-2"
      id="overview"
    >
      {/* Top Headline Block */}
      <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-on-surface max-w-5xl leading-[1.15]">
        {HERO_DATA.headlinePrefix}
        <span className="bg-gradient-to-r from-google-blue via-primary to-google-green bg-clip-text text-transparent">
          {HERO_DATA.headlineGradient}
        </span>
      </h1>
      <p className="font-body text-xs sm:text-sm lg:text-base text-on-surface-variant max-w-3xl mt-2 leading-relaxed">
        {HERO_DATA.subtitle}
      </p>

      {/* EXPANSIVE RE-ARCHITECTED 4-WAY DIAMOND CONSTELLATION - M3 LIGHT */}
      <div
        className="relative w-full max-w-7xl flex flex-col items-center justify-center select-none my-4"
        id="radar-dial-section"
      >
        {bgVariant === 'constellation' && (
          /* Parked v1: Subtle Flanking Google 4-Color Orbital Resonance Wings (?bg=constellation) */
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute inset-0 w-full h-[700px] pointer-events-none z-0 overflow-visible
            "
          >
            <defs>
              <linearGradient id="wingLeftArc1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.04" />
                <stop offset="28%" stopColor="#34A853" stopOpacity="0.38" />
                <stop offset="50%" stopColor="#4285F4" stopOpacity="0.28" />
                <stop offset="72%" stopColor="#FBBC04" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient id="wingLeftArc2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.03" />
                <stop offset="35%" stopColor="#34A853" stopOpacity="0.26" />
                <stop offset="65%" stopColor="#FBBC04" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#EA4335" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="wingRightArc1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.04" />
                <stop offset="28%" stopColor="#4285F4" stopOpacity="0.40" />
                <stop offset="50%" stopColor="#34A853" stopOpacity="0.28" />
                <stop offset="72%" stopColor="#EA4335" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#EA4335" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient id="wingRightArc2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.03" />
                <stop offset="35%" stopColor="#4285F4" stopOpacity="0.26" />
                <stop offset="65%" stopColor="#EA4335" stopOpacity="0.26" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.03" />
              </linearGradient>
            </defs>

            <path
              d="M 288 106 A 396 396 0 0 0 288 594"
              stroke="url(#wingLeftArc1)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-bg-ring-breathe"
              style={{ transformOrigin: '600px 350px' }}
            />
            <path
              d="M 238 86 A 448 448 0 0 0 238 614"
              stroke="url(#wingLeftArc1)"
              strokeWidth="1.75"
              strokeDasharray="10 10"
              strokeLinecap="round"
              className="animate-bg-wave-flow"
            />
            <path
              d="M 182 72 A 502 502 0 0 0 182 628"
              stroke="url(#wingLeftArc2)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 122 82 A 556 556 0 0 0 122 618"
              stroke="url(#wingLeftArc2)"
              strokeWidth="1.25"
              strokeDasharray="4 12"
              strokeLinecap="round"
              className="animate-bg-wave-flow-reverse"
            />

            <line
              x1="28"
              y1="350"
              x2="225"
              y2="350"
              stroke="#34A853"
              strokeOpacity="0.22"
              strokeWidth="1.25"
              strokeDasharray="6 8"
              className="animate-bg-wave-flow"
            />
            <line
              x1="78"
              y1="215"
              x2="220"
              y2="255"
              stroke="#34A853"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
            <line
              x1="78"
              y1="485"
              x2="220"
              y2="445"
              stroke="#FBBC04"
              strokeOpacity="0.22"
              strokeWidth="1"
            />

            <g className="animate-bg-float-slow">
              <circle cx="204" cy="212" r="5" fill="#34A853" fillOpacity="0.65" />
              <circle cx="204" cy="212" r="12" stroke="#34A853" strokeOpacity="0.28" strokeWidth="1.2" />
              <circle cx="102" cy="292" r="4" fill="#4285F4" fillOpacity="0.55" />
              <circle cx="102" cy="292" r="9" stroke="#4285F4" strokeOpacity="0.22" strokeWidth="1" />
            </g>
            <g className="animate-bg-float-delayed">
              <circle cx="152" cy="350" r="5.5" fill="#34A853" fillOpacity="0.55" />
              <circle cx="152" cy="350" r="13" stroke="#4285F4" strokeOpacity="0.24" strokeWidth="1.2" />
              <circle cx="204" cy="488" r="5" fill="#FBBC04" fillOpacity="0.72" />
              <circle cx="204" cy="488" r="12" stroke="#FBBC04" strokeOpacity="0.32" strokeWidth="1.2" />
              <circle cx="96" cy="422" r="4" fill="#EA4335" fillOpacity="0.52" />
            </g>

            <path
              d="M 912 106 A 396 396 0 0 1 912 594"
              stroke="url(#wingRightArc1)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-bg-ring-breathe"
              style={{ transformOrigin: '600px 350px' }}
            />
            <path
              d="M 962 86 A 448 448 0 0 1 962 614"
              stroke="url(#wingRightArc1)"
              strokeWidth="1.75"
              strokeDasharray="10 10"
              strokeLinecap="round"
              className="animate-bg-wave-flow-reverse"
            />
            <path
              d="M 1018 72 A 502 502 0 0 1 1018 628"
              stroke="url(#wingRightArc2)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 1078 82 A 556 556 0 0 1 1078 618"
              stroke="url(#wingRightArc2)"
              strokeWidth="1.25"
              strokeDasharray="4 12"
              strokeLinecap="round"
              className="animate-bg-wave-flow"
            />

            <line
              x1="975"
              y1="350"
              x2="1172"
              y2="350"
              stroke="#4285F4"
              strokeOpacity="0.22"
              strokeWidth="1.25"
              strokeDasharray="6 8"
              className="animate-bg-wave-flow-reverse"
            />
            <line
              x1="980"
              y1="255"
              x2="1122"
              y2="215"
              stroke="#4285F4"
              strokeOpacity="0.20"
              strokeWidth="1"
            />
            <line
              x1="980"
              y1="445"
              x2="1122"
              y2="485"
              stroke="#EA4335"
              strokeOpacity="0.20"
              strokeWidth="1"
            />

            <g className="animate-bg-float-delayed">
              <circle cx="996" cy="212" r="5" fill="#4285F4" fillOpacity="0.65" />
              <circle cx="996" cy="212" r="12" stroke="#4285F4" strokeOpacity="0.28" strokeWidth="1.2" />
              <circle cx="1098" cy="292" r="4" fill="#34A853" fillOpacity="0.55" />
              <circle cx="1098" cy="292" r="9" stroke="#34A853" strokeOpacity="0.22" strokeWidth="1" />
            </g>
            <g className="animate-bg-float-slow">
              <circle cx="1048" cy="350" r="5.5" fill="#4285F4" fillOpacity="0.55" />
              <circle cx="1048" cy="350" r="13" stroke="#EA4335" strokeOpacity="0.24" strokeWidth="1.2" />
              <circle cx="996" cy="488" r="5" fill="#EA4335" fillOpacity="0.62" />
              <circle cx="996" cy="488" r="12" stroke="#EA4335" strokeOpacity="0.28" strokeWidth="1.2" />
              <circle cx="1104" cy="422" r="4" fill="#FBBC04" fillOpacity="0.65" />
            </g>
          </svg>
        )}

        <div className="relative z-10 w-[700px] h-[700px] flex items-center justify-center">
          {/* Outer decorative rings */}
          <div className="absolute inset-0 rounded-full border-2 border-outline-variant/60 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] pointer-events-none"></div>
          <div className="absolute -inset-6 rounded-full border border-outline-variant/40 border-dashed pointer-events-none"></div>
          <div className="absolute inset-6 rounded-full border border-outline-variant/50 pointer-events-none"></div>

          {/* Rotating Orbit Dots */}
          <div className="absolute inset-0 pointer-events-none animate-orbit-clockwise z-10">
            <div className="absolute -top-3.5 left-1/3 w-6 h-6 rounded-full bg-[#FBBC05]/40 blur-md animate-pulse-dot-1"></div>
            <div className="absolute -top-3.5 left-1/3 w-3 h-3 rounded-full bg-[#FBBC05] shadow-[0_0_8px_#FBBC05]"></div>
            <div className="absolute top-1/4 -right-3.5 w-7 h-7 rounded-full bg-google-blue/40 blur-md animate-pulse-dot-2"></div>
            <div className="absolute top-1/4 -right-3.5 w-3 h-3 rounded-full bg-google-blue shadow-[0_0_8px_#1A73E8]"></div>
            <div className="absolute bottom-1/4 -left-3.5 w-7 h-7 rounded-full bg-[#EA4335]/40 blur-md animate-pulse-dot-3"></div>
            <div className="absolute bottom-1/4 -left-3.5 w-3 h-3 rounded-full bg-[#EA4335] shadow-[0_0_8px_#EA4335]"></div>
            <div className="absolute -bottom-3.5 right-1/3 w-7 h-7 rounded-full bg-google-green/40 blur-md animate-pulse-dot-4"></div>
            <div className="absolute -bottom-3.5 right-1/3 w-3 h-3 rounded-full bg-google-green shadow-[0_0_8px_#34A853]"></div>
          </div>

          {/* 4-Quadrant Dial Circle */}
          <div className="relative w-full h-full rounded-full border-2 border-outline-variant/60 bg-white shadow-2xl overflow-hidden grid grid-cols-2 grid-rows-2">
            {/* Animated 4-Color Crosshair Dividers */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 z-10 pointer-events-none shadow-[0_0_8px_rgba(66,133,244,0.3)] animated-axis-y"></div>
            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 z-10 pointer-events-none shadow-[0_0_8px_rgba(66,133,244,0.3)] animated-axis-x"></div>

            {/* Top-Left Quadrant: 2027 Priority */}
            <div
              className={`p-6 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-google-green/5 border-r border-b border-outline-variant/50 dial-quadrant-card group ${
                activeQuadrant === 'future' ? 'bg-google-green/10' : ''
              }`}
              id="quadrant-future"
              onClick={() => onSelectQuadrant('future')}
            >
              <div className="w-full h-full flex flex-col justify-center items-center text-center pt-10 pl-10 pr-6 pb-6 relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface group-hover:text-google-green transition-colors leading-tight mb-1.5">
                  2027 Priority
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant font-medium max-w-[200px] leading-relaxed">
                  Moving towards autonomous workflows
                </p>
              </div>
            </div>

            {/* Top-Right Quadrant: Transformation */}
            <div
              className={`p-6 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-google-blue/5 border-l border-b border-outline-variant/50 dial-quadrant-card group ${
                activeQuadrant === 'transformation' ? 'bg-google-blue/10' : ''
              }`}
              id="quadrant-transformation"
              onClick={() => onSelectQuadrant('transformation')}
            >
              <div className="w-full h-full flex flex-col justify-center items-center text-center pt-10 pr-10 pl-6 pb-6 relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface group-hover:text-google-blue transition-colors leading-tight mb-1.5">
                  Transformation
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant font-medium max-w-[200px] leading-relaxed">
                  Scaling Agentic solutions across cloud
                </p>
              </div>
            </div>

            {/* Bottom-Left Quadrant: Delivery */}
            <div
              className={`p-6 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-google-yellow/5 border-r border-t border-outline-variant/50 dial-quadrant-card group ${
                activeQuadrant === 'delivery' ? 'bg-google-yellow/10' : ''
              }`}
              id="quadrant-delivery"
              onClick={() => onSelectQuadrant('delivery')}
            >
              <div className="w-full h-full flex flex-col justify-center items-center text-center pb-10 pl-10 pr-6 pt-6 relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface group-hover:text-[#B06000] transition-colors leading-tight mb-1.5">
                  Delivery
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant font-medium max-w-[200px] leading-relaxed">
                  A quarter of exceptional delivery
                </p>
              </div>
            </div>

            {/* Bottom-Right Quadrant: Partnership */}
            <div
              className={`p-6 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-[#FCE8E6] border-l border-t border-outline-variant/50 dial-quadrant-card group ${
                activeQuadrant === 'partnership' ? 'bg-[#FCE8E6]' : ''
              }`}
              id="quadrant-partnership"
              onClick={() => onSelectQuadrant('partnership')}
            >
              <div className="w-full h-full flex flex-col justify-center items-center text-center pb-10 pr-10 pl-6 pt-6 relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface group-hover:text-[#D93025] transition-colors leading-tight mb-1.5">
                  Partnership
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant font-medium max-w-[200px] leading-relaxed">
                  Combining strengths, scaling impact
                </p>
              </div>
            </div>
          </div>

          {/* Center Revolving Google Cloud Hub Disc (Static / No Click Popup) */}
          <div
            className="z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center p-3 pointer-events-none select-none hub-revolving-border"
            id="hub-center-disc"
          >
            <div className="relative flex flex-col items-center justify-center z-10">
              <div className="flex items-center justify-center w-20 h-14 mb-0.5">
                <img
                  alt="Google Cloud"
                  className="max-w-full max-h-full object-contain select-none pointer-events-none"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw9N14J_XlY9MHzwdTFKRAAZuK4C9-FrdK6n39On4n5vwmmXXAle47gcqm51ocxQH09FpaKDk5iICMP5zI8nnJppnnPXhYeJl6lXcQMHGR9yttrB7nkh-Wc9U5EkCZLingNt28JBVFhu1fT_84MR4d4tdRvUVMAsvXxY8n7WdwviY_8CIe63gAkPUujZqHmJLN-bRuuzXIcc9IJOKvJPtcvNvYvnaLn5LkMs7d0tHQK-z99cxV-wCiSg"
                />
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse-dot-1 shadow-[0_0_6px_#1A73E8]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335] animate-pulse-dot-2 shadow-[0_0_6px_#EA4335]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05] animate-pulse-dot-3 shadow-[0_0_6px_#FBBC05]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-google-green animate-pulse-dot-4 shadow-[0_0_6px_#34A853]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 2 ELEVATED CALLOUT CTAs BELOW THE CIRCLE (Slide 6 & Slide 7 Direct Popups) */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 text-left relative z-20 mt-1">
        {/* CTA 1: Autonomous POV (Slide 6 Popup) */}
        <button
          type="button"
          className="py-3 px-4 rounded-xl flex items-center justify-between group cursor-pointer text-left bg-white/95 backdrop-blur-sm hover:bg-surface-container-low border border-outline-variant/50 hover:border-secondary/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          onClick={() => onOpenModal('modal-autonomous')}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-[#E6F4EA] border border-secondary/30 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-[18px]">
                route
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0"></span>
                <span className="font-display text-xs sm:text-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
                  Click here to know about our autonomous POV
                </span>
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined text-[16px] text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2">
            north_east
          </span>
        </button>

        {/* CTA 2: Prioritization Framework for AI Solutions (Slide 7 Popup) */}
        <button
          type="button"
          className="py-3 px-4 rounded-xl flex items-center justify-between group cursor-pointer text-left bg-white/95 backdrop-blur-sm hover:bg-surface-container-low border border-outline-variant/50 hover:border-primary/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          onClick={() => onOpenModal('modal-prioritization-framework')}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-primary-container/40 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-[18px]">
                analytics
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0"></span>
                <span className="font-display text-xs sm:text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                  Want to know more prioritization framework for AI solutions
                </span>
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2">
            north_east
          </span>
        </button>
      </div>
    </section>
  );
};
