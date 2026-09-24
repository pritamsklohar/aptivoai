import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const SKILLS_DATA = [
  { name: 'React & Component Architecture', level: 88, status: 'Strong' },
  { name: 'TypeScript & Type Safety', level: 84, status: 'Strong' },
  { name: 'Node.js & Concurrency', level: 75, status: 'Proficient' },
  { name: 'Database & Schema Modeling', level: 70, status: 'Proficient' },
  { name: 'Distributed System Design', level: 62, status: 'Focus Area' },
];

const ROADMAP_PHASES = [
  { name: 'Phase 01 — Foundation', status: 'Completed', date: 'Weeks 1–3', done: true },
  { name: 'Phase 02 — Production Skills', status: 'Completed', date: 'Weeks 4–7', done: true },
  { name: 'Phase 03 — System Projects', status: 'In Progress', date: 'Current Focus', active: true },
  { name: 'Phase 04 — Interview Readiness', status: 'Next', date: 'Upcoming', done: false },
];

export const DashboardPreviewSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/[0.06] bg-[#07090F] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Platform Interface
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Clear metrics. Actionable direction.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Every metric in your Aptivo AI dashboard is backed by actual code commits, project reviews, and calibrated interview rubrics.
          </p>
        </div>

        {/* Clean Dashboard Window */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0C0F1A] shadow-2xl overflow-hidden">
          {/* Top Browser Bar */}
          <div className="px-5 py-3.5 bg-[#090B12] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline">
                app.aptivo.ai/dashboard
              </span>
            </div>
            <div className="text-xs text-[#8AA0FF] font-medium">
              Live Profile
            </div>
          </div>

          {/* Internal Dashboard Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Stat Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-white/[0.06]">
              {/* Target Objective */}
              <div className="p-4 rounded-xl bg-[#101422] border border-white/[0.04]">
                <div className="text-xs text-slate-400">Target Role</div>
                <div className="text-base font-bold text-white mt-1">Full-Stack Engineer</div>
                <div className="text-xs text-[#8AA0FF] mt-0.5">High-Growth Tech & SaaS</div>
              </div>

              {/* Career Readiness */}
              <div className="p-4 rounded-xl bg-[#101422] border border-white/[0.04] flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Career Readiness</div>
                  <div className="text-2xl font-bold font-display text-white mt-1">72%</div>
                  <div className="text-xs text-emerald-400 mt-0.5">+14% this month</div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#4C6FFF] flex items-center justify-center font-bold text-xs text-white">
                  72%
                </div>
              </div>

              {/* Weekly Velocity */}
              <div className="p-4 rounded-xl bg-[#101422] border border-white/[0.04]">
                <div className="text-xs text-slate-400">Weekly Commitment</div>
                <div className="text-base font-bold text-white mt-1">11.4 / 12 hrs</div>
                <div className="text-xs text-slate-400 mt-0.5">On pace for hiring cycle</div>
              </div>
            </div>

            {/* AI Insight Note */}
            <div className="p-5 rounded-xl border border-[#4C6FFF]/30 bg-[#11172A] flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-[#8AA0FF] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#8AA0FF]">
                  AI Trajectory Assessment
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">
                  "You are strong in frontend development. Your largest current gap is backend system design."
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recommendation: Prioritize distributed event queues and database partitioning in your next sprint to reach the 85% benchmark.
                </p>
              </div>
            </div>

            {/* Skills & Roadmap Dual Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Left Column: Skills Breakdown */}
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Technical Competencies
                </div>

                <div className="space-y-3">
                  {SKILLS_DATA.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            skill.status === 'Focus Area' ? 'bg-[#8AA0FF]' : 'bg-[#4C6FFF]'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Roadmap Execution */}
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Adaptive Milestones
                </div>

                <div className="space-y-2.5">
                  {ROADMAP_PHASES.map((phase) => (
                    <div
                      key={phase.name}
                      className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                        phase.active
                          ? 'border-[#4C6FFF]/50 bg-[#4C6FFF]/10 text-white font-medium'
                          : phase.done
                          ? 'border-white/[0.06] bg-[#0E111C] text-slate-300'
                          : 'border-white/[0.04] bg-[#0A0C14] text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {phase.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <div className={`w-2 h-2 rounded-full ${phase.active ? 'bg-[#4C6FFF]' : 'bg-slate-600'}`} />
                        )}
                        <span>{phase.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{phase.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
