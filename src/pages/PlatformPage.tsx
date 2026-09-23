import React, { useState } from 'react';
import { PageId } from '../types';
import { PLATFORM_MODULES } from '../data/contentData';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code,
  Mic,
  FileCheck,
  Building,
} from 'lucide-react';

interface PlatformPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate, onOpenWaitlist }) => {

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-24">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Unified Career Infrastructure
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          One platform for your entire career trajectory.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          From diagnosing baseline competencies to verifying production pull requests, mastering technical interviews, and routing directly to hiring teams.
        </p>



        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Modules" targetId="platform-modules" />
      </section>

      {/* Deep-Dive on 6 Modules */}
      <section id="platform-modules" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {PLATFORM_MODULES.map((module, idx) => (
          <div
            key={module.id}
            id={module.id}
            className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0A0D18] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Col: Module Description */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-medium text-[#8AA0FF]">0{idx + 1} — {module.eyebrow}</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                  {module.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {module.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {module.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#8AA0FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWaitlist(module.title)}
                  className="px-5 py-2.5 rounded-lg bg-[#141828] hover:bg-[#4C6FFF] border border-white/[0.08] text-xs font-medium text-white flex items-center gap-2 transition-colors"
                >
                  <span>Request Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Col: Clean Module UI Mockup Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-white/[0.08] bg-[#0E1220] p-6 space-y-4">
                {/* 01: Career Intelligence Preview */}
                {module.mockupType === 'graph' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Trajectory Target</div>
                        <div className="text-sm font-semibold text-white">Senior Distributed Backend Engineer</div>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">
                        94% Match
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04]">
                        <span className="text-[11px] text-slate-400 block mb-0.5">Verified Stack</span>
                        <span className="text-white font-medium">Go, Kafka, Docker, gRPC</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04]">
                        <span className="text-[11px] text-slate-400 block mb-0.5">Identified Gaps</span>
                        <span className="text-[#8AA0FF] font-medium">Raft Consensus, eBPF Tracing</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-slate-200">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI Trajectory Assessment</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{module.aiFeedbackExample}</p>
                    </div>
                  </div>
                )}

                {/* 02: Build Engine Preview */}
                {module.mockupType === 'build' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Automated Pull Request Review</div>
                        <div className="text-sm font-semibold text-white">Event-Driven Notification Broker</div>
                      </div>
                      <span className="text-xs text-[#8AA0FF] font-medium">
                        PR Evaluated
                      </span>
                    </div>

                    <div className="bg-[#080B14] p-3 rounded-lg font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="text-emerald-400">+ func (b *Broker) HandleDeadLetter(msg []byte) error</div>
                      <div className="text-emerald-400">+   return b.retryPolicy.Execute(context.Background(), msg)</div>
                      <div className="text-slate-500">// Test coverage: 91.4% with race detector enabled</div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-white">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5" />
                        <span>Senior Code Reviewer Feedback</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 03: Prepare Engine Preview */}
                {module.mockupType === 'prepare' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Mock Technical Simulation</div>
                        <div className="text-sm font-semibold text-white">Global Distributed Rate Limiter</div>
                      </div>
                      <span className="text-xs text-amber-400 font-medium">
                        Rubric Evaluated
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Concurrency Architecture:</span>
                        <span className="text-white font-medium">88/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Distributed Synchronization:</span>
                        <span className="text-white font-medium">92/100</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-white">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <Mic className="w-3.5 h-3.5" />
                        <span>AI Interviewer Rubric Feedback</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 04: Profile Optimization Preview */}
                {module.mockupType === 'profile' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Resume Impact Analysis</div>
                        <div className="text-sm font-semibold text-white">Semantic ATS Parsing</div>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">
                        ATS Score 96/100
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs space-y-2">
                      <div className="text-slate-400 text-[11px]">Original Bullet:</div>
                      <div className="text-red-400 line-through">"Worked on backend APIs and helped speed up queries."</div>
                      <div className="text-slate-400 text-[11px] pt-1">Quantified Specification:</div>
                      <div className="text-emerald-300">"Re-architected query pipeline with multi-column composite indexing, reducing P99 latency from 420ms to 68ms."</div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-white">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>AI Impact Optimizer</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 05: Discover / Job Matching Preview */}
                {module.mockupType === 'discover' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Direct Requisition Matching</div>
                        <div className="text-sm font-semibold text-white">Candidate Alignment</div>
                      </div>
                      <span className="text-xs text-[#8AA0FF] font-medium">85%+ Threshold</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { title: 'Distributed Systems Engineer', co: 'Cloud Infrastructure SaaS', score: '94% Match' },
                        { title: 'Core Platform Backend Engineer', co: 'Fintech Payments Unicorn', score: '87% Match' },
                        { title: 'Infrastructure SRE II', co: 'Real-time Telemetry Platform', score: '81% Match' },
                      ].map((j, i) => (
                        <div key={i} className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] flex items-center justify-between text-xs">
                          <div>
                            <div className="font-semibold text-white">{j.title}</div>
                            <div className="text-[11px] text-slate-400">{j.co}</div>
                          </div>
                          <span className="text-[#8AA0FF] font-medium">{j.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-slate-300">
                      Direct engineering review triggered without recruiter keyword screening.
                    </div>
                  </div>
                )}

                {/* 06: Employers Preview */}
                {module.mockupType === 'employer' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Enterprise Talent Console</div>
                        <div className="text-sm font-semibold text-white">Verified Engineering Cohort</div>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">14 Calibrated</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: 'Candidate #8841', stack: 'Go, Kafka, Distributed Caching', score: '92% Readiness' },
                        { name: 'Candidate #9102', stack: 'Rust, WebAssembly, Networking', score: '89% Readiness' },
                      ].map((c, i) => (
                        <div key={i} className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] flex items-center justify-between text-xs">
                          <div>
                            <div className="font-semibold text-white">{c.name}</div>
                            <div className="text-[11px] text-slate-400">{c.stack}</div>
                          </div>
                          <span className="text-[#8AA0FF] font-medium">{c.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-slate-300 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#8AA0FF] shrink-0" />
                      <span>Candidates evaluated by automated test depth and architectural rubrics.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
