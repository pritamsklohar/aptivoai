import React, { useState } from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface StudentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

const CSE_ROADMAP_STEPS = [
  {
    phase: '01',
    title: 'Foundation & Principles',
    timeline: 'Weeks 1–3',
    status: 'Completed',
    topics: ['Data Structures & Algorithmic Complexity', 'DOM manipulation & Event Loop mechanics', 'Git branching & Conventional Commits'],
    proofPoint: 'Diagnostic Score: 88%',
  },
  {
    phase: '02',
    title: 'Production Skills',
    timeline: 'Weeks 4–7',
    status: 'Completed',
    topics: ['React Component Architecture & Custom Hooks', 'Node.js Fastify REST & WebSocket endpoints', 'PostgreSQL schema modeling & ACID transactions'],
    proofPoint: '14 Pull Requests merged',
  },
  {
    phase: '03',
    title: 'Production Systems Project',
    timeline: 'Weeks 8–12',
    status: 'In Progress',
    topics: ['Real-time collaborative canvas with WebSockets', 'Redis caching layer & distributed rate limiter', 'Docker containerization & CI/CD deployment'],
    proofPoint: 'Current sprint: PR review in progress',
  },
  {
    phase: '04',
    title: 'Portfolio & Quantified Resume',
    timeline: 'Week 13',
    status: 'Upcoming',
    topics: ['ATS vector optimization with verified metrics', 'Interactive live demonstration architecture', 'Comprehensive documentation and system specs'],
    proofPoint: 'Target ATS rating: 95%+',
  },
  {
    phase: '05',
    title: 'Interview Readiness',
    timeline: 'Weeks 14–16',
    status: 'Upcoming',
    topics: ['Simulated company-specific live coding rounds', 'System design interview practice', 'Structured behavioral scenario simulations'],
    proofPoint: 'Target pass probability: 85%+',
  },
  {
    phase: '06',
    title: 'Direct Hiring Pipeline',
    timeline: 'Weeks 17+',
    status: 'Upcoming',
    topics: ['Direct routing to matched tech requisitions', 'Verified skill telemetry shared with engineering managers', 'Skip initial recruiter screening filters'],
    proofPoint: 'Direct Dispatch Enabled',
  },
];

export const StudentsPage: React.FC<StudentsPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [selectedPhase, setSelectedPhase] = useState(2);

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          From Campus to Production
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          You don't need to know where to start.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell Aptivo AI your target role and weekly hours. We build the exact trajectory from your current baseline to hired.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Generate Your Personalized Roadmap
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore 16-Week Roadmap" targetId="student-trajectory" />
      </section>

      {/* Concrete Student Scenario Walkthrough */}
      <section id="student-trajectory" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-8">
          {/* Scenario Banner */}
          <div className="p-6 rounded-xl border border-[#4C6FFF]/30 bg-[#11172A] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs text-[#8AA0FF] font-medium uppercase tracking-wider">
                Example Student Trajectory
              </span>
              <h2 className="text-xl font-bold font-display text-white">
                2nd-Year CSE Student → Full-Stack Developer
              </h2>
              <p className="text-xs text-slate-300">
                Bandwidth: 8 hours/week · Target: Series B+ Software Engineering Role · Horizon: 16 Weeks
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.06] text-center">
                <div className="text-lg font-bold text-white font-display">16</div>
                <div className="text-[10px] text-slate-400">Total Weeks</div>
              </div>
              <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.06] text-center">
                <div className="text-lg font-bold text-[#8AA0FF] font-display">128</div>
                <div className="text-[10px] text-slate-400">Total Hours</div>
              </div>
            </div>
          </div>

          {/* Stepper Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {CSE_ROADMAP_STEPS.map((s, idx) => (
              <button
                key={s.phase}
                onClick={() => setSelectedPhase(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPhase === idx
                    ? 'border-[#4C6FFF] bg-[#4C6FFF]/15 text-white shadow-sm'
                    : 'border-white/[0.06] bg-[#0E1220] text-slate-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-500 mb-1">
                  Phase {s.phase}
                </div>
                <div className="text-xs font-semibold truncate">
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0E1220] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
              <div>
                <span className="text-xs font-mono text-[#8AA0FF]">Phase {CSE_ROADMAP_STEPS[selectedPhase].phase} · {CSE_ROADMAP_STEPS[selectedPhase].timeline}</span>
                <h3 className="text-xl font-bold font-display text-white mt-0.5">
                  {CSE_ROADMAP_STEPS[selectedPhase].title}
                </h3>
              </div>
              <span className="text-xs text-emerald-400 font-medium self-start sm:self-auto">
                {CSE_ROADMAP_STEPS[selectedPhase].proofPoint}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-300">Deliverables & Focus Areas:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {CSE_ROADMAP_STEPS[selectedPhase].topics.map((topic, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
