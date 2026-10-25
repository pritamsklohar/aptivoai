import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-blue" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-display text-ink tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-muted">
            Last Updated: October 2026 · Effective across Aptivo AI SaaS Products and Client Services
          </p>
        </div>

        {/* OVERVIEW */}
        <div className="glass-card rounded-[24px] border border-border/80 p-6 sm:p-8 space-y-3 text-sm text-muted leading-relaxed font-normal shadow-ambient">
          <h2 className="text-lg font-bold font-display text-ink">1. Overview & Scope</h2>
          <p>
            Aptivo AI ("we", "our", or "us"), founded by Pritam Lohar, operates two distinct business lines: SaaS Products (including Aptivo Careers) and Client Engineering Services. This Privacy Policy governs the collection, use, and disclosure of information across both domains.
          </p>
          <p>
            We adhere to strict data minimization principles. We do not sell user data, nor do we train public AI models on proprietary client code or individual student submissions.
          </p>
        </div>

        {/* SPECIFIC CLAUSES: PRODUCTS (SAAS) */}
        <div className="glass-card rounded-[24px] border border-accent-blue/30 p-6 sm:p-8 space-y-4 shadow-ambient">
          <div className="flex items-center gap-2 text-accent-blue font-bold text-xs uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Clauses Specific to SaaS Products (Aptivo Careers)</span>
          </div>
          <h2 className="text-xl font-bold font-display text-ink">2. Student & Candidate Data Telemetry</h2>
          
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-ink">Roadmap & Diagnostic Data:</strong> When you generate a personalized roadmap on Aptivo Careers, we store your selected target role, target companies, weekly time availability, and quiz answers solely to compute your trajectory.
            </p>
            <p>
              <strong className="text-ink">AST Code Analysis & Commits:</strong> When you connect a project repository for code telemetry verification, our Abstract Syntax Tree (AST) analyzers evaluate structure, modularity, and test coverage in ephemeral compute environments. Your private source code is never made public or used for training commercial foundation models.
            </p>
            <p>
              <strong className="text-ink">Public Portfolio Visibility:</strong> Your public portfolio page, consistency heatmap, and Readiness Score are private by default. A public URL is generated only upon your explicit action, and you can revoke public access at any moment.
            </p>
          </div>
        </div>

        {/* SPECIFIC CLAUSES: SERVICES (CLIENT ENGINEERING) */}
        <div className="glass-card rounded-[24px] border border-border/80 p-6 sm:p-8 space-y-4 shadow-ambient">
          <div className="flex items-center gap-2 text-muted font-bold text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4 text-ink" />
            <span>Clauses Specific to Client Engineering Services</span>
          </div>
          <h2 className="text-xl font-bold font-display text-ink">3. Enterprise & Client Confidentiality</h2>
          
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-ink">Mutual Non-Disclosure:</strong> All technical specifications, business requirements, architectural drafts, and budget figures shared via our "Request a Quote" form or discovery consultations are held in strict commercial confidence under mutual NDA.
            </p>
            <p>
              <strong className="text-ink">Client Data Isolation:</strong> In deploying custom AI software and automated pipelines, client data processed through API webhooks and database connectors is strictly isolated. We utilize enterprise LLM endpoints with zero-data-retention agreements.
            </p>
            <p>
              <strong className="text-ink">IP & Code Transfer:</strong> All custom code, database models, and deployment configurations created for your organization become your sole intellectual property upon final project settlement.
            </p>
          </div>
        </div>

        {/* DATA RETENTION & SECURITY */}
        <div className="glass-card rounded-[24px] border border-border/80 p-6 sm:p-8 space-y-3 text-sm text-muted leading-relaxed font-normal shadow-ambient">
          <h2 className="text-lg font-bold font-display text-ink">4. Security & Data Retention</h2>
          <p>
            We implement industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest) for all databases and communications. User accounts may request complete deletion of their profiles, roadmaps, and submissions at any time by contacting support.
          </p>
        </div>

        {/* CONTACT */}
        <div className="glass-card rounded-[20px] border border-border/80 p-6 text-center space-y-2 text-xs sm:text-sm text-muted shadow-ambient">
          <p>
            Questions or requests regarding this Privacy Policy may be directed to our data protection team:
          </p>
          <p className="font-semibold text-ink">
            privacy@aptivo.ai · Aptivo AI
          </p>
        </div>

      </div>
    </div>
  );
};
