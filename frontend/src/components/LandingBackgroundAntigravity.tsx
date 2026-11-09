import React, { useEffect, useRef } from 'react';
import { PageRoute } from '../data/showcaseData';

interface LandingBackgroundAntigravityProps {
  activePage: PageRoute;
}

/**
 * Fast, self-contained 3D Simplex Noise implementation matching the GLSL `snoise(vec3)`
 * used in https://antigravity.google/ (`MainParticlesComponent`).
 */
const PERM = new Uint8Array(512);
const GRAD3 = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
];

(function initSimplex() {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  let seed = 1337;
  for (let i = 255; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = seed % (i + 1);
    const tmp = p[i];
    p[i] = p[j];
    p[j] = tmp;
  }
  for (let i = 0; i < 512; i++) {
    PERM[i] = p[i & 255];
  }
})();

function snoise3D(xin: number, yin: number, zin: number): number {
  const F3 = 1.0 / 3.0;
  const G3 = 1.0 / 6.0;
  const s = (xin + yin + zin) * F3;
  const i = Math.floor(xin + s);
  const j = Math.floor(yin + s);
  const k = Math.floor(zin + s);
  const t = (i + j + k) * G3;
  const X0 = i - t;
  const Y0 = j - t;
  const Z0 = k - t;
  const x0 = xin - X0;
  const y0 = yin - Y0;
  const z0 = zin - Z0;

  let i1 = 0, j1 = 0, k1 = 0;
  let i2 = 0, j2 = 0, k2 = 0;
  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
    } else if (x0 >= z0) {
      i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1;
    } else {
      i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1;
    }
  } else {
    if (y0 < z0) {
      i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1;
    } else if (x0 < z0) {
      i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1;
    } else {
      i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
    }
  }

  const x1 = x0 - i1 + G3;
  const y1 = y0 - j1 + G3;
  const z1 = z0 - k1 + G3;
  const x2 = x0 - i2 + 2.0 * G3;
  const y2 = y0 - j2 + 2.0 * G3;
  const z2 = z0 - k2 + 2.0 * G3;
  const x3 = x0 - 1.0 + 3.0 * G3;
  const y3 = y0 - 1.0 + 3.0 * G3;
  const z3 = z0 - 1.0 + 3.0 * G3;

  const ii = i & 255;
  const jj = j & 255;
  const kk = k & 255;
  const gi0 = PERM[ii + PERM[jj + PERM[kk]]] % 12;
  const gi1 = PERM[ii + i1 + PERM[jj + j1 + PERM[kk + k1]]] % 12;
  const gi2 = PERM[ii + i2 + PERM[jj + j2 + PERM[kk + k2]]] % 12;
  const gi3 = PERM[ii + 1 + PERM[jj + 1 + PERM[kk + 1]]] % 12;

  let n0 = 0, n1 = 0, n2 = 0, n3 = 0;
  let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
  if (t0 > 0) {
    t0 *= t0;
    n0 = t0 * t0 * (GRAD3[gi0][0] * x0 + GRAD3[gi0][1] * y0 + GRAD3[gi0][2] * z0);
  }
  let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
  if (t1 > 0) {
    t1 *= t1;
    n1 = t1 * t1 * (GRAD3[gi1][0] * x1 + GRAD3[gi1][1] * y1 + GRAD3[gi1][2] * z1);
  }
  let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
  if (t2 > 0) {
    t2 *= t2;
    n2 = t2 * t2 * (GRAD3[gi2][0] * x2 + GRAD3[gi2][1] * y2 + GRAD3[gi2][2] * z2);
  }
  let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
  if (t3 > 0) {
    t3 *= t3;
    n3 = t3 * t3 * (GRAD3[gi3][0] * x3 + GRAD3[gi3][1] * y3 + GRAD3[gi3][2] * z3);
  }

  return 32.0 * (n0 + n1 + n2 + n3);
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function mix(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

interface Particle {
  refX: number; // normalized [-1..1]
  refY: number; // normalized [-1..1]
  posX: number; // current displacement offset X
  posY: number; // current displacement offset Y
  scale: number;
  velocity: number;
}

/**
 * Generates an organic Poisson-like jittered distribution of points in [-1..1] x [-1..1]
 * matching the 500x500 Poisson point cloud in https://antigravity.google/.
 */
function createParticleCloud(cols: number, rows: number): Particle[] {
  const particles: Particle[] = [];
  let seed = 4242;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const cellW = 2.0 / cols;
  const cellH = 2.0 / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const jx = (rand() - 0.5) * cellW * 0.88;
      const jy = (rand() - 0.5) * cellH * 0.88;
      const refX = -1.0 + (c + 0.5) * cellW + jx;
      const refY = -1.0 + (r + 0.5) * cellH + jy;
      particles.push({
        refX,
        refY,
        posX: 0,
        posY: 0,
        scale: 0.15,
        velocity: 0,
      });
    }
  }
  return particles;
}

