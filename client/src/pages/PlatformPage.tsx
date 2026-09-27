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
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
          Unified Career Infrastructure
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          One platform for your <span className="text-accent-blue">entire</span> career trajectory.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
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
            className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Col: Module Description */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-muted uppercase tracking-wider">0{idx + 1} — {module.eyebrow}</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mt-2">
                  {module.title}
                </h2>
              </div>

              <p className="text-sm text-ink/80 leading-relaxed font-medium">
                {module.description}
              </p>

              <div className="space-y-3 pt-2">
                {module.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-3 text-sm text-ink font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenWaitlist(module.title)}
                  className="px-6 py-3 rounded-full bg-surface-2 hover:bg-border border border-border text-sm font-semibold text-ink flex items-center gap-2 transition-colors"
                >
                  <span>Request Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Col: Clean Module UI Mockup Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-[24px] border border-border bg-white shadow-sm p-6 sm:p-8 space-y-5">
                {/* 01: Career Intelligence Preview */}
                {module.mockupType === 'graph' && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Trajectory Target</div>
                        <div className="text-sm font-bold text-ink mt-1">Senior Distributed Backend Engineer</div>
                      </div>
                      <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                        94% Match
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-[20px] bg-surface border border-border">
                        <span className="text-[11px] text-muted font-bold uppercase block mb-1">Verified Stack</span>
                        <span className="text-ink font-bold">Go, Kafka, Docker, gRPC</span>
                      </div>
                      <div className="p-4 rounded-[20px] bg-surface border border-border">
                        <span className="text-[11px] text-muted font-bold uppercase block mb-1">Identified Gaps</span>
                        <span className="text-accent-blue font-bold">Raft Consensus, eBPF Tracing</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-[20px] bg-accent-blue-soft border border-accent-blue/20 text-sm text-ink/90">
                      <div className="text-accent-blue font-bold mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <span>AI Trajectory Assessment</span>
                      </div>
                      <p className="leading-relaxed font-medium">{module.aiFeedbackExample}</p>
                    </div>
                  </div>
                )}

                {/* 02: Build Engine Preview */}
                {module.mockupType === 'build' && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Automated Pull Request Review</div>
                        <div className="text-sm font-bold text-ink mt-1">Event-Driven Notification Broker</div>
                      </div>
                      <span className="text-xs text-accent-blue font-bold bg-accent-blue-soft px-3 py-1.5 rounded-full border border-accent-blue/20">
                        PR Evaluated
                      </span>
                    </div>

                    <div className="bg-surface p-4 rounded-[20px] font-mono text-xs text-ink/80 space-y-1.5 border border-border">
                      <div className="text-emerald-600">+ func (b *Broker) HandleDeadLetter(msg []byte) error</div>
                      <div className="text-emerald-600">+   return b.retryPolicy.Execute(context.Background(), msg)</div>
                      <div className="text-muted">// Test coverage: 91.4% with race detector enabled</div>
                    </div>

                    <div className="p-5 rounded-[20px] bg-accent-blue-soft border border-accent-blue/20 text-sm text-ink/90">
                      <div className="text-accent-blue font-bold mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        <span>Senior Code Reviewer Feedback</span>
                      </div>
                      <p className="leading-relaxed font-medium">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 03: Prepare Engine Preview */}
                {module.mockupType === 'prepare' && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Mock Technical Simulation</div>
                        <div className="text-sm font-bold text-ink mt-1">Global Distributed Rate Limiter</div>
                      </div>
                      <span className="text-xs text-accent-orange font-bold bg-accent-orange/10 px-3 py-1.5 rounded-full border border-accent-orange/20">
                        Rubric Evaluated
                      </span>
                    </div>

                    <div className="p-4 rounded-[20px] bg-surface border border-border text-sm space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted font-medium">Concurrency Architecture:</span>
                        <span className="text-ink font-bold">88/100</span>
                      </div>
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-accent-blue" style={{ width: '88%' }} />
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-muted font-medium">Distributed Synchronization:</span>
                        <span className="text-ink font-bold">92/100</span>
                      </div>
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-accent-blue" style={{ width: '92%' }} />
                      </div>
                    </div>

                    <div className="p-5 rounded-[20px] bg-accent-blue-soft border border-accent-blue/20 text-sm text-ink/90">
                      <div className="text-accent-blue font-bold mb-2 flex items-center gap-2">
                        <Mic className="w-4 h-4" />
                        <span>AI Interviewer Rubric Feedback</span>
                      </div>
                      <p className="leading-relaxed font-medium">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 04: Profile Optimization Preview */}
                {module.mockupType === 'profile' && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Resume Impact Analysis</div>
                        <div className="text-sm font-bold text-ink mt-1">Semantic ATS Parsing</div>
                      </div>
                      <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                        ATS Score 96/100
                      </span>
                    </div>

                    <div className="p-4 rounded-[20px] bg-surface border border-border text-sm space-y-3">
                      <div className="text-muted text-xs font-bold uppercase">Original Bullet:</div>
                      <div className="text-red-500 line-through bg-red-50 p-2 rounded-lg border border-red-100">"Worked on backend APIs and helped speed up queries."</div>
                      <div className="text-muted text-xs font-bold uppercase pt-2">Quantified Specification:</div>
                      <div className="text-emerald-700 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-100">"Re-architected query pipeline with multi-column composite indexing, reducing P99 latency from 420ms to 68ms."</div>
                    </div>

                    <div className="p-5 rounded-[20px] bg-accent-blue-soft border border-accent-blue/20 text-sm text-ink/90">
                      <div className="text-accent-blue font-bold mb-2 flex items-center gap-2">
                        <FileCheck className="w-4 h-4" />
                        <span>AI Impact Optimizer</span>
                      </div>
                      <p className="leading-relaxed font-medium">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 05: Discover / Job Matching Preview */}
                {module.mockupType === 'discover' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Direct Requisition Matching</div>
                        <div className="text-sm font-bold text-ink mt-1">Candidate Alignment</div>
                      </div>
                      <span className="text-xs text-accent-blue font-bold bg-accent-blue-soft px-3 py-1.5 rounded-full border border-accent-blue/20">85%+ Threshold</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { title: 'Distributed Systems Engineer', co: 'Cloud Infrastructure SaaS', score: '94% Match' },
                        { title: 'Core Platform Backend Engineer', co: 'Fintech Payments Unicorn', score: '87% Match' },
                        { title: 'Infrastructure SRE II', co: 'Real-time Telemetry Platform', score: '81% Match' },
                      ].map((j, i) => (
                        <div key={i} className="p-4 rounded-[20px] bg-surface border border-border flex items-center justify-between text-sm">
                          <div>
                            <div className="font-bold text-ink">{j.title}</div>
                            <div className="text-xs font-medium text-muted mt-1">{j.co}</div>
                          </div>
                          <span className="text-accent-blue font-bold bg-accent-blue-soft px-2 py-1 rounded-md">{j.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-[20px] bg-surface-2 border border-border text-sm text-ink/80 font-medium text-center">
                      Direct engineering review triggered without recruiter keyword screening.
                    </div>
                  </div>
                )}

                {/* 06: Employers Preview */}
                {module.mockupType === 'employer' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Enterprise Talent Console</div>
                        <div className="text-sm font-bold text-ink mt-1">Verified Engineering Cohort</div>
                      </div>
                      <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">14 Calibrated</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: 'Candidate #8841', stack: 'Go, Kafka, Distributed Caching', score: '92% Readiness' },
                        { name: 'Candidate #9102', stack: 'Rust, WebAssembly, Networking', score: '89% Readiness' },
                      ].map((c, i) => (
                        <div key={i} className="p-4 rounded-[20px] bg-surface border border-border flex items-center justify-between text-sm">
                          <div>
                            <div className="font-bold text-ink">{c.name}</div>
                            <div className="text-xs font-medium text-muted mt-1">{c.stack}</div>
                          </div>
                          <span className="text-accent-blue font-bold bg-accent-blue-soft px-2 py-1 rounded-md">{c.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-[20px] bg-accent-blue-soft border border-accent-blue/20 text-sm text-ink font-medium flex items-center gap-3">
                      <Building className="w-5 h-5 text-accent-blue shrink-0" />
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
