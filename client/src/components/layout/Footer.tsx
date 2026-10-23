import React from 'react';
import { PageId } from '../../types';
import { AptivoLogo } from '../common/AptivoLogo';
import { Globe, ArrowUpRight } from 'lucide-react';
import { getPagePath } from '../../utils/seo';

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
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('home');
              }}
              className="text-left focus-visible:outline-2 focus-visible:outline-accent-blue rounded cursor-pointer inline-block"
              aria-label="Aptivo AI Home"
            >
              <AptivoLogo variant="lockup" size="md" />
            </a>
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
                href="https://www.linkedin.com/in/pritam-lohar"
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
                <a
                  href={getPagePath('products')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('products');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Products Home
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('how-it-works')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('how-it-works');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('products/aptivo-careers')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('products/aptivo-careers');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Aptivo Careers
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('products/pricing')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('products/pricing');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('products/help')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('products/help');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('products/contact')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('products/contact');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Product Support
                </a>
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
                <a
                  href={getPagePath('services')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Services Overview
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('services/websites')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services/websites');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Website Solutions
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('services/software')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services/software');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Software & Automation
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('services/process')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services/process');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('services/work')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services/work');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('services/quote')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services/quote');
                  }}
                  className="hover:text-accent-blue font-semibold transition-colors cursor-pointer block"
                >
                  Request a Quote
                </a>
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
                <a
                  href={getPagePath('company')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('company');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('careers')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('careers');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('contact')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Contact
                </a>
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
                <a
                  href={getPagePath('privacy')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('privacy');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={getPagePath('terms')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('terms');
                  }}
                  className="hover:text-ink transition-colors cursor-pointer block"
                >
                  Terms of Service
                </a>
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
