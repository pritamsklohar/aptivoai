import React, { useState } from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { Building2, CheckCircle2 } from 'lucide-react';

interface HrIndustryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

const EMPLOYER_WORKFLOW = [
  { step: '01', title: 'Create Role', desc: 'Define tech stack requirements, architectural scope, and seniority constraints.' },
  { step: '02', title: 'Criteria Mapping', desc: 'Aptivo maps job criteria into high-dimensional competency weights across 4,800+ nodes.' },
  { step: '03', title: 'Telemetry Search', desc: 'Scours verified candidate telemetry for mathematical and architectural overlap.' },
  { step: '04', title: 'Readiness Signals', desc: 'Review actual pull requests, code test coverage, and mock interview performance.' },
  { step: '05', title: 'Direct Invite', desc: 'One-click invite candidates who pass your verified threshold (e.g. 85%+ score).' },
  { step: '06', title: 'Technical Interview', desc: 'Skip low-signal phone screens; jump straight to technical debriefs and team fit.' },
  { step: '07', title: 'Deterministic Offer', desc: 'Make offers with calibrated confidence in hands-on technical execution.' },
];

export const HrIndustryPage: React.FC<HrIndustryPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
          Enterprise Talent Intelligence
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          Hire <span className="text-accent-blue">beyond</span> the resume.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Stop reviewing keyword-stuffed resumes and unverified claims. Discover engineering talent using verified code depth, PR quality, and calibrated readiness signals.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-semibold tracking-wide shadow-sm transition-all"
          >
            Deploy Enterprise Pilot
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View Hiring Funnel" targetId="employer-funnel" />
      </section>

      {/* Employer 7-Step Workflow */}
      <section id="employer-funnel" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center mb-10 space-y-3">
          <div className="text-xs font-bold text-muted tracking-wider uppercase bg-surface px-3 py-1.5 rounded-full inline-block border border-border">
            Hiring Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
            Verified Talent Discovery Funnel
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EMPLOYER_WORKFLOW.map((wf) => (
            <div
              key={wf.step}
              className="p-5 rounded-[24px] border border-border bg-white shadow-sm space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-accent-blue-soft border border-accent-blue/20 flex items-center justify-center text-xs font-bold text-accent-blue">
                {wf.step}
              </div>
              <div className="text-sm font-bold text-ink">
                {wf.title}
              </div>
              <p className="text-xs text-muted font-medium leading-relaxed">
                {wf.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Talent Console Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <span className="text-xs text-accent-orange font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md border border-accent-orange/20">Enterprise Console</span>
              <h3 className="text-2xl font-bold font-display text-ink mt-3">
                Pre-Screened Engineering Cohort
              </h3>
            </div>
            <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              Verified Readiness ≥ 85%
            </div>
          </div>

          <div className="space-y-4">
            {[
              { id: 'Candidate #4029', role: 'Full-Stack Engineer', readiness: 92, verifiedStack: 'TypeScript, React, Node.js, Distributed Caching', prCoverage: '94% Test Coverage' },
              { id: 'Candidate #7118', role: 'Systems Backend Engineer', readiness: 89, verifiedStack: 'Go, Kafka, Docker, Postgres Indexing', prCoverage: '91% Concurrency Verification' },
              { id: 'Candidate #9420', role: 'Infrastructure SRE', readiness: 87, verifiedStack: 'Kubernetes, Terraform, AWS, Prometheus', prCoverage: 'Zero Production Incident History' },
            ].map((cand, i) => (
              <div key={i} className="p-5 rounded-[20px] border border-border bg-white shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-ink">{cand.id} <span className="text-muted font-normal mx-1">·</span> {cand.role}</h4>
                    <p className="text-sm text-muted font-medium mt-1">{cand.verifiedStack}</p>
                  </div>
                  <span className="text-xs font-bold text-accent-blue bg-accent-blue-soft px-3 py-1.5 rounded-md border border-accent-blue/20 self-start sm:self-auto">
                    {cand.readiness}% Readiness Score
                  </span>
                </div>
                <div className="text-xs text-ink/80 font-medium flex items-center gap-2 pt-3 border-t border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>{cand.prCoverage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
