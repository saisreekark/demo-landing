import React from 'react';
import { ModalId, PageRoute } from '../data/showcaseData';

interface HeaderProps {
  activePage: PageRoute;
  onNavigatePage: (page: PageRoute) => void;
  onOpenModal?: (id: ModalId) => void;
}

const NAV_ITEMS: { page: PageRoute; code: string; label: string }[] = [
  { page: 'landing', code: '00', label: 'Overview' },
  { page: 'transformation', code: '01', label: 'Transformation' },
  { page: 'partnership', code: '02', label: 'Partnership' },
  { page: 'delivery', code: '03', label: 'Delivery Highlights' },
  { page: 'future', code: '04', label: '2027 Priority' },
];

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigatePage }) => {
  return (
    <header className="sticky top-0 z-50 w-full shrink-0 bg-white border-b-2 border-slate-900 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
      {/* Subtle 4-Color Google Institutional Top Strip */}
      <div className="grid grid-cols-4 h-[3px] w-full">
        <div className="bg-[#1A73E8]" />
        <div className="bg-[#D93025]" />
        <div className="bg-[#F29900]" />
        <div className="bg-[#188038]" />
      </div>

      <div className="w-full px-5 sm:px-8 lg:px-12 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Publication Masthead Lockup */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigatePage('landing');
          }}
          className="flex items-center gap-3 group select-none"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#0F2942] flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]">newspaper</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-slate-900">
                  Google Cloud
                </span>
                <span className="text-slate-400 text-xs font-light">×</span>
                <span className="font-serif font-semibold text-base sm:text-lg tracking-tight text-slate-700">
                  Cognizant
                </span>
              </div>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 mt-0.5">
                Executive Transformation Chronicle • Q4 2026 Edition
              </span>
            </div>
          </div>
        </a>

        {/* Right: Click-to-Switch Section Navigation Tabs */}
        <nav
          aria-label="Newsletter Section Navigation"
          className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded border border-slate-200 ml-auto"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.page;
            return (
              <a
                key={item.page}
                href={item.page === 'landing' ? '/' : `/${item.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePage(item.page);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F2942] text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white font-medium'
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? 'text-blue-200' : 'text-slate-400'
                  }`}
                >
                  {item.code}
                </span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
