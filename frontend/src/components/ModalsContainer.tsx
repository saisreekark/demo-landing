import React, { useState } from 'react';
import { AUTONOMY_TIERS, ModalId } from '../data/showcaseData';

interface ModalsContainerProps {
  activeModal: ModalId;
  onCloseModal: () => void;
  onOpenModal: (id: ModalId) => void;
  onNavigatePillar: (sectionId: string) => void;
}

export const ModalsContainer: React.FC<ModalsContainerProps> = ({
  activeModal,
  onCloseModal,
  onOpenModal,
  onNavigatePillar,
}) => {
  const [autonomyTier, setAutonomyTier] = useState<1 | 2 | 3>(3);
  const [consultationConfirmed, setConsultationConfirmed] = useState(false);

  if (!activeModal) return null;

  const activeTierData = AUTONOMY_TIERS[autonomyTier];

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <>
      {/* 1. Central Diamond Executive Ecosystem Modal */}
      {activeModal === 'modal-ecosystem' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-3xl bg-white rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl border border-outline-variant/60 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-container text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">hub</span>
                </div>
                <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                  Executive Alliance Ecosystem Hub
                </span>
              </div>
              <button
                type="button"
                className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={onCloseModal}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div>
              <h3 className="font-display text-2xl text-on-surface font-bold">
                Connected Intelligence • Scalable Innovation • Autonomous Enterprise
              </h3>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                The complete 4-pillar architectural foundation uniting Google Cloud and Cognizant
                across Global Fortune 500 digital transformations. Quick-launch any dedicated pillar
                environment below:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div
                className="p-4 rounded-2xl bg-surface-container-low border border-google-blue/30 hover:border-google-blue hover:bg-white transition-all cursor-pointer group shadow-sm"
                onClick={() => onNavigatePillar('pillar-transformation')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-google-blue font-bold">PILLAR 01: TRANSFORMATION</span>
                  <span className="material-symbols-outlined text-[16px] text-google-blue group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <h4 className="font-display text-sm text-on-surface font-semibold mb-1">
                  Strengthening Transformation Governance
                </h4>
                <p className="font-body text-[11px] text-on-surface-variant">
                  $10M+ EPP ROI Delivered • Digital Lead Orchestrator live.
                </p>
              </div>
              <div
                className="p-4 rounded-2xl bg-surface-container-low border border-primary/30 hover:border-primary hover:bg-white transition-all cursor-pointer group shadow-sm"
                onClick={() => onNavigatePillar('pillar-partnership')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary font-bold">PILLAR 02: PARTNERSHIP</span>
                  <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <h4 className="font-display text-sm text-on-surface font-semibold mb-1">
                  Scale &amp; Talent Enablement
                </h4>
                <p className="font-body text-[11px] text-on-surface-variant">
                  55,000+ Build with Gemini grads • 18,000 Frontier AI Engineers.
                </p>
              </div>
              <div
                className="p-4 rounded-2xl bg-surface-container-low border border-secondary/30 hover:border-secondary hover:bg-white transition-all cursor-pointer group shadow-sm"
                onClick={() => onNavigatePillar('pillar-delivery')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-secondary font-bold">PILLAR 03: DELIVERY HIGHLIGHTS</span>
                  <span className="material-symbols-outlined text-[16px] text-secondary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <h4 className="font-display text-sm text-on-surface font-semibold mb-1">
                  Operational Rigor &amp; Execution
                </h4>
                <p className="font-body text-[11px] text-on-surface-variant">
                  $26B+ Win TCV Supported • 99.3% C-SAT • 14% GCP Billing Savings.
                </p>
              </div>
              <div
                className="p-4 rounded-2xl bg-surface-container-low border border-tertiary/30 hover:border-tertiary hover:bg-white transition-all cursor-pointer group shadow-sm"
                onClick={() => onNavigatePillar('pillar-future')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tertiary font-bold">PILLAR 04: 2027 PRIORITY</span>
                  <span className="material-symbols-outlined text-[16px] text-tertiary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <h4 className="font-display text-sm text-on-surface font-semibold mb-1">
                  Driving Efficiency &amp; Amplifying Customer Experience
                </h4>
                <p className="font-body text-[11px] text-on-surface-variant">
                  Moving towards autonomous workflows across Support, Hub, GTM &amp; Partners.
                </p>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-outline-variant/30">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-mono text-xs border border-outline-variant/40 transition-colors"
                onClick={onCloseModal}
              >
                Close Hub
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-body text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5"
                onClick={() => onOpenModal('modal-connect-council')}
              >
                <span>Schedule Alliance Briefing</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Briefing Modal */}
      {activeModal === 'modal-briefing' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl border border-outline-variant/50 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                Executive Briefing Dossier
              </span>
              <button
                type="button"
                className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={onCloseModal}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <h3 className="font-display text-2xl text-on-surface font-bold">
              Google Cloud × Cognizant Strategic Synthesis
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Alliance portfolio overview spanning modern architecture, Gemini talent scalability,
              operational execution telemetry, and autonomous horizons across the 4 strategic
              pillars.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <button
                type="button"
                className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-google-blue transition-colors text-left cursor-pointer"
                onClick={() => onNavigatePillar('pillar-transformation')}
              >
                <span className="text-google-blue font-bold block">Pillar 01 Screen ↗</span>
                <span className="text-on-surface-variant text-[11px]">Transformation</span>
              </button>
              <button
                type="button"
                className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-primary transition-colors text-left cursor-pointer"
                onClick={() => onNavigatePillar('pillar-partnership')}
              >
                <span className="text-primary font-bold block">Pillar 02 Screen ↗</span>
                <span className="text-on-surface-variant text-[11px]">
                  Partnership
                </span>
              </button>
              <button
                type="button"
                className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-secondary transition-colors text-left cursor-pointer"
                onClick={() => onNavigatePillar('pillar-delivery')}
              >
                <span className="text-secondary font-bold block">Pillar 03 Screen ↗</span>
                <span className="text-on-surface-variant text-[11px]">Delivery Highlights</span>
              </button>
              <button
                type="button"
                className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-tertiary transition-colors text-left cursor-pointer"
                onClick={() => onNavigatePillar('pillar-future')}
              >
                <span className="text-tertiary font-bold block">Pillar 04 Screen ↗</span>
                <span className="text-on-surface-variant text-[11px]">2027 Priority</span>
              </button>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-mono text-xs border border-outline-variant/40 transition-colors"
                onClick={onCloseModal}
              >
                Dismiss Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Autonomous POV Modal (Slide 6 from Presentation) */}
      {activeModal === 'modal-autonomous' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-outline-variant/60 max-h-[94vh] overflow-y-auto text-left relative overflow-hidden">
            {/* Top 4-Color Google Bar */}
            <div className="grid grid-cols-4 h-1.5 w-full">
              <div className="bg-[#4285F4]"></div>
              <div className="bg-[#EA4335]"></div>
              <div className="bg-[#FBBC04]"></div>
              <div className="bg-[#34A853]"></div>
            </div>

            {/* Header Section */}
            <div className="px-5 sm:px-7 pt-5 pb-4 border-b border-outline-variant/50 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-[#E8F0FE] text-[#1A73E8] font-display text-xs font-bold uppercase tracking-wider">
                  2027 CLOUD SUPPORT VISION &amp; AI ROADMAP
                </div>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F1F1F] tracking-tight leading-tight">
                  Autonomous &amp; AI-Augmented End-to-End Case Lifecycle
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  Self-driving AI resolution (&gt;90% threshold) with smart proficiency routing,
                  live TSR co-piloting &amp; human-first guardrails
                </p>
              </div>

              <div className="flex items-start lg:items-center gap-3 shrink-0">
                <div className="px-5 py-2.5 rounded-xl bg-[#F4F8FE] border border-[#D2E3FC] text-center">
                  <div className="font-display text-[11px] font-bold text-[#1A73E8] uppercase tracking-wider">
                    EXECUTIVE TRANSFORMATION
                  </div>
                  <div className="font-display text-sm sm:text-base font-bold text-[#1F1F1F] mt-0.5">
                    Google Cloud × Cognizant
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close modal"
                  className="p-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                  onClick={onCloseModal}
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>
            </div>

            {/* Main Slide 6 Content: Left Lifecycle Architecture Diagram + Right Target ROI & Impact */}
            <div className="p-4 sm:p-6 bg-[#F8FAFD] grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              {/* Left 9 Columns: High-Res E2E Case Lifecycle Architecture Diagram from Slide 6 */}
              <div className="lg:col-span-9 bg-white rounded-2xl border border-[#D2E3FC] p-2 sm:p-3 shadow-sm flex items-center justify-center">
                <img
                  src="/slides/slide6-lifecycle-diagram.png"
                  alt="Autonomous & AI-Augmented End-to-End Case Lifecycle"
                  className="w-full h-auto max-h-[68vh] object-contain rounded-xl select-none"
                />
              </div>

              {/* Right 3 Columns: 2027 Target ROI & Impact */}
              <div className="lg:col-span-3 bg-white rounded-2xl border border-[#D2E3FC] p-3.5 shadow-sm flex flex-col justify-between space-y-3">
                <div className="bg-[#1A73E8] text-white rounded-xl py-2.5 px-3 text-center font-display text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm">
                  2027 TARGET ROI &amp; IMPACT
                </div>

                {/* KPI 1: 100% How-To Cases Resolved */}
                <div className="flex-1 rounded-2xl bg-[#F3FAF5] border border-[#A8DAB5] border-l-[6px] border-l-[#1E8E3E] p-3.5 flex flex-col justify-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#1E8E3E] leading-none">
                    100%
                  </div>
                  <div className="font-display text-xs sm:text-sm font-bold text-[#1F1F1F] mt-1.5">
                    How-To Cases Resolved
                  </div>
                  <p className="font-body text-[11px] sm:text-xs text-[#3C4043] mt-1 leading-relaxed">
                    All how-to &amp; procedural inquiries resolved end-to-end via AI
                  </p>
                </div>

                {/* KPI 2: 30% Resolved Without HITL */}
                <div className="flex-1 rounded-2xl bg-[#EEF4FF] border border-[#AECBFA] border-l-[6px] border-l-[#1A73E8] p-3.5 flex flex-col justify-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#1A73E8] leading-none">
                    30%
                  </div>
                  <div className="font-display text-xs sm:text-sm font-bold text-[#1F1F1F] mt-1.5">
                    Resolved Without HITL
                  </div>
                  <p className="font-body text-[11px] sm:text-xs text-[#3C4043] mt-1 leading-relaxed">
                    Of total cases resolved automatically without Human-in-the-Loop
                  </p>
                </div>

                {/* KPI 3: +25% First Touch Resolution */}
                <div className="flex-1 rounded-2xl bg-[#FFFDF5] border border-[#FDD663] border-l-[6px] border-l-[#E37400] p-3.5 flex flex-col justify-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#E37400] leading-none">
                    +25%
                  </div>
                  <div className="font-display text-xs sm:text-sm font-bold text-[#1F1F1F] mt-1.5">
                    First Touch Resolution
                  </div>
                  <p className="font-body text-[11px] sm:text-xs text-[#3C4043] mt-1 leading-relaxed">
                    Increase in First Touch Resolution via Mayfly &amp; Digital SME briefs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Sales Transformation Modal (Restored from Stitch screen 0c2c5bd15b6e4d0da94d137b4076b607 in M3 Light) */}
      {activeModal === 'modal-sales' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl border border-primary/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                Sales Transformation Council
              </span>
              <button
                type="button"
                className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={onCloseModal}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <h3 className="font-display text-2xl text-on-surface font-bold">
              $10B+ Pipeline Acceleration Engine
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Cognizant deployed internally engineered Google Cloud solutions (
              <strong className="text-on-surface font-semibold">RFP Acc</strong> and{' '}
              <strong className="text-on-surface font-semibold">PitchGen</strong>) to revolutionize
              its global deal qualification and proposal lifecycle.
            </p>
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 font-mono text-xs space-y-2">
              <div className="flex justify-between py-1.5 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Turnaround Velocity</span>
                <span className="text-secondary font-bold">Weeks → Hours (3.8x Faster)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Context Synthesis Engine</span>
                <span className="text-primary font-bold">Gemini 1.5 Pro Long-Context</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Pipeline Impact</span>
                <span className="text-on-surface font-bold">$10B+ Qualified TCV</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-on-surface-variant">Win-Rate Delta</span>
                <span className="text-tertiary font-bold">+18% over legacy baseline</span>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-mono text-xs border border-outline-variant/40 transition-colors"
                onClick={onCloseModal}
              >
                Dismiss
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-body text-xs font-semibold shadow-sm transition-all"
                onClick={() => onNavigatePillar('pillar-transformation')}
              >
                Open Transformation View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Managed Services Modal */}
      {activeModal === 'modal-managed-services' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl border border-tertiary/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-tertiary font-bold uppercase tracking-wider">
                Managed Services Telemetry
              </span>
              <button
                type="button"
                className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={onCloseModal}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <h3 className="font-display text-2xl text-on-surface font-bold">
              Cognizant Neuro™ SRE Framework
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Transitioning enterprise managed services from reactive ticket resolution to
              proactive, cognitive self-healing infrastructure. Joint services incorporate
              predictive anomaly detection and autonomous runbook remediation.
            </p>
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 font-mono text-xs space-y-2">
              <div className="flex justify-between py-1.5 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Availability SLA Guarantee</span>
                <span className="text-secondary font-bold">99.98% Sovereign</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Automated MTTR</span>
                <span className="text-primary font-bold">&lt; 4.2 Minutes (Auto-Healed)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-on-surface-variant">Continuous Compliance</span>
                <span className="text-tertiary font-bold">ISO 27001 &amp; SOC2 Type II</span>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-mono text-xs border border-outline-variant/40 transition-colors"
                onClick={onCloseModal}
              >
                Dismiss
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-tertiary hover:bg-tertiary/90 text-white font-body text-xs font-semibold shadow-sm transition-all"
                onClick={() => onNavigatePillar('pillar-delivery')}
              >
                Open Delivery Screen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Connect Council Modal */}
      {activeModal === 'modal-connect-council' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl border border-primary/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                Executive Alliance Council
              </span>
              <button
                type="button"
                className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={() => {
                  setConsultationConfirmed(false);
                  onCloseModal();
                }}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <h3 className="font-display text-2xl text-on-surface font-bold">
              Schedule Strategic Alignment Session
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Connect directly with Google Cloud Managing Directors and Cognizant Enterprise Fellows
              to map your organization&apos;s Agentic AI transformation trajectory.
            </p>
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 font-mono text-xs space-y-2">
              <div className="flex justify-between py-1">
                <span className="text-on-surface-variant">Primary Hub:</span>
                <span className="text-on-surface font-medium">
                  Google San Jose &amp; Cognizant Global Labs
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-on-surface-variant">Turnaround SLA:</span>
                <span className="text-secondary font-medium">Within 48 Business Hours</span>
              </div>
            </div>
            {consultationConfirmed && (
              <div className="p-3 rounded-xl bg-[#E6F4EA] border border-secondary/40 text-secondary font-mono text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>
                  Consultation request registered. An Alliance Director will contact you within 48
                  hours.
                </span>
              </div>
            )}
            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-mono text-xs border border-outline-variant/40 transition-colors"
                onClick={() => {
                  setConsultationConfirmed(false);
                  onCloseModal();
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-body text-xs font-semibold shadow-sm transition-all"
                onClick={() => setConsultationConfirmed(true)}
              >
                Confirm Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. Interactive Orchestrator Modal */}
      {activeModal === 'modal-orchestrator' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl border border-secondary/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-secondary font-bold uppercase tracking-wider">
                Digital Lead Telemetry Stack
              </span>
              <button
                type="button"
                className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={onCloseModal}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <h3 className="font-display text-2xl text-on-surface font-bold">
              Digital Lead Orchestrator
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Transitioning to E2E architecture leveraging GE anchored in Digital Lead as unified
              orchestrator to seamlessly auto connect point solutions (Digital SME, CORE, Crado,
              Mayfly, Elevate 360).
            </p>
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 font-mono text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Mesh Concurrency</span>
                <span className="text-secondary font-bold">12,480 req/s Active</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Auto-Sync Speed</span>
                <span className="text-on-surface font-bold">12.4 ms</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Guardrails Active</span>
                <span className="text-primary font-bold">Deterministic</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-on-surface-variant">Underlying Model</span>
                <span className="text-tertiary font-bold">Gemini 1.5 Pro</span>
              </div>
            </div>
            <div className="pt-2 flex justify-between items-center">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-mono text-xs border border-outline-variant/40 transition-colors"
                onClick={onCloseModal}
              >
                Dismiss
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-secondary text-white font-body text-xs font-semibold shadow-sm transition-all"
                onClick={() => onNavigatePillar('pillar-transformation')}
              >
                Open Transformation View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. Prioritization Framework Modal */}
      {activeModal === 'modal-prioritization-framework' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-5xl bg-surface-container-low rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl border border-outline-variant/60 max-h-[92vh] overflow-y-auto text-left">
            {/* Header Box with Dark Google Cloud Header banner style */}
            <div className="bg-[#002855] text-white p-6 sm:p-7 rounded-2xl relative overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white mb-2">
                    One weighted, risk-adjusted score decides which AI solutions we fund
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-[#D3E3FD] leading-relaxed">
                    GCP Support AI Solution Prioritization Framework: how every solution is scored,
                    risk-adjusted and tiered
                  </p>
                </div>
                <button
                  type="button"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                  onClick={onCloseModal}
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>
              <div className="h-1 bg-google-blue w-20 mt-4 rounded-full"></div>
            </div>

            {/* 3-Column Evaluation Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Column 1: 1. Score four parameters (1-5) (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="font-mono text-xs sm:text-sm font-bold text-google-blue mb-1">
                  1. Score four parameters (1–5)
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-[#002855] text-white flex items-center justify-center font-display text-2xl font-bold shrink-0">
                    30%
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-center">
                    <div className="font-display text-sm font-bold text-on-surface">
                      Value scale / ROI
                    </div>
                    <div className="font-body text-xs text-on-surface-variant mt-0.5">
                      Business value and payback speed
                    </div>
                  </div>
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-[#002855] text-white flex items-center justify-center font-display text-2xl font-bold shrink-0">
                    25%
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-center">
                    <div className="font-display text-sm font-bold text-on-surface">
                      Autonomous Potential
                    </div>
                    <div className="font-body text-xs text-on-surface-variant mt-0.5">
                      Share of workflow AI does end-to-end
                    </div>
                  </div>
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-[#002855] text-white flex items-center justify-center font-display text-2xl font-bold shrink-0">
                    25%
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-center">
                    <div className="font-display text-sm font-bold text-on-surface">
                      Development Feasibility &amp; Access
                    </div>
                    <div className="font-body text-xs text-on-surface-variant mt-0.5">
                      Tech readiness, data access, approvals
                    </div>
                  </div>
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-[#002855] text-white flex items-center justify-center font-display text-2xl font-bold shrink-0">
                    20%
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-center">
                    <div className="font-display text-sm font-bold text-on-surface">
                      Cross-applicability
                    </div>
                    <div className="font-body text-xs text-on-surface-variant mt-0.5">
                      Reuse across queues, products, LOBs
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: 2. Adjust for risk (3 cols) */}
              <div className="lg:col-span-3 space-y-3">
                <div className="font-mono text-xs sm:text-sm font-bold text-google-blue mb-1">
                  2. Adjust for risk
                </div>
                <div className="p-3.5 rounded-xl bg-[#E8F0FE] border border-google-blue/30 text-center flex flex-col justify-center min-h-[68px]">
                  <div className="font-display text-sm font-bold text-[#002855]">
                    Priority Score (/100)
                  </div>
                  <div className="font-body text-xs text-on-surface-variant mt-0.5">
                    Weighted score ÷ 5 × 100
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#E8F0FE] border border-google-blue/30 text-center flex flex-col justify-center min-h-[68px]">
                  <div className="font-display text-sm font-bold text-[#002855]">
                    × Confidence in the scores
                  </div>
                  <div className="font-body text-xs text-on-surface-variant mt-0.5">
                    High 1.0 · Medium 0.9 · Low 0.8
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#E8F0FE] border border-google-blue/30 text-center flex flex-col justify-center min-h-[68px]">
                  <div className="font-display text-sm font-bold text-[#002855]">
                    × Go-to-market probability
                  </div>
                  <div className="font-body text-xs text-on-surface-variant mt-0.5">
                    High 1.0 · Medium 0.9 · Low 0.8
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-google-blue text-white text-center flex flex-col justify-center min-h-[68px] shadow-sm">
                  <div className="font-display text-sm font-bold text-white">
                    = Final Adjusted Score
                  </div>
                  <div className="font-body text-xs text-white/90 mt-0.5">
                    Sets each solution’s tier and rank
                  </div>
                </div>
              </div>

              {/* Column 3: 3. Assign tier and action (4 cols) */}
              <div className="lg:col-span-4 space-y-3">
                <div className="font-mono text-xs sm:text-sm font-bold text-google-blue mb-1">
                  3. Assign tier and action
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-google-green text-white flex flex-col items-center justify-center font-display font-bold shrink-0 py-2.5">
                    <div className="text-lg leading-none">P1</div>
                    <div className="text-xs mt-0.5">≥ 75</div>
                  </div>
                  <div className="p-3.5 flex-1 flex items-center">
                    <span className="font-display text-sm font-bold text-on-surface">
                      Fund and staff now
                    </span>
                  </div>
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-[#FBBC05] text-white flex flex-col items-center justify-center font-display font-bold shrink-0 py-2.5">
                    <div className="text-lg leading-none">P2</div>
                    <div className="text-xs mt-0.5">≥ 60</div>
                  </div>
                  <div className="p-3.5 flex-1 flex items-center">
                    <span className="font-display text-sm font-bold text-on-surface">
                      Next-quarter pipeline
                    </span>
                  </div>
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-[#E37400] text-white flex flex-col items-center justify-center font-display font-bold shrink-0 py-2.5">
                    <div className="text-lg leading-none">P3</div>
                    <div className="text-xs mt-0.5">≥ 45</div>
                  </div>
                  <div className="p-3.5 flex-1 flex items-center">
                    <span className="font-display text-sm font-bold text-on-surface">
                      Backlog, review quarterly
                    </span>
                  </div>
                </div>
                <div className="flex items-stretch rounded-xl overflow-hidden border border-outline-variant/40 bg-white shadow-sm">
                  <div className="w-20 bg-[#EA4335] text-white flex flex-col items-center justify-center font-display font-bold shrink-0 py-2.5">
                    <div className="text-lg leading-none">Park</div>
                    <div className="text-xs mt-0.5">&lt; 45</div>
                  </div>
                  <div className="p-3.5 flex-1 flex items-center">
                    <span className="font-display text-sm font-bold text-on-surface">
                      Parked/Blocked
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution Archetypes Bottom Section */}
            <div className="pt-4 border-t border-outline-variant/40">
              <div className="font-mono text-xs sm:text-sm font-bold text-google-blue mb-3">
                Execution archetype: rule-based, evaluated left to right; the first rule met applies
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-center">
                <div className="p-4 rounded-xl bg-white border border-outline-variant/40 shadow-sm flex flex-col justify-between">
                  <div>
                    <h5 className="font-display text-sm font-bold text-on-surface">Gamechanger</h5>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-1">
                      Auto/ROI/Feas ≥ 4, GTM M/H
                    </p>
                  </div>
                  <div className="font-body text-xs text-google-blue font-semibold mt-3 pt-2 border-t border-outline-variant/30">
                    Flagship investment
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-outline-variant/40 shadow-sm flex flex-col justify-between">
                  <div>
                    <h5 className="font-display text-sm font-bold text-on-surface">Quick Win</h5>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-1">
                      ROI ≥ 4, Feas ≥ 4
                    </p>
                  </div>
                  <div className="font-body text-xs text-google-green font-semibold mt-3 pt-2 border-t border-outline-variant/30">
                    Fast-track execution
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-outline-variant/40 shadow-sm flex flex-col justify-between">
                  <div>
                    <h5 className="font-display text-sm font-bold text-on-surface">
                      Scalable Enabler
                    </h5>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-1">
                      Cross-app ≥ 4, Feas ≥ 4
                    </p>
                  </div>
                  <div className="font-body text-xs text-secondary font-semibold mt-3 pt-2 border-t border-outline-variant/30">
                    Reusable horizontal platform
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-outline-variant/40 shadow-sm flex flex-col justify-between">
                  <div>
                    <h5 className="font-display text-sm font-bold text-on-surface">
                      Future Horizon
                    </h5>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-1">
                      Auto/ROI ≥ 4, Feas &lt; 4
                    </p>
                  </div>
                  <div className="font-body text-xs text-tertiary font-semibold mt-3 pt-2 border-t border-outline-variant/30">
                    Invest in unblocking
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-outline-variant/40 shadow-sm flex flex-col justify-between col-span-1 sm:col-span-2 lg:col-span-1">
                  <div>
                    <h5 className="font-display text-sm font-bold text-on-surface">
                      Standard / Backlog
                    </h5>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-1">
                      All other solutions
                    </p>
                  </div>
                  <div className="font-body text-xs text-outline font-semibold mt-3 pt-2 border-t border-outline-variant/30">
                    Review quarterly
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-2 flex justify-between items-center border-t border-outline-variant/30">
              <span className="font-mono text-[11px] text-on-surface-variant">
                Google Cloud × Cognizant Enterprise Governance Matrix
              </span>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-mono text-xs border border-outline-variant/40 transition-colors"
                onClick={onCloseModal}
              >
                Close Matrix
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. Digital Lead In-App Popup Window Modal */}
      {activeModal === 'modal-digital-lead' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdrop}
        >
          <div className="w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl border border-outline-variant/60 flex flex-col overflow-hidden text-left relative">
            {/* Top 4-Color Google Bar */}
            <div className="grid grid-cols-4 h-1.5 w-full shrink-0">
              <div className="bg-[#4285F4]"></div>
              <div className="bg-[#EA4335]"></div>
              <div className="bg-[#FBBC04]"></div>
              <div className="bg-[#34A853]"></div>
            </div>

            {/* In-App Popup Window Header Bar */}
            <div className="px-4 sm:px-6 py-3 border-b border-outline-variant/50 bg-[#F8FAFD] flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#E8F0FE] text-google-blue flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">hub</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-sm sm:text-base font-bold text-on-surface leading-tight truncate">
                    Digital Lead — Unified Orchestrator
                  </h3>
                  <p className="font-mono text-[11px] text-on-surface-variant truncate">
                    https://digital-lead-733642921478.europe-west1.run.app/#asks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const url = 'https://digital-lead-733642921478.europe-west1.run.app/#asks';
                    const width = Math.min(1280, Math.round(window.screen.availWidth * 0.88));
                    const height = Math.min(860, Math.round(window.screen.availHeight * 0.86));
                    const screenLeft =
                      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
                    const screenTop =
                      window.screenTop !== undefined ? window.screenTop : window.screenY;
                    const outerW = window.outerWidth || window.screen.availWidth;
                    const outerH = window.outerHeight || window.screen.availHeight;
                    const left = Math.max(0, Math.round(screenLeft + (outerW - width) / 2));
                    const top = Math.max(0, Math.round(screenTop + (outerH - height) / 2));
                    window.open(
                      url,
                      'DigitalLeadPopupWindow',
                      `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
                    );
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E8F0FE] hover:bg-primary-container/70 text-google-blue font-mono text-xs font-semibold border border-primary/20 transition-colors cursor-pointer"
                >
                  <span>Open in New Tab</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </button>
                <button
                  type="button"
                  aria-label="Close modal"
                  className="p-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                  onClick={onCloseModal}
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>

            {/* Embedded Application Frame */}
            <div className="flex-1 w-full bg-[#F8FAFD] relative">
              <iframe
                src="https://digital-lead-733642921478.europe-west1.run.app/#asks"
                title="Digital Lead Unified Orchestrator"
                className="w-full h-full border-0 bg-white"
                allow="clipboard-read; clipboard-write"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
