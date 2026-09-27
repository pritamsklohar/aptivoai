import React from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface JobSeekersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

const CONVERSION_STAGES = [
  { step: '01', title: 'Profile Analysis', desc: 'Scan code repositories, commit telemetry, and past responsibilities to extract verified competence.' },
  { step: '02', title: 'Job Matching', desc: 'Benchmark against active enterprise requisitions using high-dimensional criteria matching.' },
  { step: '03', title: 'Gap Detection', desc: 'Isolate the 1–3 precise architectural deficiencies lowering your interview pass probability.' },
  { step: '04', title: 'Resume Optimization', desc: 'Re-engineer bullet points into quantified impact specifications that pass ATS scrutiny.' },
  { step: '05', title: 'Interview Preparation', desc: 'Run high-pressure mock evaluations tailored to target company engineering rubrics.' },
  { step: '06', title: 'Direct Application', desc: 'Direct dispatch to hiring managers with verified technical telemetry attached.' },
  { step: '07', title: 'Live Interviewing', desc: 'Execute live coding and system design rounds with verified confidence.' },
  { step: '08', title: 'Offer Execution', desc: 'Command senior compensation backed by proven, peer-reviewed engineering metrics.' },
];

export const JobSeekersPage: React.FC<JobSeekersPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
          Lateral Career Transition
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          Don't just apply. <span className="text-accent-blue">Prepare</span> to convert.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Mass-applying with a generic PDF yields a 2% callback rate. Aptivo AI turns your existing technical background into a calibrated, high-converting candidate profile.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-semibold tracking-wide shadow-sm transition-all"
          >
            Audit Your Candidate Profile
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View 8-Stage Pathway" targetId="conversion-pipeline" />
      </section>

      {/* 8-Stage Conversion Pipeline */}
      <section id="conversion-pipeline" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center mb-10 space-y-3">
          <div className="text-xs font-bold text-muted tracking-wider uppercase bg-surface px-3 py-1.5 rounded-full inline-block border border-border">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
            The Candidate-to-Offer Pathway
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONVERSION_STAGES.map((st) => (
            <div
              key={st.step}
              className="p-6 rounded-[24px] border border-border bg-white shadow-sm space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-accent-blue-soft border border-accent-blue/20 flex items-center justify-center text-xs font-bold text-accent-blue">
                {st.step}
              </div>

              <h3 className="text-base font-bold font-display text-ink">
                {st.title}
              </h3>

              <p className="text-sm text-ink/80 leading-relaxed font-medium">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Matching Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <span className="text-xs text-accent-blue font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md border border-accent-blue/20">Requisition Matching</span>
              <h3 className="text-2xl font-bold font-display text-ink mt-3">
                Live Opportunity Overlap Analysis
              </h3>
            </div>
            <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              Calibrated for Series B+ & Enterprise
            </div>
          </div>

          <div className="space-y-4">
            {[
              { role: 'Staff Infrastructure Engineer', match: 94, org: 'Autonomous Cloud Platform', salary: '$210k - $250k', gaps: 'Zero critical gaps detected' },
              { role: 'Senior Distributed Backend Engineer', match: 87, org: 'Fintech Payments Infrastructure', salary: '$185k - $220k', gaps: '1 gap in review: Distributed Consensus' },
              { role: 'Systems Reliability Architect', match: 81, org: 'High-Throughput Streaming Network', salary: '$175k - $210k', gaps: '2 gaps: Kernel bypass networking, eBPF' },
            ].map((j, i) => (
              <div key={i} className="p-5 rounded-[20px] border border-border bg-white shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-ink">{j.role}</h4>
                    <p className="text-sm text-muted font-medium mt-1">{j.org} · {j.salary}</p>
                  </div>
                  <span className="text-xs font-bold text-accent-blue bg-accent-blue-soft px-3 py-1.5 rounded-md border border-accent-blue/20 self-start sm:self-auto">
                    {j.match}% Alignment
                  </span>
                </div>
                <div className="text-xs text-ink/80 font-medium flex items-center gap-2 pt-3 border-t border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>{j.gaps}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
