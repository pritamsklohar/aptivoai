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
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Enterprise Talent Intelligence
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Hire beyond the resume.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Stop reviewing keyword-stuffed resumes and unverified claims. Discover engineering talent using verified code depth, PR quality, and calibrated readiness signals.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Deploy Enterprise Pilot
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View Hiring Funnel" targetId="employer-funnel" />
      </section>

      {/* Employer 7-Step Workflow */}
      <section id="employer-funnel" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Hiring Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Verified Talent Discovery Funnel
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {EMPLOYER_WORKFLOW.map((wf) => (
            <div
              key={wf.step}
              className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0C0F1A] space-y-1.5"
            >
              <div className="text-xs font-mono text-[#8AA0FF]">
                {wf.step}
              </div>
              <div className="text-xs font-semibold text-white">
                {wf.title}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {wf.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Talent Console Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#8AA0FF] font-medium">Enterprise Console</span>
              <h3 className="text-lg font-bold font-display text-white mt-0.5">
                Pre-Screened Engineering Cohort
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Verified Readiness ≥ 85%
            </div>
          </div>

          <div className="space-y-3">
            {[
              { id: 'Candidate #4029', role: 'Full-Stack Engineer', readiness: 92, verifiedStack: 'TypeScript, React, Node.js, Distributed Caching', prCoverage: '94% Test Coverage' },
              { id: 'Candidate #7118', role: 'Systems Backend Engineer', readiness: 89, verifiedStack: 'Go, Kafka, Docker, Postgres Indexing', prCoverage: '91% Concurrency Verification' },
              { id: 'Candidate #9420', role: 'Infrastructure SRE', readiness: 87, verifiedStack: 'Kubernetes, Terraform, AWS, Prometheus', prCoverage: 'Zero Production Incident History' },
            ].map((cand, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/[0.04] bg-[#080B14] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{cand.id} · {cand.role}</h4>
                    <p className="text-xs text-slate-400">{cand.verifiedStack}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    {cand.readiness}% Readiness Score
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-white/[0.04]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0" />
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