// Exact Google synth-gradient palette from https://antigravity.google/ light theme + Google Green
const COLOR_BLUE = [44, 100, 237];   // #2c64ed (antigravity.google color1)
const COLOR_RED = [248, 66, 66];     // #f84242 (antigravity.google color2)
const COLOR_YELLOW = [255, 207, 3];  // #ffcf03 (antigravity.google color3)
const COLOR_GREEN = [52, 168, 83];   // #34a853 (Google Green)

function sampleGoogleSynthColor(progress: number, velocity: number): string {
  // Smooth 4-stop Google synth gradient interpolation (Blue -> Red -> Yellow -> Green -> Blue)
  const p = Math.max(0, Math.min(1, progress));
  let r: number, g: number, b: number;

  if (p < 0.36) {
    const t = p / 0.36;
    r = mix(COLOR_BLUE[0], COLOR_RED[0], t);
    g = mix(COLOR_BLUE[1], COLOR_RED[1], t);
    b = mix(COLOR_BLUE[2], COLOR_RED[2], t);
  } else if (p < 0.68) {
    const t = (p - 0.36) / 0.32;
    r = mix(COLOR_RED[0], COLOR_YELLOW[0], t);
    g = mix(COLOR_RED[1], COLOR_YELLOW[1], t);
    b = mix(COLOR_RED[2], COLOR_YELLOW[2], t);
  } else {
    const t = (p - 0.68) / 0.32;
    r = mix(COLOR_YELLOW[0], COLOR_GREEN[0], t);
    g = mix(COLOR_YELLOW[1], COLOR_GREEN[1], t);
    b = mix(COLOR_YELLOW[2], COLOR_GREEN[2], t);
  }

  // Light theme velocity shading from antigravity.google fragment shader
  const velFactor = 0.82 + 0.18 * Math.max(0, Math.min(1, velocity));
  return `rgb(${Math.round(r * velFactor)}, ${Math.round(g * velFactor)}, ${Math.round(b * velFactor)})`;
}

/**
 * ACTIVE DEFAULT BACKGROUND (`antigravity.google` Synth-Gradient & Morphing Particle Wave Field):
 * Replicates the https://antigravity.google/ hero background animation:
 * 1. Borderless, line-free Google 4-color synth gradient mesh softly illuminating the left and right flanks.
 * 2. Interactive Simplex-noise morphing capsule particle wave ring (`MainParticlesComponent` shader math)
 *    in Google's 4 colors (#2c64ed, #f84242, #ffcf03, #34a853) that ripples around the central constellation
 *    and responds smoothly to pointer movement.
 */
