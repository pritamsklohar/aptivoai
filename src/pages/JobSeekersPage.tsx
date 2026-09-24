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
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Lateral Career Transition
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Don't just apply. Prepare to convert.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Mass-applying with a generic PDF yields a 2% callback rate. Aptivo AI turns your existing technical background into a calibrated, high-converting candidate profile.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Audit Your Candidate Profile
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View 8-Stage Pathway" targetId="conversion-pipeline" />
      </section>

      {/* 8-Stage Conversion Pipeline */}
      <section id="conversion-pipeline" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            The Candidate-to-Offer Pathway
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONVERSION_STAGES.map((st) => (
            <div
              key={st.step}
              className="p-5 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-2.5"
            >
              <span className="text-xs font-mono text-[#8AA0FF]">
                Step {st.step}
              </span>

              <h3 className="text-sm font-bold font-display text-white">
                {st.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Matching Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#8AA0FF] font-medium">Requisition Matching</span>
              <h3 className="text-lg font-bold font-display text-white mt-0.5">
                Live Opportunity Overlap Analysis
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Calibrated for Series B+ & Enterprise
            </div>
          </div>

          <div className="space-y-3">
            {[
              { role: 'Staff Infrastructure Engineer', match: 94, org: 'Autonomous Cloud Platform', salary: '$210k - $250k', gaps: 'Zero critical gaps detected' },
              { role: 'Senior Distributed Backend Engineer', match: 87, org: 'Fintech Payments Infrastructure', salary: '$185k - $220k', gaps: '1 gap in review: Distributed Consensus' },
              { role: 'Systems Reliability Architect', match: 81, org: 'High-Throughput Streaming Network', salary: '$175k - $210k', gaps: '2 gaps: Kernel bypass networking, eBPF' },
            ].map((j, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/[0.04] bg-[#080B14] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{j.role}</h4>
                    <p className="text-xs text-slate-400">{j.org} · {j.salary}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    {j.match}% Alignment
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-white/[0.04]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0" />
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
