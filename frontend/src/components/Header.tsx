import React from 'react';
import { PageRoute } from '../data/showcaseData';

interface HeaderProps {
  activePage: PageRoute;
  onNavigatePage: (page: PageRoute) => void;
}

const NAV_ITEMS: { page: PageRoute; label: string }[] = [
  { page: 'landing', label: 'Overview' },
  { page: 'transformation', label: 'Transformation' },
  { page: 'partnership', label: 'Partnership' },
  { page: 'delivery', label: 'Delivery Highlights' },
  { page: 'future', label: '2027 Priority' },
];

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigatePage }) => {
  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-white/95 backdrop-blur-xl rounded-full px-5 py-2.5 flex items-center shadow-md border border-outline-variant/40 gap-6 justify-between">
        {/* Brand Lockup */}
        <a
          className="flex items-center gap-3 cursor-pointer group select-none"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigatePage('landing');
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-google-blue/10 flex items-center justify-center border border-google-blue/20 text-google-blue group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[18px]">cloud</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-sm tracking-tight text-on-surface">
                Google Cloud
              </span>
              <span className="text-outline-variant text-xs">×</span>
              <span className="font-display font-medium text-sm tracking-tight text-on-surface-variant">
                Cognizant
              </span>
            </div>
          </div>
        </a>

        {/* Executive Navigation Links (Text Only — No 01/02/03/04 prefixes) */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-container-low px-1.5 py-1 rounded-full border border-outline-variant/30 ml-auto">
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
                className={
                  isActive
                    ? 'px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold text-on-primary-container bg-primary-container shadow-sm transition-all cursor-pointer'
                    : 'px-3.5 py-1.5 rounded-full text-xs font-medium text-on-surface-variant hover:text-primary transition-all cursor-pointer'
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
