import React from 'react';
import { PageRoute } from '../data/showcaseData';

interface FooterProps {
  onNavigatePage: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  return (
    <footer className="w-full border-t border-outline-variant/40 bg-white/90 backdrop-blur-md py-2 px-4 sm:px-6 lg:px-10 shrink-0 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-on-surface-variant">
        <div className="flex items-center gap-2.5">
          <span className="text-on-surface font-display font-semibold text-xs">
            Google Cloud × Cognizant
          </span>
          <span className="text-outline-variant">•</span>
          <span>Executive Digital Showcase (Material 3 Light)</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-on-surface transition-colors cursor-pointer font-medium"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePage('landing');
            }}
          >
            Overview
          </a>
          <a
            className="hover:text-google-blue transition-colors cursor-pointer font-medium"
            href="/transformation"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePage('transformation');
            }}
          >
            Transformation
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer font-medium"
            href="/partnership"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePage('partnership');
            }}
          >
            Partnership
          </a>
          <a
            className="hover:text-tertiary transition-colors cursor-pointer font-medium"
            href="/delivery"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePage('delivery');
            }}
          >
            Delivery Highlights
          </a>
          <a
            className="hover:text-secondary transition-colors cursor-pointer font-medium"
            href="/future"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePage('future');
            }}
          >
            2027 Priority
          </a>
        </div>
      </div>
    </footer>
  );
};
