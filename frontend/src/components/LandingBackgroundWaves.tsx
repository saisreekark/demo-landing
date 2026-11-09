import React from 'react';
import { PageRoute } from '../data/showcaseData';

interface LandingBackgroundWavesProps {
  activePage: PageRoute;
}

/**
 * ACTIVE DEFAULT VERSION (v2 — Pure Google 4-Color Subtle Waves Pattern):
 * Clean, sweeping, long-wavelength sinusoidal silk wave ribbons and soft
 * component-style pastel wave washes (#E8F0FE Blue, #E6F4EA Green,
 * #FEF7E0 Yellow, #FCE8E6 Red) that gently undulate on the left and right
 * sides of the landing page and dissolve smoothly toward the center.
 */
export const LandingBackgroundWaves: React.FC<LandingBackgroundWavesProps> = ({
  activePage,
}) => {
  const isLanding = activePage === 'landing';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      data-bg-variant="waves"
    >
      {/* 1. Soft Ambient Google Pastel Wash behind Left & Right Flanks */}
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[540px] glow-radial-blue transition-opacity duration-700 ${
          isLanding ? 'opacity-80' : 'opacity-50'
        }`}
      />
      <div
        className={`absolute top-[6%] -left-28 w-[540px] h-[540px] rounded-full bg-orb-green animate-bg-orb-left transition-opacity duration-700 ${
          isLanding ? 'opacity-75' : 'opacity-35'
        }`}
      />
      <div
        className={`absolute bottom-[4%] -left-24 w-[520px] h-[520px] rounded-full bg-orb-yellow animate-bg-orb-right transition-opacity duration-700 ${
          isLanding ? 'opacity-75' : 'opacity-35'
        }`}
      />
      <div
        className={`absolute top-[6%] -right-28 w-[540px] h-[540px] rounded-full bg-orb-blue animate-bg-orb-right transition-opacity duration-700 ${
          isLanding ? 'opacity-75' : 'opacity-35'
        }`}
      />
      <div
        className={`absolute bottom-[4%] -right-24 w-[520px] h-[520px] rounded-full bg-orb-red animate-bg-orb-left transition-opacity duration-700 ${
          isLanding ? 'opacity-75' : 'opacity-35'
        }`}
      />

      {/* 2. Left & Right Sweeping Google 4-Color Silk Waves (Masked smoothly toward center) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLanding ? 'opacity-100' : 'opacity-25'
        }`}
      >
        {/* ================= LEFT FLANK SWEEPING GOOGLE WAVES ================= */}
        <div
          className="absolute inset-y-0 left-0 w-[38vw] max-w-[560px]"
          style={{
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 52%, rgba(0,0,0,0.25) 82%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 52%, rgba(0,0,0,0.25) 82%, transparent 100%)',
          }}
        >
          <svg
            viewBox="0 0 540 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Subtle Component-Like Pastel Wave Fills */}
              <linearGradient id="leftSilkFill1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.075" />
                <stop offset="45%" stopColor="#4285F4" stopOpacity="0.065" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.075" />
              </linearGradient>

              <linearGradient id="leftSilkFill2" x1="0%" y1="15%" x2="100%" y2="85%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.07" />
                <stop offset="50%" stopColor="#34A853" stopOpacity="0.065" />
                <stop offset="100%" stopColor="#EA4335" stopOpacity="0.055" />
              </linearGradient>

              <linearGradient id="leftSilkFill3" x1="0%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.06" />
                <stop offset="55%" stopColor="#FBBC04" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#4285F4" stopOpacity="0.055" />
              </linearGradient>

              {/* Delicate Google 4-Color Wave Crest Gradients */}
              <linearGradient id="leftSilkCrest1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.04" />
                <stop offset="25%" stopColor="#34A853" stopOpacity="0.24" />
                <stop offset="52%" stopColor="#4285F4" stopOpacity="0.22" />
                <stop offset="78%" stopColor="#FBBC04" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#EA4335" stopOpacity="0.04" />
              </linearGradient>

              <linearGradient id="leftSilkCrest2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.03" />
                <stop offset="30%" stopColor="#4285F4" stopOpacity="0.20" />
                <stop offset="60%" stopColor="#34A853" stopOpacity="0.20" />
                <stop offset="85%" stopColor="#FBBC04" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.03" />
              </linearGradient>

              <linearGradient id="leftSilkCrest3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.02" />
                <stop offset="35%" stopColor="#34A853" stopOpacity="0.16" />
                <stop offset="65%" stopColor="#EA4335" stopOpacity="0.15" />
                <stop offset="90%" stopColor="#4285F4" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#4285F4" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Broad Sweeping Silk Wave 1 (Outer Left) */}
            <g className="animate-wave-undulate-left">
              <path
                d="M -60 -80 L 310 -80 C 440 190, 175 470, 355 740 C 430 855, 340 970, 290 1080 L -60 1080 Z"
                fill="url(#leftSilkFill1)"
              />
              <path
                d="M 310 -80 C 440 190, 175 470, 355 740 C 430 855, 340 970, 290 1080"
                stroke="url(#leftSilkCrest1)"
                strokeWidth="1.6"
              />
              <path
                d="M 365 -80 C 495 195, 230 475, 410 745 C 485 860, 395 975, 345 1080"
                stroke="url(#leftSilkCrest2)"
                strokeWidth="1.2"
              />
              <path
                d="M 420 -80 C 545 200, 285 480, 460 750 C 530 865, 445 980, 395 1080"
                stroke="url(#leftSilkCrest3)"
                strokeWidth="1"
              />
            </g>

            {/* Counter-Phase Sweeping Silk Wave 2 (Mid Left) */}
            <g className="animate-wave-undulate-right">
              <path
                d="M -60 -80 L 240 -80 C 110 210, 370 490, 200 770 C 135 880, 215 985, 265 1080 L -60 1080 Z"
                fill="url(#leftSilkFill2)"
              />
              <path
                d="M 240 -80 C 110 210, 370 490, 200 770 C 135 880, 215 985, 265 1080"
                stroke="url(#leftSilkCrest2)"
                strokeWidth="1.5"
              />
              <path
                d="M 295 -80 C 165 215, 425 495, 255 775 C 190 885, 270 990, 320 1080"
                stroke="url(#leftSilkCrest3)"
                strokeWidth="1.15"
              />
            </g>

            {/* Gentle Inner Silk Wave 3 */}
            <g className="animate-wave-ribbon-sway">
              <path
                d="M -60 -80 L 145 -80 C 265 180, 80 460, 215 740 C 280 870, 160 975, 195 1080 L -60 1080 Z"
                fill="url(#leftSilkFill3)"
              />
              <path
                d="M 145 -80 C 265 180, 80 460, 215 740 C 280 870, 160 975, 195 1080"
                stroke="url(#leftSilkCrest3)"
                strokeWidth="1.3"
              />
            </g>
          </svg>
        </div>

        {/* ================= RIGHT FLANK SWEEPING GOOGLE WAVES ================= */}
        <div
          className="absolute inset-y-0 right-0 w-[38vw] max-w-[560px]"
          style={{
            maskImage:
              'linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 52%, rgba(0,0,0,0.25) 82%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 52%, rgba(0,0,0,0.25) 82%, transparent 100%)',
          }}
        >
          <svg
            viewBox="0 0 540 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Subtle Component-Like Pastel Wave Fills */}
              <linearGradient id="rightSilkFill1" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.075" />
                <stop offset="45%" stopColor="#EA4335" stopOpacity="0.065" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.075" />
              </linearGradient>

              <linearGradient id="rightSilkFill2" x1="100%" y1="15%" x2="0%" y2="85%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.065" />
                <stop offset="50%" stopColor="#4285F4" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#EA4335" stopOpacity="0.065" />
              </linearGradient>

              <linearGradient id="rightSilkFill3" x1="100%" y1="0%" x2="10%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.06" />
                <stop offset="55%" stopColor="#FBBC04" stopOpacity="0.065" />
                <stop offset="100%" stopColor="#34A853" stopOpacity="0.06" />
              </linearGradient>

              {/* Delicate Google 4-Color Wave Crest Gradients */}
              <linearGradient id="rightSilkCrest1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.04" />
                <stop offset="25%" stopColor="#4285F4" stopOpacity="0.25" />
                <stop offset="52%" stopColor="#34A853" stopOpacity="0.21" />
                <stop offset="78%" stopColor="#EA4335" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.04" />
              </linearGradient>

              <linearGradient id="rightSilkCrest2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0.03" />
                <stop offset="30%" stopColor="#4285F4" stopOpacity="0.20" />
                <stop offset="60%" stopColor="#FBBC04" stopOpacity="0.20" />
                <stop offset="85%" stopColor="#EA4335" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#EA4335" stopOpacity="0.03" />
              </linearGradient>

              <linearGradient id="rightSilkCrest3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" stopOpacity="0.02" />
                <stop offset="35%" stopColor="#34A853" stopOpacity="0.16" />
                <stop offset="65%" stopColor="#4285F4" stopOpacity="0.16" />
                <stop offset="90%" stopColor="#EA4335" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#FBBC04" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Broad Sweeping Silk Wave 1 (Outer Right) */}
            <g className="animate-wave-undulate-right">
              <path
                d="M 600 -80 L 230 -80 C 100 190, 365 470, 185 740 C 110 855, 200 970, 250 1080 L 600 1080 Z"
                fill="url(#rightSilkFill1)"
              />
              <path
                d="M 230 -80 C 100 190, 365 470, 185 740 C 110 855, 200 970, 250 1080"
                stroke="url(#rightSilkCrest1)"
                strokeWidth="1.6"
              />
              <path
                d="M 175 -80 C 45 195, 310 475, 130 745 C 55 860, 145 975, 195 1080"
                stroke="url(#rightSilkCrest2)"
                strokeWidth="1.2"
              />
              <path
                d="M 120 -80 C -5 200, 255 480, 80 750 C 10 865, 95 980, 145 1080"
                stroke="url(#rightSilkCrest3)"
                strokeWidth="1"
              />
            </g>

            {/* Counter-Phase Sweeping Silk Wave 2 (Mid Right) */}
            <g className="animate-wave-undulate-left">
              <path
                d="M 600 -80 L 300 -80 C 430 210, 170 490, 340 770 C 405 880, 325 985, 275 1080 L 600 1080 Z"
                fill="url(#rightSilkFill2)"
              />
              <path
                d="M 300 -80 C 430 210, 170 490, 340 770 C 405 880, 325 985, 275 1080"
                stroke="url(#rightSilkCrest2)"
                strokeWidth="1.5"
              />
              <path
                d="M 245 -80 C 375 215, 115 495, 285 775 C 350 885, 270 990, 220 1080"
                stroke="url(#rightSilkCrest3)"
                strokeWidth="1.15"
              />
            </g>

            {/* Gentle Inner Silk Wave 3 */}
            <g className="animate-wave-ribbon-sway-reverse">
              <path
                d="M 600 -80 L 395 -80 C 275 180, 460 460, 325 740 C 260 870, 380 975, 345 1080 L 600 1080 Z"
                fill="url(#rightSilkFill3)"
              />
              <path
                d="M 395 -80 C 275 180, 460 460, 325 740 C 260 870, 380 975, 345 1080"
                stroke="url(#rightSilkCrest3)"
                strokeWidth="1.3"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