export const LandingBackgroundAntigravity: React.FC<LandingBackgroundAntigravityProps> = ({
  activePage,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isLanding = activePage === 'landing';

  useEffect(() => {
    if (!isLanding) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resize();

    const particles = createParticleCloud(46, 30); // 1,380 organic Poisson-like particles

    // Ring state matching MainParticlesComponent in https://antigravity.google/
    const ringPos = { x: 0, y: 0 };
    const cursorTarget = { x: 0, y: 0 };
    let isPointerActive = false;
    let lastPointerTime = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / Math.max(1, width)) * 2 - 1;
      const ny = (e.clientY / Math.max(1, height)) * 2 - 1;
      cursorTarget.x = nx * 0.55;
      cursorTarget.y = ny * 0.45;
      isPointerActive = true;
      lastPointerTime = performance.now();
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const startTime = performance.now();

    const render = (now: number) => {
      const uTime = (now - startTime) * 0.001;
      const simTime = uTime * 0.5;

      // Reset pointer activity after 2.5s of idle so it drifts organically via Simplex noise
      if (isPointerActive && now - lastPointerTime > 2500) {
        isPointerActive = false;
      }

      const idleNoiseX = snoise3D(uTime * 0.35, 94.234, 12.1) * 0.16;
      const idleNoiseY = snoise3D(21.028, uTime * 0.42, 45.7) * 0.1;

      if (isPointerActive) {
        const tx = cursorTarget.x + idleNoiseX * 0.35;
        const ty = cursorTarget.y + idleNoiseY * 0.35;
        ringPos.x += (tx - ringPos.x) * 0.035;
        ringPos.y += (ty - ringPos.y) * 0.035;
      } else {
        ringPos.x += (idleNoiseX - ringPos.x) * 0.018;
        ringPos.y += (idleNoiseY - ringPos.y) * 0.018;
      }

      // Ring parameters tuned so the halo frames the 700px Constellation Circle and fills left & right flanks
      const aspect = width / Math.max(1, height);
      const uRingRadius =
        0.52 + Math.sin(uTime * 1.0) * 0.045 + Math.cos(uTime * 2.4) * 0.025;
      const uRingWidth = 0.14;
      const uRingWidth2 = 0.24;
      const uRingDisplacement = 0.38;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const halfW = width * 0.5;
      const halfH = height * 0.5;
      const baseParticleScale = Math.max(0.75, Math.min(1.25, width / 1440));

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const rx = p.refX;
        const ry = p.refY;

        // Aspect-aware distance from ring center so the wave ring forms a true harmonic halo
        const dxRing = (rx - ringPos.x) * (aspect > 1 ? 1.0 : aspect);
        const dyRing = (ry - ringPos.y) / (aspect > 1 ? Math.min(1.35, aspect * 0.82) : 1.0);
        const dist = Math.hypot(dxRing, dyRing);

        const noise0 = snoise3D(rx * 0.4 + 18.49, ry * 0.4 + 72.97, simTime * 0.5);
        const dist1 = Math.hypot(
          dxRing + noise0 * 0.015,
          dyRing + noise0 * 0.015
        );

        let t =
          smoothstep(uRingRadius - uRingWidth * 2.0, uRingRadius, dist) -
          smoothstep(uRingRadius, uRingRadius + uRingWidth, dist1);
        let t2 =
          smoothstep(uRingRadius - uRingWidth2 * 2.0, uRingRadius, dist) -
          smoothstep(uRingRadius, uRingRadius + uRingWidth2, dist1);
        const t3 = smoothstep(uRingRadius + uRingWidth2, uRingRadius, dist);

        t = t * t;
        t2 = t2 * t2 * t2;

        t += t2 * 2.6;
        t += t3 * 0.32;

        const nS = snoise3D(rx * 2.0 + 18.49, ry * 2.0 + 72.97, simTime * 0.5);
        t += Math.pow((nS + 1.5) * 0.5, 2.0) * 0.52;

        // Mid-scale & close-scale Simplex noise displacement from MainParticlesComponent
        const noise1 = snoise3D(rx * 3.2 + 88.49, ry * 3.2 + 32.44, simTime * 0.35);
        const noise2 = snoise3D(rx * 3.2 + 50.9, ry * 3.2 + 120.95, simTime * 0.35);

        let dispX = noise1 * 0.025;
        let dispY = noise2 * 0.025;

        // Sinusoidal wave ripple from MainParticlesComponent
        const clampedDist = Math.min(1.0, dist);
        dispX += Math.sin(rx * 16.0 + simTime * 4.0) * 0.016 * clampedDist;
        dispY += Math.cos(ry * 16.0 + simTime * 3.0) * 0.016 * clampedDist;

        p.posX *= 0.8;
        p.posY *= 0.8;

        const pushFactor = Math.pow(Math.max(0, t2), 0.75) * uRingDisplacement;
        p.posX -= (ringPos.x - (rx + dispX)) * pushFactor;
        p.posY -= (ringPos.y - (ry + dispY)) * pushFactor;

        const finalX = rx + dispX + p.posX * 0.25;
        const finalY = ry + dispY + p.posY * 0.25;

        p.scale += (t - p.scale) * 0.2;
        p.velocity = p.velocity * 0.5 + p.scale * 0.25;

        // Screen coordinates
        const sx = halfW + finalX * halfW;
        const sy = halfH + finalY * halfH;
        if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

        // Softly attenuate particles behind the 700px Constellation Circle, Top Headline, and Bottom CTAs
        // so typography and interactive cards stay 100% crisp while left & right flanks shine
        const centerDistPx = Math.hypot(sx - halfW, sy - (halfH + 22));
        const circleMask = isLanding ? smoothstep(310, 395, centerDistPx) : 1.0;

        // Headline & subtitle clear-zone mask
        const dxHeadline = Math.abs(sx - halfW);
        const inHeadlineY = sy > 55 && sy < 235;
        const headlineMask =
          isLanding && inHeadlineY ? smoothstep(280, 490, dxHeadline) : 1.0;

        // Bottom CTA clear-zone mask
        const inCtaY = sy > height - 95;
        const ctaMask =
          isLanding && inCtaY ? smoothstep(260, 460, dxHeadline) : 1.0;

        const combinedMask = Math.min(circleMask, headlineMask, ctaMask);

        const alpha =
          smoothstep(0.12, 0.30, p.scale) *
          combinedMask *
          (isLanding ? 0.72 : 0.32);

        if (alpha < 0.015) continue;

        // Capsule orientation from MainParticlesComponent fragment shader:
        // angle = atan(vLocalPos.y - uRingPos.y, vLocalPos.x - uRingPos.x) - noiseAngle * 0.5
        const noiseAngle = snoise3D(finalX * 6.0 + 18.49, finalY * 6.0 + 72.97, uTime * 0.65);
        const angle =
          Math.atan2(finalY - ringPos.y, finalX - ringPos.x) + noiseAngle * 0.45;

        // Synth-gradient color from MainParticlesComponent fragment shader:
        const noiseColor =
          (snoise3D(finalX * 1.8 + 74.66, finalY * 1.8 + 91.56, uTime * 0.45) + 1.0) * 0.5;
        const colorProgress = smoothstep(0.0, 0.82, Math.pow(noiseColor, 1.65));

        const pillLength = Math.max(2.2, Math.min(6.4, p.scale * 4.2 * baseParticleScale));
        const pillThickness = Math.max(1.1, pillLength * 0.42);

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(angle);
        ctx.globalAlpha = Math.min(0.78, alpha);
        ctx.fillStyle = sampleGoogleSynthColor(colorProgress, p.velocity);

        ctx.beginPath();
        const rPill = pillThickness * 0.5;
        ctx.roundRect(-pillLength * 0.5, -pillThickness * 0.5, pillLength, pillThickness, rPill);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isLanding]);

  if (!isLanding) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      data-bg-variant="antigravity"
    >
      {/* Interactive Antigravity.google Morphing Particle Wave Canvas ONLY (no synth background haze) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
