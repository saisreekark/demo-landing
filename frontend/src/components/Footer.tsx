import React from 'react';
import { ModalId, PageRoute } from '../data/showcaseData';

interface FooterProps {
  onNavigatePage: (page: PageRoute) => void;
  onOpenModal?: (id: ModalId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage, onOpenModal }) => {
  return (
    <footer className="w-full border-t-2 border-slate-900 bg-[#F8FAFC] mt-8 pt-8 pb-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          {/* Colophon Brand & Statement */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#0F2942] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[14px]">newspaper</span>
              </div>
              <span className="font-serif font-bold text-base text-slate-900">
                Google Cloud × Cognizant
              </span>
              <span className="text-slate-300">|</span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                Executive Transformation Chronicle
              </span>
            </div>
            <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-md">
              Building sovereign enterprise capabilities, scaling Agentic AI solutions, delivering
              validated EPP ROI, and shaping the future of autonomous cloud workflows.
            </p>
          </div>

          {/* Section Directory */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900">
              Issue Sections
            </div>
            <ul className="space-y-1.5 font-sans text-xs text-slate-600">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePage('landing');
                  }}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer"
                >
                  00. Executive Summary
                </a>
              </li>
              <li>
                <a
                  href="/transformation"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePage('transformation');
                  }}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer"
                >
                  01. Transformation Highlights
                </a>
              </li>
              <li>
                <a
                  href="/partnership"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePage('partnership');
                  }}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer"
                >
                  02. Partnership Highlights
                </a>
              </li>
              <li>
                <a
                  href="/delivery"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePage('delivery');
                  }}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer"
                >
                  03. Delivery Highlights
                </a>
              </li>
              <li>
                <a
                  href="/future"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePage('future');
                  }}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer"
                >
                  04. 2027 Priority
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Dossiers */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-900">
              Reference Dossiers
            </div>
            <ul className="space-y-1.5 font-sans text-xs text-slate-600">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('modal-autonomous')}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer text-left"
                >
                  Autonomous POV (Slide 6) ↗
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('modal-prioritization-framework')}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer text-left"
                >
                  Prioritization Framework (Slide 7) ↗
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('modal-digital-lead')}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer text-left"
                >
                  Digital Lead Orchestrator ↗
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('modal-ecosystem')}
                  className="hover:text-[#0B57D0] transition-colors cursor-pointer text-left"
                >
                  Executive Ecosystem Hub ↗
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-slate-500">
          <div>
            GOOGLE CLOUD × COGNIZANT STRATEGIC ALLIANCE • EXECUTIVE BRIEFING EDITION
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 text-slate-700 hover:text-[#0B57D0] font-semibold cursor-pointer no-print"
          >
            <span>Return to Top of Issue</span>
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
