import React from 'react';
import { PageId } from '../types';
import { FileText, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <FileText className="w-3.5 h-3.5 text-accent-blue" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-display text-ink tracking-tight">
            Terms of Service
          </h1>

          <p className="text-xs sm:text-sm text-muted">
            Last Updated: October 2026 · Governing all usage of Aptivo AI SaaS Products and Client Services
          </p>
        </div>

        {/* OVERVIEW */}
        <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-3 text-sm text-muted leading-relaxed font-normal shadow-sm">
          <h2 className="text-lg font-bold font-display text-ink">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website, software, and services provided by Aptivo AI ("Company", "we", or "us"), founded by Pritam Lohar, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must discontinue use immediately.
          </p>
        </div>

        {/* CLAUSES FOR SAAS PRODUCTS */}
        <div className="bg-surface rounded-[24px] border border-accent-blue/30 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-accent-blue font-bold text-xs uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Clauses Specific to SaaS Products (Aptivo Careers)</span>
          </div>
          <h2 className="text-xl font-bold font-display text-ink">2. SaaS Product Subscriptions & Platform Rules</h2>
          
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-ink">Subscription Plans & Billing:</strong> Access to paid tiers of Aptivo Careers is provided on a recurring subscription basis. Subscriptions renew automatically unless cancelled prior to the end of the current billing cycle.
            </p>
            <p>
              <strong className="text-ink">Academic & Code Integrity:</strong> Users agree to connect authentic source code repositories authored by themselves. Attempting to artificially manipulate AST code telemetry, submit plagiarized codebases, or spoof consistency heatmaps constitutes grounds for immediate account suspension.
            </p>
            <p>
              <strong className="text-ink">Readiness Score Disclaimer:</strong> The Aptivo Readiness Score is a calibrated mathematical index of candidate skill depth and preparation. While calibrated against real engineering hiring rubrics, it is an analytical indicator and does not represent a contractual guarantee of job placement or employment offer.
            </p>
          </div>
        </div>

        {/* CLAUSES FOR SERVICES */}
        <div className="bg-surface rounded-[24px] border border-border p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-muted font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-ink" />
            <span>Clauses Specific to Client Engineering Services</span>
          </div>
          <h2 className="text-xl font-bold font-display text-ink">3. Client Services, Delivery & IP Ownership</h2>
          
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-ink">Statements of Work & Estimates:</strong> All client engineering projects (websites, custom AI software, workflow automation) are executed under written Statements of Work (SOW) specifying milestone deliverables, acceptance criteria, and project fees.
            </p>
            <p>
              <strong className="text-ink">Full Intellectual Property Transfer:</strong> Upon receipt of full and final payment for agreed deliverables, Aptivo AI transfers 100% of the ownership of the custom code, architecture, and design assets to the client. Aptivo AI retains no residual licensing claims on custom client deliverables.
            </p>
            <p>
              <strong className="text-ink">Revision Cycles & Warranty:</strong> Each project phase includes two structured revision cycles as defined in the project scope. Post-launch deliverables include a 30-day warranty for the rectification of software defects resulting from deviations from the agreed specifications.
            </p>
          </div>
        </div>

        {/* LIMITATION OF LIABILITY */}
        <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-3 text-sm text-muted leading-relaxed font-normal shadow-sm">
          <h2 className="text-lg font-bold font-display text-ink">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Aptivo AI and its officers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platforms or services.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-surface-2 rounded-2xl border border-border p-6 text-center space-y-2 text-xs sm:text-sm text-muted">
          <p>
            Questions or inquiries regarding these Terms of Service can be sent to:
          </p>
          <p className="font-semibold text-ink">
            legal@aptivo.ai · Aptivo AI
          </p>
        </div>

      </div>
    </div>
  );
};
