import React from 'react';
import { PageRoute } from '../data/showcaseData';

interface LandingBackgroundConstellationProps {
  activePage: PageRoute;
}

/**
 * PARKED VERSION (v1 — Constellation, Dot-Matrix & Lateral Orbital Rings):
 * Preserved per user instruction ("park this version... it looks fine").
 * Can be previewed anytime via `?bg=constellation` in the URL.
 */
export const LandingBackgroundConstellation: React.FC<LandingBackgroundConstellationProps> = ({
  activePage,
}) => {
  const isLanding = activePage === 'landing';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      data-bg-variant="constellation"
    >
      {/* 1. Base Architectural Dot-Matrix Pattern on Left & Right Flanks */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLanding ? 'opacity-100' : 'opacity-45'
        }`}
      >
        <div className="absolute inset-y-0 left-0 w-[38vw] bg-google-dot-grid-left" />
        <div className="absolute inset-y-0 right-0 w-[38vw] bg-google-dot-grid-right" />
      </div>

      {/* 2. Soft Animated Google 4-Color Aurora Blooms on Left & Right */}
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] glow-radial-blue transition-opacity duration-700 ${
          isLanding ? 'opacity-100' : 'opacity-70'
        }`}
      />
      <div
        className={`absolute top-[8%] -left-24 w-[620px] h-[620px] rounded-full bg-orb-green animate-bg-orb-left transition-opacity duration-700 ${
          isLanding ? 'opacity-95' : 'opacity-50'
        }`}
      />
      <div
        className={`absolute bottom-[2%] -left-16 w-[580px] h-[580px] rounded-full bg-orb-yellow animate-bg-orb-right transition-opacity duration-700 ${
          isLanding ? 'opacity-95' : 'opacity-45'
        }`}
      />
      <div
        className={`absolute top-[8%] -right-24 w-[640px] h-[640px] rounded-full bg-orb-blue animate-bg-orb-right transition-opacity duration-700 ${
          isLanding ? 'opacity-95' : 'opacity-50'
        }`}
      />
      <div
        className={`absolute bottom-[2%] -right-16 w-[580px] h-[580px] rounded-full bg-orb-red animate-bg-orb-left transition-opacity duration-700 ${
          isLanding ? 'opacity-95' : 'opacity-45'
        }`}
      />

      {/* 3. Left & Right Animated Google Color Constellation Wings */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLanding ? 'opacity-100' : 'opacity-25'
        }`}
      >
        {/* Left Flank */}
        <div className="absolute inset-y-0 left-0 w-[34vw] max-w-[520px] flex items-center justify-start">
          <svg
            viewBox="0 0 460 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMinYMid slice"
          >
            <defs>
              <linearGradient id="parkedLeftRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.22" />
                <stop offset="50%" stopColor="#4285F4" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.20" />
              </linearGradient>
              <linearGradient id="parkedLeftFlow1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.05" />
                <stop offset="35%" stopColor="#34A853" stopOpacity="0.42" />
                <stop offset="70%" stopColor="#FBBC04" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#4285F4" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="parkedLeftFlow2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FBBC04" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#4285F4" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#34A853" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            <circle
              cx="-40"
              cy="450"
              r="340"
              stroke="url(#parkedLeftRibbon)"
              strokeWidth="1.5"
              strokeDasharray="8 10"
              className="animate-bg-spin-slow"
              style={{ transformOrigin: '-40px 450px' }}
            />
            <circle
              cx="-40"
              cy="450"
              r="250"
              stroke="#34A853"
              strokeOpacity="0.14"
              strokeWidth="1.2"
              className="animate-bg-ring-breathe"
              style={{ transformOrigin: '-40px 450px' }}
            />
            <circle
              cx="-40"
              cy="450"
              r="420"
              stroke="#FBBC04"
              strokeOpacity="0.15"
              strokeWidth="1.2"
              strokeDasharray="3 12"
            />

            <path
              d="M -20 110 C 180 200, 90 420, 270 465 C 400 500, 180 710, -10 810"
              stroke="url(#parkedLeftFlow1)"
              strokeWidth="2"
              strokeDasharray="14 10"
              className="animate-bg-wave-flow"
            />
            <path
              d="M -30 220 C 140 270, 230 370, 175 510 C 120 650, 240 730, 60 850"
              stroke="url(#parkedLeftFlow2)"
              strokeWidth="1.5"
              strokeDasharray="8 12"
              className="animate-bg-wave-flow-reverse"
            />

            <g className="animate-bg-float-slow" style={{ opacity: 0.75 }}>
              <line x1="68" y1="185" x2="165" y2="235" stroke="#34A853" strokeOpacity="0.22" strokeWidth="1.2" />
              <line x1="165" y1="235" x2="128" y2="330" stroke="#4285F4" strokeOpacity="0.20" strokeWidth="1.2" />
              <line x1="128" y1="330" x2="230" y2="365" stroke="#34A853" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="68" y1="185" x2="128" y2="330" stroke="#34A853" strokeOpacity="0.12" strokeWidth="1" />
              <circle cx="68" cy="185" r="5" fill="#34A853" fillOpacity="0.45" />
              <circle cx="68" cy="185" r="11" stroke="#34A853" strokeOpacity="0.25" strokeWidth="1.2" />
              <circle cx="165" cy="235" r="4.5" fill="#4285F4" fillOpacity="0.45" />
              <circle cx="165" cy="235" r="9" stroke="#4285F4" strokeOpacity="0.22" strokeWidth="1" />
              <circle cx="128" cy="330" r="4" fill="#34A853" fillOpacity="0.4" />
              <circle cx="230" cy="365" r="3.5" fill="#FBBC04" fillOpacity="0.55" />
            </g>

            <g className="animate-bg-float-delayed" style={{ opacity: 0.75 }}>
              <line x1="82" y1="590" x2="190" y2="555" stroke="#FBBC04" strokeOpacity="0.28" strokeWidth="1.2" />
              <line x1="190" y1="555" x2="150" y2="670" stroke="#EA4335" strokeOpacity="0.20" strokeWidth="1.2" />
              <line x1="150" y1="670" x2="70" y2="735" stroke="#4285F4" strokeOpacity="0.20" strokeWidth="1.2" />
              <line x1="82" y1="590" x2="150" y2="670" stroke="#FBBC04" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="82" cy="590" r="5" fill="#FBBC04" fillOpacity="0.55" />
              <circle cx="82" cy="590" r="11" stroke="#FBBC04" strokeOpacity="0.28" strokeWidth="1.2" />
              <circle cx="190" cy="555" r="4" fill="#34A853" fillOpacity="0.42" />
              <circle cx="150" cy="670" r="4.5" fill="#EA4335" fillOpacity="0.42" />
              <circle cx="150" cy="670" r="9.5" stroke="#EA4335" strokeOpacity="0.20" strokeWidth="1" />
              <circle cx="70" cy="735" r="4" fill="#4285F4" fillOpacity="0.42" />
            </g>

            <g className="animate-bg-ring-breathe" style={{ transformOrigin: '110px 455px' }}>
              <rect x="44" y="438" width="28" height="6" rx="3" fill="#4285F4" fillOpacity="0.28" />
              <rect x="80" y="438" width="16" height="6" rx="3" fill="#EA4335" fillOpacity="0.28" />
              <rect x="104" y="438" width="22" height="6" rx="3" fill="#FBBC04" fillOpacity="0.34" />
              <rect x="134" y="438" width="32" height="6" rx="3" fill="#34A853" fillOpacity="0.28" />
            </g>
          </svg>
        </div>

        {/* Right Flank */}
        <div className="absolute inset-y-0 right-0 w-[34vw] max-w-[520px] flex items-center justify-end">
          <svg
            viewBox="0 0 460 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMaxYMid slice"
          >
            <defs>
              <linearGradient id="parkedRightRibbon" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.24" />
                <stop offset="50%" stopColor="#EA4335" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.22" />
              </linearGradient>
              <linearGradient id="parkedRightFlow1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.05" />
                <stop offset="35%" stopColor="#4285F4" stopOpacity="0.44" />
                <stop offset="70%" stopColor="#EA4335" stopOpacity="0.40" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="parkedRightFlow2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#EA4335" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#34A853" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#4285F4" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            <circle
              cx="500"
              cy="450"
              r="340"
              stroke="url(#parkedRightRibbon)"
              strokeWidth="1.5"
              strokeDasharray="8 10"
              className="animate-bg-spin-reverse"
              style={{ transformOrigin: '500px 450px' }}
            />
            <circle
              cx="500"
              cy="450"
              r="250"
              stroke="#4285F4"
              strokeOpacity="0.15"
              strokeWidth="1.2"
              className="animate-bg-ring-breathe"
              style={{ transformOrigin: '500px 450px' }}
            />
            <circle
              cx="500"
              cy="450"
              r="420"
              stroke="#EA4335"
              strokeOpacity="0.14"
              strokeWidth="1.2"
              strokeDasharray="3 12"
            />

            <path
              d="M 480 110 C 280 200, 370 420, 190 465 C 60 500, 280 710, 470 810"
              stroke="url(#parkedRightFlow1)"
              strokeWidth="2"
              strokeDasharray="14 10"
              className="animate-bg-wave-flow"
            />
            <path
              d="M 490 220 C 320 270, 230 370, 285 510 C 340 650, 220 730, 400 850"
              stroke="url(#parkedRightFlow2)"
              strokeWidth="1.5"
              strokeDasharray="8 12"
              className="animate-bg-wave-flow-reverse"
            />

            <g className="animate-bg-float-delayed" style={{ opacity: 0.75 }}>
              <line x1="392" y1="185" x2="295" y2="235" stroke="#4285F4" strokeOpacity="0.24" strokeWidth="1.2" />
              <line x1="295" y1="235" x2="332" y2="330" stroke="#34A853" strokeOpacity="0.20" strokeWidth="1.2" />
              <line x1="332" y1="330" x2="230" y2="365" stroke="#4285F4" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="392" y1="185" x2="332" y2="330" stroke="#4285F4" strokeOpacity="0.12" strokeWidth="1" />
              <circle cx="392" cy="185" r="5" fill="#4285F4" fillOpacity="0.48" />
              <circle cx="392" cy="185" r="11" stroke="#4285F4" strokeOpacity="0.26" strokeWidth="1.2" />
              <circle cx="295" cy="235" r="4.5" fill="#34A853" fillOpacity="0.45" />
              <circle cx="295" cy="235" r="9" stroke="#34A853" strokeOpacity="0.22" strokeWidth="1" />
              <circle cx="332" cy="330" r="4" fill="#4285F4" fillOpacity="0.42" />
              <circle cx="230" cy="365" r="3.5" fill="#EA4335" fillOpacity="0.48" />
            </g>

            <g className="animate-bg-float-slow" style={{ opacity: 0.75 }}>
              <line x1="378" y1="590" x2="270" y2="555" stroke="#EA4335" strokeOpacity="0.24" strokeWidth="1.2" />
              <line x1="270" y1="555" x2="310" y2="670" stroke="#FBBC04" strokeOpacity="0.26" strokeWidth="1.2" />
              <line x1="310" y1="670" x2="390" y2="735" stroke="#4285F4" strokeOpacity="0.20" strokeWidth="1.2" />
              <line x1="378" y1="590" x2="310" y2="670" stroke="#EA4335" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="378" cy="590" r="5" fill="#EA4335" fillOpacity="0.48" />
              <circle cx="378" cy="590" r="11" stroke="#EA4335" strokeOpacity="0.24" strokeWidth="1.2" />
              <circle cx="270" cy="555" r="4" fill="#4285F4" fillOpacity="0.42" />
              <circle cx="310" cy="670" r="4.5" fill="#FBBC04" fillOpacity="0.52" />
              <circle cx="310" cy="670" r="9.5" stroke="#FBBC04" strokeOpacity="0.25" strokeWidth="1" />
              <circle cx="390" cy="735" r="4" fill="#34A853" fillOpacity="0.42" />
            </g>

            <g className="animate-bg-ring-breathe" style={{ transformOrigin: '350px 455px' }}>
              <rect x="294" y="438" width="32" height="6" rx="3" fill="#4285F4" fillOpacity="0.28" />
              <rect x="334" y="438" width="22" height="6" rx="3" fill="#EA4335" fillOpacity="0.28" />
              <rect x="364" y="438" width="16" height="6" rx="3" fill="#FBBC04" fillOpacity="0.34" />
              <rect x="388" y="438" width="28" height="6" rx="3" fill="#34A853" fillOpacity="0.28" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
