import React from 'react';
import { PageId } from '../../types';
import { AptivoLogo } from '../common/AptivoLogo';
import { Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  currentPage?: PageId;
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-white text-muted pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus-visible:outline-2 focus-visible:outline-accent-blue rounded cursor-pointer"
              aria-label="Aptivo AI Home"
            >
              <AptivoLogo variant="lockup" size="md" />
            </button>
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-sm font-normal">
              Your Career, Engineered by AI.
            </p>
            <p className="text-xs text-muted/80 leading-relaxed max-w-sm">
              Aptivo AI builds AI-powered products for people and solutions for businesses. Founded by Pritam Lohar.
            </p>

            {/* Social Icons: LinkedIn only */}
            <div className="pt-2 flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/pritam-lohar"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-muted hover:text-ink hover:border-accent-blue/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-ink uppercase tracking-wider">
              Products
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-ink transition-colors cursor-pointer">
                  Products Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products/how-it-works')} className="hover:text-ink transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products/aptivo-careers')} className="hover:text-ink transition-colors cursor-pointer">
                  Aptivo Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products/pricing')} className="hover:text-ink transition-colors cursor-pointer">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products/help')} className="hover:text-ink transition-colors cursor-pointer">
                  Help Center
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products/contact')} className="hover:text-ink transition-colors cursor-pointer">
                  Product Support
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-ink uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-ink transition-colors cursor-pointer">
                  Services Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services/websites')} className="hover:text-ink transition-colors cursor-pointer">
                  Website Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services/software')} className="hover:text-ink transition-colors cursor-pointer">
                  Software & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services/process')} className="hover:text-ink transition-colors cursor-pointer">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services/work')} className="hover:text-ink transition-colors cursor-pointer">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services/quote')} className="hover:text-accent-blue font-semibold transition-colors cursor-pointer">
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-ink uppercase tracking-wider">
              Company
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('company')} className="hover:text-ink transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-ink transition-colors cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-ink transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-ink uppercase tracking-wider">
              Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-ink transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-ink transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © 2026 Aptivo AI. All rights reserved.
          </div>
          <div className="text-muted/80 text-[11px]">
            Designed with precision · Light Theme System
          </div>
        </div>
      </div>
    </footer>
  );
};
