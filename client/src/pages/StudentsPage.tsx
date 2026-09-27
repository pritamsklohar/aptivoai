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
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
          From Campus to Production
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          You don't need to know <span className="text-accent-blue">where</span> to start.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell Aptivo AI your target role and weekly hours. We build the exact trajectory from your current baseline to hired.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-semibold tracking-wide shadow-sm transition-all"
          >
            Generate Your Personalized Roadmap
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore 16-Week Roadmap" targetId="student-trajectory" />
      </section>

      {/* Concrete Student Scenario Walkthrough */}
      <section id="student-trajectory" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-8">
          {/* Scenario Banner */}
          <div className="p-6 rounded-[24px] border border-accent-blue/30 bg-accent-blue-soft/50 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs text-accent-blue font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md border border-accent-blue/20">
                Example Student Trajectory
              </span>
              <h2 className="text-2xl font-bold font-display text-ink">
                2nd-Year CSE Student → Full-Stack Developer
              </h2>
              <p className="text-sm text-ink/80 font-medium">
                Bandwidth: 8 hours/week · Target: Series B+ Software Engineering Role · Horizon: 16 Weeks
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="p-4 rounded-[20px] bg-white border border-border text-center shadow-sm min-w-[80px]">
                <div className="text-xl font-bold text-ink font-display">16</div>
                <div className="text-xs text-muted font-medium mt-1">Total Weeks</div>
              </div>
              <div className="p-4 rounded-[20px] bg-white border border-border text-center shadow-sm min-w-[80px]">
                <div className="text-xl font-bold text-accent-blue font-display">128</div>
                <div className="text-xs text-muted font-medium mt-1">Total Hours</div>
              </div>
            </div>
          </div>

          {/* Stepper Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CSE_ROADMAP_STEPS.map((s, idx) => (
              <button
                key={s.phase}
                onClick={() => setSelectedPhase(idx)}
                className={`p-4 rounded-[20px] border text-left transition-all ${
                  selectedPhase === idx
                    ? 'border-accent-blue bg-accent-blue-soft text-ink shadow-sm'
                    : 'border-border bg-white text-muted hover:text-ink hover:bg-surface-2'
                }`}
              >
                <div className={`text-[11px] font-mono font-bold mb-1.5 ${selectedPhase === idx ? 'text-accent-blue' : 'text-muted'}`}>
                  Phase {s.phase}
                </div>
                <div className="text-sm font-semibold truncate">
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive */}
          <div className="p-8 rounded-[24px] border border-border bg-white shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-accent-blue uppercase tracking-wider">Phase {CSE_ROADMAP_STEPS[selectedPhase].phase} · {CSE_ROADMAP_STEPS[selectedPhase].timeline}</span>
                <h3 className="text-2xl font-bold font-display text-ink mt-2">
                  {CSE_ROADMAP_STEPS[selectedPhase].title}
                </h3>
              </div>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 self-start sm:self-auto">
                {CSE_ROADMAP_STEPS[selectedPhase].proofPoint}
              </span>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-muted uppercase tracking-wider">Deliverables & Focus Areas:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {CSE_ROADMAP_STEPS[selectedPhase].topics.map((topic, i) => (
                  <div key={i} className="p-4 rounded-[20px] bg-surface border border-border text-sm text-ink font-medium flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0" />
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
