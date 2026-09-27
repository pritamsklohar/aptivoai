import React from 'react';
import { PageId } from '../../types';
import { AptivoLogo } from '../common/AptivoLogo';
import { Briefcase, MessageCircle, Code } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWaitlist }) => {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg text-muted relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none cursor-pointer"
              aria-label="Aptivo AI Home"
            >
              <AptivoLogo variant="full" size="md" showTagline={true} glow={true} />
            </button>

            <p className="text-xs text-muted leading-relaxed max-w-sm pt-2">
              Autonomous career computation infrastructure connecting goals, skills, projects, and opportunities.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/aptivo-ai"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-muted hover:text-ink hover:border-accent-blue/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Briefcase className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-ink uppercase tracking-wider">
              Platform
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-ink transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('ai-engine')} className="hover:text-ink transition-colors">
                  AI Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-ink transition-colors">
                  Build Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-ink transition-colors">
                  Interview Prep
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-ink uppercase tracking-wider">
              Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('students')} className="hover:text-ink transition-colors">
                  Students
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('job-seekers')} className="hover:text-ink transition-colors">
                  Job Seekers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-ink transition-colors">
                  Colleges
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('hr-industry')} className="hover:text-ink transition-colors">
                  Companies
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-ink uppercase tracking-wider">
              Company
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('company')} className="hover:text-ink transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('company')} className="hover:text-ink transition-colors">
                  Founder
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-ink transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-ink transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-ink uppercase tracking-wider">
              Resources
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-ink transition-colors">
                  Research & Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-ink transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={onOpenWaitlist} className="hover:text-ink transition-colors text-[#8AA0FF]">
                  Early Access
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © 2026 Aptivo AI Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Aptivo AI protects candidate data with strict zero-retention encryption."); }} className="hover:text-ink/80">
              Privacy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: Candidate and enterprise data use complies with SOC2 standards."); }} className="hover:text-ink/80">
              Terms
            </a>
            <span>SOC2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
