import React, { useState } from 'react';
import { PageId } from '../../types';
import { ArrowRight, ChevronRight, Star, Sparkles, Target, TrendingUp, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'roadmap'>('overview');

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-bg">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.06] pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-accent-blue) 0%, rgba(37,99,235,0.3) 60%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="max-w-2xl">
            {/* High-Craft Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue-soft/90 border border-accent-blue/25 text-accent-blue text-xs font-semibold mb-6 shadow-xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-subtle-pulse" />
              <span>Aptivo Intelligence Engine 2.4</span>
              <span className="text-accent-blue/40 font-light">•</span>
              <span className="text-ink/70 font-medium">Now in Early Access</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-bold font-display tracking-[-0.03em] text-ink leading-[1.08]">
              Enhance Your <span className="text-accent-blue">Career Journey</span> with AI
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl font-normal leading-relaxed">
              Aptivo AI connects your goals, skills, projects, resume, interviews, and opportunities into one coherent, adaptive career system.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenWaitlist()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/95 text-white text-base font-semibold flex items-center justify-center gap-2.5 transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] shadow-ambient inner-highlight hover:shadow-accent-blue/25 cursor-pointer group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>
              
              <button
                onClick={() => onNavigate('how-it-works')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-surface-2 hover:bg-border/80 text-ink text-base font-semibold flex items-center justify-center gap-2 transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] border border-border/60 cursor-pointer group"
              >
                <span>See How It Works</span>
                <ChevronRight className="w-4 h-4 text-muted transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>
            </div>
            
            {/* Trusted By Strip */}
            <div className="mt-16 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <span className="text-xs font-semibold text-muted tracking-wide uppercase">Trusted by candidates targeting</span>
              <div className="flex items-center gap-6 opacity-75 font-display font-bold text-sm tracking-tight text-ink/70">
                <span className="hover:text-accent-blue transition-colors">MAANG</span>
                <span className="text-border">•</span>
                <span className="hover:text-accent-blue transition-colors">FORTUNE 500</span>
                <span className="text-border">•</span>
                <span className="hover:text-accent-blue transition-colors">AI UNICORNS</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Live Interactive Product Showcase Card */}
          <div className="relative w-full aspect-auto max-w-[560px] mx-auto lg:max-w-none flex items-center justify-center">
            
            {/* Soft Ambient Radial Blur */}
            <div 
              className="absolute inset-0 rounded-[36px] opacity-40 blur-3xl pointer-events-none" 
              style={{ background: 'linear-gradient(135deg, rgba(245,148,28,0.2) 0%, transparent 40%, rgba(59,91,255,0.25) 100%)' }} 
            />
                 
            {/* Main Interactive Product Card */}
            <div className="relative z-10 w-full glass-card rounded-[28px] overflow-hidden shadow-ambient-lg border border-border/90">
              
              {/* Window Header */}
              <div className="h-12 bg-white/80 border-b border-border/70 flex items-center justify-between px-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                  <span className="ml-2 text-xs font-semibold text-muted font-mono tracking-tight">aptivo.copilot / graph-v2</span>
                </div>
                
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-subtle-pulse" />
                  <span>Sync Active</span>
                </div>
              </div>

              {/* Card Interactive Content */}
              <div className="p-6 bg-gradient-to-b from-white/90 to-surface/40 space-y-5">
                
                {/* User Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue font-bold text-sm">
                      AI
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink flex items-center gap-1.5">
                        <span>Target: Full-Stack AI Engineer</span>
                        <ShieldCheck className="w-4 h-4 text-accent-blue" />
                      </div>
                      <p className="text-xs text-muted">Tier 1 Readiness Model • 94% Match</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold font-display text-accent-blue leading-none">94%</span>
                    <span className="block text-[10px] uppercase font-semibold text-muted tracking-wider">Score</span>
                  </div>
                </div>

                {/* Interactive Navigation Pills */}
                <div className="flex items-center gap-1.5 p-1 bg-surface-2/80 rounded-xl border border-border/60 text-xs font-semibold">
                  {(['overview', 'skills', 'roadmap'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-1.5 rounded-lg text-center capitalize transition-[background-color,color,box-shadow] duration-150 cursor-pointer ${
                        activeTab === tab
                          ? 'bg-white text-ink shadow-xs font-bold border border-border/40'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Dynamic Tab Panel */}
                {activeTab === 'overview' && (
                  <div className="space-y-3.5">
                    {/* Live Metric Row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-white border border-border/70 shadow-xs">
                        <div className="flex items-center justify-between text-xs text-muted mb-1">
                          <span>Interview Readiness</span>
                          <TrendingUp className="w-3.5 h-3.5 text-accent-blue" />
                        </div>
                        <div className="text-lg font-bold font-display text-ink">Level 4.8 / 5.0</div>
                        <div className="mt-2 h-1.5 w-full bg-surface-2 rounded-full overflow-hidden">
                          <div className="h-full bg-accent-blue rounded-full" style={{ width: '92%' }} />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-border/70 shadow-xs">
                        <div className="flex items-center justify-between text-xs text-muted mb-1">
                          <span>Verified Skill Depth</span>
                          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                        </div>
                        <div className="text-lg font-bold font-display text-ink">18 Key Signals</div>
                        <div className="mt-2 h-1.5 w-full bg-surface-2 rounded-full overflow-hidden">
                          <div className="h-full bg-accent-blue rounded-full" style={{ width: '88%' }} />
                        </div>
                      </div>
                    </div>

                    {/* Next Action Milestone */}
                    <div className="p-3.5 rounded-2xl bg-accent-blue-soft/50 border border-accent-blue/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-accent-blue text-white flex items-center justify-center shrink-0">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-ink">Upcoming: AI Mock Interview</p>
                          <p className="text-[11px] text-muted">Adaptive System Architecture Round</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-accent-blue bg-white/90 px-2.5 py-1 rounded-full border border-accent-blue/20">
                        Today
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="p-3.5 bg-white rounded-2xl border border-border/70 space-y-2.5">
                    <p className="text-xs font-bold text-ink">Competency Alignment</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'System Design', score: '96%' },
                        { label: 'LLM Orchestration', score: '94%' },
                        { label: 'React / TypeScript', score: '98%' },
                        { label: 'Distributed Systems', score: '91%' },
                      ].map((item) => (
                        <span key={item.label} className="px-2.5 py-1 rounded-full bg-surface border border-border text-[11px] font-semibold text-ink flex items-center gap-1.5">
                          <span>{item.label}</span>
                          <span className="text-accent-blue font-bold">{item.score}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'roadmap' && (
                  <div className="p-3.5 bg-white rounded-2xl border border-border/70 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Stage 1: Portfolio & Resume Synthesized</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-blue font-semibold">
                      <Target className="w-4 h-4" />
                      <span>Stage 2: Technical Deep-Dive Readiness</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
            
            {/* Floating Badges with Emil Kowalski Glass & Lift */}
            <div className="absolute -top-4 -left-4 sm:-left-6 z-20 glass-pill px-4 py-2.5 shadow-ambient flex items-center gap-2.5 hover-lift cursor-default animate-scroll-bob" style={{ animationDelay: '0s' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-subtle-pulse" />
              <span className="text-xs font-bold text-ink">AI Roadmap Ready</span>
            </div>
            
            <div className="absolute bottom-6 -right-3 sm:-right-6 z-20 glass-pill px-4 py-2.5 shadow-ambient flex items-center gap-2.5 hover-lift cursor-default animate-scroll-bob" style={{ animationDelay: '1.2s' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-subtle-pulse" />
              <span className="text-xs font-bold text-ink">3 Companies Matched</span>
            </div>
            
            <div className="absolute -bottom-6 left-1/3 z-20 glass-pill px-4 py-2 shadow-ambient flex items-center gap-2 hover-lift cursor-default animate-scroll-bob" style={{ animationDelay: '2.4s' }}>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-accent-blue text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">A</div>
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">P</div>
                <div className="w-6 h-6 rounded-full bg-ink text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">T</div>
              </div>
              <span className="text-xs font-bold text-ink ml-1">12K+ Verified Users</span>
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};
