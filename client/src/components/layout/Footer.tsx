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

            {/* Social Icons: Instagram only */}
            <div className="pt-2 flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-muted hover:text-ink hover:border-accent-blue/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
